#!/usr/bin/node

const request = require('request');
async function doTheTask () {
  if (process.argv.length === 3) {
    const id = process.argv[2];
    const url = 'https://swapi-api.alx-tools.com/api/films/' + id;
    const options = {
      url: url,
      json: true
    };
    request(options, async (err, res, body) => {
      if (err) {
        console.log(err);
      } else {
        for (const char of body.characters) {
          const ret = async () => {
            return new Promise((resolve, reject) => {
              request(char, options, function (error, res, body) {
                if (error) {
                  console.log(error);
                } else {
                  resolve(body.name);
                }
              });
            });
          };
          console.log(await ret());
        }
      }
    });
  }
}
doTheTask();
