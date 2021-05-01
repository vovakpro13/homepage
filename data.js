const recentHistory = [
    {
        year: '2016 - 2018',
        eventsHTML: [
            'Amongst many fighters of the past was featured in the movie <strong>"Ready Player One"</strong>. Ryu ready always!',
            'In <a rel="external" target="_blank" href="https://store.playstation.com/ru-ua/product/EP0102-CUSA01222_00-SF5FULLGAME00000"><strong>"Street Fighter V"</strong></a> once and for all erased M.Bison from earth and tamed my inner Evil Ryu. Also spent some time on a side-project, ' +
            'mini-series <a rel="external" target="_blank" href="https://en.wikipedia.org/wiki/Street_Fighter:_Resurrection"><strong>"Street Fighter: Resurrection"</strong></a>.',
            'United with unknown until then to me <em>Power Rangers</em> to defea resurrected M.Bison.Damn good fighters they are, even not knowing karate ways!'
        ]
    },
    {
        year: 2014,
        eventsHTML: ['Filmed in a martial arts tutorial  <strong><a rel="external" target="_blank" href="https://en.wikipedia.org/wiki/Street_Fighter:_Assassin%27s_Fist">"Street Fighter: Assassin\'s Fist"</a></strong>, revealing to audience forgotten art of Ansatsuken.']
    },
    {
        year: 2012,
        eventsHTML: ['<u>The gods of intenet</u> concluded me in the animated movie <a rel="external" target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D0%BB%D1%8C%D1%84_(%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC)"><strong>"Wreck-It Ralph"</strong></a>, but rewarded me with a good drink for it!']
    },
    {
        year: 2008,
        eventsHTML: ['My evil alter ego sneaked out of control and became a boss in <a rel="external" target="_blank" href="https://ru.wikipedia.org/wiki/Street_Fighter_IV"><strong>"Street Fighter IV"</strong></a>.']
    },
    {
        year: 2006,
        eventsHTML: ['Borrowed my famous ripped gi to Soki in <a rel="external" target="_blank" href="https://en.wikipedia.org/wiki/Onimusha:_Dawn_of_Dreams"><strong>"Onimusha: Dawn of Dreams"</strong></a>, gods informed me he needed that for the battle.']
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


const achievments = [
    {
        textHTML: '<strong>#1</strong> in <strong>"Top 25 Street Fighter Characters"</strong> by IGN, who also called me "fancy", "icon" and "a\n' +
            'testament to the virtue of simplicity" ❤'
    },
    {
        textHTML: '<strong>#2</strong> in <strong>"Top 20 Street Fighter Characters of All Time"</strong> by GameDaily, same council found me\n' +
            'worth of <strong>#6</strong> place in <strong>"Top 25 Capcom Characters of All Time"</strong>, which I proudly share with my\n' +
            'partner Ken'
    },
    {
        textHTML: 'I was named <strong>"5th Most Powerful Street Fighter Character"</strong> by <u>Screen Rant-san</u>'
    },
    {
        textHTML: '<strong>#71</strong> in <strong>"Top 100 Heroes of All Time"</strong> by <u>UGO Networks</u>, also recognized <strong>#2</strong> in their list of\n' +
            '<em>"Top 50 Street Fighter Characters"</em>'
    },
    {
        textHTML: 'In a survey of 4000 online matches for Super Street Fighter IV, I got to be the most popular\n' +
            'character, with 16.6% of players choosing my side'
    },
];


const detailBlocks = [
    {
        fatherId: 'timelineRecent',
        detailBlock: {
            blockId: 1,
            tag: 'li',
            tagClasses: [],
            title: 'RECENT',


            listId: 'recentItems',
            listItem: {
                tag: 'li',
                classList: [],
                data: recentHistory,
                htmlCreator: htmlEventItem
            },

            htmlCreator: htmlRecentBlock,

        },

    },
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
            label: '<h5><u>PUBLICATIONS</u></h5>',


            listId: 'pubItems',
            listItem: {
                tag: 'p',
                classList: [],
                data: [
                    {
                        year: 2011,
                        eventsHTML: ['The true and humble story of me under pseudonim Tyler Wilde in an article "The evolution of Ken and Ryu"']
                    },
                    {
                        year: '2003-2018',
                        eventsHTML: ['For 15 years I have published comic books with Udon Entertainment depicting my adventures, bitter lessons and great victories.']
                    }
                ],
                htmlCreator: htmlPublicationItem
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
                htmlCreator: simpleReturn
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
                htmlCreator: simpleReturn

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
                htmlCreator: w => w + ' |   '

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
                htmlCreator: simpleReturn

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
                htmlCreator: simpleReturn

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
                htmlCreator: simpleReturn

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
                htmlCreator: simpleReturn

            },

            htmlCreator: htmlSimpleSectionBlock
        },

    },
]



