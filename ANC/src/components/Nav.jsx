import './Nav.css'

function Invent() {
    const link = "https://drive.google.com/file/d/1s8n9l3m2Xo7a5v6u7w8x9y0z1a2b3c4/view?usp=sharing";
    alert("check Nicholas docx with this link: " + link);
}

function Nav({ Name, Age, Gender, Class, DateOfBirth }) {
    return (
        <section id="Nicholas">
            <header>
                <nav>
                    <div id="asshole">
                        <h2>Chidubem Nicholas Akaogu /(Academy)</h2>
                        <button type="button" onClick={Invent}>Student Files</button>
                    </div>
                </nav>
            </header>
            <div id="Asshole">
                <input type="text" placeholder="Name" value={Name}></input>
                <input type="text" placeholder="Age" value={Age}></input>
                <input type="text" placeholder="Date of Birth" value={DateOfBirth}></input>
                <label>Your Gender: <select value={Gender}>
                    <option>Select</option>
                    <option>Male</option>
                    <option>Female</option>
                </select><br></br></label>
                 <label>Your Class: <select value={Class}>
                    <option>Select</option>
                    <option>Grade 1</option>
                    <option>Grade 2</option>
                    <option>Grade 3</option>
                    <option>Grade 4</option>
                    <option>Grade 5</option>
                    <option>Grade 6</option>
                    <option>Grade 7</option>
                    <option>Grade 8</option>
                    <option>Grade 9</option>    
                    <option>Grade 10</option>
                    <option>Grade 11</option>
                    <option>Grade 12</option>    
                </select><br></br></label>
            </div>
        </section>
    )
}

export default Nav