
USE meal_sharing;
/*show tables;

-- Get all meals
Select * FROM Meal;

-- Add a new meal
INSERT INTO Meal
VALUES
(NULL,
"Ris med mandel",
"Ris har ristet mandel med",
"Frederikssundsvej 32",
"2019-08-30",
12,
10.00,
now());*/

-- Get a meal with any id, fx 1
-- Select * FROM Meal
-- Where id= 1;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
-- UPDATE Meal
-- SET title = "Bland Grill", description="Kylling,kød,lam"
-- WHERE id=1;
 
-- Delete a meal with any id, fx 1
DELETE  FROM Meal
WHERE Meal.id   IN(3,4);
select * from Meal;