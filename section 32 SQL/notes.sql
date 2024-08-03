-- Query to create database and then use it.
create database MyDemoDatabse;
use MyDemoDatabse

-- Query to create tables in the current databse 
create table Mytable (
    id INT NOT NULL,
    Myname varchar(25),
    roll varchar(25), 
    PRIMARY KEY (id)
);

-- Query to insert data in the table 
insert into Mytable 
values 
(1, "sameer", "senior developer"),
(2, "john", "junior developer"),
(3, "emma", "designer"),
(4, "rajesh", "manager"),
(5, "priya", "tester"),
(4, "alex", "manager"),
(5, "sara", "tester");

-- Query to UPDATE the Table 
ALTER TABLE Mytable
ADD salary int;

-- Query to Delete the Records 
Delete from Mytable
Where id = 1;

-- Query to make child table and use the Foreign key 
create table ChildTable (
    id INT NOT NULL,
    Mytable_id INT,
    child_name varchar(25),
    PRIMARY KEY (id),
    FOREIGN KEY (Mytable_id) REFERENCES Mytable(id)
);

-- Query to select data from two tables using INNER JOIN
SELECT Mytable.Myname, ChildTable.child_name
FROM Mytable
INNER JOIN ChildTable ON Mytable.id = ChildTable.Mytable_id;