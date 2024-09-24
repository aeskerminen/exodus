CREATE TABLE rental_assignments (
    id SERIAL PRIMARY KEY,
    customer_name TEXT NOT NULL,
    begin_date TEXT NOT NULL,
    end_date TEXT NOT NULL,
    amount_boxes INTEGER NOT NULL
);

CREATE TABLE warehouse_rentals (
    id SERIAL PRIMARY KEY,
    customer_name TEXT NOT NULL,
    begin_date TEXT NOT NULL,
    end_date TEXT NOT NULL,
    unit INTEGER NOT NULL
)