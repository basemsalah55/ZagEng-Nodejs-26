CREATE TABLE Students (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
age INT,
class VARCHAR(10) NOT NULL,
city VARCHAR(50) NOT NULL,
grade INT CHECK (grade <= 100),
gender CHAR(1) DEFAULT 'M',
register_date DATE

    INSERT INTO students (name, age, class, city, grade, gender, register_date)
    VALUES
    ('Ahmed Ali', 20, '1A', 'Cairo', 88, 'M', '2023-09-01'),
    ('Sara Hassan', 21, '2B', 'Giza', 92, 'F', '2023-09-03'),
    ('Omar Samir', 19, '1A', 'Cairo', 75, 'M', '2023-09-05'),
    ('Mona Adel', 22, '3C', 'Alex', 81, 'F', '2023-09-07'),
    ('Youssef Khaled', 23, '2B', 'Giza', 90, 'M', '2023-09-10');

SELECT * FROM students;
SELECT name, grade FROM students;
SELECT * FROM students WHERE age > 20;
 * FROM students WHERE class = '1A';
SELECT * FROM students WHERE grade > 85;

UPDATE students
SET grade = 85
WHERE name = 'Omar Samir';

SELECT * FROM students WHERE city = 'Cairo';


//p3
 CREATE TABLE courses (
 id INT PRIMARY KEY AUTO_INCREMENT,
course_name VARCHAR(100) NOT NULL,
instructor VARCHAR(100) NOT NULL,
hours INT CHECK (hours >= 10),
price INT CHECK (price > 0),
level VARCHAR(50) DEFAULT 'Beginner',
start_date DATE
 );





INSERT INTO Courses (Course_Name, Instructor, Hours, Price, Level, Start_Date)
VALUES 
  ('Database Basics', 'Ahmed Tarek', 30, 1200, 'Beginner', '2024-02-01'),
  ('Web Development', 'Sara Ali', 45, 2000, 'Intermediate', '2024-03-10'),
  ('Algorithms', 'Mona Samir', 40, 1800, 'Advanced', '2024-04-05'),
  ('Networking', 'Omar Khaled', 35, 1500, 'Beginner', '2024-05-01');

 SELECT * FROM Courses;

  SELECT Course_Name, Instructor FROM Courses;

 SELECT * FROM Courses WHERE Price > 1500;

 SELECT * FROM Courses WHERE Level = 'Beginner';

SELECT * FROM Courses WHERE Hours BETWEEN 30 AND 40;

 UPDATE Courses
SET Price = 1900
WHERE Course_Name = 'Algorithms';

  SELECT * FROM Courses WHERE Instructor LIKE '%a%';

//p3

 CREATE TABLE Books (
id INT PRIMARY KEY AUTO_INCREMENT,
Book_Name VARCHAR(100) NOT NULL,
Author VARCHAR(100) NOT NULL,
Pages INT CHECK (Pages >= 50),
Category VARCHAR(50) NOT NULL DEFAULT 'General',
Price INT CHECK (Price > 0),
Publish_Date DATETIME
);

INSERT INTO Books (Book_Name, Author, Pages, Category, Price, Publish_Date)
VALUES 
  ('Clean Code', 'Robert Martin', 450, 'Programming', 500, '2008-08-01'),
 ('Atomic Habits', 'James Clear', 320, 'Self Development', 350, '2018-10-16'),
 ('Deep Work', 'Cal Newport', 300, 'Productivity', 300, '2016-01-05'),
 ('Design Patterns', 'GoF', 395, 'Programming', 600, '1994-10-21');

SELECT * FROM Books;

SELECT Book_Name, Author FROM Books;

SELECT * FROM Books WHERE Price < 400;

SELECT * FROM Books WHERE Category = 'Programming';

SELECT * FROM Books WHERE Pages BETWEEN 300 AND 500;

UPDATE Books
SET Price = 350
WHERE Book_Name = 'Deep Work';

  SELECT * FROM Books WHERE Author LIKE '%b%';



















































































































































