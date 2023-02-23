const Experiance = require("../models/Experiance");

module.exports = {
  async getAll() {
    return await Experiance.find();
  },
  async getOne(id) {
    return await Experiance.findById(id)
  },
  async insertOne(title, description) {
    return await Experiance.create({
      title,
      description,
    });
  },
  async findOneById(id) {
    return await Experiance.findById(id);
  },
  async updateOne(field, updatedInfos) {
    return await Experiance.updateOne(field, { $set: updatedInfos });
  },
};
