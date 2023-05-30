import { getAllUsers } from "./user.action";

export const getAllUsersController = async (request, response) => {
  return getAllUsers()
    .then((users) => {
      return response.status(200).send(users);
    })
    .catch((error) => response.status(500).send(`Server error: ${error}`));
};
