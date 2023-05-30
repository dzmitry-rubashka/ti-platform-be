const { db } = require("../../models");

export const getInterviewLevelByTitle = async (levelTitle) => {
  try {
    const interviewLevel = await db.InterviewLevel.findOne({
      where: { levelTitle },
    });
    return interviewLevel;
  } catch (error) {
    return error;
  }
};
