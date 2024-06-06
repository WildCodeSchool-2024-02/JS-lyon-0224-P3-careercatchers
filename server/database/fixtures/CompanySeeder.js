const AbstractSeeder = require("./AbstractSeeder");

// Import seeders that must be executed before this one
// Follow your foreign keys to find the right order ;)

const companys = [
  {
    name: "Wild Code School",
    email: "wildcodescholl@gmail;com",
  },
  {
    name: "Data Analyst (H/F)",
    email: "CDD",
  },
];

class CompanySeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "company", truncate: true });
  }

  // The run method - Populate the 'Company' table with data of jobTitles

  run() {
    companys.forEach((company) => {
      const values = {
        name: company.name,
        email: company.email,
      };
      this.insert(values);
    });
  }
}

// Export the CompanySeeder class
module.exports = CompanySeeder;
