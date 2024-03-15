import React from 'react';
import './App.css';
import DataTable from './DataTable';

const data = [
  { MATRICULA: 12354, NOMBRE: 'Javier Ayala', AÑOS: 30 },
  { MATRICULA: 22504, NOMBRE: 'Julia Ramirez', AÑOS: 25 },
  { MATRICULA: 34828, NOMBRE: 'Elizabeth Vera', AÑOS: 35 },
];

function App() {
  return (
    <div className="App">
      <br></br>
      <h1>Data Table Ejemplo</h1>
      <br></br>
      <DataTable data={data} />
    </div>
  );
}

export default App;
