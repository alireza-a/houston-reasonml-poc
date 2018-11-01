// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Helpers = require("./helpers");

function resolvers() {
  return {
          info: (function () {
              return "Houston ReasonML PoC: Houston is SFU Satellite design team's ground control station";
            }),
          commandSequence: (function (_, args) {
              return Helpers.readJsonFile("src/command_sequence/" + (args.id + ".json"));
            })
        };
}

exports.resolvers = resolvers;
/* ./helpers Not a pure module */
