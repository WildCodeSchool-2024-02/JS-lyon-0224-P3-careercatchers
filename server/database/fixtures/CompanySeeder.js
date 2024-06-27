const AbstractSeeder = require("./AbstractSeeder");

// Import seeders that must be executed before this one
// Follow your foreign keys to find the right order ;)
const UserSeeder = require("./UserSeeder");

const companies = [
  {
    name: "Wild Code School",
    user_id: 1,
  },
  {
    name: "Sanofi",
    user_id: 2,
  },
];

class CompanySeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "company", dependencies: [UserSeeder] });
  }

  // The run method - Populate the 'company' table with data of companies

  run() {
    companies.forEach((company) => {
      const values = {
        name: company.name,
        user_id: company.user_id,
      };
      this.insert(values);
    });
  }
}

// Export the company seeder class
module.exports = CompanySeeder;
