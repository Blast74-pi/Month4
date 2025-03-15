import Title from "../../components/title/Title";
import About from "../../components/about/About";


function MainPage() {
    return (
        <div>
            <Title text="Hello World"/>
            <About info={{title: "Some Title", body: "Some body"}}/>
        </div>
    )
}

export default MainPage