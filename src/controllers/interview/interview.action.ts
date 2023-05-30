import { postInterviewRequestBodyTemplate } from "../../templates/templates";
import { findCandidateByFullName } from "../candidate/candidate.action";
import { getInterviewLevelByTitle } from "../interviewLevel/interviewLevel.action";
const { db } = require("../../models");

export const checkRequestParams = (requestBody) => {
  const requestBodyKeys = Object.keys(requestBody);
  console.log(requestBodyKeys)
  const templateKeys = Object.keys(postInterviewRequestBodyTemplate);
  console.log(templateKeys)
  return JSON.stringify(requestBodyKeys) === JSON.stringify(templateKeys);
};

export const checkRequestBodyValues = (requestBody) => {
  let checkResult = true;
  Object.keys(requestBody).map((key) => {
    if (key === "candidate") {
      const tempObject = requestBody.candidate;
      Object.keys(tempObject).map((el) => {
        if (tempObject[el].length === 0) {
          checkResult = false;
        }
      });
    }
    if (key === "interviewers") {
      const tempArray = requestBody.interviewers;
      if (tempArray.length === 0) {
        checkResult = false;
      }

      tempArray.map((interviewer) => {
        const interviewerValuesArray = Object.values(interviewer);
        interviewerValuesArray.map((value) => {
          if (!value) checkResult = false;
        });
      });
    }
  });

  return checkResult;
};

export const createInterview = async (requestBody) => {
  try {
    const { candidate, hrNotes, interviewers } = requestBody;
    const searchedCandidate = await findCandidateByFullName(candidate.fullName);
    const interviewLevel = await getInterviewLevelByTitle(
      candidate.expectedLevel
    );

    const technologiesList = candidate.technologies;

    const interviewBody = {
      name: "sfsdgds",
      candidateId: searchedCandidate.id,
      date: null,
      interviewLevelId: interviewLevel.id,
      feedbackId: null,
      hrId: null,
      managerId: null,
    };

    const interview = await db.Interview.create(interviewBody);

    for (let elem of technologiesList) {
      await db.InterviewTechnologies.create({
        interviewId: interview.id,
        technologyId: elem,
      });
    }

    for (let elem of interviewers) {
      await db.InterviewUsers.create({
        interviewId: interview.id,
        userId: elem.id,
      });
    }
    return interview;
  } catch (error) {
    return error;
  }
};
