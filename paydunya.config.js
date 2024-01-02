let paydunya = require("paydunya");
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
  logoURL: "http://www.chez-sandra.sn/logo.png",
});

module.exports = { setup, store };
