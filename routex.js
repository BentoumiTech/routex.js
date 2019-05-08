function routex() {
  let routes = [];

  function findByName(name) {
    return routes.find(route => route.name === name);
  }

  function add(route) {
    const { name, pattern, page } = route;

    if (findByName(name)) {
      throw new Error('This routeName already exists');
    }

    routes.push({
      name,
      pattern: `/${pattern || name}`,
      page: `/${page || name}`
    });

    return this;
  }

  return {
    add,
    routes
  };
}

export default routex;
