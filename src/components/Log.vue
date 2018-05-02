  <template>
  
    <div>
      <h1>Log</h1>
      <!--<input v-model="newLog" ref='newLog' type="text"><button v-on:click="addLog">Add</button>-->
      <ul class="logList">
          <li v-for="(log, index) in logEntries">
            {{log.message}}
          </li>
      </ul>
      <button v-on:click="clearLog" type="button" class="btn btn-secondary">
        Clear Log
      </button>      
    </div>
</template>

<script>
export default {
  name: "Log",
  props: ["logEntries"],
  data() {
    return {};
  },
  methods: {
    clearLog: function() {
      this.$emit("clear-log");
    },
    addLog: function() {
      var entry = {};
      entry.message = this.newLog;
      entry.id = 1;
      this.mutableLog.push(entry);
    },
    addLogEntry: function(message) {
      var entry = {};
      entry.message = message;
      entry.id = 1;
      this.mutableLog.push(entry);
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
</style>
