r-- Create user_details table
CREATE TABLE user_details (
    user_id SERIAL PRIMARY KEY,
    fname VARCHAR(100) NOT NULL,
    lname VARCHAR(100) NOT NULL,
    phone_no VARCHAR(20) NOT NULL,
    dob DATE NOT NULL,
    address TEXT NOT NULL,
    aadhar_no VARCHAR(20) UNIQUE NOT NULL,
    gender VARCHAR(10) NOT NULL
);

-- Create users table (for user authentication credentials)
CREATE TABLE users (
    user_id INTEGER PRIMARY KEY REFERENCES user_details(user_id) ON DELETE CASCADE,
    email VARCHAR(255) UNIQUE NOT NULL,
    pass_word VARCHAR(255) NOT NULL
);

-- Create vehicle_details table
CREATE TABLE vehicle_details (
    registration_no VARCHAR(20) PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES user_details(user_id) ON DELETE CASCADE,
    fuel_type VARCHAR(20) NOT NULL,
    vin VARCHAR(50) NOT NULL,
    vehicle_make VARCHAR(100) NOT NULL,
    vehicle_model VARCHAR(100) NOT NULL,
    registration_date DATE NOT NULL
);

-- Create licence table
CREATE TABLE licence (
    licence_no VARCHAR(50) PRIMARY KEY,
    issue_date DATE NOT NULL,
    exp_date DATE NOT NULL
);

-- Create pollution_cer table
CREATE TABLE pollution_cer (
    pollution_cer_no VARCHAR(50) PRIMARY KEY,
    issue_date DATE NOT NULL,
    validation VARCHAR(50) NOT NULL, -- e.g., "6 months"
    vehicle_make VARCHAR(100) NOT NULL,
    engine_no VARCHAR(50) NOT NULL
);

-- Create insurance table
CREATE TABLE insurance (
    insurance_no VARCHAR(50) PRIMARY KEY,
    issue_date DATE NOT NULL,
    exp_date DATE NOT NULL,
    scheme_no VARCHAR(50) NOT NULL,
    ins_provider VARCHAR(100) NOT NULL
);

-- Create documents table (bridges user and their certificates)
CREATE TABLE documents (
    user_id INTEGER PRIMARY KEY REFERENCES user_details(user_id) ON DELETE CASCADE,
    licence_no VARCHAR(50) REFERENCES licence(licence_no) ON DELETE SET NULL,
    insurance_no VARCHAR(50) REFERENCES insurance(insurance_no) ON DELETE SET NULL,
    pollution_cer_no VARCHAR(50) REFERENCES pollution_cer(pollution_cer_no) ON DELETE SET NULL
);

-- Create police table
CREATE TABLE police (
    station_id VARCHAR(50) PRIMARY KEY,
    password VARCHAR(255) NOT NULL
);

-- Create admins (RTO) table
CREATE TABLE admins (
    office_id VARCHAR(50) PRIMARY KEY, -- e.g. RTO code prefix like "KL01"
    station_id VARCHAR(50) REFERENCES police(station_id) ON DELETE SET NULL,
    password VARCHAR(255) NOT NULL
);

-- Create user_complaints table
CREATE TABLE user_complaints (
    complaint_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES user_details(user_id) ON DELETE CASCADE,
    vehicle_no VARCHAR(20) NOT NULL,
    vehicle_lost_place VARCHAR(255) NOT NULL,
    vehicle_description TEXT NOT NULL,
    vehicle_lost_date DATE NOT NULL,
    vehicle_found_date DATE
);

-- Create police_complaints table
CREATE TABLE police_complaints (
    complaint_id INTEGER PRIMARY KEY REFERENCES user_complaints(complaint_id) ON DELETE CASCADE,
    station_id VARCHAR(50) NOT NULL REFERENCES police(station_id) ON DELETE CASCADE,
    vehicle_lost_date DATE NOT NULL,
    vehicle_found_date DATE
);

-- Create seller_details table (used during transfer)
CREATE TABLE seller_details (
    seller_id SERIAL PRIMARY KEY,
    fname VARCHAR(100) NOT NULL,
    lname VARCHAR(100) NOT NULL,
    dob DATE NOT NULL,
    gender VARCHAR(10) NOT NULL,
    phone_no VARCHAR(20) UNIQUE NOT NULL,
    aadhar_no VARCHAR(20) UNIQUE NOT NULL,
    email VARCHAR(255) NOT NULL,
    address TEXT NOT NULL
);

-- Create buyer_details table (used during transfer)
CREATE TABLE buyer_details (
    buyer_id SERIAL PRIMARY KEY,
    fname VARCHAR(100) NOT NULL,
    lname VARCHAR(100) NOT NULL,
    dob DATE NOT NULL,
    gender VARCHAR(10) NOT NULL,
    phone_no VARCHAR(20) UNIQUE NOT NULL,
    aadhar_no VARCHAR(20) UNIQUE NOT NULL,
    email VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    licence_no VARCHAR(50) NOT NULL
);

-- Create transfer table (records transactions)
CREATE TABLE transfer (
    transfer_id SERIAL PRIMARY KEY,
    seller_id INTEGER NOT NULL REFERENCES seller_details(seller_id) ON DELETE CASCADE,
    buyer_id INTEGER NOT NULL REFERENCES buyer_details(buyer_id) ON DELETE CASCADE,
    registration_no VARCHAR(20) NOT NULL,
    chassis_no VARCHAR(50) NOT NULL,
    sold_date DATE NOT NULL,
    user_id INTEGER NOT NULL REFERENCES user_details(user_id) ON DELETE CASCADE,
    verify_date DATE
);

-- Create transfer_details View
CREATE OR REPLACE VIEW transfer_details AS
SELECT 
    t.transfer_id,
    t.registration_no,
    t.chassis_no,
    t.sold_date,
    t.verify_date,
    s.fname AS sfname,
    s.lname AS slname,
    s.gender AS sgender,
    s.dob AS sdob,
    s.address AS saddress,
    s.phone_no AS sphone_no,
    s.email AS semail,
    s.aadhar_no AS saadhar_no,
    b.fname AS bfname,
    b.lname AS blname,
    b.gender AS bgender,
    b.dob AS bdob,
    b.address AS baddress,
    b.phone_no AS bphone_no,
    b.email AS bemail,
    b.aadhar_no AS baadhar_no,
    b.licence_no AS blicence_no,
    d.insurance_no,
    d.pollution_cer_no
FROM transfer t
JOIN seller_details s ON t.seller_id = s.seller_id
JOIN buyer_details b ON t.buyer_id = b.buyer_id
JOIN documents d ON t.user_id = d.user_id;

-- Create complaint_details View
CREATE OR REPLACE VIEW complaint_details AS
SELECT 
    uc.complaint_id,
    uc.user_id,
    uc.vehicle_no AS registration_no,
    uc.vehicle_lost_place,
    uc.vehicle_description,
    uc.vehicle_lost_date,
    uc.vehicle_found_date,
    pc.station_id,
    concat(ud.fname, ' ', ud.lname) AS full_name,
    ud.phone_no,
    ud.address,
    ud.aadhar_no,
    ud.gender,
    ud.dob,
    extract(year from age(ud.dob)) as age,
    u.email,
    vd.fuel_type,
    vd.vin,
    vd.vehicle_make,
    vd.vehicle_model
FROM user_complaints uc
JOIN police_complaints pc ON uc.complaint_id = pc.complaint_id
JOIN user_details ud ON uc.user_id = ud.user_id
JOIN users u ON uc.user_id = u.user_id
JOIN vehicle_details vd ON uc.vehicle_no = vd.registration_no;
