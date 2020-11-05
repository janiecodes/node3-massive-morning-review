--NOTE: Takes one variable, character id
SELECT * FROM characters
WHERE id = $1;

--$1 is how you do variables in SQL
