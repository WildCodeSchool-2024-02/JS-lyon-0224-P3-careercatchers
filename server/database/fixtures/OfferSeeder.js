const AbstractSeeder = require("./AbstractSeeder");

// Import seeders that must be executed before this one
// Follow your foreign keys to find the right order ;)

const offers = [
  {
    job_title: "Développeur Web (H/F)",
    job_type: "CDI",
    company_id: "1",
    localisation: "Lyon",
  },
  {
    job_title: "Data Analyst (H/F)",
    job_type: "CDD",
    company_id: "2",
    localisation: "Lyon",
  },
  {
    job_title: "Scrum Master (H/F)",
    job_type: "CDI",
    company_id: "2",
    localisation: "Paris",
  },
];

class OfferSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "offer" });
  }

  // The run method - Populate the 'offer' table with data of jobTitles

  run() {
    offers.forEach((offer) => {
      const values = {
        job_title: offer.job_title,
        job_type: offer.job_type,
        company_id: offer.company_id,
        localisation: offer.localisation,
      };
      this.insert(values);
    });
  }
}

// Export the offerSeeder class
module.exports = OfferSeeder;
