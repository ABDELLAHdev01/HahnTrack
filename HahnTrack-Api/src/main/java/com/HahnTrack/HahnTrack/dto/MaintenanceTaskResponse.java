package com.HahnTrack.HahnTrack.dto;

import com.HahnTrack.HahnTrack.entity.TaskPriority;
import com.HahnTrack.HahnTrack.entity.TaskStatus;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
public class MaintenanceTaskResponse {

    private Long id;
    private String title;
    private String description;
    private String machineName;
    private TaskPriority priority;
    private TaskStatus status;
    private LocalDate dueDate;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
