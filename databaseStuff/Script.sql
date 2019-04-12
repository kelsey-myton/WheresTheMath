CREATE TABLE student_info (
    user_id INT,
    user_name VARCHAR(255) NOT NULL,
    Num_Lessons_Compl_Alg INT,
    Num_Lessons_Compl_Geom INT,
    RecentLesson VARCHAR(255),
    PRIMARY KEY (user_id)
)

INSERT INTO student_info (
 user_id,
 user_name,
 Num_Lessons_Compl_Alg,
 Num_Lessons_Compl_Geom,
 RecentLesson)
VALUES
 (0,"Anthony",3,2,"Linear Programming")


CREATE TABLE quizes(
	quiz_name VARCHAR(255) NOT NULL,
	q1 VARCHAR(255),
	q2 VARCHAR(255),
	q3 VARCHAR(255),
	q4 VARCHAR(255),
	q5 VARCHAR(255)
)


SELECT * FROM student_info
/* This file path: /home/aintili/.dbeaver4/General/Scripts/Script.sql
 * This database path: /home/aintili/.dbeaver4/.metadata/sample-database-sqlite-1/Chinook.db
 * Also I'll leave this here
 * DROP TABLE student_info
   DROP TABLE quizes
   DROP TABLE quiz_display_choices
   DROP TABLE quiz_answer_key
 */

CREATE TABLE questions(
	id INT,
	quiz_id INT,
	quiz_name VARCHAR(255),
	PRIMARY KEY (id),
	FOREIGN KEY (quiz_id) REFERENCES Quizes(quiz_id)
	
)  

CREATE TABLE Quizes(
	id INT,
	quiz_id INT,
	question_number INT,
	question VARCHAR(255),
	display_options VARCHAR(255),
	answer VARCHAR(255)
)   




   
   