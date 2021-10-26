import React, { useEffect, useState } from 'react';

const initialForm = {
  method_payment: '',
  email: '',
  name: '',
  last_name: '',
  address: '',
  phone: '',
};

const Form = ({ handleSubmit }) => {
  const [form, setForm] = useState(initialForm);
  const [formErrors, setFormErrors] = useState(true);

  useEffect(() => {
    if (
      !form.method_payment ||
      !form.email ||
      !form.name ||
      !form.last_name ||
      !form.address ||
      !form.phone
    ) {
      setFormErrors(true);
    } else {
      setFormErrors(false);
    }
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, form)}>
      {/* <pre>{JSON.stringify(form, null, 2)}</pre> */}
      <h2>Método de pago en su domicilio</h2>

      <div className="form-half auto">
        <div className="form-group">
          <div className="radio-wrapper">
            <input
              id="cash"
              type="radio"
              name="method_payment"
              value="Efectivo"
              onChange={handleChange}
              required
            />
            <label htmlFor="cash">Efectivo</label>
          </div>
        </div>

        <div className="form-group">
          <div className="radio-wrapper">
            <input
              id="card"
              type="radio"
              name="method_payment"
              value="Tarjeta"
              onChange={handleChange}
              required
            />
            <label htmlFor="card">Tarjeta</label>
          </div>
        </div>
      </div>

      <h2>Información del cliente</h2>

      <div className="form-group">
        <div className="field-wrapper">
          <label htmlFor="">Correo</label>
          <input
            className="form-control"
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-half">
        <div className="form-group">
          <div className="field-wrapper">
            <label htmlFor="">Nombre</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <div className="field-wrapper">
            <label htmlFor="">Apellido</label>
            <input
              className="form-control"
              type="text"
              name="last_name"
              value={form.last_name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>

      <div className="form-group">
        <div className="field-wrapper">
          <label htmlFor="">Dirección</label>
          <input
            className="form-control"
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <div className="field-wrapper">
          <label htmlFor="">Celular</label>
          <input
            className="form-control"
            type="number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <button className="btn" type="submit" disabled={formErrors}>
        FINALIZAR COMPRA
      </button>
    </form>
  );
};

export default Form;
