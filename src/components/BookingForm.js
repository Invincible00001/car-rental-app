import React, { useState } from 'react';
import { FaCalendarAlt, FaCar } from 'react-icons/fa';

function BookingForm() {
  const [formData, setFormData] = useState({
    pickupDate: '',
    returnDate: '',
    car: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${formData.car}!`);
  };

  return (
    <div className="container my-5">
      <button className="text-center mb-4">Book a Car</button>
      <form className="bg-light p-4 shadow rounded" onSubmit={handleSubmit}>
      &nbsp;
        <div className="form-group">
          <label>
            <FaCalendarAlt className="mr-2" />
            Pickup Date:
          </label>
          <input
            type="date"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        &nbsp;
        <div className="form-group">
          <label>
            <FaCalendarAlt className="mr-2" />
            Return Date:
          </label>
          <input
            type="date"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        &nbsp;
        <div className="form-group">
          <label>
            <FaCar className="mr-2" />
            Select Car:
          </label>
          <select
            name="car"
            value={formData.car}
            onChange={handleChange}
            className="form-control"
          >
            <option value="">--Select--</option>
            <option value="Toyota Corolla">Toyota Corolla</option>
            <option value="Honda Civic">Honda Civic</option>
            <option value="Tesla Model 3">Tesla Model 3</option>
          </select>
        </div>
        <button type="submit" className="btn btn-success btn-block">
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
