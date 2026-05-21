import Nav from "./components/Nav";
import Form from "./components/Form";
import {form} from "./components/Form";
import DataCollector from "./components/DataCollector";
import StudentForm from "./components/StudentForm";
import "./app.css";

function App() {
  return (
    <div className="App">
      <Nav
        Name="Chidubem Nicholas Akaogu"
        Age="11"
        Gender=""
        Class=""
        DateOfBirth="Nov.,3,2014"
      />
      <Form
        Name="Chidubem Nicholas Akaogu"
        Age={11}
        Height="5.3"
        Weight="53"
        SCHOOL="Kapna International"
        />
      <DataCollector />
      <StudentForm />
    </div>
  )
}

export default App;