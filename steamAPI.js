const fs = require("fs");
const util = require("util");
const SteamAPI = require("steamapi");
const steam = new SteamAPI("3C128AC38062B1A86CD2A0E2E14F4D32");

async function createFile(filename) {
  this.filename = filename;

  steam.getGameSchema("814380").then((data) => {
    // parse json
    const jsonObj = JSON.parse(data.availableGameStats.achievements);
    console.log(jsonObj);
    // data.availableGameStats.achievements.map(
    //   (x) =>
    //     fs.promises.writeFile(
    //       this.filename,
    //       JSON.stringify(x.displayName, null, 2)
    //     )
    //   console.log(
    //     util.inspect(x.displayName, {
    //       showHidden: true,
    //       depth: null,
    //       colors: true,
    //     })
    //   )
    // );
  });

  // fs.promises.writeFile(this.filename, JSON.stringify(data, null, 2));
}

steam.getGameSchema("814380").then((data) => {
  const firstObject = { ...data.availableGameStats.achievements };
  for (const prop in firstObject) {
    const { name, defaultvalue, hidden, icongray, ...secondObject } =
      firstObject[prop];
    console.log(secondObject);
  }

  // stringify JSON Object
  // const jsonContent = JSON.stringify(picked, null, 2);
  // console.log(jsonContent);
  // fs.writeFile("output.json", jsonContent, "utf8", function (err) {
  //   if (err) {
  //     console.log("An error occured while writing JSON Object to File.");
  //     return console.log(err);
  //   }

  //   console.log("JSON file has been saved.");
  // });
});

// createFile("sekiro.json");
