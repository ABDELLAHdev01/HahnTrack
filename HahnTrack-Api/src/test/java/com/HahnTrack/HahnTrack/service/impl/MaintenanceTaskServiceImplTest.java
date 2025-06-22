package com.HahnTrack.HahnTrack.service.impl;

import static org.junit.jupiter.api.Assertions.*;

import com.HahnTrack.HahnTrack.entity.MaintenanceTask;
import com.HahnTrack.HahnTrack.entity.TaskPriority;
import com.HahnTrack.HahnTrack.entity.TaskStatus;
import com.HahnTrack.HahnTrack.repository.MaintenanceTaskRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.*;

import java.time.LocalDate;
import java.util.*;

import static org.mockito.Mockito.*;

class MaintenanceTaskServiceTest {

    @Mock
    private MaintenanceTaskRepository repository;

    private MaintenanceTaskServiceImpl service;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        service = new MaintenanceTaskServiceImpl(repository);
    }

    @Test
    void shouldReturnAllTasks() {
        List<MaintenanceTask> mockTasks = List.of(
                new MaintenanceTask(1L, "Task 1", "Desc", "Machine A", TaskPriority.HIGH, TaskStatus.PENDING, LocalDate.now(), null, null)
        );

        when(repository.findAll()).thenReturn(mockTasks);

        List<MaintenanceTask> tasks = service.getAllTasks();

        assertEquals(1, tasks.size());
        assertEquals("Task 1", tasks.get(0).getTitle());
    }

    @Test
    void shouldReturnTaskById() {
        MaintenanceTask task = new MaintenanceTask(1L, "Task 1", "Desc", "Machine A", TaskPriority.HIGH, TaskStatus.PENDING, LocalDate.now(), null, null);

        when(repository.findById(1L)).thenReturn(Optional.of(task));

        Optional<MaintenanceTask> result = service.getTaskById(1L);

        assertTrue(result.isPresent());
        assertEquals("Task 1", result.get().getTitle());
    }

    @Test
    void shouldCreateTask() {
        MaintenanceTask task = new MaintenanceTask(null, "New Task", "Test", "Machine B", TaskPriority.MEDIUM, TaskStatus.PENDING, LocalDate.now(), null, null);

        MaintenanceTask saved = new MaintenanceTask(10L, "New Task", "Test", "Machine B", TaskPriority.MEDIUM, TaskStatus.PENDING, LocalDate.now(), null, null);

        when(repository.save(task)).thenReturn(saved);

        MaintenanceTask result = service.createTask(task);

        assertNotNull(result.getId());
        assertEquals("New Task", result.getTitle());
    }

}