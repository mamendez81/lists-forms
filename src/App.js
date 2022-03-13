import logo from './logo.svg';
import './App.css';
import Students from './components/Students';
import AddStudent from './components/AddStudent';
import {useState} from 'react';

function App() {
  const inicialState = [
    {
        id: 1,
        name: 'Ana',
        age: 20,
        grade: 'A'
    },
    {
        id: 2,
        name: 'Carlos',
        age: 21,
        grade: 'B'
    },
    {
        id: 3,
        name: 'Fabián',
        age: 30,
        grade: 'A+'
    },
    {
        id: 4,
        name: 'Karla',
        age: 40,
        grade: 'C'
    }
];

const [students, setStudents]=useState(inicialState);

const handleNewStudent = student => {
setStudents([...students, student]);
};
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Students students={students}/>
        <AddStudent addNewStudent={handleNewStudent}/>
      </header>
    </div>
  );
}

export default App;
