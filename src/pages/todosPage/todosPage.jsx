import Todo from "../../components/todo/Todo";

function TodosPage() {

    const main = ["todo 1", "todo 2", "todo 3"]

    return (
        <div>
            <Todo main={main}/>
        </div>
    );
}

export default TodosPage;