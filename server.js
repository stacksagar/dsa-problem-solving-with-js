import express from "express";
import l_list from "./server/routers/linkedlists.js";
const app = express();

app.use("/LinkedLists", l_list);

app.listen(1000, () => {
  console.log("Server running");
});
