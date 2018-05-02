<template>
  <li>
    <div class="enemy card" v-bind:data-id=id>
      <img class="card-img-top" v-bind:src=image v-bind:alt=name>
      <div class="card-body"> 
        <h3>{{ name }}</h3>
        <h4>Level {{ level }} {{ race }}</h4>
        <div class="enemyHp">
          <label>HP: </label> 
          <span class="enemyHpValue">
            {{hp}}/{{maxHP}}
          </span>
        </div>
        <button type="button" class="btn btn-danger btn-sm" v-on:click="attack">Attack</button>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "Enemy",
  props: ["name", "index", "level", "race", "hp", "maxHP", "id", "image"],
  methods: {
    attack: function() {
      this.$emit("attack-enemy", this.id);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
div.enemy {
  margin: 1em;
}
</style>
