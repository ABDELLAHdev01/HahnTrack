INSERT INTO maintenance_task (title, description, machine_name, priority, status, due_date, created_at, updated_at)
VALUES

('Check conveyor belt', 'Routine inspection of conveyor belt tension and wear.', 'Machine A', 'MEDIUM', 'PENDING', '2025-06-30', NOW(), NOW()),

('Replace filter', 'Replace air intake filter in cooling system.', 'Machine B', 'HIGH', 'IN_PROGRESS', '2025-06-25', NOW(), NOW()),

('Lubricate bearings', 'Lubrication of rotary joints.', 'Machine C', 'LOW', 'COMPLETED', '2025-06-10', NOW(), NOW()),

('Sensor calibration', 'Calibrate temperature sensors for accurate readings.', 'Machine D', 'MEDIUM', 'PENDING', '2025-07-01', NOW(), NOW()),

('Update firmware', 'Apply latest firmware to the machine controller.', 'Machine E', 'HIGH', 'PENDING', '2025-07-05', NOW(), NOW()),

('Clean coolant system', 'Flush and clean the coolant pipes and tanks.', 'Machine F', 'MEDIUM', 'IN_PROGRESS', '2025-06-28', NOW(), NOW()),

('Inspect hydraulic pump', 'Check pressure levels and wear in hydraulic pump system.', 'Machine G', 'HIGH', 'PENDING', '2025-07-03', NOW(), NOW()),

('Replace worn gears', 'Replace damaged or worn-out gears in motor unit.', 'Machine H', 'HIGH', 'IN_PROGRESS', '2025-06-29', NOW(), NOW()),

('Software diagnostics', 'Run full diagnostic on embedded control software.', 'Machine I', 'LOW', 'COMPLETED', '2025-06-15', NOW(), NOW()),

('Check safety sensors', 'Verify all emergency stop and safety sensors are functional.', 'Machine J', 'MEDIUM', 'PENDING', '2025-07-06', NOW(), NOW());
