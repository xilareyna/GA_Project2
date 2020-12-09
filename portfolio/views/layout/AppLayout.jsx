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
            <a href={`/home`}>Home</a>
            <a href={`/about`}>About Me</a>
            <a href={`/home/new`}>Create New Project</a>
            <a href={`/contact`}>Contact Me</a>
          </header>
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
          {this.props.children}
          <script src={this.props.js}></script>
        </body>
      </html>
    );
  }
}

module.exports = AppLayout;
