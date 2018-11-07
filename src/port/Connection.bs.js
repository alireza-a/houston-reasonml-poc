// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Curry = require("bs-platform/lib/js/curry.js");

function Make() {
  return (function (funarg) {
      var create = function (port) {
        return /* record */[
                /* port */port,
                /* observerIncId */[0],
                /* observers */[/* [] */0]
              ];
      };
      var write = function (link, data) {
        switch (data.tag | 0) {
          case 0 : 
              return link[/* port */0].write(data[0]);
          case 1 : 
              return link[/* port */0].write(data[0]);
          case 2 : 
              return link[/* port */0].write(data[0]);
          
        }
      };
      var listen = function (link) {
        link[/* port */0].on("data", (function (buffer) {
                var param = link;
                var data = Curry._1(funarg[/* decode */0], buffer);
                return List.iter((function (obs) {
                              return Curry._1(obs[/* f */1], data);
                            }), param[/* observers */2][0]);
              }));
        return /* () */0;
      };
      var subscribe = function (param, f) {
        var observers = param[/* observers */2];
        var observerIncId = param[/* observerIncId */1];
        var listener_000 = /* id */observerIncId[0];
        var listener = /* record */[
          listener_000,
          /* f */f
        ];
        observers[0] = /* :: */[
          listener,
          observers[0]
        ];
        var unsubscribe = function () {
          observers[0] = List.filter((function (l) {
                    return l[/* id */0] !== observerIncId[0];
                  }))(observers[0]);
          return /* () */0;
        };
        observerIncId[0] = observerIncId[0] + 1 | 0;
        return unsubscribe;
      };
      return /* module */[
              /* create */create,
              /* write */write,
              /* subscribe */subscribe,
              /* listen */listen
            ];
    });
}

exports.Make = Make;
/* No side effect */
