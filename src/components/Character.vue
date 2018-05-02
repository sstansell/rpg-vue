<template>
  <div class="character">

    <h1>Character</h1>
    <div class="card">
      <img class="card-img-top" v-bind:src=character.image v-bind:alt=character.name>
      <div class="card-body">
  
          <h2>{{ character.name }}</h2>
          <h3>Level {{character.level}} {{character.race}} {{character.type}}</h3>
          <div class="characterHp">
          <label>HP: </label>
                <span class="characterHpValue">
                  {{character.hp}}/{{character.maxHp}}
                </span>
          </div>
          <div class="characterExp">
            
            <label>Exp: </label>
            <span class="characterExpValue">
              {{character.exp}}
            </span>/<span class="characterNextExpValue">
              {{character.nextLevelExp}}
            </span>
          </div>

          <table>
            <tbody>
              <tr>
                <td class="label">STR</td>
                <td>{{character.strength}}</td>
                <td>DMG</td>
                <td>{{character.damageModifier}}</td>
              </tr>
              <tr>
                <td class="label">DEX</td>
                <td>{{character.dexterity}}</td>
              </tr>
              <tr>
                <td class="label">WIS</td>
                <td>{{character.wisdom}}</td>
              </tr>
              <tr>
                <td class="label">CHA</td>
                <td>{{character.charisma}}</td>
              </tr>
              <tr>
                <td class="label">LUK</td>
                <td>{{character.luck}}</td>
              </tr>
            </tbody>
          </table>    
          
      </div>

    </div>
  </div>  
</template>

<script>
export default {
  name: "Character",
  props: ["character"]
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
  display: inline-block;
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
  width: 25%;
}
.character {
  padding: "1em";
  textalign: "center";
  font-size: 0.75em;
}
</style>
