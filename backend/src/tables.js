/* ************************************************************************* */
// Register Data Managers for Tables
/* ************************************************************************* */

// Import the manager modules responsible for handling data operations on the tables
const UserManager = require("./models/UserManager");
const ProductManager = require("./models/ProductManager");
const AddressManager = require("./models/AddressManager");
const ExpeditionManager = require("./models/ExpeditionManager");
const WishlistManager = require("./models/WishlistManager");
const DiscountManager = require("./models/DiscountManager");

const CommentaireManager = require("./models/CommentaireManager");

const NewsletterManager = require("./models/NewsletterManager");

const ProductCatManager = require("./models/ProductCatManager");
const ProductInCartManager = require("./models/ProductInCartManager");
const CartManager = require("./models/CartManager");
const ParcelManager = require("./models/ParcelManager");

const CommandManager = require("./models/CommandManager");

const ProductSousCatManager = require("./models/ProductSousCatManager");
const DetailOrderManager = require("./models/DetailOrderManager");

const managers = [
  UserManager,
  ProductManager,
  AddressManager,
  ExpeditionManager,
  WishlistManager,
  DiscountManager,

  CommentaireManager,

  NewsletterManager,

  ProductCatManager,
  ProductInCartManager,
  CartManager,
  ParcelManager,

  CommandManager,

  ProductSousCatManager,
  DetailOrderManager,

  // Add other managers here
];

// Create an empty object to hold data managers for different tables
const tables = {};

// Register each manager as data access point for its table
managers.forEach((ManagerClass) => {
  const manager = new ManagerClass();
  tables[manager.table] = manager;
});
// console.info("table", tables);
// console.info("users", users);

/* ************************************************************************* */

// Use a Proxy to customize error messages when trying to access a non-existing table

// Export the Proxy instance with custom error handling
module.exports = new Proxy(tables, {
  get(obj, prop) {
    // Check if the property (table) exists in the tables object
    if (prop in obj) return obj[prop];

    // If the property (table) does not exist, throw a ReferenceError with a custom error message
    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
