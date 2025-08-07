const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");

// Google OAuth
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: true,
  }),
  (req, res) => {
    res.redirect(`${process.env.CLIENT_URL}/complete-profile`);
  }
);

// Get current user
router.get("/me", (req, res) => {
  res.json(req.user || null);
});

// Update profile (class, stream, school)
router.post("/complete-profile", async (req, res) => {
  const { class: studentClass, stream, school } = req.body;
  if (!req.user) return res.status(401).json({ message: "Not logged in" });

  const updated = await User.findByIdAndUpdate(req.user._id, {
    class: studentClass,
    stream,
    school,
  }, { new: true });

  res.json(updated);
});

module.exports = router;
