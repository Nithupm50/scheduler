import React, { useState } from 'react';
import AppointmentPopup from './AppointmentPopup';
import './Styles.css';

const Scheduler = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedDoctorIndex, setSelectedDoctorIndex] = useState(null);
  const [modal, setModal] = useState(false);
  const [tableData, setTableData] = useState([
    { rowHeading: 'Local',    doctor1: '', doctor2: '' },
    { rowHeading: '12:00 AM', doctor1: '', doctor2: '' },
    { rowHeading: '12:15 AM', doctor1: '', doctor2: '' },
    { rowHeading: '12:30 AM', doctor1: '', doctor2: '' },
    { rowHeading: '12:45 AM', doctor1: '', doctor2: '' },
    { rowHeading: '1:00 AM', doctor1: '', doctor2: '' },
    { rowHeading: '1:15 AM', doctor1: '', doctor2: '' },
    { rowHeading: '1:30 AM', doctor1: '', doctor2: '' },
    { rowHeading: '1:45 AM', doctor1: '', doctor2: '' },
    { rowHeading: '2:00 AM', doctor1: '', doctor2: '' },
    { rowHeading: '2:15 AM', doctor1: '', doctor2: '' },
    { rowHeading: '2:30 AM', doctor1: '', doctor2: '' },
    { rowHeading: '2:45 AM', doctor1: '', doctor2: '' },
    { rowHeading: '3:00 AM', doctor1: '', doctor2: '' },
    { rowHeading: '3:15 AM', doctor1: '', doctor2: '' },
    { rowHeading: '3:30 AM', doctor1: '', doctor2: '' },
    { rowHeading: '3:45 AM', doctor1: '', doctor2: '' },
    { rowHeading: '4:00 AM', doctor1: '', doctor2: '' },
    { rowHeading: '4:15 AM', doctor1: '', doctor2: '' },
    { rowHeading: '4:30 AM', doctor1: '', doctor2: '' },
    { rowHeading: '4:45 AM', doctor1: '', doctor2: '' },
    { rowHeading: '5:00 AM', doctor1: '', doctor2: '' },
    { rowHeading: '5:15 AM', doctor1: '', doctor2: '' },
    // Add more rows as needed
  ]);

  const handleScheduleCreate = (newSchedule) => {
    // Find the row in the table data array based on the rowHeading
    const rowIndex = tableData.findIndex(
      (row) => row.rowHeading === newSchedule.startTime
    );

    if (rowIndex !== -1) {
      // Update the corresponding row with the new schedule data
      const updatedTableData = [...tableData];
      const doctorKey = `doctor${selectedDoctorIndex}`;
      updatedTableData[rowIndex][doctorKey] = newSchedule.patientName;
      setTableData(updatedTableData);
    }
    setModal(false);
  };

  return (
    <div className={`table-root ${modal ? 'blur' : ''}`}>
      <h1>Appointment Scheduler</h1>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th></th>
            <th style={{ border: '1px solid black', padding: '8px', background: "#ffff0033" }}>DR NUSHIN KASSAM</th>
            <th style={{ border: '1px solid black', padding: '8px', background: "#ffff0033" }}>DR FATEMA ANJAM</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th></th>
            <th style={{ border: '1px solid black', padding: '8px', background: "#ffff0033", color: "#2b88e9", fontWeight: "400" }}>12 Wednesday</th>
            <th style={{ border: '1px solid black', padding: '8px', background: "#ffff0033", color: "#2b88e9", fontWeight: "400" }}>12 Wednesday</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} style={{
              backgroundColor:
                appointments.includes(row.rowHeading) ? '#E2F0D9' : '',
            }}>
              <th style={{ fontSize: "15px", fontWeight: "normal", border: "1px solid grey" }}>{row.rowHeading}</th>
              <td onClick={() => {
                setModal(true);
                setSelectedDoctorIndex(1);
              }} style={{ border: '1px solid grey' }}>{row.doctor1}</td>
              <td onClick={() => {
                setModal(true);
                setSelectedDoctorIndex(2);
              }} style={{ border: '1px solid grey' }}>{row.doctor2}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {modal && (
        <AppointmentPopup
          onScheduleCreate={handleScheduleCreate}
          onClose={() => setModal(false)}
          tableData={tableData}
          selectedDoctorIndex={selectedDoctorIndex}
        />
      )}
    </div>
  );
};

export default Scheduler;


