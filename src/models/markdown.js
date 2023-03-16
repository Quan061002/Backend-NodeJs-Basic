'use strict';
const {
    Model, DataTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class MarkDown extends Model {





        static associate(models) {

            MarkDown.belongsTo(models.User, { foreignKey: 'doctorId' })
        }
    };
    MarkDown.init({
        contentHTML: DataTypes.TEXT('long'),
        contentMarkdown: DataTypes.TEXT('long'),
        description: DataTypes.TEXT('long'),
        doctorId: DataTypes.INTEGER,
        specialtyId: DataTypes.INTEGER,
        clinicId: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Markdown',
    });
    return MarkDown;
};