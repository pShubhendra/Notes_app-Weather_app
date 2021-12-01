const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')
const { describe, demandOption, strict, string } = require('yargs')


// Customize yargs version
yargs.version('1.1.0')

//add

yargs.command({

    command: 'add',
    describe: 'add a new note',
    builder:{
            title:{
                describe: 'Add a note title',
                demandOption: true,
                 type: 'string'
            },
            body:{
                describe: 'Write note',
                demandOption: true,
                type: 'string'
            }
    },
    handler (argv){
        notes.addNote(argv.title, argv.body)
    }
}) 

//remove

yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'

        }
    },
    handler (argv) {
        notes.removeNote(argv.title)
    }
})

//list

yargs.command({
    command:'list',
    describe:'listing a note',
    handler () {
        notes.listNotes()
    }
})

//read

yargs.command({
    command:'read',
    describe:'reading a note',
    builder:{
        title: {
            describe:'Note title',
            demandOption: true,
            type: 'string',
        }
    },
    handler (argv) {
        notes.readNote(argv.title)
    }
})



//add, remove, read, list
yargs.parse()

// console.log (yargs.argv)