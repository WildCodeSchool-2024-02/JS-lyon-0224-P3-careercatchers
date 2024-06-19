const AbstractRepository = require("./AbstractRepository");

class OfferRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "offer" as configuration
    super({ table: "offer" });
  }

  async create(offer) {
    const [result] = await this.database.query(
      `insert into ${this.table} (job_title, job_type, localisation, company_id) values (?, ?, ?, ?) `,
      [offer.job_title, offer.job_type, offer.localisation, offer.company_id]
    );

    return result.insertId;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all offers from the "offer" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of offers
    return rows;
  }

  async read(id) {
    // Execute the SQL SELECT query to retrieve all offers from the "offer" table
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the array of offers
    return rows;
  }

  async getOffersWithCompanies() {
    const [rows] = await this.database.query(
      `select o.id, job_title, job_type, localisation, name, email from ${this.table} o join company c on company_id = c.id`
    );

    return rows;
  }
}

module.exports = OfferRepository;
