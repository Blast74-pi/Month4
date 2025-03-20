import Title from "../../components/title/Title";
import style from "./mainPage.module.css"
import About from "../../components/about/About";
import Description from "../../components/description/Description";


function MainPage() {
    return (
        <div>
            <Title text="Hello World"/>
            <About info={{title: "Some Title", body: "Some body"}}/>
            <Description post={{title: "Title", description: "description"}}/>
            <h2>{style.title}</h2>
            <p>{style.description}</p>
        </div>
    )
}

export default MainPage