
CREATE TABLE offer(
  id int unsigned primary key auto_increment not null,
  job_title VARCHAR(80) NOT NULL,
  job_type ENUM("CDD","CDI","Alternance") NOT NULL
);

CREATE TABLE company(
  id INT unsigned PRIMARY KEY auto_increment NOT NULL,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL
);

