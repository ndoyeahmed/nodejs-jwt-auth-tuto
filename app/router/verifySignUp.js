const db = require('../config/db.config.js');
const config = require('../config/config.js');
const ROLES = config.ROLEs;
const User = db.user;
const Role = db.role;

checkDuplicateUsernameOrEmail = (req, res, next) => {
    // check username is already in use
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if (user) {
            res.status(400).send('Fail -> username is already taken');
            return;
        }

        // check email is already in use
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if (user) {
                res.status(400).send('Fail -> email is already in use');
                return;
            }

            next();
        });
    });
};

checkRolesExisted = (req, res, next) => {
    for (let i = 0; i < req.body.roles; i++) {
        if (!ROLES.includes(req.body.roles[i].toUpperCase())) {
            res.status(400).send('Fail -> Does not exist Role = ' + req.body.roles[i]);
            return;
        }
    }
    next();
};

const signUpVerify = {};
signUpVerify.checkDuplicateUsernameOrEmail = checkDuplicateUsernameOrEmail;
signUpVerify.checkRolesExisted = checkRolesExisted;

module.exports = signUpVerify;
