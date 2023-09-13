import PropTypes from 'prop-types';

export const FirstApp = ({title, subTitle, name}) => {

    return (
        <>
            <h1>{title}</h1>
            <sub>{`El subtitle es: ${subTitle}`}</sub>
            <p>{name}</p>
        </>
    )
}

FirstApp.propTypes={
    name: PropTypes.string,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    name: 'Francisco',
    title: 'Título',
    subTitle:'subtitulo'
}