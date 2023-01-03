
const Saludo = () => {

  const info = {
    nombre: 'Xavier Alexander Cangás Realpe',
    edad: '38 years old',
    img: '/img/xc2022.JPG'
  };

  return (
    <div className="infoxc">
      <img src={info.img} alt="Alexander Cangas" />
      <div className="aboutme">
        <h1>{info.nombre}</h1>
        <p>My age: {info.edad}
          Hi, I am a Computer Systems Engineer. Systems Assistant at Vehicle Dealership.
          <br></br>Functions performed:
          <ul>
            <li> Manage Fortinet Firewall</li>
            <li> Manage Eset Antivirus Consoles</li>
            <li>Manage Eset Antivirus Consoles</li>
            <li>Manage Cisco Phones</li>
            <li>Manage Telefonicas Elastix and Asterix</li>
            <li>Knowledge in Networks and Telecommunications</li>
            <li>Support in Teams within the Company, both Windows and Linux Servers.</li>
            <li>Training as Internal Auditor within the company.</li>
          </ul>
        Currently expanding knowledge as a Full Stack programmer in React and Springboot</p>
      </div>
    </div>
  );
}

export default Saludo