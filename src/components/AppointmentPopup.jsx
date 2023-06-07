import { Grid } from "@mui/material";
import React, { useState } from "react";

const AppointmentPopup = ({
  onScheduleCreate,
  onClose,
  tableData,
  selectedDoctorIndex,
}) => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [doctor, setDoctor] = useState("");
  const [patientName, setPatientName] = useState("");

  const handleCreateSchedule = () => {
    // Create a new schedule object
    const newSchedule = {
      startTime,
      endTime,
      doctor,
      patientName,
    };

    // Call the onScheduleCreate callback function and pass the new schedule data
    onScheduleCreate(newSchedule);

    // Reset the form fields
    setStartTime("");
    setEndTime("");
    setDoctor("");
    setPatientName("");
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div
          style={{
            background: "#2b88e9",
            height: "69px",
            color: "white",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h2>Create Appointment</h2>
        </div>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <div style={{ marginTop: "16px", padding: "10px" }}>
              <label>
                Start Time:
                <input
                  style={{
                    height: "38px",
                    width: "220px",
                    borderRadius: "10px",
                    background: "lightgray",
                    border: " none",
                  }}
                  type="text"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </label>
            </div>
          </Grid>
          <Grid item md={6}>
            <div style={{ marginTop: "16px", padding: "10px" }}>
              <label>
                End Time:
                <input
                  style={{
                    height: "38px",
                    width: "220px",
                    borderRadius: "10px",
                    background: "lightgray",
                    border: " none",
                  }}
                  type="text"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </label>
            </div>
          </Grid>
          <Grid item md={6}>
            <div style={{ marginTop: "16px", padding: "10px" }}>
              <label>
                Doctor:
                <select
                  style={{
                    height: "38px",
                    width: "220px",
                    borderRadius: "10px",
                    background: "lightgray",
                    border: " none",
                  }}
                  value={doctor}
                  onChange={(e) => setDoctor(e.target.value)}
                >
                  <option value="">Select Doctor</option>
                  <option value="DR NUSHIN KASSAM">DR NUSHIN KASSAM</option>
                  <option value="DR FATEMA ANJAM">DR FATEMA ANJAM</option>
                </select>
              </label>
            </div>
          </Grid>
          <Grid item md={6}>
            <div style={{ marginTop: "16px", padding: "10px" }}>
              <label>
                Patient Name:
                <input
                  style={{
                    height: "38px",
                    width: "220px",
                    borderRadius: "10px",
                    background: "lightgray",
                    border: " none",
                  }}
                  type="text"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                />
              </label>
            </div>
          </Grid>
          <div
            style={{
              marginTop: "16px",
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <button
              className="left-button"
              onClick={handleCreateSchedule}
              style={{
                background: " orange",
                color: "white",
                width: "100px",
                height: "37px",
              }}
            >
              Create
            </button>

            <button
              className="right-button"
              onClick={onClose}
              style={{
                background: " gray",
                color: "white",
                width: "100px",
                height: "37px",
              }}
            >
              Cancel
            </button>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default AppointmentPopup;
