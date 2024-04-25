-- Create a table for 5 products with product names and prices
CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    product_price DECIMAL(10, 2) NOT NULL
);

-- Insert 5 products
INSERT INTO products (product_name, product_price) VALUES
    ('Product 1', 10.0),
    ('Product 2', 20.0),
    ('Product 3', 30.0),
    ('Product 4', 40.0),
    ('Product 5', 50.0);
 
 To execute the SQL script, use the following command: 
 psql -U postgres -d mydb -f demo.sql
 
 The above command will create the  products  table and insert 5 products into the table. 
 Query data from the products table 
 To query data from the  products  table, you can use the following command: 
 psql -U postgres -d mydb -c "SELECT * FROM products;"
 
 The above command will output the data of the  products  table: 
  product_id | product_name | product_price 
------------+--------------+--------------
          1 | Product 1    |        10.00
          2 | Product 2    |        20.00
          3 | Product 3    |        30.00
          4 | Product 4    |        40.00
          5 | Product 5    |        50.00
(5 rows)
 
 In this tutorial, we have shown you how to use the psql command line to connect to a PostgreSQL database and execute SQL commands. 
 Was this tutorial helpful ?



-- dwdwdw