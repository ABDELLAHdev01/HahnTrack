CREATE TABLE maintenance_tasks (
                                  id BIGINT AUTO_INCREMENT PRIMARY KEY,
                                  title VARCHAR(255) NOT NULL,
                                  description TEXT,
                                  machine_name VARCHAR(255) NOT NULL,
                                  priority VARCHAR(20) NOT NULL,
                                  status VARCHAR(20) NOT NULL,
                                  due_date DATE,
                                  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                                  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
