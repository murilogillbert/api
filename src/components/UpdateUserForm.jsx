import React, { useState } from 'react';

const UpdateUserForm = () => {
  const [user, setUser] = useState({
    id: 1,
    CPF: '',
    login: '',
    name: '',
    selo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://infocap-back.onrender.com/user/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('User updated successfully:', data);
      } else {
        console.error('Failed to update user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input
            type="number"
            name="id"
            value={user.id}
            onChange={handleChange}
            readOnly
          />
        </div>
        <div>
          <label>CPF:</label>
          <input
            type="text"
            name="CPF"
            value={user.CPF}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Login:</label>
          <input
            type="text"
            name="login"
            value={user.login}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Selo:</label>
          <input
            type="text"
            name="selo"
            value={user.selo}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default UpdateUserForm;
