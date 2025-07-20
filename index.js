const express = require("express");

const app = express();
const port = process.env.PORT || 3001;
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }));

/* Write your code here:
Step 1: Render the home page "/" index.ejs
Step 2: Make sure that static files are linked to and the CSS shows up.
Step 3: Add the routes to handle the render of the about and contact pages.
  Hint: Check the nav bar in the header.ejs to see the button hrefs
Step 4: Add the partials to the about and contact pages to show the header and footer on those pages. */


/* Step 2 */
app.use(express.static("public"))


/*Step 1 */
app.get("/", (req, res) => {
  res.render("index.ejs")
});


/*Step 3 */
app.get("/about", (req, res) => {
  res.render("about.ejs")
});


/*Step 4 */
app.get("/contact", (req, res) => {
  res.render("contact.ejs", {
    name : "",
    email : "",
    comment : ""
  })
})



/*Post */
app.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const comment = req.body.comment;
  res.render("submitted.ejs", {
    name : name,
    email : email,
    comment : comment
  })
})


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
