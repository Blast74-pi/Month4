import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

const URL = 'http://localhost:8000/todos';

function FormPage() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [users, setUsers] = useState([]);
    const [modalMessage, setModalMessage] = useState("");

    const getUsers = async () => {
        try {
            const response = await fetch(URL);
            if (!response.ok) throw new Error("Failed to fetch users");
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error(error);
            alert("Failed to fetch users. Please try again later.");
        }
    };

    const createUser = async (data) => {
        try {
            const response = await fetch(URL, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            if (response.status === 201) {
                getUsers();
                reset();
                setModalMessage("Пользователь успешно создан");
            } else {
                throw new Error("Failed to create user");
            }
        } catch (error) {
            console.error(error);
            alert("Failed to create user. Please try again later.");
        }
    };

    const deleteUser = async (id) => {
        try {
            const response = await fetch(`${URL}/${id}`, { method: 'DELETE' });
            if (response.ok) {
                getUsers();
                setModalMessage("Пользователь удален");
            } else {
                throw new Error("Failed to delete user");
            }
        } catch (error) {
            console.error(error);
            alert("Failed to delete user. Please try again later.");
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            {modalMessage && (
                <div className="modal">
                    <p>{modalMessage}</p>
                    <button onClick={() => setModalMessage("")}>OK</button>
                </div>
            )}

            <form onSubmit={handleSubmit(createUser)}>
                <label>
                    <input
                        type="text"
                        placeholder="enter name"
                        {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <span>{errors.name.message}</span>}
                </label>
                <label>
                    <input
                        type="text"
                        placeholder="enter username"
                        {...register("username", { required: "Username is required" })}
                    />
                    {errors.username && <span>{errors.username.message}</span>}
                </label>
                <label>
                    <input
                        type="email"
                        placeholder="enter email"
                        {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                </label>
                <button type="submit">Create</button>
            </form>


            {users.length > 0 ? (
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <div>список пуст</div>
            )}
        </>
    );
}

export default FormPage;