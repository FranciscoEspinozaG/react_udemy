export const TodoList = ({todos = []}) => {
    return (
        <>
        <ul className="list-group">
            {
                todos.map(todo => (
                    <li key={todo.id} className="list-group-item d-flex align-items-center">
                        <p className="m-0 col text-center">
                            1
                        </p>
                        <button className="btn btn-danger rounded pill col-6">
                            Borrar
                        </button>
                    </li>
                ))
            }
        </ul>
        </>
    )
}