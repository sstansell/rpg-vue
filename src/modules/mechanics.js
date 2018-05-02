import { DiceRoller } from "./rpg-dice-roller.js";

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
}.call(this, "Mechanics", this, function(require) {
  "use strict";

  //function Scenarios() { }
  //Scenarios.prototype.start = function () { };
  var Mechanics = {};
  Mechanics.rollDice = function(dice) {
    // create a new instance of the DiceRoller
    var diceRoller = new DiceRoller();

    // roll the dice
    diceRoller.roll(dice);

    // get the latest dice rolls from the log
    var latestRoll = diceRoller
      .getLog()
      .shift()
      .getTotal();

    // output the latest roll - it has a toString method for nice output

    return latestRoll;
    //document.write(latestRoll);
  };

  Mechanics.calculateDamage = function(minimum, roll, damageModifier) {
    var damage = roll + damageModifier - minimum;
    return damage;
  };

  // exports
  return Mechanics;
});
