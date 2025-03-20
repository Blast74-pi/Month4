

function Description({post}) {
    return (
        <div>
            <h2 className="post">{post.title}</h2>
            <p>{post.description}</p>
        </div>
    );
}

export default Description;

