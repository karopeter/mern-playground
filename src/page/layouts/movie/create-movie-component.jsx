import React, { useState, useContext } from 'react';
import Header from '../../../navigation/header/header.component';
import FormInput from '../../../components/form-input/form-input.component';
import CustomButton from '../../../components/custom-button/custom-button';
import { MovieContext } from '../../../authentication/context/movieContext';
import { useNavigate } from 'react-router-dom';
import './create-movie-styles.css';

const CreateMovie = () => {
  const { bookMovie } = useContext(MovieContext);
  const navigate = useNavigate();


  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    title: "",
    genre: "",
    booking: "",
    status: ""
  });

  const handleChange = (e) => {
    const { name, value }  = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      title: "",
      genre: "",
      booking: "",
      status: ""
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const requestBody = {
      fullName: formData.fullName,
      title: formData.title,
      genre: formData.genre,
      booking: formData.booking,
      status: formData.status
    };
    try {
      await bookMovie(requestBody);
      navigate("/movies");
      resetForm();
    } catch(error) {
      setError(error.message);
      console.log("Failed to create a movie...", error);
    }
  }
  const styles = {
    backgroundColor: '#d3d3d3',
    height: '100vh',
    padding:'30px'
  };

  const buttonStyles = {
    display: "flex",
    justifyContent: 'center',
  };

  const formStyles = {
    width: "200px",
    height: "30px",
    color: "#000",
    marginBottom: "10px",
    border: "1px solid #b0b0b0",
  };
    return (
      <>
        <Header />
        <div style={styles}>
          <div>
            <h2 className="text-center text-gray-700 text-2xl">Book a movie</h2>
            <form onSubmit={handleFormSubmit}>
              {error ? <p className="text-center text-red-900">{error}</p> : null}
              <FormInput 
                style={formStyles}
                name="fullName"
                type="text" 
                placeholder="FullName" 
                value={formData.fullName}
                onChange={handleChange}
              />
              <FormInput 
                style={formStyles} 
                name="title"
                type="text"
                placeholder="Title" 
                value={formData.title}
                onChange={handleChange}
                />
              <FormInput 
                style={formStyles} 
                name="genre"
                type="text"
                placeholder="Genre" 
                value={formData.genre}
                onChange={handleChange}
                />
              <FormInput 
                 style={formStyles}
                 name="booking"
                 type="text"
                 placeholder="Booking Number"
                 value={formData.booking}
                 onChange={handleChange}
                 />
              <FormInput 
                style={formStyles} 
                 name="status"
                 type="text"
                placeholder="Movie Status" 
                value={formData.status}
                onChange={handleChange}
              />
              <div style={buttonStyles}>
                <CustomButton
                  style={{
                    backgroundColor: "#3498db",
                    color: "#d3d3d3",
                    height: "30px",
                    fontSize: "16px",
                    padding: "3px",
                    marginTop: "18px",
                  }}
                >
                  Create a ticket
                </CustomButton>
              </div>
            </form>
          </div>
        </div>
      </>
    );
}

export default CreateMovie;