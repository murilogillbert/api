import React, { useState } from 'react';

const CreateUser = () => {
  const [formData, setFormData] = useState({
    CPF: '',
    login: '',
    password: '',
    name: '',
    selo: '',
    email: '',
    role: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://infocap-back.onrender.com/user/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Não será possível adicionar 'Access-Control-Allow-Origin' no cliente
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // No modo no-cors, você não pode acessar a resposta
        console.log('User created successfully');
      } else {
        console.error('Failed to create user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Create New User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>CPF:</label>
          <input type="text" name="CPF" value={formData.CPF} onChange={handleChange} required />
        </div>
        <div>
          <label>Login:</label>
          <input type="text" name="login" value={formData.login} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Selo:</label>
          <input type="text" name="selo" value={formData.selo} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Role:</label>
          <input type="text" name="role" value={formData.role} onChange={handleChange} required />
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default CreateUser;
