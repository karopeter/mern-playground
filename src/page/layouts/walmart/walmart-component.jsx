import React, { useState, useContext } from "react";
import Header from "../../../navigation/header/header.component";
import FormInput from "../../../components/form-input/form-input.component";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../../components/custom-button/custom-button";
import { WalmartContext } from "../../../authentication/context/walmartContext";
import ariseBackground from "../../../assets/images/walmart.jpg";
import "./walmart-styles.css";

const Walmart = () => {
  const options = [
    { value: "Giftcard", label: "Giftcard" },
    { value: "Steamcard", label: "Steamcard" },
    { value: "Vanillacard", label: "Vanillacard" },
  ];
  const [selectedOptions, setSelectedOptions] = useState(null);
  const navigate = useNavigate();
  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: "20%",
      display: "flex",
      justifyContent: "center",
      border: "1px solid #fff",
      marginLeft: "26rem",
      borderRadius: "10px",
    }),
  };

  const { postData } = useContext(WalmartContext);

  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    goods: "",
    price: "", 
    cards: "",
    products: "",
  });

    const handleSelectChange = (selectedOption) => {
      setSelectedOptions(selectedOption);
    };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

   const resetForm = () => {
     setFormData({
       fullName: "",
       goods: "",
       price: "",
       cards: "",
       products: "",
     });
     setSelectedOptions(null);
   };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Convert the amount to a number
    const priceValue = parseFloat(formData.price);
     const fullNameValue = String(formData.fullName);

    const requestBody = {
      fullName: fullNameValue,
      goods: formData.goods,
      price: isNaN(priceValue) ? 0 : priceValue,
      cards: selectedOptions?.value || "", 
      products: formData.products,
    };
    try {
      await postData(requestBody);
      navigate('/products');
     resetForm();
    } catch (error) {
      setError(error.message);
      console.log("Walmart creation failed...", error);
    }
  };

  const styles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ariseBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    padding: "30px",
  };
  return (
    <>
      <Header />
      <div style={styles}>
        <div>
          <h2 className="text-center text-white">Process Your Order Now...</h2>
          <form onSubmit={handleFormSubmit}>
            {error ? <p className="text-center text-red-900">{error}</p> : null}
            <FormInput
              style={{
                width: "200px",
                color: "#fff",
                border: "1px solid #fff",
              }}
              name="fullName"
              type="text"
              placeholder="FullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            <FormInput
              style={{
                width: "200px",
                color: "#fff",
                border: "1px solid #fff",
              }}
              name="goods"
              type="text"
              placeholder="Your goods"
              value={formData.goods}
              onChange={handleChange}
            />
            <FormInput
              style={{
                width: "200px",
                color: "#fff",
                border: "1px solid #fff",
              }}
              name="price"
              type="Number"
              placeholder="Amount"
              value={formData.price}
              onChange={handleChange}
            />
            <Select
              options={options}
              value={selectedOptions}
              onChange={handleSelectChange}
              styles={customStyles}
            />
            <FormInput
              style={{
                width: "200px",
                color: "#fff",
                border: "1px solid #fff",
              }}
              name="products"
              type="text"
              placeholder="Product"
              value={formData.products}
              onChange={handleChange}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CustomButton
                style={{
                  backgroundColor: "white",
                  color: "#000",
                }}
              >
                Submit
              </CustomButton>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Walmart;
