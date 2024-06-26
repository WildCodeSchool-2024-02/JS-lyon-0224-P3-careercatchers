CREATE TABLE user(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  hashed_password VARCHAR(150) 
);

CREATE TABLE company(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(100) NOT NULL,
  user_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE candidate(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  firstname VARCHAR(50) NOT NULL,
  birthday DATE NOT NULL 
);

CREATE TABLE offer(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  job_title VARCHAR(80) NOT NULL,
  job_type ENUM('CDD','CDI','Apprentissage','Professionnalisation') NOT NULL,
  content TEXT NOT NULL,
  location VARCHAR(45) NOT NULL,
  salary_rate ENUM('annuel','mensuel','horaire'),
  min_salary INT UNSIGNED,
  max_salary INT UNSIGNED,
  publish_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  company_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (company_id) REFERENCES company(id)
);

