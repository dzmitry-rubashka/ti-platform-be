import {
  checkRequestParams,
  checkRequestBodyValues,
  createInterview,
} from "./interview.action";

export const createInterviewController = async (request, response) => {
  const requestParams = checkRequestParams(request.body);
  console.log(requestParams, "requestParams")
  const requestBodyValues = checkRequestBodyValues(request.body);
  if (!requestParams) {
    return response.status(400).send("Please, check you request body");
  }
  if (!requestBodyValues) {
    return response
      .status(400)
      .send("Please, check you request body for empty values!");
  }

  return createInterview(request.body)
    .then((interview) => {
      return response.status(200).send(interview);
    })
    .catch((error) => response.status(500).send(`Server error: ${error}`));
};
