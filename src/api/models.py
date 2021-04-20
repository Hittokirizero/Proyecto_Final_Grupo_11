from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id_u = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    user_id = db.Column(db.String(120), unique=True, nullable=False)
    user_name = db.Column(db.String(120), unique=True, nullable=False)
    user_lastname = db.Column(db.String(120), unique=True, nullable=False)
    birthday = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    direction = db.Column(db.String(80), unique=False, nullable=False)
    gender = db.Column(db.String(80), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.user_name

    def serialize(self):
        return {
            "id_u": self.id_u,
            "email": self.email,
            "user_id" : self.user_id,
            "user_name" : self.user_name,
            "user_lastname" : self.user_lastname,
            "birthday" : self.birthday,
            "is_active" : self.is_active,
            "direction" : self.direction,
            "gender" : self.gender
            # do not serialize the password, its a security breach
        }

class Tutores(db.Model):
    __tablename__ = 'tutores'
    id_t = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    tutor_id = db.Column(db.String(120), unique=True, nullable=False)
    tutor_name = db.Column(db.String(120), unique=True, nullable=False)
    user_lastname = db.Column(db.String(120), unique=True, nullable=False)
    specialty = db.Column(db.String(120), unique=True, nullable=False)
    curriculum = db.Column(db.String(120), unique=True, nullable=False)
    url_curriculum = db.Column(db.String(120), unique=True, nullable=False)
    birthday = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    gender = db.Column(db.String(80), unique=False, nullable=False)

    def __repr__(self):
        return '<Tutores %r>' % self.tutor_name

    def serialize(self):
        return {
            "id_t": self.id_t,
            "email": self.email,
            "tutor_id" : self.tutor_id,
            "tutor_name" : self.tutor_name,
            "user_lastname" : self.user_lastname,
            "specialty" : self.specialty,
            "curriculum" : self.curriculum,
            "url_curriculum" : self.url_curriculum,
            "birthday" : self.birthday,
            "is_active" : self.is_active,
            "gender" : self.gender
            # do not serialize the password, its a security breach
        }

class Tutorias(db.Model):
    __tablename__ = 'tutorias'
    id_tt = db.Column(db.Integer, primary_key=True)
    tutorships_name = db.Column(db.String(120), unique=True, nullable=False)
    category = db.Column(db.String(120), unique=True, nullable=False)
    specialty = db.Column(db.String(120), unique=True, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    info_specifies = db.Column(db.String(120), unique=True, nullable=False)
    info_detail = db.Column(db.String(120), unique=True, nullable=False)
    rating = db.Column(db.Integer, unique=True, nullable=False)
    cost = db.Column(db.Integer, unique=True, nullable=False)
    tutor_id_fk = db.Column(db.Integer, db.ForeignKey('tutores.id_t'), nullable=True)
    tutor_id = db.relationship('Tutores')

    def __repr__(self):
        return '<Tutorias %r>' % self.tutorships_name

    def serialize(self):
        return {
            "id_tt": self.id_tt,
            "tutorships_name": self.tutorships_name,
            "category" : self.category,
            "specialty" : self.specialty,
            "user_lastname" : self.user_lastname,
            "specialty" : self.specialty,
            "info_specifies" : self.info_specifies,
            "info_detail" : self.info_detail,
            "rating" : self.rating,
            "tutor_id" : self.tutor_id,
            "is_active" : self.is_active,
            "cost" : self.cost 
            # do not serialize the password, its a security breach
        }



