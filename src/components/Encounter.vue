<template>
  <div className="encounterContainer">
    <h1>Encounter</h1>
    <button type="button" class="btn btn-primary" id="startEncounter" v-on:click="start">
      Start
    </button>
    <ul class="enemyList">
        <!--<li v-for="(enemy, index) in encounter.enemies">-->
          <Enemy v-for="(enemy, index) in encounter.enemies"
            :key="enemy.id" 
            :name="enemy.name" 
            :index="index" 
            :level="enemy.level"
            :race="enemy.race"
            :hp="enemy.hp"
            :maxHP="enemy.maxHP"
            :id="enemy.id"
            :image="enemy.image"
            v-on:attack-enemy="attackEnemy"/>
          <!--<div class="enemy">
            {{enemy.name}} - <button type="button" class="btn btn-danger btn-sm">Attack</button>
          </div>-->
        <!--</li>-->
    </ul>    
  </div>
</template>

<script>
import Enemy from "./Enemy";
export default {
  name: "Encounter",
  components: {
    Enemy
  },
  data() {
    return {};
  },
  props: ["encounter"],
  methods: {
    start: function() {
      //App.addLogEntry("Starting");
      //var encounter = this.getEncounter();
      this.$emit("start-encounter");
      //this.$emit("add-log-entry", "Starting " + this.encounter.name);
    },
    getEncounter: function() {
      //return this.encounters[0];
    },
    attackEnemy: function(id) {
      var enemy = this.findObjectByKey(this.encounter.enemies, "id", id);
      this.$emit("attack-enemy", enemy);
    },
    findObjectByKey: function(array, key, value) {
      for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
          return array[i];
        }
      }
      return null;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

table {
  border: 0;
  padding: "0 1em";
  width: "100%";
}
tr,
td {
  border: 0;
  padding: "0.1em";
}
td {
  width: 50%;
}
.character {
  padding: "1em";
  textalign: "center";
}
</style>
