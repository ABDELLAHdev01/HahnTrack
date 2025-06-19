package com.HahnTrack.HahnTrack.dto.mappers;

import com.HahnTrack.HahnTrack.dto.MaintenanceTaskRequest;
import com.HahnTrack.HahnTrack.dto.MaintenanceTaskResponse;
import com.HahnTrack.HahnTrack.entity.MaintenanceTask;

public class MaintenanceTaskMapper {
    public static MaintenanceTask toEntity(MaintenanceTaskRequest dto) {
        MaintenanceTask task = new MaintenanceTask();
        task.setTitle(dto.getTitle());
        task.setDescription(dto.getDescription());
        task.setMachineName(dto.getMachineName());
        task.setPriority(dto.getPriority());
        task.setStatus(dto.getStatus());
        task.setDueDate(dto.getDueDate());
        return task;
    }

    public static MaintenanceTaskResponse toResponse(MaintenanceTask entity) {
        MaintenanceTaskResponse dto = new MaintenanceTaskResponse();
        dto.setId(entity.getId());
        dto.setTitle(entity.getTitle());
        dto.setDescription(entity.getDescription());
        dto.setMachineName(entity.getMachineName());
        dto.setPriority(entity.getPriority());
        dto.setStatus(entity.getStatus());
        dto.setDueDate(entity.getDueDate());
        dto.setCreatedAt(entity.getCreatedAt());
        dto.setUpdatedAt(entity.getUpdatedAt());
        return dto;
    }
}
