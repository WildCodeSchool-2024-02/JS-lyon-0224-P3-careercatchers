const AbstractRepository = require("./AbstractRepository");

class CompanyRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "company" as configuration
    super({ table: "company" });
  }

  // The Rs of CRUD - Read operations

  async readAll() {
    // Execute the SQL SELECT query to retrieve all companys from the "company" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of companys
    return rows;
  }
}

module.exports = CompanyRepository;
