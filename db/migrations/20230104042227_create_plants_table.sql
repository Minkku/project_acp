-- migrate:up
CREATE TABLE plants (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  description VARCHAR(1000) NOT NULL,
  price DECIMAL(10,3) NOT NULL,
  species_id INT NOT NULL,
  size_id INT NOT NULL,
  mood_id INT NOT NULL,
  position_id INT NOT NULL,
  difficulty_id INT NOT NULL, 
  care_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  CONSTRAINT plants_species_id FOREIGN KEY (species_id) REFERENCES species(id),
  CONSTRAINT plants_size_id FOREIGN KEY (size_id) REFERENCES sizes(id),
  CONSTRAINT plants_mood_id FOREIGN KEY (mood_id) REFERENCES moods(id),
  CONSTRAINT plants_position_id FOREIGN KEY (position_id) REFERENCES positions(id),
  CONSTRAINT plants_difficulty_id FOREIGN KEY (difficulty_id) REFERENCES difficulties(id),
  CONSTRAINT plants_care_id FOREIGN KEY (care_id) REFERENCES cares(id),
  CONSTRAINT plants_ukey_name UNIQUE (name)
);

-- migrate:down
DROP TABLE plants;
