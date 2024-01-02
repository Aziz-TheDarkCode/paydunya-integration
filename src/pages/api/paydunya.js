import paydunya from "paydunya";
var setup = new paydunya.Setup({
  masterKey: "mNGlEwwx-ivF9-Jvsp-FonU-gNrEqMFrUUyQ",
  privateKey: "test_private_vvklF3vNN8PynLZJahzYlCDSOpz",
  publicKey: "test_public_adikZ9KZnzNhcjrol2lSAvnqbQT",
  token: "oC4dCxP4Z4cUOxgVKnXM",
  mode: "test", // Optionnel. Utilisez cette option pour les paiements tests.
});
var store = new paydunya.Store({
  name: "Wahab Ly", // only name is required
  tagline: "SONKO 2024",
  phoneNumber: "786300614",
  postalAddress: "Keur Massar - MTOA",
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
  try {
    var invoice = new paydunya.CheckoutInvoice(setup, store);

    const { item, quantity, unit_price, description } = req.body;
    console.log(req.body);

    // console.log(item);
    invoice.addItem(item, quantity, unit_price, unit_price * quantity);
    invoice.description = description;
    invoice.totalAmount = quantity * unit_price;

    invoice.create().then(function () {
      invoice.status;
      invoice.token; // invoice token
      invoice.responseText;
      invoice.url; // PAYDUNYA redirect checkout url
      res.status(200).json({ url: invoice.url });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Transaction failed: ${error.message}` });
  }
}
