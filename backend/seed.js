/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import Faker library for generating fake data
// const { faker } = require("@faker-js/faker");

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    /* ************************************************************************* */
    await database.query("SET FOREIGN_KEY_CHECKS = 0;");
    await database.query("truncate user");
    await database.query("SET FOREIGN_KEY_CHECKS = 1;");
    // Generating Seed Data
    // Generate fake data for the user table

    queries.push(
      database.query(
        `INSERT INTO user (
    firstname,
    lastname,
    birthday,
    email,
    hashedPassword,
    phone_mobile,
    phone_fix,
    isMember,
    isAdmin
  )
VALUES (
    'John',
    'Doe',
    '1990-01-15',
    'john.doe@example.com',
    'password123',
    '1234567890',
    '9876543210',
    1,
    1
  ),
  (
    'Jane',
    'Smith',
    '1985-05-20',
    'jane.smith@example.com',
    'securepass',
    '9876543210',
    '1234567890',
    0,
    0
  ),
  ('Alice',
   'Johnson',
   '1992-03-10',
   'alice.johnson@example.com',
   'hashed789', 
   '5551234567', 
   '7777654321', 
   1, 
   0
   ),
   (
    'Michael', 
    'Johnson', 
    '1982-11-03', 
    'michael.johnson@example.com', 
    'hashedpassword789', 
    '+1122334455', 
    '+9988776655', 
    1, 
    0),
(
'Emily', 
'Brown', 
'1995-02-10', 
'emily.brown@example.com', 
'hashedpasswordabc', 
'+9876543210', 
'+1234567890', 
1, 
0);`
      )
    );

    await database.query("SET FOREIGN_KEY_CHECKS = 0;");
    await database.query("truncate address");
    await database.query("SET FOREIGN_KEY_CHECKS = 1;");

    // Generate fake data for the address table
    // Optional: Truncate tables (remove existing data)

    queries.push(
      database.query(
        `INSERT INTO address (
    address_line1_user,
    address_line2,
    postal_code,
    city,
    country,
    user_id
  )
VALUES (
    '123 Main St',
    'Apt 456',
    12345,
    'Cityville',
    'Countryland',
    1
  ),
  (
    '789 Oak Ave',
    'Suite 101',
    67890,
    'Townburg',
    'Countrytop',
    2
  ),
  (
    '456 Elm St', 
    'Suite 202', 
    '54321', 
    'Rivertown', 
    'USA', 
    3
    ),
(
  '789 Oak St', 
  'Unit B', 
  '67890', 
  'Mapleton', 
  'USA', 
  4
  ),
  (
    '700 Oak St', 
    'Unit aaa', 
    '67000', 
    'Mapletony', 
    'USB', 
    5
    );`
      )
    );
    // Generate fake data for the product_category table

    await database.query("SET FOREIGN_KEY_CHECKS = 0;");
    await database.query("truncate discount");
    await database.query("SET FOREIGN_KEY_CHECKS = 1;");

    queries.push(
      database.query(`INSERT INTO discount (
    name,
    description,
    disc_pourc,
    active,
    date_expiration
  )
VALUES (
    'Summer Sale',
    'jusqu''à -20%',
    20.0,
    1,
    '2024-08-31'
  ),
  (
    'Clearance',
    'Dernière chance',
    30.0,
    1,
    '2024-12-31'
  );`)
    );

    await database.query("SET FOREIGN_KEY_CHECKS = 0;");
    await database.query("truncate product_category");
    await database.query("SET FOREIGN_KEY_CHECKS = 1;");

    queries.push(
      database.query(`INSERT INTO product_category (
        name, description, state
        )
VALUES 
(
  'Homme', 
  'pour nous les hommes', 
  1
  ),
  (
    'Femme', 
    'pour les femmes', 
    1
    ),
    (
  'Enfant', 
  'pour les petits', 
  1
  );`)
    );

    await database.query("SET FOREIGN_KEY_CHECKS = 0;");
    await database.query("truncate sous_product_category");
    await database.query("SET FOREIGN_KEY_CHECKS = 1;");

    queries.push(
      database.query(`

INSERT INTO sous_product_category (name, description, state)
VALUES (
    'Chaussure',
    'Chaussures',
    1
  ),
  (
    'Vêtement',
    'Vêtements',
    1
  ),
  (
    'Accessoire',
    'Accessoires',
    1
  );`)
    );

    // Generate fake data for the product table

    await database.query("SET FOREIGN_KEY_CHECKS = 0;");
    await database.query("truncate product");
    await database.query("SET FOREIGN_KEY_CHECKS = 1;");

    queries.push(
      database.query(`
  INSERT INTO product (
    name,
    description,
    price,
    img_url,
    member_only,
    stock,
    product_category_id,
    sous_product_category_id,
    discount_id
  )
VALUES
  ('Airmax Plus Drift', 'Revendique ton côté rebelle avec la Nike Air Max Plus Drift, un modèle Air novateur qui offre une stabilité et un amorti incroyables. Mesh respirant, dégradé de couleurs, lignes ondulées originales : cette sneaker affiche un style hors du commun.', 249.90, 'uploads/CHAUSSURE_RUNNING_HOMME_02.png', 0, 5, 1, 1, NULL),
  ('Sneaker Super Confort', 'Baskets décontractées confortables et élégantes pour hommes', 59.99, 'uploads/CHAUSSURE_RUNNING_HOMME_01.png', 0, 100, 1, 1, null),
  ('Chaussure qui monte', 'Des bottes en cuir classiques pour un look intemporel', 129.99, 'uploads/CHAUSSURE_RUNNING_HOMME_03.png', 0, 50, 1, 1, null),
  ('Sneaker Noir TT', 'Chaussures habillées élégantes pour les occasions formelles', 89.99, 'uploads/CHAUSSURE_RUNNING_HOMME_04.png', 0, 30, 1, 1, null),
  ('Classic Sneak', 'Des chaussures d entraînement pour des séances d entraînement intenses', 69.99, 'uploads/CHAUSSURE_RUNNING_HOMME_05.png', 0, 60, 1, 1, null),
  ('Sneaker Pomme-Pistache', 'Une paire flex et élégante pour un look tendance', 79.99, 'uploads/CHAUSSURE_RUNNING_FEMME_01.png', 0, 80, 2, 1, 2),
  ('Sneaker qui monte', 'Une paire élégante pour un look tendance', 49.99, 'uploads/CHAUSSURE_RUNNING_FEMME_02.png', 0, 120, 2, 1, null),
  ('Sneaker de ouf', 'Des baskets tendances pour un style sport et chic', 69.99, 'uploads/CHAUSSURE_RUNNING_FEMME_03.png', 0, 90, 2, 1, 1),
  ('Sneaker Fraise', 'Des bottes chaudes et stylées pour la saison hivernale', 99.99, 'uploads/CHAUSSURE_RUNNING_FEMME_04.png', 0, 60, 2, 1, null),
  ('Concept 884', 'Une paire élégante pour les occasions formelles', 89.99, 'uploads/CHAUSSURE_RUNNING_FEMME_05.png', 0, 40, 2, 1, null),
  ('Tipeu shoes qui tue', 'Des baskets colorées et fun pour les enfants', 39.99, 'uploads/CHAUSSURE_RUNNING_ENFANT_01.png', 0, 150, 3, 1, null),
  ('Sneaker qui court vite', 'Des chaussures amusantes avec des lumières LED pour plus d excitation', 29.99, 'uploads/CHAUSSURE_RUNNING_ENFANT_02.png', 0, 100, 3, 1, 1),
  ('Cool Sneaker', 'Bottes imperméables pour les jours de pluie et le saut dans les flaques d eau', 49.99, 'uploads/CHAUSSURE_RUNNING_ENFANT_03.png', 0, 80, 3, 1, null),
  ('SchoolVIP sneakers', 'Des chaussures durables et confortables pour les jours d école', 34.99, 'uploads/CHAUSSURE_RUNNING_ENFANT_04.png', 0, 120, 3, 1, 1),
  ('SneakyKid', 'Des chaussures respirantes et légères pour l été', 19.99, 'uploads/CHAUSSURE_RUNNING_ENFANT_05.png', 0, 200, 3, 1, null),

('T-shirt Homme Bleu', 'T-shirt bleu pour homme en coton. Confortable et respirant, idéal pour les entraînements.', 29.99, 'uploads/tshirt_homme_01.png', 0, 100, 1, 2, NULL),
('T-shirt Homme Bleu gris', 'T-shirt bleu et gris pour homme en polyester. Design élégant et coupe ajustée.', 34.99, 'uploads/tshirt_homme_02.png', 0, 80, 1, 2, NULL),
('T-shirt Homme Noir blanc', 'T-shirt noir et blanc pour homme en mélange de coton et de polyester. Parfait pour les activités sportives.', 27.99, 'uploads/tshirt_homme_03.png', 0, 120, 1, 2, NULL),
('T-shirt Homme Aura Olive', 'T-shirt aura olive pour homme en coton. Style classique et confortable pour toutes les occasions.', 31.99, 'uploads/tshirt_homme_04.png', 0, 90, 1, 2, NULL),
('T-shirt Homme Noir Blanc', 'T-shirt noir et blanc pour homme en coton. Léger et durable, idéal pour les séances d entraînement.', 26.99, 'uploads/tshirt_homme_05.png', 0, 110, 1, 2, NULL),
('T-shirt Homme Rouge', 'T-shirt rouge pour homme en polyester. Couleur vive pour un look dynamique  .', 32.99, 'uploads/tshirt_homme_06.png', 0, 70, 1, 2, NULL),

('T-shirt Femme bleu gris', 'T-shirt bleu gris pour femme en coton. Coupe ajustée et confortable pour l entraînement ou les loisirs.', 29.99, 'uploads/tshirt_femme_01.png', 0, 100, 2, 2, NULL),
('T-shirt Femme rose', 'T-shirt rose pour femme en polyester. Style élégant et respirant pour toutes les activités.', 34.99, 'uploads/tshirt_femme_02.png', 0, 80, 2, 2, NULL),
('T-shirt Femme parme', 'T-shirt parme pour femme en mélange de coton et de polyester. Confortable et polyvalent.', 27.99, 'uploads/tshirt_femme_03.png', 0, 120, 2, 2, NULL),
('T-shirt Femme jaune', 'T-shirt jaune pour femme en coton. Look classique et ajusté pour un confort optimal.', 31.99, 'uploads/tshirt_femme_04.png', 0, 90, 2, 2, NULL),
('T-shirt Femme blanc ocre', 'T-shirt blanc et ocre pour femme en coton. Couleur vive pour un style dynamique pendant l entraînement.', 26.99, 'uploads/tshirt_femme_05.png', 0, 110, 2, 2, NULL),
('T-shirt Femme noir marron', 'T-shirt noir et marron pour femme en polyester. Léger et respirant, idéal pour les activités sportives.', 32.99, 'uploads/tshirt_femme_06.png', 0, 70, 2, 2, NULL),

('T-shirt Enfant noir blanc Bleu', 'T-shirt noir blanc et bleu pour enfant en coton. Confortable et résistant pour jouer toute la journée.', 19.99, 'uploads/tshirt_enfant_01.png', 0, 100, 3, 2, NULL),
('T-shirt Enfant noir rouge gris', 'T-shirt noir rouge et gris pour enfant en polyester. Couleur vive et coupe ajustée pour les activités sportives.', 22.99, 'uploads/tshirt_enfant_02.png', 0, 80, 3, 2, NULL),
('T-shirt Enfant blanc bleu et gris', 'T-shirt blanc bleu et gris pour enfant en coton. Design lumineux pour les journées ensoleillées.', 21.99, 'uploads/tshirt_enfant_03.png', 0, 120, 3, 2, NULL),
('T-shirt Enfant blanc violet bleu', 'T-shirt blanc violet et bleu pour enfant en mélange de coton et de polyester. Idéal pour les aventures en plein air.', 18.99, 'uploads/tshirt_enfant_04.png', 0, 90, 3, 2, NULL),
('T-shirt Enfant noir blanc', 'T-shirt blanc et noir pour enfant en coton. Style dynamique pour les jeux et les sports.', 22.99, 'uploads/tshirt_enfant_05.png', 0, 110, 3, 2, NULL),
('T-shirt Enfant blanc rouge noir', 'T-shirt blanc rouge et noir pour enfant en polyester. Confortable et léger, parfait pour les activités ludiques.', 20.99, 'uploads/tshirt_enfant_06.png', 0, 70, 3, 2, NULL),
  
('Sweat Running', 'Un sweat-shirt pour homme, idéal pour rester confortable et stylé pendant vos séances d entraînement ou vos moments de détente.', 39.99, 'uploads/sweat_homme_01.png', 0, 100, 1, 2, null),
('Sweat Jordan', 'Un sweat-shirt pour homme, conçu pour offrir un équilibre parfait entre confort et style, que ce soit à la salle de sport ou en ville.', 49.99, 'uploads/sweat_homme_02.png', 0, 75, 1, 2, null),
('Sweat à capuche Homme', 'Un sweat-shirt pour homme, fabriqué avec des matériaux de haute qualité pour vous assurer une sensation de douceur et de chaleur tout au long de la journée.', 34.99, 'uploads/sweat_homme_03.png', 0, 120, 1, 2, null),
('Sweat FC Barcelone', 'Un sweat-shirt pour homme, au design moderne et dynamique, pour un look qui vous démarque de la foule.', 44.99, 'uploads/sweat_homme_04.png', 0, 90, 1, 2, null),
('Sweat Homme', 'Un sweat-shirt pour homme, parfait pour vos aventures en plein air ou vos moments de détente à la maison.', 54.99, 'uploads/sweat_homme_05.png', 0, 110, 1, 2, null),
('Sweat col montant Homme', 'Un sweat-shirt pour homme, essentiel dans votre garde-robe pour une touche de style décontracté en toutes circonstances.', 29.99, 'uploads/sweat_homme_06.png', 0, 80, 1, 2, null),  

('Sweat Oversize', 'Un sweat-shirt pour femme, conçu pour vous offrir un confort absolu tout en ajoutant une touche de style à votre tenue.', 39.99, 'uploads/sweat_femme_01.png', 0, 95, 2, 2, null),
('Sweat Training', 'Un sweat-shirt pour femme, avec une coupe élégante et féminine, pour un look polyvalent au quotidien.', 49.99, 'uploads/sweat_femme_02.png', 0, 70, 2, 2, null),
('Sweat Air Jordan', 'Un sweat-shirt pour femme, léger et respirant, pour une sensation de fraîcheur tout au long de la journée.', 34.99, 'uploads/sweat_femme_03.png', 0, 115, 2, 2, null),
('Sweat à Capuche Noir', 'Un sweat-shirt pour femme, pour afficher votre personnalité avec audace et élégance.', 44.99, 'uploads/sweat_femme_04.png', 0, 85, 2, 2, null),
('Sweat à Capuche', 'Un sweat-shirt pour femme, pour une allure naturelle et dynamique, où que vous soyez.', 54.99, 'uploads/sweat_femme_05.png', 0, 105, 2, 2, null),
('Sweat à Capuche Air Jordan', 'Un sweat-shirt pour femme, indispensable pour compléter votre garde-robe sportive avec style.', 29.99, 'uploads/sweat_femme_06.png', 0, 75, 2, 2, null),

('Sweat enfant', 'Un sweat-shirt pour enfant, confortable et résistant, pour accompagner toutes leurs aventures.', 24.99, 'uploads/sweat_enfant_01.jpeg', 0, 100, 3, 2, null),
('Sweat à Capuche Enfant', 'Un sweat-shirt pour enfant, pour un look cool et décontracté, parfait pour l école ou les loisirs.', 29.99, 'uploads/sweat_enfant_02.jpeg', 0, 80, 3, 2, null),
('Sweat à Capuche Nike SB', 'Un sweat-shirt pour enfant, léger et confortable, pour les accompagner dans leurs jeux et leurs activités.', 19.99, 'uploads/sweat_enfant_03.jpeg', 0, 120, 3, 2, null),
('Sweat Training Enfant', 'Un sweat-shirt pour enfant, pour des journées pleines de vitalité et de mouvement.', 22.99, 'uploads/sweat_enfant_04.png', 0, 90, 3, 2, null),
('Sweat à capuche Enfant', 'Un sweat-shirt pour enfant, avec un design ludique et coloré, pour stimuler leur imagination.', 34.99, 'uploads/sweat_enfant_05.png', 0, 110, 3, 2, null),
('Sweat CR7 Enfant', 'Un sweat-shirt pour enfant, pour un look frais et dynamique qui reflète leur énergie débordante.', 14.99, 'uploads/sweat_enfant_06.png', 0, 70, 3, 2, null),

('Survêtement Homme Noir', 'Survêtement noir pour homme en polyester. Confortable et léger.', 49.99, 'uploads/survêtementnoir_homme_01.png',  0, 100, 1, 2, NULL),
('Survêtement FC Barcelone Bleu, Or et Rouge', 'Survêtement bleu, or et rouge pour homme en coton. Parfait pour le sport ou les loisirs.', 54.99, 'uploads/survêtementmulticolor_homme_03.jpg',  0, 75, 1, 2, NULL),
('Survêtement Homme Bleu', 'Survêtement bleu pour homme en mélange de coton et de polyester. Style décontracté.', 59.99, 'uploads/survêtementbleu_homme_02.png',  0, 80, 1, 2, NULL),
('Survêtement Homme Beige', 'Survêtement beige pour homme en nylon. Idéal pour les activités extérieures.', 64.99, 'uploads/survêtementbeige_homme_04.png', 0, 90, 1, 2, NULL),

('Survêtement Femme Rose', 'Survêtement rose pour femme en tissu stretch. Confortable et élégant.', 69.99, 'uploads/survêtement_femme_01.png',  0, 60, 2, 2, NULL),

('Survêtement Enfant Noir', 'Survêtement noir pour enfant en polyester. Adorable et pratique pour jouer.', 39.99, 'uploads/survetement_enfants-01.png',  0, 120, 3, 2, NULL),
('Survêtement Enfant Rouge', 'Survêtement rouge pour enfant en coton. Parfait pour les journées actives.', 44.99, 'uploads/survetement_enfants_03.png',  0, 100, 3, 2, NULL),
('Survêtement Enfant bleu', 'Survêtement bleu pour enfant en mélange de coton et de polyester. Style amusant.', 49.99, 'uploads/survetement_enfants_02.png', 0, 110, 3, 2, NULL),

('Veste Sportive Alpha', 'Conçue pour le sportif moderne, notre Veste Sportive Alpha pour homme offre confort et style, avec une technologie de tissu respirant.', 159.99, 'uploads/veste_homme_01.png', 0, 100, 1, 2, NULL),
('Veste Endurance', 'Parfaite pour les entraînements par temps frais, la Veste Endurance pour homme vous garde au chaud tout en assurant une évacuation optimale de la transpiration.', 79.99, 'uploads/veste_homme_02.png', 1, 50, 1, 2, 2),
('Veste WindRunner', 'Légère et résistante, la WindRunner est idéale pour vos séances de running par vent fort. Sa conception unique offre une protection sans compromettre la mobilité.', 89.99, 'uploads/veste_homme_03.png', 0, 75, 1, 2, NULL),

('Veste Sunrise', 'Commencez votre journée avec énergie avec notre Veste Sunrise pour femme, combinant style et fonctionnalité pour vos activités matinales.', 59.99, 'uploads/veste_femme_01.png', 0, 100, 2, 2, NULL),
('Veste FlexFit', 'Flexibilité et confort définissent notre Veste FlexFit pour femme, conçue pour s’adapter à tous vos mouvements pendant l’entraînement.', 69.99, 'uploads/veste_femme_02.png', 1, 50, 2, 2, 1),
('Veste Élégance Urbaine', 'Alliant mode et sport, la Veste Élégance Urbaine pour femme est votre compagne idéale pour une allure sophistiquée en toute circonstance.', 99.99, 'uploads/veste_femme_03.png', 0, 75, 2, 2, NULL),

('Veste Aventure Enfant', 'Parfaite pour les jeunes explorateurs, la Veste Aventure résiste aux éléments tout en restant confortable et stylée.', 39.99, 'uploads/veste_enfant_01.png', 0, 100, 3, 2, NULL),
('Veste Petit Athlète Enfant', 'Pour les futurs champions, notre Veste Petit Athlète combine technologie de pointe et confort pour supporter tous leurs exploits.', 49.99, 'uploads/veste_enfant_02.png', 0, 50, 3, 2, 1),
('Veste Cosy Junior', 'Douillette et chaude, la Veste Cosy Junior est idéale pour garder vos petits au chaud pendant les froides journées d’hiver.', 44.99, 'uploads/veste_enfant_03.png', 1, 75, 3, 2, NULL),

('Pantalon Sprint', 'Pantalon de running léger pour hommes, idéal pour toutes les saisons.', 59.99, 'uploads/pantalon_homme_01.png', 0, 150, 1, 2, NULL),
('Pantalon Trail', 'Pantalon durable pour trail, confortable et résistant.', 69.99, 'uploads/pantalon_homme_02.png', 1, 100, 1, 2, 2),
('Pantalon Yoga', 'Pantalon pour homme souple et élastique, parfait pour le yoga et le pilates.', 49.99, 'uploads/pantalon_homme_03.png', 0, 120, 1, 2, NULL),

('Pantalon Fitness', 'Confort et soutien pour toutes vos activités fitness.', 55.99, 'uploads/pantalon_femme_01.png', 0, 200, 2, 2, 1),
('Pantalon Running', 'Léger et respirant, pour améliorer vos performances de course.', 59.99, 'uploads/pantalon_femme_02.png', 1, 180, 2, 2, NULL),
('Pantalon Yoga', 'Flexibilité et confort, idéal pour le yoga et la méditation.', 47.99, 'uploads/pantalon-femme_03.png', 0, 150, 2, 2, 1),
('Pantalon Casual Sport', 'Style et confort au quotidien, avec une touche sportive.', 60.99, 'uploads/pantalon_femme_04.png', 0, 130, 2, 2, 1),
('Pantalon Casual Flex', 'Pantalon technique pour le quotidien et le flex, robuste et confortable.', 74.99, 'uploads/pantalon_femme_041.jpeg', 1, 110, 2, 2, NULL),

('Pantalon Enfant Multi-Sport', 'Conçu pour toutes les activités extérieures, résistant et confortable.', 39.99, 'uploads/pantalon_enfant_01.png', 0, 200, 3, 2, NULL),
('Pantalon Enfant Football', 'Parfait pour le football, confortable et facile à nettoyer.', 34.99, 'uploads/pantalon_enfant_01.png', 0, 150, 3, 2, 2),
('Pantalon Enfant Running', 'Léger et respirant, conçu pour les jeunes athlètes.', 29.99, 'uploads/pantalon_enfant_01.png', 0, 160, 3, 2, NULL),
  
('Sac Bandoulière Homme Noir', 'Sac bandoulière noir pour homme en cuir synthétique. Pratique et élégant.', 29.99, 'uploads/homme_accessoire_sacàbandouliere_03.png',  0, 50, 1, 3, NULL),
('Sac Homme Noire', 'Sac noir pour homme en toile. Idéal pour transporter vos affaires.', 34.99, 'uploads/homme_accessoire_sac_07.png', 0, 70, 1, 3, NULL),
('Gourde Noire', 'Gourde noire pour homme en acier inoxydable. Parfaite pour rester hydraté.', 14.99, 'uploads/homme_accessoire_gourde_04.png',  0, 80, 1, 3, NULL),
('Paire de Chaussettes grises Homme', 'Paire de chaussettes grises pour homme en coton. Confortables et résistantes.', 9.99, 'uploads/homme_accessoire_chaussettes_06.jpg', 0, 150, 1, 3, NULL),
('Casquette Homme Noire', 'Casquette noire pour homme en coton. Style sportif et décontracté.', 19.99, 'uploads/homme_accessoire_casquette-01.png', 0, 100, 1, 3, NULL),
('Capuche Homme Noire', 'Capuche noire pour homme en polyester. Parfaite pour protèger la tête.', 24.99, 'uploads/homme_accessoire_capuche_05.png', 0, 90, 1, 3, NULL),
('Brassard Téléphone noir Homme', 'Brassard noir pour téléphone portable. Garde votre téléphone en sécurité pendant l exercice.', 12.99, 'uploads/homme_accessoire_brassard_07.png', 0, 120, 1, 3, NULL),
('Bob Noir Jordan', 'Bob noir Jordan pour homme en coton. Idéal pour se protéger du soleil.', 16.99, 'uploads/homme_accessoire_bob_02.png', 0, 80, 1, 3, NULL),

('Paire de Chaussettes noires à motif fleurs roses Femme', 'Paire de chaussettes noires à motif fleurs roses pour femme en polyester. Confortables et douces.', 8.99, 'uploads/femme_chaussettes_04.png', 0, 200, 2, 3, NULL),
('Sac à Main Vert', 'Sac à main vert pour femme en cuir. Accessoire élégant pour toutes les occasions.', 49.99, 'uploads/femme_accessoire_sacvert_05.png', 0, 60, 2, 3, NULL),
('Sac à Dos Femme Noir', 'Sac à dos noir pour femme en nylon. Spacieux et pratique pour transporter vos affaires.', 33.99, 'uploads/femme_accessoire_sacàdos_04.png', 0, 80, 2, 3, NULL),
('Paire de Gants  noirs Femme', 'Paire de gants noirs pour femme en coton. Gardent vos mains au chaud par temps froid.', 14.99, 'uploads/femme_accessoire_gants_03.png', 0, 100, 2, 3, NULL),
('Casquette Femme Rose', 'Casquette rose pour femme en denim. Style tendance pour les journées ensoleillées.', 17.99, 'uploads/femme_accessoire_casquetterose_06.jpg', 0, 110, 2, 3, NULL),
('Casquette Femme Jean', 'Casquette en jean pour femme en coton. Parfaite pour les activités de plein air.', 19.99, 'uploads/femme_accessoire_casquettejean_07.jpg', 0, 120, 2, 3, NULL),
('Bonnet Femme Noir', 'bonnet noir pour femme en coton. parfait pour les sorties hivernales.', 17.99, 'uploads/femme_accessoire_bonnet-01.png', 0, 120, 2, 3, NULL),

('Ensemble Bonnet et Gants Blancs Enfants', 'Ensemble blanc pour enfants comprenant un bonnet et des gants. Doux et chauds pour l hiver.', 19.99, 'uploads/enfants_accessoires-bonnet&gants blancs-01.png', 0, 50, 3, 3, NULL),
('Sac à Dos Rose Enfants', 'Sac à dos rose pour enfants en nylon. Parfait pour l école ou les activités de plein air.', 29.99, 'uploads/enfants_accessoire-sacàdosrose-03.png', 0, 40, 3, 3, NULL),
('Sac de Gym Rouge Enfants', 'Sac de gym rouge pour enfants en polyester. Pratique pour transporter les affaires de sport.', 14.99, 'uploads/enfants_accessoire_sacàdosrouge_05.png', 0, 60, 3, 3, NULL),
('Bonnet Bleu Enfants', 'Bonnet bleu pour enfants en coton. Garde la tête au chaud pendant les journées froides.', 9.99, 'uploads/enfants_accessoire_bonnetbleu-02.jpg', 0, 70, 3, 3, NULL);
`)
    );

    // Generate fake data for the commentaire table

    await database.query("SET FOREIGN_KEY_CHECKS = 0;");
    await database.query("truncate commentaire");
    await database.query("SET FOREIGN_KEY_CHECKS = 1;");

    queries.push(
      database.query(`INSERT INTO commentaire (firstname, commentaire, note, product_id)
VALUES ('Alice', 'je flex trop avec mes sappes', 5, 2),
('Bob', 'j''adore', 3, 2),
('Alice', 'au top bravo au chef', 5, 3),
('Bob', 'impeccable', 3, 4),
('Charlie', 'je suis super satisfait', 2, 6),
('David', 'INCROYABLE', 5, 5),
('Eva', 'c''est vraiment eux les meilleurs', 4, 6),
('Fiona', 'jamais vu aussi bien', 3, 6),
('George', 'qui n aime pas en vrai ?', 1, 7),
('Hannah', 'tout est nickel', 5, 8),
('Ian', 'trop bien', 4, 9),
('Alice', 'Super produit, fortement recommandé !', 5, 10),
('Bob', 'Produit moyen, pourrait être mieux', 3, 11),
('Charlotte', 'je suis trop contente', 2, 12),
('David', 'Incroyable ! Je vais certainement racheter', 5, 12),
('Émilie', 'Produit correct, vaut le prix', 4, 14),
('Fabrice', 'Pourrait être amélioré, mais dans l ensemble correct', 3, 12),
('Gabriel', 'Tout est super géniale', 1, 15),
('Hélène', 'Excellent service et livraison rapide', 5, 15),
('Isabelle', 'Bon rapport qualité-prix', 4, 20),
('Jérôme', 'mais c est quoi ce poulet ??', 1, 20),
('Alice', 'Excellent produit, je le recommande vivement !', 4, 1),
('Bob', 'Très satisfait de mon achat, qualité exceptionnelle.', 5, 1),
('Charlie', 'Super produit, conforme à mes attentes.', 4, 1),
('Diana', 'Je suis vraiment impressionnée par ce produit.', 5, 1),
('Eva', 'Le meilleur produit que j ai jamais acheté !', 5, 1);`)
    );

    await database.query("SET FOREIGN_KEY_CHECKS = 0;");
    await database.query("truncate wishlist");
    await database.query("SET FOREIGN_KEY_CHECKS = 1;");
    // Generate fake data for the wishlist table

    queries.push(
      database.query(`INSERT INTO wishlist (size, quantity, product_id, user_id)
      VALUES ('40', 2, 1, 1),
      ('42', 1, 2, 2);`)
    );

    await database.query("SET FOREIGN_KEY_CHECKS = 0;");
    await database.query("truncate cart");
    await database.query("SET FOREIGN_KEY_CHECKS = 1;");
    // Generate fake data for the newsletter table

    queries.push(
      database.query(`INSERT INTO cart (user_id)
      VALUES (1),
      (2),
      (3),
      (4),
      (5)
      ;`)
    );
    // Generate fake data for the parcel table

    await database.query("SET FOREIGN_KEY_CHECKS = 0;");
    await database.query("truncate expedition");
    await database.query("SET FOREIGN_KEY_CHECKS = 1;");

    queries.push(
      database.query(
        `INSERT INTO expedition (address, postal_code, city, country, user_id)
        VALUES ('987 Pine St', '13579', 'Hillside', 'USA', 1),
('654 Cedar St', '97531', 'Valleyview', 'USA', 2),
('321 Birch St', '24680', 'Grove', 'USA', 3)`
      )
    );

    await database.query("SET FOREIGN_KEY_CHECKS = 0;");
    await database.query("truncate parcel");
    await database.query("SET FOREIGN_KEY_CHECKS = 1;");

    queries.push(
      database.query(`INSERT INTO parcel (address, postal_code, city)
VALUES ('456 Pine St', 54321, 'Villagetown'),
  ('789 Maple Ave', 87654, 'Suburbia'),
  ('NIKE Clearance Store', 26100, 'ROMANS SUR ISERE' ),
  ('NIKE Store', 38090, 'VILLEFONTAINE' );`)
    );

    await database.query("SET FOREIGN_KEY_CHECKS = 0;");
    await database.query("truncate product_cart");
    await database.query("SET FOREIGN_KEY_CHECKS = 1;");

    queries.push(
      database.query(`INSERT INTO product_cart (quantity, size, product_id, cart_id)
VALUES
(1, 'M', 1, 1),
(2, 'XS', 2, 2),
(3, 'XL', 3, 3);`)
    );

    await database.query("SET FOREIGN_KEY_CHECKS = 0;");
    await database.query("truncate command");
    await database.query("SET FOREIGN_KEY_CHECKS = 1;");

    queries.push(
      database.query(`INSERT INTO command (payment, statut, user_id, parcel_id, cart_id, expedition_id)
VALUES
('Credit Card', 'Pending', 1, null, 1, 1),
('PayPal', 'Pending', 2, null, 2, 2),
('Cash on Delivery', 'Pending', 3, 3, 3, null);`)
    );

    /* for (let i = 0; i < 10; i += 1) {
      queries.push(
        database.query("insert into item(title) values (?)", [
          faker.lorem.word(),
        ])
      );
      } */

    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
