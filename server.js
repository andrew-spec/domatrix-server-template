"use strict";
require("google-closure-library");
goog.require("goog.structs.PriorityQueue");
goog.require("goog.structs.QuadTree");
const c = require("./modules/layout/gamemodes.js").output;
const util = require("./modules/lib/util");
const hshg = require("./modules/lib/hshg");
const ran = require("./modules/lib/random");
const btConfig = require("./modules/split/btconfig.json");
const userIP = require('user-ip');
const WebSocket = require('ws')
const fetch = require('node-fetch');
var clientMessage = []
let IPBlacklist = ['174.84.204.177'];
let ProxyBlacklist = [];
let isClosed = false
var turretthingamabob
var nam1 = 'Server Offline'
let url1 = 'http://domatrix-server-template.glitch.me/serverselectorData.json'
let host1
if (url1.includes('glitch.me')) {
  host1 = 'Glitch'
}
let pre1 = 'Unknown';
fetch(url1)
  .then( res => { return res.json(); } )
  .then( data => { return nam1 = data.name; pre1 = data.prefix; console.log('Found Data of nam1') } )
var http = require("http"),
url = require("url"),
fs = require("fs"),
c2 = require("./modules/layout/gamemodes.js").base;
Array.prototype.remove = (index) => {
  if (index === this.length - 1) {
    return this.pop();
  } else {
    let r = this[index];
    this[index] = this.pop();
    return r;
  }
};
var isOver = false;
var checkend = false;
function end() {
  checkend = true;
}
let ip = [];
let socket = {
  ip: ['127.0.0.1', 'localhost']
};
socket.ip = ip
let server = http.createServer((req, res, socket) => {
  let { pathname } = url.parse(req.url);
  ip = userIP(req)
  switch (pathname) {
    case "/":
      res.writeHead(200);
 res.end(`<!DOCTYPE html>
            <html>
              <body>
                <h1>lol cry about it</h1>
              </body>
            <html>`)
      break;
    case "/serverselectorData.json":
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.writeHead(200);
      res.end(
        JSON.stringify({
          name: c.NAME,
          players: views.length,
          maxPlayers: 15,
          status: status,
          prefix: process.env.prefix,
          message: clientMessage
        })
      );
      break;
    case "/mockups.json":
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.writeHead(200);
      res.end(mockupJsonData);
      break;
    default:
      res.writeHead(404);
      res.end();
  }
});
setTimeout(end, 500000);
var joinableServer = 1;
global.fps = "Unknown";
var roomSpeed = 1;
const room = {
  lastCycle: undefined,
  cycleSpeed: 1e3 / roomSpeed / 30,
  width: c.WIDTH,
  height: c.HEIGHT,
  setup: c.ROOM_SETUP,
  xgrid: c.X_GRID,
  ygrid: c.Y_GRID,
  gameMode: c.MODE,
  gmName: c.NAME,
  skillBoost: c2.SKILL_BOOST,
  scale: {
    square: (c.WIDTH * c.HEIGHT) / 1e8,
  },
  maxFood: ((c.WIDTH * c.HEIGHT) / 2e4) * c2.FOOD_AMOUNT,
  isInRoom: (location) => {
    return (
      location.x >= 0 &&
      location.x <= c.WIDTH &&
      location.y >= 0 &&
      location.y <= c.HEIGHT
    );
  },
  topPlayerID: -1,
  cellTypes: (function () {
    let output = ["nest", "norm", "rock", "roid", "port", "wall"];
    for (let i = 1; i < 5; i++) output.push("bas" + i), output.push("bap" + i);
    for (let i = 0; i < c.ROOM_SETUP.length; i++)
      for (let j = 0; j < c.ROOM_SETUP[i].length; j++)
        if (!output.includes(c.ROOM_SETUP[i][j]))
          output.push(c.ROOM_SETUP[i][j]);
    return output;
  })(),
};
room.findType = (type) => {
  let output = [];
  let j = 0;
  room.setup.forEach((row) => {
    let i = 0;
    row.forEach((cell) => {
      if (cell === type) {
        output.push({
          x: ((i + 0.5) * room.width) / room.xgrid,
          y: ((j + 0.5) * room.height) / room.ygrid,
        });
      }
      i++;
    });
    j++;
  });
  room[type] = output;
};
room.setType = (type, location) => {
  if (!room.isInRoom(location)) return false;
  let a = Math.floor((location.y * room.ygrid) / room.height);
  let b = Math.floor((location.x * room.xgrid) / room.width);
  room.setup[a][b] = type;
  sockets.broadcastRoom();
};
room.findType("nest");
room.findType("boss");
room.findType("spawn1");
room.findType('sanc1');
room.findType('sanc2');
room.findType('sanc3');
room.findType('sanc4');
room.findType("sancN");
room.findType("sancE");
room.findType("sancW");
room.findType("sancS");
room.findType("mot2");
room.findType("mot3");
room.findType("mot4");
room.findType("norm");
room.findType("mot1");
room.findType("mot2");
room.findType("mot3");
room.findType("mot4");
room.findType("wall");
room.findType("bas1");
room.findType("bas2");
room.findType("bas3");
room.findType("bas4");
room.findType("bap1");
room.findType("bap2");
room.findType("bap3");
room.findType("bap4");
room.findType("port");
room.findType("roid");
room.findType("rock");
room.findType("domN");
room.findType("domE");
room.findType("domW");
room.findType("domC");
room.findType("domS");
room.findType("ball");
room.findType("arcl");
room.findType("arc2");
room.nestFoodAmount =
  (1.5 * Math.sqrt(room.nest.length)) / room.xgrid / room.ygrid;
room.random = () => {
  return {
    x: ran.irandom(room.width),
    y: ran.irandom(room.height),
  };
};
room.randomType = (type) => {
    let selection = room[type][ran.irandom(room[type].length - 1)];
  return {
    x:
      ran.irandom((0.5 * room.width) / room.xgrid) * ran.choose([-1, 1]) +
      selection.x,
    y:
      ran.irandom((0.5 * room.height) / room.ygrid) * ran.choose([-1, 1]) +
      selection.y,
  };
};

room.gauss = (clustering) => {
  let output;
  do {
    output = {
      x: ran.gauss(room.width / 2, room.height / clustering),
      y: ran.gauss(room.width / 2, room.height / clustering),
    };
  } while (!room.isInRoom(output));
};
room.gaussInverse = (clustering) => {
  let output;
  do {
    output = {
      x: ran.gaussInverse(0, room.width, clustering),
      y: ran.gaussInverse(0, room.height, clustering),
    };
  } while (!room.isInRoom(output));
  return output;
};
room.gaussRing = (radius, clustering) => {
  let output;
  do {
    output = ran.gaussRing(room.width * radius, clustering);
    output = {
      x: output.x + room.width / 2,
      y: output.y + room.height / 2,
    };
  } while (!room.isInRoom(output));
  return output;
};
room.isIn = (type, location) => {
  if (room.isInRoom(location)) {
    let a = Math.floor((location.y * room.ygrid) / room.height);
    let b = Math.floor((location.x * room.xgrid) / room.width);
    return type === room.setup[a][b];
  } else {
    return false;
  }
};
room.isAt = function (location) {
  if (!room.isInRoom(location)) return false;
  let x = Math.floor((location.x * room.xgrid) / room.width);
  let y = Math.floor((location.y * room.ygrid) / room.height);
  return {
    x: ((x + 0.5) / room.xgrid) * room.width,
    y: ((y + 0.5) / room.ygrid) * room.height,
    id: x * room.xgrid + y,
  };
};
room.isInNorm = (location) => {
  if (room.isInRoom(location)) {
    let a = Math.floor((location.y * room.ygrid) / room.height);
    let b = Math.floor((location.x * room.xgrid) / room.width);
    let v = room.setup[a][b];
    return v !== "nest";
  } else {
    return false;
  }
};
room.gaussType = (type, clustering) => {
  let selection = room[type][ran.irandom(room[type].length - 1)];
  let location = {};
  do {
    location = {
      x: ran.gauss(selection.x, room.width / room.xgrid / clustering),
      y: ran.gauss(selection.y, room.height / room.ygrid / clustering),
    };
  } while (!room.isIn(type, location));
  return location;
};
util.log(
  room.width +
    " x " +
    room.height +
    " room initalized.  Max food: " +
    room.maxFood +
    ", max nest food: " +
    room.maxFood * room.nestFoodAmount +
    "."
);
class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  update() {
    this.len = this.length;
    this.dir = this.direction;
  }
  get length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
  isShorterThan(d) {
    return this.x * this.x + this.y * this.y <= d * d;
  }
  get direction() {
    return Math.atan2(this.y, this.x);
  }
}

function nullVector(v) {
  v.x = 0;
  v.y = 0;
}
var Class = (() => {
  let def = require("./modules/lib/definitions"),
    i = 0;
  for (let k in def) {
    if (!def.hasOwnProperty(k)) continue;
    def[k].index = i++;
  }
  return def;
})();

function nearest(
  array,
  location,
  test = () => {
    return true;
  }
) {
  let list = new goog.structs.PriorityQueue();
  let d;
  if (!array.length) {
    return undefined;
  }
  array.forEach(function (instance) {
    d =
      Math.pow(instance.x - location.x, 2) +
      Math.pow(instance.y - location.y, 2);
    if (test(instance, d)) {
      list.enqueue(d, instance);
    }
  });
  return list.dequeue();
}

