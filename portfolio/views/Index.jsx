const React = require("react");
const AppLayout = require("./layout/AppLayout.jsx");

class Home extends React.Component {
  render() {
    // console.log(this.props.fruits);
    return (
      <AppLayout title="Home" stylesheet="/style.css" js="/app.js">
        <ul className="homePage">
          {this.props.project.map((proj) => {
            return (
              <li>
                <a href={`/home/${proj._id}`}>{proj.title}</a>
                <br />
                {proj.description}
                <br />
                {proj.link}
                <form method="POST" action={`/home/${proj._id}?_method=DELETE`}>
                  <input type="submit" value={`Delete ${proj.title}`} />
                </form>
              </li>
            );
          })}
        </ul>
      </AppLayout>
    );
  }
}

module.exports = Home;
