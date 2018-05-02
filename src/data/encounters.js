!function(name, context, definition) {
  if (typeof exports == "object") {
    module.exports = definition(require);
  } else if (typeof define == "function" && define.amd) {
    define(definition);
  } else if (typeof YUI == "function") {
    YUI.add(name, definition, "@VERSION@", { requires: [] });
  } else {
    context[name] = definition();
  }
}.call(this, "Encounters", this, function(require) {
  "use strict";

  //function Scenarios() { }
  //Scenarios.prototype.start = function () { };
  var Encounters = [
    {
      name: "Church Attack",
      enemies: [
        {
          id: "d58a55f2 - b19b - 493e-9029 - 657186bd898c",
          name: "Tick Tock",
          race: "Human",
          description:
            "Kobolds were aggressive, inward, yet industrious small humanoid creatures. They were noted for their skill at building traps and preparing ambushes, and mining. They were distinctly related to dragons and urds and were often found serving as their minions.",
          image: "http://www.kenduken.de/media/images_vita/ken_foto_01.jpg",
          level: 3,
          maxHP: 40,
          hp: 40,
          strength: 3,
          maxMana: 0,
          experience: 15,
          dexterity: 2,
          equipment: [
            {
              name: "Basic Short Sword",
              minDamage: 1,
              maxDamage: 4,
              chanceToDrop: 0.5,
              itemClass: "sword",
              itemType: "weapon"
            },
            {
              name: "Basic Small Shield",
              minDamage: 1,
              maxDamage: 4,
              chanceToDrop: 0.5,
              itemClass: "shield",
              itemType: "armor"
            }
          ]
        },
        {
          id: "45207c72-131a-4563-9ea6-b11cea06c7fd",
          name: "Mind Twist",
          race: "Human",
          description:
            "Kobolds were aggressive, inward, yet industrious small humanoid creatures. They were noted for their skill at building traps and preparing ambushes, and mining. They were distinctly related to dragons and urds and were often found serving as their minions.",
          image: "http://www.skepticreport.com/images/marshallapplewhite.jpg",
          level: 4,
          maxHP: 420,
          hp: 420,
          strength: 3,
          maxMana: 0,
          experience: 15,
          dexterity: 2,
          equipment: [
            {
              name: "Basic Short Sword",
              minDamage: 1,
              maxDamage: 4,
              chanceToDrop: 0.5,
              itemClass: "sword",
              itemType: "weapon"
            },
            {
              name: "Basic Small Shield",
              minDamage: 1,
              maxDamage: 4,
              chanceToDrop: 0.5,
              itemClass: "shield",
              itemType: "armor"
            }
          ]
        }
      ],
      actions: [
        {
          id: "de79ccd4-e160-4119-8852-456e6a737cee",
          name: "Attack!",
          success: "Hit for ",
          fail: "Miss!",
          die: "2d6",
          min: "6",
          type: "attack"
        },
        {
          id: "72d84965-b648-4ca0-81fa-4dab0b5eea72",
          name: "Flee!",
          success: "You successfully fled",
          fail: "You Were Cornered!",
          die: "1d6",
          min: "3",
          type: "retreat"
        }
      ]
    }
  ];
  // exports
  return Encounters;
});