function timeOfImpact(p, v, s) {
  let a = s * s - (v.x * v.x + v.y * v.y);
  let b = p.x * v.x + p.y * v.y;
  let c = p.x * p.x + p.y * p.y;
  let d = b * b + a * c;
  let t = 0;
  if (d >= 0) {
    t = Math.max(0, (b + Math.sqrt(d)) / a);
  }
  return t * 0.9;
}
const ioTypes = {};
class IO {
  constructor(body) {
    this.body = body;
    this.acceptsFromTop = true;
  }
  think() {
    return {
      target: null,
      goal: null,
      fire: null,
      main: null,
      alt: null,
      power: null,
    };
  }
}
ioTypes.doNothing = class extends IO {
  constructor(body) {
    super(body);
    this.acceptsFromTop = false;
  }
  think() {
    return {
      goal: {
        x: this.body.x,
        y: this.body.y,
      },
      main: false,
      alt: false,
      fire: false,
    };
  }
}
ioTypes.spinWhenIdle = class extends IO {
  constructor(b) {
    super(b);
    this.a = 0;
  }
  think(input) {
    if (input.target) {
      this.a = Math.atan2(input.target.y, input.target.x);
      return input;
    }
    this.a += 0.02;
    return {
      target: {
        x: Math.cos(this.a),
        y: Math.sin(this.a),
      },
      main: true,
      goal: {
        x: this.body.x,
        y: this.body.y,
      },
    };
  }
}
ioTypes.multiboxClone = class extends IO {
    constructor(b) {
        super(b);
    }
    think(input) {
        if (this.body.multiboxMaster) {
            let control = this.body.multiboxMaster.control;
            control.goal = {
                x: this.body.multiboxMaster.x,
                y: this.body.multiboxMaster.y
            };
            control.power = 1;
            return control;
        }
    }
}
ioTypes.color = class extends IO {
    constructor(b) {
        super(b);
    }
    think() {
    }
}
ioTypes.moveInCircles = class extends IO {
  constructor(body) {
    super(body);
    this.acceptsFromTop = false;
    this.timer = ran.irandom(10) + 3;
    this.goal = {
      x: this.body.x + 10 * Math.cos(-this.body.facing),
      y: this.body.y + 10 * Math.sin(-this.body.facing),
    };
  }
  think() {
    if (!this.timer--) {
      this.timer = 10;
      this.goal = {
        x: this.body.x + 10 * Math.cos(-this.body.facing),
        y: this.body.y + 10 * Math.sin(-this.body.facing),
      };
    }
    return {
      goal: this.goal,
    };
  }
}
ioTypes.botMoving = class extends IO {
  constructor(body) {
    super(body);
    this.nearEdge = 1;
    this.avoidEdge = false;
    this.timer = 61;
    this.offset = 0;
    this.offset2 = 1;
    this.avoidEdge = 90;
    this.PI180 = Math.PI / 180;
    this.orbit = 0.7 * this.body.fov;
    this.orbit2 = 0.5 * this.body.fov;
    this.wanderGoal = {
      x: ran.randomRange(0, room.width),
      y: ran.randomRange(0, room.height),
    };
    this.dir = 0;
  }
  chooseSpot() {
    this.wanderRoom = Math.random() < 0.8 ? "norm" : "nest";
    return room.randomType(this.wanderRoom);
  }
  think(input) {
    if (!room.isInRoom(this.wanderGoal)) this.wanderGoal = this.chooseSpot();
    this.timer++;
    let goal = {},
      power = 1;
    this.previousNearEdge = JSON.parse(JSON.stringify(this.nearEdge));
    this.nearEdge = "5";
    if (this.body.x < 200) this.nearEdge += "1";
    if (this.body.y < 200) this.nearEdge += "2";
    if (this.body.x > room.width - 200) this.nearEdge += "3";
    if (this.body.y > room.height - 200) this.nearEdge += "4";
    if (this.previousNearEdge !== this.nearEdge)
      switch (this.nearEdge) {
        case "51":
        case "53":
          this.avoidEdge = [90 * this.PI180, 270 * this.PI180];
          break;
        case "52":
        case "54":
          this.avoidEdge = [180 * this.PI180, 0 * this.PI180];
          break;
        case "512":
          this.avoidEdge = [90 * this.PI180, 0 * this.PI180];
          break;
        case "514":
          this.avoidEdge = [270 * this.PI180, 0 * this.PI180];
          break;
        case "523":
          this.avoidEdge = [90 * this.PI180, 180 * this.PI180];
          break;
        case "534":
          this.avoidEdge = [270 * this.PI180, 180 * this.PI180];
          break;
      }
    if (input.target != null) {
      this.wanderGoal = this.chooseSpot();
      let target = new Vector(input.target.x, input.target.y);
      if (this.timer > 60) {
        (this.offset =
          ran.randomRange((30 * Math.PI) / 180, (45 * Math.PI) / 180) *
          this.offset2),
          (this.offset2 *= -1),
          (this.timer = 0);
      }
      if (this.body.health.amount / this.body.health.max > 0.4) {
        if (this.nearEdge === "5") {
          if (target.length > this.orbit) {
            (goal = {
              x:
                this.body.x +
                this.orbit *
                  Math.cos(
                    (Math.floor(target.direction / (Math.PI / 4)) * Math.PI) / 4
                  ),
              y:
                this.body.y +
                this.orbit *
                  Math.sin(
                    (Math.floor(target.direction / (Math.PI / 4)) * Math.PI) / 4
                  ),
            }),
              (power = 1);
          } else if (
            target.length > this.orbit2 &&
            target.length < this.orbit
          ) {
            (goal = {
              x:
                this.body.x +
                this.orbit2 *
                  Math.cos(
                    (Math.floor(
                      (target.direction + this.offset) / Math.PI / 4
                    ) *
                      Math.PI) /
                      4
                  ),
              y:
                this.body.y +
                this.orbit2 *
                  Math.sin(
                    (Math.floor(
                      (target.direction + this.offset) / Math.PI / 4
                    ) *
                      Math.PI) /
                      4
                  ),
            }),
              (power = 1);
          } else {
            (goal = {
              x:
                this.body.x -
                this.orbit2 *
                  Math.cos(
                    (Math.floor(target.direction / (Math.PI / 4)) * Math.PI) / 4
                  ),
              y:
                this.body.y -
                this.orbit2 *
                  Math.sin(
                    (Math.floor(target.direction / (Math.PI / 4)) * Math.PI) / 4
                  ),
            }),
              (power = 1);
          }
        } else {
          if (target.length > this.orbit2) {
            (goal = {
              x:
                this.body.x +
                100 *
                  Math.cos(
                    this.avoidEdge[
                      util.angleDifference(
                        target.direction,
                        this.avoidEdge[0]
                      ) <
                      util.angleDifference(target.direction, this.avoidEdge[1])
                        ? 0
                        : 1
                    ]
                  ),
              y:
                this.body.y +
                100 *
                  Math.sin(
                    this.avoidEdge[
                      util.angleDifference(
                        target.direction,
                        this.avoidEdge[0]
                      ) <
                      util.angleDifference(target.direction, this.avoidEdge[1])
                        ? 0
                        : 1
                    ]
                  ),
            }),
              (power = 1);
          } else {
            (goal = {
              x:
                this.body.x +
                100 *
                  Math.cos(
                    this.avoidEdge[
                      util.angleDifference(
                        target.direction,
                        this.avoidEdge[0]
                      ) <
                      util.angleDifference(target.direction, this.avoidEdge[1])
                        ? 1
                        : 0
                    ]
                  ),
              y:
                this.body.y +
                100 *
                  Math.sin(
                    this.avoidEdge[
                      util.angleDifference(
                        target.direction,
                        this.avoidEdge[0]
                      ) <
                      util.angleDifference(target.direction, this.avoidEdge[1])
                        ? 1
                        : 0
                    ]
                  ),
            }),
              (power = 1);
          }
        }
      } else {
        if (this.nearEdge === "5") {
          (goal = {
            x: this.body.x + 100 * -Math.cos(this.dir + this.offset),
            y: this.body.y + 100 * -Math.sin(this.dir + this.offset),
          }),
            (power = 1);
        } else {
          (goal = {
            x:
              this.body.x +
              100 *
                Math.cos(
                  this.avoidEdge[
                    Math.abs(target.direction - this.avoidEdge[0]) >
                    Math.abs(target.direction - this.avoidEdge[1])
                      ? 1
                      : 0
                  ]
                ),
            y:
              this.body.y +
              100 *
                Math.sin(
                  this.avoidEdge[
                    Math.abs(target.direction - this.avoidEdge[0]) >
                    Math.abs(target.direction - this.avoidEdge[1])
                      ? 1
                      : 0
                  ]
                ),
          }),
            (power = 1);
        }
      }
    } else {
      (goal = this.wanderGoal), (power = 1);
      if (util.getDistance(this.wanderGoal, this.body) < 10) {
        this.wanderGoal = this.chooseSpot();
      }
    }
    return {
      goal: goal,
      power: power,
    };
  }
}
ioTypes.hangOutNearPlayer = class extends IO {
  constructor(b, p) {
    super(b);
    this.player = p;
    this.acceptsFromTop = false;
    this.orbit = 30;
    this.currentGoal = {
      x: this.player.body.source.x,
      y: this.player.body.source.y,
    };
    this.timer = 0;
    this.maxSpeed = 15;
  }
  think(input) {
    if (this.player.body.invisible[1]) return {};
    if (this.player.body.source != this.body) {
      let bound1 = this.orbit * 0.8 + this.player.body.source.size + this.player.body.size;
      let bound2 = this.orbit * 1.5 + this.player.body.source.size + this.player.body.size;
      let dist = util.getDistance(this.player.body, this.player.body.source) + Math.PI / 8;
      let output = {
        target: {
          x: this.player.body.velocity.x,
          y: this.player.body.velocity.y,
        },
        goal: this.currentGoal,
        power: undefined,
      };
      if (dist > bound2 || this.timer > 30) {
        this.timer = 0;
        let dir =
          util.getDirection(this.player.body, this.player.body.source) +
          Math.PI * ran.random(0.5);
        let len = ran.randomRange(bound1, bound2);
        let x = this.player.body.source.x - len * Math.cos(dir);
        let y = this.player.body.source.y - len * Math.sin(dir);
        this.currentGoal = {
          x: x,
          y: y,
        };
      }
      if (dist < bound2) {
        output.power = 0.15;
        if (ran.chance(0.3)) {
          this.timer++;
        }
      }
      return output;
    }
  }
}
ioTypes.mapTargetSideToGoal = class extends IO {
  constructor(b) {
    super(b);
  }
  think(input) {
    if (input.main || input.alt) {
      return {
        goal: {
          x: input.target.x + this.body.x + 30,
          y: input.target.y + this.body.y,
        },
        power: 1,
      };
    }
    if (input.lmb || input.autofire) {
      if (this.body.shapeData !== 256) {
        this.body.shapeData += 1
      }
      if (this.body.shapeData === 256) {
        this.body.shapeData -= 1
      }
    }
  }
}
ioTypes.listenToPlayer = class extends IO {
  constructor(b, p) {
    super(b);
    this.player = p;
    this.acceptsFromTop = false;
  }
  think() {
    let targ = {
      x: this.player.target.x,
      y: this.player.target.y,
    };
    if (this.player.command.autospin) {
      let kk =
        Math.atan2(this.body.control.target.y, this.body.control.target.x) +
        0.02;
      targ = {
        x: 100 * Math.cos(kk),
        y: 100 * Math.sin(kk),
      };
    }
    if (this.invuln === true || !0){
      this.body.master.invuln === true
    }
    if (this.body.invuln) {
      this.body.invulnFlash = true
      if (
        this.player.command.right ||
        this.player.command.left ||
        this.player.command.up ||
        this.player.command.down ||
        this.player.command.lmb
      ) {
        this.body.invuln = false;
        this.body.invulnFlash = false
        if (this.body.invisible[0] === 0) {
          this.body.alpha = this.body.maxAlpha;
        }
      }
    }
    this.body.autoOverride = this.player.command.override;
    return {
      target: targ,
      goal: {
        x: this.body.x + this.player.command.right - this.player.command.left,
        y: this.body.y + this.player.command.down - this.player.command.up,
      },
      fire: this.player.command.lmb || this.player.command.autofire,
      main:
        this.player.command.lmb ||
        this.player.command.autospin ||
        this.player.command.autofire,
      alt: this.player.command.rmb,
    };
  }
}
ioTypes.mapTargetToGoal = class extends IO {
  constructor(b) {
    super(b);
  }

  think(input) {
    if (input.main || input.alt) {
      return {
        goal: {
          x: input.target.x + this.body.x,
          y: input.target.y + this.body.y,
        },
        power: 1,
      };
    }
  }
}
/*ioTypes.mapGoalToTarget = class extends IO {
  constructor(b) {
    super(b);
    this.myGoal = {
      x: this.control.target.x + this.x,
      y: this.control.target.y + this.y
    };
  }
  think() {
    return {
       goal: {
         x: this.myGoal.x,
         y: this.myGoal.y
      }
    }
  }
}*/
ioTypes.mapGoalToTarget = class extends IO {
    constructor(body) {
        super(body);
        this.myGoal = {
            x: body.master.control.target.x + body.master.x,
            y: body.master.control.target.y + body.master.y
        };
        this.countdown = 5;
    }
    think() {
        if (this.countdown) {
            if (util.getDistance(this.body, this.myGoal) < 1) {
                this.countdown--;
            }
            return {
                goal: {
                    x: this.myGoal.x,
                    y: this.myGoal.y
                }
            };
        }
    }
}
ioTypes.boomerang = class extends IO {
  constructor(b) {
    super(b);
    this.r = 0;
    this.b = b;
    this.m = b.master;
    this.turnover = false;
    let len =
      10 *
      util.getDistance(
        {
          x: 0,
          y: 0,
        },
        b.master.control.target
      );
    this.myGoal = {
      x: 3 * b.master.control.target.x + b.master.x,
      y: 3 * b.master.control.target.y + b.master.y,
    };
  }
  think(input) {
    if (this.b.range > this.r) this.r = this.b.range;
    let t = 1;
    if (!this.turnover) {
      if (this.r && this.b.range < this.r * 0.5) {
        this.turnover = true;
      }
      return {
        goal: this.myGoal,
        power: t,
      };
    } else {
      return {
        goal: {
          x: this.m.x,
          y: this.m.y,
        },
        power: t,
      };
    }
  }
}
ioTypes.goToMasterTarget = class extends IO {
  constructor(body) {
    super(body);
    this.myGoal = {
      x: body.master.control.target.x + body.master.x,
      y: body.master.control.target.y + body.master.y,
    };
    this.countdown = 5;
  }
  think() {
    if (this.countdown) {
      if (util.getDistance(this.body, this.myGoal) < 1) {
        this.countdown--;
      }
      return {
        goal: {
          x: this.myGoal.x,
          y: this.myGoal.y,
        },
      };
    }
  }
}
ioTypes.canRepel = class extends IO {
  constructor(b) {
    super(b);
  }
  think(input) {
    if (input.alt && input.target) {
      return {
        target: {
          x: -input.target.x,
          y: -input.target.y,
        },
        main: true,
      };
    }
  }
}
ioTypes.alwaysFire = class extends IO {
  constructor(body) {
    super(body);
  }
  think() {
    return {
      fire: true,
    };
  }
}
ioTypes.targetSelf = class extends IO {
  constructor(body) {
    super(body);
  }
  think() {
    return {
      main: true,
      target: {
        x: 0,
        y: 0,
      },
    };
  }
}
ioTypes.mapAltToFire = class extends IO {
  constructor(body) {
    super(body);
  }
  think(input) {
    if (input.alt) {
      return {
        fire: true,
      };
    }
  }
}
ioTypes.onlyAcceptInArc = class extends IO {
  constructor(body) {
    super(body);
  }
  think(input) {
    if (input.target && this.body.firingArc != null) {
      if (
        Math.abs(
          util.angleDifference(
            Math.atan2(input.target.y, input.target.x),
            this.body.firingArc[0]
          )
        ) >= this.body.firingArc[1]
      ) {
        return {
          fire: false,
          alt: false,
          main: false,
        };
      }
    }
  }
}
ioTypes.dontFire = class extends IO {
  constructor(body) {
    super(body);
  }
  think(input) {
    if (input.fire) {
        return {
          fire: false,
      };
    }
    this.body.ondead = () => {
      return {
        fire: true,
        main: true
      }
    }
  }
}
ioTypes.nearestDifferentMaster = class extends IO {
  constructor(body) {
    super(body);
    this.targetLock = undefined;
    this.tick = ran.irandom(30);
    this.lead = 0;
    this.validTargets = this.buildList(body.fov / 2);
    this.oldHealth = body.health.display();
  }
  buildList(range) {
    let m = {
        x: this.body.x,
        y: this.body.y,
      },
      mm = {
        x: this.body.master.master.x,
        y: this.body.master.master.y,
      },
      mostDangerous = 0,
      sqrRange = range * range,
      keepTarget = false;
    let out = entities
      .map((e) => {
        if (e.health.amount > 0) {
          if (!e.invuln) {
            if (e.master.master.team !== this.body.master.master.team) {
              if (e.master.master.team !== -101) {
                if (
                  (e.type === "tank" && e.ignored !== true) ||
                  e.type === "crasher" ||
                  e.type === "food" ||
                  (!e.type === "turret" && !e.type === "maze" && !e.type === "pet" && !e.invisus && e.ignored !== true)
                ) {
                  if (
                    Math.abs(e.x - m.x) < range &&
                    Math.abs(e.y - m.y) < range
                  ) {
                    if (
                      !this.body.aiSettings.blind ||
                      (Math.abs(e.x - mm.x) < range &&
                        Math.abs(e.y - mm.y) < range)
                    )
                      return e;
                  }
                }
              }
            }
          }
        }
      })
      .filter((e) => {
        return e;
      });
    if (!out.length) return [];
    out = out
      .map((e) => {
        let yaboi = false;
        if (
          Math.pow(this.body.x - e.x, 2) + Math.pow(this.body.y - e.y, 2) <
          sqrRange
        ) {
          if (this.body.firingArc == null || this.body.aiSettings.view360) {
            yaboi = true;
          } else if (
            Math.abs(
              util.angleDifference(
                util.getDirection(this.body, e),
                this.body.firingArc[0]
              )
            ) < this.body.firingArc[1]
          )
            yaboi = true;
        }
        if (yaboi) {
          mostDangerous = Math.max(e.dangerValue, mostDangerous);
          return e;
        }
      })
      .filter((e) => {
        if (e != null) {
          if (this.body.aiSettings.farm || e.dangerValue === mostDangerous) {
            if (this.targetLock) {
              if (e.id === this.targetLock.id) keepTarget = true;
            }
            return e;
          }
        }
      });
    if (!keepTarget) this.targetLock = undefined;
    return out;
  }
  think(input) {
    if (input.main || input.alt || this.body.master.autoOverride) {
      this.targetLock = undefined;
      return {};
    }
    let tracking = this.body.topSpeed,
      range = this.body.fov / 2;
    for (let i = 0; i < this.body.guns.length; i++) {
      if (this.body.guns[i].canShoot && !this.body.aiSettings.skynet) {
        let v = this.body.guns[i].getTracking();
        tracking = v.speed;
        range = Math.min(range, v.speed * v.range);
        break;
      }
    }
    if (this.targetLock) {
      if (this.targetLock.health.amount <= 0) {
        this.targetLock = undefined;
        this.tick = 100;
      }
    }
    if (this.tick++ > 15 * roomSpeed) {
      this.tick = 0;
      this.validTargets = this.buildList(range);
      if (
        this.targetLock &&
        this.validTargets.indexOf(this.targetLock) === -1
      ) {
        this.targetLock = undefined;
      }
      if (this.targetLock == null && this.validTargets.length) {
        this.targetLock =
          this.validTargets.length === 1
            ? this.validTargets[0]
            : nearest(this.validTargets, {
                x: this.body.x,
                y: this.body.y,
              });
        this.tick = -90;
      }
    }
    if (this.targetLock != null) {
      let radial = this.targetLock.velocity;
      let diff = {
        x: this.targetLock.x - this.body.x,
        y: this.targetLock.y - this.body.y,
      };
      if (this.tick % 4 === 0) {
        this.lead = 0;
        if (!this.body.aiSettings.chase) {
          let toi = timeOfImpact(diff, radial, tracking);
          this.lead = toi;
        }
      }
      return {
        target: {
          x: diff.x + this.lead * radial.x,
          y: diff.y + this.lead * radial.y,
        },
        fire: true,
        main: true,
      };
    }
    return {};
  }
}
ioTypes.avoid = class extends IO {
  constructor(body) {
    super(body);
  }
  think(input) {
    let masterId = this.body.master.id;
    let range = this.body.size * this.body.size * 100;
    this.avoid = nearest(
      entities,
      {
        x: this.body.x,
        y: this.body.y,
      },
      function (test, sqrdst) {
        return (
          test.master.id !== masterId &&
          (test.type === "bullet" ||
            test.type === "drone" ||
            test.type === "swarm" ||
            test.type === "trap" ||
            test.type === "block") &&
          sqrdst < range
        );
      }
    );
    if (this.avoid != null) {
      let delt = new Vector(
        this.body.velocity.x - this.avoid.velocity.x,
        this.body.velocity.y - this.avoid.velocity.y
      );
      let diff = new Vector(
        this.avoid.x - this.body.x,
        this.avoid.y - this.body.y
      );
      let comp =
        (delt.x * diff.x + delt.y * diff.y) / delt.length / diff.length;
      let goal = {};
      if (comp > 0) {
        if (input.goal) {
          let goalDist = Math.sqrt(
            range / (input.goal.x * input.goal.x + input.goal.y * input.goal.y)
          );
          goal = {
            x: input.goal.x * goalDist - diff.x * comp,
            y: input.goal.y * goalDist - diff.y * comp,
          };
        } else {
          goal = {
            x: -diff.x * comp,
            y: -diff.y * comp,
          };
        }
        return goal;
      }
    }
  }
}
ioTypes.minion = class extends IO {
  constructor(body) {
    super(body);
    this.turnwise = 1;
  }
  think(input) {
    if (this.body.aiSettings.reverseDirection && ran.chance(0.005)) {
      this.turnwise = -1 * this.turnwise;
    }
    if (input.target != null && (input.alt || input.main)) {
      let sizeFactor = Math.sqrt(this.body.master.size / this.body.master.SIZE);
      let leash = 60 * sizeFactor;
      let orbit = 120 * sizeFactor;
      let repel = 135 * sizeFactor;
      let goal;
      let power = 1;
      let target = new Vector(input.target.x, input.target.y);
      if (input.alt) {
        if (target.length < leash) {
          goal = {
            x: this.body.x + target.x,
            y: this.body.y + target.y,
          };
        } else if (target.length < repel) {
          let dir = -this.turnwise * target.direction + Math.PI / 5;
          goal = {
            x: this.body.x + Math.cos(dir),
            y: this.body.y + Math.sin(dir),
          };
        } else {
          goal = {
            x: this.body.x - target.x,
            y: this.body.y - target.y,
          };
        }
      } else if (input.main) {
        let dir = this.turnwise * target.direction + 0.01;
        goal = {
          x: this.body.x + target.x - orbit * Math.cos(dir),
          y: this.body.y + target.y - orbit * Math.sin(dir),
        };
        if (Math.abs(target.length - orbit) < this.body.size * 2) {
          power = 0.7;
        }
      }
      return {
        goal: goal,
        power: power,
      };
    }
  }
}
ioTypes.hangOutNearMaster = class extends IO {
  constructor(body) {
    super(body);
    this.acceptsFromTop = false;
    this.orbit = 30;
    this.currentGoal = {
      x: this.body.source.x,
      y: this.body.source.y,
    };
    this.timer = 0;
  }
  think(input) {
    if (this.body.invisible[1]) return {};
    if (this.body.source != this.body) {
      let bound1 = this.orbit * 0.8 + this.body.source.size + this.body.size;
      let bound2 = this.orbit * 1.5 + this.body.source.size + this.body.size;
      let dist = util.getDistance(this.body, this.body.source) + Math.PI / 8;
      let output = {
        target: {
          x: this.body.velocity.x,
          y: this.body.velocity.y,
        },
        goal: this.currentGoal,
        power: undefined,
      };
      if (dist > bound2 || this.timer > 30) {
        this.timer = 0;
        let dir =
          util.getDirection(this.body, this.body.source) +
          Math.PI * ran.random(0.5);
        let len = ran.randomRange(bound1, bound2);
        let x = this.body.source.x - len * Math.cos(dir);
        let y = this.body.source.y - len * Math.sin(dir);
        this.currentGoal = {
          x: x,
          y: y,
        };
      }
      if (dist < bound2) {
        output.power = 0.15;
        if (ran.chance(0.3)) {
          this.timer++;
        }
      }
      return output;
    }
  }
}
ioTypes.hangOutNearMasterMaster = class extends IO {
  constructor(body) {
    super(body);
    this.acceptsFromTop = false;
    this.orbit = 30;
    this.currentGoal = {
      x: this.body.master.master.source.x,
      y: this.body.master.master.source.y,
    };
    this.timer = 0;
  }
  think(input) {
    if (this.body.master.master.invisible[1]) return {};
    if (this.body.master.master.source != this.body) {
      let bound1 = this.orbit * 0.8 + this.body.master.master.source.size + this.body.master.master.source.size;
      let bound2 = this.orbit * 1.5 + this.body.master.master.source.size + this.body.master.master.source.size;
      let dist = util.getDistance(this.body.master.master, this.body.master.master.source) + Math.PI / 8;
      let output = {
        target: {
          x: this.body.master.master.velocity.x,
          y: this.body.master.master.velocity.y,
        },
        goal: this.currentGoal,
        power: undefined,
      };
      if (dist > bound2 || this.timer > 30) {
        this.timer = 0;
        let dir =
          util.getDirection(this.body.master.master, this.body.master.master.source) +
          Math.PI * ran.random(0.5);
        let len = ran.randomRange(bound1, bound2);
        let x = this.body.master.master.x - len * Math.cos(dir);
        let y = this.body.master.master.y - len * Math.sin(dir);
        this.currentGoal = {
          x: x,
          y: y,
        };
      }
      if (dist < bound2) {
        output.power = 0.15;
        if (ran.chance(0.3)) {
          this.timer++;
        }
      }
      return output;
    }
  }
}
ioTypes.spin = class extends IO {
  constructor(b) {
    super(b);
    this.a = 0;
  }
  think(input) {
    this.a += 0.05;
    let offset = 0;
    if (this.body.bond != null) {
      offset = this.body.bound.angle;
    }
    return {
      target: {
        x: Math.cos(this.a + offset),
        y: Math.sin(this.a + offset),
      },
      main: true,
    };
  }
}
ioTypes.slowSpin = class extends IO {
  constructor(body) {
    super(body);
    this.a = 0;
  }
  think(input) {
    this.a += 0.02;
    let offset = 0;
    if (this.body.bond != null) {
      offset = this.body.bound.angle;
    }
    return {
      target: {
        x: Math.cos(this.a + offset),
        y: Math.sin(this.a + offset),
      },
      main: true,
    };
  }
}
ioTypes.counterslowspin = class extends IO {
  constructor(body) {
    super(body);
    this.a = 0;
  }
  think(input) {
    this.a -= 0.02;
    let offset = 0;
    if (this.body.bond != null) {
      offset = this.body.bound.angle;
    }
    return {
      target: {
        x: Math.cos(this.a + offset),
        y: Math.sin(this.a + offset),
      },
      main: true,
    };
  }
}
ioTypes.fastspin = class extends IO {
  constructor(b) {
    super(b);
    this.a = 0;
  }
  think(input) {
    this.a += 0.072;
    let offset = 0;
    if (this.body.bond != null) {
      offset = this.body.bound.angle;
    }
    return {
      target: {
        x: Math.cos(this.a + offset),
        y: Math.sin(this.a + offset),
      },
      main: true,
    };
  }
}
ioTypes.reversespin = class extends IO {
  constructor(b) {
    super(b);
    this.a = 0;
  }
  think(input) {
    this.a -= 0.05;
    let offset = 0;
    if (this.body.bond != null) {
      offset = this.body.bound.angle;
    }
    return {
      target: {
        x: Math.cos(this.a + offset),
        y: Math.sin(this.a + offset),
      },
      main: true,
    };
  }
}
ioTypes.dontTurn = class extends IO {
  constructor(b) {
    super(b);
  }
  think(input) {
    return {
      target: {
        x: 1,
        y: 0,
      },
      main: true,
    };
  }
}
ioTypes.fleeAtLowHealth = class extends IO {
  constructor(b) {
    super(b);
    this.fear = util.clamp(ran.gauss(0.7, 0.15), 0.1, 0.9);
  }
  think(input) {
    if (
      input.fire &&
      input.target != null &&
      this.body.health.amount < this.body.health.max * this.fear
    ) {
      return {
        goal: {
          x: this.body.x - input.target.x,
          y: this.body.y - input.target.y,
        },
      };
    }
  }
}
const skcnv = {
  rld: 0,
  pen: 1,
  str: 2,
  dam: 3,
  spd: 4,
  shi: 5,
  atk: 6,
  hlt: 7,
  rgn: 8,
  mob: 9,
};
const levelers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 38, 40, 42, 44,
];
class Skill {
  constructor(inital = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) {
    this.raw = inital;
    this.caps = [];
    this.setCaps([
      c2.MAX_SKILL,
      c2.MAX_SKILL,
      c2.MAX_SKILL,
      c2.MAX_SKILL,
      c2.MAX_SKILL,
      c2.MAX_SKILL,
      c2.MAX_SKILL,
      c2.MAX_SKILL,
      c2.MAX_SKILL,
      c2.MAX_SKILL,
    ]);
    this.name = [
      "Reload",
      "Bullet Penetration",
      "Bullet Health",
      "Bullet Damage",
      "Bullet Speed",
      "Shield Capacity",
      "Body Damage",
      "Max Health",
      "Shield Regeneration",
      "Movement Speed",
    ];
    this.atk = 0;
    this.hlt = 0;
    this.spd = 0;
    this.str = 0;
    this.pen = 0;
    this.dam = 0;
    this.rld = 0;
    this.mob = 0;
    this.rgn = 0;
    this.shi = 0;
    this.rst = 0;
    this.brst = 0;
    this.ghost = 0;
    this.acl = 0;
    this.reset();
  }
  reset() {
    this.points = 0;
    this.score = 0;
    this.deduction = 0;
    this.level = 0;
    this.canUpgrade = false;
    this.update();
    this.maintain();
  }
  update() {
    let curve = (() => {
      function make(x) {
        return Math.log(4 * x + 1) / Math.log(5);
      }
      let a = [];
      for (let i = 0; i < c2.MAX_SKILL * 2; i++) {
        a.push(make(i / c2.MAX_SKILL));
      }
      return (x) => {
        return a[x * c2.MAX_SKILL];
      };
    })();

    function apply(f, x) {
      return x < 0 ? 1 / (1 - x * f) : f * x + 1;
    }
    for (let i = 0; i < 10; i++) {
      if (this.raw[i] > this.caps[i]) {
        this.points += this.raw[i] - this.caps[i];
        this.raw[i] = this.caps[i];
      }
    }
    let attrib = [];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 2; j += 1) {
        attrib[i + 5 * j] = curve(
          (this.raw[i + 5 * j] + this.bleed(i, j)) / c2.MAX_SKILL
        );
      }
    }
    this.rld = Math.pow(0.5, attrib[skcnv.rld]);
    this.pen = apply(2.5, attrib[skcnv.pen]);
    this.str = apply(2, attrib[skcnv.str]);
    this.dam = apply(3, attrib[skcnv.dam]);
    this.spd = 0.5 + apply(1.5, attrib[skcnv.spd]);
    this.acl = apply(0.5, attrib[skcnv.rld]);
    this.rst = 0.5 * attrib[skcnv.str] + 2.5 * attrib[skcnv.pen];
    this.ghost = attrib[skcnv.pen];
    this.shi =
      c2.GLASS_HEALTH_FACTOR *
      apply(3 / c2.GLASS_HEALTH_FACTOR - 1, attrib[skcnv.shi]);
    this.atk = apply(1, attrib[skcnv.atk]);
    this.hlt =
      c2.GLASS_HEALTH_FACTOR *
      apply(2 / c2.GLASS_HEALTH_FACTOR - 1, attrib[skcnv.hlt]);
    this.mob = apply(0.8, attrib[skcnv.mob]);
    this.rgn = apply(25, attrib[skcnv.rgn]);
    this.brst =
      0.3 *
      (0.5 * attrib[skcnv.atk] + 0.5 * attrib[skcnv.hlt] + attrib[skcnv.rgn]);
  }
  set(thing) {
    this.raw[0] = thing[0];
    this.raw[1] = thing[1];
    this.raw[2] = thing[2];
    this.raw[3] = thing[3];
    this.raw[4] = thing[4];
    this.raw[5] = thing[5];
    this.raw[6] = thing[6];
    this.raw[7] = thing[7];
    this.raw[8] = thing[8];
    this.raw[9] = thing[9];
    this.update();
  }
  setCaps(thing) {
    this.caps[0] = thing[0];
    this.caps[1] = thing[1];
    this.caps[2] = thing[2];
    this.caps[3] = thing[3];
    this.caps[4] = thing[4];
    this.caps[5] = thing[5];
    this.caps[6] = thing[6];
    this.caps[7] = thing[7];
    this.caps[8] = thing[8];
    this.caps[9] = thing[9];
    this.update();
  }
  maintain() {
    if (this.level < c2.SKILL_CAP) {
      if (this.score - this.deduction >= this.levelScore) {
        this.deduction += this.levelScore;
        this.level += 1;
        this.points += this.levelPoints;
        if (
          this.level == c2.TIER_1 ||
          this.level == c2.TIER_2 ||
          this.level == c2.TIER_3 ||
          this.level == c2.TIER_4
        ) {
          this.canUpgrade = true;
        }
        this.update();
        return true;
      }
    }
    return false;
  }
  get levelScore() {
    return Math.ceil(1.8 * Math.pow(this.level + 1, 1.8) - 2 * this.level + 1);
  }
  get progress() {
    return this.levelScore
      ? (this.score - this.deduction) / this.levelScore
      : 0;
  }
  get levelPoints() {
    if (
      levelers.findIndex((e) => {
        return e === this.level;
      }) != -1
    ) {
      return 1;
    }
    return 0;
  }
  cap(skill, real = false) {
    if (!real && this.level < c2.SKILL_SOFT_CAP) {
      return Math.round(this.caps[skcnv[skill]] * c2.SOFT_MAX_SKILL);
    }
    return this.caps[skcnv[skill]];
  }
  bleed(i, j) {
    let a = ((i + 2) % 5) + 5 * j,
      b = ((i + (j === 1 ? 1 : 4)) % 5) + 5 * j;
    let value = 0;
    let denom = Math.max(c2.MAX_SKILL, this.caps[i + 5 * j]);
    value +=
      (1 - Math.pow(this.raw[a] / denom - 1, 2)) * this.raw[a] * c2.SKILL_LEAK;
    value -= Math.pow(this.raw[b] / denom, 2) * this.raw[b] * c2.SKILL_LEAK;
    return value;
  }
  upgrade(stat) {
    if (this.points && this.amount(stat) < this.cap(stat)) {
      this.change(stat, 1);
      this.points -= 1;
      return true;
    }
    return false;
  }
  title(stat) {
    return this.name[skcnv[stat]];
  }
  amount(skill) {
    return this.raw[skcnv[skill]];
  }
  change(skill, levels) {
    this.raw[skcnv[skill]] += levels;
    this.update();
  }
}
const lazyRealSizes = (() => {
  let o = [1, 1, 1];
  for (var i = 3; i < 16; i++) {
    o.push(Math.sqrt(((2 * Math.PI) / i) * (1 / Math.sin((2 * Math.PI) / i))));
  }
  return o;
})();
class Gun {
  constructor(body, info) {
    this.lastShot = {
      time: 0,
      power: 0,
    };
    this.body = body;
    this.master = body.source;
    this.label = "";
    this.controllers = [];
    this.children = [];
    this.control = {
      target: new Vector(0, 0),
      goal: new Vector(0, 0),
      main: false,
      alt: false,
      fire: false,
    };
    this.skin = 0;
    this.colorOverride = this.color;
    this.fill = 16;
    this.canShoot = false;
    if (info.PROPERTIES != null && info.PROPERTIES.TYPE != null) {
      this.canShoot = true;
      this.label = info.PROPERTIES.LABEL == null ? "" : info.PROPERTIES.LABEL;
      if (Array.isArray(info.PROPERTIES.TYPE)) {
        this.bulletTypes = info.PROPERTIES.TYPE;
        this.natural = info.PROPERTIES.TYPE.BODY;
      } else {
        this.bulletTypes = [info.PROPERTIES.TYPE];
      }
      let natural = {};
      this.bulletTypes.forEach(function setNatural(type) {
        if (type.PARENT != null) {
          for (let i = 0; i < type.PARENT.length; i++) {
            setNatural(type.PARENT[i]);
          }
        }
        if (type.BODY != null) {
          for (let index in type.BODY) {
            natural[index] = type.BODY[index];
          }
        }
      });
      this.natural = natural;
      if (info.PROPERTIES.GUN_CONTROLLERS != null) {
        let toAdd = [];
        let self = this;
        (function (ioName) {
          toAdd.push(new ioTypes[ioName](self));
        });
        this.controllers = toAdd.concat(this.controllers);
      }
      this.autofire =
        info.PROPERTIES.AUTOFIRE == null ? false : info.PROPERTIES.AUTOFIRE;
      this.altFire =
        info.PROPERTIES.ALT_FIRE == null ? false : info.PROPERTIES.ALT_FIRE;
      this.colorType =
        info.PROPERTIES.COLOR_TYPE == null ? false : info.COLOR_TYPE;
      this.settings =
        info.PROPERTIES.SHOOT_SETTINGS == null
          ? []
          : info.PROPERTIES.SHOOT_SETTINGS;
      this.calculator =
        info.PROPERTIES.STAT_CALCULATOR == null
          ? "default"
          : info.PROPERTIES.STAT_CALCULATOR;
      this.waitToCycle =
        info.PROPERTIES.WAIT_TO_CYCLE == null
          ? false
          : info.PROPERTIES.WAIT_TO_CYCLE;
      this.bulletStats =
        info.PROPERTIES.BULLET_STATS == null ||
        info.PROPERTIES.BULLET_STATS == "master"
          ? "master"
          : new Skill(info.PROPERTIES.BULLET_STATS);
      this.settings =
        info.PROPERTIES.SHOOT_SETTINGS == null
          ? []
          : info.PROPERTIES.SHOOT_SETTINGS;
      this.countsOwnKids =
        info.PROPERTIES.MAX_CHILDREN == null
          ? false
          : info.PROPERTIES.MAX_CHILDREN;
      this.inuln =
        info.PROPERTIES.INVULNERABLE == null
      this.syncsSkills =
        info.PROPERTIES.SYNCS_SKILLS == null
          ? false
          : info.PROPERTIES.SYNCS_SKILLS;
      this.negRecoil =
        info.PROPERTIES.NEGATIVE_RECOIL == null
          ? false
          : info.PROPERTIES.NEGATIVE_RECOIL;
      this.ignoreShootPerms =
        info.PROPERTIES.IGNORES_PERMS == null
          ? false
          : info.PROPERTIES.IGNORES_PERMS;
      this.shootOnDeath =
        info.PROPERTIES.SHOOT_ON_DEATH == null
          ? false
          : info.PROPERTIES.SHOOT_ON_DEATH;
    }
    if (info.PROPERTIES != null && info.PROPERTIES.SKIN != null)
      this.skin = info.PROPERTIES.SKIN;
    if (info.PROPERTIES != null && info.PROPERTIES.COLOR_OVERRIDE != null)
      this.colorOverride = info.PROPERTIES.COLOR_OVERRIDE;
    if (info.PROPERTIES != null && info.PROPERTIES.COLOR_TYPE != null)
      this.colorType = info.PROPERTIES.COLOR_TYPE;
    if (info.PROPERTIES != null && info.PROPERTIES.COlOR != null)
      this.color = info.PROPERTIES.COLOR;
    if (info.PROPERTIES != null && info.PROPERTIES.FILL != null)
      this.fill = info.PROPERTIES.FILL;
    let position = info.POSITION;
    this.length = position[0] / 10;
    this.width = position[1] / 10;
    this.aspect = position[2];
    let _off = new Vector(position[3], position[4]);
    this.angle = (position[5] * Math.PI) / 180;
    this.direction = _off.direction;
    this.offset = _off.length / 10;
    this.delay = position[6];
    this.position = 0;
    this.motion = 0;
    if (this.canShoot) {
      this.cycle = !this.waitToCycle - this.delay;
      this.trueRecoil = this.settings.recoil;
    }
  }
  recoil() {
    if (this.motion || this.position) {
      this.motion -= (0.25 * this.position) / roomSpeed;
      this.position += this.motion;
      if (this.position < 0) {
        this.position = 0;
        this.motion = -this.motion;
      }
      if (this.motion > 0) {
        this.motion *= 0.75;
      }
    }
    if (this.canShoot && this.body.settings.hasNoRecoil === false) {
      if (this.motion > 0) {
        let recoilForce =
          (-this.position * this.trueRecoil * 0.045) / roomSpeed;
        this.body.accel.x +=
          recoilForce * Math.cos(this.body.facing + this.angle);
        this.body.accel.y +=
          recoilForce * Math.sin(this.body.facing + this.angle);
      }
    } else if (this.body.settings.hasNoRecoil === true) {
      this.trueRecoil = 0
    }
  }
  getSkillRaw() {
    if (this.bulletStats === "master") {
      return [
        this.body.skill.raw[0],
        this.body.skill.raw[1],
        this.body.skill.raw[2],
        this.body.skill.raw[3],
        this.body.skill.raw[4],
        0,
        0,
        0,
        0,
        0,
      ];
    }
    return this.bulletStats.raw;
  }
  getLastShot() {
    return this.lastShot;
  }
  live() {
    this.recoil();
    if (this.canShoot) {
      let sk =
        this.bulletStats === "master" ? this.body.skill : this.bulletStats;
      let shootPermission = this.countsOwnKids
        ? this.countsOwnKids >
          this.children.length * (this.calculator == "necro" ? sk.rld : 1)
        : this.body.maxChildren
        ? this.body.maxChildren >
          this.body.children.length * (this.calculator == "necro" ? sk.rld : 1)
        : true;
      let ignoresPermission = this.ignoreShootPerms && shootPermission;
      if (this.body.master.invuln) {
        shootPermission = false;
      } else if (ignoresPermission === true) {
        shootPermission = true;
        this.body.master.invuln = false
      }
      if (shootPermission || !this.waitToCycle) {
        if (this.cycle < 1) {
          this.cycle +=
            1 /
            this.settings.reload /
            roomSpeed /
            (this.calculator == "necro" || this.calculator == "fixed reload"
              ? 1
              : sk.rld);
        }
      }
      if (
        shootPermission &&
        (this.autofire ||
          (this.altFire ? this.body.control.alt : this.body.control.fire))
      ) {
        if (this.cycle >= 1) {
          let gx =
            this.offset *
              Math.cos(this.direction + this.angle + this.body.facing) +
            (1.5 * this.length - (this.width * this.settings.size) / 2) *
              Math.cos(this.angle + this.body.facing);
          let gy =
            this.offset *
              Math.sin(this.direction + this.angle + this.body.facing) +
            (1.5 * this.length - (this.width * this.settings.size) / 2) *
              Math.sin(this.angle + this.body.facing);
          while (shootPermission && this.cycle >= 1) {
            this.fire(gx, gy, sk);
            shootPermission = this.countsOwnKids
              ? this.countsOwnKids > this.children.length
              : this.body.maxChildren
              ? this.body.maxChildren > this.body.children.length
              : true;
            this.cycle -= 1;
          }
       }
      } else if (this.cycle > !this.waitToCycle - this.delay) {
        this.cycle = !this.waitToCycle - this.delay;
      }
    }
  }
  syncChildren() {
    if (this.syncsSkills) {
      let self = this;
      this.children.forEach(function (o) {
        o.define({
          BODY: self.interpret(),
          SKILL: self.getSkillRaw(),
        });
        o.refreshBodyAttributes();
      });
    }
  }
  fire(gx, gy, sk) {
    this.lastShot.time = util.time();
    this.lastShot.power =
      3 * Math.log(Math.sqrt(sk.spd) + this.trueRecoil + 1) + 1;
    this.motion += this.lastShot.power;
    let ss, sd;
    do {
      ss = ran.gauss(0, Math.sqrt(this.settings.shudder));
    } while (Math.abs(ss) >= this.settings.shudder * 2);
    do {
      sd = ran.gauss(0, this.settings.spray * this.settings.shudder);
    } while (Math.abs(sd) >= this.settings.spray / 2);
    sd *= Math.PI / 180;
    let s = new Vector(
      (this.negRecoil ? -1 : 1) *
        this.settings.speed *
        c2.runSpeed *
        sk.spd *
        (1 + ss) *
        Math.cos(this.angle + this.body.facing + sd),
      (this.negRecoil ? -1 : 1) *
        this.settings.speed *
        c2.runSpeed *
        sk.spd *
        (1 + ss) *
        Math.sin(this.angle + this.body.facing + sd)
    );
    if (this.body.velocity.length && !this.onDeath) {
      let extraBoost =
        Math.max(0, s.x * this.body.velocity.x + s.y * this.body.velocity.y) /
        this.body.velocity.length /
        s.length;
      if (extraBoost) {
        let len = s.length;
        s.x += (this.body.velocity.length * extraBoost * s.x) / len;
        s.y += (this.body.velocity.length * extraBoost * s.y) / len;
      }
    }
    if (this.body.velocity.length && !this.shootOnDeath) {
      let extraBoost =
        Math.max(0, s.x * this.body.velocity.x + s.y * this.body.velocity.y) /
        this.body.velocity.length /
        s.length;
      if (extraBoost) {
        let len = s.length;
        s.x += (this.body.velocity.length * extraBoost * s.x) / len;
        s.y += (this.body.velocity.length * extraBoost * s.y) / len;
      }
    }
    var o = new Entity(
      {
        x: this.body.x + this.body.size * gx - s.x,
        y: this.body.y + this.body.size * gy - s.y,
      },
      this.master.master
    );
    o.velocity = s;
    this.bulletInit(o);
    o.coreSize = o.SIZE;
  }
  bulletInit(o) {
    this.bulletTypes.forEach((type) => o.define(type));
    o.define({
      BODY: this.interpret(),
      SKILL: this.getSkillRaw(),
      SIZE: (this.body.size * this.width * this.settings.size) / 2,
      LABEL:
        this.master.label +
        (this.label ? " " + this.label : "") +
        " " +
        o.label,
    });
    o.color = this.body.master.color;
    if (this.countsOwnKids) {
      o.parent = this;
      this.children.push(o);
    } else if (this.body.maxChildren) {
      o.parent = this.body;
      this.body.children.push(o);
      this.children.push(o);
    }
    o.source = this.body;
    o.facing = o.velocity.direction;
    let oo = o;
    o.necro = (host) => {
      let shootPermission = this.countsOwnKids
        ? this.countsOwnKids >
          this.children.length *
            (this.bulletStats === "master"
              ? this.body.skill.rld
              : this.bulletStats.rld)
        : this.body.maxChildren
        ? this.body.maxChildren >
          this.body.children.length *
            (this.bulletStats === "master"
              ? this.body.skill.rld
              : this.bulletStats.rld)
        : true;
      if (shootPermission) {
        let save = {
          facing: host.facing,
          size: host.SIZE,
        };
        host.define(Class.genericEntity);
        this.bulletInit(host);
        host.team = oo.master.master.team;
        host.master = oo.master;
        host.color = oo.color;
        host.facing = save.facing;
        host.SIZE = save.size;
        host.health.amount = host.health.max;
        return true;
      }
      return false;
    };
    o.refreshBodyAttributes();
    o.life();
  }
  getTracking() {
    return {
      speed:
        c2.runSpeed *
        (this.bulletStats == "master"
          ? this.body.skill.spd
          : this.bulletStats.spd) *
        this.settings.maxSpeed *
        this.natural.SPEED,
      range:
        Math.sqrt(
          this.bulletStats == "master"
            ? this.body.skill.spd
            : this.bulletStats.spd
        ) *
        this.settings.range *
        this.natural.RANGE,
    };
  }
  interpret() {
    let sizeFactor = this.master.size / this.master.SIZE;
    let shoot = this.settings;
    let sk = this.bulletStats == "master" ? this.body.skill : this.bulletStats;
    let out = {
      SPEED: shoot.maxSpeed * sk.spd,
      HEALTH: shoot.health * sk.str,
      RESIST: shoot.resist + sk.rst,
      DAMAGE: shoot.damage * sk.dam,
      PENETRATION: Math.max(1, shoot.pen * sk.pen),
      RANGE: shoot.range / Math.sqrt(sk.spd),
      DENSITY: (shoot.density * sk.pen * sk.pen) / sizeFactor,
      PUSHABILITY: 1 / sk.pen,
      HETERO: 3 - 2.8 * sk.ghost,
    };
    switch (this.calculator) {
      case "thruster":
        this.trueRecoil = this.settings.recoil * Math.sqrt(sk.rld * sk.spd);
        break;
      case "sustained":
        out.RANGE = shoot.range;
        break;
      case "swarm":
        out.PENETRATION = Math.max(1, shoot.pen * (0.5 * (sk.pen - 1) + 1));
        out.HEALTH /= shoot.pen * sk.pen;
        break;
      case "trap":
      case "block":
        out.PUSHABILITY = 1 / Math.pow(sk.pen, 0.5);
        out.RANGE = shoot.range;
        break;
      case "necro":
      case "drone":
        out.PUSHABILITY = 1;
        out.PENETRATION = Math.max(1, shoot.pen * (0.5 * (sk.pen - 1) + 1));
        out.HEALTH =
          (shoot.health * sk.str + sizeFactor) / Math.pow(sk.pen, 0.8);
        out.DAMAGE =
          shoot.damage * sk.dam * Math.sqrt(sizeFactor) * shoot.pen * sk.pen;
        out.RANGE = shoot.range * Math.sqrt(sizeFactor);
        break;
    }
    for (let property in out) {
      if (this.natural[property] == null || !out.hasOwnProperty(property))
        continue;
      out[property] *= this.natural[property];
    }
    return out;
  }
}
var minimap = [];
var views = [];
var entitiesToAvoid = [];
const dirtyCheck = (p, r) => {
  return entitiesToAvoid.some((e) => {
    return Math.abs(p.x - e.x) < r + e.size && Math.abs(p.y - e.y) < r + e.size;
  });
};
const grid = new hshg.HSHG();
var entitiesIdLog = 0;
var entities = [];
const purgeEntities = () => {
  entities = entities.filter((e) => {
    return !e.isGhost;
  });
};
var bringToLife = (() => {
  let remapTarget = (i, ref, self) => {
    if (i.target == null || (!i.main && !i.alt)) return undefined;
    return {
      x: i.target.x + ref.x - self.x,
      y: i.target.y + ref.y - self.y,
    };
  };
  let passer = (a, b, acceptsFromTop) => {
    return (index) => {
      if (
        a != null &&
        a[index] != null &&
        (b[index] == null || acceptsFromTop)
      ) {
        b[index] = a[index];
      }
    };
  };
  return (my) => {
    if (my.SIZE - my.coreSize) my.coreSize += (my.SIZE - my.coreSize) / 100;
    let faucet =
      my.settings.independent || my.source == null || my.source === my
        ? {}
        : my.source.control;
    let b = {
      target: remapTarget(faucet, my.source, my),
      goal: undefined,
      fire: faucet.fire,
      main: faucet.main,
      alt: faucet.alt,
      power: undefined,
    };
    if (my.settings.attentionCraver && !faucet.main && my.range) {
      my.range -= 1;
    }
    if (my.invisible[1]) {
      my.alpha = Math.max(0, my.alpha - my.invisible[1]);
      if (my.velocity.isShorterThan(0.1)) {
        my.invisus
        //my.sendMessage('You are now invisible')
      }
      if (!my.velocity.isShorterThan(0.1) || my.damageReceived)
        my.alpha = Math.min(1, my.alpha + my.invisible[0]);
        !my.invisus
    }
    my.controllers.forEach((AI) => {
      let a = AI.think(b);
      let passValue = passer(a, b, AI.acceptsFromTop);
      passValue("target");
      passValue("goal");
      passValue("fire");
      passValue("main");
      passValue("alt");
      passValue("power");
    });
    my.control.target = b.target == null ? my.control.target : b.target;
    my.control.goal = b.goal;
    my.control.fire = b.fire;
    my.control.main = b.main;
    my.control.alt = b.alt;
    my.control.power = b.power == null ? 1 : b.power;
    my.move();
    my.face();
    my.guns.forEach((gun) => gun.live());
    my.turrets.forEach((turret) => turret.life());
    if (my.skill.maintain()) my.refreshBodyAttributes();
  };
})();
class HealthType {
  constructor(health, type, resist = 0) {
    this.max = health;
    this.amount = health;
    this.type = type;
    this.resist = resist;
    this.regen = 0;
  }
  set(health, regen = 0) {
    this.amount = this.max ? (this.amount / this.max) * health : health;
    this.max = health;
    this.regen = regen;
  }
  display() {
    return this.amount / this.max;
  }
  getDamage(amount, capped = true) {
    switch (this.type) {
      case "dynamic":
        return capped
          ? Math.min(amount * this.permeability, this.amount)
          : amount * this.permeability;
      case "static":
        return capped ? Math.min(amount, this.amount) : amount;
    }
  }
  regenerate(boost = false) {
    boost /= 2;
    let cons = 5;
    switch (this.type) {
      case "static":
        if (this.amount >= this.max || !this.amount) break;
        this.amount += cons * (this.max / 10 / 60 / 2.5 + boost);
        break;
      case "dynamic":
        let r = util.clamp(this.amount / this.max, 0, 1);
        if (!r) {
          this.amount = 1e-4;
        }
        if (r === 1) {
          this.amount = this.max;
        } else {
          this.amount +=
            cons *
            ((this.regen *
              Math.exp(-50 * Math.pow(Math.sqrt(0.5 * r) - 0.4, 2))) /
              3 +
              (r * this.max) / 10 / 15 +
              boost);
        }
        break;
    }
    this.amount = util.clamp(this.amount, 0, this.max);
  }
  get permeability() {
    switch (this.type) {
      case "static":
        return 1;
      case "dynamic":
        return this.max ? util.clamp(this.amount / this.max, 0, 1) : 0;
    }
  }
  get ratio() {
    return this.max
      ? util.clamp(1 - Math.pow(this.amount / this.max - 1, 4), 0, 1)
      : 0;
  }
}
class Entity {
  constructor(position, master = this) {
    this.isGhost = false;
    this.killCount = {
      solo: 0,
      assists: 0,
      bosses: 0,
      killers: [],
    };
    this.creationTime = new Date().getTime();
    this.invulnFlash = true;
    this.invuln = true
    this.nameColor = "#ffffff";
    this.collisionToggle = false;
    this.master = master;
    this.maxAlpha = 1;
    this.rainbow = false;
    this.rainbowReverse = false;
    this.source = this;
    this.parent = this;
    (this.poisoned = false), (this.poison = false), (this.poisonedBy = -1);
    this.poisonLevel = 20;
    this.poisonToApply = 0;
    this.showpoison = false;
    this.poisonTimer = 0;
    this.poisonimmune = false;
    this.poisonSpeed = false;
    this.control = {
      target: new Vector(0, 0),
      goal: new Vector(0, 0),
      main: false,
      alt: false,
      fire: false,
      power: 0,
    };
    this.isInGrid = false;
    this.removeFromGrid = () => {
      if (this.isInGrid) {
        grid.removeObject(this);
        this.isInGrid = false;
      }
    };
    this.addToGrid = () => {
      if (!this.isInGrid && this.bond == null) {
        grid.addObject(this);
        this.isInGrid = true;
      }
    };
        this.activation = (() => {
            let active = true;
            let timer = ran.irandom(15);
            return {
                update: () => {
                    if (this.isDead()) {
                        return 0;
                    }
                    if (!active) {
                        this.removeFromGrid();
                        if (this.settings.diesAtRange) {
                            this.kill();
                        }
                        if (!(timer--)) {
                            active = true;
                        }
                    } else {
                        this.addToGrid();
                        timer = 15;
                        active = views.some(v => v.check(this, 0.6)) || this.alwaysActive;
                    }
                },
                check: () => {
                    return active;
                }
            };
        })();
    this.autoOverride = false;
    this.controllers = [];
    this.blend = {
      color: "#FFFFFF",
      amount: 0,
    };
    this.skill = new Skill();
    this.health = new HealthType(1, "static", 0);
    this.shield = new HealthType(0, "dynamic");
    this.guns = [];
    this.turrets = [];
    this.upgrades = [];
    this.settings = {};
    this.aiSettings = {};
    this.children = [];
    this.SIZE = 1;
    this.define(Class.genericEntity);
    this.maxSpeed = 0;
    this.facing = 0;
    this.vfacing = 0;
    this.range = 0;
    this.damageRecieved = 0;
    this.stepRemaining = 1;
    this.x = position.x;
    this.y = position.y;
    this.velocity = new Vector(0, 0);
    this.accel = new Vector(0, 0);
    this.damp = 0.05;
    this.collisionArray = [];
    this.invuln = false;
    this.alpha = 1;
    this.invisible = [0, 0];
    this.id = entitiesIdLog++;
    this.team = this.id;
    this.team = master.team;
    this.updateAABB = () => {};
    this.getAABB = (() => {
      let data = {},
        savedSize = 0;
      let getLongestEdge = (x1, y1, x2, y2) => {
        return Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));
      };
      this.updateAABB = (active) => {
        if (this.bond != null) return 0;
        if (!active) {
          data.active = false;
          return 0;
        }
        if (this.invuln && this.invulnFlash) {
          this.alpha = Date.now() % 150 < 75 ? 1 : 0.35;
        }
        if (this.multiboxMaster) {
          let body = this.multiboxMaster;
          this.SIZE = body.SIZE;
          this.skill = body.skill;
          this.topSpeed = body.topSpeed;
          this.color = body.color;
          this.invuln = body.invuln;
          this.collisionToggle = body.collisionToggle;
          this.collisonOverride = body.collisonOverride;
          this.intangibility = body.intangibility;
          this.facing = body.facing;
          this.control = body.control;
          this.team = body.team;
           if (this.index !== body.index) {
               for (let tank in Class) {
                  if (Class.hasOwnProperty(tank)) {
                      if (body.index === Class[tank].index) {
                          this.define(Class[tank]);
                          break;
                      }
                  }
               }
           }
        }
        if (
          this.x == null ||
          isNaN(this.x) ||
          this.y == null ||
          isNaN(this.y)
        ) {
          this.x = this.savePos.x;
          this.y = this.savePos.y;
        } else {
          this.savePos = {
            x: this.x,
            y: this.y,
          };
        }
        if (this.type === "tank" || "pet") this.refreshBodyAttributes();
        let x1 =
          Math.min(this.x, this.x + this.velocity.x + this.accel.x) -
          this.realSize -
          5;
        let y1 =
          Math.min(this.y, this.y + this.velocity.y + this.accel.y) -
          this.realSize -
          5;
        let x2 =
          Math.max(this.x, this.x + this.velocity.x + this.accel.x) +
          this.realSize +
          5;
        let y2 =
          Math.max(this.y, this.y + this.velocity.y + this.accel.y) +
          this.realSize +
          5;
        let size = getLongestEdge(x1, y1, x2, y1);
        let sizeDiff = savedSize / size;
        data = {
          min: [x1, y1],
          max: [x2, y2],
          active: true,
          size: size,
        };
        if (sizeDiff > Math.SQRT2 || sizeDiff < Math.SQRT1_2) {
          this.removeFromGrid();
          this.addToGrid();
          savedSize = data.size;
        }
      };
      return () => {
        return data;
      };
    })();
    this.updateAABB(true);
    entities.push(this);
    views.forEach((v) => v.add(this));
    this.activation.update();
  }
  life() {
    bringToLife(this);
  }
  addController(newIO) {
    if (Array.isArray(newIO)) {
      this.controllers = newIO.concat(this.controllers);
    } else {
      this.controllers.unshift(newIO);
    }
  }
  become(player, dom = false) {
      this.addController(dom ? new ioTypes.listenToPlayerStatic(this, player) : new ioTypes.listenToPlayer(this, player));
      this.sendMessage = (content, color) => player.socket.talk("m", content);
      this.kick = (reason) => player.socket.kick(reason);
  }
  giveUp(player, name = "Mothership") {
      if (player.body.isDominator) player.body.controllers = [new ioTypes.nearestDifferentMaster(player.body), new ioTypes.spinWhenIdle(player.body)];
      else if (player.body.isMothership) player.body.controllers = [new ioTypes.nearestDifferentMaster(player.body), new ioTypes.botMovement(player.body), new ioTypes.mapTargetToGoal(player.body)];
      player.body.name = player.body.label;
      player.body.underControl = false;
      player.body.sendMessage = content => {};
      let fakeBody = new Entity({
          x: player.body.x,
          y: player.body.y
      });
      fakeBody.collisionToggle = true;
      fakeBody.collisonOverride = true;
      fakeBody.intangibility = true;
      fakeBody.underControl = true;
      player.body = fakeBody;
      player.body.kill();
  }
  define(set) {
    if (set.PARENT != null) {
      for (let i = 0; i < set.PARENT.length; i++) {
        this.define(set.PARENT[i]);
      }
    }
    if (set.index != null) {
      this.index = set.index;
    }
    if (set.NAME != null) {
      this.name = set.NAME;
    }
    if (set.NAMECOLOR != null) {
      this.nameColor = set.NAMECOLOR;
    }
    if (set.INVISIBILITY_TOOLTIP != null) {
      this.invisibleTooltip = set.INVISIBILITY_TOOLTIP;
    }
    if (set.ZOOM_TOOLTIP != null) {
      this.zoomTooltip = set.ZOOM_TOOLTIP;
    }
    if (set.ALT_FIRE_TOOLTIP != null) {
      this.altfireTooltip = set.ALT_FIRE_TOOLTIP;
    }
    if (set.SPECIAL_ABILITY_TOOLTIP != null) {
      this.specialAbility = set.SPECIAL_ABILITY_TOOLTIP;
    }
    if (set.LABEL != null) {
      this.label = set.LABEL;
    }
    if (set.LABELSWITCH != null) {
      this.labelswitch = set.LABELSWITCH;
    }
    if (set.PASS_THROUGH_WALLS != null) {
      this.collisonOverride = set.PASS_THROUGH_WALLS;
    }
    if (set.TYPE != null) {
      this.type = set.TYPE;
    }
    if (set.SHAPE != null) {
      this.shape = typeof set.SHAPE === "number" ? set.SHAPE : 0;
      this.shapeData = set.SHAPE;
    }
    if (set.COLOR != null) {
      this.color = set.COLOR;
    }
    if (set.IGNORED != null) {
      this.ignored = set.IGNORED;
    }
    if (set.CONTROLLERS != null) {
      let toAdd = [];
      set.CONTROLLERS.forEach((ioName) => {
        toAdd.push(new ioTypes[ioName](this))
      });
      this.addController(toAdd);
    }
    if (set.MOTION_TYPE != null) {
      this.motionType = set.MOTION_TYPE;
    }
    if (set.COLOR_OVERRIDE != null) {
      this.colorOverride = set.COLOR_OVERRIDE;
    }
    if (set.FACING_TYPE != null) {
      this.facingType = set.FACING_TYPE;
    }
    if (set.DRAW_HEALTH != null) {
      this.settings.drawHealth = set.DRAW_HEALTH;
    }
    if (set.DRAW_SELF != null) {
      this.settings.drawShape = set.DRAW_SELF;
    }
    if (set.DAMAGE_EFFECTS != null) {
      this.settings.damageEffects = set.DAMAGE_EFFECTS;
    }
    if (set.RATIO_EFFECTS != null) {
      this.settings.ratioEffects = set.RATIO_EFFECTS;
    }
    if (set.MOTION_EFFECTS != null) {
      this.settings.motionEffects = set.MOTION_EFFECTS;
    }
    if (set.ACCEPTS_SCORE != null) {
      this.settings.acceptsScore = set.ACCEPTS_SCORE;
    }
    if (set.GIVE_KILL_MESSAGE != null) {
      this.settings.givesKillMessage = set.GIVE_KILL_MESSAGE;
    }
    if (set.POISON != null) {
      this.poison = set.POISON;
    }
    if (set.POISONIMMUNE != null) {
      this.poisonimmune = set.POISONIMMUNE;
    }
    if (set.POISONSPEED != null) {
      this.poisonSpeed = set.POISONSPEED;
    } else this.poisonSpeed = 0.995;
    if (set.POISONED != null) {
      this.poisoned = set.POISONED;
    }
    if (set.POISON_TO_APPLY != null) {
      this.poisonToApply = set.POISON_TO_APPLY;
    }
    if (set.SHOWPOISON != null) {
      this.showpoison = set.SHOWPOISON;
    }
    if (set.CAN_GO_OUTSIDE_ROOM != null) {
      this.settings.canGoOutsideRoom = set.CAN_GO_OUTSIDE_ROOM;
    }
    if (set.HITS_OWN_TYPE != null) {
      this.settings.hitsOwnType = set.HITS_OWN_TYPE;
    }
    if (set.DIE_AT_LOW_SPEED != null) {
      this.settings.diesAtLowSpeed = set.DIE_AT_LOW_SPEED;
    }
    if (set.DIE_AT_RANGE != null) {
      this.settings.diesAtRange = set.DIE_AT_RANGE;
    }
    if (set.INDEPENDENT != null) {
      this.settings.independent = set.INDEPENDENT;
    }
    if (set.PERSISTS_AFTER_DEATH != null) {
      this.settings.persistsAfterDeath = set.PERSISTS_AFTER_DEATH;
    }
    if (set.CLEAR_ON_MASTER_UPGRADE != null) {
      this.settings.clearOnMasterUpgrade = set.CLEAR_ON_MASTER_UPGRADE;
    }
    if (set.HEALTH_WITH_LEVEL != null) {
      this.settings.healthWithLevel = set.HEALTH_WITH_LEVEL;
    }
    if (set.ACCEPTS_SCORE != null) {
      this.settings.acceptsScore = set.ACCEPTS_SCORE;
    }
    if (set.OBSTACLE != null) {
      this.settings.obstacle = set.OBSTACLE;
    }
    if (set.NECRO != null) {
      this.settings.isNecromancer = set.NECRO;
    }
    if (set.AUTO_UPGRADE != null) {
      this.settings.upgrading = set.AUTO_UPGRADE;
    }
    if (set.HAS_NO_RECOIL != null) {
      this.settings.hasNoRecoil = set.HAS_NO_RECOIL;
    }
    if (set.CRAVES_ATTENTION != null) {
      this.settings.attentionCraver = set.CRAVES_ATTENTION;
    }
    if (set.BROADCAST_MESSAGE != null) {
      this.settings.broadcastMessage =
        set.BROADCAST_MESSAGE === "" ? undefined : set.BROADCAST_MESSAGE;
    }
    if (set.MESSAGE_TIP != null) {
      this.settings.messagetip =
        set.MESSAGE_TIP === "" ? undefined : set.MESSAGE_TIP;
    }
    if (set.DAMAGE_CLASS != null) {
      this.settings.damageClass = set.DAMAGE_CLASS;
    }
    if (set.BUFF_VS_FOOD != null) {
      this.settings.buffVsFood = set.BUFF_VS_FOOD;
    }
    if (set.CAN_BE_ON_LEADERBOARD != null) {
      this.settings.leaderboardable = set.CAN_BE_ON_LEADERBOARD;
    }
    if (set.INTANGIBLE != null) {
      this.intangibility = set.INTANGIBLE;
    }
    if (set.IS_SMASHER != null) {
      this.settings.reloadToAcceleration = set.IS_SMASHER;
    }
    if (set.STAT_NAMES != null) {
      this.settings.skillNames = set.STAT_NAMES;
    }
    if (set.AI != null) {
      this.aiSettings = set.AI;
    }
    if (set.ALPHA != null) {
      this.maxAlpha = set.ALPHA;
      this.invulnFlash = false;
      this.alpha = set.ALPHA;
    }
    if (set.INVISIBLE != null) {
      this.invisible = set.INVISIBLE;
    }
    if (set.DANGER != null) {
      this.dangerValue = set.DANGER;
    }
    if (set.VARIES_IN_SIZE != null) {
      this.settings.variesInSize = set.VARIES_IN_SIZE;
      this.squiggle = this.settings.variesInSize
        ? ran.randomRange(0.8, 1.2)
        : 1;
    }
    if (set.RESET_UPGRADES) {
      this.upgrades = [];
    }
    if (set.UPGRADES_TIER_1 != null) {
      set.UPGRADES_TIER_1.forEach((e) => {
        this.upgrades.push({
          class: e,
          tier: 1,
          level: c2.TIER_1,
          index: e.index,
        });
      });
    }
    if (set.UPGRADES_TIER_2 != null) {
      set.UPGRADES_TIER_2.forEach((e) => {
        this.upgrades.push({
          class: e,
          tier: 2,
          level: c2.TIER_2,
          index: e.index,
        });
      });
    }
    if (set.UPGRADES_TIER_3 != null) {
      set.UPGRADES_TIER_3.forEach((e) => {
        this.upgrades.push({
          class: e,
          tier: 3,
          level: c2.TIER_3,
          index: e.index,
        });
      });
    }
    if (set.UPGRADES_TIER_4 != null) {
      set.UPGRADES_TIER_4.forEach((e) => {
        this.upgrades.push({
          class: e,
          tier: 4,
          level: c2.TIER_4,
          index: e.index,
        });
      });
    }
    if (set.SIZE != null) {
      this.SIZE = set.SIZE * this.squiggle;
      if (this.coreSize == null) {
        this.coreSize = this.SIZE;
      }
    }
    if (set.SKILL != null && set.SKILL != []) {
      if (set.SKILL.length != 10) {
        throw "Inappropiate skill raws.";
      }
      this.skill.set(set.SKILL);
    }
    if (set.LEVEL != null) {
      if (set.LEVEL === -1) {
        this.skill.reset();
      }
      while (
        this.skill.level < c2.SKILL_CHEAT_CAP &&
        this.skill.level < set.LEVEL
      ) {
        this.skill.score += this.skill.levelScore;
        this.skill.maintain();
      }
      this.refreshBodyAttributes();
    }
    if (set.SKILL_CAP != null && set.SKILL_CAP != []) {
      if (set.SKILL_CAP.length != 10) {
        throw "Inappropiate skill caps.";
      }
      this.skill.setCaps(set.SKILL_CAP);
    }
    if (set.VALUE != null) {
      this.skill.score = Math.max(this.skill.score, set.VALUE * this.squiggle);
    }
    if (set.ALT_ABILITIES != null) {
      this.abilities = set.ALT_ABILITIES;
    }
    if (set.GUNS != null) {
      let newGuns = [];
      set.GUNS.forEach((gundef) => {
        newGuns.push(new Gun(this, gundef));
      });
      this.guns = newGuns;
    }
    if (set.MAX_CHILDREN != null) {
      this.maxChildren = set.MAX_CHILDREN;
    }
    if (set.INVULNERABLE != null) {
      this.invuln = set.INVULNERABLE;
    }
    if (set.FOOD != null) {
      if (set.FOOD.LEVEL != null) {
        this.foodLevel = set.FOOD.LEVEL;
        this.foodCountup = 0;
      }
    }
    if (set.BODY != null) {
      if (set.BODY.ACCELERATION != null) {
        this.ACCELERATION = set.BODY.ACCELERATION;
      }
      if (set.BODY.SPEED != null) {
        this.SPEED = set.BODY.SPEED;
      }
      if (set.BODY.HEALTH != null) {
        this.HEALTH = set.BODY.HEALTH;
      }
      if (set.BODY.RESIST != null) {
        this.RESIST = set.BODY.RESIST;
      }
      if (set.BODY.SHIELD != null) {
        this.SHIELD = set.BODY.SHIELD;
      }
      if (set.BODY.REGEN != null) {
        this.REGEN = set.BODY.REGEN;
      }
      if (set.BODY.DAMAGE != null) {
        this.DAMAGE = set.BODY.DAMAGE;
      }
      if (set.BODY.PENETRATION != null) {
        this.PENETRATION = set.BODY.PENETRATION;
      }
      if (set.BODY.FOV != null) {
        this.FOV = set.BODY.FOV;
      }
      if (set.BODY.RANGE != null) {
        this.RANGE = set.BODY.RANGE;
      }
      if (set.BODY.SHOCK_ABSORB != null) {
        this.SHOCK_ABSORB = set.BODY.SHOCK_ABSORB;
      }
      if (set.BODY.DENSITY != null) {
        this.DENSITY = set.BODY.DENSITY;
      }
      if (set.BODY.STEALTH != null) {
        this.STEALTH = set.BODY.STEALTH;
      }
      if (set.BODY.PUSHABILITY != null) {
        this.PUSHABILITY = set.BODY.PUSHABILITY;
      }
      if (set.BODY.HETERO != null) {
        this.heteroMultiplier = set.BODY.HETERO;
      }
      if (set.POISON != null) {
        this.poison = set.POISON;
      }
      if (set.POISONED != null) {
        this.poisoned = set.POISONED;
      }
      if (set.POISON_TO_APPLY != null) {
        this.poisonToApply = set.POISON_TO_APPLY;
      }
      if (set.SHOWPOISON != null) {
        this.showpoison = set.SHOWPOISON;
      }
      this.refreshBodyAttributes();
    }
    if (set.FRAG_SPAWNS) this.fragEntities = set.FRAG_SPAWNS;
    if (set.TURRET_MASTER) this.turretMaster = set.TURRET_MASTER;
    if (set.MINION_FRAG_SPAWNS) this.fragMinionEntities = set.MINION_FRAG_SPAWNS
    if (set.FRAG_BOSS_SPAWNS) this.fragEntitiesBoss = set.FRAG_BOSS_SPAWNS;
    if (set.TURRET_COLOR) this.turretMeme = set.TURRET_COLOR;
    if (set.TURRETS != null) {
      let o;
      this.turrets.forEach((o) => o.destroy());
      this.turrets = [];
      set.TURRETS.forEach((def) => {
        o = new Entity(this, this.master);
        (Array.isArray(def.TYPE) ? def.TYPE : [def.TYPE]).forEach((type) =>
          o.define(type)
        );
        o.type = 'turret'

        o.bindToMaster(def.POSITION, this);
        if (o.turretMeme === 'cluster') {
          if (o.team !== -100) {
            if (c.TEAMS) {
              o.color = [10, 11, 12, 15][o.team - 1];
            } else
            if (!c.TEAMS) {
              o.color = 12
            } else
            if (o.team === -100) {
            o.color = 13
            } else {
              o.color = 12
            }
          }
        }
        turretthingamabob = () => {
          if (this.turretMaster) {
              let body = this.turretMaster
              o.colorOverride = this.color
              o.bindToMaster(def.COLOR, this);
            }
        }
      });
    }
    if (set.mockup != null) {
      this.mockup = set.mockup;
    }
  }
  refreshBodyAttributes() {
    let speedReduce = Math.pow(this.size / (this.coreSize || this.SIZE), 1);
    this.acceleration = (c2.runSpeed * this.ACCELERATION) / speedReduce;
    if (this.settings.reloadToAcceleration) this.acceleration *= this.skill.acl;
    this.topSpeed = (c2.runSpeed * this.SPEED * this.skill.mob) / speedReduce;
    if (this.settings.reloadToAcceleration)
      this.topSpeed /= Math.sqrt(this.skill.acl);
    this.health.set(
      ((this.settings.healthWithLevel ? 2 * this.skill.level : 0) +
        this.HEALTH) *
        this.skill.hlt
    );
    this.health.resist = 1 - 1 / Math.max(1, this.RESIST + this.skill.brst);
    this.shield.set(
      ((this.settings.healthWithLevel ? 0.6 * this.skill.level : 0) +
        this.SHIELD) *
        this.skill.shi,
      Math.max(
        0,
        ((this.settings.healthWithLevel ? 0.006 * this.skill.level : 0) + 1) *
          this.REGEN *
          this.skill.rgn
      )
    );
    this.damage = this.DAMAGE * this.skill.atk;
    this.penetration =
      this.PENETRATION + 1.5 * (this.skill.brst + 0.8 * (this.skill.atk - 1));
    if (!this.settings.dieAtRange || !this.range) {
      this.range = this.RANGE;
    }
    this.fov =
      this.FOV * 250 * Math.sqrt(this.size) * (1 + 0.003 * this.skill.level);
    this.density = (1 + 0.08 * this.skill.level) * this.DENSITY;
    this.stealth = this.STEALTH;
    this.pushability = this.PUSHABILITY;
  }
  bindToMaster(position, bond) {
    this.bond = bond;
    this.source = bond;
    this.bond.turrets.push(this);
    this.skill = this.bond.skill;
    this.label = this.bond.label + " " + this.label;
    this.removeFromGrid();
    this.settings.drawShape = false;
    this.bound = {};
    this.bound.size = position[0] / 20;
    let _off = new Vector(position[1], position[2]);
    this.bound.angle = (position[3] * Math.PI) / 180;
    this.bound.direction = _off.direction;
    this.bound.offset = _off.length / 10;
    this.bound.arc = (position[4] * Math.PI) / 180;
    this.bound.layer = position[5];
    this.facing = this.bond.facing + this.bound.angle;
    this.facingType = "bound";
    this.motionType = "bound";
    this.move();
  }
  get size() {
    if (this.bond == null)
      return (this.coreSize || this.SIZE) * (1 + this.skill.level / 45);
    return this.bond.size * this.bound.size;
  }
  get mass() {
    return this.density * (this.size * this.size + 1);
  }
  get realSize() {
    return (
      this.size *
      (Math.abs(this.shape) > lazyRealSizes.length
        ? 1
        : lazyRealSizes[Math.abs(this.shape)])
    );
  }
  get m_x() {
    return (this.velocity.x + this.accel.x) / roomSpeed;
  }
  get m_y() {
    return (this.velocity.y + this.accel.y) / roomSpeed;
  }
  camera(tur = false) {
    return {
      type:
        0 + tur * 1 + this.settings.drawHealth * 2 + (this.type === "tank") * 4,
      id: this.id,
      index: this.index,
      x: this.x,
      y: this.y,
      vx: this.velocity.x,
      vy: this.velocity.y,
      size: this.size,
      rsize: this.realSize,
      status: 1,
      health: this.health.display(),
      shield: this.shield.display(),
      alpha: this.alpha,
      facing: this.facing,
      vfacing: this.vfacing,
      twiggle:
        this.facingType === "autospin" ||
        (this.facingType === "locksFacing" && this.control.alt),
      layer:
        this.bond != null
          ? this.bound.layer
          : this.type === "wall"
          ? 11
          : this.type === "food"
          ? 10
          : this.type === "tank"
          ? 5
          : this.type === "crasher"
          ? 1
          : 0,
      color: this.color,
      name: this.nameColor + this.name,
      score: this.skill.score,
      guns: this.guns.map((gun) => gun.getLastShot()),
      turrets: this.turrets.map((turret) => turret.camera(true)),
    };
  }
  skillUp(stat) {
    let suc = this.skill.upgrade(stat);
    if (suc) {
      this.refreshBodyAttributes();
      this.guns.forEach(function (gun) {
        gun.syncChildren();
      });
    }
    return suc;
  }
  upgrade(number) {
    if (
      number < this.upgrades.length &&
      this.skill.level >= this.upgrades[number].level
    ) {
      let saveMe = this.upgrades[number]["class"];
      this.upgrades = [];
      this.define(saveMe);
      this.sendMessage("You have upgraded to " + this.label + ".");
      if (this.invisibleTooltip != null) {
        this.sendMessage("Stay to turn invisible.");
      }
      if (this.zoomTooltip != null) {
        this.sendMessage(
          "Right click and use your mouse to use the zoom abiliy!"
        );
      }
      if (this.altfireTooltip != null) {
        this.sendMessage("Right click to fire your main barrel.");
      }
      if (this.specialAbility != null) {
        this.sendMessage("Press P to use you special ability");
      }
      let ID = this.id;
      entities.forEach((instance) => {
        if (
          instance.settings.clearOnMasterUpgrade &&
          instance.master.id === ID
        ) {
          instance.kill();
        }
      });
      this.skill.update();
      this.refreshBodyAttributes();
    }
  }
  damageMultiplier() {
    switch (this.type) {
      case "swarm":
        return 0.25 + 1.5 * util.clamp(this.range / (this.RANGE + 1), 0, 1);
      default:
        return 1;
    }
  }
  move() {
    let g = {
        x: this.control.goal.x - this.x,
        y: this.control.goal.y - this.y,
      },
      gactive = g.x !== 0 || g.y !== 0,
      engine = {
        x: 0,
        y: 0,
      },
      a = this.acceleration / roomSpeed;
    if (this.colorType) {
    }
    if (this.colorOverride) {
      this.color = this.colorOverride
    } else {
      this.color = this.color
    }
    switch (this.motionType) {
      case "glide":
        this.maxSpeed = this.topSpeed;
        this.damp = 0.05;
        break;
      case "growboom":
        this.SIZE += 5.25;
        this.maxSpeed = this.topSpeed;
        break
      case "growslow":
        this.SIZE += 2.5;
        this.maxSpeed = this.topSpeed;
        break;
      case "growaccel":
        this.SIZE += 5;
        this.maxSpeed = this.topSpeed;
        this.damp = -0.05;
        break;
      case "healbullet":
        this.team = -100;
        break;
      case "glive":
        this.maxSpeed = this.topSpeed;
        if (this.topSpeed) {
          this.damp = a / this.topSpeed;
        }
        if (gactive) {
          let len = Math.sqrt(g.x * g.x + g.y * g.y);
          engine = {
            x: (a * g.x) / len,
            y: (a * g.y) / len,
          };
        }
        break;
      case "summoned":
        if (gactive) {
          let l = util.getDistance(
            {
              x: 0,
              y: 0,
            },
            g
          );
          if (l > this.size * 2) {
            this.maxSpeed = this.topSpeed;
            let desiredxspeed = (this.topSpeed * g.x) / l,
              desiredyspeed = (this.topSpeed * g.y) / l;
            engine = {
              x: (desiredxspeed - this.velocity.x) * a,
              y: (desiredyspeed - this.velocity.y) * a,
            };
          } else {
            this.maxSpeed = 0;
          }
        } else {
          this.maxSpeed = 0;
        }
        this.color = 13;
        break;
      case "motor":
        this.maxSpeed = 0;
        if (this.topSpeed) {
          this.damp = a / this.topSpeed;
        }
        if (gactive) {
          let len = Math.sqrt(g.x * g.x + g.y * g.y);
          engine = {
            x: (a * g.x) / len,
            y: (a * g.y) / len,
          };
        }
        break;
      case "swrow":
        this.SIZE += 2.5;
      case "swarm":
        this.maxSpeed = this.topSpeed;
        let l =
          util.getDistance(
            {
              x: 0,
              y: 0,
            },
            g
          ) + 1;
        if (gactive && l > this.size) {
        let desiredxspeed = (this.topSpeed * g.x) / l,
            desiredyspeed = (this.topSpeed * g.y) / l,
            turning = Math.sqrt(
              (this.topSpeed * Math.max(1, this.range) + 1) / a
            );
          engine = {
            x: (desiredxspeed - this.velocity.x) / Math.max(5, turning),
            y: (desiredyspeed - this.velocity.y) / Math.max(5, turning),
          };
        } else {
          if (this.velocity.length < this.topSpeed) {
            engine = {
              x: (this.velocity.x * a) / 20,
              y: (this.velocity.y * a) / 20,
            };
          }
        }
        break;
      case "cluster":
        this.color = this.master.color
      case "chase":
        if (gactive) {
          let l = util.getDistance(
            {
              x: 0,
              y: 0,
            },
            g
          );
          if (l > this.size * 2) {
            this.maxSpeed = this.topSpeed;
            let desiredxspeed = (this.topSpeed * g.x) / l,
              desiredyspeed = (this.topSpeed * g.y) / l;
            engine = {
              x: (desiredxspeed - this.velocity.x) * a,
              y: (desiredyspeed - this.velocity.y) * a,
            };
          } else {
            this.maxSpeed = 0;
          }
        } else {
          this.maxSpeed = 0;
        }
        break;
      case "drift":
        this.maxSpeed = 0;
        engine = {
          x: g.x * a,
          y: g.y * a,
        };
        break;
      case "bound":
        let bound = this.bound,
          ref = this.bond;
        this.x =
          ref.x +
          ref.size *
            bound.offset *
            Math.cos(bound.direction + bound.angle + ref.facing);
        this.y =
          ref.y +
          ref.size *
            bound.offset *
            Math.sin(bound.direction + bound.angle + ref.facing);
        this.bond.velocity.x += bound.size * this.accel.x;
        this.bond.velocity.y += bound.size * this.accel.y;
        this.firingArc = [ref.facing + bound.angle, bound.arc / 2];
        nullVector(this.accel);
        this.blend = ref.blend;
        break;
    }
    this.accel.x += engine.x * this.control.power;
    this.accel.y += engine.y * this.control.power;
  }
  face() {
    let t = this.control.target
    let tp = this.master.control.target.
      tactive = t.x !== 0 || t.y !== 0,
      oldFacing = this.facing;
    switch (this.facingType) {
      case "autospin":
        this.facing += 0.02 / roomSpeed;
        break;
      case "turnWithSpeed":
        this.facing += ((this.velocity.length / 90) * Math.PI) / roomSpeed;
        break;
      case "withMotion":
        this.facing = this.velocity.direction;
        break;
      case "smoothWithMotion":
      case "looseWithMotion":
        this.facing += util.loopSmooth(
          this.facing,
          this.velocity.direction,
          4 / roomSpeed
        );
        break;
      case "withTarget":
      case "toTarget":
        this.facing = Math.atan2(t.y, t.x);
        break;
      case "locksFacing":
        if (!this.control.alt) this.facing = Math.atan2(t.y, t.x);
        break;
      case "looseWithTarget":
      case "looseToTarget":
      case "smoothToTarget":
        this.facing += util.loopSmooth(
          this.facing,
          Math.atan2(t.y, t.x),
          4 / roomSpeed
        );
        break;
      case "bound":
        let givenangle;
        if (this.control.main) {
          givenangle = Math.atan2(t.y, t.x);
          let diff = util.angleDifference(givenangle, this.firingArc[0]);
          if (Math.abs(diff) >= this.firingArc[1]) {
            givenangle = this.firingArc[0];
          }
        } else {
          givenangle = this.firingArc[0];
        }
        this.facing += util.loopSmooth(this.facing, givenangle, 4 / roomSpeed);
        break;
    }
    const TAU = 2 * Math.PI;
    this.facing = ((this.facing % TAU) + TAU) % TAU;
    this.vfacing = util.angleDifference(oldFacing, this.facing) * roomSpeed;
  }
  takeSelfie() {
    this.flattenedPhoto = null;
    this.photo = this.settings.drawShape
      ? this.camera()
      : (this.photo = undefined);
  }
  physics() {
    if (this.accel.x == null || this.velocity.x == null) {
      util.error("Void Error!");
      util.error(this.collisionArray);
      util.error(this.label);
      util.error(this);
      nullVector(this.accel);
      nullVector(this.velocity);
    }
    this.velocity.x += this.accel.x;
    this.velocity.y += this.accel.y;
    nullVector(this.accel);
    this.stepRemaining = 1;
    this.x += (this.stepRemaining * this.velocity.x) / roomSpeed;
    this.y += (this.stepRemaining * this.velocity.y) / roomSpeed;
  }
  friction() {
    var motion = this.velocity.length,
      excess = motion - this.maxSpeed;
    if (excess > 0 && this.damp) {
      var k = this.damp / roomSpeed,
        drag = excess / (k + 1),
        finalvelocity = this.maxSpeed + drag;
      this.velocity.x = (finalvelocity * this.velocity.x) / motion;
      this.velocity.y = (finalvelocity * this.velocity.y) / motion;
    }
  }
  confinementToTheseEarthlyShackles() {
    if (this.x == null || this.x == null) {
      util.error("Void Error!");
      util.error(this.collisionArray);
      util.error(this.label);
      util.error(this);
      nullVector(this.accel);
      nullVector(this.velocity);
      return 0;
    }
    if (room.port.length) {
      let loc = {
        x: this.x,
        y: this.y,
      };
      if (
        room.isIn("port", loc) &&
        !this.passive &&
        !this.settings.goThruObstacle &&
        this.facingType !== "bound"
      ) {
        let myRoom = room.isAt(loc);
        let otherPortals = room.port
          .map((e) => e)
          .filter((r) => r.x !== myRoom.x && r.y !== myRoom.y);
        let dx = loc.x - myRoom.x;
        let dy = loc.y - myRoom.y;
        let dist2 = dx * dx + dy * dy;
        let force = c2.ROOM_BOUND_FORCE;
        let portals = {
          launchForce: 1250,
          gravity: 13500,
          threshold: 200,
        };
        if (this.type === "miniboss" || this.isMothership) {
          this.accel.x += (((3e4 * dx) / dist2) * force) / roomSpeed;
          this.accel.y += (((3e4 * dy) / dist2) * force) / roomSpeed;
        } else if (this.type === "tank") {
          if (dist2 <= portals.threshold) {
            let angle = Math.random() * Math.PI * 2;
            let ax = Math.cos(angle);
            let ay = Math.sin(angle);
            this.velocity.x = (portals.launchForce * ax * force) / roomSpeed;
            this.velocity.y = (portals.launchForce * ay * force) / roomSpeed;
            let portTo = otherPortals.length
              ? ran.choose(otherPortals)
              : room.random();
            let rx = ax * (room.width / room.xgrid) + this.size * 2;
            let ry = ay * (room.width / room.ygrid) + this.size * 2;
            this.x = portTo.x + rx;
            this.y = portTo.y + ry;
            this.invuln = true;
            for (let o of entities)
              if (
                o.id !== this.id &&
                o.master.id === this.id &&
                (o.type === "drone" || o.type === "minion")
              ) {
                o.x = this.x + ay * 30 * (Math.random() - 0.5);
                o.y = portTo.y + ay * 30 * (Math.random() - 0.5);
              }
          } else {
            this.velocity.x -=
              (((portals.gravity * dx) / dist2) * force) / roomSpeed;
            this.velocity.y -=
              (((portals.gravity * dy) / dist2) * force) / roomSpeed;
          }
        } else this.kill();
      }
    }
  }
  confinementToTheseEarthlyShackles() {
    if (this.x == null || this.x == null) {
      util.error("Void Error!");
      util.error(this.collisionArray);
      util.error(this.label);
      util.error(this);
      nullVector(this.accel);
      nullVector(this.velocity);
      return 0;
    }
    if (!this.settings.canGoOutsideRoom) {
      this.accel.x -=
        (Math.min(this.x - this.realSize + 50, 0) * c2.ROOM_BOUND_FORCE) /
        roomSpeed;
      this.accel.x -=
        (Math.max(this.x + this.realSize - room.width - 50, 0) *
          c2.ROOM_BOUND_FORCE) /
        roomSpeed;
      this.accel.y -=
        (Math.min(this.y - this.realSize + 50, 0) * c2.ROOM_BOUND_FORCE) /
        roomSpeed;
      this.accel.y -=
        (Math.max(this.y + this.realSize - room.height - 50, 0) *
          c2.ROOM_BOUND_FORCE) /
        roomSpeed;
    }
    if (room.MODE === "tdm" && this.type !== "food") {
      let loc = { x: this.x, y: this.y };
      if (
        (this.team !== -1 || -101 && room.isIn("bas1", loc)) ||
        (this.team !== -1 || -101 && room.isIn("bap1", loc)) ||
        (this.team !== -2 || -101 && room.isIn("bas2", loc)) ||
        (this.team !== -2 || -101 && room.isIn("bap2", loc)) ||
        (this.team !== -3 || -101 && room.isIn("bas3", loc)) ||
        (this.team !== -3 || -101 && room.isIn("bap3", loc)) ||
        (this.team !== -4 || -101 && room.isIn("bas4", loc)) ||
        (this.team !== -4 || -101 && room.isIn("bap4", loc))
      ) {
        this.kill();
      }
    }
    if (c.NAME === "Siege" && this.type !== "food") {
      let loc = { x: this.x, y: this.y };
      if (
        (this.team !== -100 || -101 && room.isIn("boss", loc))
      ) {
        this.kill();
      }
    }
  }

  contemplationOfMortality() {
    if (this.invuln) {
      this.damageRecieved = 0;
      return 0;
    }
    if (this.settings.diesAtRange) {
      this.range -= 1 / roomSpeed;
      if (this.range < 0) {
        this.kill();
      }
    }
    if (this.settings.diesAtLowSpeed) {
      if (
        !this.collisionArray.length &&
        this.velocity.length < this.topSpeed / 2
      ) {
        this.health.amount -= this.health.getDamage(1 / roomSpeed);
      }
    }
    if (this.shield.max) {
      if (this.damageRecieved !== 0) {
        let shieldDamage = this.shield.getDamage(this.damageRecieved);
        this.damageRecieved -= shieldDamage;
        this.shield.amount -= shieldDamage;
      }
    }
    if (this.damageRecieved !== 0) {
      let healthDamage = this.health.getDamage(this.damageRecieved);
      this.blend.amount = 1;
      this.health.amount -= healthDamage;
    }
    this.damageRecieved = 0;
    if (this.isDead()) {
      if (this.ondead) this.ondead();
      this.guns.forEach((gun) => {
        if (gun.shootOnDeath) {
          let sk =
            gun.bulletStats === "master" ? gun.body.skill : gun.bulletStats;
          if (gun.body != null) {
            let gx =
              gun.offset *
                Math.cos(gun.direction + gun.angle + gun.body.facing) +
              (1.5 * gun.length - (gun.width * gun.settings.size) / 2) *
                Math.cos(gun.angle + gun.body.facing);
            let gy =
              gun.offset *
                Math.sin(gun.direction + gun.angle + gun.body.facing) +
              (1.5 * gun.length - (gun.width * gun.settings.size) / 2) *
                Math.sin(gun.angle + gun.body.facing);
            gun.fire(gx, gy, sk);
          }
        }
      });
            if (this.fragEntities) {
                for (let i = 0; i < this.fragEntities.length; i ++) {
                    let o = new Entity({
                        x: this.x + this.size * Math.cos(i / this.fragEntities.length),
                        y: this.y + this.size * Math.sin(i / this.fragEntities.length)
                    });
                    o.team = this.team;
                    o.color = this.color;
                    o.define(Class[this.fragEntities[i]]);
          }
      }
            if (this.fragMinionEntities) {
                for (let i = 0; i < this.fragMinionEntities.length; i ++) {
                    let o = new Entity({
                        x: this.x + this.size * Math.cos(i / this.fragMinionEntities.length),
                        y: this.y + this.size * Math.sin(i / this.fragMinionEntities.length)
                    });
                    o.team = this.team;
                    o.color = this.color;
                    o.define(Class[this.fragMinionEntities[i]]);
                    for (let e of entities) {
                      if (e.team === o.team && e.team !== this.team) {
                        o.master = e
                      }
                    }
                }
      }
            if (this.fragEntitiesBoss) {
                for (let i = 0; i < this.fragEntitiesBoss.length; i ++) {
                    setTimeout(() => {
                    let o = new Entity({
                        x: this.x + this.size * Math.cos(i / this.fragEntitiesBoss.length),
                        y: this.y + this.size * Math.sin(i / this.fragEntitiesBoss.length)
                    });
                    o.team = this.team;
                    o.color = this.color;
                    o.define(Class[this.fragEntitiesBoss[i]]);
                  if (o.label === "Tatapo Core") {
                      sockets.broadcast("Shards of The Tatapo arrive to avenge its fallen brethren!")
                    }
                    if (o.type === 'miniboss') {
                    o.name = ran.chooseBossName("all", 1)[0];
                }
              }, 5e3)
          }
      }
      let killers = [],
        killTools = [],
        AC = false,
        food = false,
        crasher = false,
        notJustFood = false;
      let name =
        this.master.name == ""
          ? this.master.type === "tank"
            ? "a nameless player's " + this.label
            : this.master.type === "miniboss"
            ? "a visiting " + this.label
            : util.addArticle(this.label)
          : this.master.name + "'s " + this.label;
      let jackpot = Math.ceil(
        util.getJackpot(this.skill.score) / this.collisionArray.length
      );
      this.collisionArray.forEach((instance) => {
        if (instance.type === "wall") return 0;
        if (instance.master.settings.acceptsScore) {
          if (
            instance.master.type === "tank" ||
            instance.master.type === "miniboss"
          ) {
            notJustFood = true;
          instance.master.skill.score += jackpot;
          killers.push(instance.master);
          }
        } else if (instance.settings.acceptsScore) {
          instance.skill.score += jackpot;
        } else if (
            instance.master.type === "AC"
          ) {
          AC = true;
          killers.push(instance.master);
          } else if (
            instance.master.type === "crasher"
          ) {
          crasher = true;
          instance.master.skill.score += jackpot;
          killers.push(instance.master);
          } else if (
            instance.master.type === "food"
          ) {
          food = true;
          instance.master.skill.score += jackpot;
          killers.push(instance.master);
          }
        killTools.push(instance);
      });
      killers = killers.filter((elem, index, self) => {
        return index == self.indexOf(elem);
      });
      let killText = notJustFood ? "" : "You have been killed by ",
        dothISendAText = this.settings.givesKillMessage;
      killers.forEach((instance) => {
        this.killCount.killers.push(instance.index);
        if (this.type === "tank") {
          if (killers.length > 1) instance.killCount.assists++;
          else instance.killCount.solo++;
        } else if (this.type === "miniboss") instance.killCount.bosses++;
      });
      if (notJustFood) {
        killers.forEach((instance) => {
          if (
            instance.master.type !== "food" &&
            instance.master.type !== "crasher"
          ) {
            killText +=
              instance.name == ""
                ? killText == ""
                  ? "An unnamed player"
                  : "an unnamed player"
                : instance.name;
            killText += " and ";
          }
          if (dothISendAText) {
            instance.sendMessage(
              "You killed " +
                name +
                (killers.length > 1 ? " (with some help)." : ".")
            );
          }
        });
        killText = killText.slice(0, -4);
        killText += "killed you with ";
      }
      killTools.forEach((instance) => {
        killText += util.addArticle(instance.label) + " and ";
      });
      if (this.settings.broadcastMessage)
        sockets.broadcast(this.settings.broadcastMessage);
      if (this.settings.messagetip) this.sendMessage(this.settings.messagetip);
      if (killText === "You have been killed")
        killText = "You have died a stupid death";
      this.sendMessage(killText + ".");
      if (this.id === room.topPlayerID) {
        let usurptText = this.name === "" ? "The leader" : this.name;
        if (notJustFood) {
          usurptText += " has been usurped by";
          killers.forEach((instance) => {
            usurptText += " ";
            usurptText +=
              instance.name === "" ? "an unnamed player" : instance.name;
            usurptText += " and";
          });
          usurptText = usurptText.slice(0, -4);
          usurptText += "!";
        } else if (AC) {
              usurptText += " fell in the hands of an";
          killers.forEach((instance) => {
              if (instance.type === "AC") {
                usurptText += " ";
                usurptText +=
                  instance.name === "" ? "Arena Closer" : instance.name;
                usurptText += " and";
              }
          });
          usurptText = usurptText.slice(0, -4);
          usurptText += "!";
        } else if (crasher) {
          usurptText += " was overtaken by a";
          killers.forEach((instance) => {
                usurptText += " ";
                usurptText +=
                instance.label === "" ? "Mysterious Polygon" : instance.label;
                usurptText += " and";
          });
          usurptText = usurptText.slice(0, -4);
          usurptText += "!";
        } else if (food) {
          usurptText += " collapsed and died to a";
          killers.forEach((instance) => {
                usurptText += " ";
                usurptText +=
                instance.label === "" ? "Mysterious Polygon" : instance.label;
                usurptText += " and";
          });
          usurptText = usurptText.slice(0, -4);
          usurptText += "!";
        } else {
          usurptText += " was overtaken by an Unknown Entity";
        }
        sockets.broadcast(usurptText);
      }
      return 1;
    }
    return 0;
  }
  protect() {
    entitiesToAvoid.push(this);
    this.isProtected = true;
  }
  sendMessage(message) {}
  kill() {
    this.health.amount = -1;
  }
  eatsHealthLoL() { //Special Case
    this.health.amount = 0.125;
  }
  destroy() {
    if (this.isProtected)
      util.remove(entitiesToAvoid, entitiesToAvoid.indexOf(this));
    let i = minimap.findIndex((entry) => {
      return entry[0] === this.id;
    });
    if (i != -1) util.remove(minimap, i);
    views.forEach((v) => v.remove(this));
    if (this.parent != null)
      util.remove(this.parent.children, this.parent.children.indexOf(this));
    let ID = this.id;
    entities.forEach((instance) => {
      if (instance.source.id === this.id) {
        if (instance.settings.persistsAfterDeath) {
          instance.source = instance;
        } else {
          instance.kill();
        }
      }
      if (instance.parent && instance.parent.id === this.id) {
        instance.parent = null;
      }
      if (instance.master.id === this.id) {
        instance.kill();
        instance.master = instance;
      }
    });
    this.turrets.forEach((t) => t.destroy());
    this.removeFromGrid();
    this.isGhost = true;
  }
  isDead() {
    return this.health.amount <= 0;
  }
  underControl() {
    return false
  }
  giveUp() {
    return false
  }
}

