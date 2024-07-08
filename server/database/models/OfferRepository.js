const AbstractRepository = require("./AbstractRepository");

class OfferRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "offer" as configuration
    super({ table: "offer" });
  }

  async create(offer) {
    let salaryRate = null;
    let minSalary = null;
    let maxSalary = null;
    if (offer.salary_rate !== "") {
      salaryRate = offer.salary_rate;
    }
    if (offer.min_salary !== "") {
      minSalary = offer.min_salary;
    }
    if (offer.max_salary !== "") {
      maxSalary = offer.max_salary;
    }
    const [result] = await this.database.query(
      `insert into ${this.table} (job_title, job_type, content, location, salary_rate, min_salary, max_salary, company_id) values (?, ?, ?, ?, ?, ?, ?, ?) `,
      [
        offer.job_title,
        offer.job_type,
        offer.content,
        offer.location,
        salaryRate,
        minSalary,
        maxSalary,
        offer.company_id,
      ]
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
      `select o.id, job_title, job_type, location, min_salary, max_salary, name, email from ${this.table} as o inner join company as c on company_id = c.id inner join user as u on user_id=u.id`
    );

    return rows;
  }

  // The D of CRUD - Delete operation
  async delete(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result;
  }
}

module.exports = OfferRepository;
