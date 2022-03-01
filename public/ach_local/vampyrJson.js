const vampyrList = [
  {
    displayName: "From here to eternity",
    description: "Go to the Shelter and rest …",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/427290/af48d79165380308ce076bddf3bf633cf7719bef.jpg",
  },
  {
    displayName: "At dawn we row",
    description: "Take a ride with Doctor Swansea ",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/427290/4f3a5cac7006898c5419cbb1ca5f0e98da4ffee7.jpg",
  },
  {
    displayName: "Just take a bite",
    description: "Embrace Clay during your first meeting with him",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/427290/0f7d0fa4bfa8c46d6018be8fd067c5bc290ba859.jpg",
  },
  {
    displayName: "Merciful release",
    description: "Let Clay live during your first meeting with him",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/427290/60654121ec02b7fd3e9250a39f66f5e3c999c2c4.jpg",
  },
  {
    displayName: "Pest control",
    description: "Eat 10 rats",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/427290/fe3e870b4f13e4ce28f33cdf859db530ee889c77.jpg",
  },
  {
    displayName: "Unlife is strange",
    description: "Save this poor plant with water",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/427290/1c1d218d4281d000b4a138c0b945325b6f09e72d.jpg",
  },
  {
    displayName: "The tools of the profession",
    description: "Find all melee weapons",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/427290/99071def36e80005249f6868981f6421dd208209.jpg",
  },
  {
    displayName: "Keep your distance",
    description: "Find all ranged weapons",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/427290/e4be669f299bef822602cb4a8a9eb56c5a0cda23.jpg",
  },
  {
    displayName: "Weapons of choice",
    description: "Find all off-hand weapons",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/427290/118378d1250d3d207814e6b8cdb92901d80ad620.jpg",
  },
  {
    displayName: "Bloody roots",
    description: "Find the recollection of Paulus Aurelianus",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/427290/186d640f846a39f58b9647bfefdfce7c4774ccfe.jpg",
  },
  {
    displayName: "Lore keeper",
    description: "Gather all collectibles",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/427290/a080ab35a40dfe2e604d145e57b96e72ce232de6.jpg",
  },
  {
    displayName: "Hippocratic oath",
    description: "Heal 10 citizens",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/427290/0fcfe848f6316b4815f45f8e1de138336f83c02b.jpg",
  },
  {
    displayName: "That's better",
    description: "Upgrade a weapon with a module",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/427290/95bbae90638ef1bf68b0a8ea855aaeb2ae1e84d1.jpg",
  },
  {
    displayName: "Work in progress",
    description: "Upgrade a weapon",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/427290/49ead81302e4c297c222cb36afb673a8c401e0ca.jpg",
  },
  {
    displayName: "Solid metal gear",
    description: "Upgrade a weapon to level 5",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/427290/8c54b74c26d4e05f3285f7dfc241db4e71741b2d.jpg",
  },
  {
    displayName: "Interview with the vampire",
    description: "Take care of Dorothy's fate",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/427290/14dcc141a830d86a4d08976238b645b7f6715ce5.jpg",
  },
  {
    displayName: "Sacrificial lamb",
    description: "Take care of Sean's fate",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/427290/ff2ca501111c83636ea90ab477fe3cd6cc2c689c.jpg",
  },
  {
    displayName: "Prepare to die",
    description: "Defeat Fergal",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/427290/f96895af470572e0efb591667b241444328dcf93.jpg",
  },
  {
    displayName: "The Dying Swansea",
    description: "Take care of Swansea's fate",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/427290/d83e9ed7981c9f1f69431777ccb9fa671eefd222.jpg",
  },
  {
    displayName: "Anarchy in the UK",
    description: "Turn a district to hostile status",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/427290/4aa3274a9df7bf383b0c4f10c193ee306c09addf.jpg",
  },
  {
    displayName: "A taste for blood",
    description: "Complete the game",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/427290/d44be90e7d4df86d7536797e87aa16bfcd3bf277.jpg",
  },
  {
    displayName: "Not even once",
    description:
      "Finish the game without killing any citizens (not unlockable in Story Mode)",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/427290/1e984f357bf3577b9952feb8a64dde24013866ae.jpg",
  },
  {
    displayName: "Defeat the beast",
    description: "Defeat Fergal",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/427290/fce91881c6d22a9a06b7397d4589ecd0689ca446.jpg",
  },
  {
    displayName: "Hail Mary",
    description: "Defeat Mary",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/427290/5950aad59532c55aa8d937b914b2b8ebf75a1569.jpg",
  },
  {
    displayName: "Death on stage",
    description: "Defeat Doris",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/427290/346d1a0827d99fa96c2bcc553a4861d69bab9334.jpg",
  },
  {
    displayName: "Bury the hatchet",
    description: "Defeat McCullum",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/427290/12af95c39705bed9467d8c21c80979002ad15d3a.jpg",
  },
  {
    displayName: "Unnatural Disaster",
    description: "Defeat The Disaster",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/427290/7995a6795fc6f41cf4164c195126ef2fab800059.jpg",
  },
  {
    displayName: "London's burning",
    description: "Turn all districts to hostile status",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/427290/d16a017a615886f37d5327f4d27762a0c179e677.jpg",
  },
];
