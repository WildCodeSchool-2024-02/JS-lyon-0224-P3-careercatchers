
CREATE TABLE offer(
  id int unsigned primary key auto_increment not null,
  job_title VARCHAR(80) NOT NULL,
  job_type ENUM("CDD","CDI","Alternance") NOT NULL
);

