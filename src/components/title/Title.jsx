

function Title({title, subTitle = ""}) {
    return (
        <>
            <h2 className="title">{title}</h2>
            <p>{subTitle.toUpperCase()}</p>
        </>
    )
}

export default Title;