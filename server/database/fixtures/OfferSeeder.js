const AbstractSeeder = require("./AbstractSeeder");

// Import seeders that must be executed before this one
// Follow your foreign keys to find the right order ;)

const offers = ["Développeur Web (H/F)", "Data Analyst (H/F)"];

class OfferSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "offer", truncate: true });
  }

  // The run method - Populate the 'offer' table with data of jobTitles

  run() {
    offers.forEach((jobTitle) => {
      const offer = {
        job_title: jobTitle,
      };
      this.insert(offer);
    });
  }
}

// Export the offerSeeder class
module.exports = OfferSeeder;
