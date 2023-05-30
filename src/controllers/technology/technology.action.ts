import { technologiesListToTemplate } from "../../utils/helpers";
const { db } = require("../../models");

export const getAllTechnologies = async () => {
  try {
    const technologies = await db.Technology.findAll();
    return technologiesListToTemplate(technologies);
  } catch (error) {
    return error;
  }
};

export const createTechnology = async (technologyName) => {
  try {
    const newTechnologyBody = {
      title: technologyName,
    };

    const technology = await db.Technology.create(newTechnologyBody);

    return technology;
  } catch (error) {
    return error;
  }
};
