import { Schema, model } from "mongoose";

const searchQuerySchema = new Schema({
  query: { type: String},
  createdAt: { type: Date, default: Date.now },
});

export default model("SearchQuery", searchQuerySchema);
