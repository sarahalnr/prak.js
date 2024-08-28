// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




function App() {
  const biodataArray = [
    { field: "Nama", value: "Sarah Isnaini Alnauri" },
    { field: "NIM", value: "3312301018" },
    { field: "Jurusan", value: "Teknik Informatika" },
    { field: "Universitas", value: "Politeknik Negeri Batam" },
  ];
  return (
    <div>
      <h2>Biodata Mahasiswa (Tabel)</h2>
      <table border="1" cellpadding="10">
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {biodataArray.map((item, index) => (
            <tr key={index}>
              <td>{item.field}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;