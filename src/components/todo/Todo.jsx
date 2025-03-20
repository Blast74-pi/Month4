function Todo({ main }) {
    return (
        <div>
            {Array.isArray(main) ? main.map((todo, index) => (
                <h3 key={index}>{todo}</h3>
            )) : <p>Нет данных</p>}
        </div>
    );
}
export default Todo;