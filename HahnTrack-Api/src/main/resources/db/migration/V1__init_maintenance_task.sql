CREATE TABLE maintenance_task (
                                  id BIGSERIAL PRIMARY KEY,
                                  title VARCHAR(255) NOT NULL,
                                  description TEXT,
                                  machine_name VARCHAR(255) NOT NULL,
                                  priority VARCHAR(20) NOT NULL,
                                  status VARCHAR(20) NOT NULL,
                                  due_date DATE,
                                  created_at TIMESTAMP,
                                  updated_at TIMESTAMP
);
