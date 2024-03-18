import { useState } from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import { AnimatePresence } from "framer-motion";
import Form from "./components/Form";

function App() {
    const [showWelcome, setShowWelcome] = useState(true);
    return (
        <>
            <AnimatePresence>
                {showWelcome && <Welcome onClose={() => setShowWelcome(false)} />}
                {!showWelcome && <Form />}
            </AnimatePresence>
        </>
    );
}

export default App;
