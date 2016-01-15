'use strict';

import express from 'express';

const app = express();
app.use('/', (req, res)=>{
  res.send("好玩的要來了！");
});

app.listen(3000, (req, res)=>{
  console.log("server start on port 3000");
});