import Vaca from "../components/Vaca";

const ContactPage = () => {
    const vacainfo = {
        titulo: 'LA VACA LOCA',
        desc: 'LetraLa Vaca Lola, la Vaca Lolatiene cabeza y tiene colay hace ¡Muuu!',
        imgv: 'https://www.etapainfantil.com/wp-content/uploads/2018/11/vaca-lola-700x431.jpg',
        pretern: 'SI',
    };
    return (
        <>
            <Vaca {...vacainfo} />
        </>
    );
}
export default ContactPage