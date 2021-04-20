"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

@app.route('/user', methods=['GET', 'POST'])
def user_pva():
    if request.method == 'GET':
        gt_get_user = User.query.all()
        all_user = list(map(lambda x: x.serialize(), gt_get_user))
        return jsonify(all_user), 200
    elif request.method == 'POST':
        request_body = request.get_json()
        insert_user = User(id_u=request_body["id_u"],
                                  email=request_body["email"],
                                  user_id=request_body["user_id"],
                                  user_name=request_body["user_name"],
                                  user_lastname=request_body["user_lastname"],
                                  birthday=request_body["birthday"],
                                  password=request_body["password"],
                                  is_active=request_body["is_active"],
                                  direction=request_body["direction"],
                                  gender=request_body["gender"])
        db.session.add(insert_user)
        db.session.commit()
        return jsonify({"Todo ok" : request_body }), 200


@app.route('/people/<int:id_us>', methods=['GET'])
def people_sw_u(id_us):
    gt_get_people_u =  People_SW.query.filter_by(id_people = id_us).first()
    if gt_get_people_u is None:
        raise APIException('Lo que buscas no existe', status_code=404)
    people = gt_get_people_u.serialize_people()
    return jsonify(people), 200

""" API """
"""
@app.route('/people', methods=['GET', 'POST'])
def people_sw():
    if request.method == 'GET':
        gt_get_people = People_SW.query.all()
        all_people = list(map(lambda x: x.serialize_people(), gt_get_people))
        return jsonify(all_people), 200
    elif request.method == 'POST':
        request_body = request.get_json()
        insert_people = People_SW(id_people=request_body["id_people"],
                                  people_height=request_body["people_height"],
                                  people_mass=request_body["people_mass"],
                                  people_hair_color=request_body["people_hair_color"],
                                  people_skin_color=request_body["people_skin_color"],
                                  people_eye_color=request_body["people_eye_color"],
                                  people_birth_year=request_body["people_birth_year"],
                                  people_gender=request_body["people_gender"],
                                  people_created=request_body["people_created"],
                                  people_edited=request_body["people_edited"],
                                  people_name=request_body["people_name"],
                                  people_homeworld=request_body["people_homeworld"],
                                  people_url=request_body["people_url"])
        db.session.add(insert_people)
        db.session.commit()
        return jsonify({"Todo ok" : request_body }), 200

@app.route('/people/<int:id_us>', methods=['GET'])
def people_sw_u(id_us):
    gt_get_people_u =  People_SW.query.filter_by(id_people = id_us).first()
    if gt_get_people_u is None:
        raise APIException('Lo que buscas no existe', status_code=404)
    people = gt_get_people_u.serialize_people()
    return jsonify(people), 200

@app.route('/planets', methods=['GET', 'POST'])
def get_planets_sw():
    if request.method == 'GET':
        gt_planets = Planets_SW.query.all()
        all_planets = list(map(lambda x: x.serialize_planets(), gt_planets))
        return jsonify(all_planets), 200
    elif request.method == 'POST':
        request_body = request.get_json()
        insert_planet_sw = Planets_SW(id_planets=request_body["id_planets"],
                                  planets_name=request_body["planets_name"],
                                  planets_diameter=request_body["planets_diameter"],
                                  planets_rotation_period=request_body["planets_rotation_period"],
                                  planets_orbital_period=request_body["planets_orbital_period"],
                                  planets_gravity=request_body["planets_gravity"],
                                  planets_population=request_body["planets_population"],
                                  planets_climate=request_body["planets_climate"],
                                  planets_terrain=request_body["planets_terrain"],
                                  planets_surface_water=request_body["planets_surface_water"],
                                  planets_created=request_body["planets_created"],
                                  planets_edited=request_body["planets_edited"],
                                  planets_url=request_body["planets_url"])
        db.session.add(insert_planet_sw)
        db.session.commit()
        return jsonify({"Todo ok" : request_body }), 200

@app.route('/planets/<int:id_pp>', methods=['GET'])
def get_planets_sw_u(id_pp):
    gt_get_planets_u =  Planets_SW.query.filter_by(id_planets = id_pp).first()
    if gt_get_planets_u is None:
        raise APIException('Lo que buscas no existe', status_code=404)
    planets = gt_get_planets_u.serialize_planets()
    return jsonify(planets), 200

@app.route('/user_sw', methods=['GET'])
def user_sw():
    gt_get_user = User_SW.query.all()
    all_user = list(map(lambda x: x.serialize_user(), gt_get_user))
    return jsonify(all_user), 200

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