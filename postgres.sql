-- 🔤 STRING FUNCTIONS

-- 1. LENGTH(string)
-- Returns the number of characters in a string.
select length ('hello yellow fellow');
-- Output: 19


-- 2. LOWER(string)
-- Converts the string to lowercase.
select lower('HELLO YELLO FELLOW');
-- Output: hello yellow fellow


-- 3. UPPER(string)
-- Converts the string to uppercase.
select upper('hello yellow fellow');
-- Output: HELLO YELLOW FELLOW


-- 4. CONCAT(a, b, ...)
-- Concatenates multiple strings.
select concat('hello','yello','fellow');
-- Output: helloyellofellow


-- 5. SUBSTRING(str FROM start FOR length)
-- Extracts a part of a string.
select substring('hello yellow fellow' from 0 for 5);
-- Output: hell


-- 6. TRIM([LEADING|TRAILING|BOTH] [chars] FROM string)
-- Removes characters (default: spaces) from both ends.
select trim('   hello yellow    ')
-- Output: hello yellow // remove extra space from both end

select trim(both 'x' from 'xxxhello yellowxxx');
-- Output: hello yellow // remove x from both end


-- 7. REPLACE(string, from, to)
-- Replaces all occurrences of a substring.
select replace('hello yellow fellow', 'l','r');
-- Output: herro yerro ferrow


-- 8. POSITION(substring IN string)
-- Finds the position of a substring (1-based).
select position('y' in 'hello yellow');
-- Output: 7


-- 9. LEFT(str, n) / RIGHT(str, n)
-- Gets first or last n characters of a string.
select left('hello yellow fellow' , 5);
-- Output: hello

select right('hello yellow fellow' , 5);
-- Output: ellow


-- 10. INITCAP(str)
-- Capitalizes the first letter of each word.
select  initcap('hello yellow fellow');
-- Output: Hello Yellow Fellow


-- 11. REVERSE(str)
-- Reverses the string.
select reverse('hello yellow fellow');
-- Output: wollef wolley olleh




-- 🔢 MATHEMATICAL FUNCTIONS in PostgreSQL

-- 1. ABS(x)
-- Returns the absolute (positive) value.
select abs(-19);
-- Output: 19


-- 2. CEIL(x) or CEILING(x)
-- Rounds a number up to the nearest integer.
select ceil(4.3);
-- Output: 5


-- 3. FLOOR(x)
-- Rounds a nuselect floor()mber down to the nearest integer.
select floor(2.9);
-- Output: 2

select floor(2.1);
-- Output: 2


-- 4. ROUND(x, n)
-- Rounds a number to n decimal places.
select round(2.3,3);
-- Output: 2.3000


-- 5. POWER(x, y)
-- Raises x to the power of y.
select power(3,2);
-- Output: 9


-- 6. SQRT(x)
-- Returns the square root of x.
select sqrt(4);
-- Output: 2


-- 7. MOD(x, y)
-- Returns the remainder of division (modulus).
select mod(5,2);
-- Output: 1


-- 8. TRUNC(x, n)
-- Truncates a number to n decimal places without rounding.
-- It removes digits after the decimal point but does not round the number.
-- If no second argument is provided, it truncates to the nearest integer toward zero.
select trunc(23,3)
-- Output: 23.000


-- 9. RANDOM()
-- Generates a random decimal number between 0 (inclusive) and 1 (exclusive).
select random();
-- Output: 0.489731577625232


-- 10. SIGN(x)
-- Returns -1, 0, or 1 depending on whether the number is negative, zero, or positive
select sign(2);
-- Output: 1




-- 📅 DATE & TIME FUNCTIONS in PostgreSQL
-- These are used to extract, manipulate, and compare dates and times.

-- 1. CURRENT_DATE, CURRENT_TIME, CURRENT_TIMESTAMP
-- Returns the current date, time, or timestamp.
select surrent_date;
-- Output: 2025-05-04

select current_time;
-- Output: 12:10:22.287795+05:30

select current_timstamp;
-- Output: 2025-05-04 12:11:12.740063+05:30


-- 2. NOW()
-- Returns the current timestamp (same as CURRENT_TIMESTAMP).
select now();
-- Output: 2025-05-04 12:12:23.518297+05:30


-- 3. AGE(timestamp)
-- Returns the interval between a timestamp and current time.
select age(timestamp '09-10-2001');
-- Output: 23 years 6 mons 26 days


-- 4. EXTRACT(field FROM source)
-- Extracts parts like year, month, day, hour, etc.
SELECT EXTRACT(YEAR FROM DATE '2025-05-03');
-- Output: 2025

SELECT EXTRACT(minute FROM NOW());
-- Output: 40 return current minutes


-- 5. DATE_TRUNC(field, source)
-- Truncates the date/time to the given precision (e.g., 'month', 'day').
select date_trunc('month', TIMESTAMP '2025-05-03 14:45:30')
-- Output: 2025-05-01 00:00:00


-- 6. TO_CHAR(date/time, format)
-- Formats a date/time into a string.
SELECT TO_CHAR(NOW(), 'YYYY-MM-DD');       
-- Output: 2025-05-03

SELECT TO_CHAR(NOW(), 'Day, DD Mon YYYY'); 
-- Output: Saturday, 03 May 2025


-- 7. TO_DATE(string, format)
-- Parses a string into a date.
SELECT TO_DATE('2025-05-03', 'YYYY-MM-DD'); 
-- Output: 2025-05-03


