const express = require("express");
const path = require("path");
const app = express();

// Routes
// const contactRoutes = require("./routes/contactRoutes");
// app.use("/api/contacts", contactRoutes);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "../frontend/public")));

app.get("/", (req, res) => {
  // Handle the root path request
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/contact", (req, res) => {
  // Render the contact page
  res.send("This is the contact page");
});

// Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
