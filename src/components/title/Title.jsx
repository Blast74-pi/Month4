

function Title({title, subTitle = ""}) {
    return (
        <div>
            <h2 className="title">{title}</h2>
            <p>{subTitle.toUpperCase()}</p>
        </div>
    )
}

export default Title;