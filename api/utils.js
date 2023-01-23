// api/utils.js

const { requireUser } = require("./utils");

postsRouter.post("/", requireUser, async (req, res, next) => {
  res.send({ message: "under construction" });
});

function requireUser(req, res, next) {
  if (!req.user) {
    next({
      name: "MissingUserError",
      message: "You must be logged in to perform this action",
    });
  }

  next();
}
someRouter.post("/some/route", requireUser, async (req, res, next) => {});

module.exports = {
  requireUser,
};
