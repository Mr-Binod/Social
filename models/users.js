const { DataTypes, Model} = require('sequelize');
class User extends Model {
    static init(sequelize) {
        return super.init({
            uid : {type : DataTypes.STRING(20),primaryKey : true, allowNull : false},
            kakao_id : {type : DataTypes.STRING(20), allowNull : false},
            kakao_name : {type : DataTypes.STRING(20), allowNull : false},
            kakao_profile_image : {type : DataTypes.STRING(200), allowNull : false},
            age : {type : DataTypes.STRING(20)},
            gender : {type : DataTypes.STRING(20)},
            introduction : {type : DataTypes.STRING(1020)},
            location : {type : DataTypes.STRING(200)},
            
  
        }, {
            sequelize,
            timestamps : true,
            modelName : 'User',
            tableName : 'users',
            charset : 'utf8mb4',
            collate : 'utf8mb4_general_ci'
        })
    }
    static associate(models) {
        models.Users.hasOne(models.Points, {foreignKey : 'user_id_fk', sourceKey : 'uid'})
        models.Users.hasMany(models.Userintrests, {foreignKey : 'user_id_fk', sourceKey : 'uid'})
        models.Users.hasMany(models.Clubs, {foreignkey : 'user_id_fk', sourceKey : 'uid'})
        models.Users.hasMany(models.Reviews, {foreignKey : 'user_id_fk', sourceKey : 'uid'})
        models.Users.hasMany(models.Hearts, {foreignKey : 'user_id_fk', sourceKey : 'uid'})
        models.Users.hasMany(models.Events, {foreignKey : 'user_id_fk', sourceKey : 'uid'})
        models.Users.hasMany(models.Members, { foreignKey: 'user_id_fk', sourceKey: 'uid' });
        models.Users.hasMany(models.Participants, {foreignKey: 'user_id_fk',sourceKey: 'uid'});
    }
}

module.exports = User;
