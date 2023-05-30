"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Candidate", [
      {
        id: 1,
        firstName: "Ivan",
        lastName: "Ivanov",
        email: "Ivan.Ivanov@itechart.com",
        phoneNumber: "+375291231231",
        cv: "http://link-to-candidate-cv1.com",
        notes: "some notes will be here...",
        hrId: "1",
        managerId: "2",
      },
      {
        id: 2,
        firstName: "Sergey",
        lastName: "Sergeev",
        email: "Sergey.Sergeev@itechart.com",
        phoneNumber: "+375291231232",
        cv: "http://link-to-candidate-cv2.com",
        notes: "some notes will be here...",
        hrId: "1",
        managerId: "2",
      },
      {
        id: 3,
        firstName: "Alex",
        lastName: "Alexeev",
        email: "Alex.Alexeev@itechart.com",
        phoneNumber: "+375291231233",
        cv: "http://link-to-candidate-cv3.com",
        notes: "some notes will be here...",
        hrId: "1",
        managerId: "2",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Candidate", null, {});
  },
};
