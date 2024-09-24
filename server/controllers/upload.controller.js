import User from "../models/user.model.js";


export const uploadCoverImage = async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    
    user.coverImg = req.file.path; 
    await user.save();

    res.status(200).json({ message: `Cover image uploaded successfully: ${req.file.filename}`, coverImg: user.coverImg });
  } catch (error) {
    console.log("Error in uploadCoverImage: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};


export const uploadProfilePic = async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    user.profilePic = req.file.path;
    await user.save();

    res.status(200).json({ message: `Profile picture uploaded successfully: ${req.file.filename}`, profilePic: user.profilePic });
  } catch (error) {
    console.log("Error in uploadProfilePic: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};