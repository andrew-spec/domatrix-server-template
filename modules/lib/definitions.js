const combineStats = function(T) {
        try {
            let e = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
            return T.forEach(function(T) {
                for (let S = 0; S < e.length; S++) e[S] = e[S] * T[S]
            }), {
                reload: e[0],
                recoil: e[1],
                shudder: e[2],
                size: e[3],
                health: e[4],
                damage: e[5],
                pen: e[6],
                speed: e[7],
                maxSpeed: e[8],
                range: e[9],
                density: e[10],
                spray: e[11],
                resist: e[12]
            }
        } catch (e) {
            console.log(e), console.log(JSON.stringify(T))
        }
    },
    skillSet = (() => {
        let T = {
            rld: 0,
            pen: 1,
            str: 2,
            dam: 3,
            spd: 4,
            shi: 5,
            atk: 6,
            hlt: 7,
            rgn: 8,
            mob: 9
        };
        return e => {
            let S = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (let E in e) e.hasOwnProperty(E) && (S[T[E]] = Math.round(9 * e[E]));
            return S
        }
    })(),
    setBuild = T => {
        let e = T.split(T.includes("/") ? "/" : "").map(T => +T);
        if (10 !== e.length) throw new RangeError("Build must be made up of 10 numbers");
        return [6, 4, 3, 5, 2, 9, 0, 1, 8, 7].map(T => e[T])
    },
    g = {
        vulc: [1.1, .01, 1, .8, .75, .75, .75, 1.3, 1, 1, 1, .4, 1],
        bitweak: [1, 1, 1, 1, .95, .9, 1, 1, 1, 1, 1, 1, 1],
        machspraysmall: [.3, .8, 1.7, .5, .7, .75, 1, 1, .8, .5, 1, 3, 1],
        trap: [38.75, 1, .1, .65, 3, .75, .5, 5, 1, 1, 1, 15, 3],
        trap2: [1.3, 1, .1, .65, 3, .75, .5, 2, 1, 1, 1, 5, 3],
        mach_trap: [10.6875, 1, .1, .5, 3, .75, .5, 5, 1, 1, 1, 50, 3],
        swarm: [30, .25, .05, .35, .8, .875, .75, 4, 1, 1, 1, 5, 1],
        drone: [60, .25, .1, .6, 1.5, 1.25, 1.125, 1.8, 1, 1, 1, .1, 1],
        shooter: [60, .25, .1, 1, 1.5, 1.25, 1.125, 1.8, 1, 1, 1, .1, 1],
        summoner: [.35, 1, 1, 1.125, .25, .15, .15, 1, 1, 1, .8, 1, 1],
        fallenOverlord: [.35, 1, 1, .5, .25, .25, .15, 1, 1, 1, .8, 1, 1],
        factory: [60, 1, .1, .7, 1, .75, 1, 3, 1, 1, 1, .1, 1],
        factory2: [60, 1, .1, 1.3, 1, .75, 1, 3, 1, 1, 1, .1, 1],
        basic: [25, 1.75, .1, 1, 1, 1, 1, 4.5, 1, 1, 1, 15, 1],
        frozen: [25, 1.75, .1, 1, 1, 1, 1, 0, 1, 1.5, 1, 15, 1],
        frozen2: [1, 1.75, .1, 1, 1, 1, 1, 0, 1, 1.5, 1, 15, 1],
        destroyDominator: [7.5, 0, .5, 1, 5, 5, 5, .5, 1, 1.25, 10, .1, 1],
        gunnerDominator: [.6, 0, 1, .5, .5, .4, .9, 1.25, 1, .7, 1, 2.5, 1],
        trapperDominator: [2, 0, 1, 1.1, 1, 1.2, 1.2, .45, 2, .7, 1, .5, 1],
        artyDominator: [1.2, 0, 1, .9, 1, .3, 1, 1.15, 1.1, 1, 1.5, 1, 1],
        autodecentralizer: [3, 1, 1, 1.05, .6, .6, 1, 1, 1, 1.2, 1, 1, 1],
        autoobliterator: [6, 1, 1, 1, 1.2, 2.1, 1, 1.3, 4, 1.3, 1.5, 1, 1.15],
        blank: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        spam: [1.1, 1, 1, 1.05, 1, 1.1, 1, .9, .7, 1, 1, 1, 1.05],
        minion: [1, 1, 2, 1, .4, .4, 1.2, 1, 1, .75, 1, 2, 1],
        single: [1, 1, 1, 1, 1.1, 1.1, 1.1, 1, 1, 1.1, 1.5, .1, 1],
        sniper: [1.35, 1, .25, 1, 1, .8, 1.1, 1.5, 1.5, 1, 1.5, .2, 1.15],
        rifle: [.8, .8, 1.5, 1, .8, .8, .9, 1, 1, 1, 1, 2, 1],
        assass: [1.65, 1, .15, 1, 1.15, 1, 1.1, 1.18, 1.18, 1, 3, 1, 1.3],
        hunter: [1.5, .7, 1, .95, 1, .9, 1, 1.1, .8, 1, 1.2, 1, 1.15],
        hunter2: [1, 1, 1, .9, 2, .5, 1.5, 1, 1, 1, 1.2, 1, 1.1],
        preda: [1.4, 1, 1, .8, 1.5, .9, 1.2, .9, .9, 1, 1, 1, 1],
        snake: [.4, 1, 4, 1, 1.5, .9, 1.2, .2, .35, 1, 3, 6, .5],
        sidewind: [1.5, 2, 1, 1, 1.5, .9, 1, .15, .5, 1, 1, 1, 1],
        snakeskin: [.6, 1, 2, 1, .5, .5, 1, 1, .2, .4, 1, 5, 1],
        mach: [.5, .8, 1.7, 1, .7, .7, 1, 1, .8, 1, 1, 2.5, 1],
        blaster: [1, 1.2, 1.25, 1.1, 1.5, 1, .6, .8, .33, .6, .5, 1.5, .8],
        chain: [1.25, 1.33, .8, 1, .8, 1, 1.1, 1.25, 1.25, 1.1, 1.25, .5, 1.1],
        mini: [1.25, .6, 1, .8, .4, .35, 1.25, 1.33, 1, 1, 1.25, .5, 1.1],
        stream: [1, .1, 1, 1, 1, .4, 1, 1.24, 1, 1, 1, 1, 1],
        shotgun: [8, .4, 1, 1.5, 1, .2, .8, 1.8, .6, 1, 1.2, 1.2, 1],
        flank: [1, 1.2, 1, 1, 1.02, .81, .9, 1, .85, 1, 1.2, 1, 1],
        tri: [1, .9, 1, 1, .9, 1, 1, .8, .8, .6, 1, 1, 1],
        trifront: [1, .2, 1, 1, 1, 1, 1, 1.3, 1.1, 1.5, 1, 1, 1],
        thruster: [1, 1.5, 2, 1, .5, .5, .7, 1, 1, 1, 1, .5, .7],
        auto: [1.8, .75, .5, .8, .9, .6, 1.2, 1.1, 1, .8, 1.3, 1, 1.25],
        five: [1.15, 1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.1, 2, 1, 1],
        autosnipe: [1, 1, 1, 1.4, 2, 1, 1, 1, 1, 1, 1, 1, 1],
        soundwave: [1.75, 2, .5, 1, 1.4, 2, 1.4, .5, .8, 1.25, 2, 1, 3],
        pound: [2, 2, 1, 1, 1.25, 1.35, 1.25, 1, 1, 1, 1.5, 1, 1.15],
        destroy: [1.75, 2, .5, 1, 1.4, 1.375, 1.4, .8, .8, 1.25, 2, 1, 3],
        anni: [1.1, .9, 1, 1, 1.1, .9, 1.5, 1, 1, 1, 1, 1, 1],
        stabalizer: [6, 1.7, 1, .6, 1.1, 2.5, 1.5, 1, 1, 1, 1, 1, 1],
        devast: [2, 1.1, .5, 1, 1.1, 1.625, 1.1, 1, 1, 1, 1, 1, 1],
        deployer: [1.7, 2, 1, 1, .7, 1.6, 1, .85, .8, 1, 1.5, 1, 1.15],
        multiplier: [1.7, 2, 1, 1, .6, .7, 1, .85, .8, 1, 1.5, 1, 1.15],
        hive: [1.5, .8, 1, .8, .7, .3, 1, 1, .6, 1, 1, 1, 1],
        arty: [1.2, .7, 1, .9, 1, 1, 1, 1.15, 1.1, 1, 1.5, 1, 1],
        mortar: [1.2, 1, 1, 1, 1.1, 1, 1, .8, .8, 1, 1, 1, 1],
        lance: [.75, 0, .1, 1, .05, 4, .9, .7, 1, .05, 1, 180, 1],
        lance2: [.75, 0, .1, 1, 1, 1, .9, 5, 1, .25, 1, 30, 1],
        claymore: [.75, 0, .1, 1, .05, 7, .9, .7, 1, .05, 1, 180, 1],
        spreadmain: [.78125, .25, .5, 1, .5, 1, .8, 1.5 / .78, .9 / .78, 1, 1, 1, 1],
        spread: [1.5, 1, .25, 1, 1, 1, 1, .7, .7, 1, 1, .25, 1],
        skim: [1, .8, .8, .9, 1.35, .8, 2, .3, .3, 1, 1, 1, 1.1],
        twin: [1, .5, .9, 1, .9, .7, 1, 1, 1, 1, 1, 1.2, 1],
        bent: [1.1, 1, .8, 1, .9, 1, .7, 1, 1, 1, .8, .5, 1],
        triple: [1.2, .667, .9, 1, .85, .85, .9, 1, 1, 1, 1.1, .9, .95],
        quint: [1.5, .667, .9, 1, 1, 1, .9, 1, 1, 1, 1.1, .9, .95],
        dual: [2, 1, .8, 1, 1.5, 1, 1, 1.3, 1.1, 1, 1, 1, 1.25],
        double: [1, 1, 1, 1, 1, .9, 1, 1, 1, 1, 1, 1, 1],
        hewn: [1.25, 1.5, 1, 1, .9, .85, 1, 1, .9, 1, 1, 1, 1],
        puregunner: [1, .25, 1.5, 1.2, 1.35, .25, 1.25, .8, .65, 1, 1.5, 1.5, 1.2],
        machgun: [.66, .8, 2, 1, 1, .75, 1, 1.2, .8, 1, 1, 2.5, 1],
        gunner: [1.25, .25, 1.5, 1.1, 1, .35, 1.35, .9, .8, 1, 1.5, 1.5, 1.2],
        power: [1, 1, .6, 1.2, 1, 1, 1.25, 2, 1.7, 1, 2, .5, 1.5],
        nopower: [1, 1, .6, 1.2, 1, -1e3, 1.25, 2, 1.7, 1, 2, .5, 1.5],
        norecoil: [1, -1e3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        nail: [.85, 2.5, 1, .8, 1, .4, 1, 1, 1, 1, 2, 1, 1],
        fast: [1, 1, 1, 1, 1, 1, 1, 1.2, 1, 1, 1, 1, 1],
        turret: [2, 1, 1, 1, .8, .6, .7, 1, 1, 1, .1, 1, 1],
        battle: [1, 1, 1, 1, 1.25, 1.15, 1, 1, .85, 1, 1, 1, 1.1],
        bees: [1, 1, 1, 1.4, 1.5, 1.5, 1, 2, 1.5, 1, .25, 1, 1],
        carrier: [1.5, 1, 1, 1, 1, .8, 1, 1.3, 1.2, 1.2, 1, 1, 1],
        hexatrap: [1.3, 1, 1.25, 1, 1, 1, 1, .8, 1, .5, 1, 1, 1],
        block: [1.1, 2, .1, 1.5, 1, 1.25, 1, 1.5, 2.5, 1.25, 1, 1, 1.25],
        construct: [1.3, 1, 1, .9, 1.1, 1.3, 1.1, 1, 1.1, 1, 1, 1, 1],
        boomerang: [.8, 1, 1, 1, .5, .5, 1, .75, .75, 1.333, 1, 1, 1],
        over: [1.25, 1, 1, .85, .7, .8, 1, 1, .9, 1, 2, 1, 1],
        meta: [1.333, 1, 1, 1, 1, .667, 1, 1, 1, 1, 1, 1, 1],
        weak: [2, 1, 1, 1, .6, .6, .8, .5, .7, .25, .3, 1, 1],
        master: [3, 1, 1, .85, .4, .6, .8, 1, 1, .1, .5, 1, 1],
        commander: [1.5, 1, 1, 1, .8, .9, .8, 1, 1, 1, 1.5, 1, 1],
        sunchip: [5, 1, 1, 1.4, .75, .4, .6, 1, 1, 1, .8, 1, 1],
        strongsunchip: [1, 1, 1, 1.4, .75, 1, .6, 1, 1, 1, .8, 1, 1],
        babyfactory: [1.5, 1, 1, 1, 1, 1, 1, 1, 1.35, 1, 1, 1, 1],
        overdrive: [5, 1, 1, 1, .7, .7, .7, .9, .9, .9, 1, 1.2, 1],
        lowpower: [1, 1, 2, 1, .5, .5, .7, 1, 1, 1, 1, .5, .7],
        halfrecoil: [1, .5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        morerecoil: [1, 1.15, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        bitmorereload: [.875, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        muchmorerecoil: [1, 1.35, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        lotsmorrecoil: [1, 1.8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        tonsmorrecoil: [1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        doublereload: [.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        morereload: [.75, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        halfreload: [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        lessreload: [1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        threequartersrof: [1.333, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        morespeed: [1, 1, 1, 1, 1, 1, 1, 1.3, 1.3, 1, 1, 1, 1],
        bitlessspeed: [1, 1, 1, 1, 1, 1, 1, .93, .93, 1, 1, 1, 1],
        slow: [1, 1, 1, 1, 1, 1, 1, .7, .7, 1, 1, 1, 1],
        slower: [1, 1, 1, 1, 1, 1, 1, .4, .4, 1, 1, 1, 1],
        halfspeed: [1, 1, 1, 1, 1, 1, 1, .5, .5, 1, 1, 1, 1],
        notdense: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, .1, 1, 1],
        halfrange: [1, 1, 1, 1, 1, 1, 1, 1, 1, .5, 1, 1, 1],
        doublerange: [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1],
        fake: [1, 1, 1, 1e-5, 1e-4, 1, 1, 1e-5, 2, 0, 1, 1, 1],
        op: [.5, 1.3, 1, 1, 4, 4, 4, 3, 2, 1, 5, 2, 1],
        protectorswarm: [5, 1e-6, 1, 1, 100, 1, 1, 1, 1, .5, 5, 1, 10],
        protectordrone: [.5, 0, 1, 1, 4, 3, 1, 5, 1, 1, 10, .1, 10]
    },
    dfltskl = 9,
    statnames = {
        smasher: 1,
        drone: 2,
        necro: 3,
        swarm: 4,
        trap: 5,
        generic: 6,
        lancer: 7
    },
    gunCalcNames = {
        default: 0,
        bullet: 1,
        drone: 2,
        swarm: 3,
        fixedReload: 4,
        thruster: 5,
        sustained: 6,
        necro: 7,
        trap: 8
    };
exports.genericEntity = {
    NAME: "",
    LABEL: "Unknown Entity",
    TYPE: "unknown",
    DAMAGE_CLASS: 0,
    DANGER: 0,
    VALUE: 0,
    SHAPE: 0,
    COLOR: 16,
    INDEPENDENT: !1,
    CONTROLLERS: ["doNothing"],
    HAS_NO_MASTER: !1,
    MOTION_TYPE: "glide",
    FACING_TYPE: "toTarget",
    DRAW_HEALTH: !1,
    DRAW_SELF: !0,
    DAMAGE_EFFECTS: !0,
    RATEFFECTS: !0,
    MOTION_EFFECTS: !0,
    INTANGIBLE: !1,
    ACCEPTS_SCORE: !0,
    GIVE_KILL_MESSAGE: !1,
    CAN_GO_OUTSIDE_ROOM: !1,
    HITS_OWN_TYPE: "normal",
    DIE_AT_LOW_SPEED: !1,
    DIE_AT_RANGE: !1,
    CLEAR_ON_MASTER_UPGRADE: !1,
    PERSISTS_AFTER_DEATH: !1,
    VARIES_IN_SIZE: !1,
    HEALTH_WITH_LEVEL: !0,
    CAN_BE_ON_LEADERBOARD: !0,
    HAS_NO_RECOIL: !1,
    AUTO_UPGRADE: "none",
    BUFF_VS_FOOD: !1,
    OBSTACLE: !1,
    CRAVES_ATTENTION: !1,
    NECRO: !1,
    UPGRADES_TIER_1: [],
    UPGRADES_TIER_2: [],
    UPGRADES_TIER_3: [],
    UPGRADES_TIER_4: [],
    SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    LEVEL: 0,
    SKILL_CAP: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    GUNS: [],
    MAX_CHILDREN: 0,
    BODY: {
        ACCELERATION: 1,
        SPEED: 0,
        HEALTH: 1,
        RESIST: 1,
        SHIELD: 0,
        REGEN: 0,
        DAMAGE: 1,
        PENETRATION: 1,
        RANGE: 0,
        FOV: 1,
        DENSITY: 1,
        STEALTH: 1,
        PUSHABILITY: 1,
        HETERO: 2
    },
    FOOD: {
        LEVEL: -1
    }
}, exports.food = {
    TYPE: "food",
    DAMAGE_CLASS: 1,
    CONTROLLERS: ["moveInCircles"],
    HITS_OWN_TYPE: "repel",
    MOTION_TYPE: "drift",
    FACING_TYPE: "turnWithSpeed",
    VARIES_IN_SIZE: !0,
    BODY: {
        STEALTH: 30,
        PUSHABILITY: 1
    },
    DAMAGE_EFFECTS: !1,
    RATEFFECTS: !1,
    HEALTH_WITH_LEVEL: !1
};
const basePolygonDamage = 1,
    basePolygonHealth = 2;
exports.hugePentagon = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 5
    },
    LABEL: "Alpha Pentagon",
    VALUE: 15e3,
    SHAPE: -5,
    SIZE: 58,
    COLOR: 14,
    BODY: {
        DAMAGE: 2,
        DENSITY: 80,
        HEALTH: 600,
        RESIST: Math.pow(1.25, 3),
        SHIELD: 80,
        REGEN: .6
    },
    DRAW_HEALTH: !0,
    GIVE_KILL_MESSAGE: !0
}, exports.bigPentagon = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 4
    },
    LABEL: "Beta Pentagon",
    VALUE: 2500,
    SHAPE: 5,
    SIZE: 30,
    COLOR: 14,
    BODY: {
        DAMAGE: 2,
        DENSITY: 30,
        HEALTH: 100,
        RESIST: Math.pow(1.25, 2),
        SHIELD: 40,
        REGEN: .2
    },
    DRAW_HEALTH: !0,
    GIVE_KILL_MESSAGE: !0
}, exports.pentagon = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 3
    },
    LABEL: "Pentagon",
    VALUE: 400,
    SHAPE: 5,
    SIZE: 16,
    COLOR: 14,
    BODY: {
        DAMAGE: 1.5,
        DENSITY: 8,
        HEALTH: 20,
        RESIST: 1.25,
        PENETRATION: 1.1
    },
    DRAW_HEALTH: !0
}, exports.triangle = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 2
    },
    LABEL: "Triangle",
    VALUE: 120,
    SHAPE: 3,
    SIZE: 9,
    COLOR: 2,
    BODY: {
        DAMAGE: 1,
        DENSITY: 6,
        HEALTH: 6,
        RESIST: 1.15,
        PENETRATION: 1.5
    },
    DRAW_HEALTH: !0
}, exports.square = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 1
    },
    LABEL: "Square",
    VALUE: 30,
    SHAPE: 4,
    SIZE: 10,
    COLOR: 13,
    BODY: {
        DAMAGE: 1,
        DENSITY: 4,
        HEALTH: 2,
        PENETRATION: 2
    },
    DRAW_HEALTH: !0,
    INTANGIBLE: !1
}, exports.egg = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 0
    },
    LABEL: "Egg",
    VALUE: 10,
    SHAPE: 0,
    SIZE: 5,
    COLOR: 6,
    INTANGIBLE: !0,
    BODY: {
        DAMAGE: 0,
        DENSITY: 2,
        HEALTH: .0011,
        PUSHABILITY: 0
    },
    DRAW_HEALTH: !1
}, exports.greenpentagon = {
    PARENT: [exports.food],
    LABEL: "Pentagon",
    VALUE: 3e4,
    SHAPE: 5,
    SIZE: 16,
    COLOR: 1,
    BODY: {
        DAMAGE: 3,
        DENSITY: 8,
        HEALTH: 200,
        RESIST: 1.25,
        PENETRATION: 1.1
    },
    DRAW_HEALTH: !0
}, exports.greentriangle = {
    PARENT: [exports.food],
    LABEL: "Triangle",
    VALUE: 7e3,
    SHAPE: 3,
    SIZE: 9,
    COLOR: 1,
    BODY: {
        DAMAGE: 1,
        DENSITY: 6,
        HEALTH: 60,
        RESIST: 1.15,
        PENETRATION: 1.5
    },
    DRAW_HEALTH: !0
}, exports.greensquare = {
    PARENT: [exports.food],
    LABEL: "Square",
    VALUE: 2e3,
    SHAPE: 4,
    SIZE: 10,
    COLOR: 1,
    BODY: {
        DAMAGE: .5,
        DENSITY: 4,
        HEALTH: 20,
        PENETRATION: 2
    },
    DRAW_HEALTH: !0,
    INTANGIBLE: !1
}, exports.gem = {
    PARENT: [exports.food],
    LABEL: "Gem",
    VALUE: 2e3,
    SHAPE: 6,
    SIZE: 5,
    COLOR: 0,
    BODY: {
        DAMAGE: .25,
        DENSITY: 4,
        HEALTH: 10,
        PENETRATION: 2,
        RESIST: 2,
        PUSHABILITY: .25
    },
    DRAW_HEALTH: !0,
    INTANGIBLE: !1
}, exports.obstacle = {
    TYPE: "maze",
    DAMAGE_CLASS: 1,
    LABEL: "Rock",
    FACING_TYPE: "turnWithSpeed",
    SHAPE: -9,
    BODY: {
        PUSHABILITY: 0,
        HEALTH: 9e9,
        SHIELD: 9e9,
        REGEN: 9e9,
        DAMAGE: 0,
        RESIST: 9e9,
        STEALTH: 1
    },
    VALUE: 0,
    SIZE: 60,
    COLOR: 16,
    VARIES_IN_SIZE: !0,
    GIVE_KILL_MESSAGE: !0,
    ACCEPTS_SCORE: !1
}, exports.mazeWall = {
    PARENT: [exports.genericEntity],
    TYPE: "maze",
    CAN_GO_OUTSIDE_ROOM: !0,
    LABEL: "Wall",
    ACCEPTS_SCORE: !1,
    SHAPE: 4,
    SIZE: 280
}, exports.babyObstacle = {
    PARENT: [exports.obstacle],
    SIZE: 25,
    SHAPE: 12,
    LABEL: "Gravel"
};
const wepHealthFactor = .5,
    wepDamageFactor = 1.5;
exports.bullet = {
    LABEL: "Bullet",
    TYPE: "bullet",
    ACCEPTS_SCORE: !1,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: .165,
        DAMAGE: 6,
        PUSHABILITY: .3
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: !0,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: !0
}, exports.gbullet = {
    LABEL: "Bullet",
    TYPE: "bullet",
    COLOR_OVERRIDE: 18,
    ACCEPTS_SCORE: !1,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: .165,
        DAMAGE: 6,
        PUSHABILITY: .3
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: !0,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: !0
}, exports.pbullet = {
    LABEL: "Bullet",
    TYPE: "bullet",
    COLOR_OVERRIDE: 5,
    ACCEPTS_SCORE: !1,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: .165,
        DAMAGE: 6,
        PUSHABILITY: .3
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: !0,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: !0
}, exports.obullet = {
    LABEL: "Bullet",
    TYPE: "bullet",
    COLOR_OVERRIDE: 2,
    ACCEPTS_SCORE: !1,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: .165,
        DAMAGE: 6,
        PUSHABILITY: .3
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: !0,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: !0
}, exports.bulletcool = {
    LABEL: "Bullet",
    TYPE: "bullet",
    ACCEPTS_SCORE: !1,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: .165,
        DAMAGE: 6,
        PUSHABILITY: .3
    },
    COLOR_OVERRIDE: 30,
    MOTION_TYPE: "growaccel",
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: !0,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: !0
}, exports.stiibullet = {
    LABEL: "69Bullet",
    TYPE: "bullet",
    ACCEPTS_SCORE: !1,
    SIZE: .25,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: .165,
        DAMAGE: 6,
        PUSHABILITY: .3
    },
    SHAPE: 6999,
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: !0,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: !0
}, exports.healbullet = {
    LABEL: "Bullet",
    TYPE: "bullet",
    ACCEPTS_SCORE: !1,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 100,
        DAMAGE: -6,
        PUSHABILITY: 0
    },
    MOTION_TYPE: "healbullet",
    FACING_TYPE: "smoothWithMotion",
    GO_THROUGH_WALLS: !0,
    CAN_GO_OUTSIDE_ROOM: !0,
    DIE_AT_RANGE: !0,
    TURRETS: [{
        POSITION: [20, 0, 0, 0, 0, 1],
        TYPE: [exports.bullet, {
            COLOR: 10
        }]
    }]
}, exports.pumba_bullet = {
    PARENT: [exports.bullet],
    LABEL: "Double Screw",
    FACING_TYPE: "turnWithSpeed",
    CONTROLLERS: ["alwaysFire"],
    GUNS: [{
        POSITION: [19, 2, 1, 0, -2.5, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }, {
        POSITION: [19, 2, 1, 0, -2.5, 180, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 180, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 180, 0]
    }]
}, exports.yellowbullet = {
    LABEL: "Bullet",
    TYPE: "bullet",
    ACCEPTS_SCORE: !1,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: .165,
        DAMAGE: 6,
        PUSHABILITY: .3
    },
    COLOR_OVERRIDE: 3,
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: !0,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: !0
}, exports.invisabullet = {
    LABEL: "Bullet",
    TYPE: "bullet",
    SHAPE: 353,
    ACCEPTS_SCORE: !1,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: .165,
        DAMAGE: 6,
        PUSHABILITY: .3
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: !0,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: !0
}, exports.invisabullet2 = {
    LABEL: "Bullet",
    TYPE: "bullet",
    SHAPE: 353,
    ACCEPTS_SCORE: !1,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 230,
        DENSITY: 1.25,
        HEALTH: .165,
        DAMAGE: 10,
        PUSHABILITY: .3
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: !0,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: !0
}, exports.growbullet = {
    PARENT: [exports.bullet],
    MOTION_TYPE: "growboom",
    SHAPE: 166
}, exports.knife = {
    SHAPE: 3e3,
    TYPE: "bullet",
    ACCEPTS_SCORE: !1,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: .165,
        DAMAGE: 6,
        PUSHABILITY: .3
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: !0,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: !0
}, exports.homingbullet = {
    PARENT: [exports.bullet],
    MOTION_TYPE: "swarm"
}, exports.cbullet = {
    LABEL: "Chaos Bullet",
    TYPE: "bullet",
    ACCEPTS_SCORE: !1,
    SHAPE: 1002,
    BODY: {
        PENETRATION: 5,
        SPEED: 10,
        RANGE: 180,
        DENSITY: 1.25,
        HEALTH: 50,
        DAMAGE: 1 / 0,
        PUSHABILITY: 0
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: !0,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: !0
}, exports.cbullet2 = {
    LABEL: "Chaos Bullet",
    TYPE: "bullet",
    ACCEPTS_SCORE: !1,
    SHAPE: 1002,
    BODY: {
        PENETRATION: 5,
        SPEED: 10,
        RANGE: 180,
        DENSITY: 1.25,
        HEALTH: 50,
        DAMAGE: 10,
        PUSHABILITY: 0
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: !0,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: !0
}, exports.fireEffect5 = {
    LABEL: "Bullet",
    TYPE: "bullet",
    ACCEPTS_SCORE: !1,
    COLOR: 12,
    SIZE: 1e-5,
    ALPHA: 1e-5,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 10,
        DENSITY: 1.25,
        HEALTH: 1,
        DAMAGE: 0,
        PUSHABILITY: .3
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: !0,
    HITS_OWN_TYPE: "never",
    MOTION_TYPE: "fire5",
    DIE_AT_RANGE: !0
}, exports.fireEffect4 = {
    LABEL: "Bullet",
    TYPE: "bullet",
    ACCEPTS_SCORE: !1,
    COLOR: 12,
    SIZE: 1e-5,
    ALPHA: 1e-5,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 10,
        DENSITY: 1.25,
        HEALTH: 5,
        DAMAGE: 3,
        PUSHABILITY: .3
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: !0,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: !0,
    MOTION_TYPE: "fire4",
    GUNS: [{
        POSITION: [1, 15, 1, 0, 5, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.fireEffect5
        }
    }]
}, exports.fireEffect3 = {
    LABEL: "Bullet",
    TYPE: "bullet",
    ACCEPTS_SCORE: !1,
    COLOR: 12,
    SIZE: 1e-5,
    ALPHA: 1e-5,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 10,
        DENSITY: 1.25,
        HEALTH: 5,
        DAMAGE: 3,
        PUSHABILITY: .3
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: !0,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: !0,
    MOTION_TYPE: "malice",
    GUNS: [{
        POSITION: [1, 15, 1, 0, 5, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.fireEffect4
        }
    }]
}, exports.fireEffect2 = {
    LABEL: "Bullet",
    TYPE: "bullet",
    ACCEPTS_SCORE: !1,
    COLOR: 12,
    SIZE: 1e-5,
    ALPHA: 1e-5,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 10,
        DENSITY: 1.25,
        HEALTH: 5,
        DAMAGE: 3,
        PUSHABILITY: .3
    },
    MOTION_TYPE: "fire2",
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: !0,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: !0,
    GUNS: [{
        POSITION: [1, 15, 1, 0, -5, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.fireEffect3
        }
    }]
}, exports.fireEffect1 = {
    LABEL: "Bullet",
    TYPE: "bullet",
    ACCEPTS_SCORE: !1,
    COLOR: 12,
    SIZE: 1e-5,
    ALPHA: 1e-5,
    MOTION_TYPE: "fire1",
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 10,
        DENSITY: 1.25,
        HEALTH: 5,
        DAMAGE: 3,
        PUSHABILITY: .3
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: !0,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: !0,
    SIZE: 30,
    GUNS: [{
        POSITION: [1, 15, 1, 0, -5, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.fireEffect2
        }
    }]
}, exports.fireinferno = {
    PARENT: [exports.bullet],
    LABEL: "Flared Inferno Bullet",
    POISON_TO_APPLY: .45,
    SHAPE: 4,
    POISON: !0,
    SHOWPOISON: !0
}, exports.bible = {
    LABEL: "The Holy Bible",
    TYPE: "bullet",
    ACCEPTS_SCORE: !1,
    SHAPE: 1e3,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: .165,
        DAMAGE: 6,
        PUSHABILITY: .3
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: !0,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: !0
}, exports.infernobullet = {
    LABEL: "Flame",
    TYPE: "bullet",
    SHAPE: 4,
    ACCEPTS_SCORE: !1,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 80,
        DENSITY: 1.25,
        HEALTH: .2,
        DAMAGE: 6,
        PUSHABILITY: .3
    },
    MOTION_TYPE: "growslow",
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: !0,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: !0
}, exports.infernoswarm = {
    LABEL: "Flame",
    TYPE: "bullet",
    SHAPE: 4,
    ACCEPTS_SCORE: !1,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 80,
        DENSITY: 1.25,
        HEALTH: .2,
        DAMAGE: 6,
        PUSHABILITY: .3
    },
    MOTION_TYPE: "swrow",
    FACING_TYPE: "smoothWithMotion",
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
    CAN_GO_OUTSIDE_ROOM: !0,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: !0,
    INDEPENDENT: !0
}, exports.homingbullet = {
    PARENT: [exports.bullet],
    INDEPENDENT: !0,
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
    MOTION_TYPE: "swarm"
}, exports.infernosplit = {
    LABEL: "Flame",
    TYPE: "bullet",
    SHAPE: 4,
    ACCEPTS_SCORE: !1,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 80,
        DENSITY: 1.25,
        HEALTH: .2,
        DAMAGE: 6,
        PUSHABILITY: .3
    },
    INDEPENDENT: !0,
    MOTION_TYPE: "growslow",
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: !0,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: !0,
    GUNS: [{
        POSITION: [10, 8, 1, 0, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.infernobullet,
            MAX_CHILDREN: 2,
            SKIN: 5
        }
    }, {
        POSITION: [10, 8, 1, 0, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.infernobullet,
            MAX_CHILDREN: 2,
            SKIN: 5
        }
    }]
}, exports.casing = {
    PARENT: [exports.bullet],
    LABEL: "Shell",
    TYPE: "swarm"
}, exports.swarm = {
    LABEL: "Swarm Drone",
    TYPE: "swarm",
    ACCEPTS_SCORE: !1,
    SHAPE: 3,
    MOTION_TYPE: "swarm",
    FACING_TYPE: "smoothWithMotion",
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
    CRAVES_ATTENTION: !0,
    BODY: {
        ACCELERATION: 3,
        PENETRATION: 1.5,
        HEALTH: .175,
        DAMAGE: 2.25,
        SPEED: 4.5,
        RESIST: 1.6,
        RANGE: 225,
        DENSITY: 12,
        PUSHABILITY: .5,
        FOV: 1.5
    },
    DIE_AT_RANGE: !0,
    BUFF_VS_FOOD: !0
}, exports.pdrone = {
    LABEL: "Swarm Drone",
    TYPE: "swarm",
    ACCEPTS_SCORE: !1,
    SHAPE: 3,
    COLOR_OVERRIDE: 5,
    MOTION_TYPE: "swarm",
    FACING_TYPE: "smoothWithMotion",
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
    CRAVES_ATTENTION: !0,
    BODY: {
        ACCELERATION: 3,
        PENETRATION: 1.5,
        HEALTH: .175,
        DAMAGE: 2.25,
        SPEED: 4.5,
        RESIST: 1.6,
        RANGE: 225,
        DENSITY: 12,
        PUSHABILITY: .5,
        FOV: 1.5
    },
    DIE_AT_RANGE: !0,
    BUFF_VS_FOOD: !0
}, exports.bee = {
    PARENT: [exports.swarm],
    PERSISTS_AFTER_DEATH: !0,
    SHAPE: 4,
    LABEL: "Drone",
    HITS_OWN_TYPE: "hardWithBuffer"
}, exports.wasp = {
    PARENT: [exports.swarm],
    PERSISTS_AFTER_DEATH: !0,
    SHAPE: 0,
    LABEL: "Drone",
    HITS_OWN_TYPE: "hardWithBuffer"
}, exports.autoswarm = {
    PARENT: [exports.swarm],
    AI: {
        FARMER: !0
    },
    INDEPENDENT: !0
}, exports.bee2 = {
    PARENT: [exports.swarm],
    PERSISTS_AFTER_DEATH: !0,
    SHAPE: 4,
    LABEL: "Drone",
    CONTROLLERS: ["nearestDifferentMaster", "canRepel", "mapTargetToGoal", "hangOutNearMaster"]
}, exports.trap = {
    LABEL: "Thrown Trap",
    TYPE: "trap",
    ACCEPTS_SCORE: !1,
    SHAPE: -3,
    MOTION_TYPE: "glide",
    FACING_TYPE: "turnWithSpeed",
    HITS_OWN_TYPE: "push",
    DIE_AT_RANGE: !0,
    BODY: {
        HEALTH: .5,
        DAMAGE: .5,
        RANGE: 450,
        DENSITY: 2.5,
        RESIST: 2.5,
        SPEED: 0
    }
}, exports.boomtrap = {
    LABEL: "Thrown Trap",
    TYPE: "trap",
    ACCEPTS_SCORE: !1,
    SHAPE: -3,
    MOTION_TYPE: "glide",
    FACING_TYPE: "turnWithSpeed",
    PERSISTS_AFTER_DEATH: !0,
    HITS_OWN_TYPE: "push",
    DIE_AT_RANGE: !0,
    BODY: {
        HEALTH: .5,
        DAMAGE: .5,
        RANGE: 450,
        DENSITY: 2.5,
        RESIST: 2.5,
        SPEED: 0
    }
}, exports.yellowtrap = {
    LABEL: "Thrown Defender Trap",
    TYPE: "trap",
    ACCEPTS_SCORE: !1,
    SHAPE: -3,
    MOTION_TYPE: "trap",
    COLOR_OVERRIDE: 3,
    FACING_TYPE: "turnWithSpeed",
    HITS_OWN_TYPE: "push",
    DIE_AT_RANGE: !0,
    BODY: {
        HEALTH: .5,
        DAMAGE: .5,
        RANGE: 450,
        DENSITY: 2.5,
        RESIST: 2.5,
        SPEED: 0
    }
}, exports.block = {
    LABEL: "Set Block",
    PARENT: [exports.trap],
    SHAPE: -4,
    MOTION_TYPE: "motor",
    CONTROLLERS: ["goToMasterTarget"],
    BODY: {
        SPEED: 1,
        DENSITY: 5
    }
}, exports.pavement_triangle = {
    TYPE: "turret",
    SHAPE: 3
}, exports.pavement_block = {
    LABEL: "Set Block",
    PARENT: [exports.trap],
    SHAPE: -4,
    MOTION_TYPE: "motor",
    CONTROLLERS: ["goToMasterTarget"],
    BODY: {
        SPEED: 1,
        DENSITY: 5
    },
    INDEPENDENT: !0,
    GUNS: [{
        POSITION: [1, 5, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.boomtrap,
            SHOOT_ON_DEATH: !0
        }
    }, {
        POSITION: [1, 8, 1, 0, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.boomtrap,
            SHOOT_ON_DEATH: !0
        }
    }, {
        POSITION: [1, 5, 1, 0, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.boomtrap,
            SHOOT_ON_DEATH: !0
        }
    }, {
        POSITION: [1, 5, 1, 0, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.boomtrap,
            SHOOT_ON_DEATH: !0
        }
    }, {
        POSITION: [1, 5, 1, 0, 0, 45, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.boomtrap,
            SHOOT_ON_DEATH: !0
        }
    }, {
        POSITION: [1, 5, 1, 0, 0, 135, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.boomtrap,
            SHOOT_ON_DEATH: !0
        }
    }, {
        POSITION: [1, 5, 1, 0, 0, 225, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.boomtrap,
            SHOOT_ON_DEATH: !0
        }
    }, {
        POSITION: [1, 5, 1, 0, 0, 315, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.boomtrap,
            SHOOT_ON_DEATH: !0
        }
    }],
    TURRETS: [{
        POSITION: [3, 7, 0, 45, 0, 1],
        TYPE: exports.pavement_triangle
    }, {
        POSITION: [3, 7, 0, 135, 0, 1],
        TYPE: exports.pavement_triangle
    }, {
        POSITION: [3, 7, 0, -45, 0, 1],
        TYPE: exports.pavement_triangle
    }, {
        POSITION: [3, 7, 0, -135, 0, 1],
        TYPE: exports.pavement_triangle
    }]
}, exports.bulletboom = {
    PARENT: [exports.bullet],
    PERSISTS_AFTER_DEATH: !0
}, exports.entrizor_trap = {
    LABEL: "Set Trap",
    PARENT: [exports.trap],
    INDEPENDENT: !0,
    GUNS: [{
        POSITION: [1, 5, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bulletboom,
            SHOOT_ON_DEATH: !0
        }
    }, {
        POSITION: [1, 8, 1, 0, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bulletboom,
            SHOOT_ON_DEATH: !0
        }
    }, {
        POSITION: [1, 5, 1, 0, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bulletboom,
            SHOOT_ON_DEATH: !0
        }
    }, {
        POSITION: [1, 5, 1, 0, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bulletboom,
            SHOOT_ON_DEATH: !0
        }
    }, {
        POSITION: [1, 5, 1, 0, 0, 45, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bulletboom,
            SHOOT_ON_DEATH: !0
        }
    }, {
        POSITION: [1, 5, 1, 0, 0, 135, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bulletboom,
            SHOOT_ON_DEATH: !0
        }
    }, {
        POSITION: [1, 5, 1, 0, 0, 225, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bulletboom,
            SHOOT_ON_DEATH: !0
        }
    }, {
        POSITION: [1, 5, 1, 0, 0, 315, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bulletboom,
            SHOOT_ON_DEATH: !0
        }
    }],
    TURRETS: [{
        POSITION: [3, 7, 0, 0, 0, 1],
        TYPE: exports.pavement_triangle
    }, {
        POSITION: [3, 7, 0, 120, 0, 1],
        TYPE: exports.pavement_triangle
    }, {
        POSITION: [3, 7, 0, 240, 0, 1],
        TYPE: exports.pavement_triangle
    }]
}, exports.dominatorBlock = {
    LABEL: "Set Block",
    PARENT: [exports.trap],
    SHAPE: -4,
    MOTION_TYPE: "motor",
    BODY: {
        SPEED: 1,
        DENSITY: 5
    }
}, exports.boomerang = {
    LABEL: "Boomerang",
    PARENT: [exports.trap],
    CONTROLLERS: ["boomerang"],
    MOTION_TYPE: "motor",
    HITS_OWN_TYPE: "never",
    SHAPE: -5,
    BODY: {
        SPEED: 1.25,
        RANGE: 120
    }
}, exports.drone = {
    LABEL: "Drone",
    TYPE: "drone",
    ACCEPTS_SCORE: !1,
    DANGER: 2,
    CONTROL_RANGE: 0,
    SHAPE: 3,
    MOTION_TYPE: "chase",
    FACING_TYPE: "smoothToTarget",
    CONTROLLERS: ["nearestDifferentMaster", "canRepel", "mapTargetToGoal", "hangOutNearMaster"],
    AI: {
        BLIND: !0
    },
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: .6,
        ACCELERATION: .05,
        HEALTH: .5,
        DAMAGE: 2.25,
        SPEED: 4.1,
        RANGE: 200,
        DENSITY: .03,
        RESIST: 1.5,
        FOV: .8
    },
    HITS_OWN_TYPE: "hard",
    DRAW_HEALTH: !1,
    CLEAR_ON_MASTER_UPGRADE: !0,
    BUFF_VS_FOOD: !0
};
let meme = 100;
115 !== meme && (meme += 1), exports.bulletgrow = {
    PARENT: [exports.bullet],
    MOTION_TYPE: "growboom",
    CONTROLLERS: ["doNothing"],
    LABEL: "Explosion",
    BODY: {
        PENETRATION: 15,
        SPEED: 0,
        RANGE: 90,
        DENSITY: .1,
        HEALTH: 1,
        DAMAGE: 30,
        PUSHABILITY: 0
    },
    PERSISTS_AFTER_DEATH: !0
}, exports.boomdrone = {
    PARENT: [exports.drone],
    LABEL: "Boom Drone",
    CONTROLLERS: ["nearestDifferentMaster", "canRepel", "mapTargetToGoal", "hangOutNearMaster", "dontFire"],
    GUNS: [{
        POSITION: [.5, 14, 1.2, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.frozen]),
            TYPE: exports.bulletgrow,
            SHOOT_ON_DEATH: !0,
            SKIN: 5
        }
    }]
}, exports.gdrone = {
    LABEL: "Drone",
    TYPE: "drone",
    ACCEPTS_SCORE: !1,
    DANGER: 2,
    COLOR_OVERRIDE: 18,
    CONTROL_RANGE: 0,
    SHAPE: 3,
    MOTION_TYPE: "chase",
    FACING_TYPE: "smoothToTarget",
    CONTROLLERS: ["nearestDifferentMaster", "canRepel", "mapTargetToGoal", "hangOutNearMaster"],
    AI: {
        BLIND: !0
    },
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: .6,
        ACCELERATION: .05,
        HEALTH: .5,
        DAMAGE: 2.25,
        SPEED: 4.1,
        RANGE: 200,
        DENSITY: .03,
        RESIST: 1.5,
        FOV: .8
    },
    HITS_OWN_TYPE: "hard",
    DRAW_HEALTH: !1,
    CLEAR_ON_MASTER_UPGRADE: !0,
    BUFF_VS_FOOD: !0
}, exports.dcshard = {
    PARENT: [exports.swarm],
    LABEL: "Cluster Shard",
    PERSISTS_AFTER_DEATH: !0
}, exports.clusterturret = {
    LABEL: "",
    TURRET_COLOR: "cluster",
    TYPE: "turret",
    SHAPE: 3,
    INDEPENDENT: !0
}, exports.dronecluster = {
    LABEL: "Drone Cluster",
    TYPE: "drone",
    ACCEPTS_SCORE: !1,
    DANGER: 2,
    CONTROL_RANGE: 0,
    SHAPE: [
        [0, 0]
    ],
    MOTION_TYPE: "chase",
    FACING_TYPE: "smoothToTarget",
    CONTROLLERS: ["nearestDifferentMaster", "canRepel", "mapTargetToGoal", "hangOutNearMaster", "dontFire"],
    AI: {
        BLIND: !0
    },
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: .6,
        ACCELERATION: .05,
        HEALTH: .5,
        DAMAGE: 2.25,
        SPEED: 4.1,
        RANGE: 200,
        DENSITY: .03,
        RESIST: 1.5,
        FOV: .8
    },
    HITS_OWN_TYPE: "hard",
    DRAW_HEALTH: !1,
    CLEAR_ON_MASTER_UPGRADE: !0,
    BUFF_VS_FOOD: !0,
    GUNS: [{
        POSITION: [18, 35, 1, 0, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.dcshard,
            COLOR_OVERRIDE: 10,
            SKIN: 5,
            SHOOT_ON_DEATH: !0
        }
    }, {
        POSITION: [18, 35, 1, 0, 0, 252, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.dcshard,
            COLOR_OVERRIDE: 11,
            SKIN: 5,
            SHOOT_ON_DEATH: !0
        }
    }, {
        POSITION: [18, 35, 1, 0, 0, 108, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.dcshard,
            COLOR_OVERRIDE: 12,
            SKIN: 5,
            SHOOT_ON_DEATH: !0
        }
    }, {
        POSITION: [18, 35, 1, 0, 0, 324, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.dcshard,
            COLOR_OVERRIDE: 15,
            SKIN: 5,
            SHOOT_ON_DEATH: !0
        }
    }, {
        POSITION: [18, 35, 1, 0, 0, 36, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.dcshard,
            COLOR_OVERRIDE: 13,
            SKIN: 5,
            SHOOT_ON_DEATH: !0
        }
    }],
    TURRETS: [{
        POSITION: [11, -12, 0, 0, 190, 1],
        TYPE: [exports.clusterturret, {}]
    }, {
        POSITION: [11, -12, 0, 72, 190, 1],
        TYPE: [exports.clusterturret, {}]
    }, {
        POSITION: [11, -12, 0, 144, 190, 1],
        TYPE: [exports.clusterturret, {}]
    }, {
        POSITION: [11, -12, 0, 216, 190, 1],
        TYPE: [exports.clusterturret, {}]
    }, {
        POSITION: [11, -12, 0, 288, 190, 1],
        TYPE: [exports.clusterturret, {}]
    }]
}, exports.circleDrone = {
    LABEL: "Drone",
    TYPE: "drone",
    ACCEPTS_SCORE: !1,
    DANGER: 2,
    CONTROL_RANGE: 0,
    SHAPE: 0,
    MOTION_TYPE: "chase",
    FACING_TYPE: "smoothToTarget",
    CONTROLLERS: ["nearestDifferentMaster", "canRepel", "mapTargetToGoal", "hangOutNearMaster"],
    AI: {
        BLIND: !0
    },
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: .6,
        ACCELERATION: .05,
        HEALTH: .5,
        DAMAGE: 3,
        SPEED: 4.1,
        RANGE: 200,
        DENSITY: .03,
        RESIST: 1.5,
        FOV: .8
    },
    HITS_OWN_TYPE: "hard",
    DRAW_HEALTH: !1,
    CLEAR_ON_MASTER_UPGRADE: !0,
    BUFF_VS_FOOD: !0
}, exports.baseDrone = {
    LABEL: "Drone",
    TYPE: "drone",
    ACCEPTS_SCORE: !1,
    DANGER: 2,
    CONTROL_RANGE: 0,
    SHAPE: 3,
    MOTION_TYPE: "chase",
    FACING_TYPE: "smoothToTarget",
    CONTROLLERS: ["nearestDifferentMaster", "canRepel", "mapTargetToGoal", "hangOutNearMaster"],
    AI: {
        BLIND: !0
    },
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: .6,
        ACCELERATION: .05,
        HEALTH: .5,
        DAMAGE: 2.25,
        SPEED: 12.1,
        RANGE: 200,
        DENSITY: .03,
        RESIST: 1.5,
        FOV: 2
    },
    HITS_OWN_TYPE: "hard",
    DRAW_HEALTH: !1,
    CLEAR_ON_MASTER_UPGRADE: !0,
    BUFF_VS_FOOD: !0
}, exports.sunchip = {
    PARENT: [exports.drone],
    SHAPE: 4,
    NECRO: !0,
    HITS_OWN_TYPE: "hard",
    BODY: {
        FOV: .5
    },
    AI: {
        BLIND: !0,
        FARMER: !0
    },
    DRAW_HEALTH: !1
}, exports.ysunchip = {
    PARENT: [exports.drone],
    SHAPE: 4,
    NECRO: !0,
    COLOR_OVERRIDE: 13,
    HITS_OWN_TYPE: "hard",
    BODY: {
        FOV: .5
    },
    AI: {
        BLIND: !0,
        FARMER: !0
    },
    DRAW_HEALTH: !1
}, exports.evolvedsquare = {
    PARENT: [exports.sunchip],
    GUNS: [{
        POSITION: [19, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.single]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 10, -1.6, 6.5, 0, 0, 0]
    }]
}, exports.autosunchip = {
    PARENT: [exports.sunchip],
    AI: {
        BLIND: !0,
        FARMER: !0
    },
    INDEPENDENT: !0
}, exports.gemdrone = {
    PARENT: [exports.drone],
    SHAPE: 6
}, exports.gunchip = {
    PARENT: [exports.drone],
    SHAPE: -2,
    NECRO: !0,
    HITS_OWN_TYPE: "hard",
    BODY: {
        FOV: .5
    },
    AI: {
        BLIND: !0,
        FARMER: !0
    },
    DRAW_HEALTH: !1
}, exports.launcherMissile = {
    PARENT: [exports.bullet],
    LABEL: "Missile",
    INDEPENDENT: !0,
    BODY: {
        RANGE: 120
    },
    GUNS: [{
        POSITION: [14, 6, 1, 0, 0, 180, 0],
        PROPERTIES: {
            AUTOFIRE: !0,
            SHOOT_SETTINGS: combineStats([g.basic, [.5, 2, 1, .9, 1, .5, 1, 1, 1, .3, 10, 2, 1]]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: !0
            }],
            STAT_CALCULATOR: gunCalcNames.thruster
        }
    }]
}, exports.fc_bullet = {
    PARENT: [exports.bullet],
    LABEL: "Arc Missile",
    INDEPENDENT: !0,
    BODY: {
        RANGE: 120
    },
    FACING_TYPE: "autospin",
    GUNS: [{
        POSITION: [17, 8, -1.5, 0, 0, 90, 0],
        PROPERTIES: {
            AUTOFIRE: !0,
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.bitmorereload]),
            TYPE: [exports.swarm, {
                PERSISTS_AFTER_DEATH: !0
            }]
        }
    }, {
        POSITION: [17, 8, -1.5, 0, 0, 270, .5],
        PROPERTIES: {
            AUTOFIRE: !0,
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.bitmorereload]),
            TYPE: [exports.swarm, {
                PERSISTS_AFTER_DEATH: !0
            }]
        }
    }]
}, exports.rocketmissile = {
    PARENT: [exports.bullet],
    LABEL: "Missile",
    INDEPENDENT: !0,
    BODY: {
        RANGE: 120
    },
    GUNS: [{
        POSITION: [16.5, 10, 1.5, 0, 0, 180, 1.8],
        PROPERTIES: {
            AUTOFIRE: !0,
            SHOOT_SETTINGS: combineStats([g.basic, [.25, 2, 3, .8, .7, .6, .8, .6, .6, .7, 1, 3, 1]]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: !0
            }],
            STAT_CALCULATOR: gunCalcNames.thruster
        }
    }]
}, exports.betamissle = {
    PARENT: [exports.bullet],
    LABEL: "Rocket",
    INDEPENDENT: !0,
    BODY: {
        RANGE: 120
    },
    SHAPE: [
        [.8, .7],
        [1, 0],
        [.8, -.7],
        [-.4, -.7],
        [-.6, -1],
        [-1, -1],
        [-1, -.6],
        [-.7, -.6],
        [-.7, -.2],
        [-1, -.2],
        [-1, .2],
        [-.7, .2],
        [-.7, .6],
        [-1, .6],
        [-1, 1],
        [-.6, 1],
        [-.4, .7]
    ]
}, exports.missile = {
    PARENT: [exports.bullet],
    LABEL: "Missile",
    INDEPENDENT: !0,
    BODY: {
        RANGE: 120
    },
    GUNS: [{
        POSITION: [14, 6, 1, 0, -2, 130, 0],
        PROPERTIES: {
            AUTOFIRE: !0,
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .5, 1, .9, 1, .5, 1, 1, 1, .3, 10, 2, 1]]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: !0
            }],
            STAT_CALCULATOR: gunCalcNames.thruster
        }
    }, {
        POSITION: [14, 6, 1, 0, 2, 230, 0],
        PROPERTIES: {
            AUTOFIRE: !0,
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .5, 1, .9, 1, .5, 1, 1, 1, .3, 10, 2, 1]]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: !0
            }],
            STAT_CALCULATOR: gunCalcNames.thruster
        }
    }]
}, exports.spinmissile = {
    PARENT: [exports.bullet],
    LABEL: "Missile",
    INDEPENDENT: !0,
    BODY: {
        RANGE: 120
    },
    FACING_TYPE: "turnWithSpeed",
    GUNS: [{
        POSITION: [14, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            AUTOFIRE: !0,
            SHOOT_SETTINGS: combineStats([g.basic, [.5, 2, 1, .9, 1, .5, 1, 1, 1, .3, 10, 2, 1]]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: !0
            }],
            STAT_CALCULATOR: gunCalcNames.thruster
        }
    }, {
        POSITION: [14, 8, 1, 0, 0, 180, 0],
        PROPERTIES: {
            AUTOFIRE: !0,
            SHOOT_SETTINGS: combineStats([g.basic, [.5, 2, 1, .9, 1, .5, 1, 1, 1, .3, 10, 2, 1]]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: !0
            }],
            STAT_CALCULATOR: gunCalcNames.thruster
        }
    }]
}, exports.spinmissile2 = {
    PARENT: [exports.bullet],
    LABEL: "Missile",
    INDEPENDENT: !0,
    BODY: {
        RANGE: 120
    },
    FACING_TYPE: "turnWithSpeed",
    GUNS: [{
        POSITION: [14, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            AUTOFIRE: !0,
            SHOOT_SETTINGS: combineStats([g.basic, [.5, 2, 1, .9, 1, .5, 1, 1, 1, .3, 10, 2, 1]]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: !0
            }],
            STAT_CALCULATOR: gunCalcNames.thruster
        }
    }, {
        POSITION: [14, 8, 1, 0, 0, 180, 0],
        PROPERTIES: {
            AUTOFIRE: !0,
            SHOOT_SETTINGS: combineStats([g.basic, [.5, 2, 1, .9, 1, .5, 1, 1, 1, .3, 10, 2, 1]]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: !0
            }],
            STAT_CALCULATOR: gunCalcNames.thruster
        }
    }, {
        POSITION: [14, 8, -1.7, 0, 0, 90, 0],
        PROPERTIES: {
            AUTOFIRE: !0,
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.swarm, {
                PERSISTS_AFTER_DEATH: !0
            }],
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [14, 8, -1.7, 0, 0, 270, 0],
        PROPERTIES: {
            AUTOFIRE: !0,
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.swarm, {
                PERSISTS_AFTER_DEATH: !0
            }],
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }]
}, exports.hypermissile = {
    PARENT: [exports.missile],
    GUNS: [{
        POSITION: [14, 6, 1, 0, -2, 150, 0],
        PROPERTIES: {
            AUTOFIRE: !0,
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .5, 1, .9, 1, .5, 1, 1, 1, .3, 10, 2, 1]]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: !0
            }],
            STAT_CALCULATOR: gunCalcNames.thruster
        }
    }, {
        POSITION: [14, 6, 1, 0, 2, 210, 0],
        PROPERTIES: {
            AUTOFIRE: !0,
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .5, 1, .9, 1, .5, 1, 1, 1, .3, 10, 2, 1]]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: !0
            }],
            STAT_CALCULATOR: gunCalcNames.thruster
        }
    }, {
        POSITION: [14, 6, 1, 0, -2, 90, .5],
        PROPERTIES: {
            AUTOFIRE: !0,
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .5, 1, .9, 1, .5, 1, 1, 1, .3, 10, 2, 1]]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: !0
            }]
        }
    }, {
        POSITION: [14, 6, 1, 0, 2, 270, .5],
        PROPERTIES: {
            AUTOFIRE: !0,
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .5, 1, .9, 1, .5, 1, 1, 1, .3, 10, 2, 1]]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: !0
            }]
        }
    }]
}, exports.hypermissile2 = {
    PARENT: [exports.missile],
    COLOR_OVERRIDE: 2,
    GUNS: [{
        POSITION: [14, 6, 1, 0, -2, 150, 0],
        PROPERTIES: {
            AUTOFIRE: !0,
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .5, 1, .9, 1, .5, 1, 1, 1, .3, 10, 2, 1]]),
            TYPE: [exports.obullet, {
                PERSISTS_AFTER_DEATH: !0
            }],
            STAT_CALCULATOR: gunCalcNames.thruster
        }
    }, {
        POSITION: [14, 6, 1, 0, 2, 210, 0],
        PROPERTIES: {
            AUTOFIRE: !0,
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .5, 1, .9, 1, .5, 1, 1, 1, .3, 10, 2, 1]]),
            TYPE: [exports.obullet, {
                PERSISTS_AFTER_DEATH: !0
            }],
            STAT_CALCULATOR: gunCalcNames.thruster
        }
    }, {
        POSITION: [14, 6, 1, 0, -2, 90, .5],
        PROPERTIES: {
            AUTOFIRE: !0,
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .5, 1, .9, 1, .5, 1, 1, 1, .3, 10, 2, 1]]),
            TYPE: [exports.obullet, {
                PERSISTS_AFTER_DEATH: !0
            }]
        }
    }, {
        POSITION: [14, 6, 1, 0, 2, 270, .5],
        PROPERTIES: {
            AUTOFIRE: !0,
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .5, 1, .9, 1, .5, 1, 1, 1, .3, 10, 2, 1]]),
            TYPE: [exports.obullet, {
                PERSISTS_AFTER_DEATH: !0
            }]
        }
    }]
}, exports.snake = {
    PARENT: [exports.bullet],
    LABEL: "Snake",
    INDEPENDENT: !0,
    BODY: {
        RANGE: 120
    },
    GUNS: [{
        POSITION: [6, 12, 1.4, 8, 0, 180, 0],
        PROPERTIES: {
            AUTOFIRE: !0,
            STAT_CALCULATOR: gunCalcNames.thruster,
            SHOOT_SETTINGS: combineStats([g.basic, [.8, .8, .1, .5, 1, 1, 1, .25, 1, .75, 2, 2, 1]]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: !0
            }]
        }
    }, {
        POSITION: [10, 12, .8, 8, 0, 180, .5],
        PROPERTIES: {
            AUTOFIRE: !0,
            NEGATIVE_RECOIL: !0,
            STAT_CALCULATOR: gunCalcNames.thruster,
            SHOOT_SETTINGS: combineStats([g.basic, [.8, .8, .25, .75, 1, 1, 1, .25, 1, .75, 2, 2, 1]]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: !0
            }]
        }
    }]
}, exports.minihive = {
    PARENT: [exports.bullet],
    LABEL: "Mini Hive",
    BODY: {
        RANGE: 90,
        FOV: .5
    },
    FACING_TYPE: "turnWithSpeed",
    INDEPENDENT: !0,
    CONTROLLERS: ["alwaysFire", "nearestDifferentMaster", "targetSelf"],
    AI: {
        NO_LEAD: !0
    },
    GUNS: [{
        POSITION: [7, 9.5, .6, 7, 0, 0, .2],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [7, 9.5, .6, 7, 0, 120, .4],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [7, 9.5, .6, 7, 0, 240, .6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }]
},
   exports.dhive = {
        PARENT: [exports.bullet],
        LABEL: 'Droneive',
        BODY: {
            RANGE: 120,
            FOV: 1.5,
        },  
        FACING_TYPE: 'turnWithSpeed',
        INDEPENDENT: true,
        CONTROLLERS: ['alwaysFire', 'nearestDifferentMaster', 'targetSelf',],
        AI: { NO_LEAD: true, },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [   7,     12,    1.2,     8,      0,     180,     0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: [exports.drone, { INDEPENDENT: true, }],
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: false,    
            MAX_CHILDREN: 39,
                }, }, {
                          POSITION: [   7,     12,    1.2,     8,      0,     60,     0,   ], 

        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: [exports.drone, { INDEPENDENT: true, }],
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: false,    
            MAX_CHILDREN: 39,
                }, }, {
                          POSITION: [   7,     12,    1.2,     8,      0,     -60,     0,   ], 

        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: [exports.drone, { INDEPENDENT: true, }],
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: false,    
            MAX_CHILDREN: 39,
                }, }, 
        ],
    };exports.mininest = {
    PARENT: [exports.bullet],
    LABEL: "Wasp Nest",
    BODY: {
        RANGE: 90,
        FOV: .5
    },
    FACING_TYPE: "turnWithSpeed",
    INDEPENDENT: !0,
    CONTROLLERS: ["alwaysFire", "nearestDifferentMaster", "targetSelf"],
    AI: {
        NO_LEAD: !0
    },
    SHAPE: 8,
    GUNS: [{
        POSITION: [9, 9.5, .6, 7, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees, g.fast, g.bitmorereload]),
            TYPE: exports.wasp,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [9, 9.5, .6, 7, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees, g.fast, g.bitmorereload]),
            TYPE: exports.wasp,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }]
}, exports.hive = {
    PARENT: [exports.bullet],
    LABEL: "Hive",
    BODY: {
        RANGE: 90,
        FOV: .5
    },
    FACING_TYPE: "turnWithSpeed",
    INDEPENDENT: !0,
    CONTROLLERS: ["alwaysFire", "nearestDifferentMaster", "targetSelf"],
    AI: {
        NO_LEAD: !0
    },
    GUNS: [{
        POSITION: [7, 9.5, .6, 7, 0, 108, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [7, 9.5, .6, 7, 0, 180, .2],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [7, 9.5, .6, 7, 0, 252, .4],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [7, 9.5, .6, 7, 0, 324, .6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [7, 9.5, .6, 7, 0, 36, .8],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }]
};
const base = {
    ACCEL: 1.6,
    SPEED: 5.25,
    HEALTH: 20,
    DAMAGE: 3,
    RESIST: 1,
    PENETRATION: 1.05,
    SHIELD: 8,
    REGEN: .025,
    FOV: 1,
    DENSITY: .5
};
exports.genericTank = {
    LABEL: "Unknown Class",
    TYPE: "tank",
    DAMAGE_CLASS: 2,
    DANGER: 5,
    MOTION_TYPE: "motor",
    FACING_TYPE: "toTarget",
    SIZE: 12,
    MAX_CHILDREN: 0,
    DAMAGE_EFFECTS: !1,
    BODY: {
        ACCELERATION: base.ACCEL,
        SPEED: base.SPEED,
        HEALTH: base.HEALTH,
        DAMAGE: base.DAMAGE,
        PENETRATION: base.PENETRATION,
        SHIELD: base.SHIELD,
        REGEN: base.REGEN,
        FOV: base.FOV,
        DENSITY: base.DENSITY,
        PUSHABILITY: .9,
        HETERO: 3
    },
    GUNS: [],
    TURRETS: [],
    GIVE_KILL_MESSAGE: !0,
    DRAW_HEALTH: !0,
    HITS_OWN_TYPE: "hardOnlyTanks"
};
let gun = {};

function makeAuto(T, e = -1, S = {}) {
    let E = {
        type: exports.autoTurret,
        size: 10,
        independent: !0
    };
    null != S.type && (E.type = S.type), null != S.size && (E.size = S.size), null != S.independent && (E.independent = S.independent);
    let t = JSON.parse(JSON.stringify(T)),
        O = {
            POSITION: [E.size, 0, 0, 180, 360, 1],
            TYPE: [E.type, {
                CONTROLLERS: ["nearestDifferentMaster"],
                INDEPENDENT: E.independent
            }]
        };
    return null != T.GUNS && (t.GUNS = T.GUNS), null == T.TURRETS ? t.TURRETS = [O] : t.TURRETS = [...T.TURRETS, O], t.LABEL = -1 == e ? "Auto-" + T.LABEL : e, t.DANGER = T.DANGER ? T.DANGER + 1 : 9, t
}

function makeHybrid(T, e = -1) {
    let S = JSON.parse(JSON.stringify(T)),
        E = {
            POSITION: [7, 12, 1.2, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.weak]),
                TYPE: [exports.drone, {
                    INDEPENDENT: !0
                }],
                AUTOFIRE: !0,
                SYNCS_SKILLS: !0,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: !1,
                MAX_CHILDREN: 3
            }
        };
    return null != T.TURRETS && (S.TURRETS = T.TURRETS), null == T.GUNS ? S.GUNS = [E] : S.GUNS = [...T.GUNS, E], S.LABEL = -1 == e ? "Hybrid " + T.LABEL : e, S
}
exports.swarmTurret = {
    PARENT: [exports.genericTank],
    LABEL: "",
    TYPE: "turret",
    BODY: {
        FOV: .8
    },
    COLOR: 16,
    INDEPENDENT: !0,
    CONTROLLERS: ["nearestDifferentMaster"],
    GUNS: [{
        POSITION: [18, 12, -1.3, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm
        }
    }]
}, exports.trapswarm = {
    PARENT: [exports.trap],
    TURRETS: [{
        POSITION: [13, 0, 0, 0, 360, 1],
        TYPE: exports.swarmTurret
    }]
}, exports.autoTurret = {
    PARENT: [exports.genericTank],
    LABEL: "Turret",
    TYPE: "turret",
    BODY: {
        FOV: .8
    },
    COLOR: 16,
    GUNS: [{
        POSITION: [22, 12, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [1.5, .3, 1, 1, .8, .2, 1.5, 1.25, 1.25, 1, 2, 1, 1]]),
            TYPE: exports.bullet
        }
    }]
}, exports.drivebullet = makeAuto(exports.bullet), exports.drivesquare = {
    PARENT: [exports.genericTank],
    LABEL: "Drive Square",
    SHAPE: 4,
    SIZE: 10
}, exports.ringB = {
    PARENT: [exports.bullet],
    LABEL: "",
    SHAPE: 166,
    COLOR_OVERRIDE: 16,
    GUNS: [{
        POSITION: [1, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lance]),
            TYPE: exports.invisabullet,
            AUTOFIRE: !0,
            SKIN: 5
        }
    }]
}, exports.shootRing = {
    PARENT: [exports.genericTank],
    LABEL: "Ring",
    TYPE: "turret",
    FACING_TYPE: "reverseFace",
    CONTROLLERS: ["canRepel"],
    BODY: {
        FOV: .8
    },
    COLOR: 16,
    SHAPE: 166,
    GUNS: [{
        POSITION: [1, 20, 1, 0, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast, g.power, [9e3, .3, 1, 1, .8, .2, 1.5, 1.25, 1.25, 1, 2, 1, 1]]),
            TYPE: exports.ringB,
            MAX_CHILDREN: 1
        }
    }]
}, exports.invisRing = {
    PARENT: [exports.genericTank],
    LABEL: "",
    TYPE: "turret",
    SHAPE: [
        [0, 0]
    ]
}, exports.ringT = {
    PARENT: [exports.genericTank],
    LABEL: "Ring",
    TYPE: "turret",
    SHAPE: 166,
    BODY: {
        FOV: .8
    },
    COLOR: 16,
    GUNS: [{
        POSITION: [1, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lance]),
            TYPE: exports.invisabullet,
            AUTOFIRE: !0,
            SKIN: 5
        }
    }]
}, exports.radarTurret = {
    PARENT: [exports.genericTank],
    LABEL: "",
    TYPE: "turret",
    BODY: {
        FOV: 1.2
    },
    COLOR: 124,
    INDEPENDENT: !0,
    CONTROLLERS: ["nearestDifferentMaster"],
    GUNS: [{
        POSITION: [37, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            FILL: 124
        }
    }]
}, exports.radarRing = {
    PARENT: [exports.genericTank],
    LABEL: "",
    TYPE: "turret",
    BODY: {
        FOV: 1.2
    },
    COLOR: 16,
    INDEPENDENT: !0,
    SHAPE: 160
}, exports.propellerA = {
    PARENT: [exports.genericTank],
    TYPE: "turret",
    CONTROLLERS: ["reversespin"],
    COLOR: 16,
    GUNS: [{
        POSITION: [32, 8.5, 1, 0, 0, 0, 0]
    }, {
        POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
    }, {
        POSITION: [32, 8.5, 1, 0, 0, 90, 0]
    }, {
        POSITION: [5, 8.5, -1.6, 8, 0, 90, 0]
    }, {
        POSITION: [32, 8.5, 1, 0, 0, 180, 0]
    }, {
        POSITION: [5, 8.5, -1.6, 8, 0, 180, 0]
    }, {
        POSITION: [32, 8.5, 1, 0, 0, 270, 0]
    }, {
        POSITION: [5, 8.5, -1.6, 8, 0, 270, 0]
    }]
}, exports.propellerB = {
    PARENT: [exports.genericTank],
    TYPE: "turret",
    CONTROLLERS: ["reversespin"],
    COLOR: 16,
    GUNS: [{
        POSITION: [8, 8, -1.6, 8, 0, 0, 0]
    }, {
        POSITION: [8, 8, -1.6, 8, 0, 120, 0]
    }, {
        POSITION: [8, 8, -1.6, 8, 0, 240, 0]
    }]
}, exports.droneAutoTurret = {
    PARENT: [exports.genericTank],
    LABEL: "Turret",
    TYPE: "turret",
    BODY: {
        FOV: .8
    },
    GUNS: [{
        POSITION: [22, 10, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.overdrive]),
            TYPE: exports.bullet
        }
    }]
}, exports.trapTurret = {
    PARENT: [exports.genericTank],
    LABEL: "Turret",
    TYPE: "turret",
    CONTROLLERS: ["nearestDifferentMaster"],
    COLOR: 16,
    GUNS: [{
        POSITION: [16, 14, 1, 0, 0, 0, 0]
    }, {
        POSITION: [4, 14, 1.8, 16, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.lowpower, g.halfreload, g.slow]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }]
}, exports.trapTurret2 = {
    PARENT: [exports.genericTank],
    LABEL: "Turret",
    TYPE: "turret",
    CONTROLLERS: ["nearestDifferentMaster"],
    COLOR: 16,
    GUNS: [{
        POSITION: [16, 14, 1, 0, 0, 0, 0]
    }, {
        POSITION: [4, 14, 1.8, 16, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.lowpower, g.halfreload, g.slow]),
            TYPE: exports.yellowtrap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }]
}, exports.trapfernobullet = {
    LABEL: "Flame",
    TYPE: "bullet",
    SHAPE: 4,
    ACCEPTS_SCORE: !1,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 80,
        DENSITY: 1.25,
        HEALTH: .2,
        DAMAGE: 6,
        PUSHABILITY: .3
    },
    INDEPENDENT: !0,
    MOTION_TYPE: "growslow",
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: !0,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: !0,
    CONTROLLERS: ["nearestDifferentMaster"],
    TURRETS: [{
        POSITION: [12, 0, 0, 180, 360, 1],
        TYPE: [exports.trapTurret, {}]
    }]
}, exports.infernodrivebullet = {
    LABEL: "Flame",
    TYPE: "bullet",
    SHAPE: 4,
    ACCEPTS_SCORE: !1,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 80,
        DENSITY: 1.25,
        HEALTH: .2,
        DAMAGE: 6,
        PUSHABILITY: .3
    },
    INDEPENDENT: !0,
    MOTION_TYPE: "growslow",
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: !0,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: !0,
    CONTROLLERS: ["nearestDifferentMaster"],
    TURRETS: [{
        POSITION: [12, 0, 0, 180, 360, 1],
        TYPE: [exports.droneAutoTurret]
    }]
}, exports.machineAutoTurret = {
    PARENT: [exports.genericTank],
    LABEL: "Turret",
    TYPE: "turret",
    COLOR: 16,
    GUNS: [{
        POSITION: [14, 11, 1.3, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.mach, g.slow]),
            TYPE: exports.bullet
        }
    }]
}, exports.bluemach = {
    PARENT: [exports.genericTank],
    LABEL: "",
    TYPE: "turret",
    COLOR: 16,
    GUNS: [{
        POSITION: [12, 13, 1.5, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil, g.halfrange, g.fake]),
            TYPE: exports.bulletcool,
            MAX_CHILDREN: 25
        }
    }, {
        POSITION: [12, 13, 1.5, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil, g.halfrange]),
            TYPE: exports.bulletcool,
            SKIN: 2,
            MAX_CHILDREN: 25,
            FILL: 30
        }
    }]
}, exports.autoSmasherTurret = {
    PARENT: [exports.genericTank],
    LABEL: "Turret",
    TYPE: "turret",
    COLOR: 16,
    GUNS: [{
        POSITION: [20, 6, 1, 0, 5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.fast, g.mach, g.pound, g.morereload, g.morereload]),
            TYPE: exports.bullet,
            STAT_CALCULATOR: gunCalcNames.fixedReload
        }
    }, {
        POSITION: [20, 6, 1, 0, -5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.fast, g.mach, g.pound, g.morereload, g.morereload]),
            TYPE: exports.bullet,
            STAT_CALCULATOR: gunCalcNames.fixedReload
        }
    }]
}, exports.auto3gun = {
    PARENT: [exports.genericTank],
    LABEL: "",
    TYPE: "turret",
    BODY: {
        FOV: 3
    },
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    GUNS: [{
        POSITION: [22, 10, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
            TYPE: exports.bullet
        }
    }]
}, exports.defturret = {
    PARENT: [exports.genericTank],
    LABEL: "",
    TYPE: "turret",
    BODY: {
        FOV: 3
    },
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    GUNS: [{
        POSITION: [22, 10, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.morespeed]),
            TYPE: exports.yellowbullet
        }
    }]
}, exports.auto5gun = {
    PARENT: [exports.genericTank],
    LABEL: "",
    TYPE: "turret",
    BODY: {
        FOV: 3
    },
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    GUNS: [{
        POSITION: [24, 11, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.five]),
            TYPE: exports.bullet
        }
    }]
}, exports.heavy3gun = {
    PARENT: [exports.genericTank],
    LABEL: "",
    TYPE: "turret",
    BODY: {
        FOV: 2,
        SPEED: .9
    },
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    GUNS: [{
        POSITION: [22, 14, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto]),
            TYPE: exports.bullet
        }
    }]
}, exports.sniper3gun = {
    PARENT: [exports.genericTank],
    LABEL: "",
    TYPE: "turret",
    BODY: {
        FOV: 5
    },
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    GUNS: [{
        POSITION: [27, 9, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.auto, g.assass, g.autosnipe]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5, 9, -1.5, 8, 0, 0, 0]
    }]
}, exports.bansheegun = {
    PARENT: [exports.genericTank],
    LABEL: "",
    TYPE: "turret",
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    INDEPENDENT: !0,
    GUNS: [{
        POSITION: [26, 10, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.auto]),
            TYPE: exports.bullet
        }
    }]
}, exports.auto4gun = {
    PARENT: [exports.genericTank],
    LABEL: "",
    TYPE: "turret",
    BODY: {
        FOV: 2
    },
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    GUNS: [{
        POSITION: [16, 4, 1, 0, -3.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.slow]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [16, 4, 1, 0, 3.5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.slow]),
            TYPE: exports.bullet
        }
    }]
}, exports.bigauto4gun = {
    PARENT: [exports.genericTank],
    LABEL: "",
    TYPE: "turret",
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    GUNS: [{
        POSITION: [14, 5, 1, 0, -4.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.halfreload]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [14, 5, 1, 0, 4.5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.halfreload]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [16, 5, 1, 0, 0, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.halfreload]),
            TYPE: exports.bullet
        }
    }]
}, exports.bigauto4gun2 = {
    PARENT: [exports.genericTank],
    LABEL: "",
    TYPE: "turret",
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    GUNS: [{
        POSITION: [14, 5, 1, 0, -4.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.halfreload]),
            TYPE: exports.pbullet
        }
    }, {
        POSITION: [14, 5, 1, 0, 4.5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.halfreload]),
            TYPE: exports.pbullet
        }
    }, {
        POSITION: [16, 5, 1, 0, 0, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.halfreload]),
            TYPE: exports.pbullet
        }
    }]
}, exports.tritrapgun = {
    PARENT: [exports.genericTank],
    LABEL: "Turret",
    TYPE: "turret",
    COLOR: 16,
    GUNS: [{
        POSITION: [20, 16, 1, 0, 0, 0, 0]
    }, {
        POSITION: [2, 16, 1.1, 20, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, [2, 1, 1, .9, .6, .8, .7, 1, 1, 1, 1, 1, 1]]),
            TYPE: exports.block
        }
    }]
}, exports.smasherBody = {
    LABEL: "",
    CONTROLLERS: ["spin"],
    COLOR: 9,
    SHAPE: 6,
    INDEPENDENT: !0
}, exports.spikeBody = {
    LABEL: "",
    CONTROLLERS: ["spin"],
    COLOR: 9,
    SHAPE: 4,
    INDEPENDENT: !0
}, exports.spikeBody1 = {
    LABEL: "",
    CONTROLLERS: ["fastspin"],
    COLOR: 9,
    SHAPE: 3,
    INDEPENDENT: !0
}, exports.landmineBody = {
    LABEL: "",
    CONTROLLERS: ["fastspin"],
    COLOR: 9,
    SHAPE: 6,
    INDEPENDENT: !0
}, exports.spikeBody2 = {
    LABEL: "",
    CONTROLLERS: ["reversespin"],
    COLOR: 9,
    SHAPE: 3,
    INDEPENDENT: !0
}, exports.megasmashBody = {
    LABEL: "",
    CONTROLLERS: ["spin"],
    COLOR: 9,
    SHAPE: -6,
    INDEPENDENT: !0
}, exports.dominationBody = {
    LABEL: "",
    CONTROLLERS: ["dontTurn"],
    COLOR: 9,
    SHAPE: 600,
    INDEPENDENT: !0
}, exports.baseDroneSpawner = {
    PARENT: [exports.genericTank],
    LABEL: "Base",
    TYPE: "fixed",
    SIZE: 15,
    DAMAGE_CLASS: 0,
    ACCEPTS_SCORE: !1,
    SKILL: skillSet("0099999000"),
    HITS_OWN_TYPE: "never",
    BODY: {
        RESIST: 100,
        SPEED: 0,
        HEALTH: 1e4,
        DAMAGE: 10,
        PENETRATION: .25,
        SHIELD: 1e3,
        REGEN: 100,
        FOV: 10,
        PUSHABILITY: 0,
        HETERO: 0,
        FOV: 1
    },
    CAN_BE_ON_LEADERBOARD: !1,
    INVISIBLE: [0, .1],
    AI: {
        shapeFriend: !0,
        parentView: !0
    },
    MAX_CHILDREN: 6,
    STAT_NAMES: statnames.drone,
    GUNS: [{
        POSITION: [6, 12, 1.2, 8, 0, 0, 2],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.protectordrone]),
            TYPE: [exports.baseDrone, {
                AI: {
                    shapeFriend: !0,
                    parentView: !0
                }
            }],
            AUTOFIRE: !0,
            STAT_CALCULATOR: gunCalcNames.drone
        }
    }]
}, exports.minion = {
    PARENT: [exports.genericTank],
    LABEL: "Minion",
    TYPE: "minion",
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: "hardWithBuffer",
    FACING_TYPE: "smoothToTarget",
    BODY: {
        FOV: .5,
        SPEED: 3,
        ACCELERATION: .4,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: .4
    },
    AI: {
        BLIND: !0
    },
    DRAW_HEALTH: !1,
    CLEAR_ON_MASTER_UPGRADE: !0,
    GIVE_KILL_MESSAGE: !1,
    CONTROLLERS: ["nearestDifferentMaster", "mapAltToFire", "minion", "canRepel", "hangOutNearMaster"],
    GUNS: [{
        POSITION: [17, 9, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
            TYPE: exports.bullet
        }
    }]
}, exports.flankminion = {
    PARENT: [exports.minion],
    GUNS: [{
        POSITION: [20, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [20, 8, 1, 0, 0, 120, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [20, 8, 1, 0, 0, 240, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
            TYPE: exports.bullet
        }
    }]
}, exports.trapminion = {
    PARENT: [exports.minion],
    LABEL: "Minion",
    GUNS: [{
        POSITION: [14, 8, 1, 0, 0, 0, 0]
    }, {
        POSITION: [4, 8, 1.5, 14, 0, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap
        }
    }]
}, exports.buildminion = {
    PARENT: [exports.minion],
    LABEL: "Minion",
    GUNS: [{
        POSITION: [18, 12, 1, 0, 0, 0, 0]
    }, {
        POSITION: [2, 12, 1.1, 18, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block]),
            TYPE: exports.block
        }
    }]
}, exports.sentrySwarm2 = {
    PARENT: [exports.minion],
    LABEL: "Polymancer Sentry",
    COLOR_OVERRIDE: 5,
    SHAPE: 3,
    GUNS: [{
        POSITION: [7, 14, .6, 7, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }]
}, exports.sentryTrap2 = {
    PARENT: [exports.minion],
    LABEL: "Polymancer Sentry",
    COLOR_OVERRIDE: 5,
    SHAPE: 3,
    GUNS: [],
    TURRETS: [{
        POSITION: [12, 0, 0, 180, 360, 1],
        TYPE: exports.trapTurret
    }]
}, exports.sentryGun2 = {
    PARENT: [exports.minion],
    LABEL: "Polymancer Sentry",
    COLOR_OVERRIDE: 5,
    SHAPE: 3,
    GUNS: [],
    TURRETS: [{
        POSITION: [12, 0, 0, 180, 360, 1],
        TYPE: exports.heavy3gun
    }]
}, exports.palisade_minion = {
    PARENT: [exports.genericTank],
    LABEL: "Minion",
    TYPE: "minion",
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: "hardWithBuffer",
    FACING_TYPE: "smoothToTarget",
    BODY: {
        FOV: .5,
        SPEED: 3,
        ACCELERATION: .4,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: .4
    },
    AI: {
        BLIND: !0
    },
    COLOR_OVERRIDE: 17,
    DRAW_HEALTH: !1,
    CLEAR_ON_MASTER_UPGRADE: !0,
    GIVE_KILL_MESSAGE: !1,
    CONTROLLERS: ["nearestDifferentMaster", "mapAltToFire", "minion", "canRepel", "hangOutNearMaster"],
    GUNS: [{
        POSITION: [17, 9, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
            TYPE: exports.bullet
        }
    }]
}, exports.twinminion = {
    PARENT: [exports.genericTank],
    LABEL: "Minion",
    TYPE: "minion",
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: "hardWithBuffer",
    FACING_TYPE: "smoothToTarget",
    BODY: {
        FOV: .5,
        SPEED: 3,
        ACCELERATION: .4,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: .4
    },
    AI: {
        BLIND: !0
    },
    DRAW_HEALTH: !1,
    CLEAR_ON_MASTER_UPGRADE: !0,
    GIVE_KILL_MESSAGE: !1,
    CONTROLLERS: ["nearestDifferentMaster", "mapAltToFire", "minion", "canRepel", "hangOutNearMaster"],
    GUNS: [{
        POSITION: [17, 9, 1, 0, -5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.twin, g.halfrecoil]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [17, 9, 1, 0, 5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.twin, g.halfrecoil]),
            TYPE: exports.bullet
        }
    }]
}, exports.baseMinion = {
    PARENT: [exports.baseDrone],
    LABEL: "Minion",
    TYPE: "minion",
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: "hardWithBuffer",
    FACING_TYPE: "smoothToTarget",
    SHAPE: 0,
    AI: {
        BLIND: !0
    },
    DRAW_HEALTH: !1,
    CLEAR_ON_MASTER_UPGRADE: !0,
    GIVE_KILL_MESSAGE: !1,
    CONTROLLERS: ["nearestDifferentMaster", "mapAltToFire", "minion", "canRepel", "hangOutNearMaster"],
    GUNS: [{
        POSITION: [17, 9, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.op]),
            WAIT_TO_CYCLE: !0,
            TYPE: exports.bullet
        }
    }]
}, exports.baseMinionSpawner = {
    PARENT: [exports.genericTank],
    LABEL: "Base",
    TYPE: "fixed",
    DAMAGE_CLASS: 0,
    RANGE: 5,
    ACCEPTS_SCORE: !1,
    SKILL: skillSet("0099999000"),
    HITS_OWN_TYPE: "never",
    BODY: {
        RESIST: 100,
        SPEED: 0,
        HEALTH: 1e4,
        DAMAGE: 10,
        PENETRATION: .25,
        SHIELD: 1e3,
        REGEN: 100,
        FOV: 10,
        PUSHABILITY: 0,
        HETERO: 0,
        FOV: 1
    },
    CAN_BE_ON_LEADERBOARD: !0,
    ACCEPTS_SCORE: !0,
    INVISIBLE: [0, .1],
    AI: {
        shapeFriend: !0,
        parentView: !0
    },
    STAT_NAMES: statnames.drone,
    GUNS: [{
        POSITION: [6, 12, 1.2, 8, 0, 0, 2],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.protectordrone]),
            TYPE: [exports.baseMinion, {
                AI: {
                    shapeFriend: !0,
                    parentView: !0
                }
            }],
            MAX_CHILDREN: 50,
            AUTOFIRE: !0,
            STAT_CALCULATOR: gunCalcNames.drone
        }
    }]
}, exports.pillboxTurret = {
    PARENT: [exports.genericTank],
    LABEL: "",
    CONTROLLERS: ["goToMasterTarget", "nearestDifferentMaster"],
    INDEPENDENT: !0,
    COLOR: 16,
    BODY: {
        FOV: 2
    },
    HAS_NO_RECOIL: !0,
    GUNS: [{
        POSITION: [22, 11, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.turret, g.power, g.auto, g.notdense]),
            TYPE: exports.bullet
        }
    }]
}, exports.pillboxTurret2 = {
    PARENT: [exports.genericTank],
    LABEL: "",
    CONTROLLERS: ["goToMasterTarget", "nearestDifferentMaster"],
    COLOR: 16,
    INDEPENDENT: !0,
    BODY: {
        FOV: 2
    },
    HAS_NO_RECOIL: !0,
    GUNS: [{
        POSITION: [15, 8, -1.3, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload]),
            TYPE: exports.swarm,
            MAX_CHILDREN: 15
        }
    }]
}, exports.pillbox = {
    LABEL: "Pillbox",
    PARENT: [exports.trap],
    SHAPE: -4,
    MOTION_TYPE: "motor",
    BODY: {
        SPEED: 1,
        DENSITY: 5
    },
    DIE_AT_RANGE: !0,
    TURRETS: [{
        POSITION: [11, 0, 0, 0, 360, 1],
        TYPE: exports.pillboxTurret
    }]
}, exports.pillbox2 = {
    LABEL: "Pillbox",
    PARENT: [exports.trap],
    SHAPE: -4,
    MOTION_TYPE: "motor",
    BODY: {
        SPEED: 1,
        DENSITY: 5
    },
    DIE_AT_RANGE: !0,
    TURRETS: [{
        POSITION: [11, 0, 0, 0, 360, 1],
        TYPE: exports.pillboxTurret2
    }]
}, exports.autoTurretSegment = {
    PARENT: [exports.auto3gun],
    TURRET_COLOR: "segment",
    GUNS: [{
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [1.5, .3, 1, 1, .8, .2, 1.5, 1.25, 1.25, 1, 2, 1, 1]]),
            TYPE: exports.bullet,
            LABEL: "",
            STAT_CALCULATOR: 0,
            WAIT_TO_CYCLE: !1,
            AUTOFIRE: !1,
            SYNCS_SKILLS: !1,
            MAX_CHILDREN: 0,
            ALT_FIRE: !1,
            NEGATIVE_RECOIL: !1
        }
    }]
}, exports.driveTurretSegment = {
    PARENT: [exports.auto3gun],
    TURRET_COLOR: "segment",
    GUNS: [{
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [1.5, .3, 1, 1, .8, .2, 1.5, 1.25, 1.25, 1, 2, 1, 1]]),
            TYPE: exports.drivebullet,
            LABEL: "",
            STAT_CALCULATOR: 0,
            WAIT_TO_CYCLE: !1,
            AUTOFIRE: !1,
            SYNCS_SKILLS: !1,
            MAX_CHILDREN: 0,
            ALT_FIRE: !1,
            NEGATIVE_RECOIL: !1
        }
    }],
    TURRETS: [{
        POSITION: [11, 0, 0, 0, 0, 1],
        TYPE: exports.drivesquare
    }]
}, exports.swarmTurretSegment = {
    PARENT: [exports.auto3gun],
    TURRET_COLOR: "segment",
    GUNS: [{
        POSITION: [18, 12, -1.3, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm
        }
    }]
}, exports.aAutoTurretSegment = makeAuto(exports.autoTurretSegment), exports.skimturret = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: 2 * base.FOV
    },
    COLOR: 2,
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    LABEL: "",
    GUNS: [{
        POSITION: [10, 14, -.5, 9, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, [2, 1, 1, .8, .8, .8, .8, .4, .4, 1, 10, 1, 1]]),
            TYPE: exports.hypermissile
        }
    }, {
        POSITION: [17, 15, 1, 0, 0, 0, 0]
    }]
}, exports.skimturret2 = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: 2 * base.FOV
    },
    COLOR: 2,
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    LABEL: "",
    GUNS: [{
        POSITION: [10, 14, -.5, 9, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, [2, 1, 1, .8, .8, .8, .8, .4, .4, 1, 10, 1, 1]]),
            TYPE: exports.hypermissile2
        }
    }, {
        POSITION: [17, 15, 1, 0, 0, 0, 0]
    }]
}, exports.basic = {
    PARENT: [exports.genericTank],
    LABEL: "Basic",
    ALPHA: 1,
    RESET_UPGRADES: !0,
    GOES_THROUGH_WALLS: !0,
    GUNS: [{
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet,
            LABEL: "",
            STAT_CALCULATOR: 0,
            WAIT_TO_CYCLE: !1,
            AUTOFIRE: !1,
            SYNCS_SKILLS: !1,
            MAX_CHILDREN: 0,
            ALT_FIRE: !1,
            NEGATIVE_RECOIL: !1
        }
    }]
}, exports.testbed = {
    PARENT: [exports.genericTank],
    LABEL: "TESTBED",
    GUNS: [{
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }]
}, exports.unfinished = {
    PARENT: [exports.genericTank],
    LABEL: "Unfinished",
    GUNS: [{
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }]
}, exports.dominators = {
    PARENT: [exports.genericTank],
    LABEL: "Dominators",
    GUNS: [{
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }]
}, exports.administrator = {
    PARENT: [exports.genericTank],
    LABEL: "Administrator",
    RESET_UPGRADES: !0,
    GUNS: [{
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }]
}, exports.moderator = {
    PARENT: [exports.genericTank],
    LABEL: "Moderator",
    RESET_UPGRADES: !0,
    GUNS: [{
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }]
}, exports.managerr = {
    PARENT: [exports.genericTank],
    LABEL: "Manager",
    RESET_UPGRADES: !0,
    GUNS: [{
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }]
}, exports.overseerr = {
    PARENT: [exports.genericTank],
    LABEL: "Overseer",
    RESET_UPGRADES: !0,
    GUNS: [{
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }]
}, exports.seniorTester = {
    PARENT: [exports.genericTank],
    LABEL: "Alpha Tester",
    RESET_UPGRADES: !0,
    GUNS: [{
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }]
}, exports.developer = {
    PARENT: [exports.genericTank],
    LABEL: "Developer",
    RESET_UPGRADES: !0,
    GUNS: [{
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }]
}, exports.sentries = {
    PARENT: [exports.genericTank],
    LABEL: "Sentries",
    GUNS: [{
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }]
}, exports.celestials = {
    PARENT: [exports.genericTank],
    LABEL: "Celestials",
    RESET_UPGRADES: !0,
    GUNS: [{
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }]
}, exports.observer = {
    PARENT: [exports.genericTank],
    LABEL: "Spectator",
    BODY: {
        REGEN: 1e5,
        HEALTH: 1e5,
        DAMAGE: .001 * base.DAMAGE,
        DENSITY: .001 * base.DENSITY,
        SPEED: 2 * base.SPEED,
        FOV: 2 * base.FOV
    },
    ALPHA: .2,
    SKILL: setBuild("9999999999")
}, exports.observer2 = {
    PARENT: [exports.genericTank],
    LABEL: "Spectator",
    CONTROLLERS: ["doNothing"],
    BODY: {
        REGEN: 1e303,
        HEALTH: 1e303,
        DAMAGE: 0,
        DENSITY: .001,
        SPEED: 1e-9,
        FOV: 2 * base.FOV
    },
    LEVEL: -45
}, exports.betaTanks = {
    PARENT: [exports.genericTank],
    LABEL: "Beta Tanks A",
    GUNS: [{
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }]
}, exports.bt2 = {
    PARENT: [exports.genericTank],
    LABEL: "Beta Tanks B",
    GUNS: [{
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }]
}, exports.bt3 = {
    PARENT: [exports.genericTank],
    LABEL: "Beta Tanks C",
    GUNS: [{
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }]
}, exports.bt4 = {
    PARENT: [exports.genericTank],
    LABEL: "Beta Tanks D",
    GUNS: [{
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }]
}, exports.bt5 = {
    PARENT: [exports.genericTank],
    LABEL: "Beta Tanks E",
    GUNS: [{
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }]
}, exports.bt6 = {
    PARENT: [exports.genericTank],
    LABEL: "Beta Tanks F",
    GUNS: [{
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }]
}, exports.bt7 = {
    PARENT: [exports.genericTank],
    LABEL: "Beta Tanks G",
    GUNS: [{
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }]
}, exports.bosses = {
    PARENT: [exports.genericTank],
    LABEL: "Bosses A",
    GUNS: [{
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }]
}, exports.bossesB = {
    PARENT: [exports.genericTank],
    LABEL: "Bosses B",
    RESET_UPGRADES: !0,
    GUNS: [{
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }]
}, exports.devbosses = {
    PARENT: [exports.genericTank],
    LABEL: "Developer Bosses",
    RESET_UPGRADES: !0,
    GUNS: [{
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }]
}, exports.misc = {
    PARENT: [exports.genericTank],
    LABEL: "Miscellaneous",
    GUNS: [{
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }]
}, exports.arenaClosers = {
    PARENT: [exports.genericTank],
    LABEL: "Arena Closers",
    GUNS: [{
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }]
}, exports.single = {
    PARENT: [exports.genericTank],
    LABEL: "Single",
    GUNS: [{
        POSITION: [19, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.single]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 10, -1.6, 6.5, 0, 0, 0]
    }]
}, exports.soundwave = {
    PARENT: [exports.genericTank],
    LABEL: "Soundwave",
    GUNS: [{
        POSITION: [19, 3, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.soundwave, g.slow]),
            TYPE: exports.growbullet
        }
    }, {
        POSITION: [1.5, 12, 1, 19, 0, 0, 0]
    }, {
        POSITION: [1.5, 10, 1, 16, 0, 0, 0]
    }, {
        POSITION: [1.5, 8, 1, 13, 0, 0, 0]
    }, {
        POSITION: [1.5, 6, 1, 10, 0, 0, 0]
    }],
    TURRETS: [{
        POSITION: [10, 0, 0, 0, 0, 1],
        TYPE: [exports.genericTank, {
            COLOR: 52
        }]
    }]
};
let smshskl = 12;
exports.lancer = {
    PARENT: [exports.genericTank],
    LABEL: "Lancer",
    DANGER: 5,
    STAT_NAMES: statnames.lancer,
    BODY: {
        SPEED: 2 * base.SPEED,
        ACCELERATION: 1.5 * base.ACCEL,
        DAMAGE: 3
    },
    GUNS: [{
        POSITION: [8, 4, 1.4, 6, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lance]),
            TYPE: [exports.invisabullet, {
                LABEL: "Lance"
            }],
            AUTOFIRE: !0,
            SKIN: 5
        }
    }, {
        POSITION: [8, 4, 1.4, 8.5, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lance]),
            TYPE: [exports.invisabullet, {
                LABEL: "Lance"
            }],
            AUTOFIRE: !0,
            SKIN: 5
        }
    }, {
        POSITION: [25, .3, -55, 0, 0, 0, 0]
    }]
}, exports.javelinbullet = {
    PARENT: [exports.bullet],
    GUNS: [{
        POSITION: [8, 4, 1.4, 6, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lance]),
            TYPE: [exports.invisabullet, {
                LABEL: "Lance"
            }],
            AUTOFIRE: !0,
            SKIN: 5
        }
    }, {
        POSITION: [8, 4, 1.4, 8.5, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lance]),
            TYPE: [exports.invisabullet, {
                LABEL: "Lance"
            }],
            AUTOFIRE: !0,
            SKIN: 5
        }
    }, {
        POSITION: [25, .3, -55, 0, 0, 0, 0]
    }]
}, exports.javelin1 = {
    PARENT: [exports.genericTank],
    LABEL: "Javelin",
    LABELSWITCH: "JavelinA",
    SPECIAL_ABILITY_TOOLTIP: !0,
    DANGER: 5,
    STAT_NAMES: statnames.lancer,
    BODY: {
        SPEED: 2 * base.SPEED,
        ACCELERATION: 1.5 * base.ACCEL,
        DAMAGE: 3
    },
    GUNS: [{
        POSITION: [8, 4, 1.4, 6, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lance]),
            TYPE: [exports.invisabullet, {
                LABEL: "Lance"
            }],
            AUTOFIRE: !0,
            SKIN: 5
        }
    }, {
        POSITION: [8, 4, 1.4, 8.5, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lance]),
            TYPE: [exports.invisabullet, {
                LABEL: "Lance"
            }],
            AUTOFIRE: !0,
            SKIN: 5
        }
    }, {
        POSITION: [25, .3, -55, 0, 0, 0, 0]
    }]
}, exports.javelin2 = {
    PARENT: [exports.genericTank],
    LABEL: "Javelin",
    LABELSWITCH: "JavelinB",
    DANGER: 5,
    STAT_NAMES: statnames.lancer,
    BODY: {
        SPEED: 2 * base.SPEED,
        ACCELERATION: 1.5 * base.ACCEL,
        DAMAGE: 3
    },
    GUNS: [{
        POSITION: [8, 15, 1.4, 8.5, 0, 0, -1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
            TYPE: [exports.javelinbullet, {
                LABEL: "Thrown Spear"
            }],
            AUTOFIRE: !0,
            SKIN: 5
        }
    }]
}, exports.rapture = {
    PARENT: [exports.genericTank],
    LABEL: "Rapture",
    DANGER: 5,
    STAT_NAMES: statnames.generic,
    BODY: {
        SPEED: 2 * base.SPEED,
        ACCELERATION: 1.5 * base.ACCEL,
        DAMAGE: 3
    },
    GUNS: [{
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [8, 4, 1.4, 6, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lance]),
            TYPE: [exports.invisabullet, {
                LABEL: "Lance"
            }],
            AUTOFIRE: !0,
            SKIN: 5
        }
    }, {
        POSITION: [8, 4, 1.4, 8.5, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lance]),
            TYPE: [exports.invisabullet, {
                LABEL: "Lance"
            }],
            AUTOFIRE: !0,
            SKIN: 5
        }
    }, {
        POSITION: [25, .3, -55, 0, 0, 0, 0]
    }]
}, exports.atarium = {
    PARENT: [exports.genericTank],
    LABEL: "Atarium",
    DANGER: 5,
    STAT_NAMES: statnames.generic,
    BODY: {
        SPEED: 2 * base.SPEED,
        ACCELERATION: 1.5 * base.ACCEL,
        DAMAGE: 3
    },
    GUNS: [{
        POSITION: [17, 8, 1, 0, -2, -20, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet,
            WAIT_TO_CYCLE: !1
        }
    }, {
        POSITION: [17, 8, 1, 0, 2, 20, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet,
            WAIT_TO_CYCLE: !1
        }
    }, {
        POSITION: [20, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet,
            WAIT_TO_CYCLE: !1
        }
    }, {
        POSITION: [8, 4, 1.4, 6, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lance]),
            TYPE: [exports.invisabullet, {
                LABEL: "Lance"
            }],
            AUTOFIRE: !0,
            SKIN: 5
        }
    }, {
        POSITION: [8, 4, 1.4, 8.5, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lance]),
            TYPE: [exports.invisabullet, {
                LABEL: "Lance"
            }],
            AUTOFIRE: !0,
            SKIN: 5
        }
    }, {
        POSITION: [25, .3, -55, 0, 0, 0, 0]
    }]
}, exports.akafuji1 = {
    PARENT: [exports.genericTank],
    LABEL: "Akafuji",
    LABELSWITCH: "AkafujiA",
    SPECIAL_ABILITY_TOOLTIP: !0,
    DANGER: 5,
    RESET_UPGRADES: !0,
    STAT_NAMES: statnames.generic,
    BODY: {
        SPEED: 2 * base.SPEED,
        ACCELERATION: 1.5 * base.ACCEL,
        DAMAGE: 3
    },
    GUNS: [{
        POSITION: [8, 4, 1.4, 6, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lance]),
            TYPE: [exports.invisabullet, {
                LABEL: "Lance"
            }],
            AUTOFIRE: !0,
            SKIN: 5
        }
    }, {
        POSITION: [8, 4, 1.4, 8.5, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lance]),
            TYPE: [exports.invisabullet, {
                LABEL: "Lance"
            }],
            AUTOFIRE: !0,
            SKIN: 5
        }
    }, {
        POSITION: [25, 6, 1, 0, 3.75, 0, 0],
        PROPERTIES: {
            SKIN: 8
        }
    }, {
        POSITION: [25, 6, 1, 0, -3.75, 0, 0],
        PROPERTIES: {
            SKIN: 9
        }
    }]
}, exports.akafuji2 = {
    PARENT: [exports.genericTank],
    LABEL: "Akafuji",
    LABELSWITCH: "--------",
    DANGER: 5,
    STAT_NAMES: statnames.generic,
    BODY: {
        SPEED: 2 * base.SPEED,
        ACCELERATION: 1.5 * base.ACCEL,
        DAMAGE: 3
    },
    GUNS: [{
        POSITION: [3.6, 8, 1, 0, 0, 0, 0]
    }, {
        POSITION: [25, 6, 1, 0, 3.75, 13, 0],
        PROPERTIES: {
            SKIN: 8
        }
    }, {
        POSITION: [25, 6, 1, 0, -3.75, -13, 0],
        PROPERTIES: {
            SKIN: 9
        }
    }]
}, exports.akafuji3 = {
    PARENT: [exports.genericTank],
    LABEL: "Akafuji",
    LABELSWITCH: "--------",
    DANGER: 5,
    STAT_NAMES: statnames.generic,
    BODY: {
        SPEED: 2 * base.SPEED,
        ACCELERATION: 1.5 * base.ACCEL,
        DAMAGE: 3
    },
    GUNS: [{
        POSITION: [7.2, 8, 1, 0, 0, 0, 0]
    }, {
        POSITION: [25, 6, 1, 0, 3.75, 26, 0],
        PROPERTIES: {
            SKIN: 8
        }
    }, {
        POSITION: [25, 6, 1, 0, -3.75, -26, 0],
        PROPERTIES: {
            SKIN: 9
        }
    }]
}, exports.akafuji4 = {
    PARENT: [exports.genericTank],
    LABEL: "Akafuji",
    LABELSWITCH: "--------",
    DANGER: 5,
    STAT_NAMES: statnames.generic,
    BODY: {
        SPEED: 2 * base.SPEED,
        ACCELERATION: 1.5 * base.ACCEL,
        DAMAGE: 3
    },
    GUNS: [{
        POSITION: [10.8, 8, 1, 0, 0, 0, 0]
    }, {
        POSITION: [25, 6, 1, 0, 3.75, 39, 0],
        PROPERTIES: {
            SKIN: 8
        }
    }, {
        POSITION: [25, 6, 1, 0, -3.75, -39, 0],
        PROPERTIES: {
            SKIN: 9
        }
    }]
}, exports.akafuji5 = {
    PARENT: [exports.genericTank],
    LABEL: "Akafuji",
    LABELSWITCH: "--------",
    DANGER: 5,
    STAT_NAMES: statnames.generic,
    BODY: {
        SPEED: 2 * base.SPEED,
        ACCELERATION: 1.5 * base.ACCEL,
        DAMAGE: 3
    },
    GUNS: [{
        POSITION: [14.4, 8, 1, 0, 0, 0, 0]
    }, {
        POSITION: [25, 6, 1, 0, 3.75, 52, 0],
        PROPERTIES: {
            SKIN: 8
        }
    }, {
        POSITION: [25, 6, 1, 0, -3.75, -52, 0],
        PROPERTIES: {
            SKIN: 9
        }
    }]
}, exports.akafuji6 = {
    PARENT: [exports.genericTank],
    LABEL: "Akafuji",
    LABELSWITCH: "AkafujiB",
    DANGER: 5,
    STAT_NAMES: statnames.generic,
    BODY: {
        SPEED: 2 * base.SPEED,
        ACCELERATION: 1.5 * base.ACCEL,
        DAMAGE: 3
    },
    GUNS: [{
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [25, 6, 1, 0, 3.75, 65, 0],
        PROPERTIES: {
            SKIN: 8
        }
    }, {
        POSITION: [25, 6, 1, 0, -3.75, -65, 0],
        PROPERTIES: {
            SKIN: 9
        }
    }]
}, exports.sabaton1 = {
    PARENT: [exports.genericTank],
    LABEL: "Sabaton",
    LABELSWITCH: "SabatonA",
    SPECIAL_ABILITY_TOOLTIP: !0,
    DANGER: 5,
    RESET_UPGRADES: !0,
    STAT_NAMES: statnames.generic,
    BODY: {
        SPEED: 2 * base.SPEED,
        ACCELERATION: 1.5 * base.ACCEL,
        DAMAGE: 3
    },
    GUNS: [{
        POSITION: [8, 4, 1.4, 6, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lance]),
            TYPE: [exports.invisabullet, {
                LABEL: "Lance"
            }],
            AUTOFIRE: !0,
            SKIN: 5
        }
    }, {
        POSITION: [8, 4, 1.4, 8.5, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lance]),
            TYPE: [exports.invisabullet, {
                LABEL: "Lance"
            }],
            AUTOFIRE: !0,
            SKIN: 5
        }
    }, {
        POSITION: [25, 6, 1, 0, 3.75, 0, 0],
        PROPERTIES: {
            SKIN: 8
        }
    }, {
        POSITION: [25, 6, 1, 0, -3.75, 0, 0],
        PROPERTIES: {
            SKIN: 9
        }
    }]
}, exports.sabaton2 = {
    PARENT: [exports.genericTank],
    LABEL: "Sabaton",
    LABELSWITCH: "--------",
    DANGER: 5,
    STAT_NAMES: statnames.generic,
    BODY: {
        SPEED: 2 * base.SPEED,
        ACCELERATION: 1.5 * base.ACCEL,
        DAMAGE: 3
    },
    GUNS: [{
        POSITION: [3.6, 8, 1, 0, 5.5, 0, 0]
    }, {
        POSITION: [3.6, 8, 1, 0, -5.5, 0, .5]
    }, {
        POSITION: [25, 6, 1, 0, 3.75, 13, 0],
        PROPERTIES: {
            SKIN: 8
        }
    }, {
        POSITION: [25, 6, 1, 0, -3.75, -13, 0],
        PROPERTIES: {
            SKIN: 9
        }
    }]
}, exports.sabaton3 = {
    PARENT: [exports.genericTank],
    LABEL: "Sabaton",
    LABELSWITCH: "--------",
    DANGER: 5,
    STAT_NAMES: statnames.generic,
    BODY: {
        SPEED: 2 * base.SPEED,
        ACCELERATION: 1.5 * base.ACCEL,
        DAMAGE: 3
    },
    GUNS: [{
        POSITION: [7.2, 8, 1, 0, 5.5, 0, 0]
    }, {
        POSITION: [7.2, 8, 1, 0, -5.5, 0, .5]
    }, {
        POSITION: [25, 6, 1, 0, 3.75, 26, 0],
        PROPERTIES: {
            SKIN: 8
        }
    }, {
        POSITION: [25, 6, 1, 0, -3.75, -26, 0],
        PROPERTIES: {
            SKIN: 9
        }
    }]
}, exports.sabaton4 = {
    PARENT: [exports.genericTank],
    LABEL: "Sabaton",
    LABELSWITCH: "--------",
    DANGER: 5,
    STAT_NAMES: statnames.generic,
    BODY: {
        SPEED: 2 * base.SPEED,
        ACCELERATION: 1.5 * base.ACCEL,
        DAMAGE: 3
    },
    GUNS: [{
        POSITION: [10.8, 8, 1, 0, 5.5, 0, 0]
    }, {
        POSITION: [10.8, 8, 1, 0, -5.5, 0, .5]
    }, {
        POSITION: [25, 6, 1, 0, 3.75, 39, 0],
        PROPERTIES: {
            SKIN: 8
        }
    }, {
        POSITION: [25, 6, 1, 0, -3.75, -39, 0],
        PROPERTIES: {
            SKIN: 9
        }
    }]
}, exports.sabaton5 = {
    PARENT: [exports.genericTank],
    LABEL: "Sabaton",
    LABELSWITCH: "--------",
    DANGER: 5,
    STAT_NAMES: statnames.generic,
    BODY: {
        SPEED: 2 * base.SPEED,
        ACCELERATION: 1.5 * base.ACCEL,
        DAMAGE: 3
    },
    GUNS: [{
        POSITION: [14.4, 8, 1, 0, 5.5, 0, 0]
    }, {
        POSITION: [14.4, 8, 1, 0, -5.5, 0, .5]
    }, {
        POSITION: [25, 6, 1, 0, 3.75, 52, 0],
        PROPERTIES: {
            SKIN: 8
        }
    }, {
        POSITION: [25, 6, 1, 0, -3.75, -52, 0],
        PROPERTIES: {
            SKIN: 9
        }
    }]
}, exports.sabaton6 = {
    PARENT: [exports.genericTank],
    LABEL: "Sabaton",
    LABELSWITCH: "SabatonB",
    DANGER: 5,
    STAT_NAMES: statnames.generic,
    BODY: {
        SPEED: 2 * base.SPEED,
        ACCELERATION: 1.5 * base.ACCEL,
        DAMAGE: 3
    },
    GUNS: [{
        POSITION: [18, 8, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, -5.5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [25, 6, 1, 0, 3.75, 65, 0],
        PROPERTIES: {
            SKIN: 8
        }
    }, {
        POSITION: [25, 6, 1, 0, -3.75, -65, 0],
        PROPERTIES: {
            SKIN: 9
        }
    }]
}, exports.claymore = {
    PARENT: [exports.genericTank],
    LABEL: "Claymore",
    DANGER: 5,
    STAT_NAMES: statnames.lancer,
    BODY: {
        SPEED: base.SPEED,
        ACCELERATION: 1.5 * base.ACCEL,
        DAMAGE: 3
    },
    GUNS: [{
        POSITION: [8, 4, 1.4, 6, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.claymore]),
            TYPE: [exports.invisabullet, {
                LABEL: "Lance"
            }],
            AUTOFIRE: !0,
            SKIN: 5
        }
    }, {
        POSITION: [8, 4, 1.4, 8.5, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.claymore]),
            TYPE: [exports.invisabullet, {
                LABEL: "Lance"
            }],
            AUTOFIRE: !0,
            SKIN: 5
        }
    }, {
        POSITION: [25, .3, -65, 0, 0, 0, 0]
    }]
}, exports.dagger = {
    PARENT: [exports.genericTank],
    LABEL: "Dagger",
    DANGER: 5,
    STAT_NAMES: statnames.lancer,
    BODY: {
        SPEED: 2.75 * base.SPEED,
        ACCELERATION: 3 * base.ACCEL,
        DAMAGE: 3
    },
    GUNS: [{
        POSITION: [4, 4, 1.4, 6, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lance]),
            TYPE: [exports.invisabullet, {
                LABEL: "Lance"
            }],
            AUTOFIRE: !0,
            SKIN: 5
        }
    }, {
        POSITION: [4, 4, 1.4, 8.5, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lance]),
            TYPE: [exports.invisabullet, {
                LABEL: "Lance"
            }],
            AUTOFIRE: !0,
            SKIN: 5
        }
    }, {
        POSITION: [19, .3, -55, 0, 0, 0, 0]
    }]
}, exports.broadsword = {
    PARENT: [exports.genericTank],
    LABEL: "Broadsword",
    DANGER: 5,
    STAT_NAMES: statnames.lancer,
    BODY: {
        SPEED: 2.5 * base.SPEED,
        ACCELERATION: 1.5 * base.ACCEL,
        DAMAGE: 3
    },
    GUNS: [{
        POSITION: [10.5, 4, 1.4, 6, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lance]),
            TYPE: [exports.invisabullet, {
                LABEL: "Lance"
            }],
            AUTOFIRE: !0,
            SKIN: 5
        }
    }, {
        POSITION: [10.5, 4, 1.4, 8.5, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lance]),
            TYPE: [exports.invisabullet, {
                LABEL: "Lance"
            }],
            AUTOFIRE: !0,
            SKIN: 5
        }
    }, {
        POSITION: [27.5, .3, -55, 0, 0, 0, 0]
    }]
}, exports.smash = {
    PARENT: [exports.genericTank],
    LABEL: "Smasher",
    DANGER: 6,
    BODY: {
        FOV: 1.05 * base.FOV,
        DENSITY: 2 * base.DENSITY
    },
    TURRETS: [{
        POSITION: [21.5, 0, 0, 0, 360, 0],
        TYPE: exports.smasherBody
    }],
    IS_SMASHER: !0,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher
}, exports.radar = {
    PARENT: [exports.genericTank],
    LABEL: "Radar",
    DANGER: 6,
    BODY: {
        FOV: 1.05 * base.FOV,
        DENSITY: 2 * base.DENSITY
    },
    FACING_TYPE: "autospin",
    TURRETS: [{
        POSITION: [21.5, 0, 0, 0, 360, 0],
        TYPE: exports.smasherBody
    }, {
        POSITION: [10, 0, 0, 0, 360, 1],
        TYPE: exports.radarTurret
    }, {
        POSITION: [38, 0, 0, 0, 360, 0],
        TYPE: exports.radarRing
    }],
    IS_SMASHER: !0,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher
}, exports.megasmash = {
    PARENT: [exports.genericTank],
    LABEL: "Mega-Smasher",
    DANGER: 7,
    BODY: {
        SPEED: 1.05 * base.speed,
        FOV: 1.1 * base.FOV,
        DENSITY: 4 * base.DENSITY
    },
    IS_SMASHER: !0,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher,
    TURRETS: [{
        POSITION: [24, 0, 0, 0, 360, 0],
        TYPE: exports.megasmashBody
    }]
}, exports.harmer = {
    PARENT: [exports.genericTank],
    LABEL: "Harmer",
    DANGER: 7,
    BODY: {
        SPEED: 1.05 * base.speed,
        FOV: 1.1 * base.FOV,
        DAMAGE: 1.1 * base.DAMAGE,
        DENSITY: 4 * base.DENSITY
    },
    IS_SMASHER: !0,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    FACING_TYPE: "autospin",
    STAT_NAMES: statnames.smasher,
    TURRETS: [{
        POSITION: [24, 0, 0, 0, 360, 0],
        TYPE: exports.megasmashBody
    }, {
        POSITION: [19, 0, 0, 0, 360, 0],
        TYPE: exports.spikeBody1
    }, {
        POSITION: [19, 0, 0, 180, 360, 0],
        TYPE: exports.spikeBody1
    }]
}, exports.landmine = {
    PARENT: [exports.genericTank],
    LABEL: "Landmine",
    DANGER: 7,
    INVISIBILITY_TOOLTIP: !0,
    INVISIBLE: [.08, .03],
    BODY: {
        SPEED: 1.1 * base.SPEED,
        FOV: 1.05 * base.FOV,
        DENSITY: 2 * base.DENSITY
    },
    IS_SMASHER: !0,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher,
    TURRETS: [{
        POSITION: [21.5, 0, 0, 0, 360, 0],
        TYPE: exports.smasherBody
    }, {
        POSITION: [21.5, 0, 0, 0, 360, 0],
        TYPE: exports.landmineBody
    }]
}, exports.spike = {
    PARENT: [exports.genericTank],
    LABEL: "Spike",
    DANGER: 7,
    BODY: {
        SPEED: .9 * base.speed,
        DAMAGE: 1.1 * base.DAMAGE,
        FOV: 1.05 * base.FOV,
        DENSITY: 2 * base.DENSITY
    },
    IS_SMASHER: !0,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher,
    TURRETS: [{
        POSITION: [20.5, 0, 0, 0, 360, 0],
        TYPE: exports.spikeBody
    }, {
        POSITION: [20.5, 0, 0, 120, 360, 0],
        TYPE: exports.spikeBody
    }, {
        POSITION: [20.5, 0, 0, 240, 360, 0],
        TYPE: exports.spikeBody
    }]
}, exports.weirdspike = {
    PARENT: [exports.genericTank],
    LABEL: "Spike",
    DANGER: 7,
    BODY: {
        DAMAGE: 1.15 * base.DAMAGE,
        FOV: 1.05 * base.FOV,
        DENSITY: 1.5 * base.DENSITY
    },
    IS_SMASHER: !0,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher,
    TURRETS: [{
        POSITION: [20.5, 0, 0, 0, 360, 0],
        TYPE: exports.spikeBody1
    }, {
        POSITION: [20.5, 0, 0, 180, 360, 0],
        TYPE: exports.spikeBody2
    }]
}, exports.stabalizerbullet = {
    PARENT: [exports.bullet],
    LABEL: "Spike",
    TURRETS: [{
        POSITION: [19, 0, 0, 0, 0, 0],
        TYPE: exports.spikeBody
    }, {
        POSITION: [19, 0, 0, 120, 0, 0],
        TYPE: exports.spikeBody
    }, {
        POSITION: [19, 0, 0, 240, 0, 0],
        TYPE: exports.spikeBody
    }]
}, exports.fidgetspinner = {
    PARENT: [exports.genericTank],
    LABEL: "Fidget Spinner",
    LABELSWITCH: "FidgetDef",
    DANGER: 7,
    BODY: {
        DAMAGE: 1.15 * base.DAMAGE,
        FOV: 1.05 * base.FOV,
        DENSITY: 1.5 * base.DENSITY
    },
    FACING_TYPE: "autospin",
    IS_SMASHER: !0,
    SKILL_CAP: [smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.generic,
    GUNS: [{
        POSITION: [20, 9, -1.7, 0, 0, 0, 0]
    }, {
        POSITION: [20, 9, -1.7, 0, 0, -120, 0]
    }, {
        POSITION: [20, 9, -1.7, 0, 0, 120, 0]
    }],
    TURRETS: [{
        POSITION: [20.5, 0, 0, 180, 0, 0],
        TYPE: exports.spikeBody1
    }, {
        POSITION: [11, 20, 0, 0, 0, 1],
        TYPE: exports.ringT
    }, {
        POSITION: [11, 20, 0, -120, 0, 1],
        TYPE: exports.ringT
    }, {
        POSITION: [11, 20, 0, 120, 0, 1],
        TYPE: exports.ringT
    }]
}, exports.fs1 = {
    PARENT: [exports.genericTank],
    LABEL: "Fidget Spinner",
    LABELSWITCH: "FS1",
    DANGER: 7,
    BODY: {
        DAMAGE: 1.15 * base.DAMAGE,
        FOV: 1.05 * base.FOV,
        DENSITY: 1.5 * base.DENSITY
    },
    FACING_TYPE: "autospin",
    IS_SMASHER: !0,
    SKILL_CAP: [smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.generic,
    GUNS: [{
        POSITION: [20, 9, -1.7, 0, 0, 0, 0]
    }, {
        POSITION: [20, 9, -1.7, 0, 0, -120, 0]
    }, {
        POSITION: [20, 9, -1.7, 0, 0, 120, 0]
    }],
    TURRETS: [{
        POSITION: [20.5, 0, 0, 180, 0, 0],
        TYPE: exports.spikeBody1
    }, {
        POSITION: [11, 20, 0, 0, 360, 1],
        TYPE: exports.shootRing
    }, {
        POSITION: [11, 20, 0, -120, 0, 1],
        TYPE: exports.ringT
    }, {
        POSITION: [11, 20, 0, 120, 0, 1],
        TYPE: exports.ringT
    }]
}, exports.fs2 = {
    PARENT: [exports.genericTank],
    LABEL: "Fidget Spinner",
    LABELSWITCH: "FS2",
    DANGER: 7,
    BODY: {
        DAMAGE: 1.15 * base.DAMAGE,
        FOV: 1.05 * base.FOV,
        DENSITY: 1.5 * base.DENSITY
    },
    FACING_TYPE: "autospin",
    IS_SMASHER: !0,
    SKILL_CAP: [smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.generic,
    GUNS: [{
        POSITION: [20, 9, -1.7, 0, 0, 0, 0]
    }, {
        POSITION: [20, 9, -1.7, 0, 0, -120, 0]
    }, {
        POSITION: [20, 9, -1.7, 0, 0, 120, 0]
    }],
    TURRETS: [{
        POSITION: [20.5, 0, 0, 180, 0, 0],
        TYPE: exports.spikeBody1
    }, {
        POSITION: [11, 20, 0, -120, 360, 1],
        TYPE: exports.shootRing
    }, {
        POSITION: [11, 20, 0, 120, 0, 1],
        TYPE: exports.ringT
    }]
}, exports.fs3 = {
    PARENT: [exports.genericTank],
    LABEL: "Fidget Spinner",
    LABELSWITCH: "FS3",
    DANGER: 7,
    BODY: {
        DAMAGE: 1.15 * base.DAMAGE,
        FOV: 1.05 * base.FOV,
        DENSITY: 1.5 * base.DENSITY
    },
    FACING_TYPE: "autospin",
    IS_SMASHER: !0,
    SKILL_CAP: [smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.generic,
    GUNS: [{
        POSITION: [20, 9, -1.7, 0, 0, 0, 0]
    }, {
        POSITION: [20, 9, -1.7, 0, 0, -120, 0]
    }, {
        POSITION: [20, 9, -1.7, 0, 0, 120, 0]
    }],
    TURRETS: [{
        POSITION: [20.5, 0, 0, 180, 0, 0],
        TYPE: exports.spikeBody1
    }, {
        POSITION: [11, 20, 0, 120, 360, 1],
        TYPE: exports.shootRing
    }]
}, exports.autosmash = makeAuto(exports.smash, "Auto-Smasher", {
    type: exports.autoSmasherTurret,
    size: 11
}), exports.autosmash.SKILL_CAP = [smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl], exports.twin = {
    PARENT: [exports.genericTank],
    LABEL: "Twin",
    GUNS: [{
        POSITION: [18, 8, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, -5.5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet
        }
    }]
}, exports.ttr1 = {
    PARENT: [exports.genericTank],
    LABEL: "Taste The Rainbow",
    GUNS: [{
        POSITION: [18, 8, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.rainbullet
        }
    }, {
        POSITION: [18, 8, 1, 0, -5.5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.rainbullet
        }
    }]
}, exports.imerium = {
    PARENT: [exports.genericTank],
    LABEL: "Imerium",
    GUNS: [{
        POSITION: [18, 8, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, -5.5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [15, 8, 1, 0, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }]
}, exports.boxer = {
    PARENT: [exports.genericTank],
    LABEL: "Boxer",
    GUNS: [{
        POSITION: [20, 8, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [1, .5, .9, 1, .9, .4, 1, 1, 1, 1, 1, 1.2, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [20, 8, 1, 0, -5.5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [1, .5, .9, 1, .9, .4, 1, 1, 1, 1, 1, 1.2, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [15, 8, 1, 0, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [15, 8, 1, 0, 0, -90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [15, 8, 1, 0, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }]
}, exports.eyeofender = {
    PARENT: [exports.genericTank],
    LABEL: "Eye of Ender",
    GUNS: [{
        POSITION: [20, 8, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.twin]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [20, 8, 1, 0, -5.5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.twin]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 5.5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.twin]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, -5.5, 0, .7],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.twin]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [16, 8, 1, 0, 5.5, 0, .7],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.twin]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [16, 8, 1, 0, -5.5, 0, .9],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.twin]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [15, 8, 1, 0, 0, 0, 0]
    }, {
        POSITION: [15, 8, 1, 0, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [15, 8, 1, 0, 0, -90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [15, 8, 1, 0, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }]
}, exports.lighthouse = {
    PARENT: [exports.genericTank],
    LABEL: "Lighthouse",
    GUNS: [{
        POSITION: [4, 7, 1.3, 20, 5.75, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap
        }
    }, {
        POSITION: [4, 7, 1.3, 20, -5.75, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap
        }
    }, {
        POSITION: [20, 7, 1, 0, 5.75, 0, 0]
    }, {
        POSITION: [20, 7, 1, 0, -5.75, 0, 0]
    }, {
        POSITION: [15, 8, 1, 0, 0, 0, 0]
    }, {
        POSITION: [15, 8, 1, 0, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [15, 8, 1, 0, 0, -90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [15, 8, 1, 0, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }]
}, exports.flashlight = {
    PARENT: [exports.genericTank],
    LABEL: "Flashlight",
    GUNS: [{
        POSITION: [20, 7, 1.3, 0, 5.75, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [20, 7, 1.3, 0, -5.75, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [15, 8, 1, 0, 0, 0, 0]
    }, {
        POSITION: [15, 8, 1, 0, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [15, 8, 1, 0, 0, -90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [15, 8, 1, 0, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }]
}, exports.gunner = {
    PARENT: [exports.genericTank],
    LABEL: "Gunner",
    DANGER: 6,
    GUNS: [{
        POSITION: [12, 3.5, 1, 0, 7.25, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [12, 3.5, 1, 0, -7.25, 0, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [16, 3.5, 1, 0, -3.75, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
            TYPE: exports.bullet
        }
    }]
}, exports.trailblazer = {
    PARENT: [exports.genericTank],
    LABEL: "Trailblazer",
    DANGER: 6,
    GUNS: [{
        POSITION: [12, 3.5, 1, 0, 7.25, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil]),
            SKIN: 1,
            TYPE: exports.bullet
        }
    }, {
        POSITION: [12, 3.5, 1, 0, -7.25, 0, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil]),
            SKIN: 1,
            TYPE: exports.bullet
        }
    }, {
        POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil]),
            SKIN: 1,
            TYPE: exports.bullet
        }
    }, {
        POSITION: [16, 3.5, 1, 0, -3.75, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil]),
            SKIN: 1,
            TYPE: exports.bullet
        }
    }]
}, exports.arpeggio = {
    PARENT: [exports.genericTank],
    LABEL: "Arpeggio",
    DANGER: 6,
    GUNS: [{
        POSITION: [12, 3.5, -1.5, 0, 7.25, -10, 1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
            TYPE: [exports.autoswarm, {
                LABEL: "Autonomous"
            }]
        }
    }, {
        POSITION: [12, 3.5, -1.5, 0, -7.25, 10, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
            TYPE: [exports.autoswarm, {
                LABEL: "Autonomous"
            }]
        }
    }, {
        POSITION: [16, 3.5, 1, 0, 3.75, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.bitmorereload]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [16, 3.5, 1, 0, -3.75, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.bitmorereload]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [12, 6, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
            TYPE: exports.launcherMissile
        }
    }]
}, exports.armory = {
    PARENT: [exports.genericTank],
    LABEL: "Aristocrat",
    DANGER: 6,
    GUNS: [{
        POSITION: [12, 2.75, 1, 0, 8.5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.puregunner, g.fast]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [12, 3, 1, 0, -8.5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.puregunner, g.fast]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [16, 3, 1, 0, 4.75, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.puregunner, g.fast]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [16, 3, 1, 0, -4.75, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.puregunner, g.fast]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [20, 4, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.puregunner, g.fast]),
            TYPE: exports.bullet
        }
    }]
}, exports.dualgunner = {
    PARENT: [exports.genericTank],
    LABEL: "Dual Gunner",
    DANGER: 6,
    GUNS: [{
        POSITION: [14, 2, 1, 0, 7.25, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower, g.puregunner, g.fast]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [14, 2, 1, 0, -7.25, 0, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower, g.puregunner, g.fast]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 2, 1, 0, 3.75, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower, g.puregunner, g.fast]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 2, 1, 0, -3.75, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower, g.puregunner, g.fast]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [12, 3.5, 1, 0, 7.25, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [12, 3.5, 1, 0, -7.25, 0, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [16, 3.5, 1, 0, -3.75, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
            TYPE: exports.bullet
        }
    }]
}, exports.dualgunner2 = {
    PARENT: [exports.dualgunner],
    LABEL: "",
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"]
}, exports.cyclone = {
    PARENT: [exports.genericTank],
    LABEL: "Cyclone",
    DANGER: 6,
    GUNS: []
};
for (let T = 0; T < 12; T++) exports.cyclone.GUNS.push({
    POSITION: [16, 3.5, 1, 0, 0, 30 * T, T % 2 == 0 ? .5 : 0],
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
    }
});

function makeSwarmSpawner(T) {
    return {
        PARENT: [exports.genericTank],
        LABEL: "",
        BODY: {
            FOV: 2
        },
        CONTROLLERS: ["nearestDifferentMaster"],
        COLOR: 16,
        AI: {
            NO_LEAD: !0,
            SKYNET: !0,
            FULL_VIEW: !0
        },
        GUNS: [{
            POSITION: [14, 15, .6, 14, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: T,
                TYPE: exports.swarm,
                STAT_CALCULATOR: gunCalcNames.swarm
            }
        }]
    }
}

function bossStats(T = {}) {
    return T.health || (T.health = 1), T.damage || (T.damage = 1), T.speed || (T.speed = 1), T.fov || (T.fov = 1), {
        HEALTH: 13 * base.HEALTH * T.health,
        DAMAGE: 1.5 * base.DAMAGE * T.damage,
        SPEED: .1 * base.SPEED * T.speed,
        DENSITY: 500,
        FOV: 1.125 * base.FOV * T.fov,
        SHIELD: .75 * base.SHIELD
    }
}
exports.machinegunner = {
    PARENT: [exports.genericTank],
    LABEL: "Machine Gunner",
    DANGER: 6,
    BODY: {
        SPEED: .9 * base.SPEED
    },
    GUNS: [{
        POSITION: [14, 3, 4, -3, 5, 0, .6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [14, 3, 4, -3, -5, 0, .8],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [14, 3, 4, 0, 2.5, 0, .4],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [14, 3, 4, 0, -2.5, 0, .2],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [14, 3, 4, 3, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun]),
            TYPE: exports.bullet
        }
    }]
}, exports.autogunner = makeAuto(exports.gunner), exports.screwgun = {
    PARENT: [exports.genericTank],
    LABEL: "Screwgun",
    INDEPENDENT: !0,
    DANGER: 7,
    BODY: {
        FOV: 1.1 * base.FOV,
        SPEED: .9 * base.SPEED
    },
    GUNS: [{
        POSITION: [19, 2, 1, 0, -2.5, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }]
}, exports.searcher = {
    PARENT: [exports.genericTank],
    LABEL: "Searcher",
    INDEPENDENT: !0,
    DANGER: 7,
    BODY: {
        FOV: 1.1 * base.FOV,
        SPEED: .9 * base.SPEED
    },
    GUNS: [{
        POSITION: [15, 3, 1, 0, -3, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.homingbullet,
            SKIN: 8
        }
    }, {
        POSITION: [15, 3, 1, 0, 3, 0, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.homingbullet,
            SKIN: 9
        }
    }]
}, exports.screwmation = {
    PARENT: [exports.genericTank],
    LABEL: "Screwmation",
    INDEPENDENT: !0,
    DANGER: 7,
    BODY: {
        FOV: 1.1 * base.FOV,
        SPEED: .9 * base.SPEED
    },
    GUNS: [{
        POSITION: [19, 2, 1, 0, -2.5, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 2, 1, 0, -2.5, 0, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 2, 1, 0, 2.5, 0, 1.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }]
}, exports.corkscrew = {
    PARENT: [exports.genericTank],
    LABEL: "Corkscrew",
    INDEPENDENT: !0,
    DANGER: 7,
    BODY: {
        FOV: 1.1 * base.FOV,
        SPEED: .9 * base.SPEED
    },
    GUNS: [{
        POSITION: [19, 2, 1, 0, -2.5, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 2, 1, 0, -2.5, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 2, 1, 0, 2.5, 0, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 10, -1.6, 6.5, 0, 0, 0]
    }]
}, exports.puntgun = {
    PARENT: [exports.genericTank],
    LABEL: "Punt Gun",
    INDEPENDENT: !0,
    DANGER: 7,
    BODY: {
        FOV: 1.1 * base.FOV,
        SPEED: .9 * base.SPEED
    },
    GUNS: [{
        POSITION: [19, 2, 1, 0, -2.5, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 2, 1, 0, -2.5, 0, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 2, 1, 0, 2.5, 0, 1.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [17, 2, 1, 0, -2.5, 0, 1.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [17, 2, 1, 0, 2.5, 0, 1.75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }]
}, exports.seadog = {
    PARENT: [exports.genericTank],
    LABEL: "Seadog",
    INDEPENDENT: !0,
    DANGER: 7,
    BODY: {
        FOV: 1.1 * base.FOV,
        SPEED: .9 * base.SPEED
    },
    GUNS: [{
        POSITION: [7, 7.5, .6, 7, -0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: "Autonomous"
        }
    }, {
        POSITION: [7, 7.5, .6, 7, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: "Autonomous"
        }
    }, {
        POSITION: [19, 2, 1, 0, -2.5, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }]
}, exports.partition = {
    PARENT: [exports.genericTank],
    LABEL: "Partition",
    DANGER: 7,
    BODY: {
        FOV: 1.1 * base.FOV,
        SPEED: 1.1 * base.SPEED
    },
    PASS_THROUGH_WALLS: !0,
    MOTION_TYPE: "glive",
    GUNS: [{
        POSITION: [7, 7.5, .6, 7, -0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: "Autonomous"
        }
    }, {
        POSITION: [7, 7.5, .6, 7, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: "Autonomous"
        }
    }, {
        POSITION: [19, 2, 1, 0, -2.5, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }, {
        POSITION: [17, 9, .6, 7, 0, 180, 0]
    }],
    TURRETS: [{
        POSITION: [9, 20, 0, 180, 360, 1],
        TYPE: exports.propellerB
    }, {
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: exports.propellerA
    }]
}, exports.speedboat = {
    PARENT: [exports.genericTank],
    LABEL: "Speedboat",
    INDEPENDENT: !0,
    DANGER: 7,
    BODY: {
        FOV: 1.1 * base.FOV,
        SPEED: .9 * base.SPEED
    },
    GUNS: [{
        POSITION: [7, 7.5, .6, 7, -0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: "Autonomous"
        }
    }, {
        POSITION: [7, 7.5, .6, 7, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: "Autonomous"
        }
    }, {
        POSITION: [19, 2, 1, 0, -2.5, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }, {
        POSITION: [13, 8, 1, 2, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil]),
            SKIN: 1,
            TYPE: exports.bullet
        }
    }]
}, exports.scubadiver = {
    PARENT: [exports.genericTank],
    LABEL: "Scuba Diver",
    INDEPENDENT: !0,
    DANGER: 7,
    BODY: {
        FOV: 1.1 * base.FOV,
        SPEED: .9 * base.SPEED
    },
    GUNS: [{
        POSITION: [14, 8, 1, 0, 0, 180, 0]
    }, {
        POSITION: [4, 8, 1.5, 14, 0, 180, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }, {
        POSITION: [7, 7.5, .6, 7, -0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: "Autonomous"
        }
    }, {
        POSITION: [7, 7.5, .6, 7, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: "Autonomous"
        }
    }, {
        POSITION: [19, 2, 1, 0, -2.5, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }]
}, exports.pirate = {
    PARENT: [exports.genericTank],
    LABEL: "Pirate",
    INDEPENDENT: !0,
    DANGER: 7,
    BODY: {
        FOV: 1.1 * base.FOV,
        SPEED: .9 * base.SPEED
    },
    GUNS: [{
        POSITION: [7, 7.5, .6, 7, -0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: "Autonomous"
        }
    }, {
        POSITION: [7, 7.5, .6, 7, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: "Autonomous"
        }
    }, {
        POSITION: [7, 7.5, .6, 7, -0, 150, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: "Autonomous"
        }
    }, {
        POSITION: [7, 7.5, .6, 7, 0, -150, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: "Autonomous"
        }
    }, {
        POSITION: [19, 2, 1, 0, -2.5, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }]
}, exports.jetski = {
    PARENT: [exports.genericTank],
    LABEL: "Jet Ski",
    INDEPENDENT: !0,
    DANGER: 7,
    BODY: {
        FOV: .9 * base.FOV,
        SPEED: base.SPEED
    },
    TURRETS: [{
        POSITION: [10, 9, 0, 270, 0, 0],
        TYPE: exports.bluemach
    }, {
        POSITION: [10, 9, 0, 90, 0, 0],
        TYPE: exports.bluemach
    }],
    GUNS: [{
        POSITION: [7, 7.5, .6, 7, -0, 150, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: "Autonomous"
        }
    }, {
        POSITION: [7, 7.5, .6, 7, 0, -150, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: "Autonomous"
        }
    }, {
        POSITION: [19, 2, 1, 0, -2.5, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }]
}, exports.captain = makeHybrid(exports.seadog, "Captain"), exports.doublescrew = {
    PARENT: [exports.genericTank],
    LABEL: "Double Screw",
    INDEPENDENT: !0,
    DANGER: 7,
    BODY: {
        FOV: 1.1 * base.FOV,
        SPEED: .9 * base.SPEED
    },
    GUNS: [{
        POSITION: [19, 2, 1, 0, -2.5, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }, {
        POSITION: [19, 2, 1, 0, -2.5, 180, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 180, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 180, 0]
    }]
}, exports.sonar = {
    PARENT: [exports.genericTank],
    LABEL: "Sonar",
    INDEPENDENT: !0,
    DANGER: 7,
    BODY: {
        FOV: 1.1 * base.FOV,
        SPEED: .9 * base.SPEED
    },
    GUNS: [{
        POSITION: [19, 2, 1, 0, -2.5, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }, {
        POSITION: [19, 2, 1, 0, -2.5, 180, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 180, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 180, 0]
    }, {
        POSITION: [7, 7.5, .6, 7, -0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: "Autonomous"
        }
    }, {
        POSITION: [7, 7.5, .6, 7, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: "Autonomous"
        }
    }]
}, exports.pumba = {
    PARENT: [exports.genericTank],
    LABEL: "Pumba",
    GUNS: [{
        POSITION: [25, 5, -1.4, 0, 0, 0, 0]
    }, {
        POSITION: [14, 8, 1.4, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.power, g.slow]),
            TYPE: exports.pumba_bullet
        }
    }, {
        POSITION: [13, 9, -1.7, 0, 0, 0, 0]
    }]
}, exports.triplescrew = {
    PARENT: [exports.genericTank],
    LABEL: "Triple Screw",
    INDEPENDENT: !0,
    DANGER: 7,
    BODY: {
        FOV: 1.1 * base.FOV,
        SPEED: .9 * base.SPEED
    },
    GUNS: [{
        POSITION: [19, 2, 1, 0, -2.5, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }, {
        POSITION: [19, 2, 1, 0, -2.5, 120, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 120, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 120, 0]
    }, {
        POSITION: [19, 2, 1, 0, -2.5, -120, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [19, 2, 1, 0, 2.5, -120, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, -120, 0]
    }]
}, exports.diploid = {
    PARENT: [exports.genericTank],
    LABEL: "Diploid",
    INDEPENDENT: !0,
    DANGER: 7,
    BODY: {
        FOV: 1.1 * base.FOV,
        SPEED: .9 * base.SPEED
    },
    GUNS: [{
        POSITION: [19, 2, -1.7, 0, -2.5, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [19, 2, -1.7, 0, 2.5, 0, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }]
}, exports.naturalist = {
    PARENT: [exports.genericTank],
    LABEL: "Naturalist",
    INDEPENDENT: !0,
    DANGER: 7,
    BODY: {
        FOV: 1.1 * base.FOV,
        SPEED: .9 * base.SPEED
    },
    GUNS: [{
        POSITION: [15, 4, -1.7, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.gunner, g.power, g.twin, g.nail, g.doublereload, g.machspraysmall]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }]
}, exports.greenhouse = {
    PARENT: [exports.genericTank],
    LABEL: "Greenhouse",
    INDEPENDENT: !0,
    DANGER: 7,
    BODY: {
        FOV: 1.1 * base.FOV,
        SPEED: .9 * base.SPEED
    },
    GUNS: [{
        POSITION: [15, 4, -1.7, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.gunner, g.power, g.twin, g.nail, g.doublereload, g.machspraysmall]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }, {
        POSITION: [15, 4, -1.7, 0, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.gunner, g.power, g.twin, g.nail, g.doublereload, g.machspraysmall]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 180, 0]
    }]
}, exports.diploist = {
    PARENT: [exports.genericTank],
    LABEL: "Diploist",
    INDEPENDENT: !0,
    DANGER: 7,
    BODY: {
        FOV: 1.1 * base.FOV,
        SPEED: .9 * base.SPEED
    },
    GUNS: [{
        POSITION: [19, 2, -1.7, 0, -2.5, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [19, 2, -1.7, 0, 2.5, 0, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [20, 2, -1.7, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }]
}, exports.sharpshooter = {
    PARENT: [exports.genericTank],
    LABEL: "Sharpshooter",
    INDEPENDENT: !0,
    DANGER: 7,
    BODY: {
        FOV: 1.2 * base.FOV,
        SPEED: .9 * base.SPEED
    },
    GUNS: [{
        POSITION: [21, 2, 1, 0, -2.5, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [21, 2, 1, 0, 2.5, 0, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }]
}, exports.precperc = {
    PARENT: [exports.genericTank],
    LABEL: "Precise Pierce",
    DANGER: 7,
    BODY: {
        FOV: 1.2 * base.FOV,
        SPEED: .9 * base.SPEED
    },
    GUNS: [{
        POSITION: [21, 2, 1, 0, -2.5, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [21, 2, 1, 0, 2.5, 0, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [22, 2, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }]
}, exports.nailgun = {
    PARENT: [exports.genericTank],
    LABEL: "Nailgun",
    DANGER: 7,
    BODY: {
        FOV: 1.1 * base.FOV,
        SPEED: .9 * base.SPEED
    },
    GUNS: [{
        POSITION: [19, 2, 1, 0, -2.5, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [20, 2, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }]
}, exports.staplegun = {
    PARENT: [exports.genericTank],
    LABEL: "Staple Gun",
    DANGER: 7,
    BODY: {
        FOV: 1.1 * base.FOV,
        SPEED: .9 * base.SPEED
    },
    GUNS: [{
        POSITION: [18, 2, 1, 0, -5, 0, 1.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 2, 1, 0, 5, 0, 1.75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [19, 2, 1, 0, -2.5, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [20, 2, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [6.5, 12, -1.4, 5.5, 0, 0, 0]
    }]
}, exports.terminal = {
    PARENT: [exports.genericTank],
    LABEL: "Terminal",
    DANGER: 7,
    BODY: {
        FOV: 1.1 * base.FOV,
        SPEED: 1.1 * base.SPEED
    },
    PASS_THROUGH_WALLS: !0,
    MOTION_TYPE: "glive",
    GUNS: [{
        POSITION: [18, 2, 1, 0, -5, 0, 1.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 2, 1, 0, 5, 0, 1.75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [19, 2, 1, 0, -2.5, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [20, 2, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [6.5, 12, -1.4, 5.5, 0, 0, 0]
    }, {
        POSITION: [17, 9, .6, 7, 0, 180, 0]
    }],
    TURRETS: [{
        POSITION: [9, 20, 0, 180, 360, 1],
        TYPE: exports.propellerB
    }, {
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: exports.propellerA
    }]
}, exports.double = {
    PARENT: [exports.genericTank],
    LABEL: "Double",
    DANGER: 6,
    GUNS: [{
        POSITION: [18, 8, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, -5.5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 5.5, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, -5.5, 180, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
            TYPE: exports.bullet
        }
    }]
}, exports.tripletwin = {
    PARENT: [exports.genericTank],
    LABEL: "Triple Twin",
    DANGER: 7,
    GUNS: [{
        POSITION: [18, 8, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, -5.5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 5.5, 120, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, -5.5, 120, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 5.5, 240, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, -5.5, 240, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
            TYPE: exports.bullet
        }
    }]
}, exports.autodouble = makeAuto(exports.double, "Auto-Double"), exports.split = {
    PARENT: [exports.genericTank],
    LABEL: "Hewn Double",
    DANGER: 7,
    GUNS: [{
        POSITION: [19, 8, 1, 0, 5.5, 25, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.double, g.hewn, g.morerecoil]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [19, 8, 1, 0, -5.5, -25, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.double, g.hewn, g.morerecoil]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [20, 8, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn, g.morerecoil]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [20, 8, 1, 0, -5.5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn, g.morerecoil]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [20, 8, 1, 0, 5.5, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [20, 8, 1, 0, -5.5, 180, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
            TYPE: exports.bullet
        }
    }]
}, exports.bent = {
    PARENT: [exports.genericTank],
    LABEL: "Bent",
    DANGER: 6,
    BODY: {
        SPEED: .9 * base.SPEED
    },
    GUNS: [{
        POSITION: [17, 8, 1, 0, -2, -20, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [17, 8, 1, 0, 2, 20, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [20, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet
        }
    }]
}, exports.bentswarm = {
    PARENT: [exports.genericTank],
    LABEL: "Bent Swarm",
    DANGER: 6,
    BODY: {
        SPEED: .9 * base.SPEED
    },
    GUNS: [{
        POSITION: [17, 8, 1, 0, -2, -20, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [17, 8, 1, 0, 2, 20, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [20, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [7, 9, .6, 7, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [7, 9, .6, 7, 0, 270, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }]
}, exports.bentdouble = {
    PARENT: [exports.genericTank],
    LABEL: "Bent Double",
    DANGER: 7,
    GUNS: [{
        POSITION: [17, 8, 1, 0, -1, -25, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [17, 8, 1, 0, 1, 25, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [20, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [17, 8, 1, 0, -1, 155, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [17, 8, 1, 0, 1, -155, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [20, 8, 1, 0, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
            TYPE: exports.bullet
        }
    }]
}, exports.penta = {
    PARENT: [exports.genericTank],
    LABEL: "Penta Shot",
    DANGER: 7,
    BODY: {
        SPEED: .85 * base.SPEED
    },
    GUNS: [{
        POSITION: [14, 8, 1, 0, -3, -30, .667],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [14, 8, 1, 0, 3, 30, .667],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [17, 8, 1, 0, -2, -15, .333],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [17, 8, 1, 0, 2, 15, .333],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [20, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet
        }
    }]
}, exports.axolotl = {
    PARENT: [exports.genericTank],
    LABEL: "Axolotl",
    DANGER: 7,
    BODY: {
        SPEED: .85 * base.SPEED
    },
    GUNS: [{
        POSITION: [14, 8, 1, 0, -3, -30+180, .667],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [14, 8, 1, 0, 3, 30+180, .667],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [17, 8, 1, 0, -2, -15+180, .333],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [17, 8, 1, 0, 2, 15+180, .333],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [20, 8, 1, 0, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, -5.5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet
        }
    }]
}, exports.benthybrid = makeHybrid(exports.bent, "Bent Hybrid"), exports.triple = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    BODY: {
        FOV: 1.05 * base.FOV
    },
    LABEL: "Triplet",
    GUNS: [{
        POSITION: [16, 8, 1, 0, 5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [16, 8, 1, 0, -5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [19, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
            TYPE: exports.bullet
        }
    }]
}, exports.quint = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    BODY: {
        FOV: 1.1 * base.FOV
    },
    LABEL: "Quintuplet",
    GUNS: [{
        POSITION: [16, 10, 1, 0, -5, 0, .667],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [16, 10, 1, 0, 5, 0, .667],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [19, 10, 1, 0, -3, 0, .333],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [19, 10, 1, 0, 3, 0, .333],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [22, 10, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
            TYPE: exports.bullet
        }
    }]
}, exports.dual = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    BODY: {
        ACCEL: .8 * base.ACCEL,
        FOV: 1.1 * base.FOV
    },
    LABEL: "Dual",
    GUNS: [{
        POSITION: [18, 7, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
            TYPE: exports.bullet,
            LABEL: "Small"
        }
    }, {
        POSITION: [18, 7, 1, 0, -5.5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
            TYPE: exports.bullet,
            LABEL: "Small"
        }
    }, {
        POSITION: [16, 8.5, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [16, 8.5, 1, 0, -5.5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
            TYPE: exports.bullet
        }
    }]
}, exports.certhar = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    BODY: {
        ACCEL: .8 * base.ACCEL,
        FOV: 1.1 * base.FOV
    },
    LABEL: "Certhar",
    GUNS: [{
        POSITION: [20, 6.5, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower, g.lowpower]),
            TYPE: exports.bullet,
            LABEL: "Smaller"
        }
    }, {
        POSITION: [20, 6.5, 1, 0, -5.5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower, g.lowpower]),
            TYPE: exports.bullet,
            LABEL: "Smaller"
        }
    }, {
        POSITION: [18, 7, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
            TYPE: exports.bullet,
            LABEL: "Small"
        }
    }, {
        POSITION: [18, 7, 1, 0, -5.5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
            TYPE: exports.bullet,
            LABEL: "Small"
        }
    }, {
        POSITION: [16, 8.5, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [16, 8.5, 1, 0, -5.5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
            TYPE: exports.bullet
        }
    }]
}, exports.doubledual = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    BODY: {
        ACCEL: .8 * base.ACCEL,
        FOV: 1.1 * base.FOV
    },
    LABEL: "Double Dual",
    GUNS: [{
        POSITION: [18, 7, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
            TYPE: exports.bullet,
            LABEL: "Small"
        }
    }, {
        POSITION: [18, 7, 1, 0, -5.5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
            TYPE: exports.bullet,
            LABEL: "Small"
        }
    }, {
        POSITION: [16, 8.5, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [16, 8.5, 1, 0, -5.5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 7, 1, 0, 5.5, 180, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
            TYPE: exports.bullet,
            LABEL: "Small"
        }
    }, {
        POSITION: [18, 7, 1, 0, -5.5, 180, 1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
            TYPE: exports.bullet,
            LABEL: "Small"
        }
    }, {
        POSITION: [16, 8.5, 1, 0, 5.5, 180, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [16, 8.5, 1, 0, -5.5, 180, 1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
            TYPE: exports.bullet
        }
    }]
}, exports.pair = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    BODY: {
        ACCEL: .8 * base.ACCEL,
        FOV: 1.1 * base.FOV
    },
    LABEL: "Griffin",
    ALT_FIRE_TOOLTIP: !0,
    GUNS: [{
        POSITION: [18, 7, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
            TYPE: exports.bullet,
            LABEL: "Small",
            ALT_FIRE: !0
        }
    }, {
        POSITION: [18, 7, 1, 0, -5.5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
            TYPE: exports.bullet,
            LABEL: "Small",
            ALT_FIRE: !0
        }
    }, {
        POSITION: [16, 8.5, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
            TYPE: exports.bullet,
            ALT_FIRE: !0
        }
    }, {
        POSITION: [16, 8.5, 1, 0, -5.5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
            TYPE: exports.bullet,
            ALT_FIRE: !0
        }
    }, {
        POSITION: [16, 8, 1, 0, 0, 150, .1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster
        }
    }, {
        POSITION: [16, 8, 1, 0, 0, 210, .1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 180, .6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster
        }
    }]
}, exports.sniper = {
    PARENT: [exports.genericTank],
    LABEL: "Sniper",
    BODY: {
        ACCELERATION: .7 * base.ACCEL,
        FOV: 1.2 * base.FOV
    },
    GUNS: [{
        POSITION: [22, 8.5, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
            TYPE: exports.bullet
        }
    }]
}, exports.ninja = {
    PARENT: [exports.genericTank],
    LABEL: "Ninja",
    DANGER: 6,
    BODY: {
        ACCELERATION: .7 * base.ACCEL,
        FOV: 1.2 * base.FOV
    },
    INVISIBLE: [.08, .03],
    GUNS: [{
        POSITION: [22, 8.5, -1.5, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
            TYPE: exports.bullet
        }
    }]
}, exports.rifle = {
    PARENT: [exports.genericTank],
    LABEL: "Rifle",
    BODY: {
        ACCELERATION: .7 * base.ACCEL,
        FOV: 1.225 * base.FOV
    },
    GUNS: [{
        POSITION: [20, 10.5, 1, 0, 0, 0, 0]
    }, {
        POSITION: [24, 7, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
            TYPE: exports.bullet
        }
    }]
}, exports.musket = {
    PARENT: [exports.genericTank],
    LABEL: "Musket",
    BODY: {
        ACCELERATION: .7 * base.ACCELERATION,
        FOV: 1.2 * base.FOV
    },
    GUNS: [{
        POSITION: [15.5, 19.5, 1, 0, 0, 0, 0]
    }, {
        POSITION: [18, 7, 1, 0, 4.15, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.twin, g.rifle, g.bitweak]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 7, 1, 0, -4.15, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.twin, g.rifle, g.bitweak]),
            TYPE: exports.bullet
        }
    }]
}, exports.assassin = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: "Assassin",
    BODY: {
        ACCELERATION: .6 * base.ACCEL,
        SPEED: .85 * base.SPEED,
        FOV: 1.4 * base.FOV
    },
    GUNS: [{
        POSITION: [27, 8.5, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
    }]
}, exports.stalker = {
    PARENT: [exports.genericTank],
    LABEL: "Stalker",
    DANGER: 7,
    BODY: {
        ACCELERATION: .55 * base.ACCELERATION,
        SPEED: .85 * base.SPEED,
        FOV: 1.35 * base.FOV
    },
    INVISIBLE: [.08, .03],
    GUNS: [{
        POSITION: [27, 8.5, -2, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
            TYPE: exports.bullet
        }
    }]
}, exports.ambusher = {
    PARENT: [exports.auto3gun],
    LABEL: "",
    BODY: {
        FOV: .6
    },
    INVISIBLE: [.08, .03],
    GUNS: [{
        POSITION: [36, 12, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.power]),
            TYPE: exports.bullet
        }
    }]
}, exports.ambusher2 = {
    PARENT: [exports.genericTank],
    LABEL: "",
    BODY: {
        FOV: .6
    },
    GUNS: [{
        POSITION: [36, 12, -1.4, 0, 0, 0, 0]
    }]
}, exports.ranger = {
    PARENT: [exports.genericTank],
    LABEL: "Ranger",
    DANGER: 7,
    BODY: {
        ACCELERATION: .5 * base.ACCEL,
        SPEED: .8 * base.SPEED,
        FOV: 1.5 * base.FOV
    },
    GUNS: [{
        POSITION: [32, 8.5, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
    }]
}, exports.autoass = makeAuto(exports.assassin, ""), exports.hunter = {
    PARENT: [exports.genericTank],
    LABEL: "Hunter",
    DANGER: 6,
    BODY: {
        ACCELERATION: .7 * base.ACCEL,
        SPEED: .9 * base.SPEED,
        FOV: 1.25 * base.FOV
    },
    GUNS: [{
        POSITION: [24, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [21, 12, 1, 0, 0, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
            TYPE: exports.bullet
        }
    }]
}, exports.autoHunter = makeAuto(exports.hunter), exports.ordnance = {
    PARENT: [exports.genericTank],
    LABEL: "Ordnance",
    DANGER: 6,
    BODY: {
        ACCELERATION: .7 * base.ACCEL,
        SPEED: .9 * base.SPEED,
        FOV: 1.25 * base.FOV
    },
    GUNS: [{
        POSITION: [17, 3, 1, 0, -6, -7, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [17, 3, 1, 0, 6, 7, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [24, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [21, 12, 1, 0, 0, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
            TYPE: exports.bullet
        }
    }]
}, exports.preda = {
    PARENT: [exports.genericTank],
    LABEL: "Predator",
    DANGER: 7,
    BODY: {
        ACCELERATION: .7 * base.ACCEL,
        SPEED: .85 * base.SPEED,
        FOV: 1.3 * base.FOV
    },
    ZOOM_TOOLTIP: !0,
    GUNS: [{
        POSITION: [24, 7, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [21, 11, 1, 0, 0, 0, .15],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.preda]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 15, 1, 0, 0, 0, .3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
            TYPE: exports.bullet
        }
    }]
}, exports.poach = makeHybrid(exports.hunter, "Poacher"), exports.sidewind = {
    PARENT: [exports.genericTank],
    LABEL: "Sidewinder",
    DANGER: 7,
    BODY: {
        ACCELERATION: .7 * base.ACCEL,
        SPEED: .8 * base.SPEED,
        FOV: 1.3 * base.FOV
    },
    GUNS: [{
        POSITION: [10, 11, -.5, 14, 0, 0, 0]
    }, {
        POSITION: [21, 12, -1.1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
            TYPE: exports.snake,
            STAT_CALCULATOR: gunCalcNames.sustained
        }
    }]
}, exports.director = {
    PARENT: [exports.genericTank],
    LABEL: "Director",
    STAT_NAMES: statnames.drone,
    DANGER: 5,
    BODY: {
        ACCELERATION: .75 * base.ACCEL,
        FOV: 1.1 * base.FOV
    },
    MAX_CHILDREN: 8,
    GUNS: [{
        POSITION: [6, 12, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone
        }
    }]
}, exports.polymancer = {
    PARENT: [exports.genericTank],
    LABEL: "Polymancer",
    STAT_NAMES: statnames.drone,
    DANGER: 5,
    BODY: {
        ACCELERATION: .75 * base.ACCEL,
        FOV: 1.1 * base.FOV
    },
    GUNS: [{
        POSITION: [19, .3, -45, 0, 0, 180, 0],
        PROPERTIES: {
            FILL: 5
        }
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 0, 0]
    }, {
        POSITION: [6, 20, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.sentrySwarm2,
            MAX_CHILDREN: 2,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            SKIN: 5,
            STAT_CALCULATOR: gunCalcNames.drone
        }
    }, {
        POSITION: [6, 20, 1.2, 8, 0, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.sentryTrap2,
            MAX_CHILDREN: 2,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            SKIN: 5,
            STAT_CALCULATOR: gunCalcNames.drone
        }
    }, {
        POSITION: [6, 20, 1.2, 8, 0, 0, 1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.sentryGun2,
            MAX_CHILDREN: 2,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            SKIN: 5,
            STAT_CALCULATOR: gunCalcNames.drone
        }
    }]
}, exports.director2 = {
    PARENT: [exports.genericTank],
    LABEL: "",
    STAT_NAMES: statnames.drone,
    DANGER: 5,
    BODY: {
        ACCELERATION: .75 * base.ACCEL,
        FOV: 1.1 * base.FOV
    },
    MAX_CHILDREN: 8,
    GUNS: [{
        POSITION: [6, 12, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.pdrone,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone
        }
    }],
    TURRETS: [{
        POSITION: [12, 0, 0, 0, 0, 1],
        TYPE: [exports.pavement_triangle, {
            COLOR: 5
        }]
    }]
}, exports.manager = {
    PARENT: [exports.genericTank],
    LABEL: "Manager",
    STAT_NAMES: statnames.drone,
    DANGER: 5,
    BODY: {
        ACCELERATION: .75 * base.ACCEL,
        FOV: 1.1 * base.FOV
    },
    INVISIBILITY_TOOLTIP: !0,
    MAX_CHILDREN: 8,
    INVISIBLE: [.08, .03],
    GUNS: [{
        POSITION: [6, 12, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            SKIN: 2,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone
        }
    }]
}, exports.supervisor = {
    PARENT: [exports.genericTank],
    LABEL: "Supervisor",
    STAT_NAMES: statnames.drone,
    DANGER: 5,
    BODY: {
        ACCELERATION: .75 * base.ACCEL,
        FOV: 1.1 * base.FOV
    },
    INVISIBILITY_TOOLTIP: !0,
    MAX_CHILDREN: 12,
    INVISIBLE: [.08, .03],
    GUNS: [{
        POSITION: [6, 12, 1.2, 8, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            SKIN: 2,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone
        }
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            SKIN: 2,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone
        }
    }]
}, exports.overseer = {
    PARENT: [exports.genericTank],
    LABEL: "Overseer",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        ACCELERATION: .75 * base.ACCEL,
        SPEED: .9 * base.SPEED,
        FOV: 1.1 * base.FOV
    },
    MAX_CHILDREN: 8,
    GUNS: [{
        POSITION: [6, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0
        }
    }]
}, exports.commander = {
    PARENT: [exports.genericTank],
    LABEL: "Hazmat",
    STAT_NAMES: statnames.drone,
    DANGER: 7,
    BODY: {
        ACCELERATION: .75 * base.ACCEL,
        FOV: 1.15 * base.FOV
    },
    GUNS: [{
        POSITION: [12, 7.5, .6, 7, 0, 90, 1 / 3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.commander]),
            TYPE: [exports.swarm, {
                CONTROLLERS: ["canRepel"]
            }],
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [12, 7.5, .6, 7, 0, 270, 1 / 3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.commander]),
            TYPE: [exports.swarm, {
                CONTROLLERS: ["canRepel"]
            }],
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.master, g.commander]),
            TYPE: exports.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            MAX_CHILDREN: 4
        }
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.master, g.commander]),
            TYPE: exports.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            MAX_CHILDREN: 4
        }
    }]
}, exports.ovrfictor = {
    PARENT: [exports.genericTank],
    LABEL: "Ovrfictor",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        ACCELERATION: .75 * base.ACCEL,
        SPEED: .9 * base.SPEED,
        FOV: 1.1 * base.FOV
    },
    INVISIBLE: [.08, .03],
    MAX_CHILDREN: 8,
    GUNS: [{
        POSITION: [6, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            SKIN: 2,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            SKIN: 2,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0
        }
    }]
}, exports.incursion = {
    PARENT: [exports.genericTank],
    LABEL: "Incursion",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        ACCELERATION: .75 * base.ACCEL,
        SPEED: .9 * base.SPEED,
        FOV: 1.1 * base.FOV
    },
    MAX_CHILDREN: 8,
    GUNS: [{
        POSITION: [6, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.boomdrone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.boomdrone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0
        }
    }],
    TURRETS: [{
        POSITION: [13, 0, 0, 0, 0, 1],
        TYPE: [exports.egg, {
            COLOR: 3,
            TYPE: "turret",
            INDEPENDENT: !0
        }]
    }]
}, exports.fleet = {
    PARENT: [exports.genericTank],
    LABEL: "Fleet",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        ACCELERATION: .75 * base.ACCEL,
        SPEED: .9 * base.SPEED,
        FOV: 1.1 * base.FOV
    },
    MAX_CHILDREN: 2,
    GUNS: [{
        POSITION: [6, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.dronecluster,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.dronecluster,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [7, 14, -1.2, 5, 0, 90, 0]
    }, {
        POSITION: [7, 14, -1.2, 5, 0, 270, 0]
    }]
}, exports.autodrone = makeAuto(exports.drone, "Auto-Drone", {
    type: exports.droneAutoTurret,
    size: 9
}), exports.overdrive = {
    PARENT: [exports.genericTank],
    LABEL: "Overdrive",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        ACCELERATION: .75 * base.ACCEL,
        SPEED: .9 * base.SPEED,
        FOV: 1.1 * base.FOV
    },
    MAX_CHILDREN: 8,
    GUNS: [{
        POSITION: [6, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.autodrone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.autodrone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0
        }
    }],
    TURRETS: [{
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: exports.drivesquare
    }]
}, exports.overlord = {
    PARENT: [exports.genericTank],
    LABEL: "Overlord",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        ACCELERATION: .75 * base.ACCEL,
        SPEED: .8 * base.SPEED,
        FOV: 1.1 * base.FOV
    },
    MAX_CHILDREN: 8,
    GUNS: [{
        POSITION: [6, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0
        }
    }]
}, exports.insurgence = {
    PARENT: [exports.genericTank],
    LABEL: "Insurgence",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        ACCELERATION: .75 * base.ACCEL,
        SPEED: .8 * base.SPEED,
        FOV: 1.1 * base.FOV
    },
    MAX_CHILDREN: 8,
    GUNS: [{
        POSITION: [6, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.boomdrone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.boomdrone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.boomdrone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.boomdrone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0
        }
    }],
    TURRETS: [{
        POSITION: [13, 0, 0, 0, 0, 1],
        TYPE: [exports.egg, {
            COLOR: 3,
            TYPE: "turret",
            INDEPENDENT: !0
        }]
    }]
}, exports.dreadnought = {
    PARENT: [exports.genericTank],
    LABEL: "Dreadnought",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        ACCELERATION: .75 * base.ACCEL,
        SPEED: .8 * base.SPEED,
        FOV: 1.1 * base.FOV
    },
    GUNS: [{
        POSITION: [12, 7.5, .6, 7, 0, 0, 1 / 3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.commander]),
            TYPE: [exports.swarm, {
                CONTROLLERS: ["canRepel"]
            }],
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [12, 7.5, .6, 7, 0, 180, 2 / 3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.commander]),
            TYPE: [exports.swarm, {
                CONTROLLERS: ["canRepel"]
            }],
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [12, 7.5, .6, 7, 0, 90, 1 / 3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.commander]),
            TYPE: [exports.swarm, {
                CONTROLLERS: ["canRepel"]
            }],
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [12, 7.5, .6, 7, 0, 270, 2 / 3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.commander]),
            TYPE: [exports.swarm, {
                CONTROLLERS: ["canRepel"]
            }],
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            MAX_CHILDREN: 2,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            MAX_CHILDREN: 2,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            MAX_CHILDREN: 2,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: !0,
            MAX_CHILDREN: 2,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0
        }
    }]
}, exports.overtrap = {
    PARENT: [exports.genericTank],
    LABEL: "Overtrapper",
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    BODY: {
        ACCELERATION: .6 * base.ACCEL,
        SPEED: .8 * base.SPEED,
        FOV: 1.2 * base.FOV
    },
    GUNS: [{
        POSITION: [6, 11, 1.2, 8, 0, 125, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
            TYPE: exports.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0,
            MAX_CHILDREN: 3
        }
    }, {
        POSITION: [6, 11, 1.2, 8, 0, 235, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
            TYPE: exports.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0,
            MAX_CHILDREN: 3
        }
    }, {
        POSITION: [14, 8, 1, 0, 0, 0, 0]
    }, {
        POSITION: [4, 8, 1.5, 14, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }]
}, exports.banshee = {
    PARENT: [exports.genericTank],
    LABEL: "Banshee",
    DANGER: 7,
    BODY: {
        ACCELERATION: .5 * base.ACCEL,
        SPEED: .8 * base.SPEED,
        FOV: 1.1 * base.FOV
    },
    FACING_TYPE: "autospin",
    TURRETS: [{
        POSITION: [10, 8, 0, 0, 80, 0],
        TYPE: exports.bansheegun
    }, {
        POSITION: [10, 8, 0, 120, 80, 0],
        TYPE: exports.bansheegun
    }, {
        POSITION: [10, 8, 0, 240, 80, 0],
        TYPE: exports.bansheegun
    }],
    GUNS: [{
        POSITION: [6, 11, 1.2, 8, 0, 60, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0,
            MAX_CHILDREN: 2
        }
    }, {
        POSITION: [6, 11, 1.2, 8, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0,
            MAX_CHILDREN: 2
        }
    }, {
        POSITION: [6, 11, 1.2, 8, 0, 300, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0,
            MAX_CHILDREN: 2
        }
    }]
}, exports.nitro = {
    PARENT: [exports.genericTank],
    LABEL: "Nitro",
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    BODY: {
        ACCELERATION: .75 * base.ACCEL,
        SPEED: .9 * base.SPEED,
        FOV: 1.1 * base.FOV
    },
    GUNS: [{
        POSITION: [14, 5, -1.7, 0, 0, -90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.autoswarm,
            LABEL: "Autonomus"
        }
    }, {
        POSITION: [14, 5, -1.7, 0, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.autoswarm,
            LABEL: "Autonomus"
        }
    }, {
        POSITION: [14, 5, -1.7, 0, 0, 135, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            LABEL: "Guided"
        }
    }, {
        POSITION: [14, 5, -1.7, 0, 0, -135, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            LABEL: "Guided"
        }
    }, {
        POSITION: [19, 2, 1, 0, -2.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.slow, g.flank, g.lotsmorrecoil]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, .5, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.slow, g.flank, g.lotsmorrecoil]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [12, 11, 1, 0, 0, 0, 0]
    }]
}, exports.autoover = makeAuto(exports.overseer), exports.overgunner = {
    PARENT: [exports.genericTank],
    LABEL: "Overgunner",
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    BODY: {
        ACCELERATION: .75 * base.ACCEL,
        SPEED: .9 * base.SPEED,
        FOV: 1.1 * base.FOV
    },
    GUNS: [{
        POSITION: [6, 11, 1.2, 8, 0, 125, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
            TYPE: exports.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0,
            MAX_CHILDREN: 3
        }
    }, {
        POSITION: [6, 11, 1.2, 8, 0, 235, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
            TYPE: exports.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0,
            MAX_CHILDREN: 3
        }
    }, {
        POSITION: [19, 2, 1, 0, -2.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.slow, g.flank, g.lotsmorrecoil]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.slow, g.flank, g.lotsmorrecoil]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [12, 11, 1, 0, 0, 0, 0]
    }]
}, exports.cruiserGun = makeSwarmSpawner(combineStats([g.swarm])), exports.cruiser = {
    PARENT: [exports.genericTank],
    LABEL: "Cruiser",
    DANGER: 6,
    FACING_TYPE: "locksFacing",
    STAT_NAMES: statnames.swarm,
    BODY: {
        ACCELERATION: .75 * base.ACCEL,
        FOV: 1.2 * base.FOV
    },
    GUNS: [{
        POSITION: [7, 7.5, .6, 7, 4, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [7, 7.5, .6, 7, -4, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }]
}, exports.battleship = {
    PARENT: [exports.genericTank],
    LABEL: "Battleship",
    DANGER: 7,
    STAT_NAMES: statnames.swarm,
    FACING_TYPE: "locksFacing",
    BODY: {
        ACCELERATION: base.ACCEL,
        FOV: 1.2 * base.FOV
    },
    GUNS: [{
        POSITION: [7, 7.5, .6, 7, 4, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: "Guided"
        }
    }, {
        POSITION: [7, 7.5, .6, 7, -4, 90, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: "Autonomous"
        }
    }, {
        POSITION: [7, 7.5, .6, 7, 4, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: "Autonomous"
        }
    }, {
        POSITION: [7, 7.5, .6, 7, -4, 270, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: "Guided"
        }
    }]
}, exports.remnant = {
    PARENT: [exports.genericTank],
    LABEL: "Remnant",
    DANGER: 7,
    STAT_NAMES: statnames.swarm,
    FACING_TYPE: "locksFacing",
    BODY: {
        ACCELERATION: base.ACCEL,
        FOV: 1.2 * base.FOV
    },
    GUNS: [{
        POSITION: [7, 7, .6, 7, 0, -45, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: "Guided"
        }
    }, {
        POSITION: [7, 7, .6, 7, 0, 45, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: "Autonomus"
        }
    }, {
        POSITION: [7, 7, .6, 7, 0, -135, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: "Autonomous"
        }
    }, {
        POSITION: [7, 7, .6, 7, 0, 135, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: "Guided"
        }
    }, {
        POSITION: [7, 7, .6, 7, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.autoswarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: "Autonomous"
        }
    }, {
        POSITION: [7, 7, .6, 7, 0, -90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: "Autonomous"
        }
    }]
}, exports.carrier = {
    PARENT: [exports.genericTank],
    LABEL: "Carrier",
    DANGER: 7,
    STAT_NAMES: statnames.swarm,
    FACING_TYPE: "locksFacing",
    BODY: {
        ACCELERATION: .75 * base.ACCEL,
        FOV: 1.3 * base.FOV
    },
    GUNS: [{
        POSITION: [7, 7.5, .6, 7, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [7, 7.5, .6, 7, 2, 40, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [7, 7.5, .6, 7, -2, -40, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }]
}, exports.autocruiser = makeAuto(exports.cruiser), exports.hivemind = {
    PARENT: [exports.genericTank],
    LABEL: "Mini Abomination",
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    BODY: {
        SPEED: 1 * base.SPEED,
        FOV: 1.4 * base.FOV,
        DAMAGE: .5 * base.DAMAGE
    },
    SIZE: 20,
    COLOR: 0,
    FACING_TYPE: "autospin",
    GUNS: [{
        POSITION: [7, 7.5, .6, 7, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.swarm],
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [7, 7.5, .6, 7, 0, 120, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.swarm],
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [7, 7.5, .6, 7, 0, 240, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.swarm],
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }],
    TURRETS: [{
        POSITION: [8, 10, 0, 60, 10, 0],
        TYPE: exports.auto4gun
    }, {
        POSITION: [8, 10, 0, 180, 180, 0],
        TYPE: exports.auto4gun
    }, {
        POSITION: [8, 10, 0, 300, 180, 0],
        TYPE: exports.auto4gun
    }, {
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: [exports.director, {
            COLOR: 0
        }]
    }]
}, exports.fortress = {
    PARENT: [exports.genericTank],
    LABEL: "Fortress",
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    BODY: {
        SPEED: .8 * base.SPEED,
        FOV: 1.2 * base.FOV
    },
    GUNS: [{
        POSITION: [7, 7.5, .6, 7, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.swarm, {
                CONTROLLERS: ["canRepel"]
            }],
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [7, 7.5, .6, 7, 0, 120, 1 / 3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.swarm, {
                CONTROLLERS: ["canRepel"]
            }],
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [7, 7.5, .6, 7, 0, 240, 2 / 3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.swarm, {
                CONTROLLERS: ["canRepel"]
            }],
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [14, 9, 1, 0, 0, 60, 0]
    }, {
        POSITION: [4, 9, 1.5, 14, 0, 60, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }, {
        POSITION: [14, 9, 1, 0, 0, 180, 0]
    }, {
        POSITION: [4, 9, 1.5, 14, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }, {
        POSITION: [14, 9, 1, 0, 0, 300, 0]
    }, {
        POSITION: [4, 9, 1.5, 14, 0, 300, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }]
}, exports.bunker = {
    PARENT: [exports.genericTank],
    LABEL: "Bunker",
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    BODY: {
        SPEED: .8 * base.SPEED,
        FOV: 1.2 * base.FOV
    },
    GUNS: [{
        POSITION: [7, 7.5, .6, 7, 4, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.lessreload, g.lessreload]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [7, 7.5, .6, 7, -4, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.lessreload, g.lessreload]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [7, 7.5, .6, 7, 4, 120, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.lessreload, g.lessreload]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [7, 7.5, .6, 7, -4, 120, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.lessreload, g.lessreload]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [7, 7.5, .6, 7, 4, 240, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.lessreload, g.lessreload]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [7, 7.5, .6, 7, -4, 240, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.lessreload, g.lessreload]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [14, 9, 1, 0, 0, 60, 0]
    }, {
        POSITION: [4, 9, 1.5, 14, 0, 60, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }, {
        POSITION: [14, 9, 1, 0, 0, 180, 0]
    }, {
        POSITION: [4, 9, 1.5, 14, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }, {
        POSITION: [14, 9, 1, 0, 0, 300, 0]
    }, {
        POSITION: [4, 9, 1.5, 14, 0, 300, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }]
}, exports.underseer = {
    PARENT: [exports.genericTank],
    LABEL: "Underseer",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        ACCELERATION: .7 * base.ACCEL,
        SPEED: .9 * base.SPEED,
        FOV: 1.1 * base.FOV
    },
    SHAPE: 4,
    MAX_CHILDREN: 14,
    GUNS: [{
        POSITION: [5, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: exports.sunchip,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }, {
        POSITION: [5, 12, 1.2, 8, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: exports.sunchip,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }]
}, exports.undrfictor = {
    PARENT: [exports.genericTank],
    LABEL: "Undrfictor",
    DANGER: 6,
    INVISIBLE: [.08, .03],
    STAT_NAMES: statnames.drone,
    BODY: {
        ACCELERATION: .7 * base.ACCEL,
        SPEED: .9 * base.SPEED,
        FOV: 1.1 * base.FOV
    },
    SHAPE: 4,
    MAX_CHILDREN: 14,
    GUNS: [{
        POSITION: [5, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: exports.sunchip,
            SKIN: 2,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }, {
        POSITION: [5, 12, 1.2, 8, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: exports.sunchip,
            SKIN: 2,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }]
}, exports.ecotrixy = {
    PARENT: [exports.genericTank],
    LABEL: "Ecotrixy",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        ACCELERATION: .7 * base.ACCEL,
        SPEED: .9 * base.SPEED,
        FOV: 1.1 * base.FOV
    },
    SHAPE: 4,
    GUNS: [{
        POSITION: [12, 7.5, .6, 7, 0, 270, 1 / 3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.commander]),
            TYPE: [exports.swarm, {
                CONTROLLERS: ["canRepel"]
            }],
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [12, 7.5, .6, 7, 0, 90, 2 / 3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.commander]),
            TYPE: [exports.swarm, {
                CONTROLLERS: ["canRepel"]
            }],
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [5, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: exports.sunchip,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            MAX_CHILDREN: 7,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }, {
        POSITION: [5, 12, 1.2, 8, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: exports.sunchip,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            MAX_CHILDREN: 7,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }]
}, exports.munderseer = {
    PARENT: [exports.genericTank],
    LABEL: "Munderseer",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        ACCELERATION: .7 * base.ACCEL,
        SPEED: .9 * base.SPEED,
        FOV: 1.1 * base.FOV
    },
    SHAPE: 4,
    MAX_CHILDREN: 14,
    GUNS: [{
        POSITION: [5, 14, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.strongsunchip]),
            TYPE: exports.sunchip,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }, {
        POSITION: [5, 14, 1.2, 8, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.strongsunchip]),
            TYPE: exports.sunchip,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }]
}, exports.exotier = {
    PARENT: [exports.genericTank],
    LABEL: "Exotier",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        ACCELERATION: .7 * base.ACCEL,
        SPEED: .9 * base.SPEED,
        FOV: 1.1 * base.FOV
    },
    SHAPE: 4,
    MAX_CHILDREN: 14,
    GUNS: [{
        POSITION: [5, 16, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.strongsunchip, g.strongsunchip]),
            TYPE: exports.sunchip,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }, {
        POSITION: [5, 16, 1.2, 8, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.strongsunchip, g.strongsunchip]),
            TYPE: exports.sunchip,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }]
}, exports.sentinal = {
    PARENT: [exports.genericTank],
    LABEL: "Barrack",
    DANGER: 7,
    SHAPE: 4,
    STAT_NAMES: statnames.drone,
    BODY: {
        ACCELERATION: .7 * base.ACCEL,
        SPEED: .9 * base.SPEED,
        FOV: 1.1 * base.FOV
    },
    MAX_CHILDREN: 7,
    GUNS: [{
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5, 12, 1.2, 8, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: exports.autosunchip,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }]
}, exports.necromancer = {
    PARENT: [exports.genericTank],
    LABEL: "Necromancer",
    DANGER: 7,
    STAT_NAMES: statnames.necro,
    BODY: {
        ACCELERATION: .7 * base.ACCEL,
        SPEED: .8 * base.SPEED,
        FOV: 1.15 * base.FOV
    },
    SHAPE: 4,
    FACING_TYPE: "autospin",
    MAX_CHILDREN: 16,
    GUNS: [{
        POSITION: [5, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: exports.sunchip,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }, {
        POSITION: [5, 12, 1.2, 8, 0, 270, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: exports.sunchip,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }, {
        POSITION: [5, 12, 1.2, 8, 0, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: exports.sunchip,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }, {
        POSITION: [5, 12, 1.2, 8, 0, 180, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: exports.sunchip,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }]
}, exports.necromancer2 = {
    PARENT: [exports.genericTank],
    LABEL: "Necromancer",
    DANGER: 7,
    STAT_NAMES: statnames.necro,
    BODY: {
        ACCELERATION: .7 * base.ACCEL,
        SPEED: .8 * base.SPEED,
        FOV: 1.15 * base.FOV
    },
    SHAPE: 4,
    FACING_TYPE: "autospin",
    MAX_CHILDREN: 16,
    GUNS: [{
        POSITION: [5, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: exports.ysunchip,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }, {
        POSITION: [5, 12, 1.2, 8, 0, 270, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: exports.ysunchip,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }, {
        POSITION: [5, 12, 1.2, 8, 0, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: exports.ysunchip,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }, {
        POSITION: [5, 12, 1.2, 8, 0, 180, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: exports.ysunchip,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }]
}, exports.metrixy = {
    PARENT: [exports.genericTank],
    LABEL: "Metrixy",
    DANGER: 7,
    STAT_NAMES: statnames.necro,
    BODY: {
        ACCELERATION: .7 * base.ACCEL,
        SPEED: .8 * base.SPEED,
        FOV: 1.15 * base.FOV
    },
    SHAPE: 4,
    FACING_TYPE: "autospin",
    GUNS: [{
        POSITION: [12, 7.5, .6, 7, 0, 0, 1 / 3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.commander]),
            TYPE: [exports.swarm, {
                CONTROLLERS: ["canRepel"]
            }],
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [12, 7.5, .6, 7, 0, 180, 2 / 3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.commander]),
            TYPE: [exports.swarm, {
                CONTROLLERS: ["canRepel"]
            }],
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [12, 7.5, .6, 7, 0, 90, 1 / 3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.commander]),
            TYPE: [exports.swarm, {
                CONTROLLERS: ["canRepel"]
            }],
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [12, 7.5, .6, 7, 0, 270, 2 / 3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.commander]),
            TYPE: [exports.swarm, {
                CONTROLLERS: ["canRepel"]
            }],
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [5, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: exports.sunchip,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            MAX_CHILDREN: 4,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }, {
        POSITION: [5, 12, 1.2, 8, 0, 270, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: exports.sunchip,
            AUTOFIRE: !0,
            MAX_CHILDREN: 4,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }, {
        POSITION: [5, 12, 1.2, 8, 0, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: exports.sunchip,
            AUTOFIRE: !0,
            MAX_CHILDREN: 4,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }, {
        POSITION: [5, 12, 1.2, 8, 0, 180, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: exports.sunchip,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }]
}, exports.mecromancer = {
    PARENT: [exports.genericTank],
    LABEL: "Mecromancer",
    DANGER: 7,
    STAT_NAMES: statnames.necro,
    BODY: {
        ACCELERATION: .7 * base.ACCEL,
        SPEED: .8 * base.SPEED,
        FOV: 1.15 * base.FOV
    },
    SHAPE: 4,
    FACING_TYPE: "autospin",
    MAX_CHILDREN: 16,
    GUNS: [{
        POSITION: [5, 14, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.strongsunchip]),
            TYPE: exports.sunchip,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }, {
        POSITION: [5, 14, 1.2, 8, 0, 270, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.strongsunchip]),
            TYPE: exports.sunchip,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }, {
        POSITION: [5, 14, 1.2, 8, 0, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.strongsunchip]),
            TYPE: exports.sunchip,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }, {
        POSITION: [5, 14, 1.2, 8, 0, 180, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.strongsunchip]),
            TYPE: exports.sunchip,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }]
}, exports.maleficitor = {
    PARENT: [exports.genericTank],
    LABEL: "Maleficitor",
    DANGER: 7,
    STAT_NAMES: statnames.necro,
    BODY: {
        ACCELERATION: .75 * base.ACCEL,
        SPEED: .85 * base.SPEED,
        FOV: 1.1 * base.FOV
    },
    SHAPE: 4,
    MAX_CHILDREN: 14,
    GUNS: [{
        POSITION: [5, 12, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, [.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1]]),
            TYPE: [exports.sunchip, {
                INVISIBLE: [.06, .03]
            }],
            SKIN: 2,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }]
}, exports.necroficitor = {
    PARENT: [exports.genericTank],
    LABEL: "Necroficitor",
    DANGER: 7,
    STAT_NAMES: statnames.necro,
    BODY: {
        ACCELERATION: .75 * base.ACCEL,
        SPEED: .85 * base.SPEED,
        FOV: 1.1 * base.FOV
    },
    SHAPE: 4,
    MAX_CHILDREN: 16,
    GUNS: [{
        POSITION: [5, 12, 1.2, 8, 0, -90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, [.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1]]),
            TYPE: [exports.sunchip, {
                INVISIBLE: [.06, .03]
            }],
            SKIN: 2,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }, {
        POSITION: [5, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, [.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1]]),
            TYPE: [exports.sunchip, {
                INVISIBLE: [.06, .03]
            }],
            SKIN: 2,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }]
}, exports.lilfact = {
    PARENT: [exports.genericTank],
    LABEL: "Spawner",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: .8 * base.SPEED,
        ACCELERATION: .5 * base.ACCEL,
        FOV: 1.1
    },
    GUNS: [{
        POSITION: [4.5, 10, 1, 10.5, 0, 0, 0]
    }, {
        POSITION: [1, 12, 1, 15, 0, 0, 0],
        PROPERTIES: {
            MAX_CHILDREN: 4,
            SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
            TYPE: exports.minion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0
        }
    }, {
        POSITION: [3.5, 12, 1, 8, 0, 0, 0]
    }]
}, exports.azure = {
    PARENT: [exports.genericTank],
    LABEL: "Azure",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: .8 * base.SPEED,
        ACCELERATION: .5 * base.ACCEL,
        FOV: 1.1
    },
    GUNS: [{
        POSITION: [17, 8, 1, 0, 0, 120, 0]
    }, {
        POSITION: [17, 8, 1, 0, 0, 240, 0]
    }, {
        POSITION: [4.5, 10, 1, 10.5, 0, 0, 0]
    }, {
        POSITION: [1, 12, 1, 15, 0, 0, 0],
        PROPERTIES: {
            MAX_CHILDREN: 4,
            SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
            TYPE: exports.flankminion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0
        }
    }, {
        POSITION: [3.5, 12, 1, 8, 0, 0, 0]
    }]
}, exports.crescent = {
    PARENT: [exports.genericTank],
    LABEL: "Crescent",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: .8 * base.SPEED,
        ACCELERATION: .5 * base.ACCEL,
        FOV: 1.1
    },
    GUNS: [{
        POSITION: [20.5, 10, 1, 0, 0, 0, 0]
    }, {
        POSITION: [19, 12, 1, 0, 0, 0, 0],
        PROPERTIES: {
            MAX_CHILDREN: 4,
            SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
            TYPE: exports.trapminion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0
        }
    }, {
        POSITION: [3, 12, 1.5, 13, 0, 0, 0]
    }]
}, exports.buster = {
    PARENT: [exports.genericTank],
    LABEL: "Buster",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: .8 * base.SPEED,
        ACCELERATION: .5 * base.ACCEL,
        FOV: 1.1
    },
    GUNS: [{
        POSITION: [19, 6, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [4.5, 10, 1, 10.5, 0, 0, 0]
    }, {
        POSITION: [1, 12, 1, 15, 0, 0, 0],
        PROPERTIES: {
            MAX_CHILDREN: 4,
            SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
            TYPE: exports.minion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0
        }
    }, {
        POSITION: [3.5, 12, 1, 8, 0, 0, 0]
    }]
}, exports.swarmminion = {
    PARENT: [exports.minion],
    GUNS: [{
        POSITION: [7, 7.5, .6, 7, 4, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [7, 7.5, .6, 7, -4, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }]
}, exports.nester = {
    PARENT: [exports.genericTank],
    LABEL: "Nester",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: .8 * base.SPEED,
        ACCELERATION: .5 * base.ACCEL,
        FOV: 1.1
    },
    GUNS: [{
        POSITION: [19, 6, -1.3, 0, 0, 0, 0]
    }, {
        POSITION: [4.5, 10, 1, 10.5, 0, 0, 0]
    }, {
        POSITION: [1, 12, 1, 15, 0, 0, 0],
        PROPERTIES: {
            MAX_CHILDREN: 4,
            SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
            TYPE: exports.swarmminion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0
        }
    }, {
        POSITION: [3.5, 12, 1, 8, 0, 0, 0]
    }]
}, exports.trinity = {
    PARENT: [exports.genericTank],
    LABEL: "Trinity",
    STAT_NAMES: statnames.drone,
    FACING_TYPE: "autospin",
    SHAPE: 3,
    GUNS: [{
        POSITION: [4.5, 14, 1, 10.5, 0, 180, 0]
    }, {
        POSITION: [3, 16, 1, 15, 0, 180, 0],
        PROPERTIES: {
            MAX_CHILDREN: 4,
            SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
            TYPE: exports.minion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0
        }
    }, {
        POSITION: [3.5, 16, 1, 8, 0, 180, 0]
    }, {
        POSITION: [6, 16, 1.2, 8, 0, 60, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            MAX_CHILDREN: 4,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone
        }
    }, {
        POSITION: [5, 16, 1.2, 8, 0, -60, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: exports.sunchip,
            AUTOFIRE: !0,
            MAX_CHILDREN: 8,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }]
}, exports.twinspawn = {
    PARENT: [exports.genericTank],
    LABEL: "Twin Spawner",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: .8 * base.SPEED,
        ACCELERATION: .5 * base.ACCEL,
        FOV: 1.1
    },
    MAX_CHILDREN: 4,
    GUNS: [{
        POSITION: [1, 12, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
            TYPE: exports.twinminion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0
        }
    }, {
        POSITION: [4.5, 7, 1, 10.5, 5, 0, 0]
    }, {
        POSITION: [1, 9, 1, 15, 5, 0, 0]
    }, {
        POSITION: [11.5, 9, 1, 0, 5, 0, 0]
    }, {
        POSITION: [4.5, 7, 1, 10.5, -5, 0, 0]
    }, {
        POSITION: [1, 9, 1, 15, -5, 0, 0]
    }, {
        POSITION: [11.5, 9, 1, 0, -5, 0, 0]
    }]
}, exports.general = {
    PARENT: [exports.genericTank],
    LABEL: "General",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: .8 * base.SPEED,
        ACCELERATION: .5 * base.ACCEL,
        FOV: 1.1
    },
    GUNS: [{
        POSITION: [4.5, 10, 1, 10.5, 0, 180, 0]
    }, {
        POSITION: [1, 12, 1, 15, 0, 180, 0],
        PROPERTIES: {
            MAX_CHILDREN: 2,
            SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
            TYPE: [exports.minion, {
                INDEPENDENT: !0
            }],
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0
        }
    }, {
        POSITION: [3.5, 12, 1, 8, 0, 180, 0]
    }, {
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet,
            LABEL: "",
            STAT_CALCULATOR: 0,
            WAIT_TO_CYCLE: !1,
            AUTOFIRE: !1,
            SYNCS_SKILLS: !1,
            MAX_CHILDREN: 0,
            ALT_FIRE: !1,
            NEGATIVE_RECOIL: !1
        }
    }]
}, exports.autoSpawner = makeAuto(exports.lilfact), exports.factory = {
    PARENT: [exports.genericTank],
    LABEL: "Factory",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: .8 * base.SPEED,
        FOV: 1.1
    },
    MAX_CHILDREN: 6,
    GUNS: [{
        POSITION: [5, 11, 1, 10.5, 0, 0, 0]
    }, {
        POSITION: [2, 14, 1, 15.5, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: exports.minion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0
        }
    }, {
        POSITION: [4, 14, 1, 8, 0, 0, 0]
    }]
}, exports.impersonation = {
    PARENT: [exports.genericTank],
    LABEL: "Impersonation",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: .8 * base.SPEED,
        FOV: 1.1
    },
    MAX_CHILDREN: 8,
    GUNS: [{
        POSITION: [8, 13, 1, 9.5, 0, 0, 0]
    }, {
        POSITION: [2, 16, 1, 17.5, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory, g.power]),
            TYPE: exports.minion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0
        }
    }, {
        POSITION: [6, 16, 1, 7, 0, 0, 0]
    }]
}, exports.squareminion = {
    PARENT: [exports.minion],
    LABEL: "Worker Minion",
    SHAPE: 4,
    FACING_TYPE: "autospin",
    MAX_CHILDREN: 16,
    GUNS: [{
        POSITION: [5, 10, .6, 7, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.bees]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [5, 10, .6, 7, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.bees]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [5, 10, .6, 7, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.bees]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [5, 10, .6, 7, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.bees]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }]
}, exports.worker = {
    PARENT: [exports.genericTank],
    LABEL: "Worker",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: .8 * base.SPEED,
        FOV: 1.1
    },
    SHAPE: 4,
    MAX_CHILDREN: 6,
    GUNS: [{
        POSITION: [5, 11, 1, 10.5, 0, 0, 0]
    }, {
        POSITION: [2, 14, 1, 15.5, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: exports.squareminion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0
        }
    }, {
        POSITION: [4, 14, 1, 8, 0, 0, 0]
    }]
}, exports.businessman = {
    PARENT: [exports.genericTank],
    LABEL: "Businessman",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: .8 * base.SPEED,
        FOV: 1.1
    },
    SHAPE: -3,
    MAX_CHILDREN: 6,
    GUNS: [{
        POSITION: [5, 11, 1, 10.5, 0, 180, 0]
    }, {
        POSITION: [2, 14, 1, 15.5, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: exports.trapminion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0
        }
    }, {
        POSITION: [4, 14, 1, 8, 0, 180, 0]
    }]
}, exports.marketer = {
    PARENT: [exports.genericTank],
    LABEL: "Marketer",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: .8 * base.SPEED,
        FOV: 1.1
    },
    SHAPE: -4,
    MAX_CHILDREN: 4,
    GUNS: [{
        POSITION: [5, 11, 1, 10.5, 0, 0, 0]
    }, {
        POSITION: [2, 14, 1, 15.5, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: exports.buildminion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0
        }
    }, {
        POSITION: [4, 14, 1, 8, 0, 0, 0]
    }]
}, exports.upgrade = {
    PARENT: [exports.genericTank],
    LABEL: "Upgrade",
    DANGER: 6,
    STAT_NAMES: statnames.necro,
    BODY: {
        ACCELERATION: .7 * base.ACCEL,
        SPEED: .9 * base.SPEED,
        FOV: 1.1 * base.FOV
    },
    SHAPE: 4,
    MAX_CHILDREN: 6,
    GUNS: [{
        POSITION: [10, 10, 1.4, 3, 0, 0, 0]
    }, {
        POSITION: [4, 5, 1, 8, 0, 180, 0]
    }, {
        POSITION: [10, 5, 1.4, 3, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.sunchip]),
            TYPE: exports.evolvedsquare,
            STAT_CALCULATOR: gunCalcNames.necro,
            AUTOFIRE: !0,
            SKIN: 5,
            SYNCS_SKILLS: !0
        }
    }, {
        POSITION: [5, 6, 1, 8, 0, 180, 0]
    }]
}, exports.machine = {
    PARENT: [exports.genericTank],
    LABEL: "Machine Gun",
    GUNS: [{
        POSITION: [10, 10, 1.4, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
            TYPE: exports.bullet
        }
    }]
}, exports.submachine = {
    PARENT: [exports.genericTank],
    LABEL: "Sub-Machine Gun",
    DANGER: 6,
    GUNS: [{
        POSITION: [30, 2, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [30, 2, 1, 0, 2, 0, .2],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [30, 2, 1, 0, -2, 0, .4],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [30, 2, 1, 0, 0, 0, .6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [30, 2, 1, 0, 2, 0, .8],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [30, 2, 1, 0, -2, 0, 1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [12, 10, 1, 0, 0, 0, 0]
    }, {
        POSITION: [5, 10, 1, 20, 0, 0, 0]
    }]
}, exports.flamethrower = {
    PARENT: [exports.genericTank],
    LABEL: "Flamethrower",
    GUNS: [{
        POSITION: [13, 8, 1, 2, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil]),
            SKIN: 1,
            TYPE: exports.bullet
        }
    }]
}, exports.bucketofire = {
    PARENT: [exports.genericTank],
    LABEL: "Bucket o' Fire",
    GUNS: [{
        POSITION: [15, 6, -1.5, 0, 0, 180, 0]
    }, {
        POSITION: [13, 8, 1, 2, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil, g.doublerange]),
            SKIN: 1,
            TYPE: exports.homingbullet
        }
    }]
}, exports.flameturret = {
    PARENT: [exports.auto3gun],
    LABEL: "",
    GUNS: [{
        POSITION: [13, 8, 1, 2, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil]),
            SKIN: 1,
            TYPE: exports.bullet
        }
    }]
}, exports.sulfur1 = {
    PARENT: [exports.genericTank],
    LABEL: "Sulfur",
    LABELSWITCH: "SulfurA",
    SPECIAL_ABILITY_TOOLTIP: !0,
    GUNS: [{
        POSITION: [3, 8, 1.7, 15, 0, 0, 0]
    }, {
        POSITION: [18, 8, 1, 2, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil]),
            SKIN: 1,
            TYPE: exports.bullet
        }
    }, {
        POSITION: [13, 8, -1.7, 2, 0, 0, 0]
    }]
}, exports.spikebullet = {
    PARENT: [exports.bullet],
    TURRETS: [{
        POSITION: [20.5, 0, 0, 0, 360, 0],
        TYPE: exports.spikeBody
    }, {
        POSITION: [20.5, 0, 0, 120, 360, 0],
        TYPE: exports.spikeBody
    }, {
        POSITION: [20.5, 0, 0, 240, 360, 0],
        TYPE: exports.spikeBody
    }]
}, exports.sulfur2 = {
    PARENT: [exports.genericTank],
    LABEL: "Sulfur",
    LABELSWITCH: "SulfurB",
    GUNS: [{
        POSITION: [3, 8, 1.7, 15, 0, 0, 0]
    }, {
        POSITION: [18, 8, 1, 2, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, g.power, g.power]),
            SKIN: 1,
            AUTOFIRE: !0,
            TYPE: exports.spikebullet
        }
    }, {
        POSITION: [13, 8, -1.7, 2, 0, 0, 0]
    }]
}, exports.furnace = {
    PARENT: [exports.genericTank],
    LABEL: "Furnace",
    GUNS: [{
        POSITION: [14.5, 10, 1, 2, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil, g.blaster]),
            SKIN: 1,
            TYPE: exports.bullet
        }
    }]
}, exports.pyro = {
    PARENT: [exports.genericTank],
    LABEL: "Pyro",
    GUNS: [{
        POSITION: [16, 8, 1, 2, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil]),
            SKIN: 1,
            TYPE: exports.bullet
        }
    }, {
        POSITION: [13, 8, 1, 2, 0, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.halfrecoil, g.halfrecoil]),
            SKIN: 1,
            TYPE: exports.bullet
        }
    }]
}, exports.firehydrant = makeAuto(exports.flamethrower, "Fire Hydrant", {
    type: exports.auto3gun,
    size: 10
}), exports.firetruck = makeHybrid(exports.flamethrower, "Fire Truck"), exports.flareguard = {
    PARENT: [exports.genericTank],
    LABEL: "Flare Guard",
    BODY: {
        SPEED: 1.1 * base.SPEED
    },
    GUNS: [{
        POSITION: [13, 8, 1, 2, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil]),
            SKIN: 1,
            TYPE: exports.bullet
        }
    }, {
        POSITION: [16, 8, 1, 0, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet
        }
    }]
}, exports.lavapup = {
    PARENT: [exports.genericTank],
    LABEL: "Laba Pup",
    BODY: {
        SPEED: 1.1 * base.SPEED
    },
    GUNS: [{
        POSITION: [13, 8, 1, 2, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil]),
            SKIN: 1,
            TYPE: exports.bullet
        }
    }, {
        POSITION: [16, 8, 1, 0, 0, -150, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [16, 8, 1, 0, 0, 150, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet
        }
    }]
}, exports.wildfire = {
    PARENT: [exports.genericTank],
    LABEL: "Wildfire",
    GUNS: [{
        POSITION: [13, 8, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil]),
            SKIN: 1,
            TYPE: exports.bullet
        }
    }, {
        POSITION: [13, 8, 1, 0, -5.5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil]),
            SKIN: 1,
            TYPE: exports.bullet
        }
    }]
}, exports.firebullet = {
    PARENT: [exports.bullet],
    COLOR_OVERRIDE: 100,
    COLOR_TYPE: "Fire"
}, exports.hollowflare = {
    PARENT: [exports.genericTank],
    LABEL: "Hollow Flare",
    BODY: {
        SPEED: 1.7 * base.SPEED
    },
    SHAPE: 166,
    GUNS: [{
        POSITION: [13, 8, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil]),
            SKIN: 100,
            FILL: 110,
            TYPE: exports.bullet
        }
    }, {
        POSITION: [13, 4, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.norecoil, g.frozen2]),
            SKIN: 5,
            COLOR_TYPE: "Fire",
            COLOR_OVERRIDE: 100,
            AUTOFIRE: !0,
            TYPE: exports.firebullet
        }
    }, {
        POSITION: [13, 8, 1, 0, -5.5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil]),
            SKIN: 100,
            FILL: 110,
            TYPE: exports.bullet
        }
    }, {
        POSITION: [10, 5, 1, 2, 5.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil, g.fake]),
            SKIN: 100,
            FILL: 105,
            TYPE: exports.bullet
        }
    }, {
        POSITION: [10, 5, 1, 2, -5.5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil, g.fake]),
            SKIN: 100,
            FILL: 105,
            TYPE: exports.bullet
        }
    }, {
        POSITION: [7, 2, 1, 4, 5.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil, g.fake]),
            SKIN: 100,
            FILL: 100,
            TYPE: exports.bullet
        }
    }, {
        POSITION: [7, 2, 1, 4, -5.5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil, g.fake]),
            SKIN: 100,
            FILL: 100,
            TYPE: exports.bullet
        }
    }]
}, exports.incinerator = {
    PARENT: [exports.genericTank],
    LABEL: "Incinerator",
    GUNS: [{
        POSITION: [13, 8, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil]),
            SKIN: 1,
            TYPE: exports.bullet
        }
    }, {
        POSITION: [13, 8, 1, 0, -5.5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil]),
            SKIN: 1,
            TYPE: exports.bullet
        }
    }, {
        POSITION: [10, 8, 1, 0, 5.5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil]),
            SKIN: 1,
            TYPE: exports.bullet
        }
    }, {
        POSITION: [10, 8, 1, 0, -5.5, 0, 1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil]),
            SKIN: 1,
            TYPE: exports.bullet
        }
    }]
}, exports.firehose = {
    PARENT: [exports.genericTank],
    LABEL: "Firehose",
    GUNS: [{
        POSITION: [15, 6, -1.5, 0, 0, 180, 0]
    }, {
        POSITION: [13, 8, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil]),
            SKIN: 1,
            TYPE: exports.homingbullet
        }
    }, {
        POSITION: [13, 8, 1, 0, -5.5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil]),
            SKIN: 1,
            TYPE: exports.homingbullet
        }
    }]
}, exports.triplefiery = {
    PARENT: [exports.genericTank],
    LABEL: "Triple Fiery",
    DANGER: 6,
    BODY: {
        SPEED: .9 * base.SPEED
    },
    GUNS: [{
        POSITION: [17, 8, 1, 0, -2, -20, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil]),
            TYPE: exports.bullet,
            SKIN: 1
        }
    }, {
        POSITION: [17, 8, 1, 0, 2, 20, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil]),
            TYPE: exports.bullet,
            SKIN: 1
        }
    }, {
        POSITION: [20, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil]),
            TYPE: exports.bullet,
            SKIN: 1
        }
    }]
}, exports.flameplot = {
    PARENT: [exports.genericTank],
    LABEL: "Flameplot",
    DANGER: 7,
    BODY: {
        SPEED: .85 * base.SPEED
    },
    GUNS: [{
        POSITION: [14, 8, 1, 0, -3, -30, .667],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil]),
            TYPE: exports.bullet,
            SKIN: 1
        }
    }, {
        POSITION: [14, 8, 1, 0, 3, 30, .667],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil]),
            TYPE: exports.bullet,
            SKIN: 1
        }
    }, {
        POSITION: [17, 8, 1, 0, -2, -15, .333],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil]),
            TYPE: exports.bullet,
            SKIN: 1
        }
    }, {
        POSITION: [17, 8, 1, 0, 2, 15, .333],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil]),
            TYPE: exports.bullet,
            SKIN: 1
        }
    }, {
        POSITION: [20, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil]),
            TYPE: exports.bullet,
            SKIN: 1
        }
    }]
}, exports.brushfire = {
    PARENT: [exports.genericTank],
    LABEL: "Brush Fire",
    GUNS: [{
        POSITION: [13, 8, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil]),
            SKIN: 1,
            TYPE: exports.bullet
        }
    }, {
        POSITION: [13, 8, 1, 0, -5.5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil]),
            SKIN: 1,
            TYPE: exports.bullet
        }
    }, {
        POSITION: [13, 8, 1, 0, 5.5, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil]),
            SKIN: 1,
            TYPE: exports.bullet
        }
    }, {
        POSITION: [13, 8, 1, 0, -5.5, 180, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil]),
            SKIN: 1,
            TYPE: exports.bullet
        }
    }]
}, exports.inferno = {
    PARENT: [exports.genericTank],
    LABEL: "Inferno",
    GUNS: [{
        POSITION: [15, 4, 1.4, 0, 5, 0, 0]
    }, {
        POSITION: [25, 7, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.bitmorereload]),
            TYPE: exports.infernobullet,
            LABEL: "Inferno Flare",
            STAT_CALCULATOR: 0,
            WAIT_TO_CYCLE: !1,
            AUTOFIRE: !1,
            SYNCS_SKILLS: !1,
            MAX_CHILDREN: 0,
            ALT_FIRE: !1,
            NEGATIVE_RECOIL: !1
        }
    }]
}, exports.burnout = {
    PARENT: [exports.genericTank],
    LABEL: "Burnout",
    GUNS: [{
        POSITION: [15, 4, 1.4, 0, 5, 0, 0]
    }, {
        POSITION: [25, 7, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil, g.doublerange]),
            TYPE: exports.infernobullet,
            LABEL: "Inferno Flare",
            STAT_CALCULATOR: 0,
            WAIT_TO_CYCLE: !1,
            AUTOFIRE: !1,
            SYNCS_SKILLS: !1,
            MAX_CHILDREN: 0,
            ALT_FIRE: !1,
            NEGATIVE_RECOIL: !1,
            SKIN: 1
        }
    }]
}, exports.firemarshal = {
    PARENT: [exports.genericTank],
    LABEL: "Fire Marshal",
    GUNS: [{
        POSITION: [15, 4, 1.4, 0, 5, 0, 0]
    }, {
        POSITION: [15, 6, -1.5, 0, 0, 180, 0]
    }, {
        POSITION: [25, 7, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.bitmorereload]),
            TYPE: exports.infernoswarm,
            LABEL: "Guided Inferno Flare",
            STAT_CALCULATOR: 0,
            WAIT_TO_CYCLE: !1,
            AUTOFIRE: !1,
            SYNCS_SKILLS: !1,
            MAX_CHILDREN: 0,
            ALT_FIRE: !1,
            NEGATIVE_RECOIL: !1
        }
    }]
}, exports.charcoal = {
    PARENT: [exports.genericTank],
    LABEL: "Charcoal",
    GUNS: [{
        POSITION: [15, 4, 1.4, 0, 5, 0, 0]
    }, {
        POSITION: [25, 7, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.bitmorereload]),
            TYPE: exports.infernosplit,
            LABEL: "Charcoal Flare",
            STAT_CALCULATOR: 0,
            WAIT_TO_CYCLE: !1,
            AUTOFIRE: !1,
            SYNCS_SKILLS: !1,
            MAX_CHILDREN: 0,
            ALT_FIRE: !1,
            NEGATIVE_RECOIL: !1
        }
    }, {
        POSITION: [5, 7.5, -1.4, 25, 0, 0, 0]
    }]
}, exports.trapferno = {
    PARENT: [exports.genericTank],
    LABEL: "Trapferno",
    GUNS: [{
        POSITION: [15, 4, 1.4, 0, 5, 0, 0]
    }, {
        POSITION: [25, 7, 1, 0, 0, 0, 0]
    }, {
        POSITION: [4, 7, 1.5, 25, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.bitmorereload]),
            TYPE: exports.trapfernobullet,
            LABEL: "Trapferno Flare",
            STAT_CALCULATOR: 0,
            WAIT_TO_CYCLE: !1,
            AUTOFIRE: !1,
            SYNCS_SKILLS: !1,
            MAX_CHILDREN: 0,
            ALT_FIRE: !1,
            NEGATIVE_RECOIL: !1
        }
    }]
}, exports.catalyst = {
    PARENT: [exports.genericTank],
    LABEL: "Catalyst",
    GUNS: [{
        POSITION: [15, 4, 1.4, 0, 5, 0, 0]
    }, {
        POSITION: [25, 7, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.bitmorereload]),
            TYPE: exports.infernodrivebullet,
            LABEL: "Catalyst Flare",
            STAT_CALCULATOR: 0,
            WAIT_TO_CYCLE: !1,
            AUTOFIRE: !1,
            SYNCS_SKILLS: !1,
            MAX_CHILDREN: 0,
            ALT_FIRE: !1,
            NEGATIVE_RECOIL: !1
        }
    }],
    TURRETS: [{
        POSITION: [10, 0, 0, 0, 0, 1],
        TYPE: exports.drivesquare
    }]
}, exports.backfire = {
    PARENT: [exports.genericTank],
    LABEL: "Backfire",
    GUNS: [{
        POSITION: [13, 8, 1, 2, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil]),
            SKIN: 1,
            TYPE: exports.bullet
        }
    }, {
        POSITION: [15, 4, 1.4, 0, 5, 0, 0]
    }, {
        POSITION: [25, 7, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.bitmorereload]),
            TYPE: exports.infernobullet,
            LABEL: "Inferno Flare",
            STAT_CALCULATOR: 0,
            WAIT_TO_CYCLE: !1,
            AUTOFIRE: !1,
            SYNCS_SKILLS: !1,
            MAX_CHILDREN: 0,
            ALT_FIRE: !1,
            NEGATIVE_RECOIL: !1
        }
    }]
}, exports.hothead = {
    PARENT: [exports.genericTank],
    LABEL: "Hot Head",
    GUNS: [{
        POSITION: [12, 4, 1.4, 0, 5, 0, 0]
    }, {
        POSITION: [18, 7, 1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.bitmorereload, g.machspraysmall, g.lowpower, g.lowpower, g.halfrecoil, g.halfrecoil]),
            TYPE: exports.infernobullet,
            LABEL: "Inferno Flare",
            STAT_CALCULATOR: 0,
            WAIT_TO_CYCLE: !1,
            AUTOFIRE: !1,
            SYNCS_SKILLS: !1,
            MAX_CHILDREN: 0,
            ALT_FIRE: !1,
            NEGATIVE_RECOIL: !1
        }
    }]
}, exports.welder = {
    PARENT: [exports.genericTank],
    LABEL: "Welder",
    BODY: {
        ACCELERATION: .7 * base.ACCEL,
        FOV: 1.2 * base.FOV
    },
    GUNS: [{
        POSITION: [22, 4, 1.4, -3, 5, 0, 0]
    }, {
        POSITION: [30, 7, 1, 3, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.bitmorereload, g.sniper]),
            TYPE: exports.infernobullet,
            LABEL: "Inferno Flare",
            STAT_CALCULATOR: 0,
            WAIT_TO_CYCLE: !1,
            AUTOFIRE: !1,
            SYNCS_SKILLS: !1,
            MAX_CHILDREN: 0,
            ALT_FIRE: !1,
            NEGATIVE_RECOIL: !1
        }
    }, {
        POSITION: [16, 7, -2, 0, 0, 0, 0]
    }]
}, exports.twinferno = {
    PARENT: [exports.genericTank],
    LABEL: "Twinferno",
    GUNS: [{
        POSITION: [15, 4, 1.4, 0, 7, 0, 0]
    }, {
        POSITION: [25, 5, 1, 0, 3.6, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.bitmorereload]),
            TYPE: exports.infernobullet,
            LABEL: "Inferno Flare",
            STAT_CALCULATOR: 0,
            WAIT_TO_CYCLE: !1,
            AUTOFIRE: !1,
            SYNCS_SKILLS: !1,
            MAX_CHILDREN: 0,
            ALT_FIRE: !1,
            NEGATIVE_RECOIL: !1
        }
    }, {
        POSITION: [15, 4, 1.4, 0, -7, 0, 0]
    }, {
        POSITION: [25, 5, 1, 0, -3.6, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.bitmorereload]),
            TYPE: exports.infernobullet,
            LABEL: "Inferno Flare",
            STAT_CALCULATOR: 0,
            WAIT_TO_CYCLE: !1,
            AUTOFIRE: !1,
            SYNCS_SKILLS: !1,
            MAX_CHILDREN: 0,
            ALT_FIRE: !1,
            NEGATIVE_RECOIL: !1
        }
    }]
}, exports.combustion = {
    PARENT: [exports.genericTank],
    LABEL: "Combustion",
    GUNS: [{
        POSITION: [15, 4, 1.4, 0, 7, 0, 0]
    }, {
        POSITION: [25, 5, 1, 0, 3.6, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil, g.doublerange]),
            TYPE: exports.infernobullet,
            LABEL: "Inferno Flare",
            STAT_CALCULATOR: 0,
            WAIT_TO_CYCLE: !1,
            AUTOFIRE: !1,
            SYNCS_SKILLS: !1,
            MAX_CHILDREN: 0,
            ALT_FIRE: !1,
            NEGATIVE_RECOIL: !1,
            SKIN: 1
        }
    }, {
        POSITION: [15, 4, 1.4, 0, -7, 0, 0]
    }, {
        POSITION: [25, 5, 1, 0, -3.6, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil, g.doublerange]),
            TYPE: exports.infernobullet,
            LABEL: "Inferno Flare",
            STAT_CALCULATOR: 0,
            WAIT_TO_CYCLE: !1,
            AUTOFIRE: !1,
            SYNCS_SKILLS: !1,
            MAX_CHILDREN: 0,
            ALT_FIRE: !1,
            NEGATIVE_RECOIL: !1,
            SKIN: 1
        }
    }]
}, exports.nightmare = {
    PARENT: [exports.genericTank],
    LABEL: "Nightmare",
    GUNS: [{
        POSITION: [15, 6, -1.5, 0, 0, 180, 0]
    }, {
        POSITION: [15, 4, 1.4, 0, 7, 0, 0]
    }, {
        POSITION: [25, 5, 1, 0, 3.6, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil, g.doublerange]),
            TYPE: exports.infernoswarm,
            LABEL: "Inferno Flare",
            STAT_CALCULATOR: 0,
            WAIT_TO_CYCLE: !1,
            AUTOFIRE: !1,
            SYNCS_SKILLS: !1,
            MAX_CHILDREN: 0,
            ALT_FIRE: !1,
            NEGATIVE_RECOIL: !1,
            SKIN: 1
        }
    }, {
        POSITION: [15, 4, 1.4, 0, -7, 0, 0]
    }, {
        POSITION: [25, 5, 1, 0, -3.6, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil, g.doublerange]),
            TYPE: exports.infernoswarm,
            LABEL: "Inferno Flare",
            STAT_CALCULATOR: 0,
            WAIT_TO_CYCLE: !1,
            AUTOFIRE: !1,
            SYNCS_SKILLS: !1,
            MAX_CHILDREN: 0,
            ALT_FIRE: !1,
            NEGATIVE_RECOIL: !1,
            SKIN: 1
        }
    }]
}, exports.annoyance = {
    PARENT: [exports.genericTank],
    LABEL: "Annoyance",
    GUNS: [{
        POSITION: [15, 4, 1.4, 0, 7, 0, 0]
    }, {
        POSITION: [25, 5, 1, 0, 3.6, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil, g.doublerange]),
            TYPE: exports.infernobullet,
            LABEL: "Inferno Flare",
            STAT_CALCULATOR: 0,
            WAIT_TO_CYCLE: !1,
            AUTOFIRE: !1,
            SYNCS_SKILLS: !1,
            MAX_CHILDREN: 0,
            ALT_FIRE: !1,
            NEGATIVE_RECOIL: !1,
            SKIN: 1
        }
    }, {
        POSITION: [15, 4, 1.4, 0, -7, 0, 0]
    }, {
        POSITION: [25, 5, 1, 0, -3.6, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.bitmorereload]),
            TYPE: exports.infernobullet,
            LABEL: "Inferno Flare",
            STAT_CALCULATOR: 0,
            WAIT_TO_CYCLE: !1,
            AUTOFIRE: !1,
            SYNCS_SKILLS: !1,
            MAX_CHILDREN: 0,
            ALT_FIRE: !1,
            NEGATIVE_RECOIL: !1
        }
    }]
}, exports.twanferno = {
    PARENT: [exports.genericTank],
    LABEL: "Twanferno",
    GUNS: [{
        POSITION: [15, 4, 1.4, 0, 7, 0, 0]
    }, {
        POSITION: [25, 5, 1, 0, 3.6, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.bitmorereload]),
            TYPE: exports.trapfernobullet,
            LABEL: "Trapferno Flare",
            STAT_CALCULATOR: 0,
            WAIT_TO_CYCLE: !1,
            AUTOFIRE: !1,
            SYNCS_SKILLS: !1,
            MAX_CHILDREN: 0,
            ALT_FIRE: !1,
            NEGATIVE_RECOIL: !1
        }
    }, {
        POSITION: [15, 4, 1.4, 0, -7, 0, 0]
    }, {
        POSITION: [25, 5, 1, 0, -3.6, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.bitmorereload]),
            TYPE: exports.trapfernobullet,
            LABEL: "Trapferno Flare",
            STAT_CALCULATOR: 0,
            WAIT_TO_CYCLE: !1,
            AUTOFIRE: !1,
            SYNCS_SKILLS: !1,
            MAX_CHILDREN: 0,
            ALT_FIRE: !1,
            NEGATIVE_RECOIL: !1
        }
    }, {
        POSITION: [5, 12.5, 1.5, 23, 0, 0, 0]
    }]
}, exports.doubletwinferno = {
    PARENT: [exports.genericTank],
    LABEL: "Double Twinferno",
    GUNS: [{
        POSITION: [15, 4, 1.4, 0, 7, 0, 0]
    }, {
        POSITION: [25, 5, 1, 0, 3.6, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.bitmorereload]),
            TYPE: exports.infernobullet,
            LABEL: "Inferno Flare",
            STAT_CALCULATOR: 0,
            WAIT_TO_CYCLE: !1,
            AUTOFIRE: !1,
            SYNCS_SKILLS: !1,
            MAX_CHILDREN: 0,
            ALT_FIRE: !1,
            NEGATIVE_RECOIL: !1
        }
    }, {
        POSITION: [15, 4, 1.4, 0, -7, 0, 0]
    }, {
        POSITION: [25, 5, 1, 0, -3.6, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.bitmorereload]),
            TYPE: exports.infernobullet,
            LABEL: "Inferno Flare",
            STAT_CALCULATOR: 0,
            WAIT_TO_CYCLE: !1,
            AUTOFIRE: !1,
            SYNCS_SKILLS: !1,
            MAX_CHILDREN: 0,
            ALT_FIRE: !1,
            NEGATIVE_RECOIL: !1
        }
    }, {
        POSITION: [15, 4, 1.4, 0, 7, 180, 0]
    }, {
        POSITION: [25, 5, 1, 0, 3.6, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.bitmorereload]),
            TYPE: exports.infernobullet,
            LABEL: "Inferno Flare",
            STAT_CALCULATOR: 0,
            WAIT_TO_CYCLE: !1,
            AUTOFIRE: !1,
            SYNCS_SKILLS: !1,
            MAX_CHILDREN: 0,
            ALT_FIRE: !1,
            NEGATIVE_RECOIL: !1
        }
    }, {
        POSITION: [15, 4, 1.4, 0, -7, 180, 0]
    }, {
        POSITION: [25, 5, 1, 0, -3.6, 180, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.bitmorereload]),
            TYPE: exports.infernobullet,
            LABEL: "Inferno Flare",
            STAT_CALCULATOR: 0,
            WAIT_TO_CYCLE: !1,
            AUTOFIRE: !1,
            SYNCS_SKILLS: !1,
            MAX_CHILDREN: 0,
            ALT_FIRE: !1,
            NEGATIVE_RECOIL: !1
        }
    }]
}, exports.pitfire = {
    PARENT: [exports.genericTank],
    LABEL: "Pitfire",
    GUNS: [{
        POSITION: [16, 4, 1, 0, -1.6, -45, .5]
    }, {
        POSITION: [17.5, 4, 1, 0, -2.4, -30, 2 / 6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.bitmorereload]),
            TYPE: exports.infernobullet,
            LABEL: "Inferno Flare"
        }
    }, {
        POSITION: [19, 4, 1, 0, -2.4, -15, 2 / 6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.bitmorereload]),
            TYPE: exports.infernobullet,
            LABEL: "Inferno Flare"
        }
    }, {
        POSITION: [16, 4, 1, 0, 1.6, 45, .5]
    }, {
        POSITION: [17.5, 4, 1, 0, 2.4, 30, 2 / 6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.bitmorereload]),
            TYPE: exports.infernobullet,
            LABEL: "Inferno Flare"
        }
    }, {
        POSITION: [19, 4, 1, 0, 2.4, 15, 2 / 6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.bitmorereload]),
            TYPE: exports.infernobullet,
            LABEL: "Inferno Flare"
        }
    }, {
        POSITION: [13, 9, 1, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.bitmorereload]),
            TYPE: exports.infernobullet,
            LABEL: "Inferno Flare"
        }
    }]
}, exports.machineTurret = {
    PARENT: [exports.genericTank],
    LABEL: "Machine Gun",
    GUNS: [{
        POSITION: [12, 10, 1.4, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [12, 10, 1.4, 8, 0, 120, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [12, 10, 1.4, 8, 0, 240, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
            TYPE: exports.bullet
        }
    }]
}, exports.spray = {
    PARENT: [exports.genericTank],
    LABEL: "Sprayer",
    GUNS: [{
        POSITION: [23, 7, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lowpower, g.mach, g.halfrecoil, g.halfrecoil]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [12, 10, 1.4, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
            TYPE: exports.bullet
        }
    }]
}, exports.sprayTurret = {
    PARENT: [exports.genericTank],
    LABEL: "Sprayer",
    GUNS: [{
        POSITION: [23, 7, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [4, .25, 1, 1, 1, .75, 1, 1, 1, 1, 1, 2, 1]]),
            TYPE: exports.pbullet
        }
    }, {
        POSITION: [12, 10, 1.4, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [4, .25, 1, 1, 1, .75, 1, 1, 1, 1, 1, 2, 1]]),
            TYPE: exports.pbullet
        }
    }]
}, exports.micro = {
    PARENT: [exports.genericTank],
    LABEL: "Microgun",
    DANGER: 6,
    BODY: {
        FOV: 1.2
    },
    GUNS: [{
        POSITION: [20, 8, 1, 0, 0, 0, .333],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 0, .667],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }]
}, exports.microbrid = makeHybrid(exports.micro, "Microbrid"), exports.mini = {
    PARENT: [exports.genericTank],
    LABEL: "Minigun",
    DANGER: 6,
    BODY: {
        FOV: 1.2
    },
    GUNS: [{
        POSITION: [22, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [20, 8, 1, 0, 0, 0, .333],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 0, .667],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
            TYPE: exports.bullet
        }
    }]
}, exports.syntaxnull = {
    PARENT: [exports.genericTank],
    LABEL: "Syntax{[null]}",
    DANGER: 6,
    BODY: {
        FOV: 1.2
    },
    GUNS: [{
        POSITION: [23, 6, 1.5, 0, 0, 0, 0]
    }, {
        POSITION: [22, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.lowpower]),
            TYPE: exports.launcherMissile
        }
    }, {
        POSITION: [20, 8, -1.5, 0, 0, 0, .333],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm
        }
    }, {
        POSITION: [18, 8, 1.3, 0, 0, 0, .667],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.lowpower]),
            TYPE: exports.bullet
        }
    }]
}, exports.beacon = {
    PARENT: [exports.genericTank],
    LABEL: "Beacon",
    DANGER: 6,
    BODY: {
        FOV: 1.2
    },
    GUNS: [{
        POSITION: [25, 6, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [23, 6, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [21, 6, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [13, 11, 1, 0, 0, 0, 0]
    }]
}, exports.trimini = {
    PARENT: [exports.genericTank],
    LABEL: "",
    DANGER: 6,
    BODY: {
        FOV: 1.2
    },
    GUNS: [{
        POSITION: [18, 6, 1, 0, 5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.halfrecoil]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [16, 6, 1, 0, 5, 0, .333],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.halfrecoil]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [14, 6, 1, 0, 5, 0, .667],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.halfrecoil]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 6, 1, 0, -5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.halfrecoil]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [16, 6, 1, 0, -5, 0, .333],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.halfrecoil]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [14, 6, 1, 0, -5, 0, .667],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.halfrecoil]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [20, 6, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.halfrecoil]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 6, 1, 0, 0, 0, .333],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.halfrecoil]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [16, 6, 1, 0, 0, 0, .667],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.halfrecoil]),
            TYPE: exports.bullet
        }
    }]
}, exports.stream = {
    PARENT: [exports.genericTank],
    LABEL: "Streamliner",
    DANGER: 7,
    BODY: {
        FOV: 1.3
    },
    GUNS: [{
        POSITION: [25, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [23, 8, 1, 0, 0, 0, .2],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [21, 8, 1, 0, 0, 0, .4],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [19, 8, 1, 0, 0, 0, .6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [17, 8, 1, 0, 0, 0, .8],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.bullet
        }
    }]
}, exports.syntaxund = {
    PARENT: [exports.genericTank],
    LABEL: "Syntax{[undefined]}",
    DANGER: 7,
    BODY: {
        FOV: 1.3
    },
    GUNS: [{
        POSITION: [23, 8, -1.7, 0, 0, 0, .2]
    }, {
        POSITION: [27, 6, 1.4, 0, 0, 0, 0]
    }, {
        POSITION: [25, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.halfrecoil, g.lowpower]),
            TYPE: exports.launcherMissile
        }
    }, {
        POSITION: [23, 8, 1, 0, 0, 0, .2],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.halfrecoil, g.lowpower]),
            TYPE: exports.minihive
        }
    }, {
        POSITION: [21, 6, -1.3, 0, 0, 0, .4],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm
        }
    }, {
        POSITION: [19, 8, 1, 0, 0, 0, .6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.lowpower]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [17, 6, 1.3, 0, 0, 0, .8],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone]),
            TYPE: exports.drone,
            MAX_CHILDREN: 2
        }
    }]
}, exports.spunce = {
    PARENT: [exports.genericTank],
    LABEL: "Spunce",
    DANGER: 6,
    BODY: {
        FOV: 1.2
    },
    GUNS: [{
        POSITION: [27, 6, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [25, 6, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [23, 6, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [21, 6, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [13, 11, 1, 0, 0, 0, 0]
    }]
}, exports.hybridmini = makeHybrid(exports.mini, "Cropduster"), exports.minitrap = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: "Barricade",
    STAT_NAMES: statnames.trap,
    BODY: {
        FOV: 1.15
    },
    GUNS: [{
        POSITION: [24, 8, 1, 0, 0, 0, 0]
    }, {
        POSITION: [4, 8, 1.3, 22, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }, {
        POSITION: [4, 8, 1.3, 18, 0, 0, .333],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }, {
        POSITION: [4, 8, 1.3, 14, 0, 0, .667],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }]
}, exports.miniblock2 = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: "Blockade",
    STAT_NAMES: statnames.trap,
    BODY: {
        FOV: 1.15
    },
    GUNS: [{
        POSITION: [24, 10, 1, 0, 0, 0, 0]
    }, {
        POSITION: [3, 10, 1.2, 22, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.mini, g.lessreload, g.lessreload, g.lessreload, g.lessreload]),
            TYPE: exports.block,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }, {
        POSITION: [3, 10, 1.2, 18, 0, 0, .333],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.mini, g.lessreload, g.lessreload, g.lessreload, g.lessreload]),
            TYPE: exports.block,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }, {
        POSITION: [3, 10, 1.2, 14, 0, 0, .667],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.mini, g.lessreload, g.lessreload, g.lessreload, g.lessreload]),
            TYPE: exports.block,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }],
    TURRETS: [{
        POSITION: [14, 0, 0, 0, 0, 1],
        TYPE: [exports.genericTank, {
            COLOR: 6
        }]
    }]
}, exports.pound = {
    PARENT: [exports.genericTank],
    DANGER: 5,
    BODY: {
        ACCELERATION: .8 * base.ACCEL
    },
    LABEL: "Pounder",
    GUNS: [{
        POSITION: [18, 12, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
            TYPE: exports.bullet
        }
    }]
}, exports.magician = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    BODY: {
        ACCELERATION: .8 * base.ACCEL
    },
    LABEL: "Magician",
    GUNS: [{
        POSITION: [18, 12, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [12, 8, 1, 0, 0, 0, 0]
    }, {
        POSITION: [3.5, 8, 1.3, 12, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap
        }
    }]
}, exports.pistol = {
    PARENT: [exports.genericTank],
    DANGER: 5,
    BODY: {
        ACCELERATION: .8 * base.ACCEL
    },
    LABEL: "Pistol",
    GUNS: [{
        POSITION: [18, 12, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.halfrecoil]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 15, 1, 15, 0, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.halfrecoil]),
            TYPE: exports.bullet
        }
    }]
}, exports.onslaught = {
    PARENT: [exports.genericTank],
    DANGER: 8,
    BODY: {
        ACCELERATION: .8 * base.ACCEL
    },
    LABEL: "Onslaught",
    GUNS: [{
        POSITION: [13, 8, 1, 2, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.halfrecoil, g.halfrecoil]),
            SKIN: 1,
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 12, 1, 0, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
            TYPE: exports.bullet
        }
    }]
}, exports.eaglet = {
    PARENT: [exports.genericTank],
    LABEL: "Eaglet",
    DANGER: 7,
    BODY: {
        ACCELERATION: .8 * base.ACCEL,
        FOV: 1.2 * base.FOV
    },
    ALT_FIRE_TOOLTIP: !0,
    GUNS: [{
        POSITION: [20, 12, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
            TYPE: exports.bullet,
            ALT_FIRE: !0
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 180, .6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster
        }
    }]
}, exports.eagle = {
    PARENT: [exports.genericTank],
    LABEL: "Eagle",
    DANGER: 7,
    BODY: {
        ACCELERATION: .8 * base.ACCEL,
        FOV: 1.2 * base.FOV
    },
    ALT_FIRE_TOOLTIP: !0,
    GUNS: [{
        POSITION: [20, 12, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
            TYPE: exports.bullet,
            ALT_FIRE: !0
        }
    }, {
        POSITION: [16, 8, 1, 0, 0, 150, .1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster
        }
    }, {
        POSITION: [16, 8, 1, 0, 0, 210, .1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 180, .6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster
        }
    }]
}, exports.destroy = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    BODY: {
        ACCELERATION: .75 * base.ACCEL
    },
    LABEL: "Destroyer",
    GUNS: [{
        POSITION: [19, 14, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
            TYPE: exports.bullet
        }
    }]
}, exports.pioneer = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    BODY: {
        ACCELERATION: .75 * base.ACCEL
    },
    LABEL: "Pioneer",
    GUNS: [{
        POSITION: [19, 14, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [7, 7.5, .6, 7, 4, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [7, 7.5, .6, 7, -4, 180, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }]
}, exports.anni = {
    PARENT: [exports.genericTank],
    BODY: {
        ACCELERATION: .75 * base.ACCEL
    },
    LABEL: "Annihilator",
    DANGER: 7,
    GUNS: [{
        POSITION: [20.5, 19, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
            TYPE: exports.bullet
        }
    }]
}, exports.bucket = {
    PARENT: [exports.genericTank],
    BODY: {
        ACCELERATION: .75 * base.ACCEL
    },
    LABEL: "Bucket",
    DANGER: 7,
    GUNS: [{
        POSITION: [20.5, 19, 1, 0, 0, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18.5, 19, 1, 0, 0, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [16.5, 19, 1, 0, 0, 0, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
            TYPE: exports.bullet
        }
    }]
}, exports.stabalizer = {
    PARENT: [exports.genericTank],
    BODY: {
        ACCELERATION: .75 * base.ACCEL
    },
    LABEL: "Stabalizer",
    DANGER: 7,
    GUNS: [{
        POSITION: [3, 13, 1.5, 14.5, 0, 0, 0]
    }, {
        POSITION: [3, 13, 1.5, 11.5, 0, 0, 0]
    }, {
        POSITION: [19, 7, 1.5, 0, 0, 0, 0]
    }, {
        POSITION: [17.5, 13, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, g.stabalizer]),
            TYPE: exports.stabalizerbullet
        }
    }, {
        POSITION: [15, 6, -1.5, 0, 0, 180, 0]
    }]
}, exports.panni = {
    PARENT: [exports.auto3gun],
    BODY: {
        ACCELERATION: .75 * base.ACCEL
    },
    LABEL: "",
    DANGER: 7,
    GUNS: [{
        POSITION: [20.5, 19, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
            TYPE: exports.pbullet
        }
    }]
}, exports.devast = {
    PARENT: [exports.genericTank],
    BODY: {
        ACCELERATION: .75 * base.ACCEL
    },
    LABEL: "Devastator",
    DANGER: 7,
    GUNS: [{
        POSITION: [20.5, 20, 1.1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, g.devast]),
            TYPE: exports.bullet
        }
    }]
}, exports.crusher = {
    PARENT: [exports.genericTank],
    DANGER: 5,
    BODY: {
        ACCELERATION: .8 * base.ACCEL
    },
    LABEL: "Crusher",
    GUNS: [{
        POSITION: [18, 12, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.norecoil]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [14, 12, -1.3, 0, 0, 0, 0]
    }]
}, exports.trojan = makeHybrid(exports.crusher, "Trojan"), exports.tyrant = {
    PARENT: [exports.genericTank],
    DANGER: 5,
    BODY: {
        ACCELERATION: .8 * base.ACCEL
    },
    LABEL: "Tyrant",
    GUNS: [{
        POSITION: [18, 12, 1, 3, 11, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.norecoil]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [10, 12, -1.3, 3, 11, 0, 0]
    }, {
        POSITION: [18, 12, 1, 3, -11, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.norecoil]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [10, 12, -1.3, 3, -11, 0, 0]
    }, {
        POSITION: [11.75, 7, 1, 0, 0, -90, 0],
        PROPERTIES: {
            SKIN: 9
        }
    }, {
        POSITION: [11.75, 7, 1, 0, 0, 90, 0],
        PROPERTIES: {
            SKIN: 8
        }
    }]
}, exports.cannon = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    BODY: {
        ACCELERATION: .75 * base.ACCEL
    },
    LABEL: "Cannon",
    GUNS: [{
        POSITION: [19, 14, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.norecoil]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [14, 14, -1.4, 0, 0, 0, 0]
    }]
}, exports.titan = {
    PARENT: [exports.genericTank],
    DANGER: 5,
    BODY: {
        ACCELERATION: .8 * base.ACCEL
    },
    LABEL: "Titan",
    GUNS: [{
        POSITION: [18, 14, 1, 3, 11, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.norecoil]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [10, 14, -1.3, 3, 11, 0, 0]
    }, {
        POSITION: [18, 14, 1, 3, -11, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.norecoil]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [10, 14, -1.3, 3, -11, 0, 0]
    }, {
        POSITION: [12.5, 7, 1, 0, 0, -90, 0],
        PROPERTIES: {
            SKIN: 9
        }
    }, {
        POSITION: [12.5, 7, 1, 0, 0, 90, 0],
        PROPERTIES: {
            SKIN: 8
        }
    }]
}, exports.ravager = makeHybrid(exports.cannon, "Ravager"), exports.gcannon = {
    PARENT: [exports.genericTank],
    BODY: {
        ACCELERATION: .75 * base.ACCEL
    },
    LABEL: "Giant Cannon",
    DANGER: 7,
    GUNS: [{
        POSITION: [20.5, 19, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, g.norecoil]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [14, 19, -1.075, 0, 0, 0, 0]
    }]
}, exports.hiveshooter = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: "Swarmer",
    GUNS: [{
        POSITION: [14, 14, -1.2, 5, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
            TYPE: exports.hive
        }
    }, {
        POSITION: [15, 12, 1, 5, 0, 0, 0]
    }]
}, exports.miniswarm = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: "Mini Swarmer",
    GUNS: [{
        POSITION: [12, 12, -1.2, 5, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
            TYPE: exports.minihive
        }
    }, {
        POSITION: [13, 10, 1, 5, 0, 0, 0]
    }]
},
  exports.droneminihiveshooter = {
                PARENT: [exports.genericTank],
                DANGER: 6,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.75,
                    SPEED: base.speed * 0.8,
                  FOV: 1.1
                },
                LABEL: 'Decompitiser',
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                     POSITION: [  11,    8,     1.2,    8,      0,      0,      0,   ], }, {
                       POSITION: [  11,    13,     -1.2,    5,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.hive]),
                            TYPE: exports.dhive,
                        }, }, {
                    POSITION: [  12,    11,      1,      5,      0,      0,      0,   ], 
                         
           
                        }, 
                    
                ],
            };
  exports.hornet = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: "Hornet",
    GUNS: [{
        POSITION: [18, 12, -1.2, 5, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.halfrecoil]),
            TYPE: exports.mininest
        }
    }, {
        POSITION: [21, 5.5, -1.2, 5, 0, 0, 0]
    }]
}, exports.hybrid = makeHybrid(exports.destroy, "Hybrid"), exports.multishot = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: "Ruminator",
    BODY: {
        ACCELERATION: .7 * base.ACCEL
    },
    GUNS: [{
        POSITION: [20, 12, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [8, 12, -1.4, 4, 0, 0, 0]
    }]
}, exports.autohiveshooter = makeHybrid(exports.hiveshooter, "Hivebrid"), exports.shotgun2 = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: "Shotgun",
    BODY: {
        ACCELERATION: .7 * base.ACCEL
    },
    GUNS: [{
        POSITION: [4, 3, 1, 11, -3, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [4, 3, 1, 11, 3, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [4, 4, 1, 13, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.casing
        }
    }, {
        POSITION: [1, 4, 1, 12, -1, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.casing
        }
    }, {
        POSITION: [1, 4, 1, 11, 1, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.casing
        }
    }, {
        POSITION: [1, 3, 1, 13, -1, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [1, 3, 1, 13, 1, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [1, 2, 1, 13, 2, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.casing
        }
    }, {
        POSITION: [1, 2, 1, 13, -2, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.casing
        }
    }, {
        POSITION: [15, 14, 1, 6, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
            TYPE: exports.casing
        }
    }, {
        POSITION: [8, 14, -1.3, 4, 0, 0, 0]
    }]
}, exports.scattershot = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: "Scattershot",
    BODY: {
        ACCELERATION: .7 * base.ACCEL
    },
    GUNS: [{
        POSITION: [4, 4, 1, 11, -3, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.pound, g.shotgun]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [4, 4, 1, 11, 3, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.pound, g.shotgun]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [4, 5, 1, 13, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.pound, g.shotgun]),
            TYPE: exports.casing
        }
    }, {
        POSITION: [1, 5, 1, 12, -1, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.pound, g.shotgun]),
            TYPE: exports.casing
        }
    }, {
        POSITION: [1, 4, 1, 11, 1, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.pound, g.shotgun]),
            TYPE: exports.casing
        }
    }, {
        POSITION: [1, 4, 1, 13, -1, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.pound, g.shotgun]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [1, 4, 1, 13, 1, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.pound, g.shotgun]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [1, 3, 1, 13, 2, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.pound, g.shotgun]),
            TYPE: exports.casing
        }
    }, {
        POSITION: [1, 3, 1, 13, -2, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.pound, g.shotgun]),
            TYPE: exports.casing
        }
    }, {
        POSITION: [15, 15, 1, 6, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.pound, g.shotgun, g.fake]),
            TYPE: exports.casing
        }
    }, {
        POSITION: [8, 15, -1.2, 4, 0, 0, 0]
    }]
}, exports.oceantide = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    SHAPE: [
        [0, 0]
    ],
    LABEL: "Ocean Tide",
    COLOR_OVERRIDE: 10,
    BODY: {
        ACCELERATION: .7 * base.ACCEL
    },
    GUNS: [{
        POSITION: [4, 3, 1, 11, -3, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.bullet,
            SKIN: 5
        }
    }, {
        POSITION: [4, 3, 1, 11, 3, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.bullet,
            SKIN: 5
        }
    }, {
        POSITION: [4, 4, 1, 13, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.casing,
            SKIN: 5
        }
    }, {
        POSITION: [1, 4, 1, 12, -1, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.casing,
            SKIN: 5
        }
    }, {
        POSITION: [1, 4, 1, 11, 1, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.casing,
            SKIN: 5
        }
    }, {
        POSITION: [1, 3, 1, 13, -1, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.bullet,
            SKIN: 5
        }
    }, {
        POSITION: [1, 3, 1, 13, 1, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.bullet,
            SKIN: 5
        }
    }, {
        POSITION: [1, 2, 1, 13, 2, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.casing,
            SKIN: 5
        }
    }, {
        POSITION: [1, 2, 1, 13, -2, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.casing,
            SKIN: 5
        }
    }, {
        POSITION: [15, 14, 1, 6, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
            TYPE: exports.casing,
            SKIN: 5
        }
    }, {
        POSITION: [8, 14, -1.3, 4, 0, 0, 0],
        SKIN: 5
    }]
}, exports.broad = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: "Broad",
    BODY: {
        ACCELERATION: .7 * base.ACCEL
    },
    GUNS: [{
        POSITION: [4, 3, 1, 11, -3, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.homingbullet
        }
    }, {
        POSITION: [4, 3, 1, 11, 3, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.homingbullet
        }
    }, {
        POSITION: [4, 4, 1, 13, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.homingbullet
        }
    }, {
        POSITION: [1, 4, 1, 12, -1, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.homingbullet
        }
    }, {
        POSITION: [1, 4, 1, 11, 1, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.homingbullet
        }
    }, {
        POSITION: [1, 3, 1, 13, -1, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.homingbullet
        }
    }, {
        POSITION: [1, 3, 1, 13, 1, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.homingbullet
        }
    }, {
        POSITION: [1, 2, 1, 13, 2, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.homingbullet
        }
    }, {
        POSITION: [1, 2, 1, 13, -2, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.homingbullet
        }
    }, {
        POSITION: [15, 14, 1.4, 6, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
            TYPE: exports.homingbullet
        }
    }, {
        POSITION: [8, 14, -1.3, 4, 0, 0, 0]
    }],
    TURRETS: [{
        POSITION: [14, 0, 0, 0, 0, 1],
        TYPE: [exports.genericTank, {
            COLOR: 13
        }]
    }]
}, exports.builder = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: "Builder",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: .8 * base.SPEED,
        FOV: 1.15 * base.FOV
    },
    GUNS: [{
        POSITION: [18, 12, 1, 0, 0, 0, 0]
    }, {
        POSITION: [2, 12, 1.1, 18, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block]),
            TYPE: exports.block
        }
    }]
}, exports.pavement = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: "Pavement",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: .8 * base.SPEED,
        FOV: 1.15 * base.FOV
    },
    GUNS: [{
        POSITION: [18, 12, 1, 0, 0, 0, 0]
    }, {
        POSITION: [2, 12, -1.1, 12, 0, 0, 0]
    }, {
        POSITION: [2, 12, 1.1, 18, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block]),
            TYPE: exports.pavement_block
        }
    }]
}, exports.joker1 = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: "Joker",
    LABELSWITCH: "JokerA",
    SPECIAL_ABILITY_TOOLTIP: !0,
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: .8 * base.SPEED,
        FOV: 1.15 * base.FOV
    },
    GUNS: [{
        POSITION: [18, 18, 1, 0, 0, 0, 0]
    }, {
        POSITION: [2, 18, 1.1, 18, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct]),
            TYPE: exports.block
        }
    }]
}, exports.joker5 = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: "Joker",
    LABELSWITCH: "JokerB",
    STAT_NAMES: statnames.generic,
    GUNS: [{
        POSITION: [13, 8, 1, 2, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.halfrecoil, g.halfrecoil]),
            SKIN: 1,
            TYPE: exports.bullet
        }
    }]
}, exports.engineer = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: "Engineer",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: .75 * base.SPEED,
        FOV: 1.15 * base.FOV
    },
    GUNS: [{
        POSITION: [13, 10, -1.4, 0, 0, 180, 0]
    }, {
        POSITION: [18, 12, 1, 0, 0, 0, 0]
    }, {
        POSITION: [2, 12, 1.1, 18, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]),
            TYPE: exports.pillbox,
            SYNC_SKILLS: !0
        }
    }],
    TURRETS: [{
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: exports.drivesquare
    }]
}, exports.officer = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: "Officer",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: .75 * base.SPEED,
        FOV: 1.15 * base.FOV
    },
    GUNS: [{
        POSITION: [13, 10, -1.4, 0, 0, 180, 0]
    }, {
        POSITION: [18, 12, 1, 0, 0, 0, 0]
    }, {
        POSITION: [2, 12, -1.1, 18, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]),
            TYPE: exports.pillbox2,
            SYNC_SKILLS: !0
        }
    }],
    TURRETS: [{
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: exports.drivesquare
    }]
}, exports.workshop = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: "Workshop",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: .75 * base.SPEED,
        FOV: 1.15 * base.FOV
    },
    GUNS: [{
        POSITION: [13, 10, -1.4, 0, 0, 180, 0]
    }, {
        POSITION: [18, 18, 1, 0, 0, 0, 0]
    }, {
        POSITION: [2, 18, 1.1, 18, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct, [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]),
            TYPE: exports.pillbox,
            SYNC_SKILLS: !0
        }
    }],
    TURRETS: [{
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: exports.drivesquare
    }]
}, exports.construct = {
    PARENT: [exports.genericTank],
    LABEL: "Constructor",
    STAT_NAMES: statnames.trap,
    DANGER: 7,
    BODY: {
        ACCELERATION: .5 * base.ACCEL,
        SPEED: .7 * base.SPEED,
        FOV: 1.15 * base.FOV
    },
    GUNS: [{
        POSITION: [18, 18, 1, 0, 0, 0, 0]
    }, {
        POSITION: [2, 18, 1.2, 18, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct]),
            TYPE: exports.block
        }
    }]
}, exports.autobuilder = makeAuto(exports.builder), exports.conq = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: "Conqueror",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: .8 * base.SPEED
    },
    GUNS: [{
        POSITION: [21, 14, 1, 0, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 14, 1, 0, 0, 0, 0]
    }, {
        POSITION: [2, 14, 1.1, 18, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block]),
            TYPE: exports.block
        }
    }]
}, exports.juggrnt = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: "Juggernaut",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: .8 * base.SPEED
    },
    GUNS: [{
        POSITION: [20.5, 19.5, 1, 0, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 18, 1, 0, 0, 0, 0]
    }, {
        POSITION: [2, 18, 1.1, 18, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct]),
            TYPE: exports.block
        }
    }]
}, exports.bentboomer = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: "Bent Boomer",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: .8 * base.SPEED,
        FOV: 1.15 * base.FOV
    },
    GUNS: [{
        POSITION: [8, 10, 1, 8, -2, -35, 0]
    }, {
        POSITION: [8, 10, 1, 8, 2, 35, 0]
    }, {
        POSITION: [2, 10, 1.3, 16, -2, -35, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
            TYPE: exports.boomerang
        }
    }, {
        POSITION: [2, 10, 1.3, 16, 2, 35, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
            TYPE: exports.boomerang
        }
    }]
}, exports.boomer = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: "Boomer",
    STAT_NAMES: statnames.trap,
    FACING_TYPE: "locksFacing",
    BODY: {
        SPEED: .8 * base.SPEED,
        FOV: 1.15 * base.FOV
    },
    GUNS: [{
        POSITION: [5, 10, 1, 14, 0, 0, 0]
    }, {
        POSITION: [6, 10, -1.5, 7, 0, 0, 0]
    }, {
        POSITION: [2, 10, 1.3, 18, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang]),
            TYPE: exports.boomerang
        }
    }]
}, exports.megaboomer = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: "Mega Boomer",
    STAT_NAMES: statnames.trap,
    FACING_TYPE: "locksFacing",
    BODY: {
        SPEED: .8 * base.SPEED,
        FOV: 1.15 * base.FOV
    },
    GUNS: [{
        POSITION: [5, 13, 1, 14, 0, 0, 0]
    }, {
        POSITION: [8, 13, -1.3, 5, 0, 0, 0]
    }, {
        POSITION: [2, 13, 1.3, 18, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang, g.construct]),
            TYPE: exports.boomerang
        }
    }]
}, exports.quadtrapper = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: "Quadtrapper",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: .8 * base.SPEED,
        FOV: 1.15 * base.FOV
    },
    GUNS: [{
        POSITION: [14, 6, 1, 0, 0, 45, 0]
    }, {
        POSITION: [2, 6, 1.1, 14, 0, 45, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, [1, 1, 1, 1, .6, .6, .6, 1, 1, 1, 1, 1, 1]]),
            TYPE: exports.block
        }
    }, {
        POSITION: [14, 6, 1, 0, 0, 135, 0]
    }, {
        POSITION: [2, 6, 1.1, 14, 0, 135, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, [1, 1, 1, 1, .6, .6, .6, 1, 1, 1, 1, 1, 1]]),
            TYPE: exports.block
        }
    }, {
        POSITION: [14, 6, 1, 0, 0, 225, 0]
    }, {
        POSITION: [2, 6, 1.1, 14, 0, 225, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, [1, 1, 1, 1, .6, .6, .6, 1, 1, 1, 1, 1, 1]]),
            TYPE: exports.block
        }
    }, {
        POSITION: [14, 6, 1, 0, 0, 315, 0]
    }, {
        POSITION: [2, 6, 1.1, 14, 0, 315, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, [1, 1, 1, 1, .6, .6, .6, 1, 1, 1, 1, 1, 1]]),
            TYPE: exports.block
        }
    }]
}, exports.artillery = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: "Artillery",
    GUNS: [{
        POSITION: [17, 3, 1, 0, -6, -7, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
            TYPE: exports.bullet,
            LABEL: "Secondary"
        }
    }, {
        POSITION: [17, 3, 1, 0, 6, 7, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
            TYPE: exports.bullet,
            LABEL: "Secondary"
        }
    }, {
        POSITION: [19, 12, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
            TYPE: exports.bullet,
            LABEL: "Heavy"
        }
    }]
}, exports.artillery2 = {
    PARENT: [exports.auto3gun],
    LABEL: "",
    BODY: {
        FOV: 1
    },
    GUNS: [{
        POSITION: [17, 3, 1, 0, -6, -7, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
            TYPE: exports.bullet,
            LABEL: "Secondary"
        }
    }, {
        POSITION: [17, 3, 1, 0, 6, 7, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
            TYPE: exports.bullet,
            LABEL: "Secondary"
        }
    }, {
        POSITION: [19, 12, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
            TYPE: exports.bullet,
            LABEL: "Heavy"
        }
    }]
}, exports.driller = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: "Driller",
    GUNS: [{
        POSITION: [18, 4, 1, 0, -3, -8, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.morereload]),
            TYPE: exports.bullet,
            LABEL: "Secondary"
        }
    }, {
        POSITION: [17, 4, 1, 0, 3, 8, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.morereload]),
            TYPE: exports.bullet,
            LABEL: "Secondary"
        }
    }, {
        POSITION: [19, 12, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.morereload]),
            TYPE: exports.bullet,
            LABEL: "Heavy"
        }
    }, {
        POSITION: [6, 13, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.morereload]),
            TYPE: exports.bullet,
            LABEL: "Secondary"
        }
    }]
}, exports.cannonry = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: "Cannonry",
    GUNS: [{
        POSITION: [17, 3, 1, 0, -6, -7, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
            TYPE: exports.bullet,
            LABEL: "Secondary"
        }
    }, {
        POSITION: [17, 3, 1, 0, 6, 7, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
            TYPE: exports.bullet,
            LABEL: "Secondary"
        }
    }, {
        POSITION: [19, 12, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
            TYPE: exports.bullet,
            LABEL: "Heavy"
        }
    }, {
        POSITION: [23, 7, 1, 0, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lowpower, g.mach, g.morerecoil]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [12, 10, 1.4, 8, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
            TYPE: exports.bullet
        }
    }]
}, exports.mortar = {
    PARENT: [exports.genericTank],
    LABEL: "Mortar",
    DANGER: 7,
    GUNS: [{
        POSITION: [13, 3, 1, 0, -8, -7, .6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
            TYPE: exports.bullet,
            LABEL: "Secondary"
        }
    }, {
        POSITION: [13, 3, 1, 0, 8, 7, .8],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
            TYPE: exports.bullet,
            LABEL: "Secondary"
        }
    }, {
        POSITION: [17, 3, 1, 0, -6, -7, .2],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
            TYPE: exports.bullet,
            LABEL: "Secondary"
        }
    }, {
        POSITION: [17, 3, 1, 0, 6, 7, .4],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
            TYPE: exports.bullet,
            LABEL: "Secondary"
        }
    }, {
        POSITION: [19, 12, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [2, 2, 1, 1, 1.25, 1.1, 1.25, 1, 1, 1, 1.5, 1, 1.15], g.arty]),
            TYPE: exports.bullet,
            LABEL: "Heavy"
        }
    }]
}, exports.launcher = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: 1.15 * base.FOV
    },
    LABEL: "Launcher",
    DANGER: 7,
    GUNS: [{
        POSITION: [10, 11.5, -.5, 9, 0, 0, 0]
    }, {
        POSITION: [17, 12, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, [1, 1, 1, .8, 1, 1, 1, .4, .4, 1, 10, 1, 1]]),
            TYPE: exports.launcherMissile,
            STAT_CALCULATOR: gunCalcNames.sustained
        }
    }]
}, exports.firecracker = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: 1.15 * base.FOV
    },
    LABEL: "Ruster",
    DANGER: 7,
    GUNS: [{
        POSITION: [15, 7, -1.5, 0, 0, 180, 0]
    }, {
        POSITION: [10, 11.5, -.5, 9, 0, 0, 0]
    }, {
        POSITION: [17, 12, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, [1, 1, 1, .8, 1, 1, 1, .4, .4, 1, 10, 1, 1]]),
            TYPE: exports.fc_bullet
        }
    }]
}, exports.autoLauncher = makeAuto(exports.launcher), exports.skimmer = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: 1.15 * base.FOV
    },
    LABEL: "Skimmer",
    DANGER: 7,
    GUNS: [{
        POSITION: [10, 14, -.5, 9, 0, 0, 0]
    }, {
        POSITION: [17, 15, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, [1, 1, 1, .8, .8, .8, .8, .4, .4, 1, 10, 1, 1]]),
            TYPE: exports.missile,
            STAT_CALCULATOR: gunCalcNames.sustained
        }
    }]
}, exports.spinner = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: 1.1 * base.FOV
    },
    LABEL: "Twister",
    DANGER: 7,
    GUNS: [{
        POSITION: [10, 13, -.5, 9, 0, 0, 0]
    }, {
        POSITION: [17, 14, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, [1, .4, 1, .8, .8, .8, .8, .4, .4, 1, 10, 1, 1]]),
            TYPE: exports.spinmissile,
            STAT_CALCULATOR: gunCalcNames.sustained
        }
    }]
}, exports.pathogen = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: 1.1 * base.FOV
    },
    LABEL: "Pathogen",
    DANGER: 7,
    GUNS: [{
        POSITION: [10, 13, -.5, 9, 0, 0, 0]
    }, {
        POSITION: [17, 14, 1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.lessreload, [1, .4, 1, .8, .8, .8, .8, .4, .4, 1, 10, 1, 1]]),
            TYPE: exports.spinmissile2,
            STAT_CALCULATOR: gunCalcNames.sustained
        }
    }, {
        POSITION: [15, 10, .1, 0, 0, 0, 0],
        PROPERTIES: {
            COLOR: 12
        }
    }]
}, exports.rocketeer = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: 1.15 * base.FOV
    },
    LABEL: "Rocketeer",
    DANGER: 7,
    GUNS: [{
        POSITION: [10, 12.5, -.7, 10, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, [1.3, 1.5, 1, 1, 2, 1.15, .8, 1, 1, 1.25, 1.25, 1, 1]]),
            TYPE: exports.rocketmissile,
            STAT_CALCULATOR: gunCalcNames.sustained
        }
    }, {
        POSITION: [17, 18, .65, 0, 0, 0, 0]
    }]
}, exports.spread = {
    PARENT: [exports.genericTank],
    LABEL: "Spreadshot",
    DANGER: 7,
    GUNS: [{
        POSITION: [13, 4, 1, 0, -.8, -75, 5 / 6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: "Spread"
        }
    }, {
        POSITION: [14.5, 4, 1, 0, -1, -60, 4 / 6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: "Spread"
        }
    }, {
        POSITION: [16, 4, 1, 0, -1.6, -45, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: "Spread"
        }
    }, {
        POSITION: [17.5, 4, 1, 0, -2.4, -30, 2 / 6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: "Spread"
        }
    }, {
        POSITION: [19, 4, 1, 0, -3, -15, 1 / 6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: "Spread"
        }
    }, {
        POSITION: [13, 4, 1, 0, .8, 75, 5 / 6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: "Spread"
        }
    }, {
        POSITION: [14.5, 4, 1, 0, 1, 60, 4 / 6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: "Spread"
        }
    }, {
        POSITION: [16, 4, 1, 0, 1.6, 45, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: "Spread"
        }
    }, {
        POSITION: [17.5, 4, 1, 0, 2.4, 30, 2 / 6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: "Spread"
        }
    }, {
        POSITION: [19, 4, 1, 0, 3, 15, 1 / 6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: "Spread"
        }
    }, {
        POSITION: [13, 9, 1, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.spreadmain, g.spread]),
            TYPE: exports.bullet,
            LABEL: "Pounder"
        }
    }]
}, exports.flank = {
    PARENT: [exports.genericTank],
    LABEL: "Flank Guard",
    BODY: {
        SPEED: 1.1 * base.SPEED
    },
    GUNS: [{
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [16, 8, 1, 0, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet
        }
    }]
}, exports.accelerator = {
    PARENT: [exports.genericTank],
    LABEL: "Accelerator",
    GUNS: [{
        POSITION: [19, 8, 1, 0, -2, -20, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [19, 8, 1, 0, 2, 20, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [22, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 120, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 240, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet
        }
    }]
}, exports.hexa = {
    PARENT: [exports.genericTank],
    LABEL: "Hexa Tank",
    DANGER: 6,
    GUNS: [{
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 120, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 240, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 60, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 180, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 300, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
            TYPE: exports.bullet
        }
    }]
}, exports.flankz = {
    PARENT: [exports.genericTank],
    LABEL: "Flank-Z",
    DANGER: 6,
    FACING_TYPE: "autospin",
    GUNS: [{
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 120, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 240, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet
        }
    }],
    TURRETS: [{
        POSITION: [11, 8, 0, 60, 190, 0],
        TYPE: exports.auto3gun
    }, {
        POSITION: [11, 8, 0, 180, 190, 0],
        TYPE: exports.auto3gun
    }, {
        POSITION: [11, 8, 0, 300, 190, 0],
        TYPE: exports.auto3gun
    }]
}, exports.octo = {
    PARENT: [exports.genericTank],
    LABEL: "Octo Tank",
    DANGER: 7,
    GUNS: [{
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 45, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 135, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 225, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 315, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet
        }
    }]
}, exports.trapper = {
    PARENT: [exports.genericTank],
    LABEL: "Trapper",
    GUNS: [{
        POSITION: [14, 8, 1, 0, 0, 0, 0]
    }, {
        POSITION: [4, 8, 1.5, 14, 0, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }]
}, exports.entrizor = {
    PARENT: [exports.genericTank],
    LABEL: "Entrizor",
    GUNS: [{
        POSITION: [14, 8, 1, 0, 0, 0, 0]
    }, {
        POSITION: [2, 8, -1.5, 12, 0, 0, 0]
    }, {
        POSITION: [2, 8, 1.5, 16, 0, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.entrizor_trap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }]
}, exports.gutter = {
    PARENT: [exports.genericTank],
    LABEL: "Gutter",
    GUNS: [{
        POSITION: [14, 8, 1.7, 0, 0, 0, 0]
    }, {
        POSITION: [4, 8, 1.5, 14, 0, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.mach_trap]),
            TYPE: exports.trap,
            SKIN: 5,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }, {
        POSITION: [4, 13.5, 1.5, 14, 0, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.mach_trap, g.fake]),
            TYPE: exports.invisabullet,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }]
}, exports.nightshift = {
    PARENT: [exports.genericTank],
    LABEL: "Nightshift",
    GUNS: [{
        POSITION: [21, 10.5, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil, g.trap2, g.fake]),
            TYPE: exports.invisabullet,
            SKIN: 1
        }
    }, {
        POSITION: [4, 10.5, 1.5, 14, 0, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil, g.trap2, g.fake]),
            TYPE: exports.invisabullet,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }, {
        POSITION: [4, 8, 1.5, 14, 0, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.bitweak, g.halfrecoil, g.halfrecoil, g.trap2]),
            TYPE: exports.trap,
            SKIN: 5,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }]
}, exports.trive = {
    PARENT: [exports.genericTank],
    LABEL: "Trive",
    GUNS: [{
        POSITION: [15, 6, -1.5, 0, 0, 180, 0]
    }, {
        POSITION: [14, 8, 1, 0, 0, 0, 0]
    }, {
        POSITION: [4, 8, 1.5, 14, 0, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trapswarm,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }]
}, exports.testimony = {
    PARENT: [exports.genericTank],
    LABEL: "Testimony",
    GUNS: [{
        POSITION: [15, 6, -1.5, 0, 0, 180, 0]
    }, {
        POSITION: [14, 8, 1.7, 0, 0, 0, 0]
    }, {
        POSITION: [4, 8, 1.5, 14, 0, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.mach_trap]),
            TYPE: exports.trapswarm,
            SKIN: 5,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }, {
        POSITION: [4, 13.5, 1.5, 14, 0, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.mach_trap, g.fake]),
            TYPE: exports.invisabullet,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }]
}, exports.megatrapper = {
    PARENT: [exports.genericTank],
    LABEL: "Mega Trapper",
    GUNS: [{
        POSITION: [13, 13, 1, 0, 0, 0, 0]
    }, {
        POSITION: [4, 13, 1.7, 13, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, [1.75, 2, 1, 1, 1.5, 1.5, 1.5, 1, 1, 1, 10, 1, 1]]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }]
}, exports.terratrapper = {
    PARENT: [exports.genericTank],
    LABEL: "Terra Trapper",
    GUNS: [{
        POSITION: [13, 16, 1.5, 0, 0, 0, 0]
    }, {
        POSITION: [4, 21, 1.7, 13, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, [1.75, 2, 1, 1, 1.5, 1.5, 1.5, 1, 1, 1, 10, 1, 1]]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }]
}, exports.autoTrapper = makeAuto(exports.trapper), exports.tritrapper = {
    PARENT: [exports.genericTank],
    LABEL: "Tri-Trapper",
    GUNS: [{
        POSITION: [14, 8, 1, 0, 0, 0, 0]
    }, {
        POSITION: [4, 8, 1.5, 14, 0, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }, {
        POSITION: [14, 8, 1, 0, 0, 120, 0]
    }, {
        POSITION: [4, 8, 1.5, 14, 0, 120, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }, {
        POSITION: [14, 8, 1, 0, 0, 240, 0]
    }, {
        POSITION: [4, 8, 1.5, 14, 0, 240, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }]
}, exports.autotritrap = makeAuto(exports.tritrapper), exports.heptatrap = (() => {
    let T = 45,
        e = 1 / 8;
    return {
        PARENT: [exports.genericTank],
        LABEL: "Octo-Trapper",
        DANGER: 7,
        BODY: {
            SPEED: .8 * base.SPEED
        },
        STAT_NAMES: statnames.trap,
        HAS_NO_RECOIL: !0,
        GUNS: [{
            POSITION: [14, 8, 1, 0, 0, 0, 0]
        }, {
            POSITION: [4, 8, 1.5, 14, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap
            }
        }, {
            POSITION: [14, 8, 1, 0, 0, T, .5]
        }, {
            POSITION: [4, 8, 1.5, 14, 0, T, .5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap
            }
        }, {
            POSITION: [14, 8, 1, 0, 0, 90, 1 * e]
        }, {
            POSITION: [4, 8, 1.5, 14, 0, 90, 1 * e],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap
            }
        }, {
            POSITION: [14, 8, 1, 0, 0, 135, 5 * e]
        }, {
            POSITION: [4, 8, 1.5, 14, 0, 135, 5 * e],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap
            }
        }, {
            POSITION: [14, 8, 1, 0, 0, 180, .25]
        }, {
            POSITION: [4, 8, 1.5, 14, 0, 180, .25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap
            }
        }, {
            POSITION: [14, 8, 1, 0, 0, 225, .75]
        }, {
            POSITION: [4, 8, 1.5, 14, 0, 225, .75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap
            }
        }, {
            POSITION: [14, 8, 1, 0, 0, 270, 3 * e]
        }, {
            POSITION: [4, 8, 1.5, 14, 0, 270, 3 * e],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap
            }
        }, {
            POSITION: [14, 8, 1, 0, 0, 315, 7 * e]
        }, {
            POSITION: [4, 8, 1.5, 14, 0, 315, 7 * e],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap
            }
        }]
    }
})(), exports.hexatrap = makeAuto({
    PARENT: [exports.genericTank],
    LABEL: "Hexa-Trapper",
    DANGER: 7,
    BODY: {
        SPEED: .8 * base.SPEED
    },
    STAT_NAMES: statnames.trap,
    HAS_NO_RECOIL: !0,
    GUNS: [{
        POSITION: [14, 8, 1, 0, 0, 0, 0]
    }, {
        POSITION: [3, 8, 1.5, 14, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }, {
        POSITION: [14, 8, 1, 0, 0, 60, .5]
    }, {
        POSITION: [3, 8, 1.5, 14, 0, 60, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }, {
        POSITION: [14, 8, 1, 0, 0, 120, 0]
    }, {
        POSITION: [3, 8, 1.5, 14, 0, 120, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }, {
        POSITION: [14, 8, 1, 0, 0, 180, .5]
    }, {
        POSITION: [3, 8, 1.5, 14, 0, 180, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }, {
        POSITION: [14, 8, 1, 0, 0, 240, 0]
    }, {
        POSITION: [3, 8, 1.5, 14, 0, 240, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }, {
        POSITION: [14, 8, 1, 0, 0, 300, .5]
    }, {
        POSITION: [3, 8, 1.5, 14, 0, 300, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }]
}, "Hexa-Trapper"), exports.tri = {
    PARENT: [exports.genericTank],
    LABEL: "Tri-Angle",
    BODY: {
        HEALTH: .8 * base.HEALTH,
        SHIELD: .8 * base.SHIELD,
        DENSITY: .6 * base.DENSITY
    },
    DANGER: 6,
    GUNS: [{
        POSITION: [16, 8, 1, 0, 0, 150, .1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster
        }
    }, {
        POSITION: [16, 8, 1, 0, 0, 210, .1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster
        }
    }]
}, exports.palopian = {
    PARENT: [exports.genericTank],
    LABEL: "Palopian",
    BODY: {
        HEALTH: .8 * base.HEALTH,
        SHIELD: .8 * base.SHIELD,
        DENSITY: .6 * base.DENSITY
    },
    DANGER: 6,
    GUNS: [{
        POSITION: [6, 10, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: [exports.drone, {
                INDEPENDENT: !0
            }],
            AUTOFIRE: !0,
            MAX_CHILDREN: 2,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [6, 10, 1.2, 8, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: [exports.drone, {
                INDEPENDENT: !0
            }],
            AUTOFIRE: !0,
            MAX_CHILDREN: 2,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.muchmorerecoil]),
            TYPE: exports.bullet,
            LABEL: "Front"
        }
    }, {
        POSITION: [16, 8, 1, 0, 0, 150, .1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster
        }
    }, {
        POSITION: [16, 8, 1, 0, 0, 210, .1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster
        }
    }]
}, exports.booster = {
    PARENT: [exports.genericTank],
    LABEL: "Booster",
    BODY: {
        HEALTH: .6 * base.HEALTH,
        SHIELD: .6 * base.SHIELD,
        DENSITY: .2 * base.DENSITY
    },
    DANGER: 7,
    GUNS: [{
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.muchmorerecoil]),
            TYPE: exports.bullet,
            LABEL: "Front"
        }
    }, {
        POSITION: [13, 8, 1, 0, -1, 135, .6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster
        }
    }, {
        POSITION: [13, 8, 1, 0, 1, 225, .6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster
        }
    }, {
        POSITION: [16, 8, 1, 0, 0, 145, .1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster
        }
    }, {
        POSITION: [16, 8, 1, 0, 0, 215, .1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster
        }
    }]
}, exports.fighter = {
    PARENT: [exports.genericTank],
    LABEL: "Fighter",
    BODY: {
        DENSITY: .6 * base.DENSITY
    },
    DANGER: 7,
    GUNS: [{
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
            TYPE: exports.bullet,
            LABEL: "Front"
        }
    }, {
        POSITION: [16, 8, 1, 0, -1, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
            TYPE: exports.bullet,
            LABEL: "Side"
        }
    }, {
        POSITION: [16, 8, 1, 0, 1, -90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
            TYPE: exports.bullet,
            LABEL: "Side"
        }
    }, {
        POSITION: [16, 8, 1, 0, 0, 150, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster
        }
    }, {
        POSITION: [16, 8, 1, 0, 0, 210, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster
        }
    }]
}, exports.hotrod = {
    PARENT: [exports.genericTank],
    LABEL: "Hot Rod",
    BODY: {
        DENSITY: .6 * base.DENSITY
    },
    DANGER: 7,
    GUNS: [{
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
            TYPE: exports.bullet,
            LABEL: "Front"
        }
    }, {
        POSITION: [13, 8, 1, 2, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.halfrecoil, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: "Side",
            SKIN: 1
        }
    }, {
        POSITION: [13, 8, 1, 2, 0, -90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.machspraysmall, g.bitweak, g.halfrecoil, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: "Side",
            SKIN: 1
        }
    }, {
        POSITION: [16, 8, 1, 0, 0, 150, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster
        }
    }, {
        POSITION: [16, 8, 1, 0, 0, 210, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster
        }
    }]
}, exports.twighter = {
    PARENT: [exports.genericTank],
    LABEL: "Twighter",
    BODY: {
        DENSITY: .6 * base.DENSITY
    },
    DANGER: 7,
    GUNS: [{
        POSITION: [18, 8, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.weak]),
            TYPE: exports.bullet,
            LABEL: "Front"
        }
    }, {
        POSITION: [18, 8, 1, 0, -5.5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.weak]),
            TYPE: exports.bullet,
            LABEL: "Front"
        }
    }, {
        POSITION: [16, 8, 1, 0, -1, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
            TYPE: exports.bullet,
            LABEL: "Side"
        }
    }, {
        POSITION: [16, 8, 1, 0, 1, -90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
            TYPE: exports.bullet,
            LABEL: "Side"
        }
    }, {
        POSITION: [16, 8, 1, 0, 0, 150, .1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster
        }
    }, {
        POSITION: [16, 8, 1, 0, 0, 210, .1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster
        }
    }]
}, exports.raptor = {
    PARENT: [exports.genericTank],
    LABEL: "Raptor",
    BODY: {
        DENSITY: .6 * base.DENSITY
    },
    DANGER: 7,
    GUNS: [{
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
            TYPE: exports.bullet,
            LABEL: "Front"
        }
    }, {
        POSITION: [16, 8, 1, 0, -1, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
            TYPE: exports.bullet,
            LABEL: "Side"
        }
    }, {
        POSITION: [16, 8, 1, 0, 1, -90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
            TYPE: exports.bullet,
            LABEL: "Side"
        }
    }, {
        POSITION: [16, 8, 1, 0, 0, 150, .1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster
        }
    }, {
        POSITION: [16, 8, 1, 0, 0, 210, .1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 180, .6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster
        }
    }]
}, exports.brutalizer = {
    PARENT: [exports.genericTank],
    LABEL: "Surfer",
    BODY: {
        DENSITY: .6 * base.DENSITY
    },
    DANGER: 7,
    GUNS: [{
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
            TYPE: exports.bullet,
            LABEL: "Front"
        }
    }, {
        POSITION: [7, 7.5, .6, 7, -1, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.weak]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [7, 7.5, .6, 7, 1, -90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.weak]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [16, 8, 1, 0, 0, 150, .1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster
        }
    }, {
        POSITION: [16, 8, 1, 0, 0, 210, .1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster
        }
    }]
}, exports.jet = {
    PARENT: [exports.genericTank],
    LABEL: "Jet",
    BODY: {
        DENSITY: .6 * base.DENSITY
    },
    DANGER: 7,
    GUNS: [{
        POSITION: [20, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
            TYPE: exports.bullet,
            LABEL: "Front"
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 130, .1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
            TYPE: exports.bullet,
            LABEL: "Wing"
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 230, .1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
            TYPE: exports.bullet,
            LABEL: "Wing"
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }]
}, exports.torpedo = {
    PARENT: [exports.genericTank],
    LABEL: "Torpedo",
    BODY: {
        DENSITY: .6 * base.DENSITY
    },
    DANGER: 7,
    GUNS: [{
        POSITION: [20, 8, 1, 0, 5.5, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [20, 8, 1, 0, -5.5, 180, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [20, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
            TYPE: exports.bullet,
            LABEL: "Front"
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 130, .1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
            TYPE: exports.bullet,
            LABEL: "Wing"
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 230, .1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
            TYPE: exports.bullet,
            LABEL: "Wing"
        }
    }]
}, exports.warplane = {
    PARENT: [exports.genericTank],
    LABEL: "Warplane",
    BODY: {
        DENSITY: .6 * base.DENSITY
    },
    DANGER: 7,
    GUNS: [{
        POSITION: [20, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
            TYPE: exports.bullet,
            LABEL: "Front"
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 130, .1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
            TYPE: exports.bullet,
            LABEL: "Wing"
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 230, .1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
            TYPE: exports.bullet,
            LABEL: "Wing"
        }
    }, {
        POSITION: [12, 10, 1.4, 8, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
            TYPE: exports.bullet
        }
    }]
}, exports.bomber = {
    PARENT: [exports.genericTank],
    LABEL: "Bomber",
    BODY: {
        DENSITY: .6 * base.DENSITY
    },
    DANGER: 7,
    GUNS: [{
        POSITION: [20, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
            TYPE: exports.bullet,
            LABEL: "Front"
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 130, .1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
            TYPE: exports.bullet,
            LABEL: "Wing"
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 230, .1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
            TYPE: exports.bullet,
            LABEL: "Wing"
        }
    }, {
        POSITION: [14, 8, 1, 0, 0, 180, 0]
    }, {
        POSITION: [4, 8, 1.5, 14, 0, 180, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.morerecoil]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }]
}, exports.autotri = makeAuto(exports.tri), exports.autotri.BODY = {
    SPEED: base.SPEED
}, exports.falcon = {
    PARENT: [exports.genericTank],
    LABEL: "Falcon",
    DANGER: 7,
    BODY: {
        ACCELERATION: .8 * base.ACCEL,
        FOV: 1.2 * base.FOV
    },
    ALT_FIRE_TOOLTIP: !0,
    GUNS: [{
        POSITION: [27, 8.5, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.lessreload]),
            TYPE: exports.bullet,
            LABEL: "Assassin",
            ALT_FIRE: !0
        }
    }, {
        POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
    }, {
        POSITION: [16, 8, 1, 0, 0, 150, .1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster
        }
    }, {
        POSITION: [16, 8, 1, 0, 0, 210, .1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 180, .6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster
        }
    }]
}, exports.auto = {
    PARENT: [exports.genericTank],
    LABEL: "Auto",
    DANGER: 6,
    BODY: {
        HEALTH: .8 * base.HEALTH
    },
    TURRETS: [{
        POSITION: [11, 0, 0, 0, 190, 1],
        TYPE: exports.autoTurret
    }]
}, exports.auto3 = {
    PARENT: [exports.genericTank],
    LABEL: "Auto-3",
    DANGER: 6,
    FACING_TYPE: "autospin",
    TURRETS: [{
        POSITION: [11, 8, 0, 0, 190, 0],
        TYPE: exports.auto3gun
    }, {
        POSITION: [11, 8, 0, 120, 190, 0],
        TYPE: exports.auto3gun
    }, {
        POSITION: [11, 8, 0, 240, 190, 0],
        TYPE: exports.auto3gun
    }]
}, exports.ladder = {
    PARENT: [exports.genericTank],
    LABEL: "Ladder",
    TURRET_MASTER: !0,
    GUNS: [{
        POSITION: [24, 7, 1, 0, 0, 0, 0]
    }],
    TURRETS: [{
        POSITION: [9, -16, 0, 180, 999, 1],
        TYPE: exports.autoTurretSegment
    }, {
        POSITION: [9, -26, 0, 180, 999, 1],
        TYPE: exports.autoTurretSegment
    }, {
        POSITION: [9, -36, 0, 180, 999, 1],
        TYPE: exports.autoTurretSegment
    }, {
        POSITION: [9, -46, 0, 180, 999, 1],
        TYPE: exports.autoTurretSegment
    }]
}, exports.abutment = {
    PARENT: [exports.genericTank],
    LABEL: "Abutment",
    TURRET_MASTER: !0,
    GUNS: [{
        POSITION: [24, 7, 1, 0, 0, 0, 0]
    }],
    TURRETS: [{
        POSITION: [9, -16, 0, 180, 999, 1],
        TYPE: [exports.heavy3gun, {
            TURRET_COLOR: "segment"
        }]
    }, {
        POSITION: [9, -26, 0, 180, 999, 1],
        TYPE: [exports.heavy3gun, {
            TURRET_COLOR: "segment"
        }]
    }, {
        POSITION: [9, -36, 0, 180, 999, 1],
        TYPE: [exports.heavy3gun, {
            TURRET_COLOR: "segment"
        }]
    }, {
        POSITION: [9, -46, 0, 180, 999, 1],
        TYPE: [exports.heavy3gun, {
            TURRET_COLOR: "segment"
        }]
    }]
}, exports.auto32gun = {
    PARENT: [exports.auto3gun],
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
}, exports.auto32 = {
    PARENT: [exports.auto3],
    TURRET_MASTER: !0,
    CONTROLLERS: ["slowSpin", "nearestDifferentMaster"],
    TURRET_COLOR: "segment",
    SYNC_SKILLS: !0,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    TURRETS: [{
        POSITION: [11, 8, 0, 0, 190, 0],
        TYPE: [exports.auto32gun, {
            INDEPENDENT: !1,
            SYNC_SKILLS: !0
        }]
    }, {
        POSITION: [11, 8, 0, 120, 190, 0],
        TYPE: [exports.auto32gun, {
            INDEPENDENT: !1,
            SYNC_SKILLS: !0
        }]
    }, {
        POSITION: [11, 8, 0, 240, 190, 0],
        TYPE: [exports.auto32gun, {
            INDEPENDENT: !1,
            SYNC_SKILLS: !0
        }]
    }]
}, exports.blender = {
    PARENT: [exports.genericTank],
    LABEL: "Blender",
    TURRET_MASTER: !0,
    GUNS: [{
        POSITION: [12, 7, 1, 0, 0, 0, 0]
    }],
    TURRETS: [{
        POSITION: [9, 16, 0, 0, 360, 1],
        TYPE: exports.auto32
    }, {
        POSITION: [9, 26, 0, 0, 360, 1],
        TYPE: exports.auto32
    }]
}, exports.jengatower = {
    PARENT: [exports.genericTank],
    LABEL: "Jenga Tower",
    TURRET_MASTER: !0,
    GUNS: [{
        POSITION: [24, 7, 1, 0, 0, 0, 0]
    }],
    TURRETS: [{
        POSITION: [9, -16, 0, 180, 999, 1],
        TYPE: exports.driveTurretSegment
    }, {
        POSITION: [9, -26, 0, 180, 999, 1],
        TYPE: exports.driveTurretSegment
    }, {
        POSITION: [9, -36, 0, 180, 999, 1],
        TYPE: exports.driveTurretSegment
    }, {
        POSITION: [9, -46, 0, 180, 999, 1],
        TYPE: exports.driveTurretSegment
    }]
}, exports.watchmen = {
    PARENT: [exports.genericTank],
    LABEL: "Watchmen",
    TURRET_MASTER: !0,
    GUNS: [{
        POSITION: [30, 7, 1, 0, 0, 0, 0]
    }],
    TURRETS: [{
        POSITION: [9, -16, 0, 180, 999, 1],
        TYPE: exports.autoTurretSegment
    }, {
        POSITION: [9, -26, 0, 180, 999, 1],
        TYPE: exports.autoTurretSegment
    }, {
        POSITION: [9, -36, 0, 180, 999, 1],
        TYPE: exports.autoTurretSegment
    }, {
        POSITION: [9, -46, 0, 180, 999, 1],
        TYPE: exports.autoTurretSegment
    }, {
        POSITION: [9, -56, 0, 180, 999, 1],
        TYPE: exports.autoTurretSegment
    }]
}, exports.escalator = {
    PARENT: [exports.genericTank],
    LABEL: "Escalator",
    TURRET_MASTER: !0,
    GUNS: [{
        POSITION: [12, 7, 1, 0, 0, 90, 0]
    }, {
        POSITION: [12, 7, 1, 0, 0, 270, 0]
    }],
    TURRETS: [{
        POSITION: [9, -16, 0, 90, 999, 1],
        TYPE: exports.autoTurretSegment
    }, {
        POSITION: [9, -26, 0, 90, 999, 1],
        TYPE: exports.autoTurretSegment
    }, {
        POSITION: [9, -16, 0, 270, 999, 1],
        TYPE: exports.autoTurretSegment
    }, {
        POSITION: [9, -26, 0, 270, 999, 1],
        TYPE: exports.autoTurretSegment
    }]
}, exports.grapple = {
    PARENT: [exports.genericTank],
    LABEL: "Grapple",
    GUNS: [{
        POSITION: [24, 7, 1, 0, 0, 0, 0]
    }],
    TURRETS: [{
        POSITION: [9, -16, 0, 180, 999, 1],
        TYPE: exports.swarmTurretSegment
    }, {
        POSITION: [9, -26, 0, 180, 999, 1],
        TYPE: exports.swarmTurretSegment
    }, {
        POSITION: [9, -36, 0, 180, 999, 1],
        TYPE: exports.swarmTurretSegment
    }, {
        POSITION: [9, -46, 0, 180, 999, 1],
        TYPE: exports.swarmTurretSegment
    }]
}, exports.razor = {
    PARENT: [exports.genericTank],
    LABEL: "Razor",
    GUNS: [{
        POSITION: [24, 7, 1, 0, 0, 0, 0]
    }],
    TURRETS: [{
        POSITION: [9, -16, 0, 180, 999, 1],
        TYPE: exports.aAutoTurretSegment
    }, {
        POSITION: [9, -26, 0, 180, 999, 1],
        TYPE: exports.aAutoTurretSegment
    }, {
        POSITION: [9, -36, 0, 180, 999, 1],
        TYPE: exports.aAutoTurretSegment
    }, {
        POSITION: [9, -46, 0, 180, 999, 1],
        TYPE: exports.aAutoTurretSegment
    }]
}, exports.miniext = {
    PARENT: [exports.genericTank],
    LABEL: "Mini Extirpator",
    DANGER: 8,
    COLOR: 2,
    FACING_TYPE: "autospin",
    BODY: {
        SPEED: 1 * base.SPEED,
        FOV: 1.4 * base.FOV,
        DAMAGE: .5 * base.DAMAGE
    },
    SIZE: 20,
    TURRETS: [{
        POSITION: [5, 9.5, 0, 0, 160, 0],
        TYPE: exports.auto3gun
    }, {
        POSITION: [5, 9.5, 0, 45, 160, 0],
        TYPE: exports.auto3gun
    }, {
        POSITION: [5, 9.5, 0, 90, 160, 0],
        TYPE: exports.auto3gun
    }, {
        POSITION: [5, 9.5, 0, 135, 160, 0],
        TYPE: exports.auto3gun
    }, {
        POSITION: [5, 9.5, 0, 180, 160, 0],
        TYPE: exports.auto3gun
    }, {
        POSITION: [5, 9.5, 0, 225, 160, 0],
        TYPE: exports.auto3gun
    }, {
        POSITION: [5, 9.5, 0, 270, 160, 0],
        TYPE: exports.auto3gun
    }, {
        POSITION: [5, 9.5, 0, 315, 160, 0],
        TYPE: exports.auto3gun
    }, {
        POSITION: [11, 0, 0, 22.5, 360, 1],
        TYPE: [exports.auto3gun, {
            INDEPENDENT: !0
        }]
    }]
}, exports.miniexq = {
    PARENT: [exports.genericTank],
    LABEL: "Mini Exquisiter",
    DANGER: 8,
    COLOR: 2,
    INVISIBLE: [.08, .03],
    FACING_TYPE: "autospin",
    BODY: {
        SPEED: 1 * base.SPEED,
        FOV: 1.4 * base.FOV,
        DAMAGE: .5 * base.DAMAGE
    },
    SIZE: 20,
    TURRETS: [{
        POSITION: [5, 9.5, 0, 0, 160, 0],
        TYPE: exports.auto4gun
    }, {
        POSITION: [5, 9.5, 0, 45, 160, 0],
        TYPE: exports.auto4gun
    }, {
        POSITION: [5, 9.5, 0, 90, 160, 0],
        TYPE: exports.auto4gun
    }, {
        POSITION: [5, 9.5, 0, 135, 160, 0],
        TYPE: exports.auto4gun
    }, {
        POSITION: [5, 9.5, 0, 180, 160, 0],
        TYPE: exports.auto4gun
    }, {
        POSITION: [5, 9.5, 0, 225, 160, 0],
        TYPE: exports.auto4gun
    }, {
        POSITION: [5, 9.5, 0, 270, 160, 0],
        TYPE: exports.auto4gun
    }, {
        POSITION: [5, 9.5, 0, 315, 160, 0],
        TYPE: exports.auto4gun
    }, {
        POSITION: [11, 0, 0, 22.5, 360, 1],
        TYPE: [exports.ambusher2, {
            INDEPENDENT: !0
        }]
    }]
}, exports.auto5 = {
    PARENT: [exports.genericTank],
    LABEL: "Auto-5",
    DANGER: 7,
    FACING_TYPE: "autospin",
    TURRETS: [{
        POSITION: [11, 8, 0, 0, 190, 0],
        TYPE: exports.auto5gun
    }, {
        POSITION: [11, 8, 0, 72, 190, 0],
        TYPE: exports.auto5gun
    }, {
        POSITION: [11, 8, 0, 144, 190, 0],
        TYPE: exports.auto5gun
    }, {
        POSITION: [11, 8, 0, 216, 190, 0],
        TYPE: exports.auto5gun
    }, {
        POSITION: [11, 8, 0, 288, 190, 0],
        TYPE: exports.auto5gun
    }]
}, exports.heavy3 = {
    BODY: {
        SPEED: .95 * base.SPEED
    },
    PARENT: [exports.genericTank],
    LABEL: "Mega-3",
    DANGER: 7,
    FACING_TYPE: "autospin",
    TURRETS: [{
        POSITION: [14, 8, 0, 0, 190, 0],
        TYPE: exports.heavy3gun
    }, {
        POSITION: [14, 8, 0, 120, 190, 0],
        TYPE: exports.heavy3gun
    }, {
        POSITION: [14, 8, 0, 240, 190, 0],
        TYPE: exports.heavy3gun
    }]
}, exports.architect = {
    LABEL: "Architect",
    BODY: {
        SPEED: 1.1 * base.SPEED
    },
    PARENT: [exports.genericTank],
    DANGER: 6,
    FACING_TYPE: "autospin",
    TURRETS: [{
        POSITION: [12, 8, 0, 0, 190, 0],
        TYPE: exports.tritrapgun
    }, {
        POSITION: [12, 8, 0, 120, 190, 0],
        TYPE: exports.tritrapgun
    }, {
        POSITION: [12, 8, 0, 240, 190, 0],
        TYPE: exports.tritrapgun
    }]
}, exports.auto4 = {
    PARENT: [exports.genericTank],
    DANGER: 5,
    LABEL: "Auto-4",
    FACING_TYPE: "autospin",
    TURRETS: [{
        POSITION: [13, 6, 0, 45, 160, 0],
        TYPE: exports.auto4gun
    }, {
        POSITION: [13, 6, 0, 135, 160, 0],
        TYPE: exports.auto4gun
    }, {
        POSITION: [13, 6, 0, 225, 160, 0],
        TYPE: exports.auto4gun
    }, {
        POSITION: [13, 6, 0, 315, 160, 0],
        TYPE: exports.auto4gun
    }]
}, exports.flanktrap = {
    PARENT: [exports.genericTank],
    LABEL: "Trap Guard",
    STAT_NAMES: statnames.generic,
    DANGER: 6,
    GUNS: [{
        POSITION: [20, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [13, 8, 1, 0, 0, 180, 0]
    }, {
        POSITION: [4, 8, 1.7, 13, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }]
}, exports.guntrap = {
    PARENT: [exports.genericTank],
    LABEL: "Gunner Trapper",
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    BODY: {
        FOV: 1.25 * base.FOV
    },
    GUNS: [{
        POSITION: [16, 4, 1, 0, -3.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.tonsmorrecoil, g.lotsmorrecoil]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [16, 4, 1, 0, 3.5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.tonsmorrecoil, g.lotsmorrecoil]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [13, 11, 1, 0, 0, 180, 0]
    }, {
        POSITION: [4, 11, 1.7, 13, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.fast, g.halfrecoil]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }]
}, exports.snipeGuard = {
    PARENT: [exports.genericTank],
    LABEL: "Snipe Guard",
    BODY: {
        ACCELERATION: .7 * base.ACCEL,
        FOV: 1.2 * base.FOV
    },
    DANGER: 7,
    GUNS: [{
        POSITION: [24, 8.5, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [13, 8.5, 1, 0, 0, 180, 0]
    }, {
        POSITION: [4, 8.5, 1.7, 13, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }]
}, exports.snipeCharge = {
    PARENT: [exports.genericTank],
    LABEL: "Snipe Charge",
    BODY: {
        ACCELERATION: .7 * base.ACCEL,
        FOV: 1.2 * base.FOV
    },
    DANGER: 7,
    GUNS: [{
        POSITION: [24, 8.5, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [13, 8.5, 1, 0, 3, 230, 0]
    }, {
        POSITION: [4, 8.5, 1.7, 13, 3, 230, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }, {
        POSITION: [13, 8.5, 1, 0, -3, 130, 0]
    }, {
        POSITION: [4, 8.5, 1.7, 13, -3, 130, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }]
}, exports.bulletexplode = {
    PARENT: [exports.bullet],
    INDEPENDENT: !0,
    GUNS: [{
        POSITION: [1, 3, 1, -3, 5, 0, .6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.frozen]),
            TYPE: exports.bulletgrow,
            SHOOT_ON_DEATH: !0
        }
    }]
}, exports.cherryfrag = {
    PARENT: [exports.bullet],
    LABEL: "Cherry Bomb Fragment",
    MOTION_TYPE: "glide",
    FACING_TYPE: "turnWithSpeed",
    BODY: {
        PENETRATION: 20,
        SPEED: 0,
        RANGE: 90,
        DENSITY: .1,
        HEALTH: 5,
        DAMAGE: 2.25,
        PUSHABILITY: 0
    },
    PERSISTS_AFTER_DEATH: !0,
    SHAPE: 112,
    COLOR_OVERRIDE: 100,
    GUNS: [{
        POSITION: [1, 3, 1, -3, 5, 0, .6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.frozen]),
            TYPE: exports.bulletgrow,
            SHOOT_ON_DEATH: !0
        }
    }]
}, exports.cherrybomb = {
    PARENT: [exports.bullet],
    LABEL: "Cherry Bomb",
    MOTION_TYPE: "glide",
    FACING_TYPE: "turnWithSpeed",
    INDEPENDENT: !0,
    COLOR_OVERRIDE: 100,
    GUNS: [{
        POSITION: [1, 3, 1, -3, 5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            COLOR_OVERRIDE: 116,
            PERSISTS_AFTER_DEATH: !0,
            SHOOT_ON_DEATH: !0
        }
    }, {
        POSITION: [1, 3, 1, -3, 5, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            COLOR_OVERRIDE: 116,
            PERSISTS_AFTER_DEATH: !0,
            SHOOT_ON_DEATH: !0
        }
    }, {
        POSITION: [1, 3, 1, -3, 5, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            COLOR_OVERRIDE: 116,
            PERSISTS_AFTER_DEATH: !0,
            SHOOT_ON_DEATH: !0
        }
    }, {
        POSITION: [1, 3, 1, -3, 5, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            COLOR_OVERRIDE: 116,
            PERSISTS_AFTER_DEATH: !0,
            SHOOT_ON_DEATH: !0
        }
    }, {
        POSITION: [1, 3, 1, -3, 5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            COLOR_OVERRIDE: 116,
            PERSISTS_AFTER_DEATH: !0,
            SHOOT_ON_DEATH: !0
        }
    }, {
        POSITION: [1, 3, 1, -3, 5, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            COLOR_OVERRIDE: 116,
            PERSISTS_AFTER_DEATH: !0,
            SHOOT_ON_DEATH: !0
        }
    }, {
        POSITION: [1, 3, 1, -3, 5, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            COLOR_OVERRIDE: 116,
            PERSISTS_AFTER_DEATH: !0,
            SHOOT_ON_DEATH: !0
        }
    }, {
        POSITION: [1, 3, 1, -3, 5, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            COLOR_OVERRIDE: 116,
            PERSISTS_AFTER_DEATH: !0,
            SHOOT_ON_DEATH: !0
        }
    }, {
        POSITION: [0, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.slow]),
            TYPE: exports.cherryfrag,
            COLOR_OVERRIDE: 100,
            SHOOT_ON_DEATH: !0
        }
    }, {
        POSITION: [0, 8, 1, 0, 0, 120, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.slow]),
            TYPE: exports.cherryfrag,
            COLOR_OVERRIDE: 100,
            SHOOT_ON_DEATH: !0
        }
    }, {
        POSITION: [0, 8, 1, 0, 0, 240, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.slow]),
            TYPE: exports.cherryfrag,
            COLOR_OVERRIDE: 100,
            SHOOT_ON_DEATH: !0
        }
    }, {
        POSITION: [0, 8, 1, 0, 0, 60, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.slow]),
            TYPE: exports.cherryfrag,
            COLOR_OVERRIDE: 100,
            SHOOT_ON_DEATH: !0
        }
    }, {
        POSITION: [0, 8, 1, 0, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.slow]),
            TYPE: exports.cherryfrag,
            COLOR_OVERRIDE: 100,
            SHOOT_ON_DEATH: !0
        }
    }, {
        POSITION: [0, 8, 1, 0, 0, 300, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.slow]),
            TYPE: exports.cherryfrag,
            COLOR_OVERRIDE: 100,
            SHOOT_ON_DEATH: !0
        }
    }]
}, exports.cherrybumb = {
    PARENT: [exports.genericTank],
    DANGER: 5,
    BODY: {
        ACCELERATION: 1 * base.ACCEL,
        HEALTH: .3 * base.HEALTH
    },
    LABEL: "Cherry Bomb",
    GUNS: [{
        POSITION: [17, 14, 1.2, 0, 0, 0, 0]
    }, {
        POSITION: [3, 16, -1.2, 17, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.multiplier, g.slower]),
            TYPE: exports.cherrybomb,
            MAX_CHILDREN: 3
        }
    }]
}, exports.deployer = {
    PARENT: [exports.genericTank],
    DANGER: 5,
    BODY: {
        ACCELERATION: 1 * base.ACCEL,
        HEALTH: .3 * base.HEALTH
    },
    LABEL: "Deployer",
    GUNS: [{
        POSITION: [17, 14, 1.2, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.deployer]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [17, 14, 1.2, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.deployer]),
            TYPE: exports.bulletgrow,
            ALT_FIRE: !0
        }
    }]
}, exports.multiplier = {
    PARENT: [exports.genericTank],
    DANGER: 5,
    BODY: {
        ACCELERATION: 1 * base.ACCEL,
        HEALTH: .3 * base.HEALTH
    },
    LABEL: "Multiplier",
    GUNS: [{
        POSITION: [17, 14, 1.2, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.multiplier]),
            TYPE: exports.bulletexplode
        }
    }]
}, exports.testbed.UPGRADES_TIER_1 = [exports.betaTanks, exports.observer], exports.betaTanks.UPGRADES_TIER_1 = [exports.axolotl, exports.bt2], exports.bt2.UPGRADES_TIER_2 = [exports.bt3], exports.bt3.UPGRADES_TIER_3 = [exports.bt4], exports.bt4.UPGRADES_TIER_3 = [exports.bt5], exports.bt5.UPGRADES_TIER_3 = [exports.bt6], exports.bt6.UPGRADES_TIER_3 = [exports.bt7], exports.bt7.UPGRADES_TIER_3 = [], exports.moderator.UPGRADES_TIER_1 = [exports.testbed, exports.misc, exports.dominators, exports.bosses, exports.sentries], exports.overseerr.UPGRADES_TIER_1 = [exports.testbed, exports.misc, exports.dominators, exports.bosses, exports.sentries], exports.managerr.UPGRADES_TIER_1 = [exports.testbed, exports.misc, exports.dominators, exports.bosses, exports.sentries], exports.seniorTester.UPGRADES_TIER_1 = [exports.testbed, exports.misc], exports.developer.UPGRADES_TIER_1 = [exports.testbed, exports.devbosses, exports.bosses, exports.misc, exports.arenaClosers, exports.unfinished, exports.dominators, exports.sentries], exports.administrator.UPGRADES_TIER_1 = [exports.testbed, exports.misc, exports.dominators, exports.bosses, exports.sentries], exports.basic.UPGRADES_TIER_1 = [exports.twin, exports.sniper, exports.machine, exports.flank, exports.director, exports.pound, exports.trapper, exports.auto, exports.micro, exports.screwgun], exports.basic.UPGRADES_TIER_2 = [exports.smash], exports.basic.UPGRADES_TIER_3 = [exports.single], exports.auto.UPGRADES_TIER_3 = [exports.auto3], exports.smash.UPGRADES_TIER_3 = [exports.megasmash, exports.landmine, exports.spike, exports.autosmash, exports.radar, exports.fidgetspinner], exports.megasmash.UPGRADES_TIER_4 = [exports.harmer], exports.screwgun.UPGRADES_TIER_2 = [exports.seadog, exports.nailgun, exports.sharpshooter, exports.diploid, exports.doublescrew, exports.gunner, exports.searcher], exports.seadog.UPGRADES_TIER_3 = [exports.captain, exports.sonar, exports.scubadiver, exports.speedboat, exports.partition], exports.nailgun.UPGRADES_TIER_4 = [exports.staplegun, exports.diploist], exports.staplegun.UPGRADES_TIER_4 = [exports.terminal], exports.diploid.UPGRADES_TIER_3 = [exports.flamethrower, exports.diploist, exports.naturalist, exports.screwmation], exports.naturalist.UPGRADES_TIER_4 = [exports.greenhouse], exports.screwmation.UPGRADES_TIER_4 = [exports.puntgun, exports.corkscrew], exports.sharpshooter.UPGRADES_TIER_3 = [exports.precperc], exports.doublescrew.UPGRADES_TIER_3 = [exports.triplescrew, exports.pumba, exports.sonar], exports.twin.UPGRADES_TIER_2 = [exports.double, exports.bent, exports.gunner, exports.hexa, exports.imerium], exports.twin.UPGRADES_TIER_3 = [exports.triple, exports.dual], exports.dual.UPGRADES_TIER_3 = [exports.pair, exports.doubledual, exports.dualgunner, exports.certhar], exports.imerium.UPGRADES_TIER_3 = [exports.boxer, exports.flashlight, exports.eyeofender, exports.lighthouse], exports.flashlight.UPGRADES_TIER_3 = [], exports.double.UPGRADES_TIER_3 = [exports.tripletwin, exports.split, exports.autodouble, exports.bentdouble], exports.bent.UPGRADES_TIER_3 = [exports.penta, exports.spread, exports.benthybrid, exports.bentdouble, exports.triple, exports.bentswarm], exports.gunner.UPGRADES_TIER_3 = [exports.autogunner, exports.nailgun, exports.auto4, exports.machinegunner, exports.cyclone, exports.dualgunner, exports.nitro, exports.arpeggio, exports.trailblazer], exports.sniper.UPGRADES_TIER_2 = [exports.assassin, exports.hunter, exports.mini, exports.flanktrap, exports.rifle, exports.ninja, exports.ladder], exports.ladder.UPGRADES_TIER_3 = [exports.razor, exports.grapple, exports.escalator, exports.jengatower, exports.blender, exports.abutment], exports.ninja.UPGRADES_TIER_3 = [exports.stalker], exports.assassin.UPGRADES_TIER_3 = [exports.ranger, exports.stalker, exports.falcon], exports.hunter.UPGRADES_TIER_3 = [exports.preda, exports.autoHunter, exports.poach], exports.builder.UPGRADES_TIER_3 = [exports.construct, exports.boomer, exports.autobuilder, exports.engineer, exports.pavement], exports.conq = [exports.juggrnt], exports.engineer.UPGRADES_TIER_4 = [exports.workshop, exports.officer], exports.construct.UPGRADES_TIER_4 = [exports.workshop, exports.joker1], exports.machine.UPGRADES_TIER_2 = [exports.artillery, exports.mini, exports.gunner, exports.submachine, exports.flamethrower, exports.inferno], exports.machine.UPGRADES_TIER_3 = [exports.spray], exports.inferno.UPGRADES_TIER_3 = [exports.backfire, exports.burnout, exports.twinferno, exports.hothead, exports.welder, exports.firemarshal, exports.charcoal, exports.catalyst], exports.twinferno.UPGRADES_TIER_4 = [exports.twanferno, exports.combustion, exports.doubletwinferno, exports.pitfire], exports.combustion.UPGRADES_TIER_4 = [exports.nightmare], exports.flamethrower.UPGRADES_TIER_3 = [exports.joker5, exports.backfire, exports.burnout, exports.onslaught, exports.firehydrant, exports.firetruck, exports.wildfire, exports.lavapup, exports.pyro, exports.furnace, exports.sulfur1, exports.bucketofire], exports.wildfire.UPGRADES_TIER_4 = [exports.combustion, exports.annoyance, exports.brushfire, exports.triplefiery, exports.firehose, exports.incinerator, exports.hollowflare, exports.trailblazer], exports.destroy.UPGRADES_TIER_3 = [exports.anni, exports.hybrid, exports.construct, exports.shotgun2, exports.cannon], exports.construct.UPGRADES_TIER_4 = [exports.juggrnt], exports.anni.UPGRADES_TIER_4 = [exports.juggrnt, exports.stabalizer, exports.bucket, exports.gcannon], exports.artillery.UPGRADES_TIER_3 = [exports.mortar, exports.driller, exports.cannonry, exports.spread, exports.skimmer, exports.ordnance], exports.mini.UPGRADES_TIER_3 = [exports.stream, exports.nailgun, exports.hybridmini, exports.beacon, exports.syntaxnull], exports.stream.UPGRADES_TIER_4 = [exports.staplegun, exports.spunce, exports.syntaxund], exports.flank.UPGRADES_TIER_2 = [exports.hexa, exports.tri, exports.auto3, exports.flanktrap, exports.accelerator, exports.imerium], exports.flank.UPGRADES_TIER_3 = [], exports.tri.UPGRADES_TIER_3 = [exports.fighter, exports.booster, exports.falcon, exports.jet, exports.autotri, exports.brutalizer], exports.jet.UPGRADES_TIER_3 = [exports.torpedo, exports.warplane, exports.bomber], exports.lancer.UPGRADES_TIER_2 = [exports.dagger, exports.broadsword, exports.claymore, exports.rapture, exports.javelin1, exports.smash], exports.rapture.UPGRADES_TIER_3 = [exports.akafuji1, exports.atarium], exports.akafuji1.UPGRADES_TIER_4 = [exports.sabaton6], exports.fighter.UPGRADES_TIER_3 = [exports.twighter, exports.raptor, exports.palopian, exports.hotrod], exports.hexa.UPGRADES_TIER_3 = [exports.octo, exports.hexatrap, exports.flankz, exports.cyclone, exports.heptatrap], exports.auto3.UPGRADES_TIER_3 = [exports.auto5, exports.heavy3, exports.auto4, exports.architect], exports.auto5.UPGRADES_TIER_4 = [exports.miniext, exports.miniexq], exports.auto4.UPGRADES_TIER_4 = [exports.hivemind], exports.flanktrap.UPGRADES_TIER_3 = [exports.snipeGuard, exports.guntrap, exports.fortress], exports.fortress.UPGRADES_TIER_3 = [exports.bunker, exports.hivemind], exports.director.UPGRADES_TIER_2 = [exports.overseer, exports.cruiser, exports.underseer, exports.lilfact, exports.manager], exports.triplefiery.UPGRADES_TIER_4 = [exports.flameplot], exports.manager.UPGRADES_TIER_3 = [exports.maleficitor, exports.ovrfictor, exports.undrfictor], exports.maleficitor.UPGRADES_TIER_4 = [exports.necroficitor], exports.lilfact.UPGRADES_TIER_3 = [exports.factory, exports.twinspawn, exports.autoSpawner, exports.general, exports.polymancer, exports.buster, exports.crescent, exports.nester, exports.azure, exports.trinity, exports.worker], exports.overseer.UPGRADES_TIER_3 = [exports.overlord, exports.overtrap, exports.overgunner, exports.autoover, exports.banshee, exports.overdrive, exports.commander, exports.palopian, exports.hivemind, exports.trinity, exports.incursion, exports.fleet], exports.underseer.UPGRADES_TIER_3 = [exports.necromancer, exports.maleficitor, exports.sentinal, exports.trinity, exports.upgrade, exports.ecotrixy], exports.munderseer.UPGRADES_TIER_4 = [exports.mecromancer, exports.exotier], exports.necromancer.UPGRADES_TIER_4 = [exports.metrixy, exports.mecromancer], exports.cruiser.UPGRADES_TIER_3 = [exports.carrier, exports.battleship, exports.fortress, exports.autocruiser], exports.carrier.UPGRADES_TIER_4 = [exports.remnant], exports.battleship.UPGRADES_TIER_4 = [exports.remnant], exports.pound.UPGRADES_TIER_2 = [exports.destroy, exports.artillery, exports.multishot, exports.launcher, exports.miniswarm, exports.magician, exports.crusher], exports.pound.UPGRADES_TIER_3 = [exports.eaglet, exports.pistol], exports.eaglet.UPGRADES_TIER_3 = [exports.eagle], exports.miniswarm.UPGRADES_TIER_3 = [exports.hiveshooter,exports.droneminihiveshooter ], exports.hiveshooter.UPGRADES_TIER_4 = [exports.autohiveshooter], exports.launcher.UPGRADES_TIER_3 = [exports.skimmer, exports.spinner, exports.sidewind, exports.autoLauncher], exports.spinner.UPGRADES_TIER_4 = [exports.pathogen], exports.skimmer.UPGRADES_TIER_4 = [exports.rocketeer], exports.multishot.UPGRADES_TIER_3 = [exports.shotgun2], exports.trapper.UPGRADES_TIER_2 = [exports.tritrapper, exports.gutter, exports.megatrapper, exports.autoTrapper, exports.flanktrap, exports.builder, exports.boomer, exports.trapferno], exports.trapferno.UPGRADES_TIER_3 = [exports.twanferno], exports.trive.UPGRADES_TIER_3 = [exports.testimony], exports.gutter.UPGRADES_TIER_3 = [exports.nightshift, exports.testimony], exports.trapper.UPGRADES_TIER_3 = [exports.minitrap, exports.megatrapper, exports.entrizor], exports.megatrapper.UPGRADES_TIER_4 = [exports.terratrapper], exports.tritrapper.UPGRADES_TIER_3 = [exports.hexatrap, exports.heptatrap, exports.autotritrap, exports.quadtrapper, exports.architect], exports.autoTrapper.UPGRADES_TIER_3 = [exports.autotritrap, exports.autobuilder], exports.crusher.UPGRADES_TIER_3 = [exports.cannon, exports.tyrant, exports.trojan], exports.shotgun2.UPGRADES_TIER_4 = [exports.scattershot], 
   exports.commander.UPGRADES_TIER_4 = [exports.dreadnought], 
   exports.overlord.UPGRADES_TIER_4 = [exports.insurgence, exports.dreadnought], 
   exports.tyrant.UPGRADES_TIER_4 = [exports.titan], 
   exports.cannon.UPGRADES_TIER_4 = [exports.gcannon, exports.ravager, exports.titan],
   exports.hybrid.UPGRADES_TIER_4 = [exports.ravager], exports.trojan.UPGRADES_TIER_4 = [exports.ravager], exports.micro.UPGRADES_TIER_3 = [exports.mini, exports.microbrid], 
  exports.crasher = {
    TYPE: "crasher",
    LABEL: "Crasher",
    COLOR: 5,
    SHAPE: 3,
    SIZE: 5,
    VARIES_IN_SIZE: !0,
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
    AI: {
        NO_LEAD: !0
    },
    BODY: {
        SPEED: 5,
        ACCEL: .01,
        HEALTH: .5,
        DAMAGE: 5,
        PENETRATION: 2,
        PUSHABILITY: .5,
        DENSITY: 10,
        RESIST: 2
    },
    MOTION_TYPE: "motor",
    FACING_TYPE: "smoothWithMotion",
    HITS_OWN_TYPE: "hard",
    HAS_NO_MASTER: !0,
    DRAW_HEALTH: !0
}, exports.craizer = {
    TYPE: "crasher",
    LABEL: "Crasher",
    COLOR: 1,
    SHAPE: 300,
    SIZE: 19,
    VARIES_IN_SIZE: !0,
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
    AI: {
        NO_LEAD: !0
    },
    BODY: {
        SPEED: 5,
        ACCEL: .01,
        HEALTH: .5,
        DAMAGE: 5,
        PENETRATION: 2,
        PUSHABILITY: .5,
        DENSITY: 10,
        RESIST: 2
    },
    MOTION_TYPE: "motor",
    FACING_TYPE: "smoothWithMotion",
    HITS_OWN_TYPE: "hard",
    HAS_NO_MASTER: !0,
    DRAW_HEALTH: !0
}, exports.sentryRing = {
    PARENT: [exports.genericTank],
    LABEL: "",
    TYPE: "turret",
    BODY: {
        FOV: 1.2
    },
    COLOR: 16,
    INDEPENDENT: !0,
    SHAPE: 160,
    FACING_TYPE: "autospin",
    CONTROLLERS: ["spin"],
    TURRETS: [{
        POSITION: [7, 6, 8, 90, 160, 1],
        TYPE: [exports.auto3gun, {
            INDEPENDENT: !1
        }]
    }, {
        POSITION: [7, 6, 8, 270, 160, 1],
        TYPE: [exports.auto3gun, {
            INDEPENDENT: !1
        }]
    }]
}, exports.sentry = {
    PARENT: [exports.genericTank],
    TYPE: "crasher",
    DANGER: 3,
    COLOR: 5,
    SHAPE: 3,
    SIZE: 15,
    SKILL: skillSet({
        rld: .6,
        dam: .5,
        pen: .5,
        str: .1,
        spd: 1,
        atk: .5,
        hlt: 0,
        shi: 0,
        rgn: .5,
        mob: 0
    }),
    BODY: {
        SPEED: 5,
        ACCEL: .01,
        HEALTH: 30,
        DAMAGE: 5,
        PENETRATION: 2,
        PUSHABILITY: .5,
        DENSITY: 10,
        RESIST: 2
    },
    VALUE: 1500,
    VARIES_IN_SIZE: !0,
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
    AI: {
        NO_LEAD: !0
    },
    BODY: {
        FOV: .5,
        ACCEL: .006,
        DAMAGE: 2 * base.DAMAGE,
        SPEED: .5 * base.SPEED
    },
    MOTION_TYPE: "motor",
    FACING_TYPE: "smoothToTarget",
    HITS_OWN_TYPE: "hard",
    HAS_NO_MASTER: !0,
    DRAW_HEALTH: !0,
    GIVE_KILL_MESSAGE: !0
}, exports.orbitalSentry = {
    PARENT: [exports.sentry],
    LABEL: "Orbital Sentry",
    TURRETS: [{
        POSITION: [38, 0, 0, 0, 360, 0],
        TYPE: exports.sentryRing
    }]
}, exports.trapTurret2 = {
    PARENT: [exports.genericTank],
    LABEL: "Turret",
    INDEPENDENT: !1,
    CONTROLLERS: ["nearestDifferentMaster"],
    COLOR: 16,
    GUNS: [{
        POSITION: [16, 14, 1, 0, 0, 0, 0]
    }, {
        POSITION: [4, 14, 1.8, 16, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.lowpower, g.halfreload, g.slow]),
            TYPE: [exports.trap, {
                COLOR_OVERRIDE: 3
            }],
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }]
}, exports.sentrySwarm = {
    PARENT: [exports.sentry],
    LABEL: "Guardian-Lite",
    DANGER: 3,
    GUNS: [{
        POSITION: [7, 14, .6, 7, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }]
}, exports.defender_lite = {
    PARENT: [exports.sentry],
    LABEL: "Defender-Lite",
    DANGER: 5,
    COLOR: 2,
    FACING_TYPE: "autospin",
    TURRETS: [{
        POSITION: [12, 6, 0, 60, 0, 0],
        TYPE: exports.trapTurret2
    }, {
        POSITION: [12, 6, 0, -60, 0, 0],
        TYPE: exports.trapTurret2
    }, {
        POSITION: [12, 6, 0, 180, 0, 0],
        TYPE: exports.trapTurret2
    }, {
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: exports.defturret
    }]
}, exports.summoner_lite = {
    PARENT: [exports.sentry],
    LABEL: "Summoner-Lite",
    SHAPE: 4,
    FACING_TYPE: "autospin",
    DANGER: 5,
    COLOR: 13,
    MAX_CHILDREN: 24,
    GUNS: [{
        POSITION: [5, 10, .6, 7, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.doublereload]),
            TYPE: exports.bee2,
            STAT_CALCULATOR: gunCalcNames.swarm,
            AUTOFIRE: !0
        }
    }, {
        POSITION: [5, 10, .6, 7, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.doublereload]),
            TYPE: exports.bee2,
            STAT_CALCULATOR: gunCalcNames.swarm,
            AUTOFIRE: !0
        }
    }, {
        POSITION: [5, 10, .6, 7, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.doublereload]),
            TYPE: exports.bee2,
            STAT_CALCULATOR: gunCalcNames.swarm,
            AUTOFIRE: !0
        }
    }, {
        POSITION: [5, 10, .6, 7, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.doublereload]),
            TYPE: exports.bee2,
            STAT_CALCULATOR: gunCalcNames.swarm,
            AUTOFIRE: !0
        }
    }]
}, exports.sentryGun = makeAuto(exports.sentry, "Sentry", {
    type: exports.heavy3gun,
    size: 12
}), exports.sentryTrap = makeAuto(exports.sentry, "Sentry", {
    type: exports.trapTurret,
    size: 12
}), exports.sentries.UPGRADES_TIER_1 = [exports.orbitalSentry, exports.sentrySwarm, exports.sentryGun, exports.sentryTrap, exports.summoner_lite, exports.defender_lite], exports.miniboss = {
    PARENT: [exports.genericTank],
    TYPE: "miniboss",
    DANGER: 6,
    SKILL: skillSet({
        rld: .7,
        dam: .5,
        pen: .8,
        str: .8,
        spd: .2,
        atk: .3,
        hlt: .8,
        shi: .5,
        rgn: .5,
        mob: 0
    }),
    LEVEL: 45,
    CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
    AI: {
        NO_LEAD: !0
    },
    FACING_TYPE: "autospin",
    BROADCAST_MESSAGE: "A visitor has left!"
}, exports.crasherSpawner = {
    PARENT: [exports.genericTank],
    LABEL: "Spawned",
    STAT_NAMES: statnames.drone,
    CONTROLLERS: ["nearestDifferentMaster"],
    COLOR: 5,
    INDEPENDENT: !0,
    AI: {
        chase: !0
    },
    MAX_CHILDREN: 4,
    GUNS: [{
        POSITION: [6, 12, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak]),
            TYPE: [exports.drone, {
                LABEL: "Crasher",
                VARIES_IN_SIZE: !0,
                DRAW_HEALTH: !0
            }],
            SYNCS_SKILLS: !0,
            AUTOFIRE: !0,
            STAT_CALCULATOR: gunCalcNames.drone
        }
    }]
}, exports.elite = {
    PARENT: [exports.miniboss],
    LABEL: "Elite Crasher",
    COLOR: 5,
    SHAPE: 3,
    SIZE: 30,
    VARIES_IN_SIZE: !0,
    VALUE: 15e4,
    BODY: bossStats()
}, exports.elite_destroyer = {
    PARENT: [exports.elite],
    GUNS: [{
        POSITION: [5, 16, 1, 6, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
            TYPE: exports.bullet,
            LABEL: "Devastator"
        }
    }, {
        POSITION: [5, 16, 1, 6, 0, 60, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
            TYPE: exports.bullet,
            LABEL: "Devastator"
        }
    }, {
        POSITION: [5, 16, 1, 6, 0, -60, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
            TYPE: exports.bullet,
            LABEL: "Devastator"
        }
    }],
    TURRETS: [{
        POSITION: [11, 0, 0, 180, 360, 0],
        TYPE: [exports.crasherSpawner]
    }, {
        POSITION: [11, 0, 0, 60, 360, 0],
        TYPE: [exports.crasherSpawner]
    }, {
        POSITION: [11, 0, 0, -60, 360, 0],
        TYPE: [exports.crasherSpawner]
    }, {
        POSITION: [11, 0, 0, 0, 360, 1],
        TYPE: [exports.bigauto4gun, {
            INDEPENDENT: !0,
            COLOR: 5
        }]
    }]
}, exports.elite_spawner = {
    PARENT: [exports.elite],
    GUNS: [{
        POSITION: [4, 17, 1, 7.5, 0, 180, 0]
    }, {
        POSITION: [2, 20, 1, 10.5, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: exports.sentrySwarm2,
            MAX_CHILDREN: 2,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0
        }
    }, {
        POSITION: [4, 17, 1, 7.5, 0, 60, 0]
    }, {
        POSITION: [2, 20, 1, 10.5, 0, 60, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: exports.sentryTrap2,
            MAX_CHILDREN: 2,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0
        }
    }, {
        POSITION: [4, 17, 1, 7.5, 0, -60, 0]
    }, {
        POSITION: [2, 20, 1, 10.5, 0, -60, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: exports.sentryGun2,
            MAX_CHILDREN: 2,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0
        }
    }],
    TURRETS: [{
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: [exports.auto4gun, {
            INDEPENDENT: !0,
            COLOR: 5
        }]
    }]
}, exports.elite_gunner = {
    PARENT: [exports.elite],
    FACING_TYPE: "toTarget",
    GUNS: [{
        POSITION: [14, 16, 1, 0, 0, 180, 0]
    }, {
        POSITION: [4, 16, 1.5, 14, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: [exports.pillbox, {
                INDEPENDENT: !0
            }]
        }
    }, {
        POSITION: [6, 14, -2, 2, 0, 60, 0]
    }, {
        POSITION: [6, 14, -2, 2, 0, 300, 0]
    }],
    AI: {
        NO_LEAD: !1
    },
    TURRETS: [{
        POSITION: [14, 8, 0, 60, 180, 0],
        TYPE: [exports.auto4gun]
    }, {
        POSITION: [14, 8, 0, 300, 180, 0],
        TYPE: [exports.auto4gun]
    }]
}, exports.elite_sprayer = {
    PARENT: [exports.elite],
    AI: {
        NO_LEAD: !1
    },
    TURRETS: [{
        POSITION: [9, 6, 6, 180, 190, 0],
        TYPE: [exports.sprayTurret, {
            COLOR: 16
        }]
    }, {
        POSITION: [9, 6, 6, 60, 190, 0],
        TYPE: [exports.sprayTurret, {
            COLOR: 16
        }]
    }, {
        POSITION: [9, 6, 6, -60, 190, 0],
        TYPE: [exports.sprayTurret, {
            COLOR: 16
        }]
    }, {
        POSITION: [9, 6, -6, 180, 190, 0],
        TYPE: [exports.sprayTurret, {
            COLOR: 16
        }]
    }, {
        POSITION: [9, 6, -6, 60, 190, 0],
        TYPE: [exports.sprayTurret, {
            COLOR: 16
        }]
    }, {
        POSITION: [9, 6, -6, -60, 190, 0],
        TYPE: [exports.sprayTurret, {
            COLOR: 16
        }]
    }, {
        POSITION: [6, 0, 0, 360, 360, 1],
        TYPE: [exports.machineTurret, {
            COLOR: 16
        }]
    }]
}, exports.elite_battleship = {
    PARENT: [exports.elite],
    VALUE: 3e5,
    GUNS: [],
    TURRETS: [{
        POSITION: [5, 8, 0, 0, 360, 1],
        TYPE: exports.auto3gun
    }, {
        POSITION: [5, 8, 0, 120, 360, 1],
        TYPE: exports.auto3gun
    }, {
        POSITION: [5, 8, 0, 240, 360, 1],
        TYPE: exports.auto3gun
    }]
};
for (let T = 0; T < 3; T++) exports.elite_battleship.GUNS.push({
    POSITION: [4, 7, .6, 7, 0, 120 * T + 60, 0],
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, [3, 1, 1, 1, 1, .2, 1, 2, 2, 1, 1, 1, 1]]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
    }
}, {
    POSITION: [4, 7, .6, 7, -8, 120 * T + 60, .5],
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, [3, 1, 1, 1, 1, .2, 1, 2, 2, 1, 1, 1, 1]]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
    }
}, {
    POSITION: [4, 7, .6, 7, 8, 120 * T + 60, .5],
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, [3, 1, 1, 1, 1, .2, 1, 2, 2, 1, 1, 1, 1]]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
    }
});
exports.palisade = (() => {
    let T = {
        SHOOT_SETTINGS: combineStats([g.factory, g.pound, g.halfreload, g.halfreload]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: !0,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: !0,
        WAIT_TO_CYCLE: !0
    };
    return {
        PARENT: [exports.miniboss],
        LABEL: "Rogue Palisade",
        COLOR: 17,
        SHAPE: 6,
        SIZE: 30,
        VALUE: 5e5,
        BODY: bossStats({
            health: 2,
            speed: .5
        }),
        GUNS: [{
            POSITION: [4, 6, -1.6, 8, 0, 0, 0],
            PROPERTIES: T
        }, {
            POSITION: [4, 6, -1.6, 8, 0, 60, 0],
            PROPERTIES: T
        }, {
            POSITION: [4, 6, -1.6, 8, 0, 120, 0],
            PROPERTIES: T
        }, {
            POSITION: [4, 6, -1.6, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
                TYPE: exports.minion,
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: !0,
                MAX_CHILDREN: 1,
                SYNCS_SKILLS: !0,
                WAIT_TO_CYCLE: !0
            }
        }, {
            POSITION: [4, 6, -1.6, 8, 0, 240, 0],
            PROPERTIES: T
        }, {
            POSITION: [4, 6, -1.6, 8, 0, 300, 0],
            PROPERTIES: T
        }],
        TURRETS: [{
            POSITION: [5, 10, 0, 30, 110, 0],
            TYPE: exports.trapTurret
        }, {
            POSITION: [5, 10, 0, 90, 110, 0],
            TYPE: exports.trapTurret
        }, {
            POSITION: [5, 10, 0, 150, 110, 0],
            TYPE: exports.trapTurret
        }, {
            POSITION: [5, 10, 0, 210, 110, 0],
            TYPE: exports.trapTurret
        }, {
            POSITION: [5, 10, 0, 270, 110, 0],
            TYPE: exports.trapTurret
        }, {
            POSITION: [5, 10, 0, 330, 110, 0],
            TYPE: exports.trapTurret
        }]
    }
})(), exports.skimboss = {
    PARENT: [exports.miniboss],
    LABEL: "Elite Skimmer",
    SIZE: 40,
    VALUE: 5e5,
    BODY: bossStats(),
    SHAPE: 3,
    COLOR: 2,
    FACING_TYPE: "autospin",
    TURRETS: [{
        POSITION: [15, 5, 0, 60, 170, 0],
        TYPE: exports.skimturret
    }, {
        POSITION: [15, 5, 0, 180, 170, 0],
        TYPE: exports.skimturret
    }, {
        POSITION: [15, 5, 0, 300, 170, 0],
        TYPE: exports.skimturret
    }]
}, exports.summoner = {
    PARENT: [exports.miniboss],
    LABEL: "Summoner",
    DANGER: 8,
    SHAPE: 4,
    COLOR: 13,
    SIZE: 30,
    MAX_CHILDREN: 28,
    FACING_TYPE: "autospin",
    VALUE: 3e5,
    BODY: bossStats(),
    GUNS: [{
        POSITION: [2.7, 8.65, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
            TYPE: [exports.sunchip, {
                MOTION_TYPE: "summoned"
            }],
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [2.7, 8.65, 1.2, 8, 0, 270, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
            TYPE: [exports.sunchip, {
                MOTION_TYPE: "summoned"
            }],
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [2.7, 8.65, 1.2, 8, 0, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
            TYPE: [exports.sunchip, {
                MOTION_TYPE: "summoned"
            }],
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [2.7, 8.65, 1.2, 8, 0, 180, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
            TYPE: [exports.sunchip, {
                MOTION_TYPE: "summoned"
            }],
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: !0
        }
    }]
}, exports.autobullet = {
    PARENT: [exports.bullet],
    CONTROLLERS: ["nearestDifferentMaster"],
    TURRETS: [{
        POSITION: [11, 0, 0, 0, 360, 1],
        TYPE: exports.autoTurret
    }]
}, exports.conjure = {
    PARENT: [exports.miniboss],
    LABEL: "Conjure",
    COLOR: 17,
    SIZE: 30,
    FACING_TYPE: "toTarget",
    VALUE: 3e5,
    BODY: bossStats(),
    GUNS: [{
        POSITION: [15, 13, 1, 6, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.anni, g.power, g.power, g.halfspeed, g.halfspeed]),
            TYPE: exports.autobullet
        }
    }, {
        POSITION: [8, 14, -1.3, 4, 0, 0, 0]
    }]
}, exports.tatapo_shard = {
    PARENT: [exports.genericTank],
    LABEL: "",
    COLOR: 7,
    TURRETS: [{
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: exports.auto3gun
    }]
}, exports.tatapo = {
    PARENT: [exports.miniboss],
    LABEL: "Tatapo",
    DANGER: 12,
    SHAPE: 4,
    COLOR: 6,
    SIZE: 30,
    FACING_TYPE: "autospin",
    VALUE: 3e5,
    BODY: bossStats(),
    BROADCAST_MESSAGE: "The Tatapo seems to left something in demise...",
    FRAG_BOSS_SPAWNS: ["tatapo_core", "tataposhard", "tataposhard", "tataposhard", "tataposhard"],
    GUNS: [{
        POSITION: [14, 1.25, 1, 0, -2, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [14, 1.25, 1, 0, 2, 0, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [15, 1.25, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 6, -1.8, 6.5, 0, 0, 0]
    }, {
        POSITION: [14, 1.25, 1, 0, -2, 90, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [14, 1.25, 1, 0, 2, 90, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [15, 1.25, 1, 0, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 6, -1.8, 6.5, 0, 90, 0]
    }, {
        POSITION: [14, 1, 1, 0, -2, 180, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [14, 1.25, 1, 0, 2, 180, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [15, 1.25, 1, 0, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 6, -1.8, 6.5, 0, 180, 0]
    }, {
        POSITION: [14, 1.25, 1, 0, -2, 270, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [14, 1.25, 1, 0, 2, 270, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [15, 1.25, 1, 0, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 6, -1.8, 6.5, 0, 270, 0]
    }],
    TURRETS: [{
        POSITION: [10, 13.5, 0, 45, 0, 1],
        TYPE: exports.tatapo_shard
    }, {
        POSITION: [10, 13.5, 0, 135, 0, 1],
        TYPE: exports.tatapo_shard
    }, {
        POSITION: [10, 13.5, 0, 225, 0, 1],
        TYPE: exports.tatapo_shard
    }, {
        POSITION: [10, 13.5, 0, -45, 0, 1],
        TYPE: exports.tatapo_shard
    }, {
        POSITION: [8, 0, 0, 0, 360, 1],
        TYPE: exports.preda
    }]
}, exports.tatapo_core = {
    PARENT: [exports.miniboss],
    LABEL: "Tatapo Core",
    DANGER: 12,
    SHAPE: 4,
    COLOR: 6,
    SIZE: 30,
    FACING_TYPE: "autospin",
    VALUE: 3e5,
    BODY: bossStats(),
    GUNS: [{
        POSITION: [14, 1.25, 1, 0, -2, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [14, 1.25, 1, 0, 2, 0, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [15, 1.25, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 6, -1.8, 6.5, 0, 0, 0]
    }, {
        POSITION: [14, 1.25, 1, 0, -2, 90, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [14, 1.25, 1, 0, 2, 90, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [15, 1.25, 1, 0, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 6, -1.8, 6.5, 0, 90, 0]
    }, {
        POSITION: [14, 1, 1, 0, -2, 180, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [14, 1.25, 1, 0, 2, 180, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [15, 1.25, 1, 0, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 6, -1.8, 6.5, 0, 180, 0]
    }, {
        POSITION: [14, 1.25, 1, 0, -2, 270, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [14, 1.25, 1, 0, 2, 270, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [15, 1.25, 1, 0, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 6, -1.8, 6.5, 0, 270, 0]
    }],
    TURRETS: [{
        POSITION: [8, 0, 0, 0, 360, 1],
        TYPE: exports.preda
    }]
}, exports.tataposhard = {
    PARENT: [exports.miniboss],
    LABEL: "Tatapo Shard",
    PERSISTS_AFTER_DEATH: !0,
    COLOR: 7,
    SIZE: 20,
    TURRETS: [{
        POSITION: [8, 0, 0, 0, 360, 1],
        TYPE: exports.sniper
    }, {
        POSITION: [8, 0, 0, 0, 360, 1],
        TYPE: exports.twin
    }, {
        POSITION: [11, 8, 0, 0, 190, 0],
        TYPE: exports.auto3gun
    }, {
        POSITION: [11, 8, 0, 120, 190, 0],
        TYPE: exports.auto3gun
    }, {
        POSITION: [11, 8, 0, 240, 190, 0],
        TYPE: exports.auto3gun
    }]
}, exports.abomination = {
    PARENT: [exports.miniboss],
    DANGER: 12,
    COLOR: 0,
    SIZE: 30,
    LABEL: "Abomination",
    FACING_TYPE: "autospin",
    TURRETS: [{
        POSITION: [13, 6, 0, 45, 160, 0],
        TYPE: [exports.bigauto4gun, {
            COLOR: 0
        }]
    }, {
        POSITION: [13, 6, 0, 135, 160, 0],
        TYPE: [exports.bigauto4gun, {
            COLOR: 0
        }]
    }, {
        POSITION: [13, 6, 0, 225, 160, 0],
        TYPE: [exports.bigauto4gun, {
            COLOR: 0
        }]
    }, {
        POSITION: [13, 6, 0, 315, 160, 0],
        TYPE: [exports.bigauto4gun, {
            COLOR: 0
        }]
    }, {
        POSITION: [4, 8, 0, 0, 360, 1],
        TYPE: [exports.director, {
            COLOR: 0
        }]
    }, {
        POSITION: [4, 8, 0, 90, 360, 1],
        TYPE: [exports.director, {
            COLOR: 0
        }]
    }, {
        POSITION: [4, 8, 0, 180, 360, 1],
        TYPE: [exports.director, {
            COLOR: 0
        }]
    }, {
        POSITION: [4, 8, 0, 270, 360, 1],
        TYPE: [exports.director, {
            COLOR: 0
        }]
    }, {
        POSITION: [8, 0, 0, 0, 360, 1],
        TYPE: [exports.mortar, {
            COLOR: 0
        }]
    }]
};
let omegaOctogonArray = [];
for (let T = 0; T < 6; T++) omegaOctogonArray.push({
    POSITION: [6, 9, 0, 60 * T + 10, 190, 1],
    TYPE: [exports.assassin, {
        CONTROLLERS: ["nearestDifferentMaster"]
    }]
});
exports.omegaocto = {
    PARENT: [exports.miniboss],
    LABEL: "Omega Octogon",
    DANGER: 8,
    SHAPE: -8,
    COLOR: 14,
    SIZE: 40,
    MAX_CHILDREN: 28,
    FACING_TYPE: "autospin",
    VALUE: 3e5,
    BODY: bossStats(),
    GUNS: [{
        POSITION: [2.7, 5.65, -1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
            TYPE: [exports.sunchip, {
                MOTION_TYPE: "summoned"
            }],
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [2.7, 5.65, -1.2, 8, 0, 270, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
            TYPE: [exports.sunchip, {
                MOTION_TYPE: "summoned"
            }],
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [2.7, 5.65, -1.2, 8, 0, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
            TYPE: [exports.sunchip, {
                MOTION_TYPE: "summoned"
            }],
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [2.7, 5.65, -1.2, 8, 0, 180, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
            TYPE: [exports.sunchip, {
                MOTION_TYPE: "summoned"
            }],
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [2.7, 5.65, -1.2, 8, 0, 45, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
            TYPE: [exports.sunchip, {
                MOTION_TYPE: "summoned"
            }],
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [2.7, 5.65, -1.2, 8, 0, 135, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
            TYPE: [exports.sunchip, {
                MOTION_TYPE: "summoned"
            }],
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [2.7, 5.65, -1.2, 8, 0, 225, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
            TYPE: [exports.sunchip, {
                MOTION_TYPE: "summoned"
            }],
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [2.7, 5.65, -1.2, 8, 0, 315, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
            TYPE: [exports.sunchip, {
                MOTION_TYPE: "summoned"
            }],
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: !0
        }
    }],
    TURRETS: [...omegaOctogonArray, {
        POSITION: [9, 0, 0, 0, 190, 1],
        TYPE: exports.micro
    }]
}, exports.guardian = {
    PARENT: [exports.miniboss],
    LABEL: "Guardian",
    DANGER: 8,
    COLOR: 5,
    SIZE: 30,
    SHAPE: 3,
    MAX_CHILDREN: 28,
    FACING_TYPE: "toTarget",
    VALUE: 3e5,
    BODY: bossStats(),
    GUNS: [{
        POSITION: [2.7, 13.65, 1.1, 8, 0, 180, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.fallenOverlord]),
            TYPE: exports.swarm,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.swarm,
            WAIT_TO_CYCLE: !0
        }
    }]
}, exports.fallenOverlord = {
    PARENT: [exports.miniboss],
    LABEL: "Fallen Overlord",
    DANGER: 8,
    COLOR: 18,
    SIZE: 30,
    MAX_CHILDREN: 28,
    FACING_TYPE: "autospin",
    VALUE: 3e5,
    BODY: bossStats(),
    GUNS: [{
        POSITION: [6, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.fallenOverlord]),
            TYPE: exports.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.fallenOverlord]),
            TYPE: exports.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.fallenOverlord]),
            TYPE: exports.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.fallenOverlord]),
            TYPE: exports.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0
        }
    }]
}, exports.fallenBooster = {
    PARENT: [exports.miniboss],
    LABEL: "Fallen Booster",
    DANGER: 8,
    COLOR: 18,
    SIZE: 30,
    FACING_TYPE: "toTarget",
    VALUE: 3e5,
    BODY: bossStats({
        speed: 12
    }),
    GUNS: [{
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.muchmorerecoil]),
            TYPE: exports.bullet,
            LABEL: "Front"
        }
    }, {
        POSITION: [13, 8, 1, 0, -1, 135, .6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster
        }
    }, {
        POSITION: [13, 8, 1, 0, 1, 225, .6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster
        }
    }, {
        POSITION: [16, 8, 1, 0, 0, 145, .1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster
        }
    }, {
        POSITION: [16, 8, 1, 0, 0, 215, .1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster
        }
    }]
}, exports.quadMachine = {
    PARENT: [exports.genericTank],
    LABEL: "Quad Machine",
    GUNS: [{
        POSITION: [12, 10, 1.4, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [12, 10, 1.4, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [12, 10, 1.4, 8, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [12, 10, 1.4, 8, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
            TYPE: exports.bullet
        }
    }]
}, exports.hexaraider = {
    PARENT: [exports.miniboss],
    LABEL: "Hexaraider",
    SHAPE: 6,
    SIZE: 30,
    COLOR: 0,
    VALUE: 3e5,
    GUNS: [],
    TURRETS: [{
        POSITION: [7, 0, 0, 360, 360, 1],
        TYPE: [exports.quadMachine, {
            COLOR: 0
        }]
    }]
};
for (let T = 0; T < 6; T++) exports.hexaraider.GUNS.push({
    POSITION: [6, 2, 1.6, 7, 0, 60 * T + 60, 0],
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.swarm
    }
}, {
    POSITION: [6, 2, 1.6, 7, -4, 60 * T + 60, .5],
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.swarm
    }
}, {
    POSITION: [6, 2, 1.6, 7, 4, 60 * T + 60, .5],
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.swarm
    }
});
exports.nestKeeper = {
    PARENT: [exports.miniboss],
    LABEL: "Nest Keeper",
    SHAPE: 5,
    SIZE: 50,
    COLOR: 14,
    VALUE: 5e5,
    BODY: bossStats({
        health: 1.5,
        damage: .6,
        speed: 2.5
    }),
    GUNS: [],
    TURRETS: [{
        POSITION: [8.5, 0, 0, 360, 360, 1],
        TYPE: exports.boomer
    }]
};
for (let T = 0; T < 5; T++) exports.nestKeeper.GUNS.push({
    POSITION: [4.15, 7, 1.25, 8, 0, 360 * T / 5 + 36, 0],
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, [1, 1, 1, .9, 2, .45, .75, .9, .9, 1, .9, 1, 1]]),
        TYPE: [exports.drone, {
            BODY: {
                FOV: 5
            },
            INDEPENDENT: !0
        }],
        MAX_CHILDREN: 2,
        STAT_CALCULATOR: gunCalcNames.drone
    }
}), exports.nestKeeper.TURRETS.push({
    POSITION: [7.75, 9, 0, 360 * T / 5, 90, 0],
    TYPE: exports.auto4gun
});
exports.eliteCruiser = {
    PARENT: [exports.miniboss],
    LABEL: "Elite Cruiser",
    DANGER: 8,
    SHAPE: 4,
    COLOR: 1,
    SIZE: 30,
    FACING_TYPE: "autospin",
    VALUE: 3e5,
    BODY: bossStats({
        health: 2,
        speed: .5
    }),
    GUNS: [{
        POSITION: [3.5, 2.65, 1.2, 8, -5, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.weak]),
            TYPE: exports.swarm,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [3.5, 2.65, 1.2, 8, -5, 270, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.weak]),
            TYPE: exports.swarm,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [3.5, 2.65, 1.2, 8, -5, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.weak]),
            TYPE: exports.swarm,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [3.5, 2.65, 1.2, 8, -5, 180, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.weak]),
            TYPE: exports.swarm,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [3.5, 2.65, 1.2, 8, 5, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.weak]),
            TYPE: exports.swarm,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [3.5, 2.65, 1.2, 8, 5, 270, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.bitlessreload, g.weak]),
            TYPE: exports.swarm,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [3.5, 2.65, 1.2, 8, 5, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.bitlessreload, g.weak]),
            TYPE: exports.swarm,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [3.5, 2.65, 1.2, 8, 5, 180, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.bitlessreload, g.weak]),
            TYPE: exports.swarm,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: !0
        }
    }],
    TURRETS: [{
        POSITION: [11, 0, 0, 360, 180, 1],
        TYPE: exports.single
    }, {
        POSITION: [4, 10, 0, 0, 180, 0],
        TYPE: exports.autoTurret
    }, {
        POSITION: [4, 10, 0, 90, 180, 0],
        TYPE: exports.autoTurret
    }, {
        POSITION: [4, 10, 0, 180, 180, 0],
        TYPE: exports.autoTurret
    }, {
        POSITION: [4, 10, 0, 270, 180, 0],
        TYPE: exports.autoTurret
    }]
}, exports.destructor = {
    PARENT: [exports.miniboss],
    LABEL: "Destructor",
    DANGER: 8,
    SHAPE: 8,
    COLOR: 2,
    SIZE: 40,
    FACING_TYPE: "autospin",
    VALUE: 3e5,
    BODY: bossStats(),
    TURRETS: [{
        POSITION: [10, 0, 0, 360, 360, 1],
        TYPE: exports.assassin
    }, {
        POSITION: [5, 9, 0, 0, 190, 0],
        TYPE: exports.preda
    }, {
        POSITION: [5, 9, 0, 90, 190, 0],
        TYPE: exports.preda
    }, {
        POSITION: [5, 9, 0, 180, 190, 0],
        TYPE: exports.preda
    }, {
        POSITION: [5, 9, 0, 270, 190, 0],
        TYPE: exports.preda
    }, {
        POSITION: [5, 9, 0, 45, 190, 0],
        TYPE: exports.artillery
    }, {
        POSITION: [5, 9, 0, 135, 190, 0],
        TYPE: exports.artillery
    }, {
        POSITION: [5, 9, 0, 225, 190, 0],
        TYPE: exports.artillery
    }, {
        POSITION: [5, 9, 0, 315, 190, 0],
        TYPE: exports.artillery
    }]
}, exports.celestialTrapTurret = {
    PARENT: [exports.genericTank],
    LABEL: "Turret",
    INDEPENDENT: !0,
    COLOR: 16,
    GUNS: [{
        POSITION: [16, 14, 1, 0, 0, 0, 0]
    }, {
        POSITION: [4, 14, 1.8, 16, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, [4, 1, 1, 1, 2, 1, .25, 1, 1, 1, 10, 1, 1]]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
            AUTOFIRE: !0
        }
    }]
}, exports.celestialTrapTurret2 = {
    PARENT: [exports.genericTank],
    LABEL: "Turret",
    INDEPENDENT: !0,
    COLOR: 16,
    GUNS: [{
        POSITION: [16, 14, 1, 0, 0, 0, 0]
    }, {
        POSITION: [4, 14, 1.8, 16, 0, 0, 0]
    }]
};
let celestialTrapTurretArray = [];
for (let T = 0; T < 9; T++) celestialTrapTurretArray.push({
    POSITION: [6, 9, 0, 40 * T + 20, 0, 0],
    TYPE: [exports.celestialTrapTurret, {
        CONTROLLERS: ["nearestDifferentMaster"]
    }]
});
let celestialTrapTurretArray2 = [];
for (let T = 0; T < 9; T++) celestialTrapTurretArray2.push({
    POSITION: [6, 9, 0, 40 * T + 20, 0, 0],
    TYPE: [exports.celestialTrapTurret2, {
        CONTROLLERS: ["nearestDifferentMaster"]
    }]
});
let kronosTrapTurretArray = [];
for (let T = 0; T < 11; T++) kronosTrapTurretArray.push({
    POSITION: [6, 9, 0, T * (360 / 11) + 20, 0, 0],
    TYPE: [exports.celestialTrapTurret, {
        CONTROLLERS: ["nearestDifferentMaster"]
    }]
});
exports.paladinSunchipBody = {
    PARENT: [exports.genericTank],
    LABEL: "Paladin Sunchip",
    SHAPE: 7,
    SIZE: 10,
    BODY: {
        FOV: 100
    },
    CONTROLLERS: ["counterslowspin", "nearestDifferentMaster"],
    MAX_CHILDREN: 28,
    GUNS: []
};
for (let T = 0; T < 7; T++) exports.paladinSunchipBody.GUNS.push({
    POSITION: [4, 6.5, 1.2, 7.5, 0, 360 / 7 * T + 360 / 14, 0],
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
        TYPE: [exports.sunchip, {
            INDEPENDENT: !0,
            BODY: {
                FOV: 5
            }
        }],
        AUTOFIRE: !0,
        SYNCS_SKILLS: !0,
        STAT_CALCULATOR: gunCalcNames.necro
    }
});
exports.celestialHive = {
    PARENT: [exports.bullet],
    LABEL: "Hive",
    BODY: {
        RANGE: 90
    },
    FACING_TYPE: "turnWithSpeed",
    INDEPENDENT: !0,
    GUNS: []
};
for (let T = 0; T < 5; T++) exports.celestialHive.GUNS.push({
    POSITION: [7, 9.5, .6, 7, 0, 72 * T, .2 * T],
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        AUTOFIRE: !0,
        STAT_CALCULATOR: gunCalcNames.swarm
    }
});
exports.paladinSwarmer = {
    PARENT: [exports.genericTank],
    CONTROLLERS: ["onlyAcceptInArc", "nearestDifferentMaster"],
    BODY: {
        FOV: 1.5 * base.FOV
    },
    INDEPENDENT: !0,
    LABEL: "Swarmer",
    GUNS: [{
        POSITION: [14, 14, -1.2, 5, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, [1.75, 1, 1, 1, 1, 1, 1, 1, 1, .75, 1, 1, 1]]),
            TYPE: exports.celestialHive
        }
    }, {
        POSITION: [15, 12, 1, 5, 0, 0, 0]
    }]
}, exports.paladinSwarmerBody = {
    PARENT: [exports.genericTank],
    LABEL: "Paladin Swarmer",
    SHAPE: 5,
    SKILL: setBuild("5555550555"),
    SIZE: 10,
    CONTROLLERS: ["slowSpin"],
    INDEPENDENT: !0,
    TURRETS: [{
        POSITION: [9, 8, 0, 180, 180, 0],
        TYPE: exports.paladinSwarmer
    }, {
        POSITION: [9, 8, 0, 108, 180, 0],
        TYPE: exports.paladinSwarmer
    }, {
        POSITION: [9, 8, 0, 35, 180, 0],
        TYPE: exports.paladinSwarmer
    }, {
        POSITION: [9, 8, 0, -35, 180, 0],
        TYPE: exports.paladinSwarmer
    }, {
        POSITION: [9, 8, 0, -108, 180, 0],
        TYPE: exports.paladinSwarmer
    }]
}, exports.zaphkielLite = {
    PARENT: [exports.genericTank],
    LABEL: "Celestial Lite",
    SIZE: 30,
    STAT_NAMES: statnames.drone,
    DANGER: 5,
    BODY: {
        HEALTH: 25 * base.HEALTH,
        PUSHABILITY: 3
    },
    MAX_CHILDREN: 25,
    SHAPE: 3,
    VALUE: 25e4,
    CONTROLLERS: ["slowSpin"],
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    COLOR: 2,
    GUNS: [{
        POSITION: [15, 7, 1, 0, 0, 60, 0]
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 60, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }, {
        POSITION: [15, 7, 1, 0, 0, 180, 0]
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }, {
        POSITION: [15, 7, 1, 0, 0, 300, 0]
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 300, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }, {
        POSITION: [3, 12, 1.2, 8, 0, 60, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([
                [3, 2, 2, .6, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ]),
            TYPE: [exports.triangle, {
                BODY: {
                    ACCELERATION: .005
                }
            }],
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }, {
        POSITION: [3, 12, 1.2, 8, 0, -60, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([
                [3, 2, 2, .6, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ]),
            TYPE: [exports.triangle, {
                BODY: {
                    ACCELERATION: .005
                }
            }],
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }, {
        POSITION: [3, 12, 1.2, 8, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([
                [3, 2, 2, .6, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ]),
            TYPE: [exports.triangle, {
                BODY: {
                    ACCELERATION: .005
                }
            }],
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }],
    TURRETS: [{
        POSITION: [11, 0, 0, 0, 360, 1],
        TYPE: [exports.skimturret, {
            COLOR: 2
        }]
    }]
}, exports.theiaLite = {
    PARENT: [exports.genericTank],
    LABEL: "Celestial Lite",
    SIZE: 30,
    STAT_NAMES: statnames.drone,
    DANGER: 5,
    BODY: {
        HEALTH: 25 * base.HEALTH,
        PUSHABILITY: 3
    },
    MAX_CHILDREN: 25,
    SHAPE: 4,
    VALUE: 25e4,
    CONTROLLERS: ["slowSpin"],
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    COLOR: 13,
    GUNS: [{
        POSITION: [15, 7, 1, 0, 0, 0, 0]
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }, {
        POSITION: [15, 7, 1, 0, 0, 90, 0]
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }, {
        POSITION: [15, 7, 1, 0, 0, 180, 0]
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }, {
        POSITION: [15, 7, 1, 0, 0, 270, 0]
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }, {
        POSITION: [3, 12, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([
                [3, 2, 2, .6, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ]),
            TYPE: [exports.square, {
                BODY: {
                    ACCELERATION: .005
                }
            }],
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }, {
        POSITION: [3, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([
                [3, 2, 2, .6, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ]),
            TYPE: [exports.square, {
                BODY: {
                    ACCELERATION: .005
                }
            }],
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }, {
        POSITION: [3, 12, 1.2, 8, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([
                [3, 2, 2, .6, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ]),
            TYPE: [exports.square, {
                BODY: {
                    ACCELERATION: .005
                }
            }],
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }, {
        POSITION: [3, 12, 1.2, 8, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([
                [3, 2, 2, .6, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ]),
            TYPE: [exports.square, {
                BODY: {
                    ACCELERATION: .005
                }
            }],
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }],
    TURRETS: [{
        POSITION: [11, 0, 0, 0, 360, 1],
        TYPE: [exports.spinner, {
            COLOR: 13
        }]
    }]
}, exports.paladin = {
    PARENT: [exports.miniboss],
    LABEL: "Celestial",
    NAME: "Paladin",
    COLOR: 14,
    SHAPE: 9,
    SIZE: 40,
    VARIES_IN_SIZE: !1,
    VALUE: 1e6,
    BODY: bossStats({
        health: 3,
        speed: .5
    }),
    SKILL: setBuild("6929987040"),
    TURRETS: [...celestialTrapTurretArray, {
        POSITION: [15, 0, 0, 0, 360, 1],
        TYPE: [exports.paladinSunchipBody, {
            COLOR: 14
        }]
    }, {
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: [exports.paladinSwarmerBody, {
            COLOR: 14
        }]
    }]
}, exports.theiaSunchipBody = {
    PARENT: [exports.genericTank],
    LABEL: "Theia Sunchip",
    SHAPE: 7,
    SIZE: 10,
    BODY: {
        FOV: 100
    },
    CONTROLLERS: ["counterslowspin", "nearestDifferentMaster"],
    MAX_CHILDREN: 28,
    GUNS: []
};
for (let T = 0; T < 7; T++) exports.theiaSunchipBody.GUNS.push({
    POSITION: [3.5, 5, -1.2, 7.5, 0, 360 / 7 * T + 360 / 14, 0],
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.sunchip, g.summoner]),
        TYPE: [exports.sunchip, {
            INDEPENDENT: !0,
            MOTION_TYPE: "summoned",
            BODY: {
                FOV: 5
            }
        }],
        AUTOFIRE: !0,
        SYNCS_SKILLS: !0,
        STAT_CALCULATOR: gunCalcNames.necro
    }
});
exports.theiaTwisterTurret = {
    PARENT: [exports.spinner],
    LABEL: "",
    DANGER: 6,
    INDEPENDENT: !0,
    CONTROLLERS: ["onlyAcceptInArc", "canRepel", "nearestDifferentMaster"],
    STAT_NAMES: statnames.swarm,
    BODY: {
        FOV: 10 * base.FOV
    }
}, exports.theiaTwisterBody = {
    PARENT: [exports.genericTank],
    LABEL: "Theia Twister",
    SHAPE: 5,
    SKILL: setBuild("5555555555"),
    SIZE: 10,
    CONTROLLERS: ["slowSpin", "alwaysFire"],
    INDEPENDENT: !0,
    TURRETS: [{
        POSITION: [10, 8, 0, 180, 120, 0],
        TYPE: exports.theiaTwisterTurret
    }, {
        POSITION: [10, 8, 0, 108, 120, 0],
        TYPE: exports.theiaTwisterTurret
    }, {
        POSITION: [10, 8, 0, 35, 120, 0],
        TYPE: exports.theiaTwisterTurret
    }, {
        POSITION: [10, 8, 0, -35, 120, 0],
        TYPE: exports.theiaTwisterTurret
    }, {
        POSITION: [10, 8, 0, -108, 120, 0],
        TYPE: exports.theiaTwisterTurret
    }]
}, exports.theia = {
    PARENT: [exports.miniboss],
    LABEL: "Celestial",
    NAME: "Theia",
    COLOR: 3,
    SHAPE: 9,
    SIZE: 40,
    VARIES_IN_SIZE: !1,
    VALUE: 1e6,
    BODY: bossStats({
        health: 3,
        speed: .5
    }),
    SKILL: setBuild("6929987040"),
    TURRETS: [...celestialTrapTurretArray, {
        POSITION: [15, 0, 0, 0, 360, 1],
        TYPE: [exports.theiaSunchipBody, {
            COLOR: 3
        }]
    }, {
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: [exports.theiaTwisterBody, {
            COLOR: 3
        }]
    }]
}, exports.rheaMinionBody = {
    PARENT: [exports.genericTank],
    LABEL: "Rhea Minion",
    SHAPE: 7,
    SIZE: 10,
    BODY: {
        FOV: 100
    },
    CONTROLLERS: ["counterslowspin", "nearestDifferentMaster"],
    MAX_CHILDREN: 21,
    GUNS: []
};
for (let T = 0; T < 7; T++) exports.rheaMinionBody.GUNS.push({
    POSITION: [3.5, 6, -1.2, 7.5, 0, 360 / 7 * T + 360 / 14, 0],
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.babyfactory, g.factory]),
        TYPE: [exports.minion, {
            INDEPENDENT: !0,
            BODY: {
                FOV: 5
            }
        }],
        AUTOFIRE: !0,
        SYNCS_SKILLS: !0
    }
});
exports.rheaRocketeerTurret = {
    PARENT: [exports.rocketeer],
    LABEL: "",
    DANGER: 6,
    INDEPENDENT: !0,
    CONTROLLERS: ["onlyAcceptInArc", "canRepel", "nearestDifferentMaster"],
    BODY: {
        FOV: 10 * base.FOV
    }
}, exports.rheaRocketeerBody = {
    PARENT: [exports.genericTank],
    LABEL: "Rhea Rocketeer",
    SHAPE: 5,
    SKILL: setBuild("5555555555"),
    SIZE: 10,
    CONTROLLERS: ["slowSpin", "alwaysFire"],
    INDEPENDENT: !0,
    TURRETS: [{
        POSITION: [10, 8, 0, 180, 120, 0],
        TYPE: exports.rheaRocketeerTurret
    }, {
        POSITION: [10, 8, 0, 108, 120, 0],
        TYPE: exports.rheaRocketeerTurret
    }, {
        POSITION: [10, 8, 0, 35, 120, 0],
        TYPE: exports.rheaRocketeerTurret
    }, {
        POSITION: [10, 8, 0, -35, 120, 0],
        TYPE: exports.rheaRocketeerTurret
    }, {
        POSITION: [10, 8, 0, -108, 120, 0],
        TYPE: exports.rheaRocketeerTurret
    }]
}, exports.rhea = {
    PARENT: [exports.miniboss],
    LABEL: "Celestial",
    NAME: "Rhea",
    COLOR: 6,
    SHAPE: 9,
    SIZE: 40,
    VARIES_IN_SIZE: !1,
    VALUE: 1e6,
    BODY: bossStats({
        health: 3,
        speed: .5
    }),
    SKILL: setBuild("6929987040"),
    TURRETS: [...celestialTrapTurretArray, {
        POSITION: [15, 0, 0, 0, 360, 1],
        TYPE: [exports.rheaMinionBody, {
            COLOR: 6
        }]
    }, {
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: [exports.rheaRocketeerBody, {
            COLOR: 6
        }]
    }]
}, exports.athenaCDroneBody = {
    PARENT: [exports.genericTank],
    LABEL: "Athena Drone",
    SHAPE: 7,
    SIZE: 10,
    BODY: {
        FOV: 100
    },
    CONTROLLERS: ["counterslowspin", "nearestDifferentMaster"],
    MAX_CHILDREN: 28,
    GUNS: []
};
for (let T = 0; T < 7; T++) exports.athenaCDroneBody.GUNS.push({
    POSITION: [4.5, 6, 1.2, 7.5, 0, 360 / 7 * T + 360 / 14, 0],
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: [exports.circleDrone, {
            INDEPENDENT: !0,
            BODY: {
                FOV: 5
            }
        }],
        AUTOFIRE: !0,
        SYNCS_SKILLS: !0
    }
});
exports.athenaTripletTurret = {
    PARENT: [exports.triple],
    LABEL: "",
    DANGER: 6,
    INDEPENDENT: !0,
    CONTROLLERS: ["onlyAcceptInArc", "canRepel", "nearestDifferentMaster"],
    BODY: {
        FOV: 10 * base.FOV
    }
}, exports.athenaTripletBody = {
    PARENT: [exports.genericTank],
    LABEL: "Athena Triplet",
    SHAPE: 5,
    SKILL: setBuild("5555555555"),
    SIZE: 10,
    CONTROLLERS: ["slowSpin", "alwaysFire"],
    INDEPENDENT: !0,
    TURRETS: [{
        POSITION: [10, 8, 0, 180, 120, 0],
        TYPE: exports.athenaTripletTurret
    }, {
        POSITION: [10, 8, 0, 108, 120, 0],
        TYPE: exports.athenaTripletTurret
    }, {
        POSITION: [10, 8, 0, 35, 120, 0],
        TYPE: exports.athenaTripletTurret
    }, {
        POSITION: [10, 8, 0, -35, 120, 0],
        TYPE: exports.athenaTripletTurret
    }, {
        POSITION: [10, 8, 0, -108, 120, 0],
        TYPE: exports.athenaTripletTurret
    }]
}, exports.athena = {
    PARENT: [exports.miniboss],
    LABEL: "Celestial",
    NAME: "Athena",
    COLOR: 5,
    SHAPE: 9,
    SIZE: 40,
    VARIES_IN_SIZE: !1,
    VALUE: 1e6,
    BODY: bossStats({
        health: 3,
        speed: .5
    }),
    SKILL: setBuild("6929987040"),
    TURRETS: [...celestialTrapTurretArray, {
        POSITION: [15, 0, 0, 0, 360, 1],
        TYPE: [exports.athenaCDroneBody, {
            COLOR: 5
        }]
    }, {
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: [exports.athenaTripletBody, {
            COLOR: 5
        }]
    }]
}, exports.kierreSunchipBody = {
    PARENT: [exports.genericTank],
    LABEL: "Kierre Sunchip",
    SHAPE: 7,
    SIZE: 10,
    BODY: {
        FOV: 100
    },
    CONTROLLERS: ["counterslowspin", "nearestDifferentMaster"],
    MAX_CHILDREN: 28,
    GUNS: []
};
for (let T = 0; T < 7; T++) exports.kierreSunchipBody.GUNS.push({
    POSITION: [4.5, 6, 1.2, 7.5, 0, 360 / 7 * T + 360 / 14, 0],
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: [exports.sunchip, {
            INDEPENDENT: !0,
            BODY: {
                FOV: 5
            }
        }],
        AUTOFIRE: !0,
        SYNCS_SKILLS: !0
    }
});
exports.kierreMicrogunTurret = {
    PARENT: [exports.micro],
    LABEL: "",
    DANGER: 6,
    INDEPENDENT: !0,
    CONTROLLERS: ["onlyAcceptInArc", "canRepel", "nearestDifferentMaster"],
    BODY: {
        FOV: 10 * base.FOV
    }
}, exports.kierreMicrogunBody = {
    PARENT: [exports.genericTank],
    LABEL: "Kierre Microgun",
    SHAPE: 5,
    SKILL: setBuild("5555555555"),
    SIZE: 10,
    CONTROLLERS: ["slowSpin", "alwaysFire"],
    INDEPENDENT: !0,
    TURRETS: [{
        POSITION: [10, 8, 0, 180, 120, 0],
        TYPE: exports.kierreMicrogunTurret
    }, {
        POSITION: [10, 8, 0, 108, 120, 0],
        TYPE: exports.kierreMicrogunTurret
    }, {
        POSITION: [10, 8, 0, 35, 120, 0],
        TYPE: exports.kierreMicrogunTurret
    }, {
        POSITION: [10, 8, 0, -35, 120, 0],
        TYPE: exports.kierreMicrogunTurret
    }, {
        POSITION: [10, 8, 0, -108, 120, 0],
        TYPE: exports.kierreMicrogunTurret
    }]
}, exports.kierre = {
    PARENT: [exports.miniboss],
    LABEL: "Celestial",
    NAME: "Kierre",
    COLOR: 113,
    SHAPE: 9,
    SIZE: 40,
    VARIES_IN_SIZE: !1,
    VALUE: 1e6,
    BODY: bossStats({
        health: 3,
        speed: .5
    }),
    SKILL: setBuild("6929987040"),
    TURRETS: [...celestialTrapTurretArray, {
        POSITION: [15, 0, 0, 0, 360, 1],
        TYPE: [exports.kierreSunchipBody, {
            COLOR: 113
        }]
    }, {
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: [exports.kierreMicrogunBody, {
            COLOR: 113
        }]
    }]
}, exports.freyjaCruiserTurret = {
    PARENT: [exports.genericTank],
    LABEL: "",
    DANGER: 6,
    INDEPENDENT: !0,
    CONTROLLERS: ["nearestDifferentMaster"],
    STAT_NAMES: statnames.swarm,
    BODY: {
        FOV: 10 * base.FOV
    },
    GUNS: [{
        POSITION: [7, 7.5, .6, 7, 4, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [7, 7.5, .6, 7, -4, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }]
}, exports.freyjaCruiserBody = {
    PARENT: [exports.genericTank],
    LABEL: "Freyja Swarm",
    SHAPE: 7,
    SIZE: 10,
    SKILL: setBuild("5555550555"),
    CONTROLLERS: ["counterslowspin"],
    TURRETS: [{
        POSITION: [8, 9, 0, 180, 180, 0],
        TYPE: exports.freyjaCruiserTurret
    }, {
        POSITION: [8, 9, 0, 900 / 7, 180, 0],
        TYPE: exports.freyjaCruiserTurret
    }, {
        POSITION: [8, 9, 0, 540 / 7, 180, 0],
        TYPE: exports.freyjaCruiserTurret
    }, {
        POSITION: [8, 9, 0, 180 / 7, 180, 0],
        TYPE: exports.freyjaCruiserTurret
    }, {
        POSITION: [8, 9, 0, -180 / 7, 180, 0],
        TYPE: exports.freyjaCruiserTurret
    }, {
        POSITION: [8, 9, 0, -540 / 7, 180, 0],
        TYPE: exports.freyjaCruiserTurret
    }, {
        POSITION: [8, 9, 0, -900 / 7, 180, 0],
        TYPE: exports.freyjaCruiserTurret
    }]
}, exports.freyjaGunnerBody = {
    PARENT: [exports.genericTank],
    LABEL: "Freyja Gunner",
    SHAPE: 5,
    SKILL: setBuild("5555555555"),
    SIZE: 10,
    CONTROLLERS: ["slowSpin", "alwaysFire"],
    INDEPENDENT: !0,
    TURRETS: [{
        POSITION: [10, 8, 0, 180, 120, 0],
        TYPE: exports.auto4gun
    }, {
        POSITION: [10, 8, 0, 108, 120, 0],
        TYPE: exports.auto4gun
    }, {
        POSITION: [10, 8, 0, 35, 120, 0],
        TYPE: exports.auto4gun
    }, {
        POSITION: [10, 8, 0, -35, 120, 0],
        TYPE: exports.auto4gun
    }, {
        POSITION: [10, 8, 0, -108, 120, 0],
        TYPE: exports.auto4gun
    }]
}, exports.freyja = {
    PARENT: [exports.miniboss],
    LABEL: "Celestial",
    NAME: "Freyja",
    COLOR: 1,
    SHAPE: 9,
    SIZE: 40,
    VARIES_IN_SIZE: !1,
    VALUE: 1e6,
    BODY: bossStats({
        health: 3,
        speed: .5
    }),
    SKILL: setBuild("6929987040"),
    TURRETS: [...celestialTrapTurretArray, {
        POSITION: [15, 0, 0, 0, 360, 1],
        TYPE: [exports.freyjaCruiserBody, {
            COLOR: 1
        }]
    }, {
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: [exports.freyjaGunnerBody, {
            COLOR: 1
        }]
    }]
}, exports.zaphkielDroneBody = {
    PARENT: [exports.genericTank],
    LABEL: "Zaphkiel Drone",
    SHAPE: 7,
    SIZE: 10,
    BODY: {
        FOV: 100
    },
    CONTROLLERS: ["counterslowspin"],
    MAX_CHILDREN: 28,
    GUNS: []
};
for (let T = 0; T < 7; T++) exports.zaphkielDroneBody.GUNS.push({
    POSITION: [4, 6.5, 1.2, 7.5, 0, 360 / 7 * T + 360 / 14, 0],
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone]),
        TYPE: [exports.drone, {
            INDEPENDENT: !0,
            BODY: {
                FOV: 5
            }
        }],
        AUTOFIRE: !0,
        SYNCS_SKILLS: !0,
        STAT_CALCULATOR: gunCalcNames.drone
    }
});
exports.zaphkielSkimmer = {
    PARENT: [exports.genericTank],
    CONTROLLERS: ["onlyAcceptInArc", "nearestDifferentMaster"],
    BODY: {
        FOV: 1.15 * base.FOV
    },
    LABEL: "Skimmer",
    DANGER: 7,
    INDEPENDENT: !0,
    GUNS: [{
        POSITION: [10, 14, -.5, 9, 0, 0, 0]
    }, {
        POSITION: [17, 15, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, [1.75, 1, 1, 1, 1, 1, 1, 1, 1, .4, 1, 1, 1]]),
            TYPE: exports.hypermissile,
            STAT_CALCULATOR: gunCalcNames.sustained
        }
    }]
}, exports.zaphkielSkimmerBody = {
    PARENT: [exports.genericTank],
    LABEL: "Zaphkiel Skimmer",
    SHAPE: 5,
    SIZE: 10,
    CONTROLLERS: ["slowSpin"],
    SKILL: setBuild("5555555555"),
    INDEPENDENT: !0,
    TURRETS: [{
        POSITION: [9, 8, 0, 180, 180, 0],
        TYPE: exports.zaphkielSkimmer
    }, {
        POSITION: [9, 8, 0, 108, 180, 0],
        TYPE: exports.zaphkielSkimmer
    }, {
        POSITION: [9, 8, 0, 35, 180, 0],
        TYPE: exports.zaphkielSkimmer
    }, {
        POSITION: [9, 8, 0, -35, 180, 0],
        TYPE: exports.zaphkielSkimmer
    }, {
        POSITION: [9, 8, 0, -108, 180, 0],
        TYPE: exports.zaphkielSkimmer
    }]
}, exports.zaphkiel = {
    PARENT: [exports.miniboss],
    LABEL: "Celestial",
    NAME: "Zaphkiel",
    COLOR: 2,
    SHAPE: 9,
    SIZE: 40,
    VARIES_IN_SIZE: !1,
    VALUE: 1e6,
    BODY: bossStats({
        health: 3,
        speed: .5
    }),
    SKILL: setBuild("6929987040"),
    TURRETS: [...celestialTrapTurretArray, {
        POSITION: [15, 0, 0, 0, 360, 1],
        TYPE: [exports.zaphkielDroneBody, {
            COLOR: 2
        }]
    }, {
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: [exports.zaphkielSkimmerBody, {
            COLOR: 2
        }]
    }]
}, exports.cronusSingle = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: 1.15 * base.FOV
    },
    LABEL: "Single",
    DANGER: 7,
    INDEPENDENT: !0,
    GUNS: [{
        POSITION: [19, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.single]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }]
}, exports.cronusSingleBody = {
    PARENT: [exports.genericTank],
    LABEL: "Cronus Single",
    SHAPE: 7,
    SIZE: 10,
    SKILL: setBuild("5555550555"),
    CONTROLLERS: ["counterslowspin"],
    TURRETS: [{
        POSITION: [8, 9, 0, 180, 180, 0],
        TYPE: exports.cronusSingle
    }, {
        POSITION: [8, 9, 0, 900 / 7, 180, 0],
        TYPE: exports.cronusSingle
    }, {
        POSITION: [8, 9, 0, 540 / 7, 180, 0],
        TYPE: exports.cronusSingle
    }, {
        POSITION: [8, 9, 0, 180 / 7, 180, 0],
        TYPE: exports.cronusSingle
    }, {
        POSITION: [8, 9, 0, -180 / 7, 180, 0],
        TYPE: exports.cronusSingle
    }, {
        POSITION: [8, 9, 0, -540 / 7, 180, 0],
        TYPE: exports.cronusSingle
    }, {
        POSITION: [8, 9, 0, -900 / 7, 180, 0],
        TYPE: exports.cronusSingle
    }]
}, exports.cronusNailgun = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: 1.15 * base.FOV
    },
    LABEL: "Nailgun",
    DANGER: 7,
    INDEPENDENT: !0,
    GUNS: [{
        POSITION: [19, 2, 1, 0, -2.5, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [20, 2, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }]
}, exports.cronusNailgunBody = {
    PARENT: [exports.genericTank],
    LABEL: "Cronus Nailgun",
    SHAPE: 5,
    SIZE: 10,
    CONTROLLERS: ["slowSpin"],
    SKILL: setBuild("5555555555"),
    INDEPENDENT: !0,
    TURRETS: [{
        POSITION: [9, 8, 0, 180, 180, 0],
        TYPE: exports.cronusNailgun
    }, {
        POSITION: [9, 8, 0, 108, 180, 0],
        TYPE: exports.cronusNailgun
    }, {
        POSITION: [9, 8, 0, 35, 180, 0],
        TYPE: exports.cronusNailgun
    }, {
        POSITION: [9, 8, 0, -35, 180, 0],
        TYPE: exports.cronusNailgun
    }, {
        POSITION: [9, 8, 0, -108, 180, 0],
        TYPE: exports.cronusNailgun
    }]
}, exports.cronus = {
    PARENT: [exports.miniboss],
    LABEL: "Celestial",
    NAME: "Cronus",
    COLOR: 18,
    SHAPE: 9,
    SIZE: 40,
    VARIES_IN_SIZE: !1,
    VALUE: 1e6,
    BODY: bossStats({
        health: 3,
        speed: .5
    }),
    SKILL: setBuild("6929987040"),
    TURRETS: [...celestialTrapTurretArray, {
        POSITION: [15, 0, 0, 0, 360, 1],
        TYPE: [exports.cronusSingleBody, {
            COLOR: 18
        }]
    }, {
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: [exports.cronusNailgunBody, {
            COLOR: 18
        }]
    }]
}, exports.urielMinionBody = {
    PARENT: [exports.genericTank],
    LABEL: "Uriel Minion",
    SHAPE: 7,
    SIZE: 10,
    BODY: {
        FOV: 100
    },
    CONTROLLERS: ["counterslowspin"],
    MAX_CHILDREN: 12,
    GUNS: []
};
for (let T = 0; T < 7; T++) exports.urielMinionBody.GUNS.push({
    POSITION: [4, 6.5, -1.6, 7.5, 0, 360 / 7 * T + 360 / 14, 0],
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: [exports.minion, {
            INDEPENDENT: !0,
            BODY: {
                FOV: 5
            }
        }],
        AUTOFIRE: !0,
        SYNCS_SKILLS: !0,
        STAT_CALCULATOR: gunCalcNames.drone
    }
});
exports.urielAnnihilator = {
    PARENT: [exports.genericTank],
    CONTROLLERS: ["onlyAcceptInArc", "nearestDifferentMaster"],
    BODY: {
        FOV: 1.15 * base.FOV
    },
    LABEL: "Annihilator",
    DANGER: 7,
    INDEPENDENT: !0,
    GUNS: [{
        POSITION: [20.5, 19.5, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
            TYPE: exports.bullet
        }
    }]
}, exports.urielAnnihilatorBody = {
    PARENT: [exports.genericTank],
    LABEL: "Uriel Annihilator",
    SHAPE: 5,
    SIZE: 10,
    CONTROLLERS: ["slowSpin"],
    SKILL: setBuild("5555555555"),
    INDEPENDENT: !0,
    TURRETS: [{
        POSITION: [9, 8, 0, 180, 180, 0],
        TYPE: exports.urielAnnihilator
    }, {
        POSITION: [9, 8, 0, 108, 180, 0],
        TYPE: exports.urielAnnihilator
    }, {
        POSITION: [9, 8, 0, 35, 180, 0],
        TYPE: exports.urielAnnihilator
    }, {
        POSITION: [9, 8, 0, -35, 180, 0],
        TYPE: exports.urielAnnihilator
    }, {
        POSITION: [9, 8, 0, -108, 180, 0],
        TYPE: exports.urielAnnihilator
    }]
}, exports.uriel = {
    PARENT: [exports.miniboss],
    LABEL: "Celestial",
    NAME: "Uriel",
    COLOR: 22,
    SHAPE: 9,
    SIZE: 40,
    VARIES_IN_SIZE: !1,
    VALUE: 1e6,
    BODY: bossStats({
        health: 3,
        speed: .5
    }),
    SKILL: setBuild("6929987040"),
    TURRETS: [...celestialTrapTurretArray, {
        POSITION: [15, 0, 0, 0, 360, 1],
        TYPE: [exports.urielMinionBody, {
            COLOR: 22
        }]
    }, {
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: [exports.urielAnnihilatorBody, {
            COLOR: 22
        }]
    }]
}, exports.gaeaAssassinBody = {
    PARENT: [exports.genericTank],
    LABEL: "Gaeo Assassin",
    SHAPE: 11,
    SIZE: 10,
    SKILL: setBuild("5555550555"),
    CONTROLLERS: ["counterslowspin"],
    GUNS: [],
    TURRETS: [{
        POSITION: [0, 0, 0, 360, 360, 1],
        TYPE: [exports.boomer, {
            COLOR: 14
        }]
    }]
};
for (let T = 0; T < 11; T++) exports.gaeaAssassinBody.TURRETS.push({
    POSITION: [5, 9, 0, 360 * T / 11, 190, 0],
    TYPE: [exports.assassin, {
        COLOR: 5
    }]
});
exports.gaeaMixedBody = {
    PARENT: [exports.genericTank],
    LABEL: "Gaea Mixed",
    SHAPE: 7,
    SIZE: 10,
    SKILL: setBuild("5555550555"),
    CONTROLLERS: ["counterslowspin"],
    TURRETS: [{
        POSITION: [8, 9, 0, 180, 190, 0],
        TYPE: exports.director
    }, {
        POSITION: [8, 9, 0, 900 / 7, 190, 0],
        TYPE: exports.twin
    }, {
        POSITION: [8, 9, 0, 540 / 7, 190, 0],
        TYPE: exports.machine
    }, {
        POSITION: [8, 9, 0, 180 / 7, 190, 0],
        TYPE: exports.trapper
    }, {
        POSITION: [8, 9, 0, -180 / 7, 190, 0],
        TYPE: exports.hiveshooter
    }, {
        POSITION: [8, 9, 0, -540 / 7, 190, 0],
        TYPE: exports.nailgun
    }, {
        POSITION: [8, 9, 0, -900 / 7, 190, 0],
        TYPE: exports.launcher
    }]
}, exports.gaeaBoomerBody = {
    PARENT: [exports.genericTank],
    LABEL: "Gaea Boomer",
    SHAPE: 5,
    SKILL: setBuild("5555555555"),
    SIZE: 10,
    CONTROLLERS: ["slowSpin"],
    INDEPENDENT: !0,
    TURRETS: [{
        POSITION: [10, 8, 0, 180, 190, 0],
        TYPE: exports.boomer
    }, {
        POSITION: [10, 8, 0, 108, 190, 0],
        TYPE: exports.boomer
    }, {
        POSITION: [10, 8, 0, 35, 190, 0],
        TYPE: exports.boomer
    }, {
        POSITION: [10, 8, 0, -35, 190, 0],
        TYPE: exports.boomer
    }, {
        POSITION: [10, 8, 0, -108, 190, 0],
        TYPE: exports.boomer
    }]
}, exports.gaea = {
    PARENT: [exports.miniboss],
    LABEL: "Eternal",
    COLOR: 5,
    SHAPE: 11,
    SIZE: 50,
    VARIES_IN_SIZE: !1,
    VALUE: 1e6,
    BODY: bossStats({
        health: 3,
        speed: .5
    }),
    SKILL: setBuild("6929987040"),
    TURRETS: [...kronosTrapTurretArray, {
        POSITION: [15, 0, 0, 0, 360, 1],
        TYPE: [exports.gaeaAssassinBody, {
            COLOR: 5
        }]
    }, {
        POSITION: [10, 0, 0, 0, 360, 1],
        TYPE: [exports.gaeaMixedBody, {
            COLOR: 5
        }]
    }, {
        POSITION: [6, 0, 0, 0, 360, 1],
        TYPE: [exports.gaeaBoomerBody, {
            COLOR: 5
        }]
    }]
}, exports.atlasDualBody = {
    PARENT: [exports.genericTank],
    LABEL: "Atlas Dual",
    SHAPE: 11,
    SIZE: 10,
    SKILL: setBuild("5555550555"),
    CONTROLLERS: ["counterslowspin"],
    GUNS: [],
    TURRETS: [{
        POSITION: [0, 0, 0, 360, 360, 1],
        TYPE: [exports.dual, {
            COLOR: -3
        }]
    }]
};
for (let T = 0; T < 11; T++) exports.atlasDualBody.TURRETS.push({
    POSITION: [5, 9, 0, 360 * T / 11, 190, 0],
    TYPE: [exports.dual, {
        COLOR: -3
    }]
});
exports.atlasSniperBody = {
    PARENT: [exports.genericTank],
    LABEL: "Atlas Sniper",
    SHAPE: 7,
    SIZE: 10,
    SKILL: setBuild("5555550555"),
    CONTROLLERS: ["counterslowspin"],
    TURRETS: [{
        POSITION: [8, 9, 0, 180, 190, 0],
        TYPE: exports.sniper
    }, {
        POSITION: [8, 9, 0, 900 / 7, 190, 0],
        TYPE: exports.sniper
    }, {
        POSITION: [8, 9, 0, 540 / 7, 190, 0],
        TYPE: exports.sniper
    }, {
        POSITION: [8, 9, 0, 180 / 7, 190, 0],
        TYPE: exports.sniper
    }, {
        POSITION: [8, 9, 0, -180 / 7, 190, 0],
        TYPE: exports.sniper
    }, {
        POSITION: [8, 9, 0, -540 / 7, 190, 0],
        TYPE: exports.sniper
    }, {
        POSITION: [8, 9, 0, -900 / 7, 190, 0],
        TYPE: exports.sniper
    }]
}, exports.atlasSprayerBody = {
    PARENT: [exports.genericTank],
    LABEL: "Atlas Sprayer",
    SHAPE: 5,
    SKILL: setBuild("5555555555"),
    SIZE: 10,
    CONTROLLERS: ["slowSpin"],
    INDEPENDENT: !0,
    TURRETS: [{
        POSITION: [10, 8, 0, 180, 190, 0],
        TYPE: exports.sprayTurret
    }, {
        POSITION: [10, 8, 0, 108, 190, 0],
        TYPE: exports.sprayTurret
    }, {
        POSITION: [10, 8, 0, 35, 190, 0],
        TYPE: exports.sprayTurret
    }, {
        POSITION: [10, 8, 0, -35, 190, 0],
        TYPE: exports.sprayTurret
    }, {
        POSITION: [10, 8, 0, -108, 190, 0],
        TYPE: exports.sprayTurret
    }]
}, exports.atlas = {
    PARENT: [exports.miniboss],
    LABEL: "Eternal",
    LABELSWITCH: "Atlas",
    COLOR: 24,
    SHAPE: 11,
    SIZE: 50,
    VARIES_IN_SIZE: !1,
    VALUE: 1e6,
    BODY: bossStats({
        health: 3,
        speed: .5
    }),
    SKILL: setBuild("6929987040"),
    TURRETS: [...kronosTrapTurretArray, {
        POSITION: [15, 0, 0, 0, 360, 1],
        TYPE: [exports.atlasDualBody, {
            COLOR: 24
        }]
    }, {
        POSITION: [10, 0, 0, 0, 360, 1],
        TYPE: [exports.atlasSniperBody, {
            COLOR: 24
        }]
    }, {
        POSITION: [6, 0, 0, 0, 360, 1],
        TYPE: [exports.atlasSprayerBody, {
            COLOR: 24,
            INDEPENDENT: !0
        }]
    }]
}, exports.arkeminesMiniBody = {
    PARENT: [exports.genericTank],
    LABEL: "Arkemines Minigun",
    SHAPE: 11,
    SIZE: 10,
    SKILL: setBuild("5555550555"),
    CONTROLLERS: ["counterslowspin"],
    GUNS: [],
    TURRETS: [{
        POSITION: [0, 0, 0, 360, 360, 1],
        TYPE: [exports.assassin, {
            COLOR: -3
        }]
    }]
};
for (let T = 0; T < 11; T++) exports.arkeminesMiniBody.TURRETS.push({
    POSITION: [5, 9, 0, 360 * T / 11, 190, 0],
    TYPE: [exports.mini, {
        COLOR: -3
    }]
});
exports.arkeminesMixedBody = {
    PARENT: [exports.genericTank],
    LABEL: "Arkemines Mixed",
    SHAPE: 7,
    SIZE: 10,
    SKILL: setBuild("5555550555"),
    CONTROLLERS: ["counterslowspin"],
    TURRETS: [{
        POSITION: [8, 9, 0, 180, 190, 0],
        TYPE: exports.necromancer
    }, {
        POSITION: [8, 9, 0, 900 / 7, 190, 0],
        TYPE: exports.shotgun2
    }, {
        POSITION: [8, 9, 0, 540 / 7, 190, 0],
        TYPE: exports.boomer
    }, {
        POSITION: [8, 9, 0, 180 / 7, 190, 0],
        TYPE: exports.carrier
    }, {
        POSITION: [8, 9, 0, -180 / 7, 190, 0],
        TYPE: exports.hiveshooter
    }, {
        POSITION: [8, 9, 0, -540 / 7, 190, 0],
        TYPE: exports.nailgun
    }, {
        POSITION: [8, 9, 0, -900 / 7, 190, 0],
        TYPE: exports.director
    }]
}, exports.arkeminesBoomerBody = {
    PARENT: [exports.genericTank],
    LABEL: "Arkemines Boomer",
    SHAPE: 5,
    SKILL: setBuild("5555555555"),
    SIZE: 10,
    CONTROLLERS: ["slowSpin"],
    INDEPENDENT: !0,
    TURRETS: [{
        POSITION: [10, 8, 0, 180, 190, 0],
        TYPE: exports.factory
    }, {
        POSITION: [10, 8, 0, 108, 190, 0],
        TYPE: exports.factory
    }, {
        POSITION: [10, 8, 0, 35, 190, 0],
        TYPE: exports.factory
    }, {
        POSITION: [10, 8, 0, -35, 190, 0],
        TYPE: exports.factory
    }, {
        POSITION: [10, 8, 0, -108, 190, 0],
        TYPE: exports.factory
    }]
}, exports.arkemines = {
    PARENT: [exports.miniboss],
    LABEL: "Eternal",
    LABELSWITCH: "Arkemines",
    COLOR: 14,
    SHAPE: 11,
    SIZE: 50,
    VARIES_IN_SIZE: !1,
    VALUE: 1e6,
    BODY: bossStats({
        health: 3,
        speed: .5
    }),
    SKILL: setBuild("6929987040"),
    TURRETS: [...kronosTrapTurretArray, {
        POSITION: [15, 0, 0, 0, 360, 1],
        TYPE: [exports.arkeminesMiniBody, {
            COLOR: 14
        }]
    }, {
        POSITION: [10, 0, 0, 0, 360, 1],
        TYPE: [exports.arkeminesMixedBody, {
            COLOR: 14
        }]
    }, {
        POSITION: [6, 0, 0, 0, 360, 1],
        TYPE: [exports.arkeminesBoomerBody, {
            COLOR: 14,
            INDEPENDENT: !0
        }]
    }]
}, exports.heliosMiniBody = {
    PARENT: [exports.genericTank],
    LABEL: "Helios Minigun",
    SHAPE: 11,
    SIZE: 10,
    SKILL: setBuild("5555550555"),
    CONTROLLERS: ["counterslowspin"],
    GUNS: [],
    TURRETS: [{
        POSITION: [0, 0, 0, 360, 360, 1],
        TYPE: [exports.assassin, {
            COLOR: -3
        }]
    }]
};
for (let T = 0; T < 11; T++) exports.heliosMiniBody.TURRETS.push({
    POSITION: [5, 9, 0, 360 * T / 11, 190, 0],
    TYPE: [exports.anni, {
        COLOR: -3
    }]
});
exports.heliosMixedBody = {
    PARENT: [exports.genericTank],
    LABEL: "Helios Mixed",
    SHAPE: 7,
    SIZE: 10,
    SKILL: setBuild("5555550555"),
    CONTROLLERS: ["counterslowspin"],
    GUNS: [{
        POSITION: [11, 6.5, -1.4, 0, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.babyfactory, g.factory]),
            TYPE: [exports.evolvedsquare, {
                INDEPENDENT: !0
            }],
            AUTOFIRE: !0,
            MAX_CHILDREN: 3
        }
    }, {
        POSITION: [11, 6.5, -1.4, 0, 0, 900 / 7, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.babyfactory, g.factory]),
            TYPE: [exports.evolvedsquare, {
                INDEPENDENT: !0
            }],
            AUTOFIRE: !0,
            MAX_CHILDREN: 3
        }
    }, {
        POSITION: [11, 6.5, -1.4, 0, 0, 540 / 7, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.babyfactory, g.factory]),
            TYPE: [exports.evolvedsquare, {
                INDEPENDENT: !0
            }],
            AUTOFIRE: !0,
            MAX_CHILDREN: 3
        }
    }, {
        POSITION: [11, 6.5, -1.4, 0, 0, 180 / 7, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.babyfactory, g.factory]),
            TYPE: [exports.evolvedsquare, {
                INDEPENDENT: !0
            }],
            AUTOFIRE: !0,
            MAX_CHILDREN: 3
        }
    }, {
        POSITION: [11, 6.5, -1.4, 0, 0, -180 / 7, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.babyfactory, g.factory]),
            TYPE: [exports.evolvedsquare, {
                INDEPENDENT: !0
            }],
            AUTOFIRE: !0,
            MAX_CHILDREN: 3
        }
    }, {
        POSITION: [11, 6.5, -1.4, 0, 0, -540 / 7, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.babyfactory, g.factory]),
            TYPE: [exports.evolvedsquare, {
                INDEPENDENT: !0
            }],
            AUTOFIRE: !0,
            MAX_CHILDREN: 3
        }
    }, {
        POSITION: [11, 6.5, -1.4, 0, 0, -900 / 7, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.babyfactory, g.factory]),
            TYPE: [exports.evolvedsquare, {
                INDEPENDENT: !0
            }],
            AUTOFIRE: !0,
            MAX_CHILDREN: 3
        }
    }]
}, exports.heliosBoomerBody = {
    PARENT: [exports.genericTank],
    LABEL: "Helios Boomer",
    SHAPE: 5,
    SKILL: setBuild("5555555555"),
    SIZE: 10,
    CONTROLLERS: ["slowSpin"],
    INDEPENDENT: !0,
    TURRETS: [{
        POSITION: [10, 8, 0, 180, 190, 0],
        TYPE: exports.ranger
    }, {
        POSITION: [10, 8, 0, 108, 190, 0],
        TYPE: exports.ranger
    }, {
        POSITION: [10, 8, 0, 35, 190, 0],
        TYPE: exports.ranger
    }, {
        POSITION: [10, 8, 0, -35, 190, 0],
        TYPE: exports.ranger
    }, {
        POSITION: [10, 8, 0, -108, 190, 0],
        TYPE: exports.ranger
    }]
}, exports.helios = {
    PARENT: [exports.miniboss],
    LABEL: "Eternal",
    LABELSWITCH: "Helios",
    COLOR: 36,
    SHAPE: 11,
    SIZE: 50,
    VARIES_IN_SIZE: !1,
    VALUE: 1e6,
    BODY: bossStats({
        health: 3,
        speed: .5
    }),
    SKILL: setBuild("6929987040"),
    TURRETS: [...kronosTrapTurretArray, {
        POSITION: [15, 0, 0, 0, 360, 1],
        TYPE: [exports.heliosMiniBody, {
            COLOR: 36
        }]
    }, {
        POSITION: [10, 0, 0, 0, 360, 1],
        TYPE: [exports.heliosMixedBody, {
            COLOR: 36
        }]
    }, {
        POSITION: [6, 0, 0, 0, 360, 1],
        TYPE: [exports.heliosBoomerBody, {
            COLOR: 36,
            INDEPENDENT: !0
        }]
    }]
}, exports.kronosMissileTurret = {
    PARENT: [exports.genericTank],
    LABEL: "Skimmer",
    GUNS: [{
        POSITION: [23, 10, 2, 0, 0, 0, 1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.lessreload, g.lessreload, g.lessreload]),
            TYPE: exports.kronosMissile
        }
    }, {
        POSITION: [12, 17, 1.3, 6, 0, 0, 0]
    }]
}, exports.kronosMissileBody = {
    PARENT: [exports.genericTank],
    LABEL: "Kronos Missile",
    SHAPE: 11,
    SIZE: 10,
    SKILL: setBuild("5555550555"),
    CONTROLLERS: ["counterslowspin"],
    GUNS: [],
    TURRETS: [{
        POSITION: [0, 0, 0, 360, 360, 1],
        TYPE: [exports.boomer, {
            COLOR: 14
        }]
    }]
};
for (let T = 0; T < 11; T++) exports.kronosMissileBody.TURRETS.push({
    POSITION: [5, 9, 0, 360 * T / 11, 190, 0],
    TYPE: [exports.kronosMissileTurret, {
        COLOR: 6
    }]
});
exports.kronosCarrierBody = {
    PARENT: [exports.genericTank],
    LABEL: "Kronos Carrier",
    SHAPE: 7,
    SIZE: 10,
    SKILL: setBuild("5555550555"),
    CONTROLLERS: ["counterslowspin"],
    TURRETS: [{
        POSITION: [8, 9, 0, 180, 190, 0],
        TYPE: exports.carrier
    }, {
        POSITION: [8, 9, 0, 900 / 7, 190, 0],
        TYPE: exports.carrier
    }, {
        POSITION: [8, 9, 0, 540 / 7, 190, 0],
        TYPE: exports.carrier
    }, {
        POSITION: [8, 9, 0, 180 / 7, 190, 0],
        TYPE: exports.carrier
    }, {
        POSITION: [8, 9, 0, -180 / 7, 190, 0],
        TYPE: exports.carrier
    }, {
        POSITION: [8, 9, 0, -540 / 7, 190, 0],
        TYPE: exports.carrier
    }, {
        POSITION: [8, 9, 0, -900 / 7, 190, 0],
        TYPE: exports.carrier
    }]
}, exports.kronosTripleBody = {
    PARENT: [exports.genericTank],
    LABEL: "Kronos Triplet",
    SHAPE: 5,
    SKILL: setBuild("5555555555"),
    SIZE: 10,
    CONTROLLERS: ["slowSpin"],
    INDEPENDENT: !0,
    TURRETS: [{
        POSITION: [10, 8, 0, 180, 190, 0],
        TYPE: exports.triple
    }, {
        POSITION: [10, 8, 0, 108, 190, 0],
        TYPE: exports.triple
    }, {
        POSITION: [10, 8, 0, 35, 190, 0],
        TYPE: exports.triple
    }, {
        POSITION: [10, 8, 0, -35, 190, 0],
        TYPE: exports.triple
    }, {
        POSITION: [10, 8, 0, -108, 190, 0],
        TYPE: exports.triple
    }]
}, exports.kronos = {
    PARENT: [exports.miniboss],
    LABEL: "Eternal",
    LABELSWITCH: "Kronos",
    COLOR: 6,
    SHAPE: 11,
    SIZE: 50,
    VARIES_IN_SIZE: !1,
    VALUE: 1e6,
    BODY: bossStats({
        health: 3,
        speed: .5
    }),
    SKILL: setBuild("6929987040"),
    TURRETS: [...kronosTrapTurretArray, {
        POSITION: [15, 0, 0, 0, 360, 1],
        TYPE: [exports.kronosMissileBody, {
            COLOR: 6
        }]
    }, {
        POSITION: [10, 0, 0, 0, 360, 1],
        TYPE: [exports.kronosCarrierBody, {
            COLOR: 6
        }]
    }, {
        POSITION: [6, 0, 0, 0, 360, 1],
        TYPE: [exports.kronosTripleBody, {
            COLOR: 6
        }]
    }]
}, exports.dominator = {
    PARENT: [exports.genericTank],
    LABEL: "Dominator",
    TYPE: "fixed",
    HEALTH_WITH_LEVEL: !1,
    DANGER: 10,
    SKILL: skillSet({
        rld: 1,
        dam: 1,
        pen: 1,
        str: 1,
        spd: 1
    }),
    BODY: {
        HEALTH: 10 * base.HEALTH,
        DAMAGE: 10 * base.DAMAGE,
        FOV: 1,
        PUSHABILITY: 0,
        SHIELD: 5 * base.SHIELD,
        DENSITY: 100
    },
    CONTROLLERS: ["nearestDifferentMaster"],
    DISPLAY_NAME: !0,
    SIZE: 30,
    TURRETS: [{
        POSITION: [22, 0, 0, 0, 360, 0],
        TYPE: exports.dominationBody
    }],
    CAN_BE_ON_LEADERBOARD: !1,
    GIVE_KILL_MESSAGE: !1,
    ACCEPTS_SCORE: !1,
    DOMTIME: !0
}, exports.sanctuary = {
    PARENT: [exports.genericTank],
    LABEL: "Sanctuary",
    TYPE: "fixed",
    HEALTH_WITH_LEVEL: !1,
    DANGER: 10,
    SKILL: skillSet({
        rld: 1,
        dam: 1,
        pen: 1,
        str: 1,
        spd: 1
    }),
    BODY: {
        HEALTH: 10 * base.HEALTH,
        DAMAGE: 10 * base.DAMAGE,
        FOV: 1,
        PUSHABILITY: 0,
        SHIELD: 5 * base.SHIELD,
        DENSITY: 100
    },
    CONTROLLERS: ["nearestDifferentMaster"],
    DISPLAY_NAME: !0,
    SIZE: 30,
    TURRETS: [{
        POSITION: [22, 0, 0, 0, 360, 0],
        TYPE: exports.dominationBody
    }],
    CAN_BE_ON_LEADERBOARD: !1,
    GIVE_KILL_MESSAGE: !1,
    ACCEPTS_SCORE: !1,
    DOMTIME: !0
}, exports.destroyerx = {
    LABEL: "",
    GUNS: [{
        POSITION: [15.25, 6.75, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.destroyDominator]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5, 6.75, -1.6, 6.75, 0, 0, 0]
    }]
}, exports.destroyerDominator = {
    LABEL: "Dominator",
    PARENT: [exports.dominator],
    FACING_TYPE: "autospin",
    TURRETS: [{
        POSITION: [22, 0, 0, 0, 360, 0],
        TYPE: exports.dominationBody
    }, {
        POSITION: [20, 0, 0, 0, 360, 0],
        TYPE: exports.destroyerx
    }]
}, exports.gunnerx = {
    LABEL: "",
    GUNS: [{
        POSITION: [14.25, 3, 1, 0, -2, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [14.25, 3, 1, 0, 2, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [15.85, 3, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5, 8.5, -1.6, 6.25, 0, 0, 0]
    }]
}, exports.gunnerDominator = {
    LABEL: "Dominator",
    PARENT: [exports.dominator],
    SKILL: skillSet({
        rld: 1,
        dam: 1,
        pen: 1,
        str: 1,
        spd: 1
    }),
    FACING_TYPE: "autospin",
    TURRETS: [{
        POSITION: [22, 0, 0, 0, 360, 0],
        TYPE: exports.dominationBody
    }, {
        POSITION: [20, 0, 0, 0, 360, 0],
        TYPE: exports.gunnerx
    }]
}, exports.antitank = {
    LABEL: "Anti-Tank Machine Gun",
    PARENT: [exports.genericTank],
    SKILL: skillSet({
        rld: 1,
        dam: 1,
        pen: 1,
        str: 1,
        spd: 1
    }),
    GUNS: [{
        POSITION: [14.25, 3, 1, 0, -2, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [14.25, 3, 1, 0, 2, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [15.85, 3, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5, 8.5, -1.6, 6.25, 0, 0, 0]
    }, {
        POSITION: [20, 8.5, 1, 0, 0, 270, 0]
    }, {
        POSITION: [20, 8.5, 1, 0, 0, 90, 0]
    }],
    TURRETS: [{
        POSITION: [15, 0, -20, 0, 360, 1],
        TYPE: exports.gunnerx
    }, {
        POSITION: [15, 0, 20, 0, 360, 1],
        TYPE: exports.gunnerx
    }, {
        POSITION: [22, 0, 0, 0, 360, 0],
        TYPE: exports.dominationBody
    }]
}, exports.trapperx = {
    LABEL: "",
    MAX_CHILDREN: 70,
    GUNS: [{
        POSITION: [3.5, 3.75, 1, 8, 0, 0, 0]
    }, {
        POSITION: [1.25, 3.75, 1.7, 12, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator, g.halfreload]),
            TYPE: exports.trap,
            AUTOFIRE: !0
        }
    }, {
        POSITION: [3.5, 3.75, 1, 8, 0, 45, 0]
    }, {
        POSITION: [1.25, 3.75, 1.7, 12, 0, 45, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator, g.halfreload]),
            TYPE: exports.trap,
            AUTOFIRE: !0
        }
    }, {
        POSITION: [3.5, 3.75, 1, 8, 0, 90, 0]
    }, {
        POSITION: [1.25, 3.75, 1.7, 12, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator, g.halfreload]),
            TYPE: exports.trap,
            AUTOFIRE: !0
        }
    }, {
        POSITION: [3.5, 3.75, 1, 8, 0, 135, 0]
    }, {
        POSITION: [1.25, 3.75, 1.7, 12, 0, 135, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator, g.halfreload]),
            TYPE: exports.trap,
            AUTOFIRE: !0
        }
    }, {
        POSITION: [3.5, 3.75, 1, 8, 0, 180, 0]
    }, {
        POSITION: [1.25, 3.75, 1.7, 12, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator, g.halfreload]),
            TYPE: exports.trap,
            AUTOFIRE: !0
        }
    }, {
        POSITION: [3.5, 3.75, 1, 8, 0, 225, 0]
    }, {
        POSITION: [1.25, 3.75, 1.7, 12, 0, 225, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator, g.halfreload]),
            TYPE: exports.trap,
            AUTOFIRE: !0
        }
    }, {
        POSITION: [3.5, 3.75, 1, 8, 0, 270, 0]
    }, {
        POSITION: [1.25, 3.75, 1.7, 12, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator, g.halfreload]),
            TYPE: exports.trap,
            AUTOFIRE: !0
        }
    }, {
        POSITION: [3.5, 3.75, 1, 8, 0, 315, 0]
    }, {
        POSITION: [1.25, 3.75, 1.7, 12, 0, 315, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator, g.halfreload]),
            TYPE: exports.trap,
            AUTOFIRE: !0
        }
    }]
}, exports.trapperDominator = {
    LABEL: "Dominator",
    PARENT: [exports.dominator],
    FACING_TYPE: "autospin",
    TURRETS: [{
        POSITION: [22, 0, 0, 0, 360, 0],
        TYPE: exports.dominationBody
    }, {
        POSITION: [20, 0, 0, 0, 0, 0],
        TYPE: exports.trapperx
    }]
}, exports.builderx = {
    LABEL: "",
    MAX_CHILDREN: 70,
    GUNS: [{
        POSITION: [14, 7, 1, 0, 0, 0, 0]
    }, {
        POSITION: [2, 7, 1.1, 14, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.halfreload, g.halfreload]),
            TYPE: exports.dominatorBlock,
            AUTOFIRE: !0
        }
    }, {
        POSITION: [14, 7, 1, 0, 0, 120, 0]
    }, {
        POSITION: [2, 7, 1.1, 14, 0, 120, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.halfreload, g.halfreload]),
            TYPE: exports.dominatorBlock,
            AUTOFIRE: !0
        }
    }, {
        POSITION: [14, 7, 1, 0, 0, 240, 0]
    }, {
        POSITION: [2, 7, 1.1, 14, 0, 240, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.halfreload, g.halfreload]),
            TYPE: exports.dominatorBlock,
            AUTOFIRE: !0
        }
    }, {
        POSITION: [14, 7, 1, 0, 0, 60, 0]
    }, {
        POSITION: [2, 7, 1.1, 14, 0, 60, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.halfreload, g.halfreload]),
            TYPE: exports.dominatorBlock,
            AUTOFIRE: !0
        }
    }, {
        POSITION: [14, 7, 1, 0, 0, 180, 0]
    }, {
        POSITION: [2, 7, 1.1, 14, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.halfreload, g.halfreload]),
            TYPE: exports.dominatorBlock,
            AUTOFIRE: !0
        }
    }, {
        POSITION: [14, 7, 1, 0, 0, 300, 0]
    }, {
        POSITION: [2, 7, 1.1, 14, 0, 300, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.halfreload, g.halfreload]),
            TYPE: exports.dominatorBlock,
            AUTOFIRE: !0
        }
    }]
}, exports.builderDominator = {
    LABEL: "Dominator",
    PARENT: [exports.dominator],
    FACING_TYPE: "autospin",
    TURRETS: [{
        POSITION: [22, 0, 0, 0, 360, 0],
        TYPE: exports.dominationBody
    }, {
        POSITION: [20, 0, 0, 0, 0, 0],
        TYPE: exports.builderx
    }]
}, exports.artyx = {
    LABEL: "",
    GUNS: [{
        POSITION: [15, 3, 1, 0, -4, -1.5, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.artyDominator]),
            TYPE: exports.bullet,
            LABEL: "Secondary"
        }
    }, {
        POSITION: [15, 3, 1, 0, 4, 1.5, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artyDominator]),
            TYPE: exports.bullet,
            LABEL: "Secondary"
        }
    }, {
        POSITION: [17, 8.5, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.artyDominator]),
            TYPE: exports.bullet,
            LABEL: "Heavy"
        }
    }, {
        POSITION: [5, 8.5, -1.6, 6.25, 0, 0, 0]
    }]
}, exports.artyDominator = {
    LABEL: "Dominator",
    PARENT: [exports.dominator],
    FACING_TYPE: "autospin",
    TURRETS: [{
        POSITION: [22, 0, 0, 0, 360, 0],
        TYPE: exports.dominationBody
    }, {
        POSITION: [20, 0, 0, 0, 360, 0],
        TYPE: exports.artyx
    }]
};
let mothershipProperties = {
        MAX_CHILDREN: 2,
        SHOOT_SETTINGS: combineStats([g.drone, g.over, [2, 1, 1, 1, .5, .75, .75, 1, 1, 1, 10, 1, 1]]),
        TYPE: exports.drone,
        AUTOFIRE: !0,
        SYNCS_SKILLS: !0,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: !0
    },
    mothershipAutoProperties = {
        MAX_CHILDREN: 2,
        SHOOT_SETTINGS: combineStats([g.drone, g.over, [2, 1, 1, 1, .5, .75, .75, 1, 1, 1, 10, 1, 1]]),
        TYPE: [exports.drone, {
            AI: {
                skynet: !0
            },
            INDEPENDENT: !0,
            BODY: {
                FOV: 2
            }
        }],
        AUTOFIRE: !0,
        SYNCS_SKILLS: !0,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: !0
    };
exports.mothership = {
    PARENT: [exports.genericTank],
    LABEL: "Mothership",
    DANGER: 7,
    CRAVES_ATTENTION: !0,
    SIZE: 30,
    SHAPE: 1600,
    STAT_NAMES: statnames.drone,
    SKILL: skillSet({
        rld: 1,
        dam: 1,
        pen: 1,
        str: 1,
        spd: 1,
        atk: 1,
        hlt: 1,
        shi: 1,
        rgn: 1,
        mob: 1
    }),
    VALUE: 5e5,
    BODY: bossStats({
        health: 1.5,
        speed: .8
    }),
    GUNS: [{
        POSITION: [4.3, 3.1, 1.2, 8, 0, 22.5, 1],
        PROPERTIES: mothershipProperties
    }, {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 45, .0625],
        PROPERTIES: mothershipAutoProperties
    }, {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 67.5, .9375],
        PROPERTIES: mothershipProperties
    }, {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 90, .125],
        PROPERTIES: mothershipAutoProperties
    }, {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 112.5, .875],
        PROPERTIES: mothershipProperties
    }, {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 135, .1875],
        PROPERTIES: mothershipAutoProperties
    }, {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 157.5, .8125],
        PROPERTIES: mothershipProperties
    }, {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 180, .25],
        PROPERTIES: mothershipAutoProperties
    }, {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 202.5, .75],
        PROPERTIES: mothershipProperties
    }, {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 225, .3125],
        PROPERTIES: mothershipAutoProperties
    }, {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 247.5, .6875],
        PROPERTIES: mothershipProperties
    }, {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 270, .375],
        PROPERTIES: mothershipAutoProperties
    }, {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 292.5, .625],
        PROPERTIES: mothershipProperties
    }, {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 315, .4375],
        PROPERTIES: mothershipAutoProperties
    }, {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 337.5, .5625],
        PROPERTIES: mothershipProperties
    }, {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 360, .5],
        PROPERTIES: mothershipAutoProperties
    }]
}, exports.mothershipAI = {
    PARENT: [exports.mothership],
    NAME: "Mothership",
    CONTROLLERS: ["nearestDifferentMaster", "minion", "botMoving"],
    ACCEPTS_SCORE: !1,
    BODY: {
        FOV: 10
    }
}, exports.invisamot = {
    PARENT: [exports.genericTank],
    CONTROLLERS: ["nearestDifferentMaster"],
    LABEL: "Null",
    BODY: {
        DAMAGE: 0,
        HEALTH: 9e9,
        REGEN: 9e9,
        RESIST: 9e9
    },
    TYPE: "turret",
    SHAPE: 353,
    LEVEL: 0,
    VALUE: 0
}, exports.rainbowthing = {
    PARENT: [exports.genericTank],
    COLOR: 36
}, exports.yellowthing = {
    PARENT: [exports.genericTank],
    COLOR: 3
}, exports.motpet = {
    PARENT: [exports.genericTank],
    SHAPE: 1600,
    COLOR: 25,
    BODY: {
        HEALTH: 9e9,
        RESIST: 1 / 0,
        REGEN: 1 / 0,
        DAMAGE: 0
    },
    INDEPENDENT: !0,
    CAN_BE_ON_LEADERBOARD: !1,
    ACCEPTS_SCORE: !1,
    CONTROLLERS: ["hangOutNearMaster"],
    GUNS: [{
        POSITION: [4.3, 3.1, 1.2, 8, 0, 22.5, 1]
    }, {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 45, .0625]
    }, {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 67.5, .9375]
    }, {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 90, .125]
    }, {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 112.5, .875]
    }, {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 135, .1875]
    }, {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 157.5, .8125]
    }, {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 180, .25]
    }, {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 202.5, .75]
    }, {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 225, .3125]
    }, {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 247.5, .6875]
    }, {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 270, .375]
    }, {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 292.5, .625]
    }, {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 315, .4375]
    }, {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 337.5, .5625]
    }, {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 360, .5]
    }],
    TURRETS: [{
        POSITION: [20, 0, 0, 0, 0, 1],
        TYPE: exports.rainbowthing
    }]
}, exports.acpet = {
    PARENT: [exports.genericTank],
    TYPE: "pet",
    COLOR_OVERRIDE: 3,
    BODY: {
        HEALTH: 9e9,
        RESIST: 1 / 0,
        REGEN: 1 / 0,
        DAMAGE: 0
    },
    SHAPE: 0,
    INDEPENDENT: !0,
    CAN_BE_ON_LEADERBOARD: !1,
    ACCEPTS_SCORE: !1,
    CONTROLLERS: ["hangOutNearMaster"],
    GUNS: [{
        POSITION: [15, 10, 1, 0, 0, 0, 1]
    }]
}, exports.RC_acpet = {
    PARENT: [exports.genericTank],
    SHAPE: 1600,
    COLOR: 25,
    BODY: {
        HEALTH: 9e9,
        RESIST: 1 / 0,
        REGEN: 1 / 0,
        DAMAGE: 0
    },
    CAN_BE_ON_LEADERBOARD: !1,
    ACCEPTS_SCORE: !1,
    CONTROLLERS: ["hangOutNearMaster", "mapTargetToGoal"],
    GUNS: [{
        POSITION: [15, 10, 1, 0, 0, 0, 1]
    }],
    TURRETS: [{
        POSITION: [20, 0, 0, 0, 0, 1],
        TYPE: exports.yellowthing
    }]
}, exports.flankCloser = {
    PARENT: [exports.genericTank],
    NAME: "Flank Closer",
    LABEL: "Arena Closer",
    TYPE: "AC",
    PASS_THROUGH_WALLS: !0,
    ACCEPTS_SCORE: !1,
    CAN_GO_OUTSIDE_ROOM: !0,
    COLOR: 3,
    SIZE: 40,
    BODY: {
        HEALTH: 9e9 * base.HEALTH,
        REGEN: 1e3 * base.REGEN,
        DAMAGE: 100 * base.DAMAGE,
        FOV: 1.5
    },
    SKILL: setBuild("9999999999"),
    DRAW_HEALTH: !1,
    CONTROLLERS: ["nearestDifferentMaster", "minion", "spinWhenIdle"],
    GUNS: [{
        POSITION: [18, 10, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([
                [15, .5, 1e-4, 1, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
            ]),
            TYPE: [exports.bullet, {
                PASS_THROUGH_WALLS: !0
            }]
        }
    }, {
        POSITION: [14, 10, 1, 0, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([
                [15, .5, 1e-4, 1, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
            ]),
            TYPE: [exports.bullet, {
                PASS_THROUGH_WALLS: !0
            }]
        }
    }]
}, exports.flankAI = {
    PARENT: [exports.flankCloser],
    CONTROLLERS: ["nearestDifferentMaster", "minion", "spinWhenIdle"],
    ACCEPTS_SCORE: !1,
    CAN_BE_ON_LEADERBOARD: !1,
    HITS_OWN_TYPE: "hard",
    BODY: {
        FOV: 10,
        SPEED: 2
    }
}, exports.fighterCloser = {
    PARENT: [exports.genericTank],
    NAME: "Fighter Closer",
    LABEL: "Fighter Closer",
    TYPE: "AC",
    PASS_THROUGH_WALLS: !0,
    COLOR: 3,
    SIZE: 40,
    SKILL: skillSet("0009990000"),
    BODY: {
        HEALTH: 9e9,
        REGEN: 9e9,
        DAMAGE: 9e9,
        FOV: 2,
        SPEED: 8
    },
    INDEPENDENT: !0,
    ACCEPTS_SCORE: !1,
    DRAW_HEALTH: !1,
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal", "spinWhenIdle"],
    CAN_BE_ON_LEADERBOARD: !1,
    GUNS: [{
        POSITION: [14, 10, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.op, [.5, .1, .1, 1, 10, 9e9, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: [exports.bullet, {
                GOES_THROUGH_WALLS: !0
            }]
        }
    }, {
        POSITION: [14, 10, 1, 0, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.op, [.5, .1, .1, 1, 10, 9e9, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: [exports.bullet, {
                GOES_THROUGH_WALLS: !0
            }]
        }
    }, {
        POSITION: [14, 10, 1, 0, 0, -90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.op, [.5, .1, .1, 1, 10, 9e9, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: [exports.bullet, {
                GOES_THROUGH_WALLS: !0
            }]
        }
    }, {
        POSITION: [14, 10, 1, 0, 0, 150, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.op, [.5, .1, .1, 1, 10, 9e9, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: [exports.bullet, {
                GOES_THROUGH_WALLS: !0
            }]
        }
    }, {
        POSITION: [14, 10, 1, 0, 0, 210, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.op, [.5, .1, .1, 1, 10, 9e9, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: [exports.bullet, {
                GOES_THROUGH_WALLS: !0
            }]
        }
    }]
}, exports.arenaCloser = {
    PARENT: [exports.genericTank],
    NAME: "Arena Closer",
    LABEL: "Arena Closer",
    TYPE: "AC",
    PASS_THROUGH_WALLS: !0,
    ACCEPTS_SCORE: !1,
    CAN_GO_OUTSIDE_ROOM: !0,
    COLOR: 3,
    SIZE: 40,
    BODY: {
        HEALTH: 9e9 * base.HEALTH,
        REGEN: 1e3 * base.REGEN,
        DAMAGE: 100 * base.DAMAGE,
        FOV: 1.5
    },
    SKILL: setBuild("9999999999"),
    DRAW_HEALTH: !1,
    CONTROLLERS: ["nearestDifferentMaster", "minion", "spinWhenIdle"],
    GUNS: [{
        POSITION: [14, 10, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([
                [15, .5, 1e-4, 1, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
            ]),
            TYPE: [exports.bullet, {
                PASS_THROUGH_WALLS: !0
            }]
        }
    }]
}, exports.mrclean = {
    PARENT: [exports.genericTank],
    LABEL: "Mr Clean",
    TYPE: "AC",
    PASS_THROUGH_WALLS: !0,
    ACCEPTS_SCORE: !1,
    CAN_GO_OUTSIDE_ROOM: !0,
    COLOR: 3,
    SIZE: 40,
    BODY: {
        HEALTH: 9e9 * base.HEALTH,
        REGEN: 1e3 * base.REGEN,
        DAMAGE: 100 * base.DAMAGE,
        FOV: 1.5
    },
    SKILL: setBuild("9999999999"),
    DRAW_HEALTH: !1,
    CONTROLLERS: ["nearestDifferentMaster", "minion", "spinWhenIdle"],
    GUNS: [{
        POSITION: [16, 10, -1.3, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([
                [15, .5, 1e-4, 50, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
            ]),
            TYPE: [exports.bullet, {
                PASS_THROUGH_WALLS: !0
            }]
        }
    }]
}, exports.smashCloser = {
    PARENT: [exports.genericTank],
    NAME: "Smash Closer",
    LABEL: "Smash Closer",
    TYPE: "AC",
    PASS_THROUGH_WALLS: !0,
    COLOR: 3,
    SIZE: 40,
    SKILL: skillSet("0009990000"),
    BODY: {
        HEALTH: 9e9,
        REGEN: 9e9,
        DAMAGE: 9e9,
        FOV: 1.5,
        SPEED: 20
    },
    INDEPENDENT: !0,
    ACCEPTS_SCORE: !1,
    DRAW_HEALTH: !1,
    CAN_BE_ON_LEADERBOARD: !1,
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal", "spinWhenIdle"],
    IS_SMASHER: !0,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher,
    TURRETS: [{
        POSITION: [21.5, 0, 0, 0, 360, 0],
        TYPE: exports.smasherBody
    }]
}, exports.builderCloser = {
    PARENT: [exports.genericTank],
    NAME: "Arena Builder",
    LABEL: "Arena Builder",
    TYPE: "AC",
    PASS_THROUGH_WALLS: !0,
    COLOR: 3,
    SIZE: 40,
    SKILL: skillSet("0009990000"),
    BODY: {
        HEALTH: 9e9,
        REGEN: 9e9,
        DAMAGE: 9e9,
        FOV: 1.5,
        SPEED: 8
    },
    INDEPENDENT: !0,
    ACCEPTS_SCORE: !1,
    DRAW_HEALTH: !1,
    CONTROLLERS: ["nearestDifferentMaster", "minion", "spinWhenIdle"],
    CAN_BE_ON_LEADERBOARD: !1,
    GUNS: [{
        POSITION: [15, 12, 1, 0, 0, 0, 0]
    }, {
        POSITION: [2, 12, 1.1, 15, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.op, [.5, .1, .1, 1, 10, 9e9, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: [exports.block, {
                GOES_THROUGH_WALLS: !0
            }]
        }
    }]
}, exports.overCloser = {
    PARENT: [exports.genericTank],
    NAME: "Arena Overlord",
    LABEL: "Arena Overlord",
    TYPE: "AC",
    PASS_THROUGH_WALLS: !0,
    COLOR: 3,
    SIZE: 40,
    SKILL: skillSet("0009990000"),
    BODY: {
        HEALTH: 9e9,
        REGEN: 9e9,
        DAMAGE: 9e9,
        FOV: 1.5,
        SPEED: 8
    },
    INDEPENDENT: !0,
    ACCEPTS_SCORE: !1,
    DRAW_HEALTH: !1,
    CONTROLLERS: ["nearestDifferentMaster", "minion", "spinWhenIdle"],
    CAN_BE_ON_LEADERBOARD: !1,
    MAX_CHILDREN: 8,
    GUNS: [{
        POSITION: [6, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, [.5, .1, .1, 1, 10, 9e9, 10, 20.5, 1.5, 1, 10, .1, 1]]),
            TYPE: [exports.drone, {
                GOES_THROUGH_WALLS: !0
            }],
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone
        }
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, [.5, .1, .1, 1, 10, 9e9, 10, 20.5, 1.5, 1, 10, .1, 1]]),
            TYPE: [exports.drone, {
                GOES_THROUGH_WALLS: !0
            }],
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, [.5, .1, .1, 1, 10, 9e9, 10, 20.5, 1.5, 1, 10, .1, 1]]),
            TYPE: [exports.drone, {
                GOES_THROUGH_WALLS: !0
            }],
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, [.5, .1, .1, 1, 10, 9e9, 10, 20.5, 1.5, 1, 10, .1, 1]]),
            TYPE: [exports.drone, {
                GOES_THROUGH_WALLS: !0
            }],
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0
        }
    }]
}, exports.shotgunCloser = {
    PARENT: [exports.genericTank],
    NAME: "Shotgun Closer",
    LABEL: "Shotgun Closer",
    TYPE: "AC",
    PASS_THROUGH_WALLS: !0,
    COLOR: 3,
    SIZE: 40,
    SKILL: skillSet("0009990000"),
    BODY: {
        HEALTH: 9e9,
        REGEN: 9e9,
        DAMAGE: 9e9,
        FOV: 1.5,
        SPEED: 8
    },
    INDEPENDENT: !0,
    ACCEPTS_SCORE: !1,
    DRAW_HEALTH: !1,
    CONTROLLERS: ["nearestDifferentMaster", "minion", "spinWhenIdle"],
    CAN_BE_ON_LEADERBOARD: !1,
    GUNS: [{
        POSITION: [4, 3, 1, 11, -3, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, [15, .5, 1e-4, 1, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [4, 3, 1, 11, 3, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, [15, .5, 1e-4, 1, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [4, 4, 1, 13, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, [15, .5, 1e-4, 1, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]]),
            TYPE: exports.casing
        }
    }, {
        POSITION: [1, 4, 1, 12, -1, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, [15, .5, 1e-4, 1, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]]),
            TYPE: exports.casing
        }
    }, {
        POSITION: [1, 4, 1, 11, 1, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, [15, .5, 1e-4, 1, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]]),
            TYPE: exports.casing
        }
    }, {
        POSITION: [1, 3, 1, 13, -1, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, [15, .5, 1e-4, 1, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [1, 3, 1, 13, 1, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, [15, .5, 1e-4, 1, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [1, 2, 1, 13, 2, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, [15, .5, 1e-4, 1, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]]),
            TYPE: exports.casing
        }
    }, {
        POSITION: [1, 2, 1, 13, -2, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, [15, .5, 1e-4, 1, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]]),
            TYPE: exports.casing
        }
    }, {
        POSITION: [15, 14, 1, 6, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
            TYPE: exports.casing
        }
    }, {
        POSITION: [8, 14, -1.3, 4, 0, 0, 0]
    }]
}, exports.microCloser = {
    PARENT: [exports.genericTank],
    NAME: "Micro Closer",
    LABEL: "Micro Closer",
    TYPE: "AC",
    PASS_THROUGH_WALLS: !0,
    ACCEPTS_SCORE: !1,
    CAN_GO_OUTSIDE_ROOM: !0,
    COLOR: 3,
    SIZE: 40,
    BODY: {
        HEALTH: 9e9 * base.HEALTH,
        REGEN: 1e3 * base.REGEN,
        DAMAGE: 100 * base.DAMAGE,
        FOV: 1.5
    },
    SKILL: setBuild("9999999999"),
    DRAW_HEALTH: !1,
    CONTROLLERS: ["nearestDifferentMaster", "minion", "spinWhenIdle"],
    GUNS: [{
        POSITION: [20, 8, 1, 0, 0, 0, .333],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([
                [15, .5, 1e-4, 1, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
            ]),
            TYPE: [exports.bullet, {
                PASS_THROUGH_WALLS: !0
            }]
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 0, .667],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([
                [15, .5, 1e-4, 1, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
            ]),
            TYPE: [exports.bullet, {
                PASS_THROUGH_WALLS: !0
            }]
        }
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }]
}, exports.realned = {
    PARENT: [exports.genericTank],
    LABEL: "Ned Flanders",
    SHAPE: 999,
    SIZE: 24
}, exports.greenthing = {
    PARENT: [exports.genericTank],
    COLOR: 123
}, exports.orangething = {
    PARENT: [exports.genericTank],
    COLOR: 25
}, exports.bluething = {
    PARENT: [exports.genericTank],
    COLOR: 10
}, exports.secretstuff = {
    PARENT: [exports.genericTank],
    SHAPE: 1001,
    CONTROLLERS: ["dontTurn"]
}, exports.overlordpet = {
    PARENT: [exports.genericTank],
    TYPE: "pet",
    INDEPENDENT: !0,
    COLOR_OVERRIDE: 10,
    CONTROLLERS: ["hangOutNearMaster"],
    PASS_THROUGH_WALLS: !0,
    BODY: {
        HEALTH: 9e9,
        SHIELD: 9e9,
        DAMAGE: 0
    },
    GUNS: [{
        POSITION: [13, 8, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
            SKIN: 1
        }
    }, {
        POSITION: [13, 8, 1, 0, -5.5, 0, .5],
        PROPERTIES: {
            SKIN: 1
        }
    }]
}, exports.smashpet = {
    PARENT: [exports.genericTank],
    INDEPENDENT: !0,
    TYPE: "pet",
    CONTROLLERS: ["hangOutNearMaster"],
    PASS_THROUGH_WALLS: !0,
    BODY: {
        HEALTH: 9e9,
        SHIELD: 9e9,
        DAMAGE: 0
    },
    TURRETS: [{
        POSITION: [21.5, 0, 0, 0, 360, 0],
        TYPE: exports.smasherBody
    }, {
        POSITION: [20, 0, 0, 0, 0, 1],
        TYPE: exports.greenthing
    }]
}, exports.summonpet = {
    PARENT: [exports.genericTank],
    CONTROLLERS: ["hangOutNearMaster"],
    PASS_THROUGH_WALLS: !0,
    BODY: {
        HEALTH: 9e9,
        SHIELD: 9e9,
        DAMAGE: 0,
        STEALTH: 9e303
    },
    CRAVES_ATTENTION: !1,
    SHAPE: 4,
    COLOR_OVERRIDE: 3,
    FACING_TYPE: "autospin",
    GUNS: [{
        POSITION: [2.7, 8.65, 1.2, 8, 0, 90, 0]
    }, {
        POSITION: [2.7, 8.65, 1.2, 8, 0, 270, .5]
    }, {
        POSITION: [2.7, 8.65, 1.2, 8, 0, 0, .25]
    }, {
        POSITION: [2.7, 8.65, 1.2, 8, 0, 180, .75]
    }]
}, exports.ka2basic = {
    PARENT: [exports.basic],
    GUNS: [{
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [.5, 15, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([
                [15, .5, 1e-4, 2, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
            ]),
            AUTOFIRE: !0,
            TYPE: exports.overlordpet,
            MAX_CHILDREN: 1,
            MOTION_TYPE: "blue"
        }
    }, {
        POSITION: [.5, 15, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([
                [15, .5, 1e-4, 2, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
            ]),
            AUTOFIRE: !0,
            TYPE: exports.smashpet,
            MAX_CHILDREN: 1,
            MOTION_TYPE: "blue"
        }
    }]
}, exports.hotheadpet = {
    PARENT: [exports.genericTank],
    INDEPENDENT: !0,
    CONTROLLERS: ["hangOutNearMaster"],
    PASS_THROUGH_WALLS: !0,
    BODY: {
        HEALTH: 9e9,
        SHIELD: 9e9,
        STEALTH: 9e303,
        DAMAGE: 0,
        SPEED: base.SPEED
    },
    CRAVES_ATTENTION: !1,
    GUNS: [{
        POSITION: [12, 4, 1.4, 0, 5, 0, 0]
    }, {
        POSITION: [18, 7, 1.4, 0, 0, 0, 0]
    }],
    TURRETS: [{
        POSITION: [20, 0, 0, 0, 0, 1],
        TYPE: exports.rainbowthing
    }]
}, exports.acoolpet = {
    PARENT: [exports.genericTank],
    INDEPENDENT: !0,
    TYPE: "pet",
    COLOR_OVERRIDE: 0,
    CONTROLLERS: ["hangOutNearMaster"],
    PASS_THROUGH_WALLS: !0,
    BODY: {
        HEALTH: 9e9,
        SHIELD: 9e9,
        STEALTH: 9e303,
        DAMAGE: 0
    },
    CRAVES_ATTENTION: !1,
    FACING_TYPE: "autospin",
    MAX_CHLDREN: 0,
    GUNS: [{
        POSITION: [7, 7.5, .6, 7, 0, 0, 0]
    }, {
        POSITION: [7, 7.5, .6, 7, 0, 120, 0]
    }, {
        POSITION: [7, 7.5, .6, 7, 0, 240, 0]
    }],
    TURRETS: [{
        POSITION: [8, 10, 0, 60, 100, 0],
        TYPE: [exports.autoTurret, {
            INDEPENDENT: !0
        }]
    }, {
        POSITION: [8, 10, 0, 180, 100, 0],
        TYPE: [exports.autoTurret, {
            INDEPENDENT: !0
        }]
    }, {
        POSITION: [8, 10, 0, 300, 100, 0],
        TYPE: [exports.autoTurret, {
            INDEPENDENT: !0
        }]
    }, {
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: [exports.director2, {
            COLOR: 0,
            MAX_CHILDREN: 0
        }]
    }]
}, exports.microgunpet = {
    PARENT: [exports.genericTank],
    SHAPE: 0,
    INDEPENDENT: !0,
    TYPE: "pet",
    CONTROLLERS: ["hangOutNearMaster"],
    PASS_THROUGH_WALLS: !0,
    BODY: {
        HEALTH: 9e9,
        SHIELD: 9e9,
        STEALTH: 9e303,
        DAMAGE: 0
    },
    COLOR_OVERRIDE: 2,
    CRAVES_ATTENTION: !1,
    GUNS: [{
        POSITION: [20, 8, 1, 0, 0, 0, .333]
    }, {
        POSITION: [18, 8, 1, 0, 0, 0, .667]
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }]
}, exports.avcanbasic = {
    PARENT: [exports.testbed],
    GUNS: [{
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [.5, 15, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([
                [15, .5, 1e-4, 2, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
            ]),
            AUTOFIRE: !0,
            TYPE: exports.microgunpet,
            MAX_CHILDREN: 1
        }
    }, {
        POSITION: [.5, 15, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([
                [15, .5, 1e-4, 2, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
            ]),
            AUTOFIRE: !0,
            TYPE: exports.acoolpet,
            MAX_CHILDREN: 1
        }
    }]
}, exports.lrmbasic = {
    PARENT: [exports.developer],
    GUNS: [{
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [.5, 15, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([
                [15, .5, 1e-4, 2, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
            ]),
            AUTOFIRE: !0,
            TYPE: exports.motpet,
            MAX_CHILDREN: 1
        }
    }, {
        POSITION: [.5, 15, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([
                [15, .5, 1e-4, 2, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
            ]),
            AUTOFIRE: !0,
            TYPE: exports.acpet,
            MAX_CHILDREN: 1
        }
    }]
}, exports.redthing = {
    PARENT: [exports.genericTank],
    SHAPE: 0,
    COLOR: 25
}, exports.flarefire = {
    PARENT: [exports.bullet],
    LABEL: "Malice Shard",
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: .165,
        DAMAGE: 30,
        PUSHABILITY: .3
    },
    TURRETS: [{
        POSITION: [20, 0, 0, 0, 0, 1],
        TYPE: exports.redthing
    }],
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: !0,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: !0
}, exports.radiantbullet = {
    PARENT: [exports.bullet],
    LABEL: "Bullet",
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: .165,
        DAMAGE: 6,
        PUSHABILITY: .3
    },
    TURRETS: [{
        POSITION: [20, 0, 0, 0, 0, 1],
        TYPE: [exports.genericTank, {
            COLOR: 40
        }]
    }],
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: !0,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: !0
}, exports.radiantshard = {
    PARENT: [exports.bullet],
    LABEL: "Radiant Shard",
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: .165,
        DAMAGE: 10,
        PUSHABILITY: .3
    },
    SHAPE: 112,
    PASS_THROUGH_WALLS: !0
}, exports.celestius1 = {
    PARENT: [exports.miniboss],
    LABEL: "Celestius",
    LABELSWITCH: "Celestius",
    BROADCAST_MESSAGE: "yellow_The Age of the Sun is no more...",
    BODY: {
        HEALTH: 1e3,
        RESIST: 2,
        REGEN: 2,
        PUSHABILITY: 0,
        SPEED: 15
    },
    COLOR: 50,
    FACING_TYPE: "toTarget",
    SHAPE: 1e5,
    SIZE: 25,
    PASS_THROUGH_WALLS: !0,
    GUNS: [{
        POSITION: [1, 2, 1.2, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([
                [16, .5, 1e-4, 1, 2, 1, 3, 4.5, 1, 1.25, 5, 1, 2]
            ]),
            TYPE: exports.radiantshard
        }
    }]
}, exports.celestius2 = {
    PARENT: [exports.miniboss],
    LABEL: "Celestius",
    BROADCAST_MESSAGE: "yellow_The Age of the Sun is no more...",
    BODY: {
        HEALTH: 1e3,
        RESIST: 2,
        REGEN: 2,
        PUSHABILITY: 0,
        SPEED: 15
    },
    COLOR: 50,
    FACING_TYPE: "toTarget",
    SHAPE: 1e5,
    SIZE: 25,
    PASS_THROUGH_WALLS: !0,
    GUNS: [{
        POSITION: [24, .1, -15, 15, 0, 30, 0]
    }, {
        POSITION: [4, 1, 1, 15, 0, 30, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lance2]),
            AUTOFIRE: !0,
            SKIN: 5,
            TYPE: [exports.radiantbullet, {
                LABEL: "Sword of Relics"
            }]
        }
    }, {
        POSITION: [4, 1, 1, 15, 0, 30, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lance2]),
            AUTOFIRE: !0,
            SKIN: 5,
            TYPE: [exports.radiantbullet, {
                LABEL: "Sword of Relics"
            }]
        }
    }, {
        POSITION: [5, 1.5, 1, 10, 0, 30, 0]
    }, {
        POSITION: [1.5, 6, -1.7, 15, 0, 30, 0]
    }]
}, exports.celestius3 = {
    PARENT: [exports.miniboss],
    LABEL: "Celestius",
    BROADCAST_MESSAGE: "yellow_The Age of the Sun is no more...",
    BODY: {
        HEALTH: 1e3,
        RESIST: 2,
        REGEN: 2,
        PUSHABILITY: 0,
        SPEED: 15
    },
    COLOR: 50,
    FACING_TYPE: "toTarget",
    SHAPE: 1e5,
    SIZE: 25,
    PASS_THROUGH_WALLS: !0,
    GUNS: [{
        POSITION: [24, .1, -15, 15, 0, -10, 0]
    }, {
        POSITION: [4, 1, 1, 15, 0, -10, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lance2]),
            AUTOFIRE: !0,
            SKIN: 5,
            TYPE: [exports.radiantbullet, {
                LABEL: "Sword of Relics"
            }]
        }
    }, {
        POSITION: [4, 1, 1, 15, 0, -10, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lance2]),
            AUTOFIRE: !0,
            SKIN: 5,
            TYPE: [exports.radiantbullet, {
                LABEL: "Sword of Relics"
            }]
        }
    }, {
        POSITION: [5, 1.5, 1, 10, 0, -10, 0]
    }, {
        POSITION: [1.5, 6, -1.7, 15, 0, -10, 0]
    }]
}, exports.celestius4 = {
    PARENT: [exports.miniboss],
    LABEL: "Celestius",
    BROADCAST_MESSAGE: "yellow_The Age of the Sun is no more...",
    BODY: {
        HEALTH: 1e3,
        RESIST: 2,
        REGEN: 2,
        PUSHABILITY: 0,
        SPEED: 15
    },
    COLOR: 50,
    FACING_TYPE: "toTarget",
    SHAPE: 1e5,
    SIZE: 25,
    PASS_THROUGH_WALLS: !0,
    GUNS: [{
        POSITION: [24, .1, -15, 15, 0, -40, 0]
    }, {
        POSITION: [4, 1, 1, 15, 0, -40, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lance2]),
            AUTOFIRE: !0,
            SKIN: 5,
            TYPE: [exports.radiantbullet, {
                LABEL: "Sword of Relics"
            }]
        }
    }, {
        POSITION: [4, 1, 1, 15, 0, -40, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lance2]),
            AUTOFIRE: !0,
            SKIN: 5,
            TYPE: [exports.radiantbullet, {
                LABEL: "Sword of Relics"
            }]
        }
    }, {
        POSITION: [5, 1.5, 1, 10, 0, -40, 0]
    }, {
        POSITION: [1.5, 6, -1.7, 15, 0, -40, 0]
    }]
}, exports.celestius5 = {
    PARENT: [exports.miniboss],
    LABEL: "Celestius",
    BROADCAST_MESSAGE: "yellow_The Age of the Sun is no more...",
    BODY: {
        HEALTH: 1e3,
        RESIST: 2,
        REGEN: 2,
        PUSHABILITY: 0,
        SPEED: 15
    },
    COLOR: 50,
    FACING_TYPE: "toTarget",
    SHAPE: 1e5,
    SIZE: 25,
    PASS_THROUGH_WALLS: !0,
    GUNS: [{
        POSITION: [24, .1, -15, 15, 0, -70, 0]
    }, {
        POSITION: [4, 1, 1, 15, 0, -70, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lance2]),
            AUTOFIRE: !0,
            SKIN: 5,
            TYPE: [exports.radiantbullet, {
                LABEL: "Sword of Relics"
            }]
        }
    }, {
        POSITION: [4, 1, 1, 15, 0, -70, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lance2]),
            AUTOFIRE: !0,
            SKIN: 5,
            TYPE: [exports.radiantbullet, {
                LABEL: "Sword of Relics"
            }]
        }
    }, {
        POSITION: [5, 1.5, 1, 10, 0, -70, 0]
    }, {
        POSITION: [1.5, 6, -1.7, 15, 0, -70, 0]
    }]
}, exports.celestius6 = {
    PARENT: [exports.miniboss],
    LABEL: "Celestius",
    BROADCAST_MESSAGE: "yellow_The Age of the Sun is no more...",
    BODY: {
        HEALTH: 1e3,
        RESIST: 2,
        REGEN: 2,
        PUSHABILITY: 0,
        SPEED: 15
    },
    COLOR: 50,
    FACING_TYPE: "toTarget",
    SHAPE: 1e5,
    SIZE: 25,
    PASS_THROUGH_WALLS: !0,
    GUNS: [{
        POSITION: [24, .1, -15, 15, 0, -100, 0]
    }, {
        POSITION: [4, 1, 1, 15, 0, -100, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lance2]),
            AUTOFIRE: !0,
            SKIN: 5,
            TYPE: [exports.radiantbullet, {
                LABEL: "Sword of Relics"
            }]
        }
    }, {
        POSITION: [4, 1, 1, 15, 0, -100, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lance2]),
            AUTOFIRE: !0,
            SKIN: 5,
            TYPE: [exports.radiantbullet, {
                LABEL: "Sword of Relics"
            }]
        }
    }, {
        POSITION: [5, 1.5, 1, 10, 0, -100, 0]
    }, {
        POSITION: [1.5, 6, -1.7, 15, 0, -100, 0]
    }]
}, exports.juggernaut = {
    PARENT: [exports.miniboss],
    LABEL: "Juggernaut",
    BROADCAST_MESSAGE: "Screams echo around you as souls are released from the Eternal Juggernaut...",
    DANGER: 500,
    LABELSWITCH: "ShootNSpawn",
    FACING_TYPE: "toTarget",
    SHAPE: 1005,
    SIZE: 25,
    PASS_THROUGH_WALLS: !0,
    BODY: {
        HEALTH: 1e3,
        RESIST: 5,
        REGEN: 5,
        PUSHABILITY: 0
    },
    GUNS: [{
        POSITION: [1, 4, 1.2, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([
                [50, .5, 1e-4, 4, 2, 1, 8, 4.5, 1, 1.25, 5, 1, 2]
            ]),
            TYPE: exports.cbullet
        }
    }]
}, exports.juggernaut2 = {
    PARENT: [exports.miniboss],
    LABEL: "Juggernaut",
    LABELSWITCH: "ChargeMode",
    PASS_THROUGH_WALLS: !0,
    FACING_TYPE: "toTarget",
    DANGER: 500,
    SHAPE: 1005,
    SIZE: 25,
    BODY: {
        HEALTH: 8e3,
        RESIST: 20,
        REGEN: 10,
        DAMAGE: Infinity,
        PUSHABILITY: 0
    },
    GUNS: [{
        POSITION: [1, 2, 1.2, 0, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.fake, [60, 95, 1e-4, 1, 1, 2, 8, 4.5, 1, 1.25, 5, .5, .5]]),
            TYPE: exports.bullet
        }
    }]
}, exports.crewmate = {
    PARENT: [exports.genericTank],
    LABEL: "Crewmate",
    SHAPE: 2121
}, exports.rickrolled = {
    PARENT: [exports.genericTank],
    LABEL: "Rick Roll",
    SHAPE: 9e3
}, exports.ak47 = {
    PARENT: [exports.genericTank],
    LABEL: "AK-47",
    SHAPE: 1234,
    GUNS: [{
        POSITION: [1, 2, 1, 0, -5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([
                [8, .5, 1e-4, 1, 1, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
            ]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [1, 2, 1, 0, -5, 0, 1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([
                [8, .5, 1e-4, 1, 1, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
            ]),
            TYPE: exports.bullet
        }
    }]
}, exports.imposter = {
    PARENT: [exports.genericTank],
    LABEL: "Impostor",
    SHAPE: 2121,
    GUNS: [{
        POSITION: [1, 5, 1, 0, -5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, [4, .5, 1e-4, 4, 1, 999e9, 2, 4.5, 1, 1.25, 5, 1, 2]]),
            TYPE: exports.knife,
            LABEL: "a Knife",
            ALT_FIRE: !0
        }
    }],
    TURRETS: [{
        POSITION: [10, 10, 0, 0, 0, 1],
        TYPE: exports.ak47
    }]
}, exports.brain = {
    PARENT: [exports.genericTank],
    SHAPE: 2222
}, exports.bigbrain = {
    PARENT: [exports.basic],
    LABEL: "Big Brain",
    TURRETS: [{
        POSITION: [18, 0, -12, -90, 0, 1],
        TYPE: exports.brain
    }]
}, exports.arenaAI = {
    PARENT: [exports.arenaCloser],
    CONTROLLERS: ["nearestDifferentMaster", "minion", "spinWhenIdle"],
    ACCEPTS_SCORE: !1,
    CAN_BE_ON_LEADERBOARD: !1,
    HITS_OWN_TYPE: "hard",
    BODY: {
        FOV: 10,
        SPEED: 2
    }
}, exports.antiTankTurret = {
    PARENT: [exports.dominator],
    LABEL: "Gun",
    DANGER: 7,
    GUNS: [{
        POSITION: [15, 3, 0, 0, 1.5, 0, .5],
        PROPERTIES: {
            TYPE: exports.bullet,
            SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator, g.op])
        }
    }, {
        POSITION: [15, 3, 0, 0, -1.5, 0, .5],
        PROPERTIES: {
            TYPE: exports.bullet,
            SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator, g.op])
        }
    }, {
        POSITION: [17, 3, 0, 0, 0, 0, 0],
        PROPERTIES: {
            TYPE: exports.bullet,
            SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator, g.op])
        }
    }, {
        POSITION: [5, 6, -1.6, 7.5, 0, 0, 0]
    }],
    TURRETS: []
}, exports.antiTankMachine = {
    PARENT: [exports.genericTank],
    LABEL: "Anti-Tank Machine",
    DANGER: 7,
    SIZE: 25,
    GUNS: [{
        POSITION: [15, 3, 0, 0, 1.5, 0, .5],
        PROPERTIES: {
            TYPE: exports.bullet,
            SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator])
        }
    }, {
        POSITION: [15, 3, 0, 0, -1.5, 0, .5],
        PROPERTIES: {
            TYPE: exports.bullet,
            SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator])
        }
    }, {
        POSITION: [17, 3, 0, 0, 0, 0, 0],
        PROPERTIES: {
            TYPE: exports.bullet,
            SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator])
        }
    }, {
        POSITION: [12, 8, -1.2, 8, 0, 89.535, 0]
    }, {
        POSITION: [12, 8, -1.2, 8, 0, -89.535, 0]
    }, {
        POSITION: [5, 6, -1.6, 7.5, 0, 0, 0]
    }],
    TURRETS: [{
        POSITION: [24, 0, 0, 0, 360, 0],
        TYPE: exports.dominationBody
    }, {
        POSITION: [20, 0, 25, 0, 190, 1],
        TYPE: [exports.antiTankTurret, {
            COLOR: 16,
            BODY: {
                FOV: 3
            },
            REFERENCE_NAME: "Anti-Tank Machine Gun"
        }]
    }, {
        POSITION: [20, 0, -25, 0, 190, 1],
        TYPE: [exports.antiTankTurret, {
            COLOR: 16,
            BODY: {
                FOV: 3
            },
            REFERENCE_NAME: "Anti-Tank Machine Gun"
        }]
    }]
}, exports.domPet = {
    PARENT: [exports.hotheadpet],
    DANGER: 7,
    COLOR_OVERRIDE: 160,
    GUNS: [{
        POSITION: [16, 4, 1, 0, 3.5, 0, .5]
    }, {
        POSITION: [16, 4, 1, 0, -3.5, 0, .5]
    }, {
        POSITION: [18, 4, 1, 0, 0, 0, 0]
    }, {
        POSITION: [5, 10, -1.6, 7.5, 0, 0, 0]
    }],
    TURRETS: [{
        POSITION: [24, 0, 0, 0, 360, 0],
        TYPE: [exports.dominationBody, {
            TYPE: "turret"
        }]
    }]
}, exports.bot = {
    AUTO_UPGRADE: "random",
    FACING_TYPE: "looseToTarget",
    BODY: {
        SIZE: 10
    },
    NAME: "",
    CONTROLLERS: ["nearestDifferentMaster", "mapAltToFire", "minion", "fleeAtLowHealth", "botMoving"],
    AI: {
        STRAFE: !0
    }
}, exports.extirpator = {
    PARENT: [exports.miniboss],
    LABEL: "Extirpator",
    COLOR: 2,
    SHAPE: 0,
    SIZE: 25,
    FACING_TYPE: "autospin",
    TURRETS: [{
        POSITION: [3, 10, 0, 18, 100, 0],
        TYPE: exports.auto3gun
    }, {
        POSITION: [3, 10, 0, 36, 100, 0],
        TYPE: exports.auto3gun
    }, {
        POSITION: [3, 10, 0, 54, 100, 0],
        TYPE: exports.auto3gun
    }, {
        POSITION: [3, 10, 0, 72, 100, 0],
        TYPE: exports.auto3gun
    }, {
        POSITION: [3, 10, 0, 90, 100, 0],
        TYPE: exports.auto3gun
    }, {
        POSITION: [3, 10, 0, 108, 100, 0],
        TYPE: exports.auto3gun
    }, {
        POSITION: [3, 10, 0, 126, 100, 0],
        TYPE: exports.auto3gun
    }, {
        POSITION: [3, 10, 0, 144, 100, 0],
        TYPE: exports.auto3gun
    }, {
        POSITION: [3, 10, 0, 162, 100, 0],
        TYPE: exports.auto3gun
    }, {
        POSITION: [3, 10, 0, 180, 100, 0],
        TYPE: exports.auto3gun
    }, {
        POSITION: [3, 10, 0, 198, 100, 0],
        TYPE: exports.auto3gun
    }, {
        POSITION: [3, 10, 0, 216, 100, 0],
        TYPE: exports.auto3gun
    }, {
        POSITION: [3, 10, 0, 234, 100, 0],
        TYPE: exports.auto3gun
    }, {
        POSITION: [3, 10, 0, 252, 100, 0],
        TYPE: exports.auto3gun
    }, {
        POSITION: [3, 10, 0, 270, 100, 0],
        TYPE: exports.auto3gun
    }, {
        POSITION: [3, 10, 0, 288, 100, 0],
        TYPE: exports.auto3gun
    }, {
        POSITION: [3, 10, 0, 306, 100, 0],
        TYPE: exports.auto3gun
    }, {
        POSITION: [3, 10, 0, 324, 100, 0],
        TYPE: exports.auto3gun
    }, {
        POSITION: [3, 10, 0, 342, 100, 0],
        TYPE: exports.auto3gun
    }, {
        POSITION: [3, 10, 0, 360, 100, 0],
        TYPE: exports.auto3gun
    }, {
        POSITION: [7, 5, 0, 0, 360, 1],
        TYPE: exports.preda
    }, {
        POSITION: [7, 5, 0, 120, 360, 1],
        TYPE: exports.gunner
    }, {
        POSITION: [7, 5, 0, 240, 360, 1],
        TYPE: exports.cruiser
    }]
}, exports.exquisiter = {
    PARENT: [exports.miniboss],
    LABEL: "Exquisiter",
    COLOR: 2,
    CRAVES_ATTENTION: !0,
    BODY: {
        HEALTH: 3579,
        RESIST: 10,
        SHIELD: 10,
        REGEN: 10,
        PUSHABILITY: 0,
        FOV: .5
    },
    SIZE: 25,
    FACING_TYPE: "autospin",
    INVISIBLE: [.08, .03],
    TURRETS: [{
        POSITION: [3, 10, 0, 18, 100, 0],
        TYPE: exports.artillery2
    }, {
        POSITION: [3, 10, 0, 36, 100, 0],
        TYPE: exports.artillery2
    }, {
        POSITION: [3, 10, 0, 54, 100, 0],
        TYPE: exports.artillery2
    }, {
        POSITION: [3, 10, 0, 72, 100, 0],
        TYPE: exports.artillery2
    }, {
        POSITION: [3, 10, 0, 90, 100, 0],
        TYPE: exports.artillery2
    }, {
        POSITION: [3, 10, 0, 108, 100, 0],
        TYPE: exports.artillery2
    }, {
        POSITION: [3, 10, 0, 126, 100, 0],
        TYPE: exports.artillery2
    }, {
        POSITION: [3, 10, 0, 144, 100, 0],
        TYPE: exports.artillery2
    }, {
        POSITION: [3, 10, 0, 162, 100, 0],
        TYPE: exports.artillery2
    }, {
        POSITION: [3, 10, 0, 180, 100, 0],
        TYPE: exports.artillery2
    }, {
        POSITION: [3, 10, 0, 198, 100, 0],
        TYPE: exports.artillery2
    }, {
        POSITION: [3, 10, 0, 216, 100, 0],
        TYPE: exports.artillery2
    }, {
        POSITION: [3, 10, 0, 234, 100, 0],
        TYPE: exports.artillery2
    }, {
        POSITION: [3, 10, 0, 252, 100, 0],
        TYPE: exports.artillery2
    }, {
        POSITION: [3, 10, 0, 270, 100, 0],
        TYPE: exports.artillery2
    }, {
        POSITION: [3, 10, 0, 288, 100, 0],
        TYPE: exports.artillery2
    }, {
        POSITION: [3, 10, 0, 306, 100, 0],
        TYPE: exports.artillery2
    }, {
        POSITION: [3, 10, 0, 324, 100, 0],
        TYPE: exports.artillery2
    }, {
        POSITION: [3, 10, 0, 342, 100, 0],
        TYPE: exports.artillery2
    }, {
        POSITION: [3, 10, 0, 360, 100, 0],
        TYPE: exports.artillery2
    }, {
        POSITION: [10, 0, 0, 0, 360, 1],
        TYPE: exports.ambusher
    }]
}, exports.STII = {
    PARENT: [exports.genericTank],
    LABEL: "ST-II",
    SHAPE: 6969,
    SIZE: 35,
    GUNS: [{
        POSITION: [1, 2, 1, 0, -5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.stiibullet
        }
    }, {
        POSITION: [1, 2, 1, 0, -5, 0, 1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.stiibullet
        }
    }]
}, exports.lul = {
    PARENT: [exports.genericTank],
    LABEL: "choose ur role"
}, exports.lul2 = {
    PARENT: [exports.genericTank],
    LABEL: "dis is OP"
}, exports.lul3 = {
    PARENT: [exports.genericTank],
    LABEL: "Sea Creatures"
}, exports.spongebob = {
    PARENT: [exports.genericTank],
    LABEL: "Spongebob",
    SIZE: 35,
    SHAPE: 1e4
}, exports.mrspuff = {
    PARENT: [exports.genericTank],
    LABEL: "Mrs. puff",
    SIZE: 35,
    SHAPE: 10008
}, exports.patrick = {
    PARENT: [exports.genericTank],
    LABEL: "Patrick",
    SIZE: 35,
    SHAPE: 10001
}, exports.mrcrabs = {
    PARENT: [exports.genericTank],
    LABEL: "Mr. Krabs",
    SIZE: 35,
    SHAPE: 10002
}, exports.sandy = {
    PARENT: [exports.genericTank],
    LABEL: "Sandy",
    SIZE: 35,
    SHAPE: 10003
}, exports.plankton = {
    PARENT: [exports.genericTank],
    LABEL: "Plankton",
    SIZE: 35,
    SHAPE: 10004
}, exports.randomfishguy = {
    PARENT: [exports.genericTank],
    LABEL: "Fish guy",
    SIZE: 35,
    SHAPE: 10005
}, exports.randomfishwoman = {
    PARENT: [exports.genericTank],
    LABEL: "Fish woman",
    SIZE: 35,
    SHAPE: 10006
}, exports.squidward = {
    PARENT: [exports.genericTank],
    LABEL: "Squidward",
    SIZE: 35,
    SHAPE: 10007
}, exports.edbody = {
    PARENT: [exports.genericTank],
    SHAPE: 12,
    LABEL: ""
}, exports.eventdev = {
    PARENT: [exports.genericTank],
    LABEL: "Event Developer",
    FACING_TYPE: "autospin",
    GUNS: [{
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }]
}, exports.boss1minion = {
    PARENT: [exports.minion],
    LABEL: "Boss 1 Minion",
    SHAPE: 8,
    SIZE: 27,
    FACING_TYPE: "autospin",
    GUNS: [{
        POSITION: [8.5, 3, .6, 7, 2, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.lessreload, g.lessreload, g.lessreload]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [8.5, 3, .6, 7, -2, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.lessreload, g.lessreload, g.lessreload]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [8.5, 3, .6, 7, 2, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.lessreload, g.lessreload, g.lessreload]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [8.5, 3, .6, 7, -2, 90, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.lessreload, g.lessreload, g.lessreload]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [8.5, 3, .6, 7, 2, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.lessreload, g.lessreload, g.lessreload]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [8.5, 3, .6, 7, -2, 180, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.lessreload, g.lessreload, g.lessreload]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [8.5, 3, .6, 7, 2, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.lessreload, g.lessreload, g.lessreload]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [8.5, 3, .6, 7, -2, 270, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.lessreload, g.lessreload, g.lessreload]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }],
    TURRETS: [{
        POSITION: [6.5, 10, 0, 45, 180, 0],
        TYPE: [exports.trapper, {
            COLOR: 0
        }]
    }, {
        POSITION: [6.5, 10, 0, -135, 180, 0],
        TYPE: [exports.trapper, {
            COLOR: 0
        }]
    }, {
        POSITION: [6.5, 10, 0, 135, 180, 0],
        TYPE: [exports.trapper, {
            COLOR: 0
        }]
    }, {
        POSITION: [6.5, 10, 0, -45, 180, 0],
        TYPE: [exports.trapper, {
            COLOR: 0
        }]
    }]
}, exports.boss1 = {
    PARENT: [exports.miniboss],
    LABEL: "Boss 1",
    DANGER: 20,
    SHAPE: 8,
    SIZE: 27,
    COLOR: 0,
    MAX_CHILDREN: 4,
    GUNS: [{
        POSITION: [4.5, 6, 1, 8.5, 0, 0, 0]
    }, {
        POSITION: [1, 8, 1, 12.5, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory, [15, .5, 1e-4, 3, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]]),
            TYPE: exports.boss1minion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0
        }
    }, {
        POSITION: [5, 8, 1, 6, 0, 0, 0]
    }, {
        POSITION: [4.5, 6, 1, 8.5, 0, 90, 0]
    }, {
        POSITION: [1, 8, 1, 12.5, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory, [15, .5, 1e-4, 3, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]]),
            TYPE: exports.boss1minion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0
        }
    }, {
        POSITION: [5, 8, 1, 6, 0, 90, 0]
    }, {
        POSITION: [4.5, 6, 1, 8.5, 0, 180, 0]
    }, {
        POSITION: [1, 8, 1, 12.5, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory, [15, .5, 1e-4, 3, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]]),
            TYPE: exports.boss1minion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0
        }
    }, {
        POSITION: [5, 8, 1, 6, 0, 180, 0]
    }, {
        POSITION: [4.5, 6, 1, 8.5, 0, 270, 0]
    }, {
        POSITION: [1, 8, 1, 12.5, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory, [15, .5, 1e-4, 3, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]]),
            TYPE: exports.boss1minion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0
        }
    }, {
        POSITION: [5, 8, 1, 6, 0, 270, 0]
    }],
    TURRETS: [{
        POSITION: [6, 0, 0, 0, 360, 1],
        TYPE: exports.trimini
    }, {
        POSITION: [4, 10, 2, 45, 0, 0],
        TYPE: exports.miniblock2
    }, {
        POSITION: [4, 10, -2, 45, 0, 0],
        TYPE: exports.miniblock2
    }, {
        POSITION: [4, 10, 2, 135, 0, 0],
        TYPE: exports.miniblock2
    }, {
        POSITION: [4, 10, -2, 135, 0, 0],
        TYPE: exports.miniblock2
    }, {
        POSITION: [4, 10, 2, -45, 0, 0],
        TYPE: exports.miniblock2
    }, {
        POSITION: [4, 10, -2, -45, 0, 0],
        TYPE: exports.miniblock2
    }, {
        POSITION: [4, 10, 2, -135, 0, 0],
        TYPE: exports.miniblock2
    }, {
        POSITION: [4, 10, -2, -135, 0, 0],
        TYPE: exports.miniblock2
    }, {
        POSITION: [2.5, 7, 2, 0, 180, 1],
        TYPE: exports.autoSmasherTurret
    }, {
        POSITION: [2.5, 7, -2, 0, 180, 1],
        TYPE: exports.autoSmasherTurret
    }, {
        POSITION: [2.5, 7, 2, 270, 180, 1],
        TYPE: exports.autoSmasherTurret
    }, {
        POSITION: [2.5, 7, -2, 270, 180, 1],
        TYPE: exports.autoSmasherTurret
    }, {
        POSITION: [2.5, 7, 2, 90, 180, 1],
        TYPE: exports.autoSmasherTurret
    }, {
        POSITION: [2.5, 7, -2, 90, 180, 1],
        TYPE: exports.autoSmasherTurret
    }, {
        POSITION: [2.5, 7, 2, 180, 180, 1],
        TYPE: exports.autoSmasherTurret
    }, {
        POSITION: [2.5, 7, -2, 180, 180, 1],
        TYPE: exports.autoSmasherTurret
    }]
}, exports.boss2turret = {
    PARENT: [exports.auto3gun],
    GUNS: [{
        POSITION: [20, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [20, 8, 1, 0, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [20, 8, 1, 0, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [20, 8, 1, 0, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }]
}, exports.boss2minion = {
    PARENT: [exports.drone],
    TYPE: "minion",
    LABEL: "Smasher Minion",
    ACCEPTS_SCORE: !1,
    SHAPE: 0,
    CAN_BE_ON_LEADERBOARD: !1,
    HITS_OWN_TYPE: "hard",
    CONTROLLERS: ["nearestDifferentMaster", "mapAltToFire", "canRepel", "mapTargetToGoal", "hangOutNearMaster"],
    DANGER: 6,
    BODY: {
        FOV: 1.05 * base.FOV,
        DENSITY: 2 * base.DENSITY
    },
    TURRETS: [{
        POSITION: [21.5, 0, 0, 0, 360, 0],
        TYPE: exports.smasherBody
    }],
    IS_SMASHER: !0,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher
}, exports.boss2 = {
    PARENT: [exports.miniboss],
    FACING_TYPE: "toTarget",
    LABEL: "Infabricator",
    SHAPE: 112,
    SIZE: 27,
    COLOR: 123,
    MAX_CHILDREN: 6,
    GUNS: [{
        POSITION: [4, 8, 1, 8.5, 3, -235, 0]
    }, {
        POSITION: [.5, 10, 1, 12.5, 3, -235, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: exports.boss2minion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0
        }
    }, {
        POSITION: [4.5, 10, 1, 6, 3, -235, 0]
    }, {
        POSITION: [4, 8, 1, 8.5, -3, 235, 0]
    }, {
        POSITION: [.5, 10, 1, 12.5, -3, 235, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: exports.boss2minion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0
        }
    }, {
        POSITION: [4.5, 10, 1, 6, -3, 235, 0]
    }],
    TURRETS: [{
        POSITION: [9, 3, 0, 0, 360, 1],
        TYPE: exports.boss2turret
    }]
}, exports.boss3turret = {
    PARENT: [exports.auto3gun],
    GUNS: [{
        POSITION: [17, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [17, 8, 1, 0, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [17, 8, 1, 0, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [17, 8, 1, 0, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [14.5, 11, 1, 0, 0, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [14.5, 11, 1, 0, 0, 90, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [14.5, 11, 1, 0, 0, 180, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [14.5, 11, 1, 0, 0, 270, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
            TYPE: exports.bullet
        }
    }]
}, exports.boss3 = {
    PARENT: [exports.miniboss],
    FACING_TYPE: "toTarget",
    LABEL: "Intemption",
    SHAPE: 112,
    COLOR: 123,
    SIZE: 27,
    GUNS: [{
        POSITION: [11, 7, 1, 0, -3, 57, 1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [11, 7, 1, 0, 3, -57, 1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [12, 5, 1, 0, -3, 57, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [12, 5, 1, 0, 3, -57, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [13, 3, 1, 0, -3, 57, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [13, 3, 1, 0, 3, -57, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
            TYPE: exports.bullet
        }
    }],
    TURRETS: [{
        POSITION: [9, 3, 0, 0, 360, 1],
        TYPE: exports.boss3turret
    }, {
        POSITION: [4, 9, -2.5, 235, 180, 0],
        TYPE: [exports.autoTurret, {
            INDEPENDENT: !0
        }]
    }, {
        POSITION: [4, 9, 2.5, -235, 180, 0],
        TYPE: [exports.autoTurret, {
            INDEPENDENT: !0
        }]
    }, {
        POSITION: [4, 9, -7, 235, 180, 0],
        TYPE: [exports.autoTurret, {
            INDEPENDENT: !0
        }]
    }, {
        POSITION: [4, 9, 7, -235, 180, 0],
        TYPE: [exports.autoTurret, {
            INDEPENDENT: !0
        }]
    }, {
        POSITION: [4, 9, 2, 235, 180, 0],
        TYPE: [exports.autoTurret, {
            INDEPENDENT: !0
        }]
    }, {
        POSITION: [4, 9, -2, -235, 180, 0],
        TYPE: [exports.autoTurret, {
            INDEPENDENT: !0
        }]
    }]
}, exports.basic360 = {
    PARENT: [exports.genericTank],
    LABEL: "Basic-360",
    SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    GUNS: [{
        POSITION: [18, 8, 1, 0, 0, 225.427, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 303.848, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 310.287, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 315.612, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 316.848, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 318.056, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 318.487, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 320.567, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 323.13, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 329.918, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 335.943, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 346.271, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 357.722, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 4.322, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 14.692, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 27.173, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 34.365, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 40.086, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 46.9, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 53.723, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 60.368, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 68.018, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 76.584, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 106.422, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 119.454, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 133.764, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 147.068, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 156.602, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 165.28, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 174.201, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 183.842, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 191.229, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 195.219, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 197.546, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 203.356, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 211.839, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 217.349, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 222.41, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 227.67, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 233.216, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 238.962, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 244.036, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 250.317, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 258.43, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 264.602, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 275.398, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 282.824, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 291.463, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 296.362, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 301.958, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 301.958, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 302.928, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 302.928, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [.5, .1, .1, 1, 10, 10, 10, 1.5, 1.5, 1, 10, .1, 1]]),
            TYPE: exports.bullet
        }
    }]
}, exports.rcarenacloser = {
    PARENT: [exports.eventdev],
    LABEL: "RC Arena Closer",
    GUNS: [{
        POSITION: [.5, 15, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([
                [15, .5, 1e-4, 2, 2, 2, 2, 2, 1, 1.25, 5, 1, 2]
            ]),
            AUTOFIRE: !0,
            TYPE: exports.RC_acpet,
            MAX_CHILDREN: 1
        }
    }]
}, exports.O = {
    PARENT: [exports.genericTank],
    SHAPE: 166
}, exports.o0o = {
    PARENT: [exports.genericTank],
    LABEL: "o.o",
    SHAPE: [
        [0, 0]
    ],
    SIZE: 15,
    TURRETS: [{
        POSITION: [25, 20, -1, 270, 0, 1],
        TYPE: exports.O
    }, {
        POSITION: [5, 10, 0, 0, 0, 1],
        TYPE: exports.genericTank
    }, {
        POSITION: [25, 20, 1, 90, 0, 1],
        TYPE: exports.O
    }]
}, exports.CusShaTest = {
    PARENT: [exports.genericTank],
    LABEL: "Custom shape test",
    SHAPE: [[0, 0], [1.2, -0.7], [1.2, 0.7], [0, 0], [-1.4, 0.195], [-0.3, 1.4], [0, 0], [0, -1.4], [1.2, -0.8], [0, 0], [-0.1, 1.415], [1.2, 0.8], [0, 0], [-1.4, -0.195], [-0.3, -1.4]]
}, exports.dk1turret = {
    PARENT: [exports.auto3gun],
    GUNS: [{
        POSITION: [16, 6.5, -2, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload]),
            TYPE: exports.swarm
        }
    }]
}, exports.dk2turret = {
    PARENT: [exports.cruiser],
    PARENT: [exports.auto3gun]
}, exports.dk1 = {
    PARENT: [exports.genericTank],
    LABEL: "DK-1",
    SHAPE: 12,
    SIZE: 25,
    FACING_TYPE: "autospin",
    TURRETS: [{
        POSITION: [5, 10, 0, 0, 180, 0],
        TYPE: exports.dk1turret
    }, {
        POSITION: [5, 10, 0, 30, 180, 0],
        TYPE: exports.dk1turret
    }, {
        POSITION: [5, 10, 0, 60, 180, 0],
        TYPE: exports.dk1turret
    }, {
        POSITION: [5, 10, 0, 90, 180, 0],
        TYPE: exports.dk1turret
    }, {
        POSITION: [5, 10, 0, 120, 180, 0],
        TYPE: exports.dk1turret
    }, {
        POSITION: [5, 10, 0, 150, 180, 0],
        TYPE: exports.dk1turret
    }, {
        POSITION: [5, 10, 0, 180, 180, 0],
        TYPE: exports.dk1turret
    }, {
        POSITION: [5, 10, 0, 210, 180, 0],
        TYPE: exports.dk1turret
    }, {
        POSITION: [5, 10, 0, 240, 180, 0],
        TYPE: exports.dk1turret
    }, {
        POSITION: [5, 10, 0, 270, 180, 0],
        TYPE: exports.dk1turret
    }, {
        POSITION: [5, 10, 0, 300, 180, 0],
        TYPE: exports.dk1turret
    }, {
        POSITION: [5, 10, 0, 330, 180, 0],
        TYPE: exports.dk1turret
    }, {
        POSITION: [10, 0, 0, 0, 360, 1],
        TYPE: exports.rifle
    }]
}, exports.dk2turret = {
    PARENT: [exports.auto3gun],
    GUNS: [{
        POSITION: [7, 7.5, .6, 7, 4, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload]),
            TYPE: exports.swarm,
            MAX_CHILDEN: 15,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }, {
        POSITION: [7, 7.5, .6, 7, -4, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload]),
            TYPE: exports.swarm,
            MAX_CHILDEN: 15,
            STAT_CALCULATOR: gunCalcNames.swarm
        }
    }]
}, exports.dk2 = {
    PARENT: [exports.genericTank],
    LABEL: "DK-2",
    SHAPE: 12,
    SIZE: 30,
    FACING_TYPE: "autospin",
    TURRETS: [{
        POSITION: [5, 10, 0, 0, 180, 0],
        TYPE: exports.dk2turret
    }, {
        POSITION: [5, 10, 0, 30, 180, 0],
        TYPE: exports.dk2turret
    }, {
        POSITION: [5, 10, 0, 60, 180, 0],
        TYPE: exports.dk2turret
    }, {
        POSITION: [5, 10, 0, 90, 180, 0],
        TYPE: exports.dk2turret
    }, {
        POSITION: [5, 10, 0, 120, 180, 0],
        TYPE: exports.dk2turret
    }, {
        POSITION: [5, 10, 0, 150, 180, 0],
        TYPE: exports.dk2turret
    }, {
        POSITION: [5, 10, 0, 180, 180, 0],
        TYPE: exports.dk2turret
    }, {
        POSITION: [5, 10, 0, 210, 180, 0],
        TYPE: exports.dk2turret
    }, {
        POSITION: [5, 10, 0, 240, 180, 0],
        TYPE: exports.dk2turret
    }, {
        POSITION: [5, 10, 0, 270, 180, 0],
        TYPE: exports.dk2turret
    }, {
        POSITION: [5, 10, 0, 300, 180, 0],
        TYPE: exports.dk2turret
    }, {
        POSITION: [5, 10, 0, 330, 180, 0],
        TYPE: exports.dk2turret
    }, {
        POSITION: [10, 0, 0, 0, 360, 1],
        TYPE: exports.musket
    }]
}, exports.opanni = {
    PARENT: [exports.genericTank],
    LABEL: "OP Annihilator",
    DANGER: 6,
    BODY: {
        SPEED: .9 * base.SPEED
    },
    GUNS: [{
        POSITION: [17.5, 16.25, 1, 0, -2, -20, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [17.5, 16.25, 1, 0, 2, 20, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [20.5, 19.5, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
            TYPE: exports.bullet
        }
    }],
    TURRETS: [{
        POSITION: [12, 0, 0, 180, 360, 1],
        TYPE: [exports.flameturret]
    }]
}, exports.defender = {
    PARENT: [exports.miniboss],
    LABEL: "Defender",
    SHAPE: 3,
    COLOR: 2,
    SIZE: 25,
    GUNS: [{
        POSITION: [12, 8, 1, 0, 0, 60, 0]
    }, {
        POSITION: [4, 8, 1.5, 12, 0, 60, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
            TYPE: exports.yellowtrap,
            AUTOFIRE: !0,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }, {
        POSITION: [12, 8, 1, 0, 0, 180, 0]
    }, {
        POSITION: [4, 8, 1.5, 12, 0, 180, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
            TYPE: exports.yellowtrap,
            AUTOFIRE: !0,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }, {
        POSITION: [12, 8, 1, 0, 0, -60, 0]
    }, {
        POSITION: [4, 8, 1.5, 12, 0, -60, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
            TYPE: exports.yellowtrap,
            AUTOFIRE: !0,
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }],
    TURRETS: [{
        POSITION: [4, 7, 0, 0, 360, 1],
        TYPE: exports.defturret
    }, {
        POSITION: [4, 7, 0, 120, 360, 1],
        TYPE: exports.defturret
    }, {
        POSITION: [4, 7, 0, 240, 360, 1],
        TYPE: exports.defturret
    }]
}, exports.octopet = {
    PARENT: [exports.octo],
    INDEPENDENT: !0,
    CONTROLLERS: ["hangOutNearMaster"],
    PASS_THROUGH_WALLS: !0,
    CRAVES_ATTENTION: !1,
    BODY: {
        HEALTH: 9e9,
        SHIELD: 9e9,
        DAMAGE: 0,
        STEALTH: 9e303
    },
    TURRETS: [{
        POSITION: [20, 0, 0, 180, 0, 1],
        TYPE: [exports.genericTank, {
            COLOR: 10
        }]
    }]
}, exports.tcpet = {
    PARENT: [exports.twin],
    INDEPENDENT: !0,
    CONTROLLERS: ["hangOutNearMaster"],
    PASS_THROUGH_WALLS: !0,
    CRAVES_ATTENTION: !1,
    BODY: {
        HEALTH: 9e9,
        SHIELD: 9e9,
        DAMAGE: 0,
        STEALTH: 9e303
    },
    TURRETS: [{
        POSITION: [20, 0, 0, 180, 0, 1],
        TYPE: [exports.genericTank, {
            COLOR: 10
        }]
    }, {
        POSITION: [12, 0, 0, 180, 0, 1],
        TYPE: exports.twin
    }]
}, exports.healturret = {
    PARENT: [exports.genericTank],
    LABEL: "",
    COTROLLERS: ["slowSpin"],
    GUNS: [{
        POSITION: [10, 11, -.5, 16, 0, 0, 0]
    }, {
        POSITION: [23, 12, -1.1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.single]),
            TYPE: exports.healbullet,
            MAX_CHILDREN: 4,
            AUTOFIRE: !0
        }
    }, {
        POSITION: [10, 11, -.5, 16, 0, 120, 0]
    }, {
        POSITION: [23, 12, -1.1, 0, 0, 120, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.single]),
            TYPE: exports.healbullet,
            MAX_CHILDREN: 4,
            AUTOFIRE: !0
        }
    }, {
        POSITION: [10, 11, -.5, 16, 0, -120, 0]
    }, {
        POSITION: [23, 12, -1.1, 0, 0, -120, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.single]),
            TYPE: exports.healbullet,
            MAX_CHILDREN: 4,
            AUTOFIRE: !0
        }
    }]
}, exports.destroyerSanctuary = {
    LABEL: "Sanctuary",
    PARENT: [exports.sanctuary],
    FACING_TYPE: "autospin",
    TURRETS: [{
        POSITION: [22, 0, 0, 0, 360, 0],
        TYPE: exports.dominationBody
    }, {
        POSITION: [20, 0, 0, 0, 360, 0],
        TYPE: exports.destroyerx
    }, {
        POSITION: [8, 0, 0, 0, 360, 1],
        TYPE: [exports.healturret, {
            INDEPENDENT: !0
        }]
    }]
}, exports.gunnerSanctuary = {
    LABEL: "Sanctuary",
    PARENT: [exports.sanctuary],
    FACING_TYPE: "autospin",
    TURRETS: [{
        POSITION: [22, 0, 0, 0, 360, 0],
        TYPE: exports.dominationBody
    }, {
        POSITION: [20, 0, 0, 0, 360, 0],
        TYPE: exports.gunnerx
    }, {
        POSITION: [8, 0, 0, 0, 360, 1],
        TYPE: [exports.healturret, {
            INDEPENDENT: !0
        }]
    }]
}, exports.trapperSanctuary = {
    LABEL: "Sanctuary",
    PARENT: [exports.sanctuary],
    FACING_TYPE: "autospin",
    TURRETS: [{
        POSITION: [22, 0, 0, 0, 360, 0],
        TYPE: exports.dominationBody
    }, {
        POSITION: [20, 0, 0, 0, 0, 0],
        TYPE: exports.trapperx
    }, {
        POSITION: [8, 0, 0, 0, 360, 1],
        TYPE: [exports.healturret, {
            INDEPENDENT: !0
        }]
    }]
}, exports.builderSanctuary = {
    LABEL: "Sanctuary",
    PARENT: [exports.sanctuary],
    FACING_TYPE: "autospin",
    TURRETS: [{
        POSITION: [22, 0, 0, 0, 360, 0],
        TYPE: exports.dominationBody
    }, {
        POSITION: [20, 0, 0, 0, 0, 0],
        TYPE: exports.builderx
    }, {
        POSITION: [8, 0, 0, 0, 360, 1],
        TYPE: [exports.healturret, {
            INDEPENDENT: !0
        }]
    }]
}, exports.artySanctuary = {
    LABEL: "Sanctuary",
    PARENT: [exports.sanctuary],
    FACING_TYPE: "autospin",
    TURRETS: [{
        POSITION: [22, 0, 0, 0, 360, 0],
        TYPE: exports.dominationBody
    }, {
        POSITION: [20, 0, 0, 0, 360, 0],
        TYPE: exports.artyx
    }, {
        POSITION: [8, 0, 0, 0, 360, 1],
        TYPE: [exports.healturret, {
            INDEPENDENT: !0
        }]
    }]
}, exports.acolytepet = {
    PARENT: [exports.hotheadpet],
    GUNS: [{
        POSITION: [24, 8.5, 1, 0, 0, 0, 0]
    }, {
        POSITION: [15, 5, 1, 0, 0, 0, 0],
        PROPERTIES: {
            FILL: 14
        }
    }]
}, exports.andrewbasic = {
    PARENT: [exports.developer],
    GUNS: [{
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [.5, 15, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([
                [15, .5, 1e-4, 2, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
            ]),
            AUTOFIRE: !0,
            TYPE: exports.acolytepet,
            MAX_CHILDREN: 1
        }
    }]
}, exports.wutisdis = {
    PARENT: [exports.genericTank],
    LABEL: "Shape test",
    SHAPE: 123,
    COLOR_OVERRIDE: 0
}, exports.exqpet = {
    PARENT: [exports.genericTank],
    INDEPENDENT: !0,
    CONTROLLERS: ["hangOutNearMaster"],
    PASS_THROUGH_WALLS: !0,
    BODY: {
        HEALTH: 9e9,
        SHIELD: 9e9,
        STEALTH: 9e303,
        DAMAGE: 0
    },
    CRAVES_ATTENTION: !1,
    COLOR_OVERRIDE: 2,
    FACING_TYPE: "autospin",
    TURRETS: [{
        POSITION: [3, 10, 0, 18, 100, 0],
        TYPE: exports.artillery
    }, {
        POSITION: [3, 10, 0, 36, 100, 0],
        TYPE: exports.artillery
    }, {
        POSITION: [3, 10, 0, 54, 100, 0],
        TYPE: exports.artillery
    }, {
        POSITION: [3, 10, 0, 72, 100, 0],
        TYPE: exports.artillery
    }, {
        POSITION: [3, 10, 0, 90, 100, 0],
        TYPE: exports.artillery
    }, {
        POSITION: [3, 10, 0, 108, 100, 0],
        TYPE: exports.artillery
    }, {
        POSITION: [3, 10, 0, 126, 100, 0],
        TYPE: exports.artillery
    }, {
        POSITION: [3, 10, 0, 144, 100, 0],
        TYPE: exports.artillery
    }, {
        POSITION: [3, 10, 0, 162, 100, 0],
        TYPE: exports.artillery
    }, {
        POSITION: [3, 10, 0, 180, 100, 0],
        TYPE: exports.artillery
    }, {
        POSITION: [3, 10, 0, 198, 100, 0],
        TYPE: exports.artillery
    }, {
        POSITION: [3, 10, 0, 216, 100, 0],
        TYPE: exports.artillery
    }, {
        POSITION: [3, 10, 0, 234, 100, 0],
        TYPE: exports.artillery
    }, {
        POSITION: [3, 10, 0, 252, 100, 0],
        TYPE: exports.artillery
    }, {
        POSITION: [3, 10, 0, 270, 100, 0],
        TYPE: exports.artillery
    }, {
        POSITION: [3, 10, 0, 288, 100, 0],
        TYPE: exports.artillery
    }, {
        POSITION: [3, 10, 0, 306, 100, 0],
        TYPE: exports.artillery
    }, {
        POSITION: [3, 10, 0, 324, 100, 0],
        TYPE: exports.artillery
    }, {
        POSITION: [3, 10, 0, 342, 100, 0],
        TYPE: exports.artillery
    }, {
        POSITION: [3, 10, 0, 360, 100, 0],
        TYPE: exports.artillery
    }, {
        POSITION: [10, 0, 0, 0, 360, 1],
        TYPE: [exports.ambusher2, {
            COLOR: 2
        }]
    }]
}, exports.paladinSunchipBody2 = {
    PARENT: [exports.genericTank],
    SHAPE: 7,
    CONTROLLERS: ["counterslowspin", "nearestDifferentMaster"],
    GUNS: []
};
for (let T = 0; T < 7; T++) exports.paladinSunchipBody2.GUNS.push({
    POSITION: [4, 6.5, 1.2, 7.5, 0, 360 / 7 * T + 360 / 14, 0]
});
exports.paladinSwarmer2 = {
    PARENT: [exports.genericTank],
    GUNS: [{
        POSITION: [14, 14, -1.2, 5, 0, 0, 0]
    }, {
        POSITION: [15, 12, 1, 5, 0, 0, 0]
    }]
}, exports.paladinSwarmerBody2 = {
    PARENT: [exports.genericTank],
    LABEL: "Paladin Swarmer",
    SHAPE: 5,
    SKILL: setBuild("5555550555"),
    SIZE: 10,
    CONTROLLERS: ["slowSpin"],
    INDEPENDENT: !0,
    TURRETS: [{
        POSITION: [9, 8, 0, 180, 180, 0],
        TYPE: exports.paladinSwarmer2
    }, {
        POSITION: [9, 8, 0, 108, 180, 0],
        TYPE: exports.paladinSwarmer2
    }, {
        POSITION: [9, 8, 0, 35, 180, 0],
        TYPE: exports.paladinSwarmer2
    }, {
        POSITION: [9, 8, 0, -35, 180, 0],
        TYPE: exports.paladinSwarmer2
    }, {
        POSITION: [9, 8, 0, -108, 180, 0],
        TYPE: exports.paladinSwarmer2
    }]
}, exports.paladin2 = {
    PARENT: [exports.hotheadpet],
    COLOR_OVERRIDE: 14,
    SHAPE: 9,
    BODY: {
        HEALTH: 9e9,
        SHIELD: 9e9,
        STEALTH: 9e303,
        DAMAGE: 0
    },
    SIZE: 20,
    GUNS: [],
    FACING_TYPE: "autospin",
    TURRETS: [...celestialTrapTurretArray2, {
        POSITION: [15, 0, 0, 0, 360, 1],
        TYPE: [exports.paladinSunchipBody2, {
            COLOR: 14
        }]
    }, {
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: [exports.paladinSwarmerBody2, {
            COLOR: 14
        }]
    }]
}, exports.tcdev = {
    PARENT: [exports.developer],
    GUNS: [{
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [.5, 15, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([
                [15, .5, 1e-4, 2, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
            ]),
            AUTOFIRE: !0,
            TYPE: exports.tcpet,
            MAX_CHILDREN: 1
        }
    }, {
        POSITION: [.5, 15, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([
                [15, .5, 1e-4, 2, 2, 2, 2, 2, 1, 1.25, 5, 1, 2]
            ]),
            AUTOFIRE: !0,
            TYPE: exports.paladin2,
            MAX_CHILDREN: 1
        }
    }]
}, exports.annipet = {
    PARENT: [exports.anni],
    INDEPENDENT: !0,
    CONTROLLERS: ["hangOutNearMaster"],
    PASS_THROUGH_WALLS: !0,
    BODY: {
        HEALTH: 9e9,
        SHIELD: 9e9,
        STEALTH: 9e303,
        DAMAGE: 0
    },
    CRAVES_ATTENTION: !1,
    COLOR_OVERRIDE: 14
}, exports.coolbasic = {
    PARENT: [exports.moderator],
    GUNS: [{
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [.5, 15, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([
                [15, .5, 1e-4, 2, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
            ]),
            AUTOFIRE: !0,
            TYPE: exports.annipet,
            MAX_CHILDREN: 1
        }
    }, {
        POSITION: [.5, 15, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([
                [15, .5, 1e-4, 2, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
            ]),
            AUTOFIRE: !0,
            TYPE: exports.summonpet,
            MAX_CHILDREN: 1
        }
    }]
}, exports.atbasic = {
    PARENT: [exports.basic],
    GUNS: [{
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [.5, 15, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([
                [15, .5, 1e-4, 2, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
            ]),
            AUTOFIRE: !0,
            TYPE: exports.paladin2,
            MAX_CHILDREN: 1
        }
    }]
}, exports.terminal_pet = {
    PARENT: [exports.hotheadpet],
    NAME: "(DomOS) Secure Shell",
    NAMECOLOR: "#90EE90",
    COLOR_OVERRIDE: 11,
    TYPE: "pet",
    PASS_THROUGH_WALLS: !0,
    GUNS: [{
        POSITION: [18, 2, 1, 0, -5, 0, 1.25]
    }, {
        POSITION: [18, 2, 1, 0, 5, 0, 1.75]
    }, {
        POSITION: [19, 2, 1, 0, -2.5, 0, .25]
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, .75]
    }, {
        POSITION: [20, 2, 1, 0, 0, 0, 0]
    }, {
        POSITION: [6.5, 12, -1.4, 5.5, 0, 0, 0]
    }, {
        POSITION: [17, 9, .6, 7, 0, 180, 0]
    }],
    TURRETS: [{
        POSITION: [9, 20, 0, 180, 360, 1],
        TYPE: exports.propellerB
    }, {
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: exports.propellerA
    }]
}, exports.tbpet = {
    PARENT: [exports.genericTank],
    BODY: {
        HEALTH: 9e9,
        SHIELD: 9e9,
        STEALTH: 9e303,
        DAMAGE: 0,
        SPEED: base.SPEED
    },
    TYPE: "pet",
    COLOR_OVERRIDE: 165,
    INDEPENDENT: !0,
    CONTROLLERS: ['hangOutNearMaster'],
    GUNS: [{
        POSITION: [12, 3.5, 1, 0, 7.25, 0, .5],
        PROPERTIES: {
            SKIN: 1,
        }
    }, {
        POSITION: [12, 3.5, 1, 0, -7.25, 0, .75],
        PROPERTIES: {
            SKIN: 1,
        }
    }, {
        POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
        PROPERTIES: {
            SKIN: 1,
        }
    }, {
        POSITION: [16, 3.5, 1, 0, -3.75, 0, .25],
        PROPERTIES: {
            SKIN: 1,
        }
    }]
}, exports.axpet = {
    PARENT: [exports.genericTank],
    NAME: "ᕹʋᴄκe𝚝0𝘧ꕔ𝕩ܘﺎܘ𝚝ﺎ",
    NAMECOLOR: "#EF99C3",
    BODY: {
        HEALTH: 9e9,
        SHIELD: 9e9,
        STEALTH: 9e303,
        DAMAGE: 0,
        SPEED: base.SPEED
    },
    TYPE: "pet",
    COLOR_OVERRIDE: 5,
    INDEPENDENT: !0,
    CAN_BE_ON_LEADERBOARD: !1,
    ACCEPTS_SCORE: !1,
    CONTROLLERS: ['hangOutNearMaster'],
    GUNS: [{
        POSITION: [14, 8, 1, 0, -3, -30+180, .667],
    }, {
        POSITION: [14, 8, 1, 0, 3, 30+180, .667],
    }, {
        POSITION: [17, 8, 1, 0, -2, -15+180, .333],
    }, {
        POSITION: [17, 8, 1, 0, 2, 15+180, .333],
    }, {
        POSITION: [20, 8, 1, 0, 0, 180, 0],
    }, {
        POSITION: [18, 8, 1, 0, 5.5, 0, 0],
    }, {
        POSITION: [18, 8, 1, 0, -5.5, 0, .5],
    }]
}, exports.jbbasic = {
    PARENT: [exports.developer],
    GUNS: [{
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [.5, 15, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([
                [15, .5, 1e-4, 2.5, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
            ]),
            TYPE: exports.terminal_pet,
            AUTOFIRE: !0,
            MAX_CHILDREN: 1
        }
    }, {
        POSITION: [.5, 15, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([
                [15, .5, 1e-4, 2.5, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
            ]),
            TYPE: exports.axpet,
            AUTOFIRE: !0,
            MAX_CHILDREN: 1
        }
    }]
}, exports.fover = {
    PARENT: [exports.minion],
    LABEL: "Fallen Overlord Clone",
    COLOR_OVERRIDE: 18,
    MAX_CHILDREN: 28,
    FACING_TYPE: "autospin",
    GUNS: [{
        POSITION: [6, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.fallenOverlord]),
            TYPE: exports.gdrone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.fallenOverlord]),
            TYPE: exports.gdrone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.fallenOverlord]),
            TYPE: exports.gdrone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.fallenOverlord]),
            TYPE: exports.gdrone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: !0
        }
    }]
}, exports.fboost = {
    PARENT: [exports.minion],
    LABEL: "Fallen Booster Clone",
    COLOR_OVERRIDE: 18,
    CONTROLLERS: ["nearestDifferentMaster", "mapAltToFire", "mapGoalToTarget", "minion", "hangOutNearMaster"],
    DANGER: 7,
    GUNS: [{
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.muchmorerecoil]),
            TYPE: exports.gbullet,
            LABEL: "Front"
        }
    }, {
        POSITION: [13, 8, 1, 0, -1, 135, .6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.gbullet,
            LABEL: gunCalcNames.thruster
        }
    }, {
        POSITION: [13, 8, 1, 0, 1, 225, .6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.gbullet,
            LABEL: gunCalcNames.thruster
        }
    }, {
        POSITION: [16, 8, 1, 0, 0, 145, .1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.gbullet,
            LABEL: gunCalcNames.thruster
        }
    }, {
        POSITION: [16, 8, 1, 0, 0, 215, .1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.gbullet,
            LABEL: gunCalcNames.thruster
        }
    }]
}, exports.mutant = {
    PARENT: [exports.miniboss],
    LABEL: "Mutant",
    SIZE: 30,
    COLOR: 0,
    GUNS: [{
        POSITION: [5, 7, 1, 10, 0, 0, 0]
    }, {
        POSITION: [2, 9, 1, 14, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory2]),
            TYPE: exports.fboost,
            MAX_CHILDREN: 1,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0
        }
    }, {
        POSITION: [4, 9, 1, 7.5, 0, 0, 0]
    }, {
        POSITION: [5, 7, 1, 10, 0, 180, 0]
    }, {
        POSITION: [4, 6, -1.6, 8, 0, 135, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory, g.pound, g.halfreload, g.halfreload]),
            TYPE: exports.palisade_minion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: !0,
            MAX_CHILDREN: 3,
            SYNCS_SKILLS: !0,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [4, 6, -1.6, 8, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory, g.pound, g.halfreload, g.halfreload]),
            TYPE: exports.palisade_minion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: !0,
            MAX_CHILDREN: 3,
            SYNCS_SKILLS: !0,
            WAIT_TO_CYCLE: !0
        }
    }, {
        POSITION: [2, 9, 1, 14, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory2]),
            TYPE: exports.fover,
            MAX_CHILDREN: 1,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: !0,
            SYNCS_SKILLS: !0
        }
    }, {
        POSITION: [4, 9, 1, 7.5, 0, 180, 0]
    }],
    TURRETS: [{
        POSITION: [8, 10, 0, 45, 160, 0],
        TYPE: exports.skimturret2
    }, {
        POSITION: [8, 10, 0, 90, 160, 0],
        TYPE: exports.bigauto4gun2
    }, {
        POSITION: [8, 10, 0, 225, 160, 0],
        TYPE: exports.panni
    }, {
        POSITION: [8, 10, 0, 315, 160, 0],
        TYPE: exports.sprayTurret
    }, {
        POSITION: [3, 6.5, 0, 0, 360, 1],
        TYPE: exports.defturret
    }, {
        POSITION: [3, 6.5, 0, 120, 360, 1],
        TYPE: exports.defturret
    }, {
        POSITION: [3, 6.5, 0, 240, 360, 1],
        TYPE: exports.defturret
    }, {
        POSITION: [5, 5, 0, 180, 360, 1],
        TYPE: [exports.necromancer2, {
            COLOR: 13
        }]
    }, {
        POSITION: [5, 5, 0, 60, 360, 1],
        TYPE: exports.trapTurret2
    }, {
        POSITION: [5.5, 5, 0, 300, 360, 1],
        TYPE: exports.director2
    }]
}, exports.eventdev.UPGRADES_TIER_1 = [exports.misc, exports.testbed, exports.sentries, exports.basic], exports.lul.UPGRADES_TIER_1 = [exports.crewmate, exports.imposter], exports.lul2.UPGRADES_TIER_1 = [exports.rickrolled], exports.misc.UPGRADES_TIER_1 = [exports.mothership, exports.opanni, exports.realned, exports.lul, exports.basic360, exports.lul2, exports.ak47, exports.weirdspike, exports.antiTankMachine, exports.bigbrain, exports.o0o, exports.STII, exports.lul3], exports.arenaClosers.UPGRADES_TIER_1 = [exports.arenaCloser, exports.microCloser, exports.flankCloser, exports.overCloser, exports.smashCloser, exports.fighterCloser], exports.celestials.UPGRADES_TIER_1 = [exports.theiaLite, exports.zaphkielLite, exports.freyja, exports.paladin, exports.zaphkiel, exports.uriel, exports.cronus, exports.theia, exports.rhea, exports.athena], exports.unfinished.UPGRADES_TIER_1 = [], exports.dominators.UPGRADES_TIER_1 = [exports.destroyerDominator, exports.gunnerDominator, exports.builderDominator, exports.trapperDominator, exports.artyDominator], exports.bosses.UPGRADES_TIER_1 = [exports.elite_destroyer, exports.elite_spawner, exports.elite_gunner, exports.elite_sprayer, exports.elite_battleship, exports.nestKeeper, exports.destructor, exports.eliteCruiser, exports.palisade, exports.skimboss, exports.summoner, exports.omegaocto, exports.hexaraider, exports.celestials, exports.bossesB], exports.devbosses.UPGRADES_TIER_1 = [exports.kronos, exports.gaea, exports.arkemines, exports.atlas, exports.helios], exports.bossesB.UPGRADES_TIER_1 = [exports.fallenBooster, exports.fallenOverlord, exports.tatapo, exports.abomination, exports.mutant, exports.conjure, exports.exquisiter, exports.guardian, exports.defender, exports.extirpator, exports.boss1, exports.boss2, exports.boss3], exports.lul3.UPGRADES_TIER_2 = [exports.spongebob, exports.patrick, exports.squidward, exports.mrcrabs, exports.sandy, exports.plankton, exports.mrspuff, exports.randomfishguy, exports.randomfishwoman];
