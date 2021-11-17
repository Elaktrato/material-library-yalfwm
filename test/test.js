import assert from 'assert';
import { makeBookListData } from '../src/controllers/bookControllers.js';

const books = [{
        "author": "George Orwell",
        "title": "Through the looking glass",
        "description": "The sequel to Alices adventures in Wonderland",
        "id": 1
    },
    {
        "author": "Hans Rosling",
        "title": "Factfulness",
        "description": "A book on how human instincts distort our view of reality and how to combat them to remain hopeful and factual in a world governed by fearmongering, exaggeration and outdated or false information still lingering in our minds.",
        "id": 3
    },
    {
        "author": "Neil Gaiman",
        "title": "American Gods",
        "description": "Impactful and cool graphic novel series",
        "id": 4
    },
    {
        "author": "Nishio Ishin",
        "title": "Bakemonogatari",
        "description": "One of the weirdest and strangely well written monster-of-the-week books you'll find",
        "id": 5
    },
    {
        "author": "Nishio Ishin",
        "title": "Nekomonogatari",
        "description": "Focusing on beloved Character Tsubasa Hanekawa and her struggles with her curse",
        "id": 6
    },
    {
        "author": "Neil Gaiman",
        "title": "Coraline",
        "description": "The best and creepiest children's book out there",
        "id": 7
    },
    {
        "author": "Osamu Dazai",
        "title": "Poems",
        "description": "peoms by the beloved author.",
        "id": 8
    }
]

describe("Booklist", function() {
    describe("bookController", function() {
        it("first row should be dark", function() {
            let viewData = makeBookListData(books)
            console.log(viewData)
            assert.equal('dark', viewData[0].backgroundClass)
        })
    })
})