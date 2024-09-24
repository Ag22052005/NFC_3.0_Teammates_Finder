import User from '../models/user.model.js';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';
import { exec } from 'child_process';

export const getMlData = async (req, res) => {
    const loggedInUser = req.user._id;
    try {
        // Fetch users excluding the logged-in user
        const users = await User.find({
            _id: { $ne: loggedInUser }
        });

        // Fetch the logged-in user's data
        const loggedInUserData = await User.findById(loggedInUser);

        // Extract game info for other users
        const otherUsersGames = users.map(user => {
            return user.gameInfo.map(u => u.gameName);
        });

        const otherUsersData = users.map((user, index) => {
            return {
                id: user._id,
                games: otherUsersGames[index],
                likes: user.likes,
            };
        });

        // Extract game info for the logged-in user
        const loggedInUserGames = loggedInUserData.gameInfo.map(u => u.gameName);

        const loggedInUserDataFormatted = {
            id: loggedInUserData._id,
            games: loggedInUserGames,
            likes: loggedInUserData.likes,
        };

        // Log the data
        console.log('Other users data', otherUsersData);
        console.log('Logged-in user data', loggedInUserDataFormatted);

        // Determine the current directory
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);

        // Write other users' data to a temporary file
        const otherUsersFilePath = path.join(__dirname, 'tempData.json');
        await fs.writeFile(otherUsersFilePath, JSON.stringify(otherUsersData, null, 2));
        console.log('Other users data written to temp file', otherUsersFilePath);

        // Write logged-in user's data to a separate temporary file
        const loggedInUserFilePath = path.join(__dirname, 'tempLoggedInUser.json');
        await fs.writeFile(loggedInUserFilePath, JSON.stringify(loggedInUserDataFormatted, null, 2));
        console.log('Logged-in user data written to temp file', loggedInUserFilePath);

        // Automatically run the app.py script
        const pythonScriptPath = path.join(__dirname, 'app.py');
        exec(`python ${pythonScriptPath}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing app.py: ${error.message}`);
                return res.status(500).json({ message: 'Failed to run the Python script.' });
            }
            if (stderr) {
                console.error(`Python script stderr: ${stderr}`);
                return res.status(500).json({ message: 'Python script error.' });
            }
            console.log(`Python script stdout: ${stdout}`);
        });

        // Read the ans.json file to get the closest match user ID
        const ansFilePath = path.join(__dirname, 'ans.json');
        const ansData = await fs.readFile(ansFilePath, 'utf-8');
        const ansJson = JSON.parse(ansData);

        // Extract the user ID from ans.json
        const closestMatchUserId = ansJson.closest_match_user_id;

        // Return the user ID in the response
        res.status(200).json({ closestMatchUserId });
    } catch (error) {
        console.error('Error:', error);
        res.status(404).json({ message: error.message });
    }
};
