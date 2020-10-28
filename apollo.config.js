module.exports = {
  client: {
    addTypename: false,
    includes: ["./src/**/Queries/*.ts"],
    service: {
      name: "hasura",
      url: "http://localhost:8080/v1/graphql",
      headers: {
        "content-type": "application/json",
      },
    },
  },
};
