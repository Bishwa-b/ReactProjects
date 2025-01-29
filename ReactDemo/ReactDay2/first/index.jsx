import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

function MainComponent(){
    return (
            <main>
                <img src="react-logo.png" width="40px" alt="React logo" />
                <h1>Why I am doing what I am doing ?</h1>
                <ul>
                    <li>React is popular</li>
                    <li>Upgrade my technical knowledge</li>
                    <li>Get a job</li>
                    <li>Challenging </li>
                    <li>Build cool projects</li>
        </ul>
    </main>
    )
}

root.render(
    <MainComponent />
)
