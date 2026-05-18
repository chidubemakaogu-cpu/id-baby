import './Nav.css'

function Invent() {
    const link = "https://drive.google.com/file/d/1s8n9l3m2Xo7a5v6u7w8x9y0z1a2b3c4/view?usp=sharing";
    showAlert(link);
}

function Nav({ Name, Age, Gender, Class, DateOfBirth }) {
    return (
        <section id="Nicholas">
            <header>
                <nav>
                    <div id="asshole">
                        <h2>Chidubem Nicholas Akaogu's Academy</h2>
                        <button type="button" onClick={Invent}>Student Files</button>
                    </div>
                    <input type="text" placeholder="SEARCH FOR STUDENTS" />
                </nav>
            </header>

        </section>
    )
}

export default Nav