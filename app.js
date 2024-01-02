const express = require("express");
let paydunya = require("paydunya");
const cors = require("cors");
const app = express();
const port = 3000;

const { setup, store } = require("./paydunya.config");
app.use(cors());
app.use(express.json());
app.post("/paydunya-checkout", async (req, res) => {
  var invoice = new paydunya.CheckoutInvoice(setup, store);
  const { item, quantity, unit_price, description } = req.body;

  invoice.addItem(item, quantity, unit_price, unit_price * quantity); // name, quantity, unit price, total price
  invoice.description = description;
  invoice.totalAmount = quantity * unit_price;

  invoice
    .create()
    .then(function () {
      invoice.status;
      invoice.token; // invoice token
      invoice.responseText;
      invoice.url; // PAYDUNYA redirect checkout url
      res.json({ url: invoice.url });
    })
    .catch(function (e) {
      throw new Error(`Echec de la transaction ${e.message}`);
    });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
