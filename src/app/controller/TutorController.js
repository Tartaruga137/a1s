const TutorService = require('../service/TutorService');

module.exports = class TutorController {
    static async createTutor(req, res) {
        try {
            const tutorData = req.body;
            await TutorService.createTutor(tutorData);
            res.status(201).json({ message: 'Tutor created successfully' });
        } catch (error) {
            console.error('Error creating tutor:', error);
            res.status(500).json({ error: 'An error occurred while creating the tutor' });
        } 
    }

    static async getAllTutors(req, res) {
        try {
            const tutors = await TutorService.getAllTutors();
            res.status(200).json(tutors)
        } catch (error) {
            console.error("Failed to get tutors: ", error);
            res.status(500).json({ error: "An error occurred while getting the tutors"})
        }
    }
    
    static async updateTutor(req, res) {
        try {
            const tutorId = req.params.id;
            const tutorData = req.body;
            await TutorService.updateTutor(tutorId, tutorData); 
            res.status(200).json({ message: "Tutor updated successfully" }); 
        } catch (error) {
            if (error.message === 'Tutor not found') {
                res.status(404).json({ error: "Tutor not found" });
            } else {
                console.error("Failed to update tutor: ", error);
                res.status(500).json({ error: "An error occurred while updating the tutor" });
            }
        }
    }

    static async removeTutor(req, res) {
        try {
            const tutorId = req.params.id;
            await TutorService.removeTutor(tutorId);
            res.status(200).json({ message: "Tutor removed successfully" });
        } catch (error) {
            if (error.message === 'Tutor not found') {
                res.status(404).json({ error: "Tutor not found" });
            } else {
                console.error("Failed to remove tutor: ", error);
                res.status(500).json({ error: "An error occurred while removing the tutor" });
            }
        }
    }
    
};
