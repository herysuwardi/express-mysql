const { mahasiswaTbl } = require("./mahasiswa");
const { todosTbl } = require("./todos");

module.exports = {
  executeTbl: async () => {
    try {
      await mahasiswaTbl();
      await todosTbl();
    } catch (error) {
      console.log(error);
    }
  },
};
