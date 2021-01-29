import './App.css';
import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import bg from "./images/bg.jpg"

const App = () => {
    return (
        <>
            <Header
                title = "Simple title"
                descr = "And the same simple Description!"
            />
            <Layout
                id="1"
                title="I AM Layout!"
                descr="I AM GROOT!"
                urlBg ={bg}
            />
            <Layout
                id="2"
                title="Cool layout !)"
                descr="The same cool description !)"
                colorBg = "#040497"
            />
            <Layout
                id="3"
                title="This is Last Layout"
                descr="This is Last description"
                urlBg ={bg}
            />
            <Footer/>
        </>
    );
}

export default App;
