import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Input from './Input';
import Button from '../Button';
import TextArea from './TextArea';

function Form() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const sendEmail = (event) => {
    event.preventDefault();

    // Validación: Si los campos están vacíos, mostrar un mensaje de error y no enviar
    if (!formData.user_name.trim() || !formData.user_email.trim()) {
      setErrorMessage('Por favor, completa todos los campos.');
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }

    setIsLoading(true);

    emailjs.sendForm('', '', event.target, '')
      .then(() => {
        setFormData({ user_name: '', user_email: '' });
        setSuccessMessage('Mensaje Enviado');
        setErrorMessage('');
        setIsLoading(false);

        setTimeout(() => setSuccessMessage(''), 3000);
      })
      .catch((error) => {
        console.error("Error al enviar correo:", error);
        setIsLoading(false);
      });
  };

  return (
    <div className='form-container'>
      <form className='form container--column' onSubmit={sendEmail} autoComplete="off">
          <Input
            label={"Nombre*"}
            type={"text"}
            name={"user_name"}
            value={formData.user_name}
            onChange={handleChange}
          />
          <Input
            label={"E-mail*"}
            type={"email"}
            name={"user_email"}
            value={formData.user_email}
            onChange={handleChange}
          />
          <TextArea 
              label={"Mensaje"}
              type={"message"}
              name={"user_message"}
              value={formData.user_message}
              onChange={handleChange}
          />
          <div className=''>
            <Button content={isLoading ? "Enviando..." : "Enviar"} disabled={isLoading} />
          </div>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
}

export default Form;
