const projectServices = require("../services/ProjectServices");
const {StatusCodes} = require("http-status-codes");

module.exports = {
  async index(_req, res) {
    const projects = await projectServices.getAll();

    if (projects.length > 0) return res.status(StatusCodes.OK).json(projects);
    else
      return res
        .status(StatusCodes.OK)
        .json({ message: "Let's go work because you do not have nothing" });
  },

  async store(req, res) {
    if (!req.file)
      return res.status(StatusCodes.BAD_REQUEST).send({ message: "Insert a Image Please" });
    const { originalname: imgName, size, key, location: url = "" } = req.file;
    const { title, description, urlProject, urlGithub } = JSON.parse(
      req.body.body
    );

    const sizeMax = 2 * 1024 * 1024;

    if (size > sizeMax)
      return res.status(StatusCodes.BAD_REQUEST).send({ message: "File too large" });

    try {
      const project = await projectServices.insertProject({
        title,
        description,
        urlProject,
        urlGithub,
        imgName,
        size,
        key,
        url,
      });

      return res.status(StatusCodes.OK).json(project);
    } catch (e) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error: e });
    }
  },

  async updateProject(req, res) {
    const projectTitle = req.params.project;
    let update = JSON.parse(req.body.body);
    const oldProject = await projectServices.getByTitle(projectTitle);

    if (!oldProject)
      return res.status(StatusCodes.NOT_FOUND).json({ message: "Project not found" });

    if (req.file) {
      const { originalname: imgName, size, key, location: url = "" } = req.file;

      const sizeMax = 2 * 1024 * 1024;

      if (size > sizeMax)
        return res.status(StatusCodes.BAD_REQUEST).send({ message: "File too large" });
      update.imgName = imgName;
      update.size = size;
      update.key = key;
      update.url = url;
      update.oldKey = oldProject.key;
    }

    try {
      const project = await projectServices.updateOne(
        { title: projectTitle },
        update
      );

      return res.status(StatusCodes.OK).json(project);
    } catch (e) {
      console.log(e);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error: e });
    }
  },

  async deleteProject(req, res) {
    const project = await projectServices.getById(req.params.id);

    if (!project) return res.status(StatusCodes.BAD_REQUEST).send({ error: "Id non-existing" });

    await project.remove();

    return res.status(StatusCodes.OK).send({ message: "success" });
  },
};
