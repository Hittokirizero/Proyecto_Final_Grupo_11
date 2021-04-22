"""empty message

Revision ID: 77d2fdce8855
Revises: 
Create Date: 2021-04-22 00:21:46.134970

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '77d2fdce8855'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('tutores',
    sa.Column('id_t', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('tutor_id', sa.String(length=120), nullable=False),
    sa.Column('tutor_name', sa.String(length=120), nullable=False),
    sa.Column('user_lastname', sa.String(length=120), nullable=False),
    sa.Column('specialty', sa.String(length=120), nullable=False),
    sa.Column('curriculum', sa.String(length=120), nullable=False),
    sa.Column('url_curriculum', sa.String(length=120), nullable=False),
    sa.Column('birthday', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.Column('gender', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id_t'),
    sa.UniqueConstraint('birthday'),
    sa.UniqueConstraint('curriculum'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('specialty'),
    sa.UniqueConstraint('tutor_id'),
    sa.UniqueConstraint('tutor_name'),
    sa.UniqueConstraint('url_curriculum'),
    sa.UniqueConstraint('user_lastname')
    )
    op.create_table('user',
    sa.Column('id_u', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('user_id', sa.String(length=120), nullable=False),
    sa.Column('user_name', sa.String(length=120), nullable=False),
    sa.Column('user_lastname', sa.String(length=120), nullable=False),
    sa.Column('birthday', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.Column('direction', sa.String(length=80), nullable=False),
    sa.Column('gender', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id_u'),
    sa.UniqueConstraint('birthday'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('user_id'),
    sa.UniqueConstraint('user_lastname'),
    sa.UniqueConstraint('user_name')
    )
    op.create_table('tutorias',
    sa.Column('id_tt', sa.Integer(), nullable=False),
    sa.Column('tutorships_name', sa.String(length=120), nullable=False),
    sa.Column('category', sa.String(length=120), nullable=False),
    sa.Column('specialty', sa.String(length=120), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.Column('info_specifies', sa.String(length=120), nullable=False),
    sa.Column('info_detail', sa.String(length=120), nullable=False),
    sa.Column('rating', sa.Integer(), nullable=False),
    sa.Column('cost', sa.Integer(), nullable=False),
    sa.Column('tutor_id_fk', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['tutor_id_fk'], ['tutores.id_t'], ),
    sa.PrimaryKeyConstraint('id_tt'),
    sa.UniqueConstraint('category'),
    sa.UniqueConstraint('cost'),
    sa.UniqueConstraint('info_detail'),
    sa.UniqueConstraint('info_specifies'),
    sa.UniqueConstraint('rating'),
    sa.UniqueConstraint('specialty'),
    sa.UniqueConstraint('tutorships_name')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('tutorias')
    op.drop_table('user')
    op.drop_table('tutores')
    # ### end Alembic commands ###