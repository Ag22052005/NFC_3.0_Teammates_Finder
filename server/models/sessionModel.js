import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    sessionName: {
      type: String,
      required: true,
    },
    sessionType: {
      type: String,
      required: true,
    },
    gameName: {
      type: String,
      required: true,
    },
    sessionDate: {
      type: Date, // Changed to Date for better date handling
      required: true,
    },
    sessionMembers: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User", // Assuming you have a User model for referencing
        },
      },
    ],
    sessionLimit: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const Session = mongoose.model("Session", sessionSchema);
export default Session;
