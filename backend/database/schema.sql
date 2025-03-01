DROP TABLE IF EXISTS user, address, discount, product_category, sous_product_category, product, commentaire, wishlist, newsletter, cart, expedition, parcel, command, product_cart;

CREATE TABLE user (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  birthday DATE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  hashedPassword VARCHAR(255) NOT NULL,
  phone_mobile VARCHAR(15) NOT NULL,
  phone_fix VARCHAR(15) NOT NULL,
  isMember BOOLEAN DEFAULT 0,
  isAdmin BOOLEAN DEFAULT 0 
  );

CREATE TABLE address (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  address_line1_user VARCHAR(150) NOT NULL,
  address_line2 VARCHAR(150) NOT NULL,
  postal_code VARCHAR(50) NOT NULL,
  city VARCHAR(150) NOT NULL,
  country VARCHAR(150) NOT NULL,
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);

CREATE TABLE discount (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(150) NOT NULL,
  description VARCHAR(150) NOT NULL,
  disc_pourc FLOAT NOT NULL,
  active BOOLEAN NOT NULL,
  date_expiration DATE NOT NULL
);
CREATE TABLE product_category (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(150) NOT NULL,
  description VARCHAR(150) NOT NULL,
  state BOOLEAN NOT NULL
);
CREATE TABLE sous_product_category (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(150) NOT NULL,
  description VARCHAR(150) NOT NULL,
  state BOOLEAN NOT NULL
);
CREATE TABLE product (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(250) NOT NULL,
  description VARCHAR(250) NOT NULL,
  price DECIMAL NOT NULL,
  img_url VARCHAR (250),
  member_only BOOLEAN NOT NULL,
  stock INT,
  product_category_id INT,
  sous_product_category_id INT,
  discount_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (product_category_id) REFERENCES product_category(id) ON DELETE CASCADE,
  FOREIGN KEY (sous_product_category_id) REFERENCES sous_product_category(id) ON DELETE CASCADE,
  FOREIGN KEY (discount_id) REFERENCES discount(id) ON DELETE CASCADE
);
CREATE TABLE commentaire (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  firstname VARCHAR(255) NOT NULL,
  commentaire VARCHAR(255) NOT NULL,
  note INT,
  product_id INT,
  FOREIGN KEY (product_id) REFERENCES product(id) ON DELETE CASCADE
);
CREATE TABLE wishlist (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  size ENUM('XS', 'S', 'M', 'L', 'XL','30','31','32','33','34','35','36', '37', '38', '39', '40', '41', '42', '43', '44'),
  quantity INT NOT NULL,
  product_id INT,
  user_id INT,
  FOREIGN KEY (product_id) REFERENCES product(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);
CREATE TABLE newsletter (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);
CREATE TABLE cart (
  -- panier
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);
CREATE TABLE expedition (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  address VARCHAR(150) NOT NULL,
  postal_code VARCHAR(50) NOT NULL,
  city VARCHAR(150),
  country VARCHAR(150),
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);
CREATE TABLE parcel (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  address VARCHAR(150) NOT NULL,
  postal_code VARCHAR(50) NOT NULL,
  city VARCHAR(150)
);

CREATE TABLE product_cart(
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  quantity INT NOT NULL,
  size ENUM('XS', 'S', 'M', 'L', 'XL','30','31','32','33','34','35','36', '37', '38', '39', '40', '41', '42', '43', '44') NOT NULL,
  product_id INT,
  cart_id INT,
  FOREIGN KEY (product_id) REFERENCES product(id) ON DELETE CASCADE,
  FOREIGN KEY (cart_id) REFERENCES cart(id) ON DELETE CASCADE
);

CREATE TABLE command (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  payment VARCHAR(255) NOT NULL,
  statut VARCHAR(255) NOT NULL,
  user_id INT,
  parcel_id INT,
  cart_id INT,
  expedition_id INT,
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE,
  FOREIGN KEY (parcel_id) REFERENCES parcel(id) ON DELETE CASCADE,
  FOREIGN KEY (cart_id) REFERENCES cart(id) ON DELETE CASCADE,
  FOREIGN KEY (expedition_id) REFERENCES expedition(id) ON DELETE CASCADE
);

CREATE TABLE detail_order(
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  quantity INT NOT NULL,
  size ENUM('XS', 'S', 'M', 'L', 'XL','30','31','32','33','34','35','36', '37', '38', '39', '40', '41', '42', '43', '44') NOT NULL,
  product_id INT,
  command_id INT,
  FOREIGN KEY (product_id) REFERENCES product(id) ON DELETE CASCADE,
  FOREIGN KEY (command_id) REFERENCES command(id) ON DELETE CASCADE
);