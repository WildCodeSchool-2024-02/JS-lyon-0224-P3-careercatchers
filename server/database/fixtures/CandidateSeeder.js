const AbstractSeeder = require("./AbstractSeeder");

// Import seeders that must be executed before this one
// Follow your foreign keys to find the right order ;)
const UserSeeder = require("./UserSeeder");

const candidates = [
  {
    lastname: "Doe",
    firstname: "John",
    birthday: "2000-07-02",
    user_id: 3,
  },
];

class CandidateSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "candidate", dependencies: [UserSeeder] });
  }

  // The run method - Populate the 'candidate' table with data of candidates

  run() {
    candidates.forEach((candidate) => {
      const values = {
        lastname: candidate.lastname,
        firstname: candidate.firstname,
        birthday: candidate.birthday,
        user_id: candidate.user_id,
      };
      this.insert(values);
    });
  }
}

// Export the candidate seeder class
module.exports = CandidateSeeder;