function closeArena() {
  ArenaClosed();
}
var loops = 0;

function ArenaClosed() {
  loops++;
  if (loops < 31) {
    setTimeout(ArenaClosed, 1e3/2);
  } else {
    sockets.broadcast("Closing!");
    isClosed = true
    global.restart;
    setTimeout(process.exit(), 1e3)
  }
}
let spawnarenacloser = (loc, mode, type) => {
  let o = new Entity(loc);
  o.define(type);
  o.team = mode || -101;
  o.SIZE = 80;
  (o.color = [3][-mode]);
};
let spawnboss = (loc, mode, type) => {
  let o = new Entity(loc);
  o.define(type);
  o.team = mode || -100;
};

function modeclose() {
  closemode();
}
var loops = 0;

function bossmania() {
  sockets.broadcast("red_BOSS mAnIa Has been enabled!");
  if (room.gameMode === "tdm" || "ffa")
    room["arcl"].forEach((loc) => {
      spawnboss(
        loc,
        -0,
        ran.choose([
          Class.elite_spawner,
          Class.elite_destroyer,
          Class.palisade,
          Class.elite_gunner,
          Class.elite_single,
          Class.helios,
          Class.boss1,
        ])
      );
    });
  if (room.gameMode === "tdm" || "ffa")
    room["arc2"].forEach((loc) => {
      spawnboss(
        loc,
        -0,
        ran.choose([
          Class.kronos,
          Class.freyja,
          Class.abomination,
          Class.exquisiter,
          Class.guardian,
          Class.arkemines,
          Class.summoner,
          Class.boss2,
        ])
      );
    });
}
let no = Math.max(c.WIDTH, c.HEIGHT);
let nono = Math.PI * 2 * Math.random();
let nonono = {
  x: Math.cos(nono) * no,
  y: Math.sin(nono) * no
};
function closemode() {
  loops++;
  if (loops < 10) {
    setTimeout(closemode, 1e3);
    joinableServer = 0;
  } else {
    sockets.broadcast("red_Arena closed : No players may join!");
    ArenaClosed();
    for (let e of entities) {
      if ((e.invuln === true)) {
        (e.invuln === false)
      }
    }
    if (room.gameMode === "tdm" || "ffa")
      room["arcl"].forEach((loc) => {
        spawnarenacloser(loc, -0, ran.choose([
          Class.flankCloser,
          Class.arenaCloser,
          Class.fighterCloser,
          Class.smashCloser,
          Class.builderCloser,
          Class.overCloser,
          Class.shotgunCloser,
          Class.microCloser
        ]));
        spawnarenacloser(loc, -0, ran.choose([
          Class.flankCloser,
          Class.arenaCloser,
          Class.fighterCloser,
          Class.smashCloser,
          Class.builderCloser,
          Class.overCloser,
          Class.shotgunCloser,
          Class.microCloser
        ]));
      });
    if (room.gameMode === "tdm" || "ffa")
      room["arc2"].forEach((loc) => {
        spawnarenacloser(loc, -0, ran.choose([
          Class.flankCloser,
          Class.arenaCloser,
          Class.fighterCloser,
          Class.smashCloser,
          Class.builderCloser,
          Class.overCloser,
          Class.shotgunCloser,
          Class.microCloser
        ]));
        spawnarenacloser(loc, -0, ran.choose([
          Class.flankCloser,
          Class.arenaCloser,
          Class.fighterCloser,
          Class.smashCloser,
          Class.builderCloser,
          Class.overCloser,
          Class.shotgunCloser,
          Class.microCloser
        ]));
      });
  }
}

