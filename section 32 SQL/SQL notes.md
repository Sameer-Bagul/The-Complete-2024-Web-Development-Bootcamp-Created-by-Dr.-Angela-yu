# SQL Notes

## Introduction to SQL

SQL (Structured Query Language) is a programming language used for managing and manipulating relational databases. It allows users to store, retrieve, and modify data in a structured manner.

## Basic SQL Syntax

SQL statements are written in a specific syntax. Here are some basic SQL syntax rules:

- SQL statements are case-insensitive, but it is a common convention to write them in uppercase.
- SQL statements are typically terminated with a semicolon (;).
- SQL keywords are not case-sensitive, but it is a common convention to write them in uppercase.
- SQL comments can be added using double dashes (--).

## Creating a Database

To create a new database, you can use the `CREATE DATABASE` statement followed by the desired database name. For example:

```sql
CREATE DATABASE mydatabase;
```

This will create a new database named "mydatabase".

## Creating Tables

Tables are used to store data in a database. To create a new table, you can use the `CREATE TABLE` statement followed by the table name and column definitions. For example:

```sql
CREATE TABLE customers (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100)
);
```

This will create a new table named "customers" with three columns: "id", "name", and "email".

## Inserting Data

To insert data into a table, you can use the `INSERT INTO` statement followed by the table name and the values to be inserted. For example:

```sql
INSERT INTO customers (id, name, email)
VALUES (1, 'John Doe', 'john@example.com');
```

This will insert a new row into the "customers" table with the specified values.
## Retrieving Data

To retrieve data from a table, you can use the `SELECT` statement followed by the columns you want to retrieve and the table name. For example:

```sql
SELECT name, email
FROM customers;
```

This will retrieve the "name" and "email" columns from the "customers" table.

## Filtering Data

You can filter data using the `WHERE` clause in the `SELECT` statement. This allows you to specify conditions that the retrieved data must meet. For example:

```sql
SELECT name, email
FROM customers
WHERE id = 1;
```

This will retrieve the "name" and "email" columns from the "customers" table where the "id" is equal to 1.

## Updating Data

To update existing data in a table, you can use the `UPDATE` statement followed by the table name, the column to be updated, and the new value. For example:

```sql
UPDATE customers
SET email = 'newemail@example.com'
WHERE id = 1;
```

This will update the "email" column in the "customers" table where the "id" is equal to 1.

## Deleting Data

To delete data from a table, you can use the `DELETE FROM` statement followed by the table name and the condition for deletion. For example:

```sql
DELETE FROM customers
WHERE id = 1;
```

This will delete the row from the "customers" table where the "id" is equal to 1.

## Advanced Concepts

SQL also includes advanced concepts such as:

- Joins: Used to combine data from multiple tables based on a related column.
- Aggregation: Used to perform calculations on groups of rows, such as calculating the average or sum of a column.
- Subqueries: Used to nest one query inside another query.
- Indexing: Used to improve the performance of database queries by creating indexes on columns.

These concepts allow you to perform more complex operations and optimize your database queries.
## SQL Joins

Joins are used to combine data from multiple tables based on a related column. There are different types of joins, including:

- Inner Join: Returns only the rows that have matching values in both tables.
- Left Join: Returns all the rows from the left table and the matching rows from the right table.
- Right Join: Returns all the rows from the right table and the matching rows from the left table.
- Full Outer Join: Returns all the rows from both tables, including the unmatched rows.

Here's an example of an inner join:

```sql
SELECT customers.name, orders.order_date
FROM customers
INNER JOIN orders
ON customers.id = orders.customer_id;
```

This will retrieve the customer name and order date from the "customers" and "orders" tables, only for the rows where the customer ID matches.

## SQL Aggregation

Aggregation functions are used to perform calculations on groups of rows. Some common aggregation functions include:

- COUNT: Returns the number of rows in a group.
- SUM: Returns the sum of a column in a group.
- AVG: Returns the average value of a column in a group.
- MAX: Returns the maximum value of a column in a group.
- MIN: Returns the minimum value of a column in a group.

Here's an example of using the SUM function:

```sql
SELECT category, SUM(quantity) AS total_quantity
FROM products
GROUP BY category;
```

This will calculate the total quantity of products for each category in the "products" table.

## SQL Subqueries

Subqueries are used to nest one query inside another query. They can be used in various ways, such as:

- Subqueries in the SELECT statement: Used to retrieve a single value or a set of values for each row.
- Subqueries in the FROM clause: Used to create a temporary table that can be used in the main query.
- Subqueries in the WHERE clause: Used to filter the results based on the result of the subquery.

Here's an example of using a subquery in the WHERE clause:

```sql
SELECT name
FROM customers
WHERE id IN (SELECT customer_id FROM orders WHERE total_amount > 1000);
```

This will retrieve the names of customers who have made orders with a total amount greater than 1000.

## SQL Indexing

Indexing is used to improve the performance of database queries by creating indexes on columns. Indexes allow the database to quickly locate the rows that match a certain condition.

To create an index, you can use the `CREATE INDEX` statement followed by the index name, table name, and column name. For example:

```sql
CREATE INDEX idx_customers_name ON customers (name);
```

This will create an index named "idx_customers_name" on the "name" column of the "customers" table.

Indexes can significantly speed up queries that involve the indexed columns, but they also have some overhead in terms of storage and maintenance.
