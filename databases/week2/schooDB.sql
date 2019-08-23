-- CREATE DATABASE schoolDatabase;

Use  schoolDatabase;

--  Creating Tables
--  (1) Table Class
--    CREATE TABLE `class` (
--   `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
--   `name` VARCHAR(255) NOT NULL,
--   `begins` DATE(255) NOT NULL,
--   `ends` DATE(255) NOT NULL,
--   PRIMARY KEY (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- (2) Table Student

 --   CREATE TABLE `student` (
 -- `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  -- `name` VARCHAR(255) NOT NULL,
 --   `email` VARCHAR(255) NULL,
 --  `phone` VARCHAR(255) NULL,
  -- `class_id` INT(10) UNSIGNED NOT NULL,
 --  INDEX (`name`),
 --  PRIMARY KEY (`id`),
 --  CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- Create an index on the name column of the student table.
-- ALTER TABLE student ADD INDEX index_name (name);
-- SHOW INDEX FROM student

-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
-- INSERT INTO status VALUES (NULL,'not-started'), (NULL,'ongoing'), (NULL,'finished');
-- SELECT * FROM status