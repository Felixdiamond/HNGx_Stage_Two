const asyncHandler = require("express-async-handler");
const { body, validationResult } = require('express-validator');
const Person = require("../models/personModel");

//@desc Register Person
//@route POST /api
//@access public

const createPerson = asyncHandler (async (req, res) => {
    const errors = validationResult(req);
    console.log(req.body)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { name, email } = req.body;
    if (!name) {
        res.status(400);
        throw new Error(`Name field is mandatory! name: ${name}`);
    }

    // Check if a person with the same email already exists
    if (email) {
        const existingPerson = await Person.findOne({ email });
        if (existingPerson) {
            res.status(400);
            throw new Error('A person with this email already exists');
        }
    }

    const personData = { name };
    if (email !== undefined) {
        personData.email = email;
    }

    const person = await Person.create(personData);

    if (person) {
        res.status(201).json(person);
    } else {
        res.status(400);
        throw new Error('Invalid person data');
    }
});


//@desc Fetch Person
//@route GET /api/:id
//@access public

const getPerson = asyncHandler (async (req, res) => {
    let person;
    
    if (req.params.identifier.match(/^[0-9a-fA-F]{24}$/)) {
        // It's a valid ObjectId, proceed with `findById`
        person = await Person.findById(req.params.identifier);
    } else {
        // It's not a valid ObjectId, proceed with `findOne`
        person = await Person.findOne({ name: req.params.identifier });
    }

    if (person) {
        res.json(person);
    } else {
        res.status(404);
        throw new Error('Person not found');
    }
});

//@desc Update Person
//@route PUT /api/:id
//@access public

const updatePerson = asyncHandler (async (req, res) => {
    let person;
    
    if (req.params.identifier.match(/^[0-9a-fA-F]{24}$/)) {
        // It's a valid ObjectId, proceed with `findById`
        person = await Person.findById(req.params.identifier);
    } else {
        // It's not a valid ObjectId, proceed with `findOne`
        person = await Person.findOne({ name: req.params.identifier });
    }

    if (person) {
        const { name, email } = req.body;
        if (name || email) {
            // Check if a person with the same email already exists
            if (email) {
                const existingPerson = await Person.findOne({ email });
                if (existingPerson && String(existingPerson._id) !== String(person._id)) {
                    res.status(400);
                    throw new Error('A person with this email already exists');
                }
                person.email = email;
            }
            if (name) {
                person.name = name;
            }

            const updatedPerson = await person.save();
            res.json(updatedPerson);
        } else {
            res.status(400);
            throw new Error('No field to update');
        }
    } else {
        res.status(404);
        throw new Error('Person not found');
    }
});

//@desc Delete Person
//@route DELETE /api/:id
//@access public

const deletePerson = asyncHandler (async (req, res) => {
    let person;
    
    if (req.params.identifier.match(/^[0-9a-fA-F]{24}$/)) {
        // It's a valid ObjectId, proceed with `findById`
        person = await Person.findById(req.params.identifier);
    } else {
        // It's not a valid ObjectId, proceed with `findOne`
        person = await Person.findOne({ name: req.params.identifier });
    }

    if (person) {
        await person.deleteOne();
        res.json({ message: `${person.name} removed successfully` });
    } else {
        res.status(404);
        throw new Error('Person not found');
    }
});

module.exports = { createPerson, getPerson, updatePerson, deletePerson };