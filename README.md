#MedBikri API
This API allows you to retrieve the most recent videos from YouTube.

###Prerequisites

1. Node.js
2. MongoDB
3. API key from YouTube

###Installation

1. Clone the repository
2. Install the dependencies
>npm install

3.Create a .env file in the root directory and add the following:
```
API_KEY1=YOUR_API_KEY
API_KEY2=YOUR_API_KEY
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.12qrfbl.mongodb.net/medbikri
```

4. Start the server
>npm start


###Usage
You can use the following endpoints to retrieve videos:

1. Retrieve all videos: ```GET /api/all```
2. Retrieve videos by search query: ```GET /api/search?search=<query>```

The API will update the database every 1 min with the most recent videos.

####Note
Please replace the <username> and <password> with your own credentials.
