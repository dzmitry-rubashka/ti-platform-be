export const technologiesListToTemplate = (technolgiesList) => {
  let responseTemplate = [];

  technolgiesList.map((el) => {
    let technologyObjTemplate = {
      id: el.id,
      value: el.title,
    };

    responseTemplate.push(technologyObjTemplate);
  });

  return responseTemplate;
};

export const usersListToRequestTemplate = (usersList) => {
  let responseTemplate = [];

  usersList.map((user) => {
    let userObjTemplate = {
      id: user.id,
      role: user.Roles.map((el) => {
        return {
          id: el.id,
          title: el.title,
        };
      }),
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
    };

    responseTemplate.push(userObjTemplate);
  });

  return responseTemplate;
};
