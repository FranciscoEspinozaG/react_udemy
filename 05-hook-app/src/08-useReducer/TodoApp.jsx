import { useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "../components/TodoList"

const initialState = [
    {
        id: new Date().getTime(),
        descrpition: 'Pasar la aspiradora',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        descrpition: 'Lavar la loza',
        done: false,
    }
]

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState)

    return (
        <>
            <h1 className="text-center">TodoApp (0), <small>Pendientes: (0)</small></h1>
            <hr />
            <div className="container d-flex flex-wrap">
                <div className="col-12 col-md-5 p-2">
                    <TodoList todos={todos}/>
                </div>
                <div className="col-12 col-md-7 p-2">
                    <h4>Agregar todo</h4>
                    <hr />
                    <form className="form-group d-flex flex-column gap-2">
                        <input 
                            className="form-control rounded-pill"
                            placeholder="¿Qué hay qué hacer?"
                            type="text" />
                        <button
                            className="btn btn-primary rounded-pill"
                            type="submit">
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}