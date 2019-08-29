-- CREATE DATABASE meal_sharing;
USE meal_sharing;

-/*CREATE TABLE `Meal`(
`id` int(10) unsigned not null auto_increment,
`title` varchar(255) not null,
 `description` text NULL DEFAULT NULL,
 `location` varchar(255) not null ,
 `when` DATETIME NOT NULL,
 `max_reservations` int(10) unsigned NOT NULL,
 `price` DECIMAL(19 , 4 ) NOT NULL ,
 `created_date` DATETIME NOT NULL,

 primary key (`id`)
 )engine= innodb default charset= utf8mb4 collate=utf8mb4_unicode_ci;*/
 
  /*CREATE Table `Reservation`(
`id` int(10) unsigned not null auto_increment,
 `number_of_guests` int(10) unsigned NOT NULL,
 `meal_id` int(10) unsigned NOT NULL,
 `created_date` DATETIME NOT NULL,
  
 PRIMARY KEY (`id`),
 CONSTRAINT `fk_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE
 )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;*/

 /*CREATE Table `Review`(
 `id` int(10) unsigned not null auto_increment,
 `title` varchar(255) not null,
 `description` text NULL DEFAULT NULL,
 `meal_id` int(10) unsigned NOT NULL,
  `stars` int(10) unsigned NOT NULL,
 `created_date` DATETIME,
  
 PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;*/

 
 