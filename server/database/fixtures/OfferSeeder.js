const AbstractSeeder = require("./AbstractSeeder");
const CompanySeeder = require("./CompanySeeder");
// Import seeders that must be executed before this one
// Follow your foreign keys to find the right order ;)

const offers = [
  {
    job_title: "Data Analyst (H/F)",
    job_type: "Apprentissage",
    content:
      "En tant que Data Analyst, vous contribuez au développement de l’activité autour de la gestion des données et de la transformation numérique en accompagnant les clients sur leurs projets.", // , sur des prestations de conseil et d’expertise.
    location: "Lyon",
    salary_rate: "mensuel",
    min_salary: "1000",
    max_salary: "2000",
    company_id: "1",
  },
  {
    job_title: "Développeur Web (H/F)",
    job_type: "CDI",
    content:
      "Envie de développer des applications from scratch sur-mesure, de coder dans plusieurs langages/frameworks, d'être dans un environnement composé d'une équipe de passionnés ?",
    location: "Aix-Les-Bains",
    salary_rate: "annuel",
    min_salary: "28000",
    max_salary: "32000",
    company_id: "2",
  },
  {
    job_title: "Chef(fe) de Projet Digital (H/F)",
    job_type: "CDD",
    content:
      "Vous aurez pour objectif de mener à terme plusieurs projets de l’idéation jusqu’à l’aboutissement et le suivi de ces derniers. Le chef de projet digital devra être rigoureux et créatif.", // Doté d’une très bonne culture du web et d’une grande polyvalence, l
    location: "Paris",
    salary_rate: "horaire",
    min_salary: null,
    max_salary: null,
    company_id: "2",
  },
];

// En intégrant la Direction WCS, vous avez pour rôle, dans votre position de Business analyst, de bien comprendre les enjeux des métiers et les besoins qu’ils expriment afin de proposer des solutions.

class OfferSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "offer", dependencies: [CompanySeeder] });
  }

  // The run method - Populate the 'offer' table with data of jobTitles

  run() {
    offers.forEach((offer) => {
      const values = {
        job_title: offer.job_title,
        job_type: offer.job_type,
        content: offer.content,
        location: offer.location,
        salary_rate: offer.salary_rate,
        min_salary: offer.min_salary,
        max_salary: offer.max_salary,
        company_id: offer.company_id,
      };
      this.insert(values);
    });
  }
}

// Export the offerSeeder class
module.exports = OfferSeeder;
