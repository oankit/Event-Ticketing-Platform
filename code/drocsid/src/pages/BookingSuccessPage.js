import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingSuccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/landing'); // Redirect back to landing page after 3 seconds
    }, 3000);
  }, [navigate]);

  return (
    <div>
      <h1>Booking Successful!</h1>
      <p>Your tickets have been booked. You will be redirected shortly...</p>
    </div>
  );
};

export default BookingSuccessPage;
