const { db } = require("../../models");

export const getAllCandidates = async () => {
  try {
    const candidates = await db.Candidate.findAll();
    return candidates;
  } catch (error) {
    return error;
  }
};

export const findCandidateByFullName = async (candidateFullName) => {
  try {
    const candidates = await getAllCandidates();
    const firstName = candidateFullName.split(" ")[0];
    const lastName = candidateFullName.split(" ")[1];

    return candidates.filter(
      (el) => el.firstName === firstName && el.lastName === lastName
    )[0];
  } catch (error) {
    return error;
  }
};
