<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md">
        <Character  v-bind:character="character"/>
      </div> 
      <div class="col-md">
        <Encounter v-bind:encounter="encounter" v-on:attack-enemy="attackEnemy" v-on:add-log-entry="addLogEntry" v-on:start-encounter="startEncounter"/>
      </div>
      <div class="col-md">
        <Log v-bind:logEntries="logEntries" v-on:clear-log="clearLog"/>
      </div>
    </div>
  </div>
 
</template>

<script>
import Character from "./components/Character";
import Log from "./components/Log";
import Encounter from "./components/Encounter";
import Enemy from "./components/Enemy";
import encounters from "./data/encounters";
import Mechanics from "./modules/mechanics";

export default {
  name: "App",
  components: {
    Character,
    Log,
    Encounter,
    Enemy
  },
  methods: {
    addLogEntry: function(message) {
      var entry = {};
      entry.message = message;
      entry.id = 1;
      this.logEntries.push(entry);
    },
    clearLog: function() {
      this.logEntries = [];
    },
    startEncounter: function() {
      console.log("Start");
      var encounter = encounters[0];
      this.encounter = encounter;
      this.addLogEntry(encounter.name);
    },
    attackEnemy: function(enemy) {
      this.addLogEntry("attacking enemy " + enemy.name);
      var roll = Mechanics.rollDice("2d6");
      this.addLogEntry("rolled " + roll);
    },
    findObjectByKey: function(array, key, value) {
      for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
          return array[i];
        }
      }
      return null;
    }
  },
  data() {
    return {
      logEntries: [],
      encounter: {},
      character: {
        id: "d17f9c17-cd56-48c5-a2f8-4a69baada8cf",
        image:
          "https://trello-attachments.s3.amazonaws.com/5ae756166e36db8766fe95cb/5ae7562fbc20738b7e349a74/2bad687e278ef5cd9490061729237500/dish-012616-john-krasinski.jpg",
        name: "Mr. Wonder",
        race: "Human",
        type: "Superhero",
        level: 42,
        strength: 87,
        dexterity: 72,
        wisdom: 90,
        charisma: 70,
        luck: 100,
        maxHp: 380,
        hp: 380,
        exp: 1456,
        nextLevelExp: 2000,
        damageModifier: 0,
        equipment: [
          {
            equipLocation: "right hand",
            itemName: "Sword of Mourning",
            itemType: "Two-handed Sword",
            damage: 48,
            enchantments: [
              {
                name: "Mourning Sickness",
                description: "Causes nausea and vomiting",
                effects: "dexterity",
                effectDegree: -25,
                chance: 0.2
              },
              {
                name: "Start Mourning",
                description: "Causes instant death",
                effects: "hp",
                effectDegree: 10000000,
                chance: 0.02
              }
            ]
          }
        ]
      }
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Space+Mono:400,700");
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css");
#app {
  font-family: "Space Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
