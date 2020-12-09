const React = require("react");
const AppLayout = require("./layout/AppLayout.jsx");

class About extends React.Component {
  render() {
    return (
      <AppLayout title={`About Me`} stylesheet="/style.css" js="/app.js">
        <p id="aboutP">
          Welcome to my Portfolio!✨
          <br />
          Allow me to formally introduce myself, my name is Xila Reyna.
          <br />
          I am a Full-Stack Software Engineer Student. I have undergone
          concentrated studies of the MERN Stack: NODE.JS, Express, MongoDB, +
          Ruby.
          <br />I absolutely love learning new things and debugging code. In my
          opinion theres nothing more rewarding than the moment you finally
          solve a big problem.
          <br />
          My background in education is quite diverse. I have a Masters of
          Science in Finance + soon to be certification of Full-Stack Software
          Engineer.
          <br />
          In my personal time I love to paint, go on outings with my dog, Mila +
          try new food.
        </p>
      </AppLayout>
    );
  }
}

module.exports = About;
