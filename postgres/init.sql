-- Create basic tables
CREATE TABLE client (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(20),
    address VARCHAR(255)
);

CREATE TABLE agency (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    location VARCHAR(100)
);

CREATE TABLE account (
    id SERIAL PRIMARY KEY,
    type VARCHAR(20),
    balance FLOAT,
    client_id INT REFERENCES client(id),
    agency_id INT REFERENCES agency(id)
);

CREATE TABLE transaction (
    id SERIAL PRIMARY KEY,
    step INT,
    type VARCHAR(20),
    amount FLOAT,
    oldbalanceorg FLOAT,
    newbalanceorig FLOAT,
    oldbalancedest FLOAT,
    newbalancedest FLOAT,
    account_id INT REFERENCES account(id)
);

CREATE TABLE prediction (
    id SERIAL PRIMARY KEY,
    score FLOAT,
    is_fraud BOOLEAN,
    transaction_id INT REFERENCES transaction(id)
);

-- Insert sample data
INSERT INTO client (name, email, phone, address)
VALUES ('Alice Fraudless', 'alice@example.com', '0600000001', 'Rabat');

INSERT INTO agency (name, location)
VALUES ('ABB Agence 1', 'Casablanca');

INSERT INTO account (type, balance, client_id, agency_id)
VALUES ('CREDIT', 10000.0, 1, 1);

INSERT INTO transaction (step, type, amount, oldbalanceorg, newbalanceorig, oldbalancedest, newbalancedest, account_id)
VALUES (1, 'TRANSFER', 2000.0, 10000.0, 8000.0, 3000.0, 5000.0, 1);

INSERT INTO prediction (score, is_fraud, transaction_id)
VALUES (0.89, true, 1);