var logs = (() => {
  let logger = (() => {
    function set(obj) {
      obj.time = util.time();
    }

    function mark(obj) {
      obj.data.push(util.time() - obj.time);
    }

    function record(obj) {
      let o = util.averageArray(obj.data);
      obj.data = [];
      return o;
    }

    function sum(obj) {
      let o = util.sumArray(obj.data);
      obj.data = [];
      return o;
    }

    function tally(obj) {
      obj.count++;
    }

    function count(obj) {
      let o = obj.count;
      obj.count = 0;
      return o;
    }
    return () => {
      let internal = {
        data: [],
        time: util.time(),
        count: 0,
      };
      return {
        set: () => set(internal),
        mark: () => mark(internal),
        record: () => record(internal),
        sum: () => sum(internal),
        count: () => count(internal),
        tally: () => tally(internal),
      };
    };
  })();
  return {
    entities: logger(),
    collide: logger(),
    network: logger(),
    minimap: logger(),
    misc2: logger(),
    misc3: logger(),
    physics: logger(),
    life: logger(),
    selfie: logger(),
    master: logger(),
    activation: logger(),
    loops: logger(),
  };
})();
var http = require("http"),
  url = require("url"),
  fs = require("fs"),
  mockupJsonData = (() => {
    function rounder(val) {
      if (Math.abs(val) < 1e-5) val = 0;
      return +val.toPrecision(6);
    }

    function getMockup(e, positionInfo) {
      return {
        index: e.index,
        name: e.label,
        x: rounder(e.x),
        y: rounder(e.y),
        color: e.color,
        shape: e.shapeData,
        size: rounder(e.size),
        realSize: rounder(e.realSize),
        facing: rounder(e.facing),
        layer: e.layer,
        statnames: e.settings.skillNames,
        position: positionInfo,
        upgrades: e.upgrades.map((r) => ({
          tier: r.tier,
          index: r.index,
        })),
        guns: e.guns.map(function (gun) {
          return {
            offset: rounder(gun.offset),
            direction: rounder(gun.direction),
            length: rounder(gun.length),
            width: rounder(gun.width),
            aspect: rounder(gun.aspect),
            angle: rounder(gun.angle),
            skin: rounder(gun.skin),
            fill: rounder(gun.fill),
          };
        }),
        turrets: e.turrets.map(function (t) {
          let out = getMockup(t, {});
          out.sizeFactor = rounder(t.bound.size);
          out.offset = rounder(t.bound.offset);
          out.direction = rounder(t.bound.direction);
          out.layer = rounder(t.bound.layer);
          out.angle = rounder(t.bound.angle);
          return out;
        }),
      };
    }

    function getDimensions(entities) {
      let endpoints = [];
      let pointDisplay = [];
      let pushEndpoints = function (
        model,
        scale,
        focus = {
          x: 0,
          y: 0,
        },
        rot = 0
      ) {
        let s = Math.abs(model.shape);
        let z =
          Math.abs(s) > lazyRealSizes.length ? 1 : lazyRealSizes[Math.abs(s)];
        if (z === 1) {
          for (let i = 0; i < 2; i += 0.5) {
            endpoints.push({
              x: focus.x + scale * Math.cos(i * Math.PI),
              y: focus.y + scale * Math.sin(i * Math.PI),
            });
          }
        } else {
          for (let i = s % 2 ? 0 : Math.PI / s; i < s; i++) {
            let theta = (i / s) * 2 * Math.PI;
            endpoints.push({
              x: focus.x + scale * z * Math.cos(theta),
              y: focus.y + scale * z * Math.sin(theta),
            });
          }
        }
        model.guns.forEach(function (gun) {
          let h =
            gun.aspect > 0
              ? ((scale * gun.width) / 2) * gun.aspect
              : (scale * gun.width) / 2;
          let r = Math.atan2(h, scale * gun.length) + rot;
          let l = Math.sqrt(scale * scale * gun.length * gun.length + h * h);
          let x =
            focus.x +
            scale * gun.offset * Math.cos(gun.direction + gun.angle + rot);
          let y =
            focus.y +
            scale * gun.offset * Math.sin(gun.direction + gun.angle + rot);
          endpoints.push({
            x: x + l * Math.cos(gun.angle + r),
            y: y + l * Math.sin(gun.angle + r),
          });
          endpoints.push({
            x: x + l * Math.cos(gun.angle - r),
            y: y + l * Math.sin(gun.angle - r),
          });
          pointDisplay.push({
            x: x + l * Math.cos(gun.angle + r),
            y: y + l * Math.sin(gun.angle + r),
          });
          pointDisplay.push({
            x: x + l * Math.cos(gun.angle - r),
            y: y + l * Math.sin(gun.angle - r),
          });
        });
        model.turrets.forEach(function (turret) {
          pushEndpoints(
            turret,
            turret.bound.size,
            {
              x: turret.bound.offset * Math.cos(turret.bound.angle),
              y: turret.bound.offset * Math.sin(turret.bound.angle),
            },
            turret.bound.angle
          );
        });
      };
      pushEndpoints(entities, 1);
      let massCenter = {
        x: 0,
        y: 0,
      };
      let chooseFurthestAndRemove = function (furthestFrom) {
        let index = 0;
        if (furthestFrom != -1) {
          let list = new goog.structs.PriorityQueue();
          let d;
          for (let i = 0; i < endpoints.length; i++) {
            let thisPoint = endpoints[i];
            d =
              Math.pow(thisPoint.x - furthestFrom.x, 2) +
              Math.pow(thisPoint.y - furthestFrom.y, 2) +
              1;
            list.enqueue(1 / d, i);
          }
          index = list.dequeue();
        }
        let output = endpoints[index];
        endpoints.splice(index, 1);
        return output;
      };
      let point1 = chooseFurthestAndRemove(massCenter);
      let point2 = chooseFurthestAndRemove(point1);
      let chooseBiggestTriangleAndRemove = function (point1, point2) {
        let list = new goog.structs.PriorityQueue();
        let index = 0;
        let a;
        for (let i = 0; i < endpoints.length; i++) {
          let thisPoint = endpoints[i];
          a =
            Math.pow(thisPoint.x - point1.x, 2) +
            Math.pow(thisPoint.y - point1.y, 2) +
            Math.pow(thisPoint.x - point2.x, 2) +
            Math.pow(thisPoint.y - point2.y, 2);
          list.enqueue(1 / a, i);
        }
        index = list.dequeue();
        let output = endpoints[index];
        endpoints.splice(index, 1);
        return output;
      };
      let point3 = chooseBiggestTriangleAndRemove(point1, point2);

      function circleOfThreePoints(p1, p2, p3) {
        let x1 = p1.x;
        let y1 = p1.y;
        let x2 = p2.x;
        let y2 = p2.y;
        let x3 = p3.x;
        let y3 = p3.y;
        let denom = x1 * (y2 - y3) - y1 * (x2 - x3) + x2 * y3 - x3 * y2;
        let xy1 = x1 * x1 + y1 * y1;
        let xy2 = x2 * x2 + y2 * y2;
        let xy3 = x3 * x3 + y3 * y3;
        let x =
          (xy1 * (y2 - y3) + xy2 * (y3 - y1) + xy3 * (y1 - y2)) / (2 * denom);
        let y =
          (xy1 * (x3 - x2) + xy2 * (x1 - x3) + xy3 * (x2 - x1)) / (2 * denom);
        let r = Math.sqrt(Math.pow(x - x1, 2) + Math.pow(y - y1, 2));
        let r2 = Math.sqrt(Math.pow(x - x2, 2) + Math.pow(y - y2, 2));
        let r3 = Math.sqrt(Math.pow(x - x3, 2) + Math.pow(y - y3, 2));
        if (r != r2 || r != r3) {
        }
        return {
          x: x,
          y: y,
          radius: r,
        };
      }
      let c = circleOfThreePoints(point1, point2, point3);
      pointDisplay = [
        {
          x: rounder(point1.x),
          y: rounder(point1.y),
        },
        {
          x: rounder(point2.x),
          y: rounder(point2.y),
        },
        {
          x: rounder(point3.x),
          y: rounder(point3.y),
        },
      ];
      let centerOfCircle = {
        x: c.x,
        y: c.y,
      };
      let radiusOfCircle = c.radius;

      function checkingFunction() {
        for (var i = endpoints.length; i > 0; i--) {
          point1 = chooseFurthestAndRemove(centerOfCircle);
          let vectorFromPointToCircleCenter = new Vector(
            centerOfCircle.x - point1.x,
            centerOfCircle.y - point1.y
          );
          if (vectorFromPointToCircleCenter.length > radiusOfCircle) {
            pointDisplay.push({
              x: rounder(point1.x),
              y: rounder(point1.y),
            });
            let dir = vectorFromPointToCircleCenter.direction;
            point2 = {
              x: centerOfCircle.x + radiusOfCircle * Math.cos(dir),
              y: centerOfCircle.y + radiusOfCircle * Math.sin(dir),
            };
            break;
          }
        }
        return !!endpoints.length;
      }
      while (checkingFunction()) {
        centerOfCircle = {
          x: (point1.x + point2.x) / 2,
          y: (point1.y + point2.y) / 2,
        };
        radiusOfCircle =
          Math.sqrt(
            Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2)
          ) / 2;
      }
      return {
        middle: {
          x: rounder(centerOfCircle.x),
          y: 0,
        },
        axis: rounder(radiusOfCircle * 2),
        points: pointDisplay,
      };
    }
    let mockupData = [];
    for (let k in Class) {
      try {
        if (!Class.hasOwnProperty(k)) continue;
        let type = Class[k];
        let temptank = new Entity({
          x: 0,
          y: 0,
        });
        temptank.define(type);
        temptank.name = type.LABEL;
        type.mockup = {
          body: temptank.camera(true),
          position: getDimensions(temptank),
        };
        type.mockup.body.position = type.mockup.position;
        mockupData.push(getMockup(temptank, type.mockup.position));
        temptank.destroy();
      } catch (error) {
        util.error(error);
        util.error(k);
        util.error(Class[k]);
      }
    }
    purgeEntities();
    let writeData = JSON.stringify(mockupData);
    return writeData;
  })();
