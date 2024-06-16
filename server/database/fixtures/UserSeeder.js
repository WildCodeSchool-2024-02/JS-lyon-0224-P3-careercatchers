const AbstractSeeder = require("./AbstractSeeder");

// Import seeders that must be executed before this one
// Follow your foreign keys to find the right order ;)

const users = [
  {
    username: "Bastien",
    password: "toto",
    email: "bastien@gmail.com",
    role: "candidate",
  },
  {
    username: "Léo-Paul",
    password: "tutu",
    email: "leopaul@gmail.com",
    role: "candidate",
  },
];

class UserSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "user" });
  }

  // The run method - Populate the 'offer' table with data of jobTitles

  run() {
    users.forEach((user) => {
      const values = {
        username: user.username,
        password: user.password,
        email: user.email,
        role: user.role,
      };
      this.insert(values);
    });
  }
}

// Export the Userseeder class
module.exports = UserSeeder;
