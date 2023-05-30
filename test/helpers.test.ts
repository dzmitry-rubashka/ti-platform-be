import {
  technologiesListToTemplate,
  usersListToRequestTemplate,
} from "../src/utils/helpers";
import { v4 } from "uuid";

describe("Helpers tests", () => {
  const templateForTechnologies = [{ id: "", value: "" }];

  const templateForUsers = [
    { id: "", role: [{ id: "", title: "" }], name: "", email: "" },
  ];

  const mockDataForTechologiesTest = [
    { id: 1, title: "JavaScript" },
    { id: 2, title: "Angular.js" },
  ];

  const mockDataForUsersTest = [
    {
      id: 1,
      firstName: "Siarhei",
      lastName: "Korbut",
      email: "Siarhei.Korbut@itechart.com",
      Roles: [{ id: 1, title: "HR" }],
    },
    {
      id: 2,
      firstName: "TestFirstName",
      lastName: "TestLastname",
      email: "TestEmail@itechart.com",
      Roles: [
        { id: 2, title: "TestRole1" },
        { id: 3, title: "TestRole2" },
      ],
    },
  ];

  test("Function technologiesListToTemplate() should return array equal to template", () => {
    const functionResult = technologiesListToTemplate(
      mockDataForTechologiesTest
    );

    functionResult.map((el, elIndex) => {
      const templateKeys = Object.keys(templateForTechnologies[0]);
      const resultObjKeys = Object.keys(el);
      const mockDataValues = Object.values(mockDataForTechologiesTest[elIndex]);
      const resultValues = Object.values(el);

      resultObjKeys.map((key, idx) => {
        expect(key).toEqual(templateKeys[idx]);
      });

      resultValues.map((value, idx) => {
        expect(value).toEqual(mockDataValues[idx]);
      });
    });
  });

  test("Function usersListToRequestTemplate should return an array of objects with template keys equatation", () => {
    const testResult = usersListToRequestTemplate(mockDataForUsersTest);
    const templateKeys = Object.keys(templateForUsers[0]);

    testResult.map((el, index) => {
      const testResultKeys = Object.keys(el);

      testResultKeys.map((key, idx) => {
        expect(key).toEqual(templateKeys[idx]);
      });
    });
  });

  test("Function usersListToRequestTemplate should return an array of objects with template values equatation", () => {
    const testResult = usersListToRequestTemplate(mockDataForUsersTest);
    const templateKeys = Object.keys(templateForUsers[0]);

    testResult.map((el, index) => {
      const resultValues = Object.values(el);
      const resultKeys = Object.keys(el);
      const mockedDataValues = Object.values(mockDataForUsersTest[index]);

      resultValues.map((value: any, idx) => {
        if (resultKeys[idx] === "name") {
          expect(value).toEqual(
            `${mockDataForUsersTest[index].firstName} ${mockDataForUsersTest[index].lastName}`
          );
        }
        if (resultKeys[idx] === "role") {
          value.map((val, number) => {
            expect(val.id).toEqual(
              mockDataForUsersTest[index].Roles[number].id
            );
            expect(val.title).toEqual(
              mockDataForUsersTest[index].Roles[number].title
            );
          });
        }
      });
    });
  });
});
