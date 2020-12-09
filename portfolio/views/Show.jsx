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
        <p class="showPage">
          {/* <iframe src={this.props.project.link} class="projLinks"></iframe> */}

          <br />
          {this.props.project.description}
          <br />
          <button id="showLink">
            <a
              href={this.props.project.link}
              target="_blank"
              class="showRtEdit"
            >
              Link to project
            </a>
          </button>
          <button id="showBtn">
            <a
              href={`/home/${this.props.project._id}/edit`}
              class="showRtEdit"
            >{`Edit ${this.props.project.title}`}</a>
          </button>
        </p>
      </AppLayout>
    );
  }
}

module.exports = Show;
