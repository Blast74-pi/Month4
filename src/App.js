import './App.css';
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Content from "./components/content/Content"
import MainPage from "./pages/mainPage/mainPage";


function App() {
  return (
    <div className="App">
      <Header/>
      <Footer/>
      <Content/>
        <MainPage/>
    </div>
  );
}

export default App;
