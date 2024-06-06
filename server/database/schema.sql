
CREATE TABLE offer(
  id int unsigned primary key auto_increment not null,
  job_title VARCHAR(255) NOT NULL
);

CREATE TABLE company(
  id int unsigned primary key auto_increment not null,
  email VARCHAR(255)
);

