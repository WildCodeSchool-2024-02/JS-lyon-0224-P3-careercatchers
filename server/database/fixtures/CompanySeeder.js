const AbstractSeeder = require("./AbstractSeeder");

// Import seeders that must be executed before this one
// Follow your foreign keys to find the right order ;)

const companies = [
  {
    name: "Wild Code School",
    email: "wildcodeschool@gmail.com",
  },
  {
    name: "Sanofi",
    email: "sanofi-pasteur.rh@gmail.fr",
  },
];

class CompanySeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "company" });
  }

  // The run method - Populate the 'Company' table with data of jobTitles

  run() {
    companies.forEach((company) => {
      const values = {
        name: company.name,
        email: company.email,
      };
      this.insert(values);
    });
  }
}

// Export the companieseeder class
module.exports = CompanySeeder;
