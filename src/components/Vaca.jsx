import PropTypes from 'prop-types'

const Vaca = ({ titulo, desc, imgv, pretern }) => {

   return (
      <>
         <div className="vaca-tittle">
            <h1 className="vaca-text" alt="Vaca Lola">{titulo}</h1>
            <img src={imgv} alt='Vaca Lola'></img>
            <p className="vaca-text"> {desc} </p>
            <p className="vaca-text">Tiene Ternerito?: {pretern} </p>
            <button>Mas Informacion</button>
         </div>
      </>
   );
}
export default Vaca

Vaca.propTypes = {
   titulo: PropTypes.string,
   imgv: PropTypes.string,
   desc: PropTypes.string,
   pretern: PropTypes.string,
}

Vaca.defaultProps = {
   titulo: 'sin titulo',
   imgv: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Toro_De_Lidia_En_Colombia.JPG',
   desc: 'sin describir',
   pretern: 'no ternero',
}