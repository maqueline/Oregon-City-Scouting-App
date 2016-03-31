document.addEventListener('deviceready', function () {
                    var persist;
                    readFromFile('persist.txt', function(cnt) {
                        console.log(cnt);
                        if (cnt.substr(0, 5) === "Error") {
                            alert("no persist file yet!");
 persist = {
    people: {},
    user: {
        name: "",
        id: "",
        lastbet: ""
    },
    match: {
        robot: "UHOH",
        number: 1,
        numberOfMatches: "42",
    },
    spec: {
        key: "secret", //this is the secret key that is included...
        matches: [],/* //there can be multiple of these, the app may not have comms to connect every match
            {
                matchNumber: "1",
                role: "R1", //R1, R2, R3, B1, B2, B3 are options
                teamNumber: "1540",
                bettingPick: "RED", //RED or BLUE
                scout: "27", //the scout's id number
                
                notes: "", //the optional scout notes box
                
                //AUTO:
                auto: {
                    startingPosition: "SPYBOX", //should probably be a pulldown for these, SPYBOX, PORTCULLIS, CHIVAL, MOAT, RAMPARTS, DRAWBRIDGE, SALLY, ROCKWALL, TERRAIN, LOWBAR
                    defense: "PORTCULLIS", //should probably be a pulldown for these, PORTCULLIS, CHIVAL, MOAT, RAMPARTS, DRAWBRIDGE, SALLY, ROCKWALL, TERRAIN, LOWBAR, or NONE
                    defenseCross: "REACH", //REACH, CROSS, or NONE
                    score: "NONE", //LOW, HIGH, NONE
                },

                defenses: ["LOWBAR", "PORTCULLIS", "DRAWBRIDGE", "MOAT", "TERRAIN"], //the defenses on the teams side of the field (the ones that they breach)

                //TELE
                teleop: {
                    crosses: { //number of times they cross towards lé non-middle
                        PORTCULLIS: -1,
                        CHIVAL: 3,
                        MOAT: 0,
                        RAMPARTS: 0,
                        DRAWBRIDGE: 1,
                        SALLY: 2,
                        ROCKWALL: 0,
                        TERRAIN: 0,
                        LOWBAR: 0
                    },
                    scores: { //total scores for each defense
                        PORTCULLIS: -1,
                        CHIVAL: 3,
                        MOAT: 2.5,
                        RAMPARTS: 0,
                        DRAWBRIDGE: 1,
                        SALLY: 2,
                        ROCKWALL: 0,
                        TERRAIN: 0,
                        LOWBAR: 0
                    },
                    lowGoalsMade: 3, //number of low goals
                    highGoalsMade: 1, //number of high goals
                    lowGoalsMissed: 1,  //
                    highGoalsMissed: 0, //
                    challenged: true, //did they get onto the little base platform??
                    scaled: false,  //did they lift up??
                },

                misc : {
                    brokenDown: true, //true or false if the robot fell over, broke down, or was disabled during the match
                }
            }
        ]*/
    }
};
window.name = JSON.stringify(persist);
                        } else {
                            persist = JSON.parse(cnt);
                            window.name = JSON.stringify(persist);

                            //persist.spec.matches = [];

                        }
                    });

            });
