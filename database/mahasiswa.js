const { query } = require("./query");

const MAHASISWA = "mahasiswa";

const mahasiswaTbl = async () => {
  try {
    const checkTable = await query(`SHOW TABLES LIKE '${MAHASISWA}'`);
    if (checkTable.length === 0) {
      await query(`
      CREATE TABLE ${MAHASISWA} (
        id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
        firstname TEXT(100) NOT NULL,
        lastname TEXT(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        username VARCHAR(100) UNIQUE NOT NULL,
        birth_date DATETIME NOT NULL,
        bort_place TEXT(255) NOT NULL
      );
        `);
    }
  } catch (error) {
    console.log("mahasiswa.js");
    console.log(error);
  }
};

module.exports = {
  mahasiswaTbl,
};
