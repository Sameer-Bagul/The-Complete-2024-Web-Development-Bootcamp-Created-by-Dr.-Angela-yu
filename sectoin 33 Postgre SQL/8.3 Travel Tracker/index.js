import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user:"postgres",
  host:"localhost",
  password:"Sameer123",
  database:"world",
  port:"5432"
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {

  //Write your Logic to get the data from the database and use that data for get [/] request  
  const result = await db.query("SELECT country_code from visited_countries");
  let countries = [];
  result.rows.forEach((country) =>{
    countries.push(country.country_code);
  });
  console.log(result.rows);

  // here write the code for the rendering process of respont which have to be goven to the get request 
  res.render("index.ejs", {countries: countries, total: countries.length });
  db.end();
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
