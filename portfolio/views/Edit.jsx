const React = require("react");
const AppLayout = require("./layout/AppLayout.jsx");

class Edit extends React.Component {
  render() {
    //deconstruction
    const { title, description, _id } = this.props.project;

    return (
      <AppLayout
        title={`Edit ${title.toUpperCase()} Project`}
        stylesheet="/style.css"
        js="/app.js"
      >
        <form action={`/home/${_id}?_method=PUT`} method="POST">
          Title: <input type="text" name="title" value={title} id="forms" />
          <br />
          Description:
          <input
            type="text"
            name="description"
            value={description}
            id="forms"
          />
          <br />
          <input type="submit" value="Update Project" />
        </form>
      </AppLayout>
    );
  }
}

module.exports = Edit;
