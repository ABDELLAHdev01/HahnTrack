package com.HahnTrack.HahnTrack.service;

import com.HahnTrack.HahnTrack.entity.MaintenanceTask;

import java.util.List;
import java.util.Optional;

public interface MaintenanceTaskService {


    MaintenanceTask createTask(MaintenanceTask task);

    List<MaintenanceTask> getAllTasks();

    Optional<MaintenanceTask> getTaskById(Long id);

    MaintenanceTask updateTask(Long id, MaintenanceTask task);

    void deleteTask(Long id);
}
