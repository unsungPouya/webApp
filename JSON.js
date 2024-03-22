// "use strict";
var singers =[
    {   id:1,
        "artist": "taylor swift",
        "genre": "pop",
        "type": "single",
        "picture": "",
        "albums": [
            {
                "name": "Fearless",
                "date": 2008,
                "songs": {"title" : [ "Love Story", "You Belong With Me"

                ]},
                "cover": "image/covers/fearlessCover"
            }
            
        ]
    },
    {
        id:2,
        "artist": "radio head",
        "genre": ["rock", "electronic"],
        "songNames": [],
        "type": "band",
        "picture": "",
        "albums": [
            {
                "name": "Ok Camputer",
                "date": 1992,
                "songs":{"title" : [ "Karma police", "Paranoid Android"

            ]},
            "cover": "image/covers/ok-computer"
            }],

    },
    {
        id:3,
        "artist": "nirvana",
        "genre": ["rock", "electronic"],
        "songNames": [],
        "type": "band",
        "picture": "",
        "albums": [
            {
                "name": "Nevermind",
                "date": 1992,
                "songs":{"title" : [ "Something in the Way", "Polly"

            ]},
            "cover": "image/covers/nevermind"
            }]
    },
    {
        id:4,
        "artist": "dua lipa",
        "genre": "pop",
        "songNames": [],
        "type": "single",
        "picture": "",
        "albums": [
            {
                "name": "Future Nostalgia",
                "date": "...",
                "songs":{"title" : [ "", ""

            ]},
            "cover": "image/covers/duaLipa"
            }],
        
    }
]
console.log(singers)