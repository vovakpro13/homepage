const recentHistory = [
    {
        year: '2016 - 2018',
        eventsHTML: [
            'Amongst many fighters of the past was featured in the movie "Ready Player One". Ryu ready always!',
            'In "Street Fighter V" once and for all erased M.Bison from earth and tamed my inner Evil Ryu. Also spent some time on a side-project, mini-series "Street Fighter: Resurrection".',
            'United with unknown until then to me Power Rangers to defea resurrected M.Bison.Damn good fighters they are, even not knowing karate ways!'
        ]
    },
    {
        year: 2014,
        eventsHTML: ['Filmed in a martial arts tutorial "Street Fighter: Assassin\'s Fist", revealing to audience forgotten art of Ansatsuken.']
    },
    {
        year: 2012,
        eventsHTML: ['The gods of intenet concluded me in the animated movie "Wreck-It Ralph", but rewarded me with a good drink for it!']
    },
    {
        year: 2008,
        eventsHTML: ['My evil alter ego sneaked out of control and became a boss in "Street Fighter IV".']
    },
    {
        year: 2006,
        eventsHTML: ['Borrowed my famous ripped gi to Soki in "Onimusha: Dawn of Dreams", gods informed me he needed that for the battle.']
    },
];
const oldHistory = [
    {
        id:1,
        year: 1998,
        eventsHTML: [
            'Defeated M. Bison in "Street Fighter Alpha 2", bastard wanted to use my heroic body for his evil intentions, but retreated with shame. Also this year I encountered Marvel universe in "Marvel vs. Capcom: Clash of Super Heroes" fighter,loyal to my employer, Capcom, of course.',
            'Some smile :)'

        ],

    },
    {
        id:1465,
        year: 1997,
        eventsHTML: ['Reunited with Ken, my friend and opponent in "Street Fighter III". Men\'s friendship works mysteriously. Also helped with Arika project "Street Fighter EX"']
    },
    {
        id:1546567,
        year: 1996,
        eventsHTML: ['Took care of villainous Akuma in "Street Fighter Alpha 2". As a freelance on "Super Puzzle Fighter II Turbo" tried myself in a new genre, puzzle games. Let the wrath of seven heavens come upon these malicious enigmas, never again!']
    },
    {
        id:134654566,
        year: 1995,
        eventsHTML: ['Kept fighting in "Street Fighter Alpha: Warriors\' Dreams".']
    },
    {
        id:17687678,
        year: 1994,
        eventsHTML: ['Screened in a movie "Street Fighter", so that the batllesof past would not be forgotten by millenial generation.']
    },
    {
        id:3254641,
        year: 1991,
        eventsHTML: ['Was promoted to "Street Fighter II". Didn\'t stay there for long, celebrations and office dwelling is not for me!']
    },
    {
        id:167823,
        year: 1987,
        eventsHTML: ['Started working for Capcom project "Street Fighter". My partner was Ken Masters, the boss\'name was Sagat.']
    },
];
const lists = [
    {
        fatherId: 'timelineRecent',
        listParameters: {
            tag: 'li',
            classList: [],
            data: recentHistory,
            htmlCreator: htmlHistoryItem
        }
    }
];

const publications = [
    {
        year: 2011,
        eventsHTML: ['The true and humble story of me under pseudonim Tyler Wilde in an article "The evolution of Ken and Ryu"']
    },
    {
        year: '2003-2018',
        eventsHTML: ['For 15 years I have published comic books with Udon Entertainment depicting my adventures, bitter lessons and great victories.']
    }
];


const achievments = [
    {
        textHTML: '#1 in "Top 25 Street Fighter Characters" by IGN, who also called me "fancy", "icon" and "a\n' +
            'testament to the virtue of simplicity" ❤'
    },
    {
        textHTML: '#2 in "Top 20 Street Fighter Characters of All Time" by GameDaily, same council found me\n' +
            'worth of #6 place in "Top 25 Capcom Characters of All Time", which I proudly share with my\n' +
            'partner Ken'
    },
    {
        textHTML: 'I was named "5th Most Powerful Street Fighter Character" by Screen Rant-san'
    },
    {
        textHTML: '#71 in "Top 100 Heroes of All Time" by UGO Networks, also recognized #2 in their list of\n' +
            '"Top 50 Street Fighter Characters"'
    },
    {
        textHTML: 'In a survey of 4000 online matches for Super Street Fighter IV, I got to be the most popular\n' +
            'character, with 16.6% of players choosing my side'
    },
];


