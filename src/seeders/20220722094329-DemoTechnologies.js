"use strict";

const e = require("express");

const TECHNOLOGIES = [
  "JavaScript",
  "Node.js",
  "HTML/CSS",
  "React.js",
  "Angular.js",
  "Vue.js",
  "TypeScript",
];

const createDemoTechnologies = () => {
  let demoTechnologies = [];

  TECHNOLOGIES.map((el) => {
    let technology = {
      title: el,
    };
    demoTechnologies.push(technology);
  });

  return demoTechnologies;
};

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Technology", createDemoTechnologies());
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Technology", null, {});
  },
};
