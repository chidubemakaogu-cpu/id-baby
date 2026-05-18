import './Form.css';
function generateNewID() {
      // crypto.randomUUID() generates a standard, highly unique string
      const newID = crypto.randomUUID(); 
      
      // Updates the HTML text with the new ID
      document.getElementById("idDisplay").textContent = newID;
      
      // Optional: prints it to the console to verify
      console.log("Generated ID:", newID);
    }
function Form({ Name, Age, Height, Weight, SCHOOL }) {
    return (
        <section id="ID_card">
            <div id="">                            
                <h3>Nicholas ID Card:<button onClick={generateNewID}>New id</button></h3>
                <p>Name: {Name} </p>
                <p>Age: {Age}  years old</p>
                <p>Height: {Height}  feet</p>
                <p>Weight: {Weight}  kg</p>
                <p>School: {SCHOOL}    Academy</p>

            </div>
        </section>
    )
}






















function form({ name, age, height, weight, School }) {
    return  (
        <section id="ID_card">            
            <div id="">
                <h3>Michael ID Card</h3>
                <p>Name: {name} </p>
                <p>Age: {age}  years old</p>
                <p>Height: {height}  feet</p>
                <p>Weight: {weight}  kg</p>
                <p>School: {School}    Academy</p>

            </div>
        </section>
    )
}
export default Form; 
export {form};