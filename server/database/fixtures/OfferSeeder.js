const AbstractSeeder = require("./AbstractSeeder");

// Import seeders that must be executed before this one
// Follow your foreign keys to find the right order ;)

const offers = [
  {
    job_title: "Développeur Web (H/F)",
    job_type: "CDI",
    content: "We need your help",
    localisation: "Lyon",
    company_id: "1",
  },
  {
    job_title: "Data Analyst (H/F)",
    job_type: "CDD",
    content: "Please come",
    localisation: "Lyon",
    company_id: "2",
  },
  {
    job_title: "Scrum Master (H/F)",
    job_type: "CDI",
    content: "We'll treat you well",
    localisation: "Paris",
    company_id: "2",
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
        content: offer.content,
        localisation: offer.localisation,
        company_id: offer.company_id,
      };
      this.insert(values);
    });
  }
}

// Export the offerSeeder class
module.exports = OfferSeeder;
