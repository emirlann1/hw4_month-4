import React, { useState } from 'react';
import './RegistrationForm.css';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`ФИО: ${name}, Номер телефона: ${phone}, Email адрес: ${email}`);
    alert(`ФИО: ${name}, Номер телефона: ${phone}, Email адрес: ${email}`);
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <h2>Регистрация пользователя</h2>
      <div className="form-group">
        <label htmlFor="name">ФИО:</label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Номер телефона:</label>
        <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email адрес:</label>
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <button type="submit">Отправить</button>
    </form>
  );
}

export default RegistrationForm;