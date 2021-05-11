"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Tutores, Tutorias, Tutoria_Contratada
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)


# config for jwt
#app.config["JWT_SECRET_KEY"] = "super-secret"
#jwt = JWTManager(app)

@api.route('/user', methods=['GET', 'POST'])
def user_pva():
    if request.method == 'GET':
        gt_get_user = User.query.all()
        all_user = list(map(lambda x: x.serialize_user(), gt_get_user))
        return jsonify(all_user), 200
    elif request.method == 'POST':
        request_body = request.get_json()
        for i in request_body: 
            insert_user = User(
                           email=i["email"],
                           user_id=i["user_id"],
                           user_name=i["user_name"],
                           user_lastname=i["user_lastname"],
                           birthday=i["birthday"],
                           imagen=i["imagen"],
                           password=i["password"],
                           is_active=i["is_active"],
                           direction=i["direction"],
                           gender=i["gender"])
        print(insert_user)
        db.session.add(insert_user)
        db.session.commit()
        # return jsonify({"Todo ok" : request_body }), 200
        return jsonify({"msg": "hello"}), 200

@api.route('/login', methods=['POST'])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    
    if email is None:
        return jsonify({"msg": "No email was provided"}), 400
    if password is None:
        return jsonify({"msg": "No password was provided"}), 400

    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        # the user was not found on the database
        return jsonify({"msg": "Invalid username or password"}), 401
    else:
        print(user)
        # create a new token with the user id inside
        access_token = create_access_token(identity=user.id_u)
        return jsonify({ "token": access_token, "user_id": user.id_u }), 200



@api.route('/user/<int:id_us>', methods=['GET'])
def user_pva_ind(id_us):
    gt_get_user_pva_ind =  User.query.filter_by(id_u = id_us).first()
    if gt_get_user_pva_ind is None:
        raise APIException('El usuario que buscas no existe', status_code=404)
    user_pva = gt_get_user_pva_ind.serialize_user()
    return jsonify(user_pva), 200

@api.route('/tutores', methods=['GET', 'POST'])
def tutores_pva():
    if request.method == 'GET':
        gt_get_tutores = Tutores.query.all()
        all_tutores = list(map(lambda x: x.serialize_tutor(), gt_get_tutores))
        return jsonify(all_tutores), 200
    elif request.method == 'POST':
        request_body = request.get_json()
        for i in request_body: 
            insert_tutores = Tutores(
                            email=i["email"],
                            tutor_id=i["tutor_id"],
                            tutor_name=i["tutor_name"],
                            tutor_lastname=i["tutor_lastname"],
                            specialty=i["specialty"],
                            curriculum=i["curriculum"],
                            url_curriculum=i["url_curriculum"],
                            imagen=i["imagen"],
                            birthday=i["birthday"],
                            password=i["password"],
                            is_active=i["is_active"],
                            direction=i["direction"],
                            gender=i["gender"])
            db.session.add(insert_tutores)
            db.session.commit()
        return jsonify({"Todo ok" : request_body }), 200

@api.route('/tutores/<int:id_tu>', methods=['GET'])
def tutores_pva_ind(id_tu):
    gt_get_tutor_pva_ind =  Tutores.query.filter_by(id_t = id_tu).first()
    if gt_get_tutor_pva_ind is None:
        raise APIException('El usuario que buscas no existe', status_code=404)
    tutor_pva = gt_get_tutor_pva_ind.serialize_tutor()
    return jsonify(tutor_pva), 200

@api.route('/tutorias', methods=['GET', 'POST'])
def tutorias_pva():
    if request.method == 'GET':
        gt_get_tutorias = Tutorias.query.all()
        all_tutorias = list(map(lambda x: x.serialize_tutorias(), gt_get_tutorias))
        return jsonify(all_tutorias), 200
    elif request.method == 'POST':
        request_body = request.get_json()
        for i in request_body: 
            insert_tutorias = Tutorias(
                            tutorships_name=i["tutorships_name"],
                            category=i["category"],
                            specialty=i["specialty"],
                            location=i["location"],
                            info_specifies=i["info_specifies"],
                            info_detail=i["info_detail"],
                            imagen=i["imagen"],
                            rating=i["rating"],
                            tutor_id_fk=i["tutor_id_fk"],
                            is_active=i["is_active"],
                            cost=i["cost"])
            db.session.add(insert_tutorias)
            db.session.commit()
        return jsonify({"Todo ok" : request_body }), 200

@api.route('/tutorias/<int:id_tt>', methods=['GET'])
def tutorias_pva_ind(id_tt):
    gt_get_tutorias_pva_ind =  Tutorias.query.filter_by(id_tt = id_tt).first()
    if gt_get_tutorias_pva_ind is None:
        raise APIException('El usuario que buscas no existe', status_code=401)
    tutorias_pva = gt_get_tutorias_pva_ind.serialize_tutorias()
    return jsonify(tutorias_pva), 200


@api.route('/tutorias/<int:id_us>/contract', methods=['GET', 'POST'])
def tutorias_contract(id_us):
    get_tutorias_user = User.query.filter_by(id_u = id_us).first()
    if get_tutorias_user is None:
        raise APIException('El usuario que buscas no existe', status_code=401)
    if request.method == 'GET':
        get_tutorias_c_user = Tutoria_Contratada.query.filter_by(user_id_fk = id_us).all()
        if get_tutorias_c_user is None:
            raise APIException('El usuario que busca no tiene tutorias contratadas', status_code=402)
        user_contract = list(map(lambda x: x.serialize_tutoria_contratada(), get_tutorias_c_user))
        return jsonify(user_contract), 200
    elif request.method == 'POST':
        get_tutorias_c_user =  User.query.filter_by(id_u = id_us).first()
        if get_tutorias_c_user is None:
            raise APIException('El usuario que buscas no existe', status_code=401)
        request_body = request.get_json()
        for i in request_body:
            insert_contract = Tutoria_Contratada(
                                    tutoria_id_fk=i["tutoria_id_fk"],
                                    user_id_fk=i["user_id_fk"],
                                    fecha_contrato=i["fecha_contrato"],
                                    is_active=i["is_active"],
                                    fecha_cierre=i["fecha_cierre"])
            db.session.add(insert_contract)
            db.session.commit()
        return jsonify({"Todo ok" : request_body }), 200


@api.route('/tutorias/<int:id_c_tc>', methods=['DELETE'])
def tutorias_contract_del(id_c_tc):
    gt_tutorias_contract_del =  Tutoria_Contratada.query.filter_by(id_tc = id_c_tc).first()
    if gt_tutorias_contract_del is None:
        raise APIException('La tutoria contratada no existe', status_code=403)
    db.session.delete(gt_tutorias_contract_del)
    db.session.commit()
    return jsonify({"Fue eliminada la tutoria ID: ": id_c_tc}), 201














"""----------------------"""
@api.route('/update/<int:id_c_tc>', methods=['PUT'])
def tutorias_contract_UP(id_c_tc):
    gt_tutorias_contract_Ud =  Tutoria_Contratada.query.filter_by(id_tc = id_c_tc).first()
    if gt_tutorias_contract_Ud is None:
        raise APIException('La tutoria contratada no existe', status_code=403)
    update_state = (update(Tutoria_Contratada).where(id_tc == id_c_tc).values(is_active = False, fecha_cierre = GETDATE()))
    db.session.update(update_state)
    db.session.commit()
    return jsonify({"Fue actualizado la tutoria ID: ": id_c_tc}), 202

