--NOTE: takes in 3 variables in an array, id, name and image

UPDATE characters 
SET name = $2,
    image = $3,
WHERE id = $1
RETURNING *;

--This RETURNING will only return anything that has been affected
