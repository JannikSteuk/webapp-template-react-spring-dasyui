package com.enterprise.backend.model;

import jakarta.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "time_logs")
public class TimeLog {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String description;
  private Instant startTime;
  private Instant endTime;

  // --- HIER IST DIE VERKNÜPFUNG ---
  @ManyToOne(fetch = FetchType.LAZY)

  @JoinColumn(name = "user_id", nullable = false)
  private User user;

  public TimeLog() {
  }

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public Instant getStartTime() {
    return startTime;
  }

  public void setStartTime(Instant startTime) {
    this.startTime = startTime;
  }

  public Instant getEndTime() {
    return endTime;
  }

  public void setEndTime(Instant endTime) {
    this.endTime = endTime;
  }
}