const detailBlocks = [
    {
        fatherId: 'timelineBack',
        detailBlock: {
            blockId: 1,
            tag: 'li',
            tagClasses: ['details'],
            label: '<h6>Back then</h6>',


            listId: 'backItems',
            listItem: {
                tag: 'li',
                classList: ['details'],
                data: oldHistory,
                htmlCreator: htmlBackEventsItem
            },

            htmlCreator: htmlDetailsBlock,

        },

    },
    {
        fatherId: 'details',
        detailBlock: {
            blockId: 2,
            tag: 'li',
            tagClasses: ['details'],
            label: '<h3>PUBLICATIONS</h3>',


            listId: 'pubItems',
            listItem: {
                tag: 'p',
                classList: [],
                data: publications,
                htmlCreator: htmlHistoryItem
            },

            htmlCreator: htmlDetailsBlock,

        },
    },
    {
        fatherId: 'details',
        detailBlock: {
            tag: 'li',
            tagClasses: ['highlighted'],
            title: '<strong>ACHIEVEMENTS 🎉</strong>',


            listId: 'achievmentItems',
            listItem: {
                tag: 'li',
                classList: [],
                data: achievments,
                htmlCreator: htmlAchievmentsItem
            },

            htmlCreator: htmlAchievmentsBlock
        },

    },
    {
        fatherId: 'rightSide',
        detailBlock: {
            tag: 'section',
            tagClasses: [],
            title: 'LIFE & EDUCATION',
            listId: 'life',
            listItem: {
                tag: 'span',
                classList: [],
                data: ['To live is to fight and to fight is to live. I started learning fighting at my master Gouken\'s castle, I was beaten at head way too often to remember when exactly.'],
                htmlCreator: function(text){return  text}
            },

            htmlCreator: htmlSimpleSectionBlock
        },

    },
    {
        fatherId: 'rightSide',
        detailBlock: {
            tag: 'section',
            tagClasses: [],
            title: 'Languages',
            listId: 'lang',
            listItem: {
                tag: 'span',
                classList: ['language'],
                data: ['🇺🇸 ENGLISH  ', ' 🇨🇳 MANDARIN  ', ' 🇯🇵 JAPANESE '],
                htmlCreator: (lang) => lang + ' | '

            },

            htmlCreator: htmlSimpleSectionBlock
        },

    },
    {
        fatherId: 'rightSide',
        detailBlock: {
            tag: 'section',
            tagClasses: [],
            attributes: [{attr:"style", value: "height:170px"}],
            title: 'Skills',
            listId: 'skills',
            listItem: {
                tag: 'a',
                classList: ['label'],
                data: [
                    'KARATE', 'ENERGY', '<em>ATTACK</em>', 'SHORYUKEN', '<b>WALKING</b>', 'BAREFOOT', '<b>PLAYING VIDEOGAMES</b>', 'DOING BURGERS', 'MASHING POTATOES',
                    'COPYWRITING', 'ACTING VOICEOVERS'
                ],
                htmlCreator: skill => skill

            },

            htmlCreator: ({title,listId}) => `<h3>${title}</h3> <div class="labels"id="${listId}"></div>`

        },

    },
    {
        fatherId: 'rightSide',
        detailBlock: {
            tag: 'section',
            tagClasses: [],
            title: 'Character',
            listId: 'character',
            listItem: {
                tag: 'span',
                classList: [],
                data: [
                    '<b>NOBLE</b>', 'DIRECT', '<em>BOLD</em>', 'CONFIDENT', '<b>SCHIZOPHRENIC</b>','DARING',  '<b>DRAMATIC</b>', 'PERSUASIVE', 'IMMEDIATE',
                    'WISE'
                ],
                htmlCreator: (lang) => lang + ' | '

            },

            htmlCreator: htmlSimpleSectionBlock
        },

    },
    {
        fatherId: 'rightSide',
        detailBlock: {
            tag: 'section',
            tagClasses: [],
            title: 'LIFE LESSON',
            listId: 'lesson',
            listItem: {
                tag: 'span',
                classList: [],
                data: ['You must defeat Sheng Long to stand a chance.'],
                htmlCreator: (text) => text

            },

            htmlCreator: htmlSimpleSectionBlock
        },

    },
    {
        fatherId: 'rightSide',
        detailBlock: {
            tag: 'section',
            tagClasses: [],
            title: 'Likes &#x1f603;',
            listId: 'Likes',
            listItem: {
                tag: 'span',
                classList: [],
                data: ['GI VEGETABLES BLOOD SMALL MARSHMELLOWS RED COLOR KILLED ENEMY'],
                htmlCreator: (text) => text

            },

            htmlCreator: htmlSimpleSectionBlock
        },

    },
    {
        fatherId: 'rightSide',
        detailBlock: {
            tag: 'section',
            tagClasses: [],
            title: 'DISLIKES 😞',
            listId: 'DISLIKES',
            listItem: {
                tag: 'span',
                classList: [],
                data: ['BISONS GHOSTS SMARTPHONES SMELL OF SEAFOOD BARBER SHOPS SLEEVES'],
                htmlCreator: (text) => text

            },

            htmlCreator: htmlSimpleSectionBlock
        },

    },
    {
        fatherId: 'rightSide',
        detailBlock: {
            tag: 'section',
            tagClasses: [],
            title: 'WANTS 🥺',
            listId: 'WANTS',
            listItem: {
                tag: 'span',
                classList: [],
                data: ['BE FIT WRITE MORE BOOKS FIND A GIRLFRIEND TO GO TO CINEMA WITH KILL ALL OF AKUMA FAMILY'],
                htmlCreator: (text) => text

            },

            htmlCreator: htmlSimpleSectionBlock
        },

    },
]



