const AbstractSeeder = require("./AbstractSeeder");

// Import seeders that must be executed before this one
// Follow your foreign keys to find the right order ;)

const users = [
  {
    email: "wildcodeschool@gmail.com",
    password: "123",
  },
  {
    email: "sanofi-pasteur.rh@gmail.fr",
    password: "abc",
  },
];

class UserSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "user" });
  }

  // The run method - Populate the 'user' table with data of users

  run() {
    users.forEach((user) => {
      const values = {
        email: user.email,
        password: user.password,
      };
      this.insert(values);
    });
  }
}

// Export the user seeder class
module.exports = UserSeeder;
