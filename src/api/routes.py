"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Tutores, Tutorias
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/user', methods=['GET', 'POST'])
def user_pva():
    if request.method == 'GET':
        gt_get_user = User.query.all()
        all_user = list(map(lambda x: x.serialize_user(), gt_get_user))
        return jsonify(all_user), 200
    elif request.method == 'POST':
        request_body = request.get_json()
        for i in request_body: 
            insert_user = User(id_u=i["id_u"],
                           email=i["email"],
                           user_id=i["user_id"],
                           user_name=i["user_name"],
                           user_lastname=i["user_lastname"],
                           birthday=i["birthday"],
                           password=i["password"],
                           is_active=i["is_active"],
                           direction=i["direction"],
                           gender=i["gender"])
            db.session.add(insert_user)
            db.session.commit()
        return jsonify({"Todo ok" : request_body }), 200

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
            insert_tutores = Tutores(id_t=i["id_t"],
                            email=i["email"],
                            tutor_id=i["tutor_id"],
                            tutor_name=i["tutor_name"],
                            tutor_lastname=i["tutor_lastname"],
                            specialty=i["specialty"],
                            curriculum=i["curriculum"],
                            url_curriculum=i["url_curriculum"],
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
            insert_tutorias = Tutorias(id_tt=i["id_tt"],
                            tutorships_name=i["tutorships_name"],
                            category=i["category"],
                            specialty=i["specialty"],
                            info_specifies=i["info_specifies"],
                            info_detail=i["info_detail"],
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
    get_tutorias_user =  User.query.filter_by(id_u = id_us).all
    if get_tutorias_user is None:
        raise APIException('El usuario que buscas no existe', status_code=401)

    if request.method == 'GET':
        get_tutorias_user =  TutoriaContratada.query.filter_by(user_id_fk = id_us)
        if get_tutorias_user is None:
            raise APIException('El usuario que busca no tiene tutorias contratadas', status_code=402)
        user_contract = list(map(lambda x: x.serialize_tutoriacontratada(), get_tutorias_user))
        return jsonify(user_contract), 200
    elif request.method == 'POST':
        get_tutorias_user =  TutoriaContratada.query.filter_by(user_id_fk = id_us).first()
        if get_tutorias_user is None:
            raise APIException('El usuario que buscas no existe', status_code=401)
        for i in request_body:
            insert_contract = TutoriaContratada(id_tc=i["id_tc"],
                                    tutoria_id_fk=i["tutoria_id_fk"],
                                    user_id_fk=i["user_id_fk"],
                                    fecha_contrato=i["fecha_contrato"],
                                    is_active=i["is_active"],
                                    fecha_cierre=i["fecha_cierre"])
            db.session.add(insert_contract)
            db.session.commit()
        return jsonify({"Todo ok" : request_body }), 200

@api.route('/tutorias/<int:id_us>', methods=['DELETE'])
def tutorias_contract_del(id_c_tc):
    gt_tutorias_contract_del =  TutoriaContratada.query.filter_by(id_tc = id_c_tc).first()
    if gt_tutorias_contract_del is None:
        raise APIException('La tutoria contratada no existe', status_code=403)
    db.session.delete(gt_tutorias_contract_del)
    db.session.commit()
    return jsonify({"Fue eliminada la tutoria ID: ": fav_id}), 201

@api.route('/update/<int:id_us>', methods=['PUT'])
def tutorias_contract_del(id_c_tc):
    gt_tutorias_contract_Ud =  TutoriaContratada.query.filter_by(id_tc = id_c_tc).first()
    if gt_tutorias_contract_Ud is None:
        raise APIException('La tutoria contratada no existe', status_code=403)
    update_state = (Update(TutoriaContratada).where(id_tc == id_c_tc).values(is_active = False))
    db.session.update(update_state)
    db.session.commit()
    return jsonify({"Fue eliminada la tutoria ID: ": fav_id}), 201


"""

id_tc = db.Column(db.Integer, primary_key=True)
    tutoria_id_fk = db.Column(db.Integer, db.ForeignKey('tutorias.id_tt'), nullable=True)
    tutoria_id = db.relationship('Tutorias')
    user_id_fk = db.Column(db.Integer, db.ForeignKey('user.id_u'), nullable=True)
    user_id = db.relationship('User')
    fecha_contrato = db.Column(db.String(120), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    fecha_cierre = db.Column(db.String(120), unique=False, nullable=False)

@app.route('/user_sw/<int:user_id>/favorites', methods=['GET', 'POST', 'DELETE'])
def user_sw_fv(user_id):
    gt_get_user_sw_fv =  Favorite_SW.query.filter_by(user_id_fk = user_id)
    if gt_get_user_sw_fv is None:
        raise APIException('Lo que buscas no existe', status_code=404)

    if request.method == 'GET':
        gt_get_user_sw_fv =  Favorite_SW.query.filter_by(user_id_fk = user_id)
        if gt_get_user_sw_fv is None:
            raise APIException('Lo que buscas no existe', status_code=404)
        user_fav = list(map(lambda x: x.serialize_favorite(), gt_get_user_sw_fv))
        return jsonify(user_fav), 200
    elif request.method == 'POST':
        gt_get_user_sw_fv =  User_SW.query.filter_by(id_user = user_id).first()
        if gt_get_user_sw_fv is None:
            raise APIException('Lo que buscas no existe', status_code=404)

        request_body = request.get_json()
        insert_favorites = Favorite_SW(id_favorite=request_body["id_favorite"],
                                  user_id_fk=request_body["user_id_fk"],
                                  planets_id_fk=request_body["planets_id_fk"],
                                  people_id_fk=request_body["people_id_fk"],
                                  type_favorite=request_body["type_favorite"])
        db.session.add(insert_favorites)
        db.session.commit()
        return jsonify({"Todo ok" : request_body }), 200

@app.route('/favorites/<int:fav_id>', methods=['DELETE'])
def user_sw_fv_del(fav_id):
    gt_get_user_sw_fv_del =  Favorite_SW.query.filter_by(id_favorite = fav_id).first()
    if gt_get_user_sw_fv_del is None:
        raise APIException('Lo que buscas no existe', status_code=404)
    db.session.delete(gt_get_user_sw_fv_del)
    db.session.commit()
    return jsonify({"Elementos elimando numero de ID:": fav_id}), 200

"""