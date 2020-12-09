const React = require("react");
const AppLayout = require("./layout/AppLayout.jsx");

class Contact extends React.Component {
  render() {
    return (
      <AppLayout
        title={`Contact Me`}
        stylesheet="/style.css"
        js="/app.js"
        html="/index.html"
      >
        <p id="contactP">
          Please feel free to reach out if you have any questions or prospective
          project requests.
        </p>
        <button class="contactButtons">
          <a href="mailto: xilareyna@gmail.com" class="contactLinks">
            Send Email
          </a>
        </button>
        <button class="contactButtons">
          <a
            href="https://www.linkedin.com/in/xilareyna/"
            target="_blank"
            class="contactLinks"
          >
            LinkedIn
          </a>
        </button>
      </AppLayout>
    );
  }
}

module.exports = Contact;
