import { createTechnology, getAllTechnologies } from "./technology.action";

export const getAllTechnologiesContoller = async (request, response) => {
  return getAllTechnologies()
    .then((technologies) => {
      if (!technologies.length) {
        return response
          .status(404)
          .send("Technologies not found in the database!");
      }
      return response.status(200).send(technologies);
    })
    .catch((error) => response.status(500).send(`Server error: ${error}`));
};

export const createTechnologyController = async (request, response) => {
  const technologyName = request.body.name.trim();

  if (!technologyName)
    return response
      .status(400)
      .send(
        "To create technology you should pass technology name as request param"
      );

  const technologies = await getAllTechnologies();

  if (technologies.filter((el) => el.value === technologyName).length > 0) {
    return response
      .status(400)
      .send(`Techology with title - ${technologyName} - already exists!`);
  }

  return createTechnology(technologyName)
    .then((technology) => {
      return response.status(200).send(technology);
    })
    .catch((error) => response.status(500).send(`Server error: ${error}`));
};
