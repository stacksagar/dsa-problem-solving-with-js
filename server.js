import express from "express";
import l_list from "./Test/linkedlists.js";
const app = express();

app.use(l_list);

app.listen(1000, () => {
  console.log("Server running");
});
