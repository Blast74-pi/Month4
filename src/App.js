import './App.css';
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Content from "./components/content/Content"
import MainPage from "./pages/mainPage/mainPage";
import AboutPage from "./pages/aboutPage/aboutPage";
import Todo from "./components/todo/Todo";


function App() {
  return (
    <div className="App">
      <Header/>
      <Footer/>
      <Content/>
      <Todo/>
        <MainPage/>
        <AboutPage/>
    </div>
  );
}

export default App;
