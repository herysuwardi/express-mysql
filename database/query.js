const { db } = require("./config");

module.exports = {
  query: async (query) => {
    try {
      const [executeQuery] = await db.query(query);
      return executeQuery;
    } catch (error) {
      console.log("Connection : " + error);
    }
  },
};
