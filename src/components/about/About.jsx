

function About({info}) {
    return (
        <div>
            <h2 className="info">{info.title}</h2>
            <p>{info.body}</p>
        </div>
    )
}

export default About;