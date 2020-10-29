const GET_LINKS = `
  query {
    allLinks{
      data{
        _id
        name
        url
        description
        archieved
      }
    }
  }`;

const CREATE_LINK = `
  mutation($name: String!, $url: String!, $description: String!, $archieved: Boolean = false){
    createLink(data: {name: $name, url: $url, description: $description, archieved: $archieved}) {
      _id
      name
      url
      description
      archieved
    }
  }`;

const UPDATE_LINK = `
mutation($id: ID!, $name: String!, $url: String!, $description: String!, $archieved: Boolean!) {
  updateLink(id: $id, data: {name: $name, url: $url, description: $description, archieved: $archieved}) {
    _id
    name
    url
    description
    archieved
  }
}`;

const DELETE_LINK = `
mutation($id: ID!) {
  deleteLink(id: $id) {
    _id
  }
}`;

module.exports = {
  GET_LINKS,
  CREATE_LINK,
  UPDATE_LINK,
  DELETE_LINK,
};
