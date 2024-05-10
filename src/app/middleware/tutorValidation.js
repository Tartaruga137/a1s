const { body } = require('express-validator');

const tutorCreateValidation = () => {
    return [
        body('name')
        .isString().withMessage('O nome é obrigatório.')
        .isLength({ min: 2 }).withMessage('O nome deve ter no mínimo 2 caracteres.')
        .isLength({ max: 30 }).withMessage('O nome deve ter no máximo 30 caracteres.'),
        
        body('phone')
        .isString().withMessage('O telefone é obrigatório.')
        .matches(/^[0-9]{11}$/).withMessage('O telefone deve conter os 11 dígitos, sem espaços ou caracteres especiais.'),
        
        body("email")
        .isString().withMessage('O e-mail é obrigatório.')
        .isEmail().withMessage('O email fornecido não é válido'),

        body("date_of_birth")
        .isString().withMessage('A data de aniversário é obrigatória.')
        .matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/).withMessage('A data de nascimento deve estar no formato "YYYY-MM-DD HH:mm"'),

        body("zip_code")
        .isString().withMessage('O CEP é obrigatório.')
        .matches(/^\d{8}$/)
        .withMessage('O CEP deve conter os 8 dígitos, sem espaços ou caracteres especiais.')
    ]
};

module.exports = tutorCreateValidation;
