const React = require("react");

const AppLayout = require("./layout/AppLayout.jsx");

class New extends React.Component {
  render() {
    return (
      <AppLayout title="New Project Page" stylesheet="/style.css" js="/app.js">
        <form action="/home" method="POST">
          Title: <input type="text" name="title" id="forms" />
          <br />
          Description: <input type="text" name="description" id="forms" />
          <br />
          Link: <input type="text" name="link" id="forms" />
          <br />
          <input type="submit" value="Create Project" />
        </form>
        <br />
      </AppLayout>
    );
  }
}

module.exports = New;
