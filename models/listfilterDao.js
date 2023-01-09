const { appDataSource } = require("./dbconfig");
const queryBuilder = (sizes, positions, moods, difficulties) => {
  // 각 값들을 controllers에서 {}구조분해할당으로 받아야함.
  let andcaulse = "";

  if (sizes) {
    andcaulse = andcaulse + `AND plants.size_id IN (${sizes.toString()})\n`; //sizes가 배열로 들어오기때문에 후에 수정 필요.
  }

  if (positions) {
    andcaulse =
      andcaulse + `AND plants.position_id IN (${positions.toString()})\n`;
  }

  if (moods) {
    andcaulse = andcaulse + `AND plants.mood_id IN (${moods.toString()})\n`;
  }

  if (difficulties) {
    andcaulse =
      andcaulse + `AND plants.difficulty_id IN (${difficulties.toString()})\n`;
  }

  return andcaulse;
};

const listfilterData = async (
  species,
  sizes,
  positions,
  moods,
  difficulties
) => {
  const andquery = await queryBuilder(sizes, positions, moods, difficulties);

  const data = await appDataSource.query(
    `SELECT
      plants.id as plant_id,
      plants.name as plant_name,
      plants.description as plant_description,
      plants.price as plant_price,
      species.name as species,
      sizes.name as size,
      positions.name as position,
      moods.name as mood,
      difficulties.name as difficulty,
      cares.name as care
    FROM plants
    JOIN species ON plants.species_id = species.id
    JOIN sizes ON plants.size_id = sizes.id
    JOIN positions ON plants.position_id = positions.id
    JOIN moods ON plants.mood_id = moods.id
    JOIN difficulties ON plants.difficulty_id = difficulties.id
    JOIN cares ON plants.care_id = cares.id
    WHERE
      plants.species_id = ?
      ${andquery}
      ;
        `,
    [species]
  );
  return data;
};

module.exports = {
  listfilterData,
};
