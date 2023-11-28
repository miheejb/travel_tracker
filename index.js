import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user : "postgres",
  host : "localhost",
  database : "world",
  password: "postit13!",
  port: 5432,
});
db.connect();

let selectedCountries = [];

db.query("SELECT country_code FROM visited_countries", (err,res)=>{
  if(err){
    console.error("Error executing query", err.stack);
  } else {
    selectedCountries.push;
  }
  db.end();
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  res.render("index.ejs", {countries:selectedCountrie, total: selectedCountries.length})
  
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
