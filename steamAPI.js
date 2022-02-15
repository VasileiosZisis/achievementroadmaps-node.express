const fs = require("fs");
const util = require("util");
const SteamAPI = require("steamapi");
const steam = new SteamAPI("3C128AC38062B1A86CD2A0E2E14F4D32");

async function createFile(filename) {
  this.filename = filename;

  // try {
  //   fs.accessSync(this.filename);
  // } catch (err) {
  //   fs.writeFileSync(this.filename, "[]");
  // }

  steam.getGameSchema("814380").then((data) => {
    // console.log(
    //   util.inspect(data, { showHidden: true, depth: null, colors: true })
    // );
    fs.promises.writeFile(this.filename, JSON.stringify(data, null, 2));
  });
}

createFile("sekiro.json");

//   async getFile() {
//     return JSON.parse(
//       await fs.promises.readFile(this.filename, {
//         encoding: "utf8",
//       })
//     );
//   }
// }
