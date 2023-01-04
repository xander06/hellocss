import React from 'react'

const Form = () => {
    return (
        <div className='form'>
            <h1>Ready to connect with me?</h1>
            <div class="form-group">
                <input type="text" class="form-control" name='nombre' id="nombre" placeholder="First name" />
                <input type="text" class="form-control" name='apellido' id="apellido" placeholder="Last name" />
            </div>
            <div class="form-group">
               <input type="email" class="form-control" name='email' id="email" placeholder="Email address" />
            </div>
            <div class="form-group">
                <textarea class="form-control" name='mensaje' id="mensaje" rows="3" placeholder='Enter your text here'></textarea>
            </div>
            <div class="form-group">
            <button class="btn-send" type="submit">Enviar</button>
            </div>
        </div>
    );
}

export default Form