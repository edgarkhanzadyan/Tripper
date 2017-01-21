const body_parser = require('body-parser');
const json_parser = body_parser.json();
const form_parser = body_parser.urlencoded({extended: true});
const express = require('express');
const port = 8080;
const port_https = 8443;
const footrip = express();
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('footrip.db');
const db_promises = require('./sqlite-promises')(db);

footrip.use(require('helmet')());

footrip.get('/get_all_trips', async (req, res) => {
  try{
    const pulled = await db_promises.all(`select * from all_trips`);
    res.setHeader('content-type', 'text/html');
    const sendMe = pulled.map(item => {
      return {
        id: item.id,
        places: item.places.json(),
      }
    });
    res.end(sendMe);
  } catch(e) {
    console.error(e);
  }
});

footrip.post('/new_data', json_parser, form_parser, (req, res) => {
  week = req.body.array;
  homework = req.body.homework;
  res.end();
});
footrip.listen(port, () => console.log(`server starting on ${port}`));
