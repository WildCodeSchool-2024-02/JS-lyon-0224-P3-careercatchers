const AbstractSeeder = require("./AbstractSeeder");

const users = [
  {
    email: "wildcodeschool@gmail.com",
    hashed_password:
      "$argon2id$v=19$m=19456,t=2,p=1$glyThY/f82w6BmzwSU07ig$YPWkB+g+0dOtTBR37duv+SEZ7vFcUapiufljeiKnD3w", // 'demo'
    role: "company",
  },
  {
    email: "sanofi@hotmail.fr",
    hashed_password: "xjuéuuec",
    role: "company",
  },
  {
    email: "johndoe@yahoo.com",
    hashed_password:
      "$argon2id$v=19$m=19456,t=2,p=1$glyThY/f82w6BmzwSU07ig$YPWkB+g+0dOtTBR37duv+SEZ7vFcUapiufljeiKnD3w", // 'demo'
    role: "candidate",
  },
];
class UserSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "user", truncate: true });
  }

  // The run method - Populate the 'user' table with fake data

  run() {
    users.forEach((user) => {
      const values = {
        email: user.email,
        hashed_password: user.hashed_password,
        role: user.role,
      };
      this.insert(values);
    });
  }
}

// Export the UserSeeder class
module.exports = UserSeeder;
