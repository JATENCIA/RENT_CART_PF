const { check } = require('express-validator');
const { validateResult } = require('../Helpers/ValidateHelper.js');


const validateCreate = [
    check('name')
        .exists()
        .not()
        .withMessage("You must enter a name")
        .isLength({min: 3}, {max: 50})
        .isString(),
    check('lastName')
        .exists()
        .withMessage("You must enter a lastName")
        .isLength({min: 1}, {max: 50})
        .not()
        .isString(),
    check('dni')
        .exists()
        .not()
        .isLength({min: 7}, {max: 10})
        .withMessage("You must enter a dni")
        .isNumeric(),
    check('kindOfPerson')
        .exists()
        .not()
        .isLength({min: 5}, {max: 15})
        .withMessage("You must enter a Kind of Person")
        .isString(),
    check('eMail')
        .exists()
        .withMessage("You must enter a eMail")
        .not()
        .isString(),
    check('location')
        .exists()
        .not()
        .withMessage("You must enter a location")
        .isString(),
    check('telephone')
        .exists()
        .withMessage("You must enter a telephone")
        .not()
        .isLength({min: 10})
        .isString(),
    check('roll')
        .exists()
        .withMessage("You must enter a roll")
        .isString(),
    check('active')
        .exists()
        .withMessage("You must enter a active")
        .isString(),
    (req, res, next) => {
        validateResult(req, res, next)
        }
]


module.exports = { validateCreate }