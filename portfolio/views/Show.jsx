const React = require("react");
const AppLayout = require("./layout/AppLayout.jsx");

class Show extends React.Component {
  render() {
    return (
      <AppLayout
        title={`${this.props.project.title}`}
        stylesheet="/style.css"
        js="/app.js"
      >
        <p>
          {this.props.project.title}
          <br />
          {this.props.project.description}
          <br />
          <a href={this.props.project.link} target="_blank">
            Link to project
          </a>
        </p>
        {/* <a href={"/home"}>Home</a> <br />
        <a href={"/home/new"}>Create a new project</a> */}
        <br />
        <a
          href={`/home/${this.props.project._id}/edit`}
        >{`Edit ${this.props.project.title}`}</a>
      </AppLayout>
    );
  }
}

module.exports = Show;
