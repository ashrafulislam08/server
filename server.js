const express = require("express");

const app = express();

const books = [
  {
    id: 1,
    name: "Be a Monster",
    author: "Karim Khan",
    price: 200,
  },
  {
    id: 2,
    name: "Think Intellectually",
    author: "Sam Bolt",
    price: 560,
  },
  {
    id: 3,
    name: "King of Kingdom",
    author: "Becon Hosnar",
    price: 1000,
  },
  {
    id: 4,
    name: "Be Like a Robot",
    author: "Mubarak Kha",
    price: 520,
  },
  {
    id: 5,
    name: "Art Of Thinking Clearly",
    author: "Mubarak Kha",
    price: 320,
  },
  {
    id: 6,
    name: "Making a Billion Dollar Startup",
    author: "Monalisa",
    price: 150,
  },
  {
    id: 7,
    name: "100+ Business Ideas",
    author: "Ashraful Islam",
    price: 720,
  },
  {
    id: 8,
    name: "How to Influence Friends and People",
    author: "Jan Knawsar",
    price: 320,
  },
  {
    id: 9,
    name: "Stupid Marketing ",
    author: "John Hammar",
    price: 320,
  },
  {
    id: 10,
    name: "Art Of Thinking Clearly",
    author: "Mubarak Kha",
    price: 320,
  },
];

app.get("/books", (req, res) => {
  if (req.query.show === "all") return res.json(books);
  if (req.query.price == "500") {
    const result = books.filter((book) => book.price <= 500);
    res.json(result);
  }
  if (req.query.price == "1000") {
    const result = books.filter((book) => book.price <= 1000);
    res.json(result);
  }
});

app.listen(3000, () => {
  console.log(`Server is running on port: 3000`);
});
