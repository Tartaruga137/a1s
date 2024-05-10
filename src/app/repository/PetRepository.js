const Pet = require('../model/PetModel')

class PetRepository {
    static async createPet(petData) {
        return await Pet.create(petData);
    }

    static async updatePet(petId, petData) {
        return await Pet.update(petData, { where: { id: petId } })
    }

    static async removePet(petId) {
        return await Pet.destroy({ where: { id: petId } })
    }

    static async getByPetId(petId) {
        const pet = await Pet.findByPk(petId);
        return pet;
    }
}

module.exports = PetRepository;

  