import Session from "../models/sessionModel.js";

export const addSession = async (req, res) => {
  try {
    const {
      sessionName,
      gameName,
      sessionTime,
      sessionDate,
      sessionLimit,
      sessionType,
    } = req.body;
    const response = await Session.create({
      sessionName,
      gameName,
      sessionTime,
      sessionDate,
      sessionLimit,
      sessionType,
    });
  
    console.log(response)
    if (response) {
      res.status(201).json(response);
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in addSession controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getSession = async(req, res) => {
  try {
    const response = await Session.find({})
    console.log("response",response)
    if (response) {
      res.status(201).json(response);
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in addSession controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
