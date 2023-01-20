import { Router } from "express";
const router = Router();
import Video from "../models/video.js";
import SearchQuery from "../models/searchQuery.js";
import getData from "../controllers/video.js";

router.get("/all", (req, res) => {


  const page = req.query.page || 1;
  const pageSize = req.query.pageSize || 10;

  const skip = (page - 1) * pageSize;

  const query = Video.find()
    .sort({ videoPubDate: -1 })
    .skip(skip)
    .limit(pageSize);

  query.exec((err, items) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(items);
    }
  });
});
router.get("/search", async (req, res) => {
  const search_query = req.query.search;
  await SearchQuery.deleteMany();
  // await Video.deleteMany();
  const newSearchQuery = new SearchQuery({ query: search_query });
  await newSearchQuery.save();
  if (search_query.length === 0) {
    res.redirect("/api/all");
  } else {
    
    getData(search_query);
    Video.find(
      {
        videoTitle: { $regex: search_query, $options: "i" },
      },
      (err, data) => {
        if (err) {
          res.send(err);
        } else {
          res.send(data);
        }
      }
    );
  }
});


export default router;
