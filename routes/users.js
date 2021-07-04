import express from "express";

const router = express.Router();

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 26,
  },
];

// all routes in here are starting with /users
router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;
  users.push(user);

  res.send(
    `user with name of ${user.firstName} and last name of ${user.lastName} was added to the database`
  );
});

export default router;
