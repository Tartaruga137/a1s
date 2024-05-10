const { body } = require('express-validator')

const petCreateValidation = () => {
    return [
        body('name')
        .isString().withMessage('O nome é obrigatório.')
        .isLength({ min: 2 }).withMessage('O nome deve ter no mínimo 2 caracteres.')
        .isLength({ max: 30 }).withMessage('O nome deve ter no máximo 30 caracteres.'),
        
        body('species')
        .isString().withMessage('A espécie é obrigatória.')
        .isLength({ min: 2 }).withMessage('A espécie deve ter no mínimo 2 caracteres.')
        .isLength({ max: 20 }).withMessage('A espécie deve ter no máximo 20 caracteres.'),
        
        body("carry")
        .isString().withMessage('O carry é obrigatório.')
        .isLength({ min: 1 }).withMessage('O carry deve ter no máximo 1 caractere.'),

        body("weight")
        .isNumeric().withMessage('O peso precisa ser um número.')
        .custom((value) => {
            if (value < 0) {
                throw new Error('Valor inválido, não existe peso negativo!')
            } 
            return true;
        }),

        body("date_of_birth")
        .isString().withMessage('A data de aniversário é obrigatória.')
        .matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/).withMessage('A data de nascimento deve estar no formato "YYYY-MM-DD HH:mm"'),

    ]
}

module.exports = petCreateValidation;