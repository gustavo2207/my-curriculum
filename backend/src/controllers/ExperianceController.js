const experianceServices = require("../services/ExperianceServices");
const {StatusCodes} = require("http-status-codes");

module.exports = {
  async index(_req, res) {
    const experiances = await experianceServices.getAll();

    if (experiances.length < 1)
      return res.status(StatusCodes.OK).send({ message: "Go Work!" });

    return res.status(StatusCodes.OK).json(experiances);
  },

  async getOneExperiance(_req, res) {
    const experianceId = res.params.id
    const experiances = await experianceServices.getOne(experianceId);

    if (experiances.length < 1)
      return res.status(StatusCodes.OK).send({ message: "Go Work!" });

    return res.status(StatusCodes.OK).json(experiances);
  },
  async store(req, res) {
    const { title, description } = req.body;

    if (!title || !description)
      return res
        .status(StatusCodes.OK)
        .send({ message: "Please, fill in all information" });

    const experiance = await experianceServices.insertOne(title, description);

    return res.status(StatusCodes.OK).json(experiance);
  },
  async deleteExperiance(req, res) {
    const experiance = await experianceServices.findOneById(req.params.id);

    if (!experiance) return res.status(StatusCodes.BAD_REQUEST).send({ error: "Id non-existing" });

    await experiance.remove();

    return res.status(StatusCodes.OK).send({ message: "success" });
  },

  async updateExperiance(req, res) {
    const { id } = req.params;

    const updates = req.body;

    const result = await experianceServices.updateOne({ _id: id }, updates);

    if (result.matchedCount >= 1) return res.status(StatusCodes.OK).json(result);
    else return res.status(StatusCodes.BAD_REQUEST).send({ message: "No count matched" });
  },
};
