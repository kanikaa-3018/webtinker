const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    googleId: String,
    name: String,
    email: String,
    photo: String,
    class: String,
    stream: String,
    school: String,

    kits: [
      {
        title: String,
        kitId: String,
        image: String,
        price: Number,
        purchasedAt: { type: Date, default: Date.now },
      },
    ],

    courses: [
      {
        title: String,
        courseId: String,
        image: String,
        price: Number,
        purchasedAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
