import PropTypes from 'prop-types'  

const Footer = ({nombre,telf,email,usuariogit}) => {
    return (
    <>
    <div className="footer-tittle">
    <h1 className="footer-text">Creado por {nombre}</h1> 
    <div>
    <p className="footer-text">Mi contacto es:{telf}  </p>
    <p className="footer-text">Mi correo es: {email} </p>
    <p className="footer-text">Mi contacto es: {usuariogit} </p>
    </div>
    
    </div>
    </>
    );
    }
    export default Footer

Footer.propTypes ={
   nombre : PropTypes.string,
   telf : PropTypes.string,
   email : PropTypes.string,
   usuariogit : PropTypes.string,
}
Footer.defaultProps = {
    nombre:'No Existe el nombre',
}