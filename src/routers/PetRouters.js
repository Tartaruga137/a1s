const express = require('express');
const router = express.Router();
const PetController = require('../app/controller/PetController');
const petCreateValidation = require('../app/middleware/petValidation');
const validate = require('../app/middleware/handleValidation');

router.post('/pet/:tutorId', petCreateValidation(), validate, PetController.createPet);
router.put('/pet/:petId/tutor/:tutorId', petCreateValidation(), validate, PetController.updatePet)
router.delete('/pet/:petId/tutor/:tutor_id', PetController.removePet)

module.exports = router;  