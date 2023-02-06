#!/usr/bin/node

const request = require('request');
if (process.argv.length === 3) {
  const id = process.argv[2];
  const url = 'https://swapi-api.alx-tools.com/api/films/' + id;
  const options = {
    url: url,
    json: true
};
    request(options, (err, res, body) => {
        if (err) {
            console.log(err);
        } else{
            for (const char of body.characters) {
                console.log(char);
                async function getChar(char) {
                    const options = {
                        url: char,
                        json: true
                    };
                    request(options, (err, res, body) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log(body.name);
                        }
                    });
                }
                getChar(char);
            }
        }
   


    })
       
}


