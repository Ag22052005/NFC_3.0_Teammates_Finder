import { isObjectIdOrHexString } from "mongoose";
import User from "../models/user.model.js";
import mongoose from "mongoose";
import { ObjectId } from "mongoose";
export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in getUsersForSidebar: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

//for game preference
export const getGameInfo = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const user = await User.findById(loggedInUserId);
    res.json(user.gameInfo);
  } catch (error) {
    console.log("Error in getGameInfo: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const addGameInfo = async (req, res) => {
  try {
    const { gameName, gameId, gameExpertise } = req.body;
    const loggedInUserId = req.user._id.valueOf();

    const user = await User.findByIdAndUpdate(
      loggedInUserId,
      {
        $push: {
          gameInfo: { gameName, gameId, gameExpertise },
        },
      },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user.gameInfo);
  } catch (error) {
    console.log("Error in addGameInfo:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMatchMaking = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    // console.log('loggedInUserId',loggedInUserId);
    const user = await User.findById(loggedInUserId);
    const gameInfo = user.gameInfo;
    const gameNames = gameInfo.map((game) => game.gameName);
    const users = await User.find({
      _id: { $ne: loggedInUserId },
      "gameInfo.gameName": { $in: gameNames },
    }).select("-password");
    // console.log('users',users);
    res.json(users);
  } catch (error) {
    console.log("Error in getMatchMaking:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getFriends = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const user = await User.findById(loggedInUserId).populate("friends");
    res.json(user.friends);
  } catch (error) {
    console.log("Error in getFriends:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// export const setFriendRequest = async (req, res) => {
//   try {
//     const {Id: friendId } = req.params;
//     const loggedInUserId = req.user._id;
//     const userId= new ObjectId(friendId)

//     const user = await User.findByIdAndUpdate(loggedInUserId, {
//       $push: {
//         friendRequests: { userId: userId },
//       },
//     });
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }
//     res.json(user.friendRequests);
//   }
//   catch (error) {
//     console.log("Error in setFriendRequest:", error.message);
//     res.status(500).json({ error: "Internal server error" });
//   }
// }

// import mongoose from 'mongoose';
// import User from '../models/user.model'; // Adjust the import according to your project structure

// export const setFriendRequest = async (req, res) => {
//   try {
//     const { Id: friendId } = req.params;
//     const loggedInUserId = req.user._id;

//     // Correctly create a new ObjectId instance using mongoose.Types.ObjectId
//     const userId = new mongoose.Types.ObjectId(friendId);

//     const user = await User.findByIdAndUpdate(loggedInUserId, {
//       $push: {
//         friendRequests: { userId: userId },
//       },
//     }, { new: true }); // Add { new: true } to return the updated document

//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     res.json(user.friendRequests);
//   }
//   catch (error) {
//     console.log("Error in setFriendRequest:", error.message);
//     res.status(500).json({ error: "Internal server error" });
//   }
// }

export const setFriendRequest = async (req, res) => {
  try {
    const { Id: friendId } = req.params;
    const loggedInUserId = req.user._id.valueOf();

    // Ensure the friendId is converted to an ObjectId
    // const userId = new mongoose.Types.ObjectId(friendId);
    console.log('friendId',friendId);
    console.log('loggedInUserId',loggedInUserId);
    
    

    // Update the logged-in user's friend requests
    const user = await User.findByIdAndUpdate( 
      {loggedInUserId},
      {
        $push: {
          friendRequests: { userId: friendId },
        },
      },
    );

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user.friendRequests);
  } catch (error) {
    console.error("Error in setFriendRequest:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