-- 8. TO_TIMESTAMP(string, format)
-- Parses a string into a timestamp.
SELECT TO_TIMESTAMP('2025-05-03 14:30:00', 'YYYY-MM-DD HH24:MI:SS');
-- Output: 2025-05-03 14:30:00+05:30


-- 9. INTERVAL
-- Creates a time interval you can add/subtract.
SELECT NOW() + INTERVAL '1 day';
-- Output: Tomorrow

SELECT NOW() - INTERVAL '2 hours';   
-- Output: 2 hours ago


-- 10. JUSTIFY_DAYS(interval) / JUSTIFY_INTERVAL(interval)
-- Normalizes months/days/years in intervals.
SELECT JUSTIFY_DAYS(INTERVAL '35 days'); 
-- Output: 1 mon 5 days




-- 🔢 AGGREGATE FUNCTIONS in PostgreSQL

-- 1. COUNT(*) / COUNT(column)
-- Counts the number of rows (or non-null values in a column).
SELECT COUNT(*) FROM employees;             
-- Output: All rows

SELECT COUNT(salary) FROM employees;        
-- Output: Non-null salaries only


-- 2. SUM(column)
-- Returns the total sum of a numeric column.
SELECT SUM(salary) FROM employees;          
-- Output: e.g., 500000


-- 3. AVG(column)
-- Returns the average value of a numeric column.
SELECT AVG(salary) FROM employees;          
-- Output: e.g., 62500.00


-- 4. MAX(column) / MIN(column)
-- Returns the maximum or minimum value in a column.
SELECT MAX(salary) FROM employees;          
-- Output: Highest salary

SELECT MIN(salary) FROM employees;          
-- Output: Lowest salary


-- 5. STRING_AGG(text, delimiter)
-- Concatenates strings from multiple rows using a delimiter.
SELECT STRING_AGG(name, ', ') FROM employees;
-- Output: 'Alice, Bob, Charlie'


-- 6. ARRAY_AGG(expression)
-- Aggregates values into an array.
SELECT ARRAY_AGG(salary) FROM employees;
-- Output: {50000,60000,70000}


-- 7. BOOL_AND(condition) / BOOL_OR(condition)
-- Returns true if all (or at least one) row satisfies the condition.
SELECT BOOL_AND(active) FROM users;  
-- Output: True if all users are active

SELECT BOOL_OR(active) FROM users;   
-- Output: True if at least one is active


-- 8. JSON_AGG(expression) / JSONB_AGG(expression)
-- Aggregates rows into a JSON or JSONB array.
SELECT JSON_AGG(name) FROM employees;
-- Output: ["Alice", "Bob", "Charlie"]




-- 🪟 WINDOW FUNCTIONS in PostgreSQL

-- Basic Syntax:
-- <function>() OVER ([PARTITION BY ...] [ORDER BY ...])


-- 1. ROW_NUMBER()
-- Assigns a unique row number starting from 1 for each row within the partition.
SELECT name, department,
       ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS row_num
FROM employees;


-- 2. RANK()
-- Gives ranking within a partition. Equal values receive the same rank, with gaps.
SELECT name, salary,
       RANK() OVER (ORDER BY salary DESC) AS rank
FROM employees;


-- 3. DENSE_RANK()
-- Similar to RANK(), but without gaps in rank values.
SELECT name, salary,
       DENSE_RANK() OVER (ORDER BY salary DESC) AS rank
FROM employees;


-- 4. NTILE(n)
-- Distributes rows into n approximately equal buckets.
SELECT name, salary,
       NTILE(4) OVER (ORDER BY salary DESC) AS quartile
FROM employees;


-- 5. LAG(column, offset, default)
-- Accesses data from a previous row (in same partition).
SELECT name, salary,
       LAG(salary, 1) OVER (ORDER BY salary) AS previous_salary
FROM employees;


-- 6. LEAD(column, offset, default)
-- Accesses data from the following row.
SELECT name, salary,
       LEAD(salary) OVER (ORDER BY salary) AS next_salary
FROM employees;


-- 7. FIRST_VALUE(column) / LAST_VALUE(column)
-- Returns the first or last value in the window frame.
SELECT name, department, salary,
       FIRST_VALUE(salary) OVER (PARTITION BY department ORDER BY salary DESC) AS top_salary
FROM employees;


-- 8. CUME_DIST() / PERCENT_RANK()
-- Returns cumulative distribution or relative rank.
SELECT name, salary,
       CUME_DIST() OVER (ORDER BY salary) AS percentile,
       PERCENT_RANK() OVER (ORDER BY salary) AS relative_rank
FROM employees;





CREATE TABLE Organizers (
    organizer_id INT PRIMARY KEY,
    organizer_name VARCHAR(255) NOT NULL
);


-- CREATE TABLE Events (
--     event_id INT PRIMARY KEY,
--     event_name VARCHAR(255) NOT NULL,
--     organizer_id INT,
--     FOREIGN KEY (organizer_id) REFERENCES Organizers(organizer_id)
-- );



-- -- Organizers Table
-- INSERT INTO Organizers (organizer_id, organizer_name) VALUES (1, 'TechCorp Events'), (2, 'Community Hub');
-- INSERT INTO Events (event_id, event_name, organizer_id) VALUES (101, 'Annual Tech Summit', 1), (102, 'Local Meetup', 2), (103, 'Dev Workshop', 1);

-- -- select * from Events where 


-- select * from Events e join Organizers o on o.organizer_id = e.organizer_id where o.organizer_name like '%Community%';
