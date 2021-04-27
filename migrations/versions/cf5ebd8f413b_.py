"""empty message

Revision ID: cf5ebd8f413b
Revises: 719e2d077bd6
Create Date: 2021-04-27 02:43:34.532157

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'cf5ebd8f413b'
down_revision = '719e2d077bd6'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('tutoria_contratada', 'fecha_cierre',
               existing_type=sa.VARCHAR(length=120),
               nullable=True)
    op.alter_column('tutoria_contratada', 'fecha_contrato',
               existing_type=sa.VARCHAR(length=120),
               nullable=True)
    op.alter_column('tutoria_contratada', 'tutoria_id_fk',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.alter_column('tutoria_contratada', 'user_id_fk',
               existing_type=sa.INTEGER(),
               nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('tutoria_contratada', 'user_id_fk',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.alter_column('tutoria_contratada', 'tutoria_id_fk',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.alter_column('tutoria_contratada', 'fecha_contrato',
               existing_type=sa.VARCHAR(length=120),
               nullable=False)
    op.alter_column('tutoria_contratada', 'fecha_cierre',
               existing_type=sa.VARCHAR(length=120),
               nullable=False)
    # ### end Alembic commands ###