const { query } = require("./query");

const TODOS = "todos";

const todosTbl = async () => {
  try {
    const checkTable = await query(`SHOW TABLES LIKE '${TODOS}'`);
    if (checkTable.length === 0) {
      await query(`
            CREATE TABLE ${TODOS}(
                id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
                name TEXT NOT NULL,
                description TEXT NOT NULL
            );
            `);
    }
  } catch (error) {
    console.log("todos.js");
    console.log(error);
  }
};

module.exports = {
  todosTbl,
};
