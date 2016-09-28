/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Game from '../api/game/game.model';
import Player from '../api/player/player.model';
import User from '../api/user/user.model';

Game.find({}).removeAsync()
  .then(function() {
    Game.create({
    name: "Ping Pong",
    rating_system: "Elo",
    players: [
        {
            _id: "57c74617a8fc220300200e67",
            name: "Adam Markham",
            email: "amarkham@ansolutions.com",
            points: 974,
            __v: 0,
            results: [],
            wins: 1,
            losses: 3
        },
        {
            _id: "57c7462ea8fc220300200e68",
            name: "Jordan Stewart",
            email: "jstewart@ansolutions.com",
            points: 1061,
            __v: 0,
            results: [],
            wins: 5,
            losses: 1
        },
        {
            delta: -13,
            _id: "57c7490ca8fc220300200e69",
            name: "Kyle Craft-Jenkins",
            email: "kcraftjenkins@gmail.com",
            points: 988,
            __v: 0,
            results: [],
            wins: 2,
            losses: 3
        },
        {
            _id: "57c7531adee9190300f10a4f",
            name: "Peter Lane",
            email: "plane@ansolutions.com",
            points: 985,
            __v: 0,
            results: [],
            wins: 0,
            losses: 1
        },
        {
            delta: -14,
            _id: "57c861f55a928e030031e475",
            name: "Jeff Meisenhelder",
            email: "jmeisenhelder@ansolutions.com",
            points: 956,
            __v: 0,
            results: [],
            wins: 1,
            losses: 4
        },
        {
            _id: "57c8620f5a928e030031e476",
            name: "Ryan Denton",
            email: "rdenton@ansolutions.com",
            points: 1059,
            __v: 0,
            results: [],
            wins: 4,
            losses: 0,
            delta: 13
        },
        {
            delta: 15,
            _id: "57c87b065727b80300e3e71a",
            name: "Chris Leggett",
            email: "cleggett@ansolutions.com",
            points: 1015,
            __v: 0,
            results: [],
            wins: 1,
            losses: 0
        },
        {
            delta: -14,
            _id: "57c897e6d0becc030016a1ef",
            name: "Bryan Crawford",
            email: "bcrawford@ansolutions.com",
            points: 968,
            __v: 0,
            results: [],
            wins: 0,
            losses: 2
        },
        {
            delta: 15,
            _id: "57c89ae4d0becc030016a1f0",
            name: "Dustin Humann",
            email: "dhumann@ansolutions.com",
            points: 1015,
            __v: 0,
            results: [],
            wins: 1,
            losses: 0
        },
        {
            _id: "57c8a4fdd0becc030016a1f1",
            name: "Nick Kimes",
            email: "nkimes@ansolutions.com",
            points: 1000,
            __v: 0,
            results: [],
            wins: 0,
            losses: 0
        },
        {
            losses: 0,
            wins: 1,
            results: [],
            __v: 0,
            points: 1016,
            email: "jswartz@ansolutions.com",
            name: "Jake Swartz",
            _id: "57c8a6f6d0becc030016a1f2",
            delta: 15
        },
        {
            losses: 1,
            wins: 0,
            results: [],
            __v: 0,
            points: 985,
            email: "ddavenport@ansolutions.com",
            name: "Devin Davenport",
            _id: "57c860bb5a928e030031e474",
            delta: -15
        },
        {
            losses: 0,
            wins: 1,
            results: [],
            __v: 0,
            points: 1015,
            email: "fgroenert@ansolutions.com",
            name: "Fritz Groenert",
            _id: "57c8a9a0d0becc030016a1f4",
            delta: 15
        },
        {
            losses: 2,
            wins: 1,
            results: [],
            __v: 0,
            points: 989,
            email: "mmcburnett@ansolutions.com",
            name: "Michael Mcburnett",
            _id: "57c9b75c3406da030065134b",
            delta: 17
        },
        {
            losses: 1,
            wins: 0,
            results: [],
            __v: 0,
            points: 983,
            email: "dmitchell@ansolutions.com",
            name: "Dru Mitchell",
            _id: "57c8692d5a928e030031e479",
            delta: -16
        }
    ],
    results: [
        {
            game_date: "2016-08-31T21:04:19.786Z",
            loser: "Jordan Stewart",
            winner: "Adam Markham",
            player2: {
                name: {
                    losses: 0,
                    wins: 0,
                    results: [],
                    __v: 0,
                    points: 1000,
                    email: "jstewart@ansolutions.com",
                    name: "Jordan Stewart",
                    _id: "57c7462ea8fc220300200e68"
                }
            },
            player1: {
                name: {
                    losses: 0,
                    wins: 0,
                    results: [],
                    __v: 0,
                    points: 1000,
                    email: "amarkham@ansolutions.com",
                    name: "Adam Markham",
                    _id: "57c74617a8fc220300200e67"
                }
            },
            players: [
                {
                    name: {
                        losses: 0,
                        wins: 0,
                        results: [],
                        __v: 0,
                        points: 1000,
                        email: "amarkham@ansolutions.com",
                        name: "Adam Markham",
                        _id: "57c74617a8fc220300200e67"
                    }
                },
                {
                    name: {
                        losses: 0,
                        wins: 0,
                        results: [],
                        __v: 0,
                        points: 1000,
                        email: "jstewart@ansolutions.com",
                        name: "Jordan Stewart",
                        _id: "57c7462ea8fc220300200e68"
                    }
                }
            ],
            status: "Final",
            _id: "57c74653598b4989e398c996"
        },
        {
            game_date: "2016-08-31T21:16:29.190Z",
            loser: "Kyle Craft-Jenkins",
            winner: "Jordan Stewart",
            player2: {
                name: {
                    results: [],
                    __v: 0,
                    points: 1000,
                    email: "jstewart@ansolutions.com",
                    name: "Jordan Stewart",
                    _id: "57c7462ea8fc220300200e68"
                }
            },
            player1: {
                name: {
                    losses: 0,
                    wins: 0,
                    results: [],
                    __v: 0,
                    points: 1000,
                    email: "kcraftjenkins@gmail.com",
                    name: "Kyle Craft-Jenkins",
                    _id: "57c7490ca8fc220300200e69"
                }
            },
            players: [
                {
                    name: {
                        losses: 0,
                        wins: 0,
                        results: [],
                        __v: 0,
                        points: 1000,
                        email: "kcraftjenkins@gmail.com",
                        name: "Kyle Craft-Jenkins",
                        _id: "57c7490ca8fc220300200e69"
                    }
                },
                {
                    name: {
                        results: [],
                        __v: 0,
                        points: 1000,
                        email: "jstewart@ansolutions.com",
                        name: "Jordan Stewart",
                        _id: "57c7462ea8fc220300200e68"
                    }
                }
            ],
            status: "Final",
            _id: "57c7492d7c07b29f8405411b"
        },
        {
            game_date: "2016-08-31T22:04:39.861Z",
            loser: "Peter Lane",
            winner: "Jordan Stewart",
            player2: {
                name: {
                    results: [],
                    __v: 0,
                    points: 1000,
                    email: "jstewart@ansolutions.com",
                    name: "Jordan Stewart",
                    _id: "57c7462ea8fc220300200e68"
                }
            },
            player1: {
                name: {
                    losses: 0,
                    wins: 0,
                    results: [],
                    __v: 0,
                    points: 1000,
                    email: "plane@ansolutions.com",
                    name: "Peter Lane",
                    _id: "57c7531adee9190300f10a4f"
                }
            },
            players: [
                {
                    name: {
                        losses: 0,
                        wins: 0,
                        results: [],
                        __v: 0,
                        points: 1000,
                        email: "plane@ansolutions.com",
                        name: "Peter Lane",
                        _id: "57c7531adee9190300f10a4f"
                    }
                },
                {
                    name: {
                        results: [],
                        __v: 0,
                        points: 1000,
                        email: "jstewart@ansolutions.com",
                        name: "Jordan Stewart",
                        _id: "57c7462ea8fc220300200e68"
                    }
                }
            ],
            status: "Final",
            _id: "57c754777bb80e0024aa2baf"
        },
        {
            game_date: "2016-08-31T23:20:53.855Z",
            loser: "Adam Markham",
            winner: "Jordan Stewart",
            player2: {
                name: {
                    results: [],
                    __v: 0,
                    points: 1000,
                    email: "jstewart@ansolutions.com",
                    name: "Jordan Stewart",
                    _id: "57c7462ea8fc220300200e68"
                }
            },
            player1: {
                name: {
                    results: [],
                    __v: 0,
                    points: 1000,
                    email: "amarkham@ansolutions.com",
                    name: "Adam Markham",
                    _id: "57c74617a8fc220300200e67"
                }
            },
            players: [
                {
                    name: {
                        results: [],
                        __v: 0,
                        points: 1000,
                        email: "amarkham@ansolutions.com",
                        name: "Adam Markham",
                        _id: "57c74617a8fc220300200e67"
                    }
                },
                {
                    name: {
                        results: [],
                        __v: 0,
                        points: 1000,
                        email: "jstewart@ansolutions.com",
                        name: "Jordan Stewart",
                        _id: "57c7462ea8fc220300200e68"
                    }
                }
            ],
            status: "Final",
            _id: "57c76655fdb9ecf97caaeb0e"
        },
        {
            game_date: "2016-08-31T23:34:02.432Z",
            loser: "Adam Markham",
            winner: "Jordan Stewart",
            player2: {
                name: {
                    results: [],
                    __v: 0,
                    points: 1000,
                    email: "amarkham@ansolutions.com",
                    name: "Adam Markham",
                    _id: "57c74617a8fc220300200e67"
                }
            },
            player1: {
                name: {
                    results: [],
                    __v: 0,
                    points: 1000,
                    email: "jstewart@ansolutions.com",
                    name: "Jordan Stewart",
                    _id: "57c7462ea8fc220300200e68"
                }
            },
            players: [
                {
                    name: {
                        results: [],
                        __v: 0,
                        points: 1000,
                        email: "jstewart@ansolutions.com",
                        name: "Jordan Stewart",
                        _id: "57c7462ea8fc220300200e68"
                    }
                },
                {
                    name: {
                        results: [],
                        __v: 0,
                        points: 1000,
                        email: "amarkham@ansolutions.com",
                        name: "Adam Markham",
                        _id: "57c74617a8fc220300200e67"
                    }
                }
            ],
            status: "Final",
            _id: "57c7696aeebdd0f9a4bdf46a"
        },
        {
            game_date: "2016-08-31T23:35:01.513Z",
            loser: "Adam Markham",
            winner: "Jordan Stewart",
            player2: {
                name: {
                    results: [],
                    __v: 0,
                    points: 1000,
                    email: "jstewart@ansolutions.com",
                    name: "Jordan Stewart",
                    _id: "57c7462ea8fc220300200e68"
                }
            },
            player1: {
                name: {
                    results: [],
                    __v: 0,
                    points: 1000,
                    email: "amarkham@ansolutions.com",
                    name: "Adam Markham",
                    _id: "57c74617a8fc220300200e67"
                }
            },
            players: [
                {
                    name: {
                        results: [],
                        __v: 0,
                        points: 1000,
                        email: "amarkham@ansolutions.com",
                        name: "Adam Markham",
                        _id: "57c74617a8fc220300200e67"
                    }
                },
                {
                    name: {
                        results: [],
                        __v: 0,
                        points: 1000,
                        email: "jstewart@ansolutions.com",
                        name: "Jordan Stewart",
                        _id: "57c7462ea8fc220300200e68"
                    }
                }
            ],
            status: "Final",
            _id: "57c769a5e04f2f28143fcf46"
        },
        {
            game_date: "2016-09-01T17:15:59.650Z",
            loser: "Jeff Meisenhelder",
            winner: "Ryan Denton",
            player2: {
                name: {
                    losses: 0,
                    wins: 0,
                    results: [],
                    __v: 0,
                    points: 1000,
                    email: "rdenton@ansolutions.com",
                    name: "Ryan Denton",
                    _id: "57c8620f5a928e030031e476"
                }
            },
            player1: {
                name: {
                    losses: 0,
                    wins: 0,
                    results: [],
                    __v: 0,
                    points: 1000,
                    email: "jmeisenhelder@ansolutions.com",
                    name: "Jeff Meisenhelder",
                    _id: "57c861f55a928e030031e475"
                }
            },
            players: [
                {
                    name: {
                        losses: 0,
                        wins: 0,
                        results: [],
                        __v: 0,
                        points: 1000,
                        email: "jmeisenhelder@ansolutions.com",
                        name: "Jeff Meisenhelder",
                        _id: "57c861f55a928e030031e475"
                    }
                },
                {
                    name: {
                        losses: 0,
                        wins: 0,
                        results: [],
                        __v: 0,
                        points: 1000,
                        email: "rdenton@ansolutions.com",
                        name: "Ryan Denton",
                        _id: "57c8620f5a928e030031e476"
                    }
                }
            ],
            status: "Final",
            _id: "57c8624f2d1570ea309dfda6"
        },
        {
            game_date: "2016-09-01T19:02:48.374Z",
            loser: "Kyle Craft-Jenkins",
            winner: "Chris Leggett",
            player2: {
                name: {
                    results: [],
                    __v: 0,
                    points: 1000,
                    email: "kcraftjenkins@gmail.com",
                    name: "Kyle Craft-Jenkins",
                    _id: "57c7490ca8fc220300200e69"
                }
            },
            player1: {
                name: {
                    losses: 0,
                    wins: 0,
                    results: [],
                    __v: 0,
                    points: 1000,
                    email: "cleggett@ansolutions.com",
                    name: "Chris Leggett",
                    _id: "57c87b065727b80300e3e71a"
                }
            },
            players: [
                {
                    name: {
                        losses: 0,
                        wins: 0,
                        results: [],
                        __v: 0,
                        points: 1000,
                        email: "cleggett@ansolutions.com",
                        name: "Chris Leggett",
                        _id: "57c87b065727b80300e3e71a"
                    }
                },
                {
                    name: {
                        results: [],
                        __v: 0,
                        points: 1000,
                        email: "kcraftjenkins@gmail.com",
                        name: "Kyle Craft-Jenkins",
                        _id: "57c7490ca8fc220300200e69"
                    }
                }
            ],
            status: "Final",
            _id: "57c87b5896784233550a5905"
        },
        {
            game_date: "2016-09-01T20:53:26.490Z",
            loser: "Jeff Meisenhelder",
            winner: "Kyle Craft-Jenkins",
            player2: {
                name: {
                    results: [],
                    __v: 0,
                    points: 1000,
                    email: "jmeisenhelder@ansolutions.com",
                    name: "Jeff Meisenhelder",
                    _id: "57c861f55a928e030031e475"
                }
            },
            player1: {
                name: {
                    results: [],
                    __v: 0,
                    points: 1000,
                    email: "kcraftjenkins@gmail.com",
                    name: "Kyle Craft-Jenkins",
                    _id: "57c7490ca8fc220300200e69"
                }
            },
            players: [
                {
                    name: {
                        results: [],
                        __v: 0,
                        points: 1000,
                        email: "kcraftjenkins@gmail.com",
                        name: "Kyle Craft-Jenkins",
                        _id: "57c7490ca8fc220300200e69"
                    }
                },
                {
                    name: {
                        results: [],
                        __v: 0,
                        points: 1000,
                        email: "jmeisenhelder@ansolutions.com",
                        name: "Jeff Meisenhelder",
                        _id: "57c861f55a928e030031e475"
                    }
                }
            ],
            status: "Final",
            _id: "57c89546c97d988c3bf7bb1c"
        },
        {
            game_date: "2016-09-01T21:04:56.831Z",
            loser: "Bryan Crawford",
            winner: "Jeff Meisenhelder",
            player2: {
                name: {
                    losses: 0,
                    wins: 0,
                    results: [],
                    __v: 0,
                    points: 1000,
                    email: "bcrawford@ansolutions.com",
                    name: "Bryan Crawford",
                    _id: "57c897e6d0becc030016a1ef"
                }
            },
            player1: {
                name: {
                    results: [],
                    __v: 0,
                    points: 1000,
                    email: "jmeisenhelder@ansolutions.com",
                    name: "Jeff Meisenhelder",
                    _id: "57c861f55a928e030031e475"
                }
            },
            players: [
                {
                    name: {
                        results: [],
                        __v: 0,
                        points: 1000,
                        email: "jmeisenhelder@ansolutions.com",
                        name: "Jeff Meisenhelder",
                        _id: "57c861f55a928e030031e475"
                    }
                },
                {
                    name: {
                        losses: 0,
                        wins: 0,
                        results: [],
                        __v: 0,
                        points: 1000,
                        email: "bcrawford@ansolutions.com",
                        name: "Bryan Crawford",
                        _id: "57c897e6d0becc030016a1ef"
                    }
                }
            ],
            status: "Final",
            _id: "57c897f8fed134d4b2b186c9"
        },
        {
            game_date: "2016-09-01T21:17:47.947Z",
            loser: "Jeff Meisenhelder",
            winner: "Dustin Humann",
            player2: {
                name: {
                    losses: 0,
                    wins: 0,
                    results: [],
                    __v: 0,
                    points: 1000,
                    email: "dhumann@ansolutions.com",
                    name: "Dustin Humann",
                    _id: "57c89ae4d0becc030016a1f0"
                }
            },
            player1: {
                name: {
                    results: [],
                    __v: 0,
                    points: 1000,
                    email: "jmeisenhelder@ansolutions.com",
                    name: "Jeff Meisenhelder",
                    _id: "57c861f55a928e030031e475"
                }
            },
            players: [
                {
                    name: {
                        results: [],
                        __v: 0,
                        points: 1000,
                        email: "jmeisenhelder@ansolutions.com",
                        name: "Jeff Meisenhelder",
                        _id: "57c861f55a928e030031e475"
                    }
                },
                {
                    name: {
                        losses: 0,
                        wins: 0,
                        results: [],
                        __v: 0,
                        points: 1000,
                        email: "dhumann@ansolutions.com",
                        name: "Dustin Humann",
                        _id: "57c89ae4d0becc030016a1f0"
                    }
                }
            ],
            status: "Final",
            _id: "57c89afb379197d34683282a"
        },
        {
            _id: "57c8a52859de596286135b9c",
            status: "In Progress",
            players: [
                {
                    name: {
                        _id: "57c8a4fdd0becc030016a1f1",
                        name: "Nick Kimes",
                        email: "nkimes@ansolutions.com",
                        points: 1000,
                        __v: 0,
                        results: [],
                        wins: 0,
                        losses: 0
                    }
                },
                {
                    name: {
                        _id: "57c7462ea8fc220300200e68",
                        name: "Jordan Stewart",
                        email: "jstewart@ansolutions.com",
                        points: 1000,
                        __v: 0,
                        results: []
                    }
                }
            ],
            player1: {
                name: {
                    _id: "57c8a4fdd0becc030016a1f1",
                    name: "Nick Kimes",
                    email: "nkimes@ansolutions.com",
                    points: 1000,
                    __v: 0,
                    results: [],
                    wins: 0,
                    losses: 0
                }
            },
            player2: {
                name: {
                    _id: "57c7462ea8fc220300200e68",
                    name: "Jordan Stewart",
                    email: "jstewart@ansolutions.com",
                    points: 1000,
                    __v: 0,
                    results: []
                }
            },
            winner: "",
            loser: "",
            game_date: "2016-09-01T22:01:12.688Z"
        },
        {
            _id: "57c8a71144676c6df54f4dfe",
            status: "Final",
            players: [
                {
                    name: {
                        _id: "57c8a6f6d0becc030016a1f2",
                        name: "Jake Swartz",
                        email: "jswartz@ansolutions.com",
                        points: 1000,
                        __v: 0,
                        results: [],
                        wins: 0,
                        losses: 0
                    }
                },
                {
                    name: {
                        _id: "57c860bb5a928e030031e474",
                        name: "Devin Davenport",
                        email: "ddavenport@ansolutions.com",
                        points: 1000,
                        __v: 0,
                        results: [],
                        wins: 0,
                        losses: 0
                    }
                }
            ],
            player1: {
                name: {
                    _id: "57c8a6f6d0becc030016a1f2",
                    name: "Jake Swartz",
                    email: "jswartz@ansolutions.com",
                    points: 1000,
                    __v: 0,
                    results: [],
                    wins: 0,
                    losses: 0
                }
            },
            player2: {
                name: {
                    _id: "57c860bb5a928e030031e474",
                    name: "Devin Davenport",
                    email: "ddavenport@ansolutions.com",
                    points: 1000,
                    __v: 0,
                    results: [],
                    wins: 0,
                    losses: 0
                }
            },
            winner: "Jake Swartz",
            loser: "Devin Davenport",
            game_date: "2016-09-01T22:09:21.003Z"
        },
        {
            _id: "57c8a9b003d02e02db185551",
            status: "Final",
            players: [
                {
                    name: {
                        _id: "57c897e6d0becc030016a1ef",
                        name: "Bryan Crawford",
                        email: "bcrawford@ansolutions.com",
                        points: 1000,
                        __v: 0,
                        results: []
                    }
                },
                {
                    name: {
                        _id: "57c8a9a0d0becc030016a1f4",
                        name: "Fritz Groenert",
                        email: "fgroenert@ansolutions.com",
                        points: 1000,
                        __v: 0,
                        results: [],
                        wins: 0,
                        losses: 0
                    }
                }
            ],
            player1: {
                name: {
                    _id: "57c897e6d0becc030016a1ef",
                    name: "Bryan Crawford",
                    email: "bcrawford@ansolutions.com",
                    points: 1000,
                    __v: 0,
                    results: []
                }
            },
            player2: {
                name: {
                    _id: "57c8a9a0d0becc030016a1f4",
                    name: "Fritz Groenert",
                    email: "fgroenert@ansolutions.com",
                    points: 1000,
                    __v: 0,
                    results: [],
                    wins: 0,
                    losses: 0
                }
            },
            winner: "Fritz Groenert",
            loser: "Bryan Crawford",
            game_date: "2016-09-01T22:20:32.339Z"
        },
        {
            _id: "57c9ae1297d375885d7b036f",
            status: "Final",
            players: [
                {
                    name: {
                        _id: "57c7490ca8fc220300200e69",
                        name: "Kyle Craft-Jenkins",
                        email: "kcraftjenkins@gmail.com",
                        points: 1000,
                        __v: 0,
                        results: []
                    }
                },
                {
                    name: {
                        _id: "57c861f55a928e030031e475",
                        name: "Jeff Meisenhelder",
                        email: "jmeisenhelder@ansolutions.com",
                        points: 1000,
                        __v: 0,
                        results: []
                    }
                }
            ],
            player1: {
                name: {
                    _id: "57c7490ca8fc220300200e69",
                    name: "Kyle Craft-Jenkins",
                    email: "kcraftjenkins@gmail.com",
                    points: 1000,
                    __v: 0,
                    results: []
                }
            },
            player2: {
                name: {
                    _id: "57c861f55a928e030031e475",
                    name: "Jeff Meisenhelder",
                    email: "jmeisenhelder@ansolutions.com",
                    points: 1000,
                    __v: 0,
                    results: []
                }
            },
            winner: "Kyle Craft-Jenkins",
            loser: "Jeff Meisenhelder",
            game_date: "2016-09-02T16:51:30.706Z"
        },
        {
            _id: "57c9b774a79d512663fbf0d0",
            status: "Final",
            players: [
                {
                    name: {
                        _id: "57c8620f5a928e030031e476",
                        name: "Ryan Denton",
                        email: "rdenton@ansolutions.com",
                        points: 1000,
                        __v: 0,
                        results: []
                    }
                },
                {
                    name: {
                        _id: "57c9b75c3406da030065134b",
                        name: "Michael Mcburnett",
                        email: "mmcburnett@ansolutions.com",
                        points: 1000,
                        __v: 0,
                        results: [],
                        wins: 0,
                        losses: 0
                    }
                }
            ],
            player1: {
                name: {
                    _id: "57c8620f5a928e030031e476",
                    name: "Ryan Denton",
                    email: "rdenton@ansolutions.com",
                    points: 1000,
                    __v: 0,
                    results: []
                }
            },
            player2: {
                name: {
                    _id: "57c9b75c3406da030065134b",
                    name: "Michael Mcburnett",
                    email: "mmcburnett@ansolutions.com",
                    points: 1000,
                    __v: 0,
                    results: [],
                    wins: 0,
                    losses: 0
                }
            },
            winner: "Ryan Denton",
            loser: "Michael Mcburnett",
            game_date: "2016-09-02T17:31:32.967Z"
        },
        {
            _id: "57c9b872ce6bbce89976b5bd",
            status: "Final",
            players: [
                {
                    name: {
                        _id: "57c8620f5a928e030031e476",
                        name: "Ryan Denton",
                        email: "rdenton@ansolutions.com",
                        points: 1000,
                        __v: 0,
                        results: []
                    }
                },
                {
                    name: {
                        _id: "57c9b75c3406da030065134b",
                        name: "Michael Mcburnett",
                        email: "mmcburnett@ansolutions.com",
                        points: 1000,
                        __v: 0,
                        results: []
                    }
                }
            ],
            player1: {
                name: {
                    _id: "57c8620f5a928e030031e476",
                    name: "Ryan Denton",
                    email: "rdenton@ansolutions.com",
                    points: 1000,
                    __v: 0,
                    results: []
                }
            },
            player2: {
                name: {
                    _id: "57c9b75c3406da030065134b",
                    name: "Michael Mcburnett",
                    email: "mmcburnett@ansolutions.com",
                    points: 1000,
                    __v: 0,
                    results: []
                }
            },
            winner: "Ryan Denton",
            loser: "Michael Mcburnett",
            game_date: "2016-09-02T17:35:46.137Z"
        },
        {
            _id: "57c9b963aac03fd0d88d7dc7",
            status: "Final",
            players: [
                {
                    name: {
                        _id: "57c7490ca8fc220300200e69",
                        name: "Kyle Craft-Jenkins",
                        email: "kcraftjenkins@gmail.com",
                        points: 1000,
                        __v: 0,
                        results: []
                    }
                },
                {
                    name: {
                        _id: "57c8620f5a928e030031e476",
                        name: "Ryan Denton",
                        email: "rdenton@ansolutions.com",
                        points: 1000,
                        __v: 0,
                        results: []
                    }
                }
            ],
            player1: {
                name: {
                    _id: "57c7490ca8fc220300200e69",
                    name: "Kyle Craft-Jenkins",
                    email: "kcraftjenkins@gmail.com",
                    points: 1000,
                    __v: 0,
                    results: []
                }
            },
            player2: {
                name: {
                    _id: "57c8620f5a928e030031e476",
                    name: "Ryan Denton",
                    email: "rdenton@ansolutions.com",
                    points: 1000,
                    __v: 0,
                    results: []
                }
            },
            winner: "Ryan Denton",
            loser: "Kyle Craft-Jenkins",
            game_date: "2016-09-02T17:39:47.640Z"
        },
        {
            _id: "57c9d1a12228603a31dab497",
            status: "Final",
            players: [
                {
                    name: {
                        _id: "57c9b75c3406da030065134b",
                        name: "Michael Mcburnett",
                        email: "mmcburnett@ansolutions.com",
                        points: 1000,
                        __v: 0,
                        results: []
                    }
                },
                {
                    name: {
                        _id: "57c8692d5a928e030031e479",
                        name: "Dru Mitchell",
                        email: "dmitchell@ansolutions.com",
                        points: 1000,
                        __v: 0,
                        results: [],
                        wins: 0,
                        losses: 0
                    }
                }
            ],
            player1: {
                name: {
                    _id: "57c9b75c3406da030065134b",
                    name: "Michael Mcburnett",
                    email: "mmcburnett@ansolutions.com",
                    points: 1000,
                    __v: 0,
                    results: []
                }
            },
            player2: {
                name: {
                    _id: "57c8692d5a928e030031e479",
                    name: "Dru Mitchell",
                    email: "dmitchell@ansolutions.com",
                    points: 1000,
                    __v: 0,
                    results: [],
                    wins: 0,
                    losses: 0
                }
            },
            winner: "Michael Mcburnett",
            loser: "Dru Mitchell",
            game_date: "2016-09-02T19:23:13.909Z"
        }
    ],
    __v: 28
}).then(function(){
      console.log("Finished creating the games");
    });
  });

    Player.find({}).removeAsync()
      .then(function() {
        Player.create({
          name: 'Jordan Stewart',
          email:'jstewart@ansolutions.com'
        }, {
          name: 'Kyle Craft-Jenkins',
          email:'kcraftjenkins@ansolutions.com'
        },{
          name:'Bryant Flippo',
          email:'bflippo@ansolutions.com'
        }).then(function(){
          console.log("Finished creating the players");
        });
      });

User.find({}).removeAsync()
  .then(function() {
    User.createAsync({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(function() {
      console.log('finished populating users');
    });
  });
