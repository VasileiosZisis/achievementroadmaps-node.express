const fs = require('fs');
const util = require('util');
const SteamAPI = require('steamapi');
const steam = new SteamAPI('3C128AC38062B1A86CD2A0E2E14F4D32');

async function createFile(filename) {
  this.filename = filename;

  steam.getGameSchema('1369630').then((data) => {
    const ach = JSON.parse(JSON.stringify(data.availableGameStats));

    fs.writeFile(
      './public/ach_local/' + this.filename,
      JSON.stringify(ach, null, 2),
      'utf8',
      function (err) {
        if (err) {
          console.log('--- ERROR ---');
          return console.log(err);
        }
        console.log(
          util.inspect(data.availableGameStats, {
            showHidden: true,
            depth: null,
            colors: true,
          })
        );
      }
    );
  });
}

createFile('ender-lilies.json');
