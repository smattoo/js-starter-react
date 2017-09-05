import express from 'express';
import open from 'open';
import { RouteConfig } from './routeConfig';
import compression from 'compression';
import path from 'path';

const port = 3000;
const app = express();

app.use(compression())
app.use(express.static('dist'));

app.get("/",function(req, res){
  res.sendFile(path.join(__dirname,'../dist/index.html'));
});

RouteConfig.register(app);

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
})
