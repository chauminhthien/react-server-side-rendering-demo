const express = require("express");

const app = express();

app.use(express.static("/public"));

app.get("*", (req, res) => {
  res.send(`
      <!doctype html>
      <html>
        <head>
          <title>Universal Reacl</title>
          <script src="bundle.js" defer></script>
        </head>
      </html>
  `);
  res.end();
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is listening http://localhost:${process.env.PORT || 3000}/`);
});
