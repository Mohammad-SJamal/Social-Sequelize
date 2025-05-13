const {db, DataTypes, Model} = require("./../db/connection");

const Profile = db.define("Profile", {
    bio: DataTypes.STRING,
    profilePicture: DataTypes.STRING,
    birthday: DataTypes.STRING
});

module.exports = Profile;