const sockets = (() => {
  const protocol = require("./modules/lib/fasttalk");
  let clients = [],
    players = [],
    connectedIPs = [];
  return {
    arenaClosed: (aClose) => {
      clients.forEach((socket) => {
        socket.talk("a", aClose)
      })
    },
    broadcast: (message) => {
      clients.forEach((socket) => {
        socket.talk("m", message);
      });
    },
    broadcastRoom: () => {
      for (let socket of clients)
        socket.talk("R", room.width, room.height, JSON.stringify(c.ROOM_SETUP));
    },
    roomData: function (a, b, c) {
      clients.forEach((socket) => {
        socket.talk("r", a, b, c);
      });
    },
    connect: (() => {
      function close(socket) {
        let player = socket.player,
          index = players.indexOf(player);
          socket.ip = ip
          // Remove the player if one was created
        if (index != -1) {
          // Kill the body if it exists
          if (player.body != null) {
            player.body.invuln = false;
            if (player.body.underControl) {
              player.body.giveUp(player);
            }
          }
          // Disconnect everything
          util.log('[INFO] User disconnected!');
          util.remove(players, index);
        } else {
          util.log("[INFO] A player disconnected before entering the game.");
        }
        util.remove(views, views.indexOf(socket.view));
        util.remove(clients, clients.indexOf(socket));
        util.log(
          "[INFO] Socket closed. " +
            "Clients: " +
            clients.length +
            "."
        );
      }
      // Being kicked
      function kick(socket, reason = "No reason given.") {
        util.warn(reason + " Kicking.");
        socket.lastWords("K");
      }
      // Handle incoming messages
      function incoming(message, socket) {
        // Only accept binary
        if (!(message instanceof ArrayBuffer)) {
          socket.kick("Non-binary packet.");
          return 1;
        }
        // Decode it
        let m = protocol.decode(message);
        // Make sure it looks legit
        if (m === -1) {
          socket.kick("Malformed packet.");
          return 1;
        }
        // Log the message request
        socket.status.requests++;
        // Remember who we are
        let player = socket.player;
        // Handle the request
        switch (m.shift()) {
          case 'k': { // key verification for Dev servers
            socket.ip = ip
            var a = IPBlacklist;
            var b = ProxyBlacklist;
            let same = 0;
            var keys = [
              "Your_very_own_token"
            ];
            // Get data
            let key = m[0];
            // Verify it
            util.log('[INFO] Client IP Address: ' + socket.ip + '. Awaiting Verification Key');
            socket.message = 'Verifying Client Connection. Please wait...'
            setTimeout(() => {
              if (a.indexOf(ip) != -1) { // Check if Client's Proxy is blacklisted
                util.log("[SECURITY] Player's Proxied IP Address is marked on ipBlacklist")
                util.log('[SOCKET] Terminating Connection...')
                socket.terminate('Ill-sized player connection.')
                socket.message = "Your current Proxy/VPN is part of the Blacklist, please disable it"
              }
              if (b.indexOf(ip) != -1) { // Check if Client's Proxy is blacklisted
                util.log("[SECURITY] Player's Proxied IP Address is marked on ProxyBlacklist")
                util.log('[SOCKET] Terminating Connection...')
                socket.terminate('Ill-sized player connection.')
                socket.message = "Your IP Address is currently banned from the game!"
              }
              if (socket.status.verified) { socket.kick('Duplicate player spawn attempt.'); return 1; }
              // Otherwise proceed to check if it's available.
              if (keys.indexOf(key) != -1 || !c2.TESTING) {
                // Save the key
                socket.key = key
                // Make it unavailable
                socket.verified = true;
                // Proceed
                socket.talk('w', true);
                util.log('[INFO] A socket was verified with the token: '); util.log(key);
                util.log('Clients: ' + clients.length);
              } else { // If not, kick 'em (nicely)
                util.log('[INFO] Invalid player verification attempt.');
                socket.lastWords('w', false);
                socket.message = "The Arena is currently closed to the public : No Players May Join!"
              }
              if (views.length > 15) { // Check if the server is full
                socket.kick("Ill-size player request.");
                util.log("[INFO] The server is at full capacity");
                socket.message = "The Server is at full capacity, please try again later or connect to a different server"
              }
              socket.verified = true;
            }, 1.5e3)
          }
            break;
          case "s":
            {
              if (!socket.status.deceased) {
                socket.kick("Trying to spawn while already alive.");
                return 1;
              }
              if (!joinableServer) {
                return 1;
              }
              if (m.length !== 2) {
                socket.kick("Ill-sized spawn request.");
                return 1;
              }
              let name = m[0].replace(c2.BANNED_CHARACTERS_REGEX, "");
              let needsRoom = m[1];
              if (typeof name != "string") {
                socket.kick("Bad spawn request.");
                return 1;
              }
              if (encodeURI(name).split(/%..|./).length > 48) {
                socket.kick("Overly-long name.");
                return 1;
              }
              if (clients.length >= c.connectionLimit || players.length >= c.connectionLimit) {
                 socket.message(`The socket limit (2) has been reached. Please close some tabs!`);
                 socket.kick("Connection limit reached!");
                return 1;
              }
              if (needsRoom !== -1 && needsRoom !== 0) {
                socket.kick("Bad spawn request.");
                return 1;
              }
              socket.status.deceased = false;
              if (players.indexOf(socket.player) != -1) {
                util.remove(players, players.indexOf(socket.player));
              }
              if (views.indexOf(socket.view) != -1) {
                util.remove(views, views.indexOf(socket.view));
                socket.makeView();
              }
              socket.player = socket.spawn(name);
              if (!needsRoom) {
                socket.talk(
                  "R",
                  room.width,
                  room.height,
                  JSON.stringify(c.ROOM_SETUP),
                  JSON.stringify(util.serverStartTime),
                  roomSpeed
                );
              }
              socket.update(0);
              util.log(
                "[INFO] " +
                  m[0] +
                  (needsRoom ? " joined" : " rejoined") +
                  " the game! Players: " +
                  players.length
              );
            }
            break;
          case "S":
            {
              if (m.length !== 1) {
                socket.kick("Ill-sized sync packet.");
                return 1;
              }
              let synctick = m[0];
              if (typeof synctick !== "number") {
                socket.kick("Weird sync packet.");
                return 1;
              }
              socket.talk("S", synctick, util.time());
            }
            break;
          case "h":
            if (!socket.status.deceased) {
              if (util.time() - socket.status.lastChatTime >= 1e3) {
                let message = m[0];
                let maxLen = 100;
                if (message.startsWith("/km")) {
                  if (socket.permissions === 8 || 7 || 6) {
                    player.body.destroy();
                    util.log(
                      "[INFO] " + player.body.name + " used the /km command"
                    );
                  } else {
                    player.body.sendMessage(
                      "red_You don't have permission to use that command!"
                    );
                    return 1;
                  }
                }
                let args = message.split(" ");
                if (message.startsWith("/kill")) {
                  if (socket.permissions === 8 || 7 || 6) {
                  for (let e of entities) {
                    let name = args[1];
                    if (!name) return
                    player.body.sendMessage(
                      'There is no such entity that is named ' + name + ". Make Sure there aren't any mistakes"
                    );
                    if (e.name === name) {
                        e.destroy();
                        e.sendMessage('You Were Killed by ' + player.body.name)
                        util.log("[INFO] " + player.body.name + " used the /kill command on " + name);
                    }
                   }
                  } else {
                    player.body.sendMessage(
                      "red_You don't have permission to use that command!"
                    );
                    return 1;
                  }
                }
                if (message.startsWith("/team")) {
                  if (socket.permissions === 8 || 7 || 6) {
                    let team = args[1];
                    if (!team) {
                      return;
                    } else {
                        player.body.team = team
                        player.body.sendMessage('You changed your team to' + team)
                        util.log("[INFO] " + player.body.name + " used the /team command");
                    }

                  } else {
                    player.body.sendMessage(
                      "red_You don't have permission to use that command!"
                    );
                    return 1;
                  }
                }
                if (message.startsWith("/define")) {
                if (socket.permissions === 8) {
                    let tank = args[1];
                    if (!tank) return;
                    if (Class[tank] != undefined) {
                      player.body.define(Class[tank]);
                      player.body.sendMessage(
                        "Your tank has been defined to " +
                          player.body.label +
                          "."
                      );
                      util.log(
                        "[INFO] " +
                          player.body.name +
                          " used the /define command"
                      );
                      return 1;
                    }
                  }
                }
                if (message.startsWith("/heal")) {
                if (socket.permissions === 8 || 7 || 6) {

                    player.body.health.amount = player.body.health.max;
                    util.log(
                      "[INFO] " + player.body.name + " used the /heal command"
                    );
                    return 1;
                  } else {
                    player.body.sendMessage(
                      "red_You don't have permission to use that command!"
                    );
                    return 1;
                  }
                }
                if (message.startsWith("/purge")) {
                if (socket.permissions === 8 || 7) {
                    purgeEntities();
                    util.log(
                      "[INFO] " + player.body.name + " used the /purge command"
                    );
                    return 1;
                  } else {
                    player.body.sendMessage(
                      "red_You don't have permission to use that command!"
                    );
                    return 1;
                  }
                }
                if (message.startsWith("/closeArena")) {
                if (socket.permissions === 8 || 7) {
                    closemode();
                    util.log(
                      "[INFO] " +
                        player.body.name +
                        " used the /closeArena command"
                    );
                    return 1;
                  } else {
                    player.body.sendMessage(
                      "red_You don't have permission to use that command!"
                    );
                    return 1;
                  }
                }
                if (typeof message != "string") {
                  socket.kick("Bad message string.");
                  return 1;
                }
                if (encodeURI(message).split(/%..|./).length > maxLen) {
                  socket.kick("Overly-long chat message.");
                  return 1;
                }
                let playerName = player.body.name
                  ? player.body.name
                  : "Unnamed";
                let chatMessage = playerName + ": " + message;
                if (player.body.team === -1) {
                  sockets.broadcast('blue_' + chatMessage)
                } else if (player.body.team === -2) {
                  sockets.broadcast('green_' + chatMessage)
                } else if (player.body.team === -3) {
                  sockets.broadcast('red_' + chatMessage)
                } else if (player.body.team === -4) {
                  sockets.broadcast('purple_' + chatMessage)
                } else if (player.body.team === -100) {
                  sockets.broadcast('yellow_' + chatMessage)
                } else if (socket.key == "Your_very_own_token") {
                  sockets.broadcast('dev_' + chatMessage);
                  util.log(chatMessage);
                } else if (socket.key == "Your_very_own_token2") {
                  sockets.broadcast('dev_' + chatMessage);
                  util.log(chatMessage);
                } else if (socket.key == "Your_very_own_token3") {
                  sockets.broadcast('blue_' + chatMessage);
                  util.log(chatMessage);
                } else {
                  sockets.broadcast(chatMessage);
                  util.log(chatMessage);
                }
                socket.status.lastChatTime = util.time();
              }
            }
            break;
          case "p":
            {
              if (m.length !== 1) {
                socket.kick("Ill-sized ping.");
                return 1;
              }
              let ping = m[0];
              if (typeof ping !== "number") {
                socket.kick("Weird ping.");
                return 1;
              }
              socket.talk("p", m[0]);
              socket.status.lastHeartbeat = util.time();
            }
            break;
          case "d":
            {
              if (m.length !== 1) {
                socket.kick("Ill-sized downlink.");
                return 1;
              }
              let time = m[0];
              if (typeof time !== "number") {
                socket.kick("Bad downlink.");
                return 1;
              }
              socket.status.receiving = 0;
              socket.camera.ping = util.time() - time;
              socket.camera.lastDowndate = util.time();
              socket.update(
                Math.max(
                  0,
                  1e3 / c2.networkUpdateFactor -
                    (util.time() - socket.camera.lastUpdate)
                )
              );
            }
            break;
          case "C":
            {
              if (m.length !== 3) {
                socket.kick("Ill-sized command packet.");
                return 1;
              }
              let target = {
                  x: m[0],
                  y: m[1],
                },
                commands = m[2];
              if (
                typeof target.x !== "number" ||
                typeof target.y !== "number" ||
                typeof commands !== "number"
              ) {
                socket.kick("Weird downlink.");
                return 1;
              }
              if (commands > 255) {
                socket.kick("Malformed command packet.");
                return 1;
              }
              player.target = target;
              if (player.command != null && player.body != null) {
                player.command.up = commands & 1;
                player.command.down = (commands & 2) >> 1;
                player.command.left = (commands & 4) >> 2;
                player.command.right = (commands & 8) >> 3;
                player.command.lmb = (commands & 16) >> 4;
                player.command.mmb = (commands & 32) >> 5;
                player.command.rmb = (commands & 64) >> 6;
              }
              socket.timeout.set(commands);
            }
            break;
          case "t":
            {
              if (m.length !== 1) {
                socket.kick("Ill-sized toggle.");
                return 1;
              }
              let given = "",
                tog = m[0];
              if (typeof tog !== "number") {
                socket.kick("Weird toggle.");
                return 1;
              }
              switch (tog) {
                case 0:
                  given = "autospin";
                  break;
                case 1:
                  given = "autofire";
                  break;
                case 2:
                  given = "override";
                  break;
                default:
                  socket.kick("Bad toggle.");
                  return 1;
              }
              if (player.command != null && player.body != null) {
                player.command[given] = !player.command[given];
                player.body.sendMessage(
                  given.charAt(0).toUpperCase() +
                    given.slice(1) +
                    (player.command[given] ? " enabled." : " disabled.")
                );
              }
            }
            break;
          case "U":
            {
              if (m.length !== 1) {
                socket.kick("Ill-sized upgrade request.");
                return 1;
              }
              let number = m[0];
              if (typeof number != "number" || number < 0) {
                socket.kick("Bad upgrade request.");
                return 1;
              }
              if (player.body != null) {
                player.body.upgrade(number);
              }
            }
            break;
          case "x":
            {
              if (m.length !== 1) {
                socket.kick("Ill-sized skill request.");
                return 1;
              }
              let number = m[0],
                stat = "";
              if (typeof number != "number") {
                socket.kick("Weird stat upgrade request.");
                return 1;
              }
              switch (number) {
                case 0:
                  stat = "atk";
                  break;
                case 1:
                  stat = "hlt";
                  break;
                case 2:
                  stat = "spd";
                  break;
                case 3:
                  stat = "str";
                  break;
                case 4:
                  stat = "pen";
                  break;
                case 5:
                  stat = "dam";
                  break;
                case 6:
                  stat = "rld";
                  break;
                case 7:
                  stat = "mob";
                  break;
                case 8:
                  stat = "rgn";
                  break;
                case 9:
                  stat = "shi";
                  break;
                default:
                  socket.kick("Unknown stat upgrade request.");
                  return 1;
              }
              if (player.body != null) {
                player.body.skillUp(stat);
              }
            }
            break;
          case "L":
            {
              if (m.length !== 0) {
                socket.kick("Ill-sized level-up request.");
                return 1;
              }
              if (player.body != null) {
                if (
                  player.body.skill.level < c2.SKILL_CHEAT_CAP ||
                  (socket.key === process.env.SECRET &&
                    player.body.skill.level < 60)
                ) {
                  player.body.skill.score += player.body.skill.levelScore;
                  player.body.skill.maintain();
                  player.body.refreshBodyAttributes();
                }
              }
            }
            break;
          case "0":
            {
              if (m.length !== 0) {
                socket.kick("Ill-sized testbed request.");
                return 1;
              }
              if (player.body != null) {
                if (socket.permissions) {
                  if (socket.permissions === 8)
                    player.body.define(Class.developer);
                  if (socket.permissions === 7)
                    player.body.define(Class.administrator);
                  if (socket.permissions === 6)
                    player.body.define(Class.moderator);
                  if (socket.permissions === 5)
                    player.body.define(Class.managerr);
                  if (socket.permissions === 4)
                    player.body.define(Class.overseerr);
                  if (socket.permissions === 3)
                    player.body.define(Class.seniorTester);
                  if (socket.permissions === 2)
                    player.body.define(Class.testbed);
                }
              }
            }
            break;
          case "-":
            if (socket.permissions === 8) player.body.SIZE /= 1.3;
            if (socket.permissions === 7) player.body.SIZE /= 1.3;
            if (socket.permissions === 6) player.body.SIZE /= 1.3;
            if (socket.permissions === 5) player.body.SIZE /= 1.3;
            if (socket.permissions === 4) player.body.SIZE /= 1.3;
            break;
          case "+":
            if (socket.permissions === 8) player.body.SIZE *= 1.3;
            if (socket.permissions === 7) player.body.SIZE *= 1.3;
            if (socket.permissions === 6) player.body.SIZE *= 1.3;
            if (socket.permissions === 5) player.body.SIZE *= 1.3;
            if (socket.permissions === 4) player.body.SIZE *= 1.3;
            break;
          case "X":
            {
              if (m.length !== 0) {
                socket.kick("Ill-sized reset request.");
                return 1;
              }
              if (player.body != null) {
                if (socket.permissions) {
                  if (
                    socket.permissions === 8 ||
                    socket.permissions === 7 ||
                    socket.permissions === 6 ||
                    socket.permissions === 5 ||
                    socket.permissions === 4 ||
                    socket.permissions === 3 ||
                    socket.permissions === 2
                  )
                    player.body.upgrades = [];
                  player.body.define(Class.basic);
                  player.body.skill.set([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                  player.body.skill.reset();
                  player.body.refreshBodyAttributes();
                }
              }
            }
            break;
          case "W": {
            if (m.length !== 0) {
              socket.kick("Ill-sized mazewall request.");
              return 1;
            }
            if (player.body != null) {
              if (
                socket.permissions === 8 ||
                socket.permissions === 7 ||
                socket.permissions === 6
              )
                if ((player.body.lastabilityUse || 0) < Date.now()) {
                  let hover = {
                    x: Math.floor(player.body.x) + Math.floor(player.target.x),
                    y: Math.floor(player.body.y) + Math.floor(player.target.y),
                  };
                  let o = new Entity(hover);
                  o.define(Class.mazeWall);
                  o.team = -101;
                  o.SIZE = 280;
                  o.color = 16;
                }
            }
            break;
          }
          case "]": {
            let mtp = [];
            if (m.length !== 0) {
              socket.kick("Ill-sized multi-box request.");
              return 1;
            }
            if (player.body != null) {
              if (
                socket.permissions === 8
              ) {
                let body = player.body;
                let x = ran.randomRange(-10, 10);
                let y = ran.randomRange(-10, 10);
                let o = new Entity({
                 x: body.x + x,
                 y: body.y + y
                }, body);
                body.multiboxMaster;
                o.team = body.team;
                o.SIZE = body.SIZE;
                o.color = body.color;
                o.skill.score = body.skill.score;
                o.name = body.name;
                o.nameColor = body.nameColor;
                o.lul = body.lul
                o.lul2 = body.lul2
                o.controllers = [new ioTypes.multiboxClone(o)];
                o.skill = body.skill;
                o.topSpeed = body.topSpeed;
                o.multiboxMaster = body;
                o.invuln = body.invuln;
                o.collisionToggle = body.collisionToggle;
                o.collisonOverride = body.collisonOverride;
                o.intangibility = body.intangibility;
                for (let tank in Class) {
                  if (Class.hasOwnProperty(tank)) {
                    if (body.index === Class[tank].index) {
                      o.define(Class[tank]);
                    }
                  }
                }
              }
            }
          break;
          }
          case "P": {
            if (player.body.labelswitch === "JokerA") {
                player.body.define(Class.joker5)} else{
            if (player.body.labelswitch === 'JokerB') {
                player.body.define(Class.joker1)}}


            if (player.body.labelswitch === "ShootNSpawn") {
                player.body.define(Class.juggernaut2)} else{
            if (player.body.labelswitch === 'ChargeMode') {
                player.body.define(Class.juggernaut)}}


            if (player.body.labelswitch === "AkafujiA") {
               setTimeout(() =>
                player.body.define(Class.akafuji3),
                0.25e3),
               setTimeout(() =>
                player.body.define(Class.akafuji6),
                1.25e3),
               setTimeout(() =>
                player.body.define(Class.akafuji2),
               setTimeout(() =>
                player.body.define(Class.akafuji4),
                0.75e3),
                0.5e3),
               setTimeout(() =>
                player.body.define(Class.akafuji5),
                1e3)
                } else {
            if (player.body.labelswitch === 'AkafujiB') {
               setTimeout(() =>
                player.body.define(Class.akafuji4),
                0.25e3),
               setTimeout(() =>
                player.body.define(Class.akafuji1),
                1.25e3),
               setTimeout(() =>
                player.body.define(Class.akafuji5),
               setTimeout(() =>
                player.body.define(Class.akafuji3),
                0.75e3),
                0.5e3),
               setTimeout(() =>
                player.body.define(Class.akafuji2),
                1e3)}}

            if (player.body.labelswitch === "Celestius") {
               setTimeout(() =>
                player.body.define(Class.celestius2),
                0),
               setTimeout(() =>
                player.body.define(Class.celestius3),
                0.125e3),
               setTimeout(() =>
                player.body.define(Class.celestius4),
                0.25e3),
               setTimeout(() =>
                player.body.define(Class.celestius5),
                0.375e3),
               setTimeout(() =>
                player.body.define(Class.celestius6),
                0.5e3)
               setTimeout(() =>
                player.body.define(Class.celestius1),
                0.625e3)
                }
            if (player.body.labelswitch === "SabatonA") {
               setTimeout(() =>
                player.body.define(Class.sabaton3),
                0.25e3),
               setTimeout(() =>
                player.body.define(Class.sabaton6),
                1.25e3),
               setTimeout(() =>
                player.body.define(Class.sabaton2),
               setTimeout(() =>
                player.body.define(Class.sabaton4),
                0.75e3),
                0.5e3),
               setTimeout(() =>
                player.body.define(Class.sabaton5),
                1e3)
                } else {
            if (player.body.labelswitch === 'SabatonB') {
               setTimeout(() =>
                player.body.define(Class.sabaton4),
                0.25e3),
               setTimeout(() =>
                player.body.define(Class.sabaton1),
                1.25e3),
               setTimeout(() =>
                player.body.define(Class.sabaton5),
               setTimeout(() =>
                player.body.define(Class.sabaton3),
                0.75e3),
                0.5e3),
               setTimeout(() =>
                player.body.define(Class.sabaton2),
                1e3)}}
            if (player.body.label === "DK-1") {
                player.body.define(Class.dk2)} else{
            if (player.body.label === 'DK-2') {
                player.body.define(Class.dk1)}}
            if (player.body.labelswitch === "FidgetDef") {
                player.body.define(Class.fs1)}
            else if (player.body.labelswitch === 'FS1') {
                player.body.define(Class.fs2)}
            else if (player.body.labelswitch === 'FS2') {
                player.body.define(Class.fs3);}
            else if (player.body.labelswitch === 'FS3') {
                player.body.define(Class.fidgetspinner)}
              setTimeout(() => {
            if (player.body.labelswitch === "JavelinA") {
                player.body.define(Class.javelin2)
                setTimeout(() =>
                player.body.define(Class.javelin1), 1.5e3)
            }}, 1.25e3),
                setTimeout(() => {
            if (player.body.labelswitch === "SulfurA") {
                player.body.define(Class.sulfur2),
                player.body.eatsHealthLoL();
                setTimeout(() =>
                player.body.define(Class.sulfur1), 1.5e3)
            }}, 1.25e3)
            break;
          }
          case "F": {
            if (m.length !== 0) {
              socket.kick("Ill-sized rainbow request.");
              return 1;
            }
            if (player.body != null) {
              if (socket.permissions) {
                if (
                  socket.permissions === 8 ||
                  socket.permissions === 7 ||
                  socket.permissions === 6 ||
                  socket.permissions === 5 ||
                  socket.permissions === 4 ||
                  socket.permissions === 3 ||
                  socket.permissions === 2
                ) {
                  if (!player.body.rainbow) {
                    player.body.rainbow = true;
                    player.body.sendMessage("RGB Colors enabled");
                  } else {
                    player.body.rainbow = false;
                    player.body.sendMessage("RGB Colors disabled");
                  }
                }
              }
            }
            break;
          }
          case "T":
            {
              if (m.length !== 0) {
                socket.kick("Ill-sized testbed request.");
                return 1;
              }
              if (player.body != null) {
                if (socket.permissions) {
                  if (socket.permissions === 8)
                    player.body.x += player.target.x;
                  player.body.y += player.target.y;
                  if (socket.permissions === 7)
                    player.body.x += player.target.x;
                  player.body.y += player.target.y;
                  if (socket.permissions === 6)
                    player.body.x += player.target.x;
                  player.body.y += player.target.y;
                  if (socket.permissions === 5)
                    player.body.x += player.target.x;
                  player.body.y += player.target.y;
                  if (socket.permissions === 4)
                    player.body.x += player.target.x;
                  player.body.y += player.target.y;
                  if (socket.permissions === 3)
                    player.body.x += player.target.x;
                  player.body.y += player.target.y;
                  if (socket.permissions === 2)
                    player.body.x += player.target.x;
                  player.body.y += player.target.y;
                }
              }
            }
            break;
          case "J": {
            if (m.length !== 0) {
              socket.kick("Ill-sized kill request.");
              return 1;
            }
            if (player.body != null) {
              if (socket.permissions) {
                if (socket.permissions === 8)
                  if (!player.pickedUpInterval) {
                    let tx = player.body.x + player.target.x;
                    let ty = player.body.y + player.target.y;
                    let count = 0;
                    for (let e of entities)
                      if (
                        (e.x - tx) * (e.x - tx) + (e.y - ty) * (e.y - ty) <
                        e.size * e.size
                      ) {
                        e.invuln = false;
                        e.kill();
                        count++;
                      }
                    if (count === 0) {
                      socket.talk("m", "No entity found on cursor!");
                    } else if (count === 1) {
                      socket.talk("m", "Killed 1 entity!");
                    } else {
                      socket.talk("m", "Killed " + count + " entities!");
                    }
                  }
                break;
              }
            }
          }
          case "[": {
            if (m.length !== 0) {
              socket.kick("Ill-sized control request.");
              return 1;
            }
            if (player.body != null) {
              if (socket.permissions) {
                if (socket.permissions === 8 || 7 || 6)
                  if (!player.pickedUpInterval) {
                    let tx = player.body.x + player.target.x;
                    let ty = player.body.y + player.target.y;
                    let count = 0;
                    for (let e of entities) {
                      if (
                        (e.x - tx) * (e.x - tx) + (e.y - ty) * (e.y - ty) <
                        e.size * e.size
                      ) {
                        let body = player.body
                        body.kill();
                        body.destroy();
                        player.body = e
                        player.body.become(player)
                        player.body.refreshBodyAttributes();
                        player.body.name = e.name;
                      }
                    }
                  }
                break;
              }
            }
          }
          case "Y": {
             {
               if (player.body == null) return 1;
                        let body = player.body,
                        pressedT = false,
                        sussybadka = { x: body.x, y: body.y};
                        if (body.underControl === true) {
                            if (c.MOTHERSHIP_LOOP) {
                              player.body.giveUp(player, player.body.isMothership ? "" : undefined);
                              socket.talk("m", "You are no longer controling the entity.");
                              return 1;
                            }
                            if (c.DOMINATION_LOOP) {
                              player.body.giveUp(player, player.body.isDominator ? "" : undefined);
                              socket.talk("m", "You are no longer controling the entity.");
                              return 1;
                            }
                        }
                        if (c.MOTHERSHIP_LOOP) {
                            let motherships = entities.map(entry => {
                                if (entry.isMothership && entry.team === player.body.team && entry.underControl === false) return entry;
                            }).filter(instance => instance);
                            if (!motherships.length) {
                                socket.talk("m", "There are no motherships available that are on your team!");
                                return 1;
                            }
                            let mothership = motherships.shift();
                            mothership.controllers = [];
                            mothership.underControl = true;
                            player.body = mothership;
                            body.kill();
                            body.destroy();
                            player.body.become(player);
                            player.body.refreshBodyAttributes();
                            player.body.name = body.name;
                            player.body.sendMessage('You are now controlling the mothership!');
                            player.body.sendMessage("Press T to relinquish control of the mothership!");
                        } if (c.DOMINATION_LOOP) {
                            let dominators = entities.map(entry => {
                                if (entry.isDominator === true && entry.team === player.body.team && entry.underControl === false) return entry;
                            }).filter(instance => instance);
                            if (!dominators.length) {
                                socket.talk("m", "There are no dominators available that are on your team!");
                                return 1;
                            }
                            let dominator = dominators.shift();
                            dominator.controllers = [];
                            dominator.underControl = true;
                            player.body = dominator;
                            body.kill();
                            player.body.become(player);
                            player.body.refreshBodyAttributes();
                            player.body.name = body.name;
                            player.body.isDominator = true
                            player.body.underControl = true
                            player.body.sendMessage('You are now controlling the dominator!');
                            player.body.sendMessage("Press T to relinquish control of the dominator!");
                        } else if (!c.MOTHERSHIP_LOOP || !c.DOMINATION_LOOP) socket.talk("m", "You cannot use this.");
                    }
                        break;
          }
          case "K":
            {
              if (m.length !== 0) {
                return 1;
              }
              if (player.body != null) {
                if (socket.permissions) {
                  if (
                    socket.permissions === 8 ||
                    socket.permissions === 7 ||
                    socket.permissions === 6 ||
                    socket.permissions === 5 ||
                    socket.permissions === 4 ||
                    socket.permissions === 3 ||
                    socket.permissions === 2
                  )
                    if (!player.body.collisionToggle) {
                      player.body.collisionToggle = true;
                      player.body.collisonOverride = true;
                      player.body.intangibility = true;
                      player.body.sendMessage("Body Collision disabled");
                    } else {
                      player.body.collisionToggle = false;
                      player.body.collisonOverride = false;
                      player.body.intangibility = false;
                      player.body.sendMessage("Body Collision enabled");
                    }
                }
              }
            }
            break;
          default:
            socket.kick("Bad packet index.");
        }
      }

      function traffic(socket) {
        let strikes = 0;
        return () => {
          if (
            util.time() - socket.status.lastHeartbeat >
            c.maxHeartbeatInterval
          ) {
            socket.kick("Heartbeat lost.");
            return 0;
          }
          if (socket.status.requests > 50) {
            strikes++;
          } else {
            strikes = 0;
          }
          if (strikes > 3) {
            socket.kick("Socket traffic volume violation!");
            return 0;
          }
          socket.status.requests = 0;
        };
      }
      let paths = [Class.hexa];
      let laggyTanks = ["Hexa Tank"];
      for (let tank of paths) {
        for (let key in tank) {
          if (key.includes("UPGRADES_TIER_")) {
            for (let upgrade of tank[key]) {
              laggyTanks.push(upgrade.LABEL);
            }
          }
        }
      }
      const spawn = (() => {
        let newgui = (() => {
          function floppy(value = null) {
            let flagged = true;
            return {
              update: (newValue) => {
                let eh = false;
                if (value == null) {
                  eh = true;
                } else {
                  if (typeof newValue != typeof value) {
                    eh = true;
                  }
                  switch (typeof newValue) {
                    case "number":
                    case "string":
                      {
                        if (newValue !== value) {
                          eh = true;
                        }
                      }
                      break;
                    case "object": {
                      if (Array.isArray(newValue)) {
                        if (newValue.length !== value.length) {
                          eh = true;
                        } else {
                          for (let i = 0, len = newValue.length; i < len; i++) {
                            if (newValue[i] !== value[i]) eh = true;
                          }
                        }
                        break;
                      }
                    }
                    default:
                      util.error(newValue);
                      throw new Error("Unsupported type for a floppyvar!");
                  }
                }
                if (eh) {
                  flagged = true;
                  value = newValue;
                }
              },
              publish: () => {
                if (flagged && value != null) {
                  flagged = false;
                  return value;
                }
              },
            };
          }

          function container(player) {
            let vars = [],
              skills = player.body.skill,
              out = [],
              statnames = [
                "atk",
                "hlt",
                "spd",
                "str",
                "pen",
                "dam",
                "rld",
                "mob",
                "rgn",
                "shi",
              ];
            statnames.forEach((a) => {
              vars.push(floppy());
              vars.push(floppy());
              vars.push(floppy());
            });
            return {
              update: () => {
                let needsupdate = false,
                  i = 0;
                statnames.forEach((a) => {
                  vars[i++].update(skills.title(a));
                  vars[i++].update(skills.cap(a));
                  vars[i++].update(skills.cap(a, true));
                });
                vars.forEach((e) => {
                  if (e.publish() != null) needsupdate = true;
                });
                if (needsupdate) {
                  statnames.forEach((a) => {
                    out.push(skills.title(a));
                    out.push(skills.cap(a));
                    out.push(skills.cap(a, true));
                  });
                }
              },
              publish: () => {
                if (out.length) {
                  let o = out.splice(0, out.length);
                  out = [];
                  return o;
                }
              },
            };
          }

          function getstuff(s) {
            let val = 0;
            val += 1 * s.amount("atk");
            val += 16 * s.amount("hlt");
            val += 256 * s.amount("spd");
            val += 4096 * s.amount("str");
            val += 65536 * s.amount("pen");
            val += 1048576 * s.amount("dam");
            val += 16777216 * s.amount("rld");
            val += 268435456 * s.amount("mob");
            val += 4294967296 * s.amount("rgn");
            val += 68719476736 * s.amount("shi");
            return val.toString(36);
          }

          function update(gui) {
            let b = gui.master.body;
            if (!b) return 0;
            gui.bodyid = b.id;
            gui.fps.update((global.fps / roomSpeed / 1e3) * 30);
            gui.color.update(gui.master.color);
            gui.label.update(b.index);
            gui.score.update(b.skill.score);
            gui.points.update(b.skill.points);
            let upgrades = [];
            b.upgrades.forEach(function (e) {
              if (b.skill.level >= e.level) {
                upgrades.push(e.index);
              }
            });
            gui.upgrades.update(upgrades);
            gui.stats.update();
            gui.skills.update(getstuff(b.skill));
            gui.accel.update(b.acceleration);
            gui.topspeed.update(b.topSpeed);
          }

          function publish(gui) {
            let o = {
              fps: gui.fps.publish(),
              label: gui.label.publish(),
              score: gui.score.publish(),
              points: gui.points.publish(),
              upgrades: gui.upgrades.publish(),
              color: gui.color.publish(),
              statsdata: gui.stats.publish(),
              skills: gui.skills.publish(),
              accel: gui.accel.publish(),
              top: gui.topspeed.publish(),
            };
            let oo = [0];
            if (o.fps != null) {
              oo[0] += 1;
              oo.push(o.fps || 1);
            }
            if (o.label != null) {
              oo[0] += 2;
              oo.push(o.label);
              oo.push(o.color || gui.master.color);
              oo.push(gui.bodyid);
            }
            if (o.score != null) {
              oo[0] += 4;
              oo.push(o.score);
            }
            if (o.points != null) {
              oo[0] += 8;
              oo.push(o.points);
            }
            if (o.upgrades != null) {
              oo[0] += 16;
              oo.push(o.upgrades.length, ...o.upgrades);
            }
            if (o.statsdata != null) {
              oo[0] += 32;
              oo.push(...o.statsdata);
            }
            if (o.skills != null) {
              oo[0] += 64;
              oo.push(o.skills);
            }
            if (o.accel != null) {
              oo[0] += 128;
              oo.push(o.accel);
            }
            if (o.top != null) {
              oo[0] += 256;
              oo.push(o.top);
            }
            return oo;
          }
          return (player) => {
            let gui = {
              master: player,
              fps: floppy(),
              label: floppy(),
              score: floppy(),
              points: floppy(),
              upgrades: floppy(),
              color: floppy(),
              skills: floppy(),
              topspeed: floppy(),
              accel: floppy(),
              stats: container(player),
              bodyid: -1,
            };
            return {
              update: () => update(gui),
              publish: () => publish(gui),
            };
          };
        })();

        function messenger(socket, content) {
          socket.talk("m", content);
        }
        return (socket, name) => {
          let player = {},
            loc = {};
          player.team = socket.rememberedTeam;
          switch (room.gameMode) {
            case "tdm": {
                let area = ran.choose(['bas', 'bap'])
                // Count how many others there are
                let census = [-1, -2, -3, -4],
                    scoreCensus = [-1, -2, -3, -4];
                players.forEach(p => {
                    census[p.team - 1]++;
                    if (p.body != null) {
                        scoreCensus[p.team - 1] += p.body.skill.score;
                    }
                });
                let possiblities = [];
                for (let i = 0, m = 0; i < 4; i++) {
                    let v = Math.round(1000000 * (room['bas' + (i + 1)].length + 1) / (census[i] + 1) / scoreCensus[i]);
                    if (v > m) {
                        m = v;
                        possiblities = [i];
                    }
                    if (v == m) {
                        possiblities.push(i);
                    }
                }
                // Choose from one of the least ones
                if (player.team == null) {
                    player.team = ran.choose(possiblities) + 1;
                }
                // Make sure you're in a base
                if (room['bas' + player.team].length)
                    do {
                        loc = room.randomType('bas' + player.team);
                    } while (dirtyCheck(loc, 50));
                else
                    do {
                        loc = room.gaussInverse(5);
                    } while (dirtyCheck(loc, 50));
            }
            break;
            case "siege":
              {
                let census = Array(c.TEAMS).fill(1),
                  scoreCensus = Array(c.TEAMS).fill(1);
                players.forEach((p) => {
                  census[p.team - 1]++;
                  if (p.body != null) {
                    scoreCensus[p.team - 1] += p.body.skill.score;
                  }
                });
                let possiblities = [];
                for (let i = 0, m = 0; i < c.TEAMS; i++) {
                  let v = Math.round(
                    (1e6 * (room["spawn" + (i + 1)].length + 1)) /
                      (census[i] + 1) /
                      scoreCensus[i]
                  );
                  if (v > m) {
                    m = v;
                    possiblities = [i];
                  }
                  if (v == m) {
                    possiblities.push(i);
                  }
                }
                if (player.team == null) {
                  player.team = ran.choose(possiblities) + 1;
                }
                if (room["spawn" + player.team].length) {
                  do {
                    loc = room.randomType("spawn" + player.team);
                  } while (dirtyCheck(loc, 50));
                } else
                  do {
                    loc = room.gaussInverse(5);
                  } while (dirtyCheck(loc, 50));
              }
              break;
            case "soccer":
              {
                let census = Array(c.TEAMS).fill(1),
                  scoreCensus = Array(c.TEAMS).fill(1);
                players.forEach((p) => {
                  census[p.team - 1]++;
                  if (p.body != null) {
                    scoreCensus[p.team - 1] += p.body.skill.score;
                  }
                });
                let possiblities = [];
                for (let i = 0, m = 0; i < c.TEAMS; i++) {
                  let v = Math.round(
                    (1e6 * (room["bap" + (i + 1)].length + 1)) /
                      (census[i] + 1) /
                      scoreCensus[i]
                  );
                  if (v > m) {
                    m = v;
                    possiblities = [i];
                  }
                  if (v == m) {
                    possiblities.push(i);
                  }
                }
                if (player.team == null) {
                  player.team = ran.choose(possiblities) + 1;
                }
                if (room["bap" + player.team].length) {
                  do {
                    loc = room.randomType("bap" + player.team);
                  } while (dirtyCheck(loc, 50));
                } else
                  do {
                    loc = room.gaussInverse(5);
                  } while (dirtyCheck(loc, 50));
              }
              break;
            default:
              do {
                loc = room.gaussInverse(5);
              } while (dirtyCheck(loc, 50));
          }
          switch (room.gmName) {
            case "Siege":
              {
                let census = Array(c.TEAMS).fill(1),
                  scoreCensus = Array(c.TEAMS).fill(1);
                players.forEach((p) => {
                  census[p.team - 1]++;
                  if (p.body != null) {
                    scoreCensus[p.team - 1] += p.body.skill.score;
                  }
                });
                let possiblities = [];
                for (let i = 0, m = 0; i < c.TEAMS; i++) {
                  let v = Math.round(
                    (1e6 * (room["spawn" + (i + 1)].length + 1)) /
                      (census[i] + 1) /
                      scoreCensus[i]
                  );
                  if (v > m) {
                    m = v;
                    possiblities = [i];
                  }
                  if (v == m) {
                    possiblities.push(i);
                  }
                }
                if (player.team == null) {
                  player.team = ran.choose(possiblities) + 1;
                }
                if (room["spawn" + player.team].length) {
                  do {
                    loc = room.randomType("spawn" + player.team);
                  } while (dirtyCheck(loc, 50));
                } else
                  do {
                    loc = room.gaussInverse(5);
                  } while (dirtyCheck(loc, 50));
              }
              break;
            default:
              do {
                loc = room.gaussInverse(5);
              } while (dirtyCheck(loc, 50));
          }
          socket.rememberedTeam = player.team;
          let body = new Entity(loc);
          body.protect();
          let no
          if (c.EVENT === 1) {
            no = (Class.eventdev)
          } else
          if (c.EVENT === 2) {
            no = (Class.seniorTester)
          } else
          if (c.EVENT === 3) {
            no = (Class.testbed)
          } else {
            no = (Class.basic)
          }
          (body.invuln = true), body.define(no);
          body.lul = false;
          body.lul2 = false;
          body.name = name;
          setTimeout(() => body.invuln = false, 1e3)

          // Secret name passwords
          if (body.name === "n0ob_SL4Y3R") {
            body.nameColor = "#00FFFF";
          }
          if (body.name === "Domatrix") {
            body.nameColor = "#5495D3";
          }
          if (body.name === "Thanos") {
            body.nameColor = "#6a0dad";
          }

          //Pet, Permissions, & special name color configuration
          if (socket.key === "Your_very_own_token") {
            body.define(Class.jbbasic),
            body.define({
              CAN_BE_ON_LEADERBOARD: true,
            });
            body.lul2 = true;
            (body.invuln = false);
            setTimeout(() => {
              body.invuln = true
            },
                       5e3)
          }
          body.addController(new ioTypes.listenToPlayer(body, player));
          body.sendMessage = (content) => messenger(socket, content);
          player.body = body;
          if (socket.key === "Your_very_own_token") {
            body.define(Class.ka2basic); 
            body.define({
              CAN_BE_ON_LEADERBOARD: true,
            });
            (body.invuln = false)
            setTimeout(() => {
              body.invuln = true
            },
                       5e3)
          }
          body.addController(new ioTypes.listenToPlayer(body, player));
          body.sendMessage = (content) => messenger(socket, content);
          player.body = body;
 

          for (let token of btConfig.tokens) {
            if (socket.key === token[0]) {
              socket.permissions = token[1];
              body.nameColor = token[2];
              break;
            }
          }
          switch (room.gameMode) {
            case "tdm":
              {
                body.team = -player.team;
                body.color = [10, 11, 12, 15][player.team - 1];
              }
              break;
            case "siege":
              {
                body.team = -1;
                body.color = 10;
              }
              break;
            default: {
              body.color = c.RANDOM_COLORS
                ? ran.choose([
                    100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111,
                    112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123,
                    124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135,
                    136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147,
                    148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159,
                    160, 161, 162, 163, 164, 165, 166, 167, 169, 170, 171, 172,
                    173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184,
                    185,
                  ])
                : 12;
            }
          }
          player.color =
            !c.RANDOM_COLORS && room.gameMode === "ffa" ? 10 : body.color;
          player.target = {
            x: 0,
            y: 0,
          };
          player.command = {
            up: false,
            down: false,
            left: false,
            right: false,
            lmb: false,
            mmb: false,
            rmb: false,
            autofire: false,
            autospin: false,
            override: false,
            autoguide: false,
          };
          player.records = (() => {
            let begin = util.time();
            return () => {
              return [
                player.body.skill.score,
                Math.floor((util.time() - begin) / 1e3),
                player.body.killCount.solo,
                player.body.killCount.assists,
                player.body.killCount.bosses,
                player.body.killCount.killers.length,
                ...player.body.killCount.killers,
              ];
            };
          })();
          player.gui = newgui(player);
          player.socket = socket;
          players.push(player);
          socket.camera.x = body.x;
          socket.camera.y = body.y;
          socket.camera.fov = 2e3;
          socket.status.hasSpawned = true;
          body.sendMessage(
            "You have spawned in " + c.NAME + ". Welcome to the game."
          );
          body.sendMessage("You will be invulnerable until you move or shoot or you wait for one minute.");
          socket.talk(
            "c",
            socket.camera.x,
            socket.camera.y,
            socket.camera.fov,
            body.nameColor
          );
          return player;
        };
      })();
      const eyes = (() => {
        function flatten(data) {
          let output = [data.type];
          if (data.type & 1) {
            output.push(data.facing, data.layer);
          } else {
            output.push(
              data.id,
              data.index,
              data.x,
              data.y,
              data.vx,
              data.vy,
              data.size,
              data.facing,
              data.vfacing,
              data.twiggle,
              data.layer,
              data.color,
              Math.ceil(255 * data.health),
              Math.round(255 * data.shield),
              Math.round(255 * data.alpha)
            );
            if (data.type & 4) {
              output.push(data.name, data.score);
            }
          }
          let gundata = [data.guns.length];
          data.guns.forEach((lastShot) => {
            gundata.push(lastShot.time, lastShot.power);
          });
          output.push(...gundata);
          let turdata = [data.turrets.length];
          data.turrets.forEach((turret) => {
            turdata.push(...flatten(turret));
          });
          output.push(...turdata);
          return output;
        }

        function perspective(e, player, data) {
          if (player.body != null) {
            if (player.body.id === e.master.id) {
              data = data.slice();
              if (player.command.autospin) {
                data[10] = 1;
              }
            }
          }
          return data;
        }

        function check(camera, obj) {
          return (
            Math.abs(obj.x - camera.x) <
              camera.fov * 0.6 + 1.5 * obj.size + 100 &&
            Math.abs(obj.y - camera.y) <
              camera.fov * 0.6 * 0.5625 + 1.5 * obj.size + 100
          );
        }
        return (socket) => {
          let lastVisibleUpdate = 0;
          let nearby = [];
          let x = -1e3;
          let y = -1e3;
          let fov = 2e3;
          let o = {
            add: (e) => {
              if (check(socket.camera, e)) nearby.push(e);
            },
            remove: (e) => {
              let i = nearby.indexOf(e);
              if (i !== -1) util.remove(nearby, i);
            },
            check: (e, f) => {
              return check(socket.camera, e);
            },
            gazeUpon: () => {
              logs.network.set();
              let player = socket.player,
                camera = socket.camera;
              let rightNow = room.lastCycle;
              if (rightNow === camera.lastUpdate) {
                socket.update(5 + room.cycleSpeed - util.time() + rightNow);
                return 1;
              }
              camera.lastUpdate = rightNow;
              socket.status.receiving++;
              let setFov = camera.fov;
              if (player.body != null) {
                if (player.body.isDead()) {
                  socket.status.deceased = true;
                  socket.talk("F", ...player.records());
                  player.body = null;
                } else if (player.body.photo) {
                  let a = Math.max(
                    player.body.control.target.x + player.body.photo.x
                  );
                  let b = Math.max(
                    player.body.control.target.y + player.body.photo.y
                  );
                  let c =
                    (player.body.fov / 5) *
                    (player.body.control.alt &&
                      player.body.label === "Predator");
                  let d = util.clamp(
                    player.body.photo.x - c,
                    a + a / 100,
                    player.body.photo.x + c
                  );
                  let e = util.clamp(
                    player.body.photo.y - c,
                    b + b / 100,
                    player.body.photo.y + c
                  );
                  camera.vx = player.body.photo.vx;
                  camera.vy = player.body.photo.vy;
                  if (
                    player.body.control.alt &&
                    player.body.label === "Predator"
                  ) {
                    camera.x += d - camera.x;
                    camera.y += e - camera.y;
                  } else camera.x = d;
                  camera.y = e;
                  setFov = player.body.fov;
                  player.viewId = player.body.id;
                }
              }
              if (player.body == null) {
                setFov = 2e3;
              }
              camera.fov += Math.max(
                (setFov - camera.fov) / 30,
                setFov - camera.fov
              );
              x = camera.x;
              y = camera.y;
              fov = camera.fov;
              if (
                camera.lastUpdate - lastVisibleUpdate >
                c2.visibleListInterval
              ) {
                lastVisibleUpdate = camera.lastUpdate;
                nearby = entities
                  .map((e) => {
                    if (check(socket.camera, e)) return e;
                  })
                  .filter((e) => {
                    return e;
                  });
              }
              let visible = nearby
                .map(function mapthevisiblerealm(e) {
                  if (e.photo) {
                    if (
                      Math.abs(e.x - x) < fov / 2 + 1.5 * e.size &&
                      Math.abs(e.y - y) < (fov / 2) * (9 / 16) + 1.5 * e.size
                    ) {
                      if (!e.flattenedPhoto)
                        e.flattenedPhoto = flatten(e.photo);
                      return perspective(e, player, e.flattenedPhoto);
                    }
                  }
                })
                .filter((e) => {
                  return e;
                });
              let numberInView = visible.length,
                view = [];
              visible.forEach((e) => {
                view.push(...e);
              });
              player.gui.update();
              socket.talk(
                "u",
                rightNow,
                camera.x,
                camera.y,
                setFov,
                camera.vx,
                camera.vy,
                ...player.gui.publish(),
                numberInView,
                ...view
              );
              if (socket.status.receiving < c2.networkFrontlog) {
                socket.update(
                  Math.max(
                    0,
                    1e3 / c2.networkUpdateFactor -
                      (camera.lastDowndate - camera.lastUpdate),
                    camera.ping / c2.networkFrontlog
                  )
                );
              } else {
                socket.update(c2.networkFallbackTime);
              }
              logs.network.mark();
            },
          };
          views.push(o);
          return o;
        };
      })();
      const broadcast = (() => {
        let readlb;
        let getBarColor = (entry) => {
          switch (entry.team) {
            case -100:
              return entry.color;
            case -1:
              return 10;
            case -2:
              return 11;
            case -3:
              return 12;
            case -4:
              return 15;
            default:
              if (
                room.gameMode[0] === "2" ||
                room.gameMode[0] === "3" ||
                room.gameMode[0] === "4"
              )
                return entry.color;
              return 11;
          }
        };
        const Delta = class {
          constructor(dataLength, finder) {
            this.dataLength = dataLength;
            this.finder = finder;
            this.now = finder();
          }
          update() {
            let old = this.now;
            let now = this.finder();
            this.now = now;
            let oldIndex = 0;
            let nowIndex = 0;
            let updates = [];
            let updatesLength = 0;
            let deletes = [];
            let deletesLength = 0;
            while (oldIndex < old.length && nowIndex < now.length) {
              let oldElement = old[oldIndex];
              let nowElement = now[nowIndex];
              if (oldElement.id === nowElement.id) {
                nowIndex++;
                oldIndex++;
                let updated = false;
                for (let i = 0; i < this.dataLength; i++)
                  if (oldElement.data[i] !== nowElement.data[i]) {
                    updated = true;
                    break;
                  }
                if (updated) {
                  updates.push(nowElement.id, ...nowElement.data);
                  updatesLength++;
                }
              } else if (oldElement.id < nowElement.id) {
                deletes.push(oldElement.id);
                deletesLength++;
                oldIndex++;
              } else {
                updates.push(nowElement.id, ...nowElement.data);
                updatesLength++;
                nowIndex++;
              }
            }
            for (let i = oldIndex; i < old.length; i++) {
              deletes.push(old[i].id);
              deletesLength++;
            }
            for (let i = nowIndex; i < now.length; i++) {
              updates.push(now[i].id, ...now[i].data);
              updatesLength++;
            }
            let reset = [0, now.length];
            for (let element of now) reset.push(element.id, ...element.data);
            let update = [deletesLength, ...deletes, updatesLength, ...updates];
            return {
              reset: reset,
              update: update,
            };
          }
        };
        let minimapAll = new Delta(5, () => {
          let all = [];
          for (let my of entities)
            if (
              (my.type === "maze" && my.alpha > 0.2) ||
              my.type === "miniboss" ||
              (my.type === "tank" && my.lifetime) ||
              my.isMothership
            )
              all.push({
                id: my.id,
                data: [
                  my.type === "maze" || my.isMothership
                    ? my.shape === 4
                      ? 2
                      : 1
                    : 0,
                  util.clamp(Math.floor((256 * my.x) / room.width), 0, 255),
                  util.clamp(Math.floor((256 * my.y) / room.height), 0, 255),
                  my.color,
                  Math.round(my.SIZE),
                ],
              });
          return all;
        });
        let minimapTeams = [1, 2, 3, 4].map(
          (team) =>
            new Delta(3, () => {
              let all = [];
              for (let my of entities)
                if (
                  my.type === "tank" &&
                  my.team === -team &&
                  my.master === my &&
                  !my.lifetime
                )
                  all.push({
                    id: my.id,
                    data: [
                      util.clamp(Math.floor((256 * my.x) / room.width), 0, 255),
                      util.clamp(
                        Math.floor((256 * my.y) / room.height),
                        0,
                        255
                      ),
                      my.color,
                    ],
                  });
              return all;
            })
        );
        let leaderboard = new Delta(5, () => {
          let list = [];
          for (let instance of entities)
            if (
              instance.settings.leaderboardable &&
              instance.settings.drawShape &&
              (instance.type === "tank" ||
                instance.killCount.solo ||
                instance.killCount.assists)
            ) {
              list.push(instance);
            }
          let topTen = [];
          for (let i = 0; i < 10 && list.length; i++) {
            let top,
              is = 0;
            for (let j = 0; j < list.length; j++) {
              let val = list[j].skill.score;
              if (val > is) {
                is = val;
                top = j;
              }
            }
            if (is === 0) break;
            let entry = list[top];
            topTen.push({
              id: entry.id,
              data: [
                Math.round(entry.skill.score),
                entry.index,
                entry.nameColor + entry.name,
                entry.color,
                getBarColor(entry),
              ],
            });
            list.splice(top, 1);
          }
          room.topPlayerID = topTen.length ? topTen[0].id : -1;
          return topTen.sort((a, b) => a.id - b.id);
        });
        let subscribers = [];
        setInterval(() => {
          logs.minimap.set();
          let minimapUpdate = minimapAll.update();
          let minimapTeamUpdates = minimapTeams.map((r) => r.update());
          let leaderboardUpdate = leaderboard.update();
          for (let socket of subscribers) {
            if (!socket.status.hasSpawned) continue;
            let team = minimapTeamUpdates[socket.player.team - 1];
            if (socket.status.needsNewBroadcast) {
              socket.talk(
                "b",
                ...minimapUpdate.reset,
                ...(team ? team.reset : [0, 0]),
                ...(socket.anon ? [0, 0] : leaderboardUpdate.reset)
              );
              socket.status.needsNewBroadcast = false;
            } else {
              socket.talk(
                "b",
                ...minimapUpdate.update,
                ...(team ? team.update : [0, 0]),
                ...(socket.anon ? [0, 0] : leaderboardUpdate.update)
              );
            }
          }
          logs.minimap.mark();
          let time = util.time();
          for (let socket of clients) {
            if (socket.timeout.check(time)) socket.lastWords("K");
            if (time - socket.statuslastHeartbeat > c.maxHeartbeatInterval)
              socket.kick("Lost heartbeat.");
          }
        }, 250);
        return {
          subscribe(socket) {
            subscribers.push(socket);
          },
          unsubscribe(socket) {
            let i = subscribers.indexOf(socket);
            if (i !== -1) util.remove(subscribers, i);
          },
        };
      })();
      return (socket, req) => {

        util.log("A client is trying to connect...");
        socket.binaryType = "arraybuffer";
        socket.key = "";
        socket.player = {
          camera: {},
        };
        socket.timeout = (() => {
          let mem = 0;
          let timer = 0;
          return {
            set: (val) => {
              if (mem !== val) {
                mem = val;
                timer = util.time();
              }
            },
            check: (time) => {
              return timer && time - timer > c.maxHeartbeatInterval;
            },
          };
        })();
        socket.status = {
          verified: false,
          receiving: 0,
          deceased: true,
          requests: 0,
          hasSpawned: false,
          needsFullMap: true,
          needsNewBroadcast: true,
          lastHeartbeat: util.time(),
          lastChatTime: util.time(),
        };
        socket.loops = (() => {
          let nextUpdateCall = null;
          let trafficMonitoring = setInterval(() => traffic(socket), 1500);
          broadcast.subscribe(socket);
          return {
            setUpdate: (timeout) => {
              nextUpdateCall = timeout;
            },
            cancelUpdate: () => {
              clearTimeout(nextUpdateCall);
            },
            terminate: () => {
              clearTimeout(nextUpdateCall);
              clearTimeout(trafficMonitoring);
              broadcast.unsubscribe(socket);
            },
          };
        })();
        socket.camera = {
          x: undefined,
          y: undefined,
          vx: 0,
          vy: 0,
          lastUpdate: util.time(),
          lastDowndate: undefined,
          fov: 2e3,
        };
        socket.makeView = () => {
          socket.view = eyes(socket);
        };
        socket.makeView();
        socket.kick = (reason) => kick(socket, reason);
        socket.talk = (...message) => {
          if (socket.readyState === socket.OPEN) {
            socket.send(protocol.encode(message), {
              binary: true,
            });
          }
        };
        socket.lastWords = (...message) => {
          if (socket.readyState === socket.OPEN) {
            socket.send(
              protocol.encode(message),
              {
                binary: true,
              },
              () => setTimeout(() => socket.terminate(), 1e3)
            );
          }
        };
        socket.on("message", (message) => incoming(message, socket));
        socket.on("close", () => {
          socket.loops.terminate();
          close(socket);
        });
        socket.on("error", (e) => {
          util.log("[ERROR]:");
          util.error(e);
        });
        socket.spawn = (name) => {
          return spawn(socket, name);
        };
        socket.update = (time) => {
          socket.loops.cancelUpdate();
          socket.loops.setUpdate(
            setTimeout(() => {
              socket.view.gazeUpon();
            }, time)
          );
        };
        clients.push(socket);
        util.log("[INFO] New socket opened");
      };
    })(),
  };
})();
var gameloop = (() => {
  let collide = (() => {
    function simplecollide(my, n) {
      let diff = (1 + util.getDistance(my, n) / 2) * roomSpeed;
      let a = my.intangibility ? 1 : my.pushability,
        b = n.intangibility ? 1 : n.pushability,
        c = (0.05 * (my.x - n.x)) / diff,
        d = (0.05 * (my.y - n.y)) / diff;
      my.accel.x += (a / (b + 0.3)) * c;
      my.accel.y += (a / (b + 0.3)) * d;
      n.accel.x -= (b / (a + 0.3)) * c;
      n.accel.y -= (b / (a + 0.3)) * d;
    }
    let reflectCollide = (wall, bounce) => {
      if (bounce.type === "crasher") return;
      if (bounce.team === wall.team && bounce.type === "tank") return;
      if (
        bounce.x + bounce.size < wall.x - wall.size ||
        bounce.x - bounce.size > wall.x + wall.size ||
        bounce.y + bounce.size < wall.y - wall.size ||
        bounce.y - bounce.size > wall.y + wall.size
      )
        return 0;
      if (wall.intangibility) return 0;
      let bounceBy =
        bounce.type === "tank" ? 1 : bounce.type === "miniboss" ? 2.5 : 0.1;
      let left = bounce.x < wall.x - wall.size;
      let right = bounce.x > wall.x + wall.size;
      let top = bounce.y < wall.y - wall.size;
      let bottom = bounce.y > wall.y + wall.size;
      let leftExposed = bounce.x - bounce.size < wall.x - wall.size;
      let rightExposed = bounce.x + bounce.size > wall.x + wall.size;
      let topExposed = bounce.y - bounce.size < wall.y - wall.size;
      let bottomExposed = bounce.y + bounce.size > wall.y + wall.size;
      let intersected = true;
      if (left && right) {
        left = right = false;
      }
      if (top && bottom) {
        top = bottom = false;
      }
      if (leftExposed && rightExposed) {
        leftExposed = rightExposed = false;
      }
      if (topExposed && bottomExposed) {
        topExposed = bottomExposed = false;
      }
      if (
        (left && !top && !bottom) ||
        (leftExposed && !topExposed && !bottomExposed)
      ) {
        bounce.accel.x -=
          (bounce.x + bounce.size - wall.x + wall.size) * bounceBy;
      } else if (
        (right && !top && !bottom) ||
        (rightExposed && !topExposed && !bottomExposed)
      ) {
        bounce.accel.x -=
          (bounce.x - bounce.size - wall.x - wall.size) * bounceBy;
      } else if (
        (top && !left && !right) ||
        (topExposed && !leftExposed && !rightExposed)
      ) {
        bounce.accel.y -=
          (bounce.y + bounce.size - wall.y + wall.size) * bounceBy;
      } else if (
        (bottom && !left && !right) ||
        (bottomExposed && !leftExposed && !rightExposed)
      ) {
        bounce.accel.y -=
          (bounce.y - bounce.size - wall.y - wall.size) * bounceBy;
      } else {
        let x = leftExposed ? -wall.size : rightExposed ? wall.size : 0;
        let y = topExposed ? -wall.size : bottomExposed ? wall.size : 0;
        let point = new Vector(wall.x + x - bounce.x, wall.y + y - bounce.y);
        if (!x || !y) {
          if (bounce.x + bounce.y < wall.x + wall.y) {
            if (bounce.x - bounce.y < wall.x - wall.y) {
              bounce.accel.x -=
                (bounce.x + bounce.size - wall.x + wall.size) * bounceBy;
            } else {
              bounce.accel.y -=
                (bounce.y + bounce.size - wall.y + wall.size) * bounceBy;
            }
          } else {
            if (bounce.x - bounce.y < wall.x - wall.y) {
              bounce.accel.y -=
                (bounce.y - bounce.size - wall.y - wall.size) * bounceBy;
            } else {
              bounce.accel.x -=
                (bounce.x - bounce.size - wall.x - wall.size) * bounceBy;
            }
          }
        } else if (!(left || right || top || bottom)) {
          let force = ((bounce.size / point.length - 1) * bounceBy) / 2;
          bounce.accel.x += point.x * force;
          bounce.accel.y += point.y * force;
        } else if (point.isShorterThan(bounce.size)) {
          let force = ((bounce.size / point.length - 1) * bounceBy) / 2;
          bounce.accel.x -= point.x * force;
          bounce.accel.y -= point.y * force;
        } else {
          intersected = false;
        }
      }
      if (intersected) {
        bounce.collisionArray.push(wall);
        if (bounce.type !== "tank" && bounce.type !== "miniboss") bounce.kill();
      }
    };

    function firmcollide(my, n, buffer = 0) {
      let item1 = {
        x: my.x + my.m_x,
        y: my.y + my.m_y,
      };
      let item2 = {
        x: n.x + n.m_x,
        y: n.y + n.m_y,
      };
      let dist = util.getDistance(item1, item2);
      let s1 = Math.max(my.velocity.length, my.topSpeed);
      let s2 = Math.max(n.velocity.length, n.topSpeed);
      let strike1, strike2;
      if (buffer > 0 && dist <= my.realSize + n.realSize + buffer) {
        let repel =
          ((my.acceleration + n.acceleration) *
            (my.realSize + n.realSize + buffer - dist)) /
          buffer /
          roomSpeed;
        my.accel.x += (repel * (item1.x - item2.x)) / dist;
        my.accel.y += (repel * (item1.y - item2.y)) / dist;
        n.accel.x -= (repel * (item1.x - item2.x)) / dist;
        n.accel.y -= (repel * (item1.y - item2.y)) / dist;
      }
      while (dist <= my.realSize + n.realSize && !(strike1 && strike2)) {
        strike1 = false;
        strike2 = false;
        if (my.velocity.length <= s1) {
          my.velocity.x -= (0.05 * (item2.x - item1.x)) / dist / roomSpeed;
          my.velocity.y -= (0.05 * (item2.y - item1.y)) / dist / roomSpeed;
        } else {
          strike1 = true;
        }
        if (n.velocity.length <= s2) {
          n.velocity.x += (0.05 * (item2.x - item1.x)) / dist / roomSpeed;
          n.velocity.y += (0.05 * (item2.y - item1.y)) / dist / roomSpeed;
        } else {
          strike2 = true;
        }
        item1 = {
          x: my.x + my.m_x,
          y: my.y + my.m_y,
        };
        item2 = {
          x: n.x + n.m_x,
          y: n.y + n.m_y,
        };
        dist = util.getDistance(item1, item2);
      }
    }

    function reflectcollide(wall, bounce) {
      let delt = new Vector(wall.x - bounce.x, wall.y - bounce.y);
      let dist = delt.length;
      let diff = wall.size + bounce.size - dist;
      if (diff > 0) {
        bounce.accel.x -= (diff * delt.x) / dist;
        bounce.accel.y -= (diff * delt.y) / dist;
        return 1;
      }
      return 0;
    }

    function advancedcollide(
      my,
      n,
      doDamage,
      doInelastic,
      nIsFirmCollide = false
    ) {
      let tock = Math.min(my.stepRemaining, n.stepRemaining),
        combinedRadius = n.size + my.size,
        motion = {
          _me: new Vector(my.m_x, my.m_y),
          _n: new Vector(n.m_x, n.m_y),
        },
        delt = new Vector(
          tock * (motion._me.x - motion._n.x),
          tock * (motion._me.y - motion._n.y)
        ),
        diff = new Vector(my.x - n.x, my.y - n.y),
        dir = new Vector(
          (n.x - my.x) / diff.length,
          (n.y - my.y) / diff.length
        ),
        component = Math.max(0, dir.x * delt.x + dir.y * delt.y);
      if (component >= diff.length - combinedRadius) {
        let goahead = false,
          tmin = 1 - tock,
          tmax = 1,
          A = Math.pow(delt.x, 2) + Math.pow(delt.y, 2),
          B = 2 * delt.x * diff.x + 2 * delt.y * diff.y,
          C =
            Math.pow(diff.x, 2) +
            Math.pow(diff.y, 2) -
            Math.pow(combinedRadius, 2),
          det = B * B - 4 * A * C,
          t;
        if (!A || det < 0 || C < 0) {
          t = 0;
          if (C < 0) {
            goahead = true;
          }
        } else {
          let t1 = (-B - Math.sqrt(det)) / (2 * A),
            t2 = (-B + Math.sqrt(det)) / (2 * A);
          if (t1 < tmin || t1 > tmax) {
            if (t2 < tmin || t2 > tmax) {
              t = false;
            } else {
              t = t2;
              goahead = true;
            }
          } else {
            if (t2 >= tmin && t2 <= tmax) {
              t = Math.min(t1, t2);
              goahead = true;
            } else {
              t = t1;
              goahead = true;
            }
          }
        }
        if (goahead) {
          my.collisionArray.push(n);
          n.collisionArray.push(my);
          if (t) {
            my.x += motion._me.x * t;
            my.y += motion._me.y * t;
            n.x += motion._n.x * t;
            n.y += motion._n.y * t;
            my.stepRemaining -= t;
            n.stepRemaining -= t;
            diff = new Vector(my.x - n.x, my.y - n.y);
            dir = new Vector(
              (n.x - my.x) / diff.length,
              (n.y - my.y) / diff.length
            );
            component = Math.max(0, dir.x * delt.x + dir.y * delt.y);
          }
          let componentNorm = component / delt.length;
          let reductionFactor = 1,
            deathFactor = {
              _me: 1,
              _n: 1,
            },
            accelerationFactor = delt.length
              ? combinedRadius /
                4 /
                (Math.floor(combinedRadius / delt.length) + 1)
              : 0.001,
            depth = {
              _me: util.clamp(
                (combinedRadius - diff.length) / (2 * my.size),
                0,
                1
              ),
              _n: util.clamp(
                (combinedRadius - diff.length) / (2 * n.size),
                0,
                1
              ),
            },
            combinedDepth = {
              up: depth._me * depth._n,
              down: (1 - depth._me) * (1 - depth._n),
            },
            pen = {
              _me: {
                sqr: Math.pow(my.penetration, 2),
                sqrt: Math.sqrt(my.penetration),
              },
              _n: {
                sqr: Math.pow(n.penetration, 2),
                sqrt: Math.sqrt(n.penetration),
              },
            },
            savedHealthRatio = {
              _me: my.health.ratio,
              _n: n.health.ratio,
            };
          if (doDamage) {
            let speedFactor = {
              _me: my.maxSpeed
                ? Math.pow(motion._me.length / my.maxSpeed, 0.25)
                : 1,
              _n: n.maxSpeed
                ? Math.pow(motion._n.length / n.maxSpeed, 0.25)
                : 1,
            };
            let bail = false;
            if (
              my.shape === n.shape &&
              my.settings.isNecromancer &&
              n.type === "food"
            ) {
              bail = my.necro(n);
            } else if (
              my.shape === n.shape &&
              n.settings.isNecromancer &&
              my.type === "food"
            ) {
              bail = n.necro(my);
            }
            if (!bail) {
              let resistDiff = my.health.resist - n.health.resist,
                damage = {
                  _me:
                    c2.DAMAGE_CONSTANT *
                    my.damage *
                    (1 + resistDiff) *
                    (1 +
                      n.heteroMultiplier *
                        (my.settings.damageClass === n.settings.damageClass)) *
                    (my.settings.buffVsFood && n.settings.damageType === 1
                      ? 3
                      : 1) *
                    my.damageMultiplier() *
                    Math.min(2, Math.max(speedFactor._me, 1) * speedFactor._me),
                  _n:
                    c2.DAMAGE_CONSTANT *
                    n.damage *
                    (1 - resistDiff) *
                    (1 +
                      my.heteroMultiplier *
                        (my.settings.damageClass === n.settings.damageClass)) *
                    (n.settings.buffVsFood && my.settings.damageType === 1
                      ? 3
                      : 1) *
                    n.damageMultiplier() *
                    Math.min(2, Math.max(speedFactor._n, 1) * speedFactor._n),
                };
              if (my.settings.ratioEffects) {
                damage._me *= Math.min(
                  1,
                  Math.pow(
                    Math.max(my.health.ratio, my.shield.ratio),
                    1 / my.penetration
                  )
                );
              }
              if (n.settings.ratioEffects) {
                damage._n *= Math.min(
                  1,
                  Math.pow(
                    Math.max(n.health.ratio, n.shield.ratio),
                    1 / n.penetration
                  )
                );
              }
              if (my.settings.damageEffects) {
                damage._me *=
                  (accelerationFactor *
                    (1 +
                      ((componentNorm - 1) * (1 - depth._n)) / my.penetration) *
                    (1 + pen._n.sqrt * depth._n - depth._n)) /
                  pen._n.sqrt;
              }
              if (n.settings.damageEffects) {
                damage._n *=
                  (accelerationFactor *
                    (1 +
                      ((componentNorm - 1) * (1 - depth._me)) / n.penetration) *
                    (1 + pen._me.sqrt * depth._me - depth._me)) /
                  pen._me.sqrt;
              }
              let damageToApply = {
                _me: damage._me,
                _n: damage._n,
              };
              if (n.shield.max) {
                damageToApply._me -= n.shield.getDamage(damageToApply._me);
              }
              if (my.shield.max) {
                damageToApply._n -= my.shield.getDamage(damageToApply._n);
              }
              let stuff = my.health.getDamage(damageToApply._n, false);
              deathFactor._me =
                stuff > my.health.amount ? my.health.amount / stuff : 1;
              stuff = n.health.getDamage(damageToApply._me, false);
              deathFactor._n =
                stuff > n.health.amount ? n.health.amount / stuff : 1;
              reductionFactor = Math.min(deathFactor._me, deathFactor._n);
              if (
                (my.master.collisionToggle !== true &&
                  n.master.collisionToggle !== true &&
                  my.collisionToggle !== true &&
                  n.collisionToggle !== true) ||
                n.type == ""
              ) {
                my.damageRecieved += damage._n * deathFactor._n;
                n.damageRecieved += damage._me * deathFactor._me;
              }
            }
            if (n.poison) {
              my.poisoned = true;
              my.poisonedLevel = n.poisionToApply;
              my.poisonTime = 20;
              my.poisonedBy = n.master;
            }
            if (my.poison) {
              n.poisoned = true;
              n.poisonedLevel = my.poisionToApply;
              n.poisonTime = 20;
              n.poisonedBy = my.master;
            }
            if (n.freeze) {
              my.frozen = true;
              my.freezeLevel = n.freezeToApply;
              my.freezeTime = 20;
              my.frozenBy = n.master;
            }
            if (my.freeze) {
              n.frozen = true;
              n.freezeLevel = my.freezeToApply;
              n.freezeTime = 20;
              n.frozenBy = my.master;
            }
          }
          if (nIsFirmCollide < 0) {
            nIsFirmCollide *= -0.5;
            my.accel.x -= nIsFirmCollide * component * dir.x;
            my.accel.y -= nIsFirmCollide * component * dir.y;
            n.accel.x += nIsFirmCollide * component * dir.x;
            n.accel.y += nIsFirmCollide * component * dir.y;
          } else if (nIsFirmCollide > 0) {
            n.accel.x +=
              nIsFirmCollide * (component * dir.x + combinedDepth.up);
            n.accel.y +=
              nIsFirmCollide * (component * dir.y + combinedDepth.up);
          } else {
            let elasticity =
              2 - (4 * Math.atan(my.penetration * n.penetration)) / Math.PI;
            if (
              doInelastic &&
              my.settings.motionEffects &&
              n.settings.motionEffects
            ) {
              elasticity *=
                savedHealthRatio._me / pen._me.sqrt +
                savedHealthRatio._n / pen._n.sqrt;
            } else {
              elasticity *= 2;
            }
            let spring =
                (2 * Math.sqrt(savedHealthRatio._me * savedHealthRatio._n)) /
                roomSpeed,
              elasticImpulse =
                (Math.pow(combinedDepth.down, 2) *
                  elasticity *
                  component *
                  my.mass *
                  n.mass) /
                (my.mass + n.mass),
              springImpulse = c2.KNOCKBACK_CONSTANT * spring * combinedDepth.up,
              impulse =
                -(elasticImpulse + springImpulse) *
                (1 - my.intangibility) *
                (1 - n.intangibility),
              force = {
                x: impulse * dir.x,
                y: impulse * dir.y,
              },
              modifiers = {
                _me:
                  ((c2.KNOCKBACK_CONSTANT * my.pushability) / my.mass) *
                  deathFactor._n,
                _n:
                  ((c2.KNOCKBACK_CONSTANT * n.pushability) / n.mass) *
                  deathFactor._me,
              };
            my.accel.x += modifiers._me * force.x;
            my.accel.y += modifiers._me * force.y;
            n.accel.x -= modifiers._n * force.x;
            n.accel.y -= modifiers._n * force.y;
          }
        }
      }
    }
    return (collision) => {
      let instance = collision[0],
        other = collision[1];
      if (other.isGhost) {
        util.error("GHOST FOUND");
        util.error(other.label);
        util.error("x: " + other.x + " y: " + other.y);
        util.error(other.collisionArray);
        util.error("health: " + other.health.amount);
        util.warn("Ghost removed.");
        if (grid.checkIfInHSHG(other)) {
          util.warn("Ghost removed.");
          grid.removeObject(other);
        }
        return 0;
      }
      if (instance.isGhost) {
        util.error("GHOST FOUND");
        util.error(instance.label);
        util.error("x: " + instance.x + " y: " + instance.y);
        util.error(instance.collisionArray);
        util.error("health: " + instance.health.amount);
        if (grid.checkIfInHSHG(instance)) {
          util.warn("Ghost removed.");
          grid.removeObject(instance);
        }
        return 0;
      }
      if (!instance.activation.check() && !other.activation.check()) {
        util.warn("Tried to collide with an inactive instance.");
        return 0;
      }
      if (instance.type === "maze" || other.type === "maze") {
        if (instance.type === "maze" && other.type === "maze") return;
        if (
          instance.collisonOverride === true ||
          other.collisonOverride === true
        )
          return;
        let wall = instance.type === "maze" ? instance : other;
        let entity = instance.type === "maze" ? other : instance;
        if (wall.shape === 4) {
          reflectCollide(wall, entity);
        } else {
          let a =
            entity.type === "bullet"
              ? 1 + 10 / (entity.velocity.length + 10)
              : 1;
          advancedcollide(wall, entity, false, false, a);
        }
      } else if (
        instance.master.collisionToggle !== true &&
        other.master.collisionToggle !== true &&
        instance.collisionToggle !== true &&
        other.collisionToggle !== true
      ) {
        if (
          (instance.type === "crasher" && other.type === "food") ||
          (other.type === "crasher" && instance.type === "food")
        ) {
          firmcollide(instance, other);
        } else if (instance.team !== other.team) {
          advancedcollide(instance, other, true, true);
        } else if (
          instance.settings.hitsOwnType == "never" ||
          other.settings.hitsOwnType == "never"
        ) {
        } else if (
          instance.settings.hitsOwnType === other.settings.hitsOwnType
        ) {
          switch (instance.settings.hitsOwnType) {
            case "push":
              advancedcollide(instance, other, false, false);
              break;
            case "hardOnlyTanks":
              if (
                instance.type === "tank" &&
                other.type === "tank" &&
                !instance.isDominator &&
                !other.isDominator
              )
                firmcollide(instance, other);
              break;
            case "hard":
              firmcollide(instance, other);
              break;
            case "hardWithBuffer":
              firmcollide(instance, other, 30);
              break;
            case "repel":
              simplecollide(instance, other);
              break;
          }
        }
      }
    };
  })();

  function entitiesactivationloop(my) {
    my.collisionArray = [];
    my.activation.update();
    my.updateAABB(my.activation.check());
  }

  function entitiesliveloop(my) {
    if (my.contemplationOfMortality()) my.destroy();
    else {
      if (my.bond == null) {
        logs.physics.set();
        my.physics();
        logs.physics.mark();
      }
      if (my.activation.check()) {
        logs.entities.tally();
        logs.life.set();
        my.life();
        logs.life.mark();
        my.friction();
        poison(my);
        my.confinementToTheseEarthlyShackles();
        logs.selfie.set();
        my.takeSelfie();
        logs.selfie.mark();
      }
    }
    my.collisionArray = [];
  }
  let time;
  return () => {
    logs.loops.tally();
    logs.master.set();
    logs.activation.set();
    entities.forEach((e) => entitiesactivationloop(e));
    logs.activation.mark();
    logs.collide.set();
    if (entities.length > 1) {
      grid.update();
      grid.queryForCollisionPairs().forEach((collision) => collide(collision));
    }
    logs.collide.mark();
    logs.entities.set();
    entities.forEach((e) => entitiesliveloop(e));
    logs.entities.mark();
    logs.master.mark();
    purgeEntities();
    room.lastCycle = util.time();
  };
})();

function poison(element) {
  entities.forEach(function (element) {
    let random = Math.random();
    if (element.showpoison && random > 0.997) {
      let x = element.size + 10;
      let y = element.size + 10;
      Math.random() < 0.5 ? (x *= 0) : x;
      Math.random() < 0.5 ? (y *= 0) : y;
      Math.random() < 0.5 ? (x *= Math.random() + 1) : x;
      Math.random() < 0.5 ? (y *= Math.random() + 1) : y;
      var o = new Entity({
        x: element.x + x,
        y: element.y + y,
      });
      o.define(Class["fireEffect1"]);
    }
    if (element.poisoned) {
      if (random > 0.997) {
        let x = element.size + 10;
        let y = element.size + 10;
        Math.random() < 0.5 ? (x *= 0) : x;
        Math.random() < 0.5 ? (y *= 0) : y;
        Math.random() < 0.5 ? (x *= Math.random() + 1) : x;
        Math.random() < 0.5 ? (y *= Math.random() + 1) : y;
        var o = new Entity({
          x: element.x + x,
          y: element.y + y,
        });
        this.bulletInit(o);
        o.coreSize = o.SIZE;
        o.define(Class["fireEffect1"]);
      }
      if (element.poisonSpeed <= random) {
        if (element.poisonimmune == true) {
          element.poisoned = false;
        } else {
          var poisondeath = 1;
          if (element.health.amount <= 0) {
            poisondeath = 0;
          }
          if (
            !element.invuln &&
            element.health.amount >
              element.health.max / (55 - element.poisonLevel)
          ) {
            element.health.amount -=
              element.health.max / (55 - element.poisonLevel);
            element.shield.amount -=
              element.shield.max / (35 - element.poisonLevel);
          }
        }
        element.poisonTime -= 1;
        if (element.poisonTime <= 0) element.poisoned = false;
        if (
          poisondeath == 1 &&
          element.health.amount <= 0 &&
          element.poisonedBy != undefined &&
          element.poisonedBy.skill != undefined
        ) {
          element.poisonedBy.skill.score += Math.ceil(
            util.getJackpot(element.poisonedBy.skill.score)
          );
          element.poisonedBy.sendMessage(
            "You killed " + element.name + " with poison."
          );
          element.sendMessage(
            "You have been killed by " +
              element.poisonedBy.name +
              " with poison."
          );
        }
      }
    }
  });
}
     var purpleLoop = (() => {
       function purpleShade(my) {
         let purpleShade = [
           '#837a86', '#86738d', '#896d93', '#8d6699', '#9060a0', '#935aa6', '#9653ac',
           '#994db3', '#9c46b9', '#a040c0', '#a33ac6', '#a633cc', '#a92dd3', '#ac26d9',
           '#af20df', '#b21ae6', '#b613ec', '#b90df2', '#bc06f9', '#bf00ff', '#b500f2',
           '#ac00e6', '#a200d9', '#9900cc', '#8f00bf', '#8600b3', '#7c00a6', '#730099',
           '#69008c', '#600080', '#560073', '#4c0066', '#430059', '#39004d', '#300040'
         ];
         entities.forEach(function (element) {
           if (element.lul === true) {
             if (
               purpleShade.indexOf(element.nameColor) === -1
             ) {
               element.nameColor = '#837a86';
             } else {
             if (element.purpleReverse == false) {
               element.nameColor = purpleShade[
                 purpleShade.indexOf(element.nameColor) + 1
               ];
             } else {
               element.nameColor = purpleShade[purpleShade.indexOf(element.nameColor) - 1];
             }
           }
           if (element.nameColor === '#837a86') {
             element.purpleReverse = false;
           } else
           if (element.nameColor === '#300040') {
             element.purpleReverse = true;
           }
        }
      });
    }
    return () => {
      purpleShade();
    };
  })();
     var rainbowNamLoop = (() => {
       function rainbow(my) {
         let rainbowr = [
           "#FF0000","#FF1A00","#FF2A00","#FF4300","#FF5D00","#FF7200","#FF7700","#FF9400",
           "#FF9900","#FFA500","#FFBB00","#FFCC00","#FFDD00","#FFE900","#FFFA00","#EEFF00",
           "#DDFF00","#D0FF00","#B6FF00","#AAFF00","#88FF00","#6EFF00","#54FF00","#32FF00",
           "#19FF00","#04FF00","#00FF15","#00FF26","#00FF3F","#00FF55","#00FF6E","#00FF7F",
           "#00FF99","#00FFA5","#00FFBB","#00FFCB","#00FFD8","#00FFED","#00FFFA","#00E9FF",
           "#00D8FF","#00C3FF","#00BBFF","#00AEFF","#00A1FF","#0090FF","#007FFF","#0077FF",
           "#006EFF","#005DFF","#0048FF","#0037FF","#0026FF","#0019FF","#0004FF","#0C00FF",
           "#2200FF","#2E00FF","#3B00FF","#5400FF","#6A00FF","#7F00FF","#9000FF","#A100FF",
           "#B600FF","#BF00FF","#D000FF","#DC00FF","#E900FF","#FA00FF","#FF00F6","#FF00E1",
           "#FF00CB","#FF00B6","#FF00AA","#FF00A5","#FF0090","#FF007B","#FF006E","#FF005D",
           "#FF0059","#FF0043","#FF003B","#FF0026","#FF001D","#FF000C",
         ];
         entities.forEach(function (element) {
           if (element.lul2 === true) {
             if (
               rainbowr.indexOf(element.nameColor) === -1
             ) {
               element.nameColor = '#FF0000';
             } else {
             if (element.rainReverse == false) {
               element.nameColor = rainbowr[
                 rainbowr.indexOf(element.nameColor) + 1
               ];
             } else {
               element.nameColor = rainbowr[rainbowr.indexOf(element.nameColor) - 1];
             }
           }
           if (element.nameColor === '#FF0000') {
             element.rainReverse = false;
           } else
           if (element.nameColor === '#FF000C') {
             element.rainReverse = true;
           }
        }
      });
    }
    return () => {
      rainbow();
    };
  })();
var funloop = (() => {
  function rainbow(my) {
    let rainbow = [
      100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114,
      115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129,
      130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144,
      145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159,
      160, 161, 162, 163, 164, 165, 166, 167, 169, 170, 171, 172, 173, 174, 175,
      176, 177, 178, 179, 180, 181, 182, 183, 184, 185,
    ];
    entities.forEach(function (element) {
      if (element.rainbow) {
        if (
          rainbow.indexOf(element.color) == -1 ||
          element.color == undefined
        ) {
          element.color = 100;
        } else {
          if (element.rainbowReverse == false) {
            element.color = rainbow[rainbow.indexOf(element.color) + 1];
          } else {
            element.color = rainbow[rainbow.indexOf(element.color) - 1];
          }
        }
        if (element.color == 185) {
          element.rainbowReverse = true;
        }
        if (element.color == 100) {
          element.rainbowReverse = false;
        }
      }
    });
  }
  return () => {
    rainbow();
  };
})();
var maintainloop = (() => {
    // Place obstacles
    function placeRoids() {
        function placeRoid(type, entityClass) {
            let x = 0;
            let position;
            do { position = room.randomType(type);
                x++;
                if (x>200) { util.warn("Could not place some roids."); return 0; }
            } while (dirtyCheck(position, 10 + entityClass.SIZE));
            let o = new Entity(position);
                o.define(entityClass);
                o.team = -101;
                o.facing = ran.randomAngle();
                o.protect();
                o.life();
                o.alpha = 1;
        }
        let roidcount = room.roid.length * room.width * room.height / room.xgrid / room.ygrid / 150000 / 1.5;
        let rockcount = room.rock.length * room.width * room.height / room.xgrid / room.ygrid / 300000 / 1.5;
        let count = 0;
        for (let i=Math.ceil(roidcount); i; i--) { count++; placeRoid('roid', Class.obstacle); }
        for (let i=Math.ceil(roidcount * 0.3); i; i--) { count++; placeRoid('roid', Class.babyObstacle); }
        for (let i=Math.ceil(rockcount * 0.8); i; i--) { count++; placeRoid('rock', Class.obstacle); }
        for (let i=Math.ceil(rockcount * 0.5); i; i--) { count++; placeRoid('rock', Class.babyObstacle); }
        if(c.RANDOM_ROIDS){
          for (let i=Math.ceil(roidcount * 5); i; i--) { count++; placeRoid('norm', Class.obstacle); }
        }
        util.log('Placing ' + count + ' obstacles!');
    }
    placeRoids();
  let locsToAvoid = ["nest", "port"];
  for (let i = 1; i < 5; i++)
    locsToAvoid.push("bas" + i), locsToAvoid.push("bap" + i);
  let activeLocsThatWeCantPlaceIn = 0;

  function generateMaze(size) {
    let maze = JSON.parse(
      JSON.stringify(Array(size).fill(Array(size).fill(true)))
    );
    maze[0] = Array(size).fill(false);
    maze[size - 1] = Array(size).fill(false);
    maze[Math.floor(size * 0.15)] = [
      true,
      true,
      true,
      true,
      true,
      true,
      ...Array(size - 12).fill(false),
      true,
      true,
      true,
      true,
      true,
      true,
    ];
    maze[size - Math.floor(size * 0.15)] = [
      true,
      true,
      true,
      true,
      true,
      true,
      ...Array(size - 12).fill(false),
      true,
      true,
      true,
      true,
      true,
      true,
    ];
    maze[Math.floor(size * 0.5)] = Array(size).fill(false);
    let e = 0.25;
    let d = 0.4;
    maze[Math.floor(size * e)] = Array(size).fill(false);
    maze[Math.floor(size * (1 - e))] = Array(size).fill(false);
    maze[Math.floor(size * d)] = Array(size).fill(false);
    maze[Math.floor(size * (1 - d))] = Array(size).fill(false);
    for (let line of maze) {
      let i = maze.indexOf(line);
      line[0] = 0;
      line[size - 1] = 0;
      if (i > 6 && i < size - 6) line[Math.floor(size * 0.15)] = false;
      if (i > 6 && i < size - 6) line[size - Math.floor(size * 0.15)] = false;
      if (i > 6 && i < size - 6) line[Math.floor(size * e)] = false;
      if (i > 6 && i < size - 6) line[Math.floor(size * (1 - e))] = false;
      if (i > 6 && i < size - 6) line[Math.floor(size * d)] = false;
      if (i > 6 && i < size - 6) line[Math.floor(size * (1 - d))] = false;
      line[Math.floor(size * 0.5)] = false;
    }
    let center = Math.floor(size * (size === 16 ? 0.4 : 0.5));
    for (let x = 0; x < Math.floor(size * 0.1); x++)
      for (let y = 0; y < Math.floor(size * 0.1); y++) {
        maze[center + x][center + y] = false;
        maze[center - x][center - y] = false;
        maze[center + x][center - y] = false;
        maze[center - x][center + y] = false;
      }
    let cells = 0;
    for (let row of maze) for (let cell of row) if (cell) cells++;
    let eroded = 0;
    let toErode = cells * 0.55;
    toErode -= activeLocsThatWeCantPlaceIn * 10;
    for (let i = 0; i < toErode; i++) {
      if (eroded >= toErode) {
        console.log("Done!");
        break;
      }
      for (let i = 0; i < 1e4; i++) {
        let x = Math.floor(Math.random() * size);
        let y = Math.floor(Math.random() * size);
        if (maze[x][y]) continue;
        if ((x === 0 || x === size - 1) && (y === 0 || y === size - 1))
          continue;
        let direction = Math.floor(Math.random() * 4);
        if (x === 0) direction = 0;
        else if (y === 0) direction = 1;
        else if (x === size - 1) direction = 2;
        else if (y === size - 1) direction = 3;
        let tx = direction === 0 ? x + 1 : direction === 2 ? x - 1 : x;
        let ty = direction === 1 ? y + 1 : direction === 3 ? y - 1 : y;
        if (maze[tx][ty] !== true) continue;
        maze[tx][ty] = false;
        eroded++;
        break;
      }
    }
    if (eroded) {
      for (let x = 0; x < size - 1; x++)
        for (let y = 0; y < size - 1; y++)
          if (
            maze[x][y] &&
            maze[x + 1][y] &&
            maze[x + 2][y] &&
            maze[x][y + 1] &&
            maze[x][y + 2] &&
            maze[x + 1][y + 2] &&
            maze[x + 2][y + 1] &&
            maze[x + 1][y + 1] &&
            maze[x + 2][y + 2]
          ) {
            maze[x][y] = 3;
            maze[x + 1][y] = false;
            maze[x][y + 1] = false;
            maze[x + 2][y] = false;
            maze[x][y + 2] = false;
            maze[x + 2][y + 1] = false;
            maze[x + 1][y + 2] = false;
            maze[x + 1][y + 1] = false;
            maze[x + 2][y + 2] = false;
          } else if (
            maze[x][y] &&
            maze[x + 1][y] &&
            maze[x][y + 1] &&
            maze[x + 1][y + 1]
          ) {
            maze[x][y] = 2;
            maze[x + 1][y] = false;
            maze[x][y + 1] = false;
            maze[x + 1][y + 1] = false;
          }
      for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
          let spawnWall = true;
          let d = {};
          let scale = room.width / size;
          if (maze[x][y] === 3)
            d = {
              x: x * scale + scale * 1.5,
              y: y * scale + scale * 1.5,
              s: scale * 3,
              sS: 5,
            };
          else if (maze[x][y] === 2)
            d = {
              x: x * scale + scale,
              y: y * scale + scale,
              s: scale * 2,
              sS: 2.5,
            };
          else if (maze[x][y])
            d = {
              x: x * scale + scale * 0.5,
              y: y * scale + scale * 0.5,
              s: scale,
              sS: 1,
            };
          else spawnWall = false;
          if (spawnWall) {
            let o = new Entity({
              x: d.x,
              y: d.y,
            });
            o.define(Class.mazeWall);
            o.SIZE = d.s * 0.5 + d.sS;
            o.team = -101;
            o.protect();
            o.life();
            let validSpawn = true;
            for (let loc of locsToAvoid)
              if (
                room.isIn(
                  loc,
                  {
                    x: d.x,
                    y: d.y,
                  },
                  true
                )
              )
                validSpawn = false;
            if (!validSpawn) o.kill();
          }
        }
      }
    }
  }
  if (c.MAZE) generateMaze(c.MAZE);
  let spawnBosses = (() => {
    let timer = 0;
    let boss = (() => {
      let i = 0,
        names = [],
        bois = [Class.egg],
        n = 0,
        begin = "yo some shit is about to move to a lower position",
        arrival =
          "Something happened lol u should probably let Neph know this broke",
        loc = "norm";
      let spawn = () => {
        let spot,
          m = 0;
        do {
          spot = room.randomType(loc);
          m++;
        } while (dirtyCheck(spot, 500) && m < 30);
        let o = new Entity(spot);
        o.define(ran.choose(bois));
        o.team = -100;
        o.name = names[i++];
      };
      return {
        prepareToSpawn: (
          classArray,
          number,
          nameClass,
          typeOfLocation = "norm"
        ) => {
          n = number;
          bois = classArray;
          loc = typeOfLocation;
          names = ran.chooseBossName(nameClass, number);
          i = 0;
          if (n === 1) {
            begin = "A boss is summoning!";
            arrival = names[0] + " has arrived.";
          } else {
            begin = "Summons are coming.";
            arrival = "";
            for (let i = 0; i < n - 2; i++) arrival += names[i] + ", ";
            arrival +=
              names[n - 2] + " and " + names[n - 1] + " have appeared.";
          }
        },
        spawn: () => {
          sockets.broadcast(begin);
          for (let i = 0; i < n; i++) {
            setTimeout(spawn, ran.randomRange(3500, 5e3));
          }
          setTimeout(() => sockets.broadcast(arrival), 5e3);
          util.log("[SPAWN] " + arrival);
        },
      };
    })();
    return (census) => {
      if (timer > 600 && ran.dice(600 - timer)) {
        util.log("[SPAWN] Preparing to spawn...");
        timer = 0;
        let choice = [];
        switch (ran.chooseChance(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13)) {
          case 0:
            choice = [
              [
                Class.elite_spawner,
                Class.elite_destroyer,
                Class.elite_gunner,
                Class.elite_sprayer,
                Class.elite_battleship,
              ],
              1,
              "a",
              "nest",
            ];
            break;
          case 1:
            choice = [
              [
                Class.palisade,
                Class.skimboss,
                Class.summoner,
                Class.nestKeeper,
              ],
              1,
              "castle",
              "norm",
            ];
            sockets.broadcast("A strange trembling...");
            break;
          case 2:
            choice = [
              [
                Class.elite_destroyer,
                Class.elite_gunner,
                Class.elite_sprayer,
                Class.elite_battleship,
              ],
              2,
              "a",
              "nest",
            ];
            break;
          case 3:
            choice = [
              [
                Class.palisade,
                Class.skimboss,
                Class.summoner,
                Class.nestKeeper,
                Class.eliteCruiser,
                Class.destructor,
              ],
              2,
              "castle",
              "norm",
            ];
            sockets.broadcast("A strange trembling...");
            break;
          case 4:
            choice = [[Class.guardian], 1, "Guardian", "nest",];
            sockets.broadcast("The Guardian of the Pentagons awakens...");
            break;
          case 5:
            choice = [[Class.defender], 1, "Defender", "nest",];
            sockets.broadcast("They thought he would never come back...");
            break;
          case 6:
            choice = [[Class.conjure], 1, "castle", "nest",];
            sockets.broadcast("They say he cheated death...");
            break;
          case 7:
            choice = [[Class.paladin], 1, "Paladin", "nest"];
            sockets.broadcast(
              "purpl_The Polygons will always win..."
            );
            break;
          case 8:
            choice = [[Class.freyja], 1, "Freyja", "nest"];
            sockets.broadcast(
              "lgreen_All who stand in my way will be defeated!"
            );
            break;
          case 9:
            choice = [[Class.zaphkiel], 1, "Zaphkiel", "nest"];
            sockets.broadcast(
              "orange_Don't resist. You're just delaying the inevitable"
            );
            break;
          case 10:
            choice = [[Class.cronus], 1, "Cronus", "nest"];
            sockets.broadcast(
              "white_Do you mortals enjoy going through hell?"
            );
            break;
          case 11:
            choice = [[Class.uriel], 1, "Uriel", "nest"];
            sockets.broadcast(
              "lpurp_You seem to enjoy being killed over and 𝗼𝘃𝗲𝗿 and 𝗢𝗩𝗘𝗥 again..."
            );
            break;
          case 12:
            choice = [
              [Class.fallenBooster, Class.fallenOverlord],
              1,
              "castle",
              "nest",
            ];
            sockets.broadcast("The universe is fallen...");
            break;
          case 13:
            choice = [[Class.abomination], 1, "testSubj", "norm"];
            sockets.broadcast("An abomination roars in anger...");
            break;
          /*case 14:
            choice = [[Class.helios], 1, "Helios", "norm"];
            sockets.broadcast(
              "meme_You worthless mortals stand no chance against me!"
            );
            break;
          case 15:
            choice = [[Class.kronos], 1, "Kronos", "norm"];
            sockets.broadcast(
              "grey_We are 𝗘𝗧𝗘𝗥𝗡𝗔𝗟!"
            );
            break;
          case 16:
            choice = [[Class.atlas], 1, "Atlas", "norm"];
            sockets.broadcast(
              "green_Ashes to ashes, dust to dust..."
            );
            break;
          case 17:
            choice = [[Class.arkemines], 1, "Arkemines", "norm"];
            sockets.broadcast(
              "blue_The Polygons shall get their way..."
            );
            break;
          case 18:
            choice = [[Class.gaea], 1, "Gaea", "norm"];
            sockets.broadcast(
              "pink_Why do you bother fighting? Just 𝗚𝗜𝗩𝗘 𝗨𝗣!"
            );
            break;*/
        }
        boss.prepareToSpawn(...choice);
        setTimeout(boss.spawn, 3e3);
      } else if (!census.miniboss) timer++;
    };
  })();
  let spawnCrasher = (census) => {
    if (
      ran.chance(
        1 - (0.5 * census.crasher) / (room.maxFood * 200) / room.nestFoodAmount
      )
    ) {
      let spot,
        i = 30;
      do {
        spot = room.randomType("nest");
        i--;
        if (!i) return 0;
      } while (dirtyCheck(spot, 100));
      let type = ran.dice(80)
        ? ran.choose([Class.sentryGun, Class.sentrySwarm, Class.sentryTrap, Class.summoner_lite, Class.defender_lite])
        : Class.crasher;
      let o = new Entity(spot);
      o.define(type);
      o.team = -100;
    }
  };
  let goalWinner = (team) => {
    setTimeout(() => sockets.broadcast(team + " HAS ENDED THE GAME!"), 1e3);
    setTimeout(() => closemode(), 5e3);
  };
  let goal1 = 0;
  let goal2 = 0;
  let bluepoints = goal1;
  let purplepoints = goal2;
  let results = (team) => {
    setTimeout(
      () =>
        sockets.broadcast(
          "BLUE: " + bluepoints + " - " + "PURPLE: " + purplepoints
        ),
      1e3
    );
  };
  let createBall = (loc, team) => {
    let o = new Entity(loc);
    let killers = [];
    for (let instance of o.collisionArray)
      if (instance.team >= -2 && instance.team <= -1)
        killers.push(instance.team);
    let pwned = killers.length ? ran.choose(killers) : 0;
    if (pwned == -1) {
      goal1 = +1;
    }
    if (pwned == -2) {
      goal2 = +1;
    }
    o.define(Class.soccerball);
    o.team = -100;
    o.color = 0;
    o.SIZE = 40;
    o.ondead = () => {
      let broadcastteam = ["purple_PURPLE", "blue_BLUE"][team - 1];
      sockets.broadcast(bluepoints + " - " + purplepoints);
      sockets.broadcast(broadcastteam + " has scored a goal!");
      let a = new Entity(loc);
      let killers = [];
      for (let instance of a.collisionArray)
        if (instance.team >= -2 && instance.team <= -1)
          killers.push(instance.team);
      let pwned = killers.length ? ran.choose(killers) : 0;
      if (pwned == -1) {
        goal1 = +1;
      }
      if (pwned == -2) {
        goal2 = +1;
      }
      a.define(Class.soccerball);
      a.team = -100;
      a.color = 0;
      a.SIZE = 40;
      a.ondead = () => {
        let broadcastteam = ["purple_PURPLE", "blue_BLUE"][team - 1];
        sockets.broadcast(bluepoints + " - " + purplepoints);
        sockets.broadcast(broadcastteam + " has scored a goal!");
        let b = new Entity(loc);
        let killers = [];
        for (let instance of b.collisionArray)
          if (instance.team >= -2 && instance.team <= -1)
            killers.push(instance.team);
        let pwned = killers.length ? ran.choose(killers) : 0;
        if (pwned == -1) {
          goal1 = +1;
        }
        if (pwned == -2) {
          goal2 = +1;
        }
        b.define(Class.soccerball);
        b.team = -100;
        b.color = 0;
        b.SIZE = 40;
        b.ondead = () => {
          let broadcastteam = ["purple_PURPLE", "blue_BLUE"][team - 1];
          sockets.broadcast(bluepoints + " - " + purplepoints);
          sockets.broadcast(broadcastteam + " has scored a goal!");
          let c = new Entity(loc);
          let killers = [];
          for (let instance of c.collisionArray)
            if (instance.team >= -2 && instance.team <= -1)
              killers.push(instance.team);
          let pwned = killers.length ? ran.choose(killers) : 0;
          if (pwned == -1) {
            goal1 = +1;
          }
          if (pwned == -2) {
            goal2 = +1;
          }
          c.define(Class.soccerball);
          c.team = -100;
          c.color = 0;
          c.SIZE = 40;
          o.ondead = () => {
            goalWinner(["purple_PURPLE", "blue_BLUE"][team - 1]);
            results([bluepoints, purplepoints]);
          };
        };
      };
    };
  };
  let teamWon = (team) => {
    setTimeout(() => sockets.broadcast(team + " has won the game!"), 1e3);
    setTimeout(() => closemode(), 5e3);
  };
  var createMom = (loc, team) => {
    let o = new Entity(loc);
    o.define(Class.mothership);
    o.team = -team;
    o.addController(new ioTypes["nearestDifferentMaster", "minion", "botMoving"](o))
    o.color = [10, 11, 12, 15][team - 1];
    o.SIZE = 40;
    o.isMothership = true;
    o.underControl = false;
    o.name = "Mothership";
  };
  let makenpcs = (() => {
    let f = (loc, team) => {
      let o = new Entity(loc);
      o.define(Class.baseDroneSpawner);
      o.team = -team;
      o.color = [10, 11, 12, 15][team - 1];
    };
    for (let i = 1; i < 5; i++) {
      room["bas" + i].forEach((loc) => {
        f(loc, i);
      });
    }
    for (let i = 1; i < 2; i++) {
      room["ball"].forEach((loc) => {
        createBall(loc, i);
      });
    }
    for (let i = 1; i < 5; i++) {
      room["mot" + i].forEach((loc) => {
        createMom(loc, i);
      });
    }
    let maz = (loc, team) => {
      let o = new Entity(loc);
      o.define(Class.mazeWall);
      o.team = -50;
      o.SIZE = 280;
    };
    for (let i = 1; i < 5; i++) {
      room["wall"].forEach((loc) => {
        maz(loc, i);
      });
    }
    let closearenaColor = 12;
    var domTeamB = 1,
      domTeamG = 0,
      domTeamR = 0,
      closed_once = false,
      domTeamP = 0,
      ArenaClosed = false;
    var domTeamB = 0,
      domTeamG = 0,
      domTeamR = 0,
      domTeamP = 0;
    if (room.domC)
      for (let loc of room.domC) {
        let o = new Entity(loc);
        let choose = ran.choose([
          Class.artyDominator,
          Class.gunnerDominator,
          Class.destroyerDominator,
          Class.trapperDominator,
        ]);
        o.define(choose);
        o.isDominator = true
        o.underControl = false
        o.team = -100;
        o.color = 13;
        o.SIZE = 70;
        o.ondead = () => {
          let killers = [];
          for (let instance of o.collisionArray)
            if (instance.team >= -4 && instance.team <= -1)
              killers.push(instance.team);
          let pwned = killers.length ? ran.choose(killers) : 0;
          let n = new Entity(loc);
          n.define(choose);
          let team = pwned ? (pwned = pwned) : (pwned = 0);
          n.team = team || -100;
          n.SIZE = 70;
          if (pwned >= -4 || pwned <= -1) {
            if (pwned == -1) {
              sockets.broadcast(
                "blue_The Center Dominator is now controlled by BLUE",
                closearenaColor
              );
              domTeamB++;
              room.setType("dom1", loc);
              console.log(
                "A Dominator controlled by blue! Blues Dominators count: " +
                  domTeamB,
                closearenaColor
              );
            }
            if (pwned == -2) {
              sockets.broadcast(
                "purple_The Center Dominator is now controlled by PURPLE",
                closearenaColor
              );
              domTeamG++;
              room.setType("dom2", loc);
              console.log(
                "A Dominator controlled by green! Greens Dominators count: " +
                  domTeamG,
                closearenaColor
              );
            }
            if (pwned == -3) {
              sockets.broadcast(
                "red_The Center Dominator is now controlled by RED",
                closearenaColor
              );
              domTeamR++;
              room.setType("dom3", loc);
              console.log(
                "A Dominator controlled by red! Reds Dominators count: " +
                  domTeamR,
                closearenaColor
              );
            }
            if (pwned == -4) {
              sockets.broadcast(
                "green_The Center Dominator is now controlled by GREEN",
                closearenaColor
              );
              domTeamP++;
              room.setType("dom4", loc);
              console.log(
                "A Dominator controlled by purple! Purples Dominators count: " +
                  domTeamP,
                closearenaColor
              );
            }
          }
          n.color = [3, 10, 11, 12, 15][-pwned];
          n.ondead = () => {
            let i = new Entity(loc);
            i.define(choose);
            i.SIZE = 70;
            if (pwned >= -4 || pwned <= -1) {
              if (pwned == -1) {
                domTeamB--;
                console.log(
                  "a Dominator (Blues Dominator) being contested! Blue Dominators counts: " +
                    domTeamB,
                  closearenaColor
                );
              } else if (pwned == -2) {
                domTeamG--;
                console.log(
                  "a Dominator (Greens Dominator) being contested! Green Dominators counts: " +
                    domTeamG,
                  closearenaColor
                );
              } else if (pwned == -3) {
                domTeamR--;
                console.log(
                  "a Dominator (Reds Dominator) being contested! Red Dominators counts: " +
                    domTeamR,
                  closearenaColor
                );
              } else if (pwned == -4) {
                domTeamP--;
                console.log(
                  "a Dominator (Purples Dominator) being contested! Purple Dominators counts: " +
                    domTeamP,
                  closearenaColor
                );
              }
            }
            i.team = 0 || -100;
            sockets.broadcast(
              "yellow_The Center Dominator is being contested",
              closearenaColor
            );
            room.setType("domC", loc);
            i.color = 13;
            i.ondead = o.ondead;
            o = i;
          };
        };
      }
    if (room.domN)
      for (let loc of room.domN) {
        let o = new Entity(loc);
        let choose = ran.choose([
          Class.artyDominator,
          Class.gunnerDominator,
          Class.destroyerDominator,
          Class.trapperDominator,
        ]);
        o.define(choose);
        o.isDominator = true
        o.underControl = false
        o.team = -100;
        o.color = 13;
        o.SIZE = 70;
        o.ondead = () => {
          let killers = [];
          for (let instance of o.collisionArray)
            if (instance.team >= -4 && instance.team <= -1)
              killers.push(instance.team);
          let pwned = killers.length ? ran.choose(killers) : 0;
          let n = new Entity(loc);
          n.define(choose);
          let team = pwned ? (pwned = pwned) : (pwned = 0);
          n.team = team || -100;
          n.SIZE = 70;
          if (pwned >= -4 || pwned <= -1) {
            if (pwned == -1) {
              sockets.broadcast(
                "blue_The Northern Dominator is now controlled by BLUE",
                closearenaColor
              );
              domTeamB++;
              room.setType("dom1", loc);
              console.log(
                "A Dominator controlled by blue! Blues Dominators count: " +
                  domTeamB,
                closearenaColor
              );
            }
            if (pwned == -2) {
              sockets.broadcast(
                "purple_The Northern Dominator is now controlled by PURPLE",
                closearenaColor
              );
              domTeamG++;
              room.setType("dom2", loc);
              console.log(
                "A Dominator controlled by green! Greens Dominators count: " +
                  domTeamG,
                closearenaColor
              );
            }
            if (pwned == -3) {
              sockets.broadcast(
                "red_The Northern Dominator is now controlled by RED",
                closearenaColor
              );
              domTeamR++;
              room.setType("dom3", loc);
              console.log(
                "A Dominator controlled by red! Reds Dominators count: " +
                  domTeamR,
                closearenaColor
              );
            }
            if (pwned == -4) {
              sockets.broadcast(
                "green_The Northern Dominator is now controlled by GREEN",
                closearenaColor
              );
              domTeamP++;
              room.setType("dom4", loc);
              console.log(
                "A Dominator controlled by purple! Purples Dominators count: " +
                  domTeamP,
                closearenaColor
              );
            }
          }
          n.color = [3, 10, 11, 12, 15][-pwned];
          n.ondead = () => {
            let i = new Entity(loc);
            i.define(choose);
            i.SIZE = 70;
            if (pwned >= -4 || pwned <= -1) {
              if (pwned == -1) {
                domTeamB--;
                console.log(
                  "a Dominator (Blues Dominator) being contested! Blue Dominators counts: " +
                    domTeamB,
                  closearenaColor
                );
              } else if (pwned == -2) {
                domTeamG--;
                console.log(
                  "a Dominator (Greens Dominator) being contested! Green Dominators counts: " +
                    domTeamG,
                  closearenaColor
                );
              } else if (pwned == -3) {
                domTeamR--;
                console.log(
                  "a Dominator (Reds Dominator) being contested! Red Dominators counts: " +
                    domTeamR,
                  closearenaColor
                );
              } else if (pwned == -4) {
                domTeamP--;
                console.log(
                  "a Dominator (Purples Dominator) being contested! Purple Dominators counts: " +
                    domTeamP,
                  closearenaColor
                );
              }
            }
            i.team = 0 || -100;
            sockets.broadcast(
              "yellow_The Northern Dominator is being contested",
              closearenaColor
            );
            room.setType("domN", loc);
            i.color = 13;
            i.ondead = o.ondead;
            o = i;
          };
        };
      }
    if (room.domS)
      for (let loc of room.domS) {
        let o = new Entity(loc);
        let choose = ran.choose([
          Class.artyDominator,
          Class.gunnerDominator,
          Class.destroyerDominator,
          Class.trapperDominator,
        ]);
        o.define(choose);
        o.isDominator = true
        o.underControl = false
        o.team = -100;
        o.color = 13;
        o.SIZE = 70;
        o.ondead = () => {
          let killers = [];
          for (let instance of o.collisionArray)
            if (instance.team >= -4 && instance.team <= -1)
              killers.push(instance.team);
          let pwned = killers.length ? ran.choose(killers) : 0;
          let n = new Entity(loc);
          n.define(choose);
          let team = pwned ? (pwned = pwned) : (pwned = 0);
          n.team = team || -100;
          n.SIZE = 70;
          if (pwned >= -4 || pwned <= -1) {
            if (pwned == -1) {
              sockets.broadcast(
                "blue_The Southern Dominator is now controlled by BLUE",
                closearenaColor
              );
              domTeamB++;
              room.setType("dom1", loc);
              console.log(
                "A Dominator controlled by blue! Blues Dominators count: " +
                  domTeamB,
                closearenaColor
              );
            }
            if (pwned == -2) {
              sockets.broadcast(
                "purple_The Southern Dominator is now controlled by PURPLE",
                closearenaColor
              );
              domTeamG++;
              room.setType("dom2", loc);
              console.log(
                "A Dominator controlled by green! Greens Dominators count: " +
                  domTeamG,
                closearenaColor
              );
            }
            if (pwned == -3) {
              sockets.broadcast(
                "red_The Southern Dominator is now controlled by RED",
                closearenaColor
              );
              domTeamR++;
              room.setType("dom3", loc);
              console.log(
                "A Dominator controlled by red! Reds Dominators count: " +
                  domTeamR,
                closearenaColor
              );
            }
            if (pwned == -4) {
              sockets.broadcast(
                "green_The Southern Dominator is now controlled by GREEN",
                closearenaColor
              );
              domTeamP++;
              room.setType("dom4", loc);
              console.log(
                "A Dominator controlled by purple! Purples Dominators count: " +
                  domTeamP,
                closearenaColor
              );
            }
          }
          n.color = [3, 10, 11, 12, 15][-pwned];
          n.ondead = () => {
            let i = new Entity(loc);
            i.define(choose);
            i.SIZE = 70;
            if (pwned >= -4 || pwned <= -1) {
              if (pwned == -1) {
                domTeamB--;
                console.log(
                  "a Dominator (Blues Dominator) being contested! Blue Dominators counts: " +
                    domTeamB,
                  closearenaColor
                );
              } else if (pwned == -2) {
                domTeamG--;
                console.log(
                  "a Dominator (Greens Dominator) being contested! Green Dominators counts: " +
                    domTeamG,
                  closearenaColor
                );
              } else if (pwned == -3) {
                domTeamR--;
                console.log(
                  "a Dominator (Reds Dominator) being contested! Red Dominators counts: " +
                    domTeamR,
                  closearenaColor
                );
              } else if (pwned == -4) {
                domTeamP--;
                console.log(
                  "a Dominator (Purples Dominator) being contested! Purple Dominators counts: " +
                    domTeamP,
                  closearenaColor
                );
              }
            }
            i.team = 0 || -100;
            sockets.broadcast(
              "yellow_The Southern Dominator is being contested",
              closearenaColor
            );
            room.setType("domS", loc);
            i.color = 13;
            i.ondead = o.ondead;
            o = i;
          };
        };
      }
    if (room.domE)
      for (let loc of room.domE) {
        let o = new Entity(loc);
        let choose = ran.choose([
          Class.artyDominator,
          Class.gunnerDominator,
          Class.destroyerDominator,
          Class.trapperDominator,
        ]);
        o.define(choose);
        o.isDominator = true
        o.underControl = false
        o.team = -100;
        o.color = 13;
        o.SIZE = 70;
        o.ondead = () => {
          let killers = [];
          for (let instance of o.collisionArray)
            if (instance.team >= -4 && instance.team <= -1)
              killers.push(instance.team);
          let pwned = killers.length ? ran.choose(killers) : 0;
          let n = new Entity(loc);
          n.define(choose);
          let team = pwned ? (pwned = pwned) : (pwned = 0);
          n.team = team || -100;
          n.SIZE = 70;
          if (pwned >= -4 || pwned <= -1) {
            if (pwned == -1) {
              sockets.broadcast(
                "blue_The Eastern Dominator is now controlled by BLUE",
                closearenaColor
              );
              domTeamB++;
              room.setType("dom1", loc);
              console.log(
                "A Dominator controlled by blue! Blues Dominators count: " +
                  domTeamB,
                closearenaColor
              );
            }
            if (pwned == -2) {
              sockets.broadcast(
                "purple_The Eastern Dominator is now controlled by PURPLE",
                closearenaColor
              );
              domTeamG++;
              room.setType("dom2", loc);
              console.log(
                "A Dominator controlled by green! Greens Dominators count: " +
                  domTeamG,
                closearenaColor
              );
            }
            if (pwned == -3) {
              sockets.broadcast(
                "red_The Eastern Dominator is now controlled by RED",
                closearenaColor
              );
              domTeamR++;
              room.setType("dom3", loc);
              console.log(
                "A Dominator controlled by red! Reds Dominators count: " +
                  domTeamR,
                closearenaColor
              );
            }
            if (pwned == -4) {
              sockets.broadcast(
                "green_The Eastern Dominator is now controlled by GREEN",
                closearenaColor
              );
              domTeamP++;
              room.setType("dom4", loc);
              console.log(
                "A Dominator controlled by purple! Purples Dominators count: " +
                  domTeamP,
                closearenaColor
              );
            }
          }
          n.color = [3, 10, 11, 12, 15][-pwned];
          n.ondead = () => {
            let i = new Entity(loc);
            i.define(choose);
            i.SIZE = 70;
            if (pwned >= -4 || pwned <= -1) {
              if (pwned == -1) {
                domTeamB--;
                console.log(
                  "a Dominator (Blues Dominator) being contested! Blue Dominators counts: " +
                    domTeamB,
                  closearenaColor
                );
              } else if (pwned == -2) {
                domTeamG--;
                console.log(
                  "a Dominator (Greens Dominator) being contested! Green Dominators counts: " +
                    domTeamG,
                  closearenaColor
                );
              } else if (pwned == -3) {
                domTeamR--;
                console.log(
                  "a Dominator (Reds Dominator) being contested! Red Dominators counts: " +
                    domTeamR,
                  closearenaColor
                );
              } else if (pwned == -4) {
                domTeamP--;
                console.log(
                  "a Dominator (Purples Dominator) being contested! Purple Dominators counts: " +
                    domTeamP,
                  closearenaColor
                );
              }
            }
            i.team = 0 || -100;
            sockets.broadcast(
              "yellow_The Eastern Dominator is being contested",
              closearenaColor
            );
            room.setType("domE", loc);
            i.color = 13;
            i.ondead = o.ondead;
            o = i;
          };
        };
      }
    if (room.domW)
      for (let loc of room.domW) {
        let o = new Entity(loc);
        let choose = ran.choose([
          Class.artyDominator,
          Class.gunnerDominator,
          Class.destroyerDominator,
          Class.trapperDominator,
        ]);
        o.define(choose);
        o.isDominator = true
        o.underControl = false
        o.team = -100;
        o.color = 13;
        o.SIZE = 70;
        o.ondead = () => {
          let killers = [];
          for (let instance of o.collisionArray)
            if (instance.team >= -4 && instance.team <= -1)
              killers.push(instance.team);
          let pwned = killers.length ? ran.choose(killers) : 0;
          let n = new Entity(loc);
          n.define(choose);
          let team = pwned ? (pwned = pwned) : (pwned = 0);
          n.team = team || -100;
          n.SIZE = 70;
          if (pwned >= -4 || pwned <= -1) {
            if (pwned == -1) {
              sockets.broadcast(
                "blue_The Western Dominator is now controlled by BLUE",
                closearenaColor
              );
              domTeamB++;
              room.setType("dom1", loc);
              console.log(
                "A Dominator controlled by blue! Blues Dominators count: " +
                  domTeamB,
                closearenaColor
              );
            }
            if (pwned == -2) {
              sockets.broadcast(
                "purple_The Western Dominator is now controlled by PURPLE",
                closearenaColor
              );
              domTeamG++;
              room.setType("dom2", loc);
              console.log(
                "A Dominator controlled by green! Greens Dominators count: " +
                  domTeamG,
                closearenaColor
              );
            }
            if (pwned == -3) {
              sockets.broadcast(
                "red_The Western Dominator is now controlled by RED",
                closearenaColor
              );
              domTeamR++;
              room.setType("dom3", loc);
              console.log(
                "A Dominator controlled by red! Reds Dominators count: " +
                  domTeamR,
                closearenaColor
              );
            }
            if (pwned == -4) {
              sockets.broadcast(
                "green_The Western Dominator is now controlled by GREEN",
                closearenaColor
              );
              domTeamP++;
              room.setType("dom4", loc);
              console.log(
                "A Dominator controlled by purple! Purples Dominators count: " +
                  domTeamP,
                closearenaColor
              );
            }
          }
          n.color = [3, 10, 11, 12, 15][-pwned];
          n.ondead = () => {
            let i = new Entity(loc);
            i.define(choose);
            i.SIZE = 70;
            if (pwned >= -4 || pwned <= -1) {
              if (pwned == -1) {
                domTeamB--;
                console.log(
                  "a Dominator (Blues Dominator) being contested! Blue Dominators counts: " +
                    domTeamB,
                  closearenaColor
                );
              } else if (pwned == -2) {
                domTeamG--;
                console.log(
                  "a Dominator (Greens Dominator) being contested! Green Dominators counts: " +
                    domTeamG,
                  closearenaColor
                );
              } else if (pwned == -3) {
                domTeamR--;
                console.log(
                  "a Dominator (Reds Dominator) being contested! Red Dominators counts: " +
                    domTeamR,
                  closearenaColor
                );
              } else if (pwned == -4) {
                domTeamP--;
                console.log(
                  "a Dominator (Purples Dominator) being contested! Purple Dominators counts: " +
                    domTeamP,
                  closearenaColor
                );
              }
            }
            i.team = 0 || -100;
            sockets.broadcast(
              "yellow_The Western Dominator is being contested",
              closearenaColor
            );
            room.setType("domW", loc);
            i.color = 13;
            i.ondead = o.ondead;
            o = i;
          };
        };
      }
    let sanctCount = 4
    if (room.sanc1)
      for (let loc of room.sanc1) {
        let o = new Entity(loc);
        let choose = ran.choose([
          Class.artySanctuary,
          Class.gunnerSanctuary,
          Class.destroyerSanctuary,
          Class.trapperSanctuary,
        ]);
        o.define(choose);
        o.team = -1;
        o.color = 10;
        o.SIZE = 50;
        o.ondead = () => {
          let n = new Entity(loc);
          n.define(Class.dominator);
          n.team = -100;
          n.SIZE = 50;
              sockets.broadcast("red_The NW Sanctuary has been destroyed!");
              room.setType("sancN", loc);
          n.color = 3;
          sanctCount -= 1
          n.ondead = () => {
            let i = new Entity(loc);
            i.define(choose);
            i.SIZE = 50;
            i.team = -1;
            sockets.broadcast(
              "green_The NW Sanctuary has been Restored!");
            room.setType("sanc1", loc);
            i.color = 10;
            i.team = -1
          sanctCount += 1
            i.ondead = o.ondead;
            o = i;
          };
        };
      }
    if (room.sanc2)
      for (let loc of room.sanc2) {
        let o = new Entity(loc);
        let choose = ran.choose([
          Class.artySanctuary,
          Class.gunnerSanctuary,
          Class.destroyerSanctuary,
          Class.trapperSanctuary,
        ]);
        o.define(choose);
        o.team = -1;
        o.color = 10;
        o.SIZE = 50;
        o.ondead = () => {
          let n = new Entity(loc);
          n.define(Class.dominator);
          n.team = -100;
          n.SIZE = 50;
              sockets.broadcast("red_The NE Sanctuary has been destroyed!");
              room.setType("sancS", loc);
              console.log("A Sanctuary destroyed!");
          n.color = 3;
          sanctCount -= 1
          n.ondead = () => {
            let i = new Entity(loc);
            i.define(choose);
            i.SIZE = 50;
            i.team = -1;
            sockets.broadcast(
              "green_The NE Sanctuary has been Restored!");
            room.setType("sanc2", loc);
            i.color = 10;
            i.team -1
          sanctCount +=1
            i.ondead = o.ondead;
            o = i;
          };
        };
      }
    if (room.sanc3)
      for (let loc of room.sanc3) {
        let o = new Entity(loc);
        let choose = ran.choose([
          Class.artySanctuary,
          Class.gunnerSanctuary,
          Class.destroyerSanctuary,
          Class.trapperSanctuary,
        ]);
        o.define(choose);
        o.team = -1;
        o.color = 10;
        o.SIZE = 50;
        o.ondead = () => {
          let n = new Entity(loc);
          n.define(Class.dominator);
          n.team = -100;
          n.SIZE = 50;
              sockets.broadcast("red_The SW Sanctuary has been destroyed!");
              room.setType("sancW", loc);
          n.color = 3;
          sanctCount -= 1
          n.ondead = () => {
            let i = new Entity(loc);
            i.define(choose);
            i.SIZE = 50;
            i.team = -1;
            sockets.broadcast(
              "green_The SW Sanctuary has been Restored!");
            room.setType("sanc3", loc);
            i.color = 10;
            i.team -1
          sanctCount += 1
            i.ondead = o.ondead;
            o = i;
          };
        };
      }
    if (room.sanc4)
      for (let loc of room.sanc4) {
        let o = new Entity(loc);
        let choose = ran.choose([
          Class.artySanctuary,
          Class.gunnerSanctuary,
          Class.destroyerSanctuary,
          Class.trapperSanctuary,
        ]);
        o.define(choose);
        o.team = -1;
        o.color = 10;
        o.SIZE = 50;
        o.ondead = () => {
          let n = new Entity(loc);
          n.define(Class.dominator);
          n.team = -100;
          n.SIZE = 50;
              sockets.broadcast("red_The SE Sanctuary has been destroyed!");
              room.setType("sancE", loc);
              console.log("A Sanctuary destroyed!");
          n.color = 3;
          sanctCount -= 1
          n.ondead = () => {
            let i = new Entity(loc);
            i.define(choose);
            i.SIZE = 50;
            i.team = -1;
            sockets.broadcast(
              "green_The SE Sanctuary has been Restored!");
            room.setType("sanc4", loc);
            i.team -1
            i.color = 10;
          sanctCount += 1
            i.ondead = o.ondead;
            o = i;
          };
        };
      }
    if (sanctCount === 0) {
        sockets.broadcast('yellow_The Attackers will win in 30 seconds unless a sanctuary is restored.')
        setTimeout(() => {
          if (sanctCount === 0) {
            sockets.broadcast("The Attackers will win in 15 seconds unless a sanctuary is restored.")
          } else {
          }
        }, 15e3);
        setTimeout(() => {
          if (sanctCount === 0) {
            sockets.broadcast("The Attackers have successfully taken over the outpost")
          setTimeout(() => {
              ArenaClosed = true;
              closemode();
            }, 5e3);
          }
          }, 30e3);
    }
    setInterval(function () {
      if (ArenaClosed !== true) {
        let colorWon = null;
        if (domTeamB == c.NUMBER_OF_DOMS) {
          colorWon = "blue_BLUE";
        }
        if (domTeamR == c.NUMBER_OF_DOMS) {
          colorWon = "red_RED";
        }
        if (domTeamG == c.NUMBER_OF_DOMS) {
          colorWon = "purple_PURPLE";
        }
        if (domTeamP == c.NUMBER_OF_DOMS) {
          colorWon = "green_GREEN";
        }
        if (colorWon !== null && closed_once == false) {
          setTimeout(
            () => sockets.broadcast(colorWon + " has won the game!"),
            1e3
          );
          closemode();
          var ArenaClosed = true;
        }
      }
      if (ArenaClosed == true) {
        closed_once = true;
        setTimeout(function () {
          let loops = 0;
          console.log("Arena Closed! Spawing Arena Closers...");
          setInterval(function () {
            if (loops < 16) {
              let o = new Entity(room.randomType("arcl"));
              o.define(Class.arenaCloser);
              o.team = -100;
              console.log("Spawned Arena Closers!");
              loops++;
            }
          }, 3e3);
          setTimeout(function () {
            sockets.broadcast("12, Closing!");
            console.log("12, Closing...");
            setTimeout(function () {
              process.exit();
            }, 2e3);
          }, 4e4);
        }, 5e3);
      }
    }, 200);
    let bots = [];
    return () => {
      let census = {
        crasher: 0,
        miniboss: 0,
        tank: 0,
      };
      let npcs = entities
        .map(function npcCensus(instance) {
          if (census[instance.type] != null) {
            census[instance.type]++;
            return instance;
          }
        })
        .filter((e) => {
          return e;
        });
      let playerCount = views.length;
        spawnCrasher(census);
        spawnBosses(census);

      if (bots.length < c.BOTS && Math.random() > 0.8) {
        let o = new Entity(room.random());
        o.define(Class.bot);
        o.define(Class.basic);
        o.name += ran.chooseBotName();
        o.refreshBodyAttributes();
        o.skill.set([9, 9, 9, 9, 9, 0, 0, 0, 0, 0]);
        o.color = 12;
        o.nameColor = "#a3afff";
        if (c.RANDOM_COLORS)
          o.color = ran.choose([
            100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
            113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125,
            126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138,
            139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151,
            152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164,
            165, 166, 167, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178,
            179, 180, 181, 182, 183, 184, 185,
          ]);
        if (c.MODE === "tdm") {
          let TEAMS = [];
          for (let i = 0; i < (c.TEAMS || 4); i++) TEAMS.push([-i - 1, 0]);
          for (let o of bots) {
            if (o.isDead()) continue;
            for (let team of TEAMS) {
              if (o.team === team[0]) team[1]++;
            }
          }
          TEAMS = TEAMS.sort(function (a, b) {
            return a[1] - b[1];
          });
          o.team = TEAMS[0][0];
          o.color = [10, 11, 12, 15][-o.team - 1];
        }
        if (c.NAME === 'Siege') {
          o.team = -1;
          o.color = 10
        }
        bots.push(o);
      }
      bots = bots.filter((e) => {
        return !e.isDead();
      });
      bots.forEach((o) => {
        if (o.skill.level < 60) {
          o.skill.score += 1e3;
          o.skill.maintain();
        }
        if (o.upgrades.length)
          o.upgrade(Math.floor(Math.random() * o.upgrades.length));
      });
    };
  })();
  let makefood = (() => {
    let food = [],
      foodSpawners = [];

    function getFoodClass(level) {
      let a = {};
      switch (level) {
        case 0:
          a = Class.egg;
          break;
        case 1:
          a = Class.square;
          break;
        case 2:
          a = Class.triangle;
          break;
        case 3:
          a = Class.pentagon;
          break;
        case 4:
          a = Class.bigPentagon;
          break;
        case 5:
          a = Class.hugePentagon;
          break;
        default:
          throw "bad food level";
      }
      if (a !== {}) {
        a.BODY.ACCELERATION = 0.015 / (a.FOOD.LEVEL + 1);
      }
      return a;
    }
    let placeNewFood = (position, scatter, level, allowInNest = false) => {
      let o = nearest(food, position);
      let mitosis = false;
      let seed = false;
      if (o != null) {
        for (let i = 50; i > 0; i--) {
          if (scatter == -1 || util.getDistance(position, o) < scatter) {
            if (ran.dice((o.foodLevel + 1) * (o.foodLevel + 1))) {
              mitosis = true;
              break;
            } else {
              seed = true;
              break;
            }
          }
        }
      }
      if (scatter != -1 || mitosis || seed) {
        if (
          o != null &&
          (mitosis || seed) &&
          room.isIn("nest", o) === allowInNest
        ) {
          let levelToMake = mitosis ? o.foodLevel : level,
            place = {
              x: o.x + o.size * Math.cos(o.facing),
              y: o.y + o.size * Math.sin(o.facing),
            };
          let new_o = new Entity(place);
          new_o.define(getFoodClass(levelToMake));
          new_o.team = -100;
          new_o.facing = o.facing + ran.randomRange(Math.PI / 2, Math.PI);
          food.push(new_o);
          return new_o;
        } else if (room.isIn("nest", position) === allowInNest) {
          if (!dirtyCheck(position, 20)) {
            o = new Entity(position);
            o.define(getFoodClass(level));
            o.team = -100;
            o.facing = ran.randomAngle();
            food.push(o);
            return o;
          }
        }
      }
    };
    class FoodSpawner {
      constructor() {
        this.foodToMake = Math.ceil(
          Math.abs(ran.gauss(0, room.scale.linear * 80))
        );
        this.size = Math.sqrt(this.foodToMake) * 25;
        let position = {};
        let o;
        do {
          position = room.gaussRing(1 / 3, 20);
          o = placeNewFood(position, this.size, 0);
        } while (o == null);
        for (let i = Math.ceil(Math.abs(ran.gauss(0, 4))); i <= 0; i--) {
          placeNewFood(o, this.size, 0);
        }
        this.x = o.x;
        this.y = o.y;
      }
      rot() {
        if (--this.foodToMake < 0) {
          util.remove(foodSpawners, foodSpawners.indexOf(this));
          foodSpawners.push(new FoodSpawner());
        }
      }
    }
    foodSpawners.push(new FoodSpawner());
    foodSpawners.push(new FoodSpawner());
    foodSpawners.push(new FoodSpawner());
    foodSpawners.push(new FoodSpawner());
    let makeGroupedFood = () => {
      let spawner = foodSpawners[ran.irandom(foodSpawners.length - 1)],
        bubble = ran.gaussRing(spawner.size, 1 / 4);
      placeNewFood(
        {
          x: spawner.x + bubble.x,
          y: spawner.y + bubble.y,
        },
        -1,
        0
      );
      spawner.rot();
    };
    let makeDistributedFood = () => {
      let spot = {};
      do {
        spot = room.gaussRing(1 / 2, 2);
      } while (room.isInNorm(spot));
      placeNewFood(spot, 0.01 * room.width, 0);
    };
    let makeCornerFood = () => {
      let spot = {};
      do {
        spot = room.gaussInverse(5);
      } while (room.isInNorm(spot));
      placeNewFood(spot, 0.05 * room.width, 0);
    };
    let makeNestFood = () => {
      let spot = room.randomType("nest");
      placeNewFood(spot, 0.01 * room.width, 3, true);
    };
    return () => {
      let census = {
        [0]: 0,
        [1]: 0,
        [2]: 0,
        [3]: 0,
        [4]: 0,
        [5]: 0,
        [6]: 0,
        tank: 0,
        sum: 0,
      };
      let censusNest = {
        [0]: 0,
        [1]: 0,
        [2]: 0,
        [3]: 0,
        [4]: 0,
        [5]: 0,
        [6]: 0,
        sum: 0,
      };
      food = entities
        .map((instance) => {
          try {
            if (instance.type === "tank") {
              census.tank++;
            } else if (instance.foodLevel > -1) {
              if (
                room.isIn("nest", {
                  x: instance.x,
                  y: instance.y,
                })
              ) {
                censusNest.sum++;
                censusNest[instance.foodLevel]++;
              } else {
                census.sum++;
                census[instance.foodLevel]++;
              }
              return instance;
            }
          } catch (err) {
            util.error(instance.label);
            util.error(err);
            instance.kill();
          }
        })
        .filter((e) => {
          return e;
        });
      let maxFood = 1 + room.maxFood + 2 * census.tank;
      let maxNestFood = 1 + room.maxFood * room.nestFoodAmount;
      let foodAmount = census.sum;
      let nestFoodAmount = censusNest.sum;
      foodSpawners.forEach((spawner) => {
        if (ran.chance(1 - foodAmount / maxFood)) spawner.rot();
      });
      while (
        ran.chance(0.8 * (1 - (foodAmount * foodAmount) / maxFood / maxFood))
      ) {
        switch (ran.chooseChance(2, 10, 1)) {
          case 0:
            makeGroupedFood();
            break;
          case 1:
            makeDistributedFood();
            break;
          case 2:
            makeCornerFood();
            break;
        }
      }
      while (
        ran.chance(
          0.5 *
            (1 - (nestFoodAmount * nestFoodAmount) / maxNestFood / maxNestFood)
        )
      )
        makeNestFood();
      if (!food.length) return 0;
      for (let i = Math.ceil(food.length / 100); i > 0; i--) {
        let o = food[ran.irandom(food.length - 1)],
          oldId = -1e3,
          overflow,
          location;
        for (let j = 0; j < 6; j++) {
          overflow = 10;
          do {
            o = nearest(food, {
              x: ran.gauss(o.x, 30),
              y: ran.gauss(o.y, 30),
            });
          } while (o.id === oldId && --overflow);
          if (!overflow) continue;
          let proportions = c2.FOOD,
            cens = census,
            amount = foodAmount;
          if (room.isIn("nest", o)) {
            proportions = c2.FOOD_NEST;
            cens = censusNest;
            amount = nestFoodAmount;
          }
          o.foodCountup += Math.ceil(Math.abs(ran.gauss(0, 10)));
          while (o.foodCountup >= (o.foodLevel + 1) * 100) {
            o.foodCountup -= (o.foodLevel + 1) * 100;
            if (
              ran.chance(
                1 -
                  cens[o.foodLevel + 1] / amount / proportions[o.foodLevel + 1]
              )
            ) {
              o.define(getFoodClass(o.foodLevel + 1));
            }
          }
        }
      }
    };
  })();
  return () => {
    makenpcs();
    makefood();
    entities.forEach((instance) => {
      if (instance.shield.max) {
        instance.shield.regenerate();
      }
      if (instance.health.amount) {
        instance.health.regenerate(
          instance.shield.max && instance.shield.max === instance.shield.amount
        );
      }
    });
  };
})();
var speedcheckloop = (() => {
  let fails = 0;
  return () => {
    let activationtime = logs.activation.sum(),
      collidetime = logs.collide.sum(),
      movetime = logs.entities.sum(),
      playertime = logs.network.sum(),
      maptime = logs.minimap.sum(),
      physicstime = logs.physics.sum(),
      lifetime = logs.life.sum(),
      selfietime = logs.selfie.sum();
    let sum = logs.master.record();
    let loops = logs.loops.count(),
      active = logs.entities.count();
    global.fps = (1e3 / sum).toFixed(2);
    if (sum > 1e3 / roomSpeed / 30) {
      util.warn(
        "~~ LOOPS: " +
          loops +
          ". ENTITY #: " +
          entities.length +
          "//" +
          Math.round(active / loops) +
          ". VIEW #: " +
          views.length +
          ". BACKLOGGED :: " +
          (sum * roomSpeed * 3).toFixed(3) +
          "%! ~~"
      );
      util.warn("Total activation time: " + activationtime);
      util.warn("Total collision time: " + collidetime);
      util.warn("Total cycle time: " + movetime);
      util.warn("Total player update time: " + playertime);
      util.warn("Total lb+minimap processing time: " + maptime);
      util.warn("Total entity physics calculation time: " + physicstime);
      util.warn("Total entity life+thought cycle time: " + lifetime);
      util.warn("Total entity selfie-taking time: " + selfietime);
      util.warn(
        "Total time: " +
          (activationtime +
            collidetime +
            movetime +
            playertime +
            maptime +
            physicstime +
            lifetime +
            selfietime)
      );
      if (fails > 60) {
        util.error("FAILURE!");
        sockets.broadcast("Server Overloaded! Restarting...");
        process.exit();
      }
    } else {
      fails = 0;
    }
  };
})();
let status = [];
if (views.length === 15) {
  status = "🟠"; // Means the server is full
  console.log("The Server Status is " + status)
} else if (c2.TESTING !== false) {
  status = "🟣"; // Means the server is in testing
  console.log("The Server Status is " + status)
} else if (c2.TESTING == false) {
  status = "🟢"; // Means the server is online
  console.log("The Server Status is " + status)
}


