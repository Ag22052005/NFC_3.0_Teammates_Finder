import json
import os
import numpy as np

# Get the current directory of the script
current_dir = os.path.dirname(os.path.abspath(__file__))

# Construct the full paths to the JSON files
json_file_path = os.path.join(current_dir, 'tempData.json')
json_file_path2 = os.path.join(current_dir, 'tempLoggedInUser.json')

# Read the JSON data from tempData.json
try:
    with open(json_file_path, 'r') as file:
        users_data = json.load(file)
except FileNotFoundError:
    print("File not found. Please check the file path.")
    users_data = []
except json.JSONDecodeError:
    print("Error decoding JSON. Please check the JSON file format.")
    users_data = []

# Read the JSON data from tempLoggedInUser.json
try:
    with open(json_file_path2, 'r') as file:
        new_user = json.load(file)
except FileNotFoundError:
    print("File not found. Please check the file path.")
    new_user = {}
except json.JSONDecodeError:
    print("Error decoding JSON. Please check the JSON file format.")
    new_user = {}

# If there's no data, terminate the script
if not users_data or not new_user:
    print("No data to process.")
    exit()

# Convert user data to vectors for comparison
def get_likes_vector(user, game_list):
    vector = []
    for game in game_list:
        if game in user['games']:
            vector.append(user['likes'])
        else:
            vector.append(0)
    return vector

# Games to consider
games_list = ['COC', 'PUBG', 'Free Fire']

# Get new user vector
new_user_vector = get_likes_vector(new_user, games_list)

# Calculate Euclidean distance to each user
distances = []

for user in users_data:
    user_vector = get_likes_vector(user, games_list)
    distance = np.linalg.norm(np.array(new_user_vector) - np.array(user_vector))
    distances.append((user['id'], distance))

# Find the closest match
closest_match = min(distances, key=lambda x: x[1])

# Prepare the result to be saved in ans.json
result = {
    "closest_match_user_id": closest_match[0],
    "distance": closest_match[1]
}

# Write the result to ans.json
ans_file_path = os.path.join(current_dir, 'ans.json')
try:
    with open(ans_file_path, 'w') as ans_file:
        json.dump(result, ans_file, indent=2)
    print(f"Result written to {ans_file_path}")
except Exception as e:
    print(f"Error writing to file: {e}")
