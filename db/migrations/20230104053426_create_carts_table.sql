-- migrate:up
CREATE TABLE carts (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  plant_id INT NULL,
  plant_quantity INT NULL,
  pot_id INT NULL,
  pot_quantity INT NULL,
  nutrient_id INT NULL,
  nutrient_quantity INT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT carts_user_id FOREIGN KEY (user_id) REFERENCES users(id),
  CONSTRAINT carts_plant_id FOREIGN KEY (plant_id) REFERENCES plants(id),
  CONSTRAINT carts_pot_id FOREIGN KEY (pot_id) REFERENCES pots(id),
  CONSTRAINT carts_nutrient_id FOREIGN KEY (nutrient_id) REFERENCES nutrients(id)
);
-- migrate:down
DROP TABLE carts;