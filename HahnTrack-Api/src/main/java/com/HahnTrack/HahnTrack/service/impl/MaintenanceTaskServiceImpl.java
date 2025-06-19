package com.HahnTrack.HahnTrack.service.impl;

import com.HahnTrack.HahnTrack.entity.MaintenanceTask;
import com.HahnTrack.HahnTrack.exception.ResourceNotFoundException;
import com.HahnTrack.HahnTrack.repository.MaintenanceTaskRepository;
import com.HahnTrack.HahnTrack.service.MaintenanceTaskService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MaintenanceTaskServiceImpl implements MaintenanceTaskService {

    private final MaintenanceTaskRepository repository;

    public MaintenanceTaskServiceImpl(MaintenanceTaskRepository repository) {
        this.repository = repository;
    }

    @Override
    public MaintenanceTask createTask(MaintenanceTask task) {
        return repository.save(task);
    }

    @Override
    public List<MaintenanceTask> getAllTasks() {
        return repository.findAll();
    }

    @Override
    public Optional<MaintenanceTask> getTaskById(Long id) {
        return repository.findById(id);
    }

    @Override
    public MaintenanceTask updateTask(Long id, MaintenanceTask updatedTask) {
        MaintenanceTask existing = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task not found with id " + id));

        existing.setTitle(updatedTask.getTitle());
        existing.setDescription(updatedTask.getDescription());
        existing.setMachineName(updatedTask.getMachineName());
        existing.setPriority(updatedTask.getPriority());
        existing.setStatus(updatedTask.getStatus());
        existing.setDueDate(updatedTask.getDueDate());

        return repository.save(existing);
    }

    @Override
    public void deleteTask(Long id) {
        if (!repository.existsById(id)) {
            throw new ResourceNotFoundException("Task not found with id " + id);
        }
        repository.deleteById(id);
    }


}
