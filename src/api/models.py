from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id_u = db.Column(db.Integer, primary_key=True, autoincrement=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    user_id = db.Column(db.String(120), unique=True, nullable=False)
    user_name = db.Column(db.String(120), unique=False, nullable=False)
    user_lastname = db.Column(db.String(120), unique=False, nullable=False)
    birthday = db.Column(db.String(120), unique=False, nullable=False)
    imagen = db.Column(db.Text, unique=False, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    direction = db.Column(db.String(80), unique=False, nullable=False)
    gender = db.Column(db.String(80), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.user_name

    def serialize_user(self):
        return {
            "id_u": self.id_u,
            "email": self.email,
            "user_id" : self.user_id,
            "user_name" : self.user_name,
            "user_lastname" : self.user_lastname,
            "birthday" : self.birthday,
            "imagen" : self.imagen,
            "is_active" : self.is_active,
            "direction" : self.direction,
            "gender" : self.gender
            # do not serialize the password, its a security breach
        }

class Tutores(db.Model):
    __tablename__ = 'tutores'
    id_t = db.Column(db.Integer, primary_key=True, autoincrement=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    tutor_id = db.Column(db.String(120), unique=True, nullable=False)
    tutor_name = db.Column(db.String(120), unique=False, nullable=False)
    tutor_lastname = db.Column(db.String(120), unique=False, nullable=False)
    specialty = db.Column(db.String(120), unique=False, nullable=False)
    curriculum = db.Column(db.String(120), unique=False, nullable=False)
    url_curriculum = db.Column(db.String(120), unique=False, nullable=False)
    birthday = db.Column(db.String(120), unique=False, nullable=False)
    imagen = db.Column(db.String(120), unique=False, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    direction = db.Column(db.String(80), unique=False, nullable=False)
    gender = db.Column(db.String(80), unique=False, nullable=False)

    def __repr__(self):
        return '<Tutores %r>' % self.tutor_name

    def serialize_tutor(self):
        return {
            "id_t": self.id_t,
            "email": self.email,
            "tutor_id" : self.tutor_id,
            "tutor_name" : self.tutor_name,
            "tutor_lastname" : self.tutor_lastname,
            "specialty" : self.specialty,
            "curriculum" : self.curriculum,
            "url_curriculum" : self.url_curriculum,
            "birthday" : self.birthday,
            "imagen" : self.imagen,
            "is_active" : self.is_active,
            "direction" : self.direction,
            "gender" : self.gender
            # do not serialize the password, its a security breach
        }

class Tutorias(db.Model):
    __tablename__ = 'tutorias'
    id_tt = db.Column(db.Integer, primary_key=True, autoincrement=True, nullable=False)
    tutorships_name = db.Column(db.String(120), unique=False, nullable=False)
    category = db.Column(db.String(120), unique=False, nullable=False)
    specialty = db.Column(db.String(120), unique=False, nullable=False)
    info_specifies = db.Column(db.String(300), unique=False, nullable=False)
    location = db.Column(db.String(300), unique=False, nullable=False)
    info_detail = db.Column(db.String(9000), unique=False, nullable=False)
    imagen = db.Column(db.String(120), unique=False, nullable=False)
    rating = db.Column(db.Integer, unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    cost = db.Column(db.Integer, unique=False, nullable=False)
    tutor_id_fk = db.Column(db.Integer, db.ForeignKey('tutores.id_t'), nullable=True)
    tutor_id = db.relationship('Tutores')

    def __repr__(self):
        return '<Tutorias %r>' % self.tutorships_name

    def serialize_tutorias(self):
        return {
            "id_tt": self.id_tt,
            "tutorships_name": self.tutorships_name,
            "category" : self.category,
            "specialty" : self.specialty,
            "info_specifies" : self.info_specifies,
            "location" : self.location,
            "info_detail" : self.info_detail,
            "imagen" : self.imagen,
            "rating" : self.rating,
            "tutor_id_fk" : self.tutor_id_fk,
            "is_active" : self.is_active,
            "cost" : self.cost 
            # do not serialize the password, its a security breach
        }

class Tutoria_Contratada(db.Model):
    __tablename__ = 'tutoria_contratada'
    id_tc = db.Column(db.Integer, primary_key=True, autoincrement=True, nullable=False)
    tutoria_id_fk = db.Column(db.Integer, db.ForeignKey('tutorias.id_tt'), nullable=False)
    tutoria_id = db.relationship('Tutorias')
    user_id_fk = db.Column(db.Integer, db.ForeignKey('user.id_u'), nullable=False)
    user_id = db.relationship('User')
    fecha_contrato = db.Column(db.String(120), unique=False, nullable=True)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    fecha_cierre = db.Column(db.String(120), unique=False, nullable=True)
   
    def __repr__(self):
        return '<Tutoria_Contratada %r>' % self.tutoria_id_fk

    def serialize_tutoria_contratada(self):
        return {
            "id_tc": self.id_tc,
            "tutoria_id_fk": self.tutoria_id_fk,
            "user_id_fk" : self.user_id_fk,
            "fecha_contrato" : self.fecha_contrato,
            "is_active" : self.is_active,
            "fecha_cierre" : self.fecha_cierre 
            # do not serialize the password, its a security breach
        }

