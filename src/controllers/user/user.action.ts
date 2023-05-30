import { usersListToRequestTemplate } from "../../utils/helpers";
const { db } = require("../../models");

export const getAllUsers = async () => {
  try {
    const users = await db.User.findAll({ include: db.Role });
    return usersListToRequestTemplate(users);
  } catch (error) {
    return error;
  }
};
