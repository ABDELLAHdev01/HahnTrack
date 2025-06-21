package com.HahnTrack.HahnTrack.controller;

import com.HahnTrack.HahnTrack.dto.MaintenanceTaskRequest;
import com.HahnTrack.HahnTrack.dto.MaintenanceTaskResponse;
import com.HahnTrack.HahnTrack.dto.mappers.MaintenanceTaskMapper;
import com.HahnTrack.HahnTrack.entity.MaintenanceTask;
import com.HahnTrack.HahnTrack.service.MaintenanceTaskService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin(origins = "*")
public class MaintenanceTaskController {

    private final MaintenanceTaskService taskService;

    public MaintenanceTaskController(MaintenanceTaskService taskService) {
        this.taskService = taskService;
    }

    @PostMapping
    public ResponseEntity<MaintenanceTaskResponse> createTask(@Valid @RequestBody MaintenanceTaskRequest request) {
        MaintenanceTask createdEntity = taskService.createTask(MaintenanceTaskMapper.toEntity(request));
        return ResponseEntity.created(URI.create("/api/tasks/" + createdEntity.getId()))
                .body(MaintenanceTaskMapper.toResponse(createdEntity));
    }

    @GetMapping
    public ResponseEntity<List<MaintenanceTaskResponse>> getAllTasks() {
        List<MaintenanceTaskResponse> responses = taskService.getAllTasks()
                .stream()
                .map(MaintenanceTaskMapper::toResponse)
                .toList();

        return ResponseEntity.ok(responses);
    }

    @GetMapping("/{id}")
    public ResponseEntity<MaintenanceTaskResponse> getTaskById(@PathVariable Long id) {
        return taskService.getTaskById(id)
                .map(MaintenanceTaskMapper::toResponse)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<MaintenanceTaskResponse> updateTask(
            @PathVariable Long id,
            @Valid @RequestBody MaintenanceTaskRequest request) {

        MaintenanceTask updatedEntity = taskService.updateTask(id, MaintenanceTaskMapper.toEntity(request));
        return ResponseEntity.ok(MaintenanceTaskMapper.toResponse(updatedEntity));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
        return ResponseEntity.noContent().build();
    }



}
