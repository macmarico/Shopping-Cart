const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();


const PORT = process.env.PORT || 3000;

let options = {
    dotfiles: "ignore", //allow, deny, ignore
    etag: true,
    extensions: ["htm", "html"],
    index: false, //to disable directory indexing
    maxAge: "7d",
    redirect: false,
    setHeaders: function(res, path, stat) {
      //add this header to all static responses
      res.set("x-timestamp", Date.now());
    }
  };


app.use(cors());
app.use(express.static('client',options));


app.get('/', (req, res)=>{
    res.sendFile(path.resolve('client/index.html'));
});

app.listen(PORT, ()=>{
    console.log('listning to port 3000');
})
