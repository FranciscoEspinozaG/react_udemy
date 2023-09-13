export const DetallesUsers = ({id, name, username, city}) => {
    return (
    <>
    <div className="bloquequote text-end">
        <div className="container">
            <h2 className="mb-1" data-id={id}>{name}</h2>
            <sub className="blockquote-footer">
                {username} | {city}
            </sub>
        </div>
    </div>
    </>
    )
}