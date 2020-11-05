--NOTE: takes to variables in an object

INSERT INTO characters
(name, image)
VALUES
(${name}, ${image})
RETURNING *;

--RETURNING * will just give you the new character inserted
--Otherwise you can add SELECT * FROM characters 

--another way to do variables, you can pass in an object
--left side is the column name
--you could do $1 and $2 and if so then you have to put this in an array
--above is another way using an object