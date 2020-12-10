const React = require("react");
const AppLayout = require("./layout/AppLayout.jsx");

class Index extends React.Component {
  render() {
    // console.log(this.props.fruits);
    return (
      <AppLayout title="Portfolio" stylesheet="/style.css" js="/app.js">
        <ul className="homePage">
          {this.props.project.map((proj) => {
            return (
              <li class="indexLi">
                <a
                  href={`/home/${proj._id}`}
                  id="projectLink"
                  class="projectTitles"
                >
                  {proj.title.toUpperCase()}
                </a>

                <br />
                {proj.description}
                <br />

                <form
                  method="POST"
                  action={`/home/${proj._id}?_method=DELETE`}
                  class="homeDeleteBtn"
                >
                  <input
                    type="submit"
                    value={`Delete ${proj.title}`}
                    id="deleteBtnIndex"
                  />
                </form>
              </li>
            );
          })}
        </ul>
      </AppLayout>
    );
  }
}

module.exports = Index;

//{/* <br />
//     <iframe src={proj.link} class="projLinks"></iframe> */}
