import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCarSide, FaUserFriends } from 'react-icons/fa';

function CarList() {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/cars.json')
      .then((response) => response.json())
      .then((data) => setCars(data));
  }, []);

  const handleBookNow = (car) => {
    // Redirect to booking page with car details
    navigate('/booking', { state: { car } });
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Available Cars</h2>
      <div className="row">
        {cars.map((car) => (
          <div key={car.id} className="col-md-4 col-sm-6 mb-4">
            <div className="card shadow-sm">
              <img src={car.image} className="card-img-top" alt={car.name} />
              <div className="card-body">
                <h5 className="card-title">
                  <FaCarSide className="mr-2" />
                  {car.name}
                </h5>
                <p className="card-text">
                  <FaUserFriends className="mr-2" />
                  Seats: {car.seats}
                </p>
                <p className="card-text text-success font-weight-bold">
                  {car.price}
                </p>
                <button
                  className="btn btn-primary btn-block"
                  onClick={() => handleBookNow(car)}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarList;
