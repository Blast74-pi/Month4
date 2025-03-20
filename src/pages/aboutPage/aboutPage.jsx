import Description from "../../components/description/Description";
import style from "./aboutPage.module.css"

function AboutPage() {
    return (
        <div>
            <Description post={{title: "Title 2", description: "description 2"}}/>
            <h2>{style.title}</h2>
            <p>{style.description}</p>
        </div>
    );
}

export default AboutPage;