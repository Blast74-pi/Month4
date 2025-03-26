import {useForm} from "react-hook-form";
import {useState, useEffect} from "react";

const URL = 'http://localhost:8000/todos'

function FormPage() {
    const {register, handleSubmit, formState:{errors}} = useForm()
    const [value, setUserInput] = useState("")
    const [todos, setTodos] = useState([])
        
    function submit(value) {
        console.log(value)
    }

    const createTodo = async (e) => {
        const newTodo = {
            text: value,
            status: false
        }

        const response = await fetch(URL, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newTodo)
        })
        if (response.status === 201) {
            getTodo()
            setUserInput("")
        }
    }

    const getTodo = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setTodos(data)
    }

    const deleteTodo = async (id) => {
        const response = await fetch(URL + id, {
            method: 'DELETE',
        })
    }

    const updateStatus = async (id, status) => {
        const data = {
            status: status
        }
        
        const response = await fetch(URL + id, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        if (response.status === 200) {
            getTodo()
        }
    }

    useEffect(() => {
        getTodo()
    }, [])

    return (
        <>
            <form onSubmit={createTodo} onChange={submit}>
                <label>
                    <input
                        type="text"
                        placeholder="enter name"
                        className={errors.name && "error"}
                        onChange={(e) => setUserInput(e.target.value)}
                        value={value}
                        {...register("name", {required: true})}
                    />
                    {errors.name && <span>Обзательное поле</span>}
                </label>
                <label>
                    <input
                        type="text"
                        placeholder="enter username"
                        className={errors.username && "error"}
                        onChange={(e) => setUserInput(e.target.value)}
                        value={value}
                        {...register("username", {required: true})}
                    />
                    {errors.name && <span>Обзательное поле</span>}
                </label>
                <label>
                    <input
                        type="text"
                        placeholder="enter email"
                        className={errors.email && "error"}
                        onChange={(e) => setUserInput(e.target.value)}
                        value={value}
                        {...register("email", {required: true})}
                    />
                    {errors.name && <span>Обзательное поле</span>}
                </label>
                <button>create</button>
            </form>

            {
                todos.length > 0 ?
                todos.map(el => (
                    <div>
                        <input
                            type="checkbox"
                            checked={el.status}
                            onChange={(e) => updateStatus(el.id, e.target.checked)}
                        />
                        <span className={el.status && "active"}>{el.text}</span>
                        <button onClick={() => deleteTodo(el.id)}>удалить</button>
                    </div>
                ))
                    :
                    <div>список пуст</div>
            }
        </>
    );
}

export default FormPage;