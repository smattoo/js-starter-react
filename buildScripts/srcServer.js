import express from 'express';
import open from 'open';
import { RouteConfig } from './routeConfig';
import webpack from 'webpack';
import webpackDevConfig from '../webpack.config.dev';
import path from 'path';

const port = 3000;
const app = express();

const compiler = webpack(webpackDevConfig);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackDevConfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get("*",function(req, res){
  res.sendFile(path.join(__dirname,'../src/index.html'));
});

RouteConfig.register(app);

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
