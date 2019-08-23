
 use hyf19;
-- (1) Add a task with the these attributes: title, description, created, updated, due_date, status_id, user_id
     INSERT INTO task (title, description, created, updated, due_date, status_id, user_id) 
     VALUES ('My WEEK 2 homework', 'Database mysql', '2019-08-23', '2019-08-23', NULL, 1, NULL);
    
-- (2)Change the title of a task with these attributes: taskID, newTitle
    UPDATE task
	SET title = 'newTitle' 
    WHERE id = 30;
    
-- (3)Change the task due date with these attributes: taskID, newDueDate
    UPDATE task
	SET due_date = '2019-12-05' 
	WHERE id = 20;

-- (4)Change the task status with these attributes: taskID, newStatus
    UPDATE task
	SET status_id = 1 
	WHERE id = 3;

-- (5) Mark a task as complete with this attribute: taskID
    UPDATE task
	SET status_id = 3 
	WHERE id = 1;

-- (6)Delete task with this attribute: taskID
    DELETE FROM task 
	WHERE id = 6;

SELECT * from task;