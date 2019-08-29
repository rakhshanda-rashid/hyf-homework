USE meal_sharing;


-- Get all reviews
-- Select * FROM  Review;

-- Add a new review
-- INSERT INTO Review
-- VALUES(NULL,"Good","Can Be Better",2,3,current_date()),
-- (NULL,"Bad","Too Much Spice",3,0,current_date());


-- Get a review with any id, fx 1
-- SELECT * FROM Review
-- WHERE id=2;
-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
-- UPDATE Review
-- SET title= "Bad",Description="It was not fresh"
-- Where id=3;

-- Delete a review with any id, fx 1
DELETE from REVIEW
WHERE id IN(3,4);
SELECT * FROM Review;