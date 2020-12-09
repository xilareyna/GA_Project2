const React = require("react");

class AppLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />

          <link rel="stylesheet" href={this.props.stylesheet} />

          <title>{this.props.title}</title>
        </head>
        <body>
          <header>
            <a href={`/home`} id="headerLinks">
              Portfolio
            </a>
            <a href={`/about`} id="headerLinks">
              About Me
            </a>
            <a href={`/home/new`} id="headerLinks">
              Create New Project
            </a>
            <a href={`/contact`} id="headerLinks">
              Contact Me
            </a>
          </header>
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
          {this.props.children}
          <footer>
            Built + Designed by
            <a
              href="https://www.linkedin.com/in/xilareyna/"
              target="_blank"
              id="footerLink"
            >
              Xila Reyna
            </a>
          </footer>
          <script src={this.props.js}></script>
        </body>
      </html>
    );
  }
}

module.exports = AppLayout;
