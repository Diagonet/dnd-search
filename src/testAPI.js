let testAPI = {
  index: "fire-bolt",
  name: "Fire Bolt",
  desc: [
    "You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn't being worn or carried.",
    "This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).",
  ],
  range: "120 feet",
  components: ["V", "S"],
  ritual: false,
  duration: "Instantaneous",
  concentration: false,
  casting_time: "1 action",
  level: 0,
  attack_type: "ranged",
  damage: {
    damage_type: {
      index: "fire",
      name: "Fire",
      url: "/api/damage-types/fire",
    },
    damage_at_character_level: {
      1: "1d10",
      5: "2d10",
      11: "3d10",
      17: "4d10",
    },
  },
  school: {
    index: "evocation",
    name: "Evocation",
    url: "/api/magic-schools/evocation",
  },
  classes: [
    {
      index: "sorcerer",
      name: "Sorcerer",
      url: "/api/classes/sorcerer",
    },
    {
      index: "wizard",
      name: "Wizard",
      url: "/api/classes/wizard",
    },
  ],
  subclasses: [],
  url: "/api/spells/fire-bolt",
};
export default function apiTest() {
  return testAPI;
}
