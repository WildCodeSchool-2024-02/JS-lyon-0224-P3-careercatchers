const AbstractSeeder = require("./AbstractSeeder");

// Import seeders that must be executed before this one
// Follow your foreign keys to find the right order ;)

const companys = [
  {
    name: "Wild Code School",
    email: "wildcodeschool@gmail;com",
  },
  {
    name: "Sanofi",
    email: "sanofi_pasteur_rh@gmail.fr",
  },
];

class CompanySeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "company" });
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