let websockets = (() => {
  let config = {
    server: server,
  };
  server.listen(process.env.PORT || 8080, function httpListening() {
    util.log(
      new Date() +
        ". Joint HTTP+Websocket server turned on, listening on port " +
        server.address().port +
        "."
    );
  });
  return new WebSocket.Server(config);
})().on("connection", sockets.connect);
setInterval(gameloop, room.cycleSpeed);
setInterval(maintainloop, 200);
setInterval(turretthingamabob, room.cycleSpeed);
setInterval(funloop, room.cycleSpeed * 2);
setInterval(rainbowNamLoop, room.cycleSpeed)
setInterval(purpleLoop, room.cycleSpeed / 4);
setInterval(speedcheckloop, 1e3);
const Eris = require("eris");
let prefix = "Your-very-own-prefix"
let prefix2 = "Your-very-own-special-prefix"
const bot = new Eris("Your_very_own_bot_token");

var owner_id = ("owner1")
var owner_id2 = ("owner2")
const admin_id = ("admin")
const mod_id = ("mod")
const st_id = ("st")
const bt_id = ("bt")


function arg_error(required, submitted) {
  return (
    "```\n- Error: Arguments Supplied\n- " +
    String(required) +
    " Arguments are required```"
  );
}

function parse(input) {
  let out = input.split(" ");
  return out;
}
bot.on('ready', () => {
  console.log('Eris ready!');
  bot.createMessage("979140319809503232", {
  embed: {
    title: "Startup Shard",
    description: c.NAME + ' is now online...' + '\n Uptime: ' + new Date,
    color: 0xADD8E6,
  }
})
var canLogToDiscord = true
});
setInterval(() => {
  if (isClosed === true) {
    isClosed = false; // Stop it from repeating
    bot.createMessage("979232097988407367", {
    embed: {
      title: "Restart Shard",
      description: c.NAME + ' is now restarting...',
      color: 0xADD8E6,
    }
    })
  }
}, 1);
/* bot.on('ready', () => {
  bot.createMessage("", {
  embed: {
    title: c.NAME,
    description: 'Players: ' + views.length + '\n Last Updated: ' + new Date,
    color: 0xADD8E6,
  }
})
var canLogToDiscord = true
}); */
bot.on('messageCreate', (msg) => {
  if (msg.content === prefix + "properties") {
     bot.createMessage(msg.channel.id, {
      embed: {
        title: "Server Properties",
        description: "**Status: **" + status,
        color: 0xADD8E6,
        fields: [
          {
            name: 'Game Mode: ' + c.NAME,
            value: "Bots: " + c.BOTS
          },
          {
            name: 'Width:' + c.WIDTH,
            value: "Height: " + c.HEIGHT
          },
          {
            name: 'Players: ' + views.length + "/15",
            value: "Testing: " + c.TESTING
          },
        ],
      }
    });
  }
  if (msg.content === prefix + "help") {
    bot.createMessage(msg.channel.id, {
      embed: {
        title: "Help List:",
        description: "",
        color: 0xADD8E6,
        fields: [
          {
            name: "```**Commands with a * next to it are staff only commands.**```",
            value: "**Commands with a ^ next to it use '.' as the prefix.**"
          },
          {
            name: `players`,
            value: `Description: Counts the players in-game.`
          },
          {
            name: `broadcast`,
            value: `Description: Broadcasts a message through the server.`
          },
          {
            name: `properties`,
            value: `Description: Server Stats for nerds`
          },
          {
            name: `role ^`,
            value: `Usage: ` + "." + `role <role_name>`
          },
          {
            name: `prefixes ^`,
            value: `Description: Displays all the prefixes of each server`
          },
          {
            name: `define *`,
            value: `Usage: ` + prefix + `kill <id>`
          },
          {
            name: `kill *`,
            value: `Usage: ` + prefix + `kill <id>`
          },
          {
            name: `exit *`,
            value: `Usage: ` + prefix + `exit`
          },
          {
            name: `eval *`,
            value: `Usage: ` + prefix + `eval <code>`
          },
          {
            name: `startEvent *`,
            value: `Usage: ` + prefix + `event <tier> <reason>`
          },
        ],
        footer: {
          text:
            `Requested by ` +
            msg.author.username +
            "#" +
            msg.author.discriminator +
            "."
        }
      }
    });
    }
  if (msg.content === process.env.special + "prefixes") {
    bot.createMessage(msg.channel.id, {
      embed: {
        title: "<:domatrix:943194086033207326>" + " Server Prefixes " + "<:domatrix:943194086033207326>",
        description: "Here are the prefixes for each server:",
        color: 0x171780,
        fields: [
          {
            name: `USA : ` + nam1 + ` : ` + host1,
            value: `Prefix: **/**`
          },
          {
            name: `Hati : ` + nam2 + ` : ` + host2,
            value: `Prefix: **+**`
          },
          {
            name: `Belgium : ` + nam3 + ` : ` + host3,
            value: `Prefix: **!**`
          },
          {
            name: `London : ` + nam6 + ` : ` + host6,
            value: `Prefix: **$**`
          },
        ],
        footer: {
          text:
            `Need help with commands? Try typing (prefix)help for a list of commands`
        }
      }
    });
    }
    if (msg.content.startsWith(prefix + 'beginEvent')) {
      if (msg.author.id === owner_id || admin_id) {
        var tier = msg.content.slice(11)
        var reason = msg.content.slice(13)
        console.log('Starting Event!')
        console.log('Tier: ' + tier)
        console.log('Reason: ' + reason)
        c.EVENT = tier
        bot.createMessage(msg.channel.id, {
        embed: {
          title: "Info:",
          description: 'Event Properties:',
          color: 0x00FF00,
          fields: [
            {
              name: 'Tier:',
              value: tier,
            },
            {
              name: 'Reason:',
              value: reason
            }
          ]
      }
    });

    } else {
        console.log("Unauthorized user", msg.author.username, "tried to eval")
         bot.createMessage(msg.channel.id, {
        embed: {
          title: "Unauthorized User",
          description: "It appears you cannot use this command " + msg.author.username + ". This may be beacause of many reasons, such as invalid Role requirements, or an error with how the bot handles role ids. If you think this is an error, please notify the developers.",
          color: 0x00FF00,
      }
    });
      }
    }
    if (msg.content.startsWith(prefix + "kill")) {
      if (msg.author.id === owner_id || owner_id2 || admin_id || mod_id) {
        let sendError = true;
        let lookfor = msg.content.split(prefix + "kill ").pop();
        console.log(lookfor);
        entities.forEach(function (element) {
          if (element.id == lookfor) {
            sendError = false;
            element.destroy();
            element.sendMessage("red_" + msg.author.username + " killed you using the kill command!")
            bot.createMessage(msg.channel.id, {
            embed: {
              title: "Info:",
              description: element.name + ', (' + element.id + ')' + ' was killed.',
              color: 0x6e75fa,
            }
          });
          }
        });
        if (sendError) {
            bot.createMessage(msg.channel.id, {
            embed: {
              title: "Uh, Oh!",
              description: "No such players exist!",
              color: 0xFF0000,
            }
          });
        }
      } else {
        bot.createMessage(msg.channel.id, {
        embed: {
          title: "Error",
          description: "It appears you cannot use this command! Check your permission levels to see if your authorized.",
          color: 0x00FF00,
        }
      });
    }
  } if (msg.content.startsWith(prefix + "broadcast")) {
      var broadcastThis = msg.content.split(prefix + "broadcast ").pop()
      sockets.broadcast(msg.author.username + " says: " + broadcastThis);
      console.log(msg.author.username + ' says: ' + broadcastThis)
      bot.createMessage(msg.channel.id, {
      embed: {
        title: "Info:",
        description: "Your message was broadcasted",
        color: 0x00FF00,
      }
    });
    }    if (msg.content.startsWith(prefix + 'reportBug')) {
        var report = msg.content.split(prefix + "eval ").pop()
        console.log('new eval: ', report)
        var output = eval(report)
        bot.createMessage(msg.channel.id, {
        embed: {
          title: "Bug Report Opened by: " + msg.author.username,
          description: '\n Description: \n`' + report + '`',
          color: 0x00FF00,
      }
    });
    } if (msg.content.startsWith(prefix + 'eval')) {
      if (msg.author.id === owner_id || owner_id2) {
        var command = msg.content.split(prefix + "eval ").pop()
        console.log('new eval: ', command)
        var output = eval(command)
        bot.createMessage(msg.channel.id, {
        embed: {
          title: "Success!",
          description: "Evaluation Output: \n```" + command + "```",
          color: 0x00FF00,
      }
    });

    } else {
        console.log("Unauthorized user", msg.author.username, "tried to eval")
         bot.createMessage(msg.channel.id, {
        embed: {
          title: "Unauthorized User",
          description: "It appears you cannot use this command " + msg.author.username + ". This may be beacause of many reasons, such as invalid Role requirements, or an error with how the bot handles role ids. If you think this is an error, please notify the developers.",
          color: 0x00FF00,
      }
    });
      }
    } if (msg.content === prefix + "players") {
      let output = "__**Players**__\n";
      entities.forEach(function (element) {
        if (element.name != "") {
          output += String(element.name + "  -  " + element.id + "\n");
        }
      });
      output += "";
      bot.createMessage(msg.channel.id, {
      embed: {
        title: "Player Count",
        description: "Total Count: " + views.length + "/15",
        color: 0x6e75fa,
        fields: [
          {
            name: output,
            value: 'Gamemode: ' + c.NAME
          }
        ],
      }
    });
    } if (msg.content.startsWith(prefix + "purgeEntities")) {
      if (msg.author.id === owner_id || admin_id) {
        bot.createMessage(msg.channel.id, {
        embed: {
          title: "Info:",
          description: "Your message was broadcasted",
          color: 0x00FF00,
        }
      });
    } else {
        console.log("Unauthorized user", msg.author.username, "tried to eval")
         bot.createMessage(msg.channel.id, {
        embed: {
          title: "Unauthorized User",
          description: "It appears you cannot use this command " + msg.author.username + ". This may be beacause of many reasons, such as invalid Role requirements, or an error with how the bot handles role ids. If you think this is an error, please notify the developers.",
          color: 0x00FF00,
      }
    });
      }
 }    if (msg.content.startsWith(prefix + 'exit')) {
      if (msg.author.id === owner_id || admin_id) {
        setTimeout(process.exit(), 5e3);
        bot.createMessage(msg.channel.id, {
        embed: {
          title: "Exiting...",
          description: 'Now terminating server!',
          color: 0x00FF00,
      }
    });
    } else {
        console.log("Unauthorized user", msg.author.username, "tried to restart server")
         bot.createMessage(msg.channel.id, {
        embed: {
          title: "Unauthorized User",
          description: "It appears you cannot use this command " + msg.author.username + ". This may be beacause of many reasons, such as invalid Role requirements, or an error with how the bot handles role ids. If you think this is an error, please notify the developers.",
          color: 0x00FF00,
      }
    });
      }
    }
});
// Bot status
// Can be: online, idle and dnd
let randomizeStatus;
let startingStatus = `.prefixes for help!`;
setInterval(() => {
    if (!randomizeStatus) {
        startingStatus = ran.choose(["domatrix.io", `Among Us`, c.NAME + " | Prefix:" + process.env.prefix, 'The current date is ' + new Date()]);
          bot.editStatus(status, {
            name: startingStatus,
              type: 0
            });
        }
    }, 10000);

bot.editStatus("online", {
  // The status text
  name: startingStatus,
  // Status type
  type: 0
});
bot.connect(); // Get the bot to connect to Discord
