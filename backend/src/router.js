const express = require("express");

const upload = require("./services/upload");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const userControllers = require("./controllers/userControllers");
const { hashPassword } = require("./services/hashedPassword");
const verifyToken = require("./services/verifyToken");
const productControllers = require("./controllers/productControllers");
const addressControllers = require("./controllers/addressControllers");
const discountControllers = require("./controllers/discountControllers");
const expeditionControllers = require("./controllers/expeditionControllers");
const wishlistControllers = require("./controllers/wishlistControllers");

const newsletterControllers = require("./controllers/newsletterControllers");

const cartControllers = require("./controllers/cartControllers");
const productInCartControllers = require("./controllers/productInCartControllers");
const parcelControllers = require("./controllers/parcelControllers");

const commandControllers = require("./controllers/commandControllers");

const productSousCatControllers = require("./controllers/productSousCatControllers");

const verifyAdmin = require("./services/verifyAdmin");

const commentaireControllers = require("./controllers/commentaireControllers");

const productCatControllers = require("./controllers/productCatControllers");
const detailOrderControllers = require("./controllers/detailOrderControllers");

// Route to get a list of
router.get("/users", userControllers.getAllUser);
router.get("/product", productControllers.getAllProduct);
router.get("/address", addressControllers.getAllAddress);
router.get("/expedition", expeditionControllers.getAllExpedition);

router.get("/wishlist", wishlistControllers.getAllProductsInWishlist);
router.get("/commentaire", commentaireControllers.getAllCommentaire);

router.get("/newsletter", newsletterControllers.getAllNewsletter);

router.get("/product-cat", productCatControllers.getAllProductCat);
router.get("/all-cart", cartControllers.getAllCart);
router.get("/all-product-cart", productInCartControllers.getAllProductsInCart);
router.get("/parcel", parcelControllers.getAllParcel);

router.get("/all-command", commandControllers.getAllCommands);

router.get("/product-sous-cat", productSousCatControllers.getAllProductSousCat);

// router.get("/wishlist", wishlistControllers.getAllProductsInWishlist);

// Route to get a specific by ID

router.get("/wishlist/:id", wishlistControllers.read);
router.get("/newsletter/:id", newsletterControllers.read);

router.get("/wishlist", verifyToken, wishlistControllers.read);
/* tous les panier de l'utilisateur */
router.get("/cart", verifyToken, cartControllers.read);

router.get("/product-in-cart/:cart_id", productInCartControllers.read);

// route pour récupérer toutes les commandes appartenant à un utilisateur
router.get("/command", verifyToken, commandControllers.getCommandByUser);
router.get("/order-detail", verifyToken, detailOrderControllers.getDetailOrder);

// Route to get a specific by ID
router.get("/users/:id", userControllers.read);
router.get("/product/:id", productControllers.read);
router.get("/discount/:id", discountControllers.read);

router.get("/commentaire/:id", commentaireControllers.read);

/* get les produits avec par catégorie (homme femme enfant) */
router.get("/product-cat/:id", productControllers.readByCategory);

/* get les produits avec la catégorie et la sous catégorie (homme femme enfant) + (chaussure vêtements accessoires) */
router.get(
  "/product-cat/:productCategoryId/product-sous-cat/:subProductCategoryId",
  productControllers.readByCategoryAndSousCategory
);

router.get("/command/:id", verifyToken, commandControllers.read);

router.get("/parcel/:id", parcelControllers.read);

router.get("/product-sous-cat/:id", productSousCatControllers.read);

// Route to add a new
router.post(
  "/order-detail",
  verifyToken,
  detailOrderControllers.addProductInDetailOrder
);

router.post("/users", hashPassword, userControllers.add);
router.post("/product", upload, productControllers.add);
router.post("/address", verifyToken, addressControllers.add);

router.post("/discount", discountControllers.add);

router.post("/commentaire", commentaireControllers.add);

router.post("/wishlist", verifyToken, wishlistControllers.add);
router.post("/product-cat", productCatControllers.add);
router.post("/product-sous-cat", productSousCatControllers.add);

// router.post("/expedition", expeditionControllers.add);

// router.post("/cart", verifyToken, cartControllers.add);
router.post("/cart", cartControllers.addCart);

router.post("/command", verifyToken, commandControllers.add);

router.post("/product-in-cart", productInCartControllers.add);

router.post("/expedition", verifyToken, expeditionControllers.addWithUserId);
// Route to update
router.put("/users/:id", userControllers.edit);
router.put("/address/:id", verifyToken, addressControllers.edit);
router.put("/expedition/:id", expeditionControllers.edit);
router.put("/product-cat/:id", productCatControllers.update);
router.put("/product-sous-cat/:id", productSousCatControllers.update);

// Route to patch
router.patch(
  "/users/update-password",
  verifyToken,
  hashPassword,
  userControllers.updatePassword
);
router.patch("/users", verifyToken, userControllers.update);
router.patch("/product/:id", productControllers.update);

// Route to delete
router.delete(
  "/users/:id",
  verifyToken,
  verifyAdmin,
  userControllers.deleteUser
);
router.delete("/product/:id", productControllers.deleteProduct);
router.delete(
  "/expedition/:id",
  verifyToken,
  expeditionControllers.deleteExpedition
);
router.delete("/discount/:id", discountControllers.deleteDiscount);
// router.delete("/product", productControllers.deleteProduct);
router.delete("/wishlist/:id", wishlistControllers.deleteProductInWishlist);
router.delete("/product-cat/:id", productCatControllers.deleteProductCat);
router.delete("/product-sous-cat/:id", productSousCatControllers.deleteSousCat);

router.delete("/cart/:id", cartControllers.deleteCart);

// route spéciale fonctionalité précises

router.get("/new-product", productControllers.getNewProducts);

/* panier de l'utilisateur en cour (le dernier panier correspondant a user dans table cart) */
router.get("/cart-session", verifyToken, cartControllers.sessionCart);

router.get(
  "/last-added-product-in-cart/:cart_id",
  productInCartControllers.readTheLast
);
// Route to post by
router.post("/login", userControllers.readByEmail);
router.post("/discount", discountControllers.add);

// Route get logout

router.get("/logout", verifyToken, userControllers.logout);

// Route to get : me
router.get("/me", verifyToken, userControllers.readById);

/* ************************************************************************* */

module.exports = router;
