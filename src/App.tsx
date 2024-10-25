import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Landing from "./pages/landing";
import ContactForm from "./pages/ContactForm";

function App() {



    return (
        <>
            <Header />

            <main>

                <Routes>

                    <Route path="/" element={<Landing />} />
                    <Route path="/contact" element={<ContactForm />} />

                </Routes>

            </main>

            <Footer />
        </>
    )
}


export default App

// function useState(initialValue) {
//     const updateFunction = (newVal) => {
//         initialValue = newVal;
//     }

//     return [initialValue, updateFunction]
// }

// const [count, setCount] = useState(0);