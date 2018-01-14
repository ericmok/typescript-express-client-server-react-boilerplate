import * as express from 'express';
import * as session from 'express-session';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import * as path from 'path';
import * as cors from 'cors';

export const app = express();

//app.set("views", path.join("../views"));
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../public')))

app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  //res.sendfile('index.html');
  //res.render('index');
  res.send('You are in route /');
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
  console.log('Listening on port %d in %s mode', app.get('port'), app.get('env'));
});
