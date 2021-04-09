  
const fs = require("fs");
var notes = require("./db/db.json")

module.exports = (app) => {
        app.get("/api/notes", function(req, res) {
        return res.json(notes)
    });

    app.post("/api/notes", function(req, res) {
        let newNote = req.body;
        newNote.id = notes.length + 1;
        notes.push(newNote)
        res.json(newNote);
    });

    app.delete("/api/notes/:id", function(req, res) {
        notes.splice((req.params.id - 1), 1)
        for (var i = 0; i < notes.length; i++) {
            notes[i].id = i + 1
        }
        res.json(notes)
    });
}