const { UPDATE_LINK } = require("./utils/linkQueries");
const sendQuery = require("./utils/sendQuery");
const formattedResponse = require("./utils/formattedResponse");
exports.handler = async (event) => {
  if (event.httpMethod !== "PUT") {
    return formattedResponse(405, "Method not supported");
  }

  const { name, url, description, _id: id, archieved } = JSON.parse(event.body);
  const variables = { name, url, description, archieved, id };
  try {
    const { updateLink } = await sendQuery(UPDATE_LINK, variables);
    return formattedResponse(200, updateLink);
  } catch (err) {
    console.error(err);
    return formattedResponse(500, { err: "Something went wrong" });
  }
};
