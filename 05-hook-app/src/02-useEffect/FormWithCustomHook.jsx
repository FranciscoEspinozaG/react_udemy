import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const {formState, onInputChange, formClean} = useForm({
        username: '',
        email: '',
        password: ''
    });

    const {username, email, password} = formState;

    return (
    <>
    <div className="container-fluid shadow p-4">
        <h1>Form With custom hook</h1>
        <div className="container-fluid m-0 p-0">
            <form className="form-group d-flex gap-2 m-0 p-0">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"    
                    name="username"
                    value={username}
                    onChange={onInputChange}
                />
                <input
                    type="email"
                    className="form-control"
                    placeholder="email"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                />
                <input
                    type="password"
                    className="form-control"
                    placeholder="Pass"
                    name="password"
                    value={password}
                    onChange={onInputChange}
                />
            </form>
        </div>
        <div className="col d-flex justify-content-end mt-3">
            <button className="btn btn-primary" onClick={formClean}>Borrar</button>
        </div>
    </div>
    </>
  )
}