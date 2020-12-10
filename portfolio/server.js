require("dotEnv").config();

//___________________
//Dependencies
//___________________
const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const app = express();
const db = mongoose.connection;
const show = console.log;
show("im cool");
const Project = require("./models/schema.js");

//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3001;

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/" + `project2`;

console.log(process.env.MONGODB_URI);

// Connect to Mongo
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Error / success
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", MONGODB_URI));
db.on("disconnected", () => console.log("mongo disconnected"));

// open the connection to mongo
db.on("open", () => {});

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static("public"));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false })); // extended: false - does not allow nested objects in query strings
app.use(express.json()); // returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride("_method")); // allow POST, PUT and DELETE from a form

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//___________________
// Routes
//___________________
//localhost:3000
app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/about", (req, res) => {
  res.render("About");
});

app.get("/contact", (req, res) => {
  res.render("Contact");
});

//___________________
// Index
//___________________
app.get("/home", (req, res) => {
  Project.find({}, (err, allTabs) => {
    if (!err) {
      console.log(allTabs);

      res.render("Index", {
        project: allTabs,
      });
    } else {
      res.send(err);
    }
  });
});

//___________________
// New
//___________________
app.get("/home/new", (req, res) => {
  res.render("New");
});

//___________________
// Delete
//___________________

app.delete("/home/:id", (req, res) => {
  Project.findByIdAndRemove(req.params.id, (err, foundProject) => {
    if (!err) {
      res.redirect("/home");
    } else {
      res.send(err);
    }
  });
});

//___________________
// Update
//___________________

app.put("/home/:id", (req, res) => {
  Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedProject) => {
      if (!err) {
        res.redirect("/home");
      } else {
        res.send(err);
      }
    }
  );
});

//___________________
// Create
//___________________

app.post("/home", (req, res) => {
  Project.create(req.body, (err, createdProject) => {
    if (!err) {
      res.redirect("/home");
    } else {
      res.send(err);
    }
  });
});

//___________________
// Edit
//___________________

app.get("/home/:id/edit", (req, res) => {
  Project.findById(req.params.id, (err, foundProject) => {
    if (!err) {
      res.render("Edit", {
        project: foundProject,
      });
    } else {
      res.send(err);
    }
  });
});

//___________________
// Show
//___________________

app.get("/home/:id", (req, res) => {
  Project.findById(req.params.id, (err, foundProject) => {
    if (!err) {
      res.render("Show", {
        project: foundProject,
      });
    } else {
      res.send(err);
    }
  });
});

//___________________
//Listener
//___________________

app.listen(PORT, () => console.log("Listening on port:", PORT));
// console.log(process.env.MONGODB_URI);
