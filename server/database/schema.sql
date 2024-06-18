CREATE TABLE company(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL
);

CREATE TABLE offer(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  job_title VARCHAR(80) NOT NULL,
  job_type ENUM('CDD','CDI','Alternance') NOT NULL,
  localisation VARCHAR(45) NOT NULL,
  company_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (company_id) REFERENCES company(id)
);

CREATE TABLE user(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(64) NOT NULL
);

CREATE TABLE candidate(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  firstname VARCHAR(50) NOT NULL,
  birthday DATE NOT NULL 
) 
