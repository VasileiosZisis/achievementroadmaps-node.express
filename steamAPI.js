const fs = require('fs')
const SteamAPI = require('steamapi')
const steam = new SteamAPI('3C128AC38062B1A86CD2A0E2E14F4D32')

// steam.getGameSchema('814380').then(data => {
//     console.log(util.inspect(data, { showHidden: true, depth: null, colors: true }));
//     await fs.promises.writeFile('achievos.json', JSON.stringify(data));
// });

class AchievementsList {
  constructor (filename) {
    if (!filename) {
      throw new Error('no filename')
    }

    this.filename = filename

    try {
      fs.accessSync(this.filename)
    } catch (err) {
      fs.writeFileSync(this.filename, '[]')
    }
  }
  async getFile () {
    const contents = await fs.promises.readFile(this.filename, {
      encoding: 'utf8'
    })

    console.log(contents)
  }
}

const test = async () => {
  const repo = new AchievementsList('achievos.json')
  await repo.getFile()
}

test()
