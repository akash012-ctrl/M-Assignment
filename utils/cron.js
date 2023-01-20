import SearchQuery from "../models/searchQuery.js";
import getData from "../controllers/video.js";
import cron from 'node-cron';
const cronJob = cron.schedule("* * * * *", async () => {
  const search_query = await SearchQuery.findOne().sort({ createdAt: -1 });
  console.log(search_query.query,"cron job");
  getData(search_query.query);
});

export default cronJob;