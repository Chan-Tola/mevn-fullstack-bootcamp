const { faker } = require("@faker-js/faker");
const User = require("../Model/User");
const db = require("../db/connectionDb");

db.catch((e) => {
  console.error("Database connection error:", e);
});

async function generating() {
  const users = 10;
  try {
    for (let i = 0; i < users; i++) {
      let user = new User({
        email: faker.internet.email(),
        username: faker.internet.username(),
        dateofBirth: new Date(faker.date.birthdate()),
        passwords: faker.internet.password(),
      });
      const result = await user.save();
      console.log(`user id ${result._id} generated`);
    }
  } catch (e) {
    console.log(e);
  } finally {
    process.exit(0);
  }
}

generating();
