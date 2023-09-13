import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: '',
        email: ''
    })

    const [validForm, setValidForm] = useState(false);

    const {username, email} = formState;

    const onInputChange = ({target})=>{
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]:value
        })
    }

    useEffect(() => {
        // console.log('useEffect llamado');
    },[]);

    useEffect(() => {
        // console.log('formulario cambio');
    },[formState]);

    useEffect(() => {
        if(email.length > 2){
            setTimeout(() => {
                // console.log('cambio del mail después de medio segundo')
                setValidForm(true);
            }, 500);
        }else{
            setValidForm(false)
        }
        // console.log('email cambio');
    },[email]);
    

    return (
        <>
        <div className="container-fluid p-3 shadow">
            <h1>Simple Form</h1>
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
                    <button className="btn btn-primary" disabled={validForm ? false : true} >Enviar</button>
                </form>
            </div>
            {
                (username === 'Moouse') && <Message/>
            }
        </div>
        </>
    )
}