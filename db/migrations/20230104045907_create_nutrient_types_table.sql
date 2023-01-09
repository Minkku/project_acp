-- migrate:up
CREATE TABLE nutrient_types (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- migrate:down
DROP TABLE nutrient_types;
