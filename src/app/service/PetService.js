const PetRepository = require('../repository/PetRepository');

module.exports = class PetService {
    static async createPet(petData) {
        try {
            await PetRepository.createPet(petData);
        } catch (error) {
            throw new Error(error.message)
        } 
    }

    static async updatePet(petId, petData) {
        try {
            const pet = await PetService.getByPetId(petId)
            if (!pet) {
                throw new Error('Pet not found');
            }
            await PetRepository.updatePet(petId, petData); 
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async removePet(petId) {
        try {
            const pet = await PetService.getByPetId(petId)
            if (!pet) {
                throw new Error('Pet not found');
            }
            await PetRepository.removePet(petId)
        } catch (error) {
            throw new Error(error.message);
        }  
    }

    static async getByPetId(petId) {
        try {
            return await PetRepository.getByPetId(petId)
        } catch (error) {
            throw new Error(error.message);
        }
    }
};  