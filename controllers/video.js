// import fetch from "node-fetch";
import axios from "axios";
import Video from "../models/video.js";

const API_CALLS = [process.env.API_KEY1, process.env.API_KEY2];

const getData = async function (search_query) {
  console.log(search_query, "search_query");
  let valid = false;
  for (let i = 0; i < API_CALLS.length; i++) {
    let API_KEY = API_CALLS[i];
    let API_URL = "";
    try {
      if (search_query.length === 0) {
        API_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=date&key=${API_KEY}`;
      } else {
        API_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=date&q=${search_query}&key=${API_KEY}`;
      }

      const { data } = await axios.get(API_URL);
      const itemsData = data.items;

      let saveData = itemsData.map((item) => {
        let objVideoData = new Video({
          videoTitle: item.snippet.title,
          videoChannelTitle: item.snippet.channelTitle,
          videoDesc:
            item.snippet.description.length === 0
              ? "Description Not available..."
              : item.snippet.description,
          videoPubDate: item.snippet.publishTime,
          videoThumbNail: item.snippet.thumbnails.high.url,
        });
        objVideoData.save();
        valid = true;
      });
    } catch (e) {
      console.log("Failed - ", e.message);
    }
    if (valid) break;
  }
};

export default getData;
