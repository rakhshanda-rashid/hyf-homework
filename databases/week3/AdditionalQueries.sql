USE meal_sharing;
-- Describe Meal;

-- Get meals that has a price smaller than a specific price fx 90

-- SELECT * FROM Meal 
-- WHERE price <  90;

-- Get meals that still has available reservations
-- SELECT * FROM Meal
-- JOIN Reservation
-- ON Reservation.meal_id=Meal.id;
 
-- SELECT * FROM Meal;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
-- (I am using the title from my own inserted values)
-- SELECT * FROM Meal ;
-- WHERE title LIKE '%Ris med%';

-- Get meals that has been created between two dates
-- SELECT * from Meal
-- WHERE
-- created_date BETWEEN '2019-08-20' AND '2019-08-30';

-- Get only specific number of meals fx return only 5 meals
-- SELECT * FROM Meal 
-- LIMIT 2;



-- Get the meals that have good reviews
-- SELECT Meal. * ,Review.stars FROM Meal
-- JOIN Review
-- ON Meal.id=Review.meal_id
-- WHERE Review.stars > 3;

-- Get reservations for a specific meal sorted by created_date
-- SELECT Meal.title, Reservation.number_of_guests, Reservation.created_date
-- FROM Meal 
-- JOIN Reservation
-- ON Meal.id = Reservation.meal_id
-- ORDER BY Reservation.created_date 

-- Sort all meals by average number of stars in the reviews
-- SELECT Meal.title, AVG(Review.stars) AS AverageStars
-- FROM Meal
-- JOIN Review
-- ON Meal.id = Review.meal_id
-- GROUP BY Meal.title
-- ORDER BY AverageStars ;
