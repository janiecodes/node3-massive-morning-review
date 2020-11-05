// const masterCharacterList = []
// id = 0

module.exports = {
    getAllCharacters: (req, res) => {
        const db = req.app.get('db')

        db.get_all_characters()
            .then(characters => {
                res.status(200).send(characters)
            })
            .catch(err => res.status(500).send(err));

        // res.status(200).send(masterCharacterList)
    },
    getCharacter: (req, res) => {
        const db = req.app.get('db')

        const {id} = req.params

        db.get_character(+id)
            .then(character => res.status(200).send(character))
            .catch(err => res.status(500).send(err));

        //if you're passing in one variable you don't need the array brackets
        //id is an integer bc it's a SERIAL PRIMARY KEY, bc of req.params, it makes it a string so make sure to include the plus sign (+id)
        // const character = masterCharacterList.find(character => character.id === +id)
        // res.status(200).send(character)
    },
    addCharacter: (req, res) => {
        const db = req.app.get('db')

        //ANOTHER way to do this without creating newCharacter
        //const {name, image} = req.body
        //db.add_character({name, image});

        const newCharacter = {...req.body}

        db.add_character(newCharacter)
            .then(newCharacter => res.status(200).send(newCharacter))
            .catch(err => res.status(500).send(err));


        // newCharacter.id = id
        // id++
        // masterCharacterList.push(newCharacter)
        // res.status(200).send(masterCharacterList)
    },
    editCharacter: (req, res) => {
        const db = req.app.get('db')

        const {id} = req.params
        const {name, image} = req.body

        db.edit_character([+id, name, image])
                .then(updatedCharacter => res.status(200).send(updatedCharacter))
                .catch(err => res.status(500).send(err));

        // const index = masterCharacterList.findIndex(character => character.id === +id)
        // const currentCharacter = {...masterCharacterList[index]}
        // masterCharacterList[index] = {
        //     id: +id,
        //     name: name || currentCharacter.name,
        //     image: image || currentCharacter.image
        // }
        // res.status(200).send(masterCharacterList)
    },
    deleteCharacter: (req, res) => {
        const db = req.app.get('db')

        const {id} = req.params

        db.delete_character(+id)
            .then(() => res.sendStatus(200)) //sendStatus bc nothing gets sent back
            .catch((err) => res.status(500).send(err));
        // const index = masterCharacterList.findIndex(character => character.id === +id)
        // masterCharacterList.splice(index, 1)
        // res.status(200).send(masterCharacterList)
    }
};
