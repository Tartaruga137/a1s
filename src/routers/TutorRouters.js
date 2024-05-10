const express = require('express');
const router = express.Router();
const TutorController = require('../app/controller/TutorController');
const tutorCreateValidation = require('../app/middleware/tutorValidation');
const validate = require('../app/middleware/handleValidation');


router.post('/tutor', tutorCreateValidation(), validate, TutorController.createTutor);
router.get('/tutors', TutorController.getAllTutors);
router.put('/tutor/:id', tutorCreateValidation(), validate, TutorController.updateTutor)
router.delete('/tutor/:id', TutorController.removeTutor)

module.exports = router;

