const asyncHandler = require("express-async-handler");
const Person = require("../models/personModel");

//@desc Register Person
//@route POST /api
//@access public

const createPerson = asyncHandler (async (req, res) => {
    const { name, age } = req.body;
    if (!name || !age) {
        res.status(400);
        throw new Error(`All fields are mandatory! name: ${name}, age: ${age}`);
    }

    const person = await Person.create({
        name,
        age,
        email: req.body.email || null,
    });

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
    const person = await Person.findById(req.params.user_id);

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
    const person = await Person.findById(req.params.user_id);

    if (person) {
        person.name = req.body.name || person.name;
        person.age = req.body.age || person.age;
        person.email = req.body.email || person.email;

        const updatedPerson = await person.save();
        res.json(updatedPerson);
    } else {
        res.status(404);
        throw new Error('Person not found');
    }
});

//@desc Delete Person
//@route DELETE /api/:id
//@access public

const deletePerson = asyncHandler (async (req, res) => {
    const person = await Person.findById(req.params.user_id);

    if (person) {
        await person.remove();
        res.json({ message: 'Person removed' });
    } else {
        res.status(404);
        throw new Error('Person not found');
    }
});

module.exports = { createPerson, getPerson, updatePerson, deletePerson };