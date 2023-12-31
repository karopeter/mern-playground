import React, { useState, useEffect} from 'react';
import Sidebar from '../../../navigation/sidebar/sidebar.component';
import FormInput from '../../../components/form-input/form-input.component';
import { Link } from 'react-router-dom';
import CustomButton from '../../../components/custom-button/custom-button';
import ReactPaginate from 'react-paginate';
import { BASE_URL } from '../../../config';
import './products-styles.css';
import  axios  from 'axios';


const Products = () => { 
 const [data, setData] = useState([]);
 const [setCurrentPage] = useState(0); //Initial page
 const [totalPages] = useState(0);

 const handlePageClick = (selectedPage) => {
  setCurrentPage(selectedPage.selected);
 }
  useEffect(() => {
    // Fetch data from the API endpoint using Axios
    axios.get(`${BASE_URL}/walmart`)
      .then((response) => {
        // Assuming the data is in the 'data' property of the response
        setData(response.data); // updating the state with recieved data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const styles = {
      display: 'flex',
      justifyContent: 'flex-end'
  }
  
    return (
      <>
        <div className="web-page p-0">
          <div className="col-3 p-0">
            <Sidebar />
          </div>
          <div className="right-view">
            <div>
              <h3 className="text-center text-dark mt-5 text-lg">
                Our Products
              </h3>
            </div>
            <div className="flex justify-evenly">
              <div>
                <FormInput
                  name="search"
                  type="search"
                  style={{
                    border: "1px solid red",
                    height: "30px",
                    textAlign: "left",
                    padding: "8px",
                  }}
                  placeholder="Search for card"
                  required
                />
              </div>
              <Link to="/walmart">
                <CustomButton
                  style={{
                    height: "30px",
                    padding: "5px",
                    margin: "20px",
                    fontSize: "10px",
                    backgroundColor: "teal",
                  }}
                >
                  Create a new Product
                </CustomButton>
              </Link>
            </div>
            <div id="tableDiv">
              <table className="table">
                <thead>
                  <tr className="head">
                    {/* <th scope="col">S/N</th> */}
                    <th scope="col">Full Name</th>
                    <th scope="col">Goods</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Cards</th>
                    <th scope="col">Products</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item._id}>
                      <td>{item.fullName}</td>
                      <td>{item.goods}</td>
                      <td>{item.price}</td>
                      <td>{item.cards}</td>
                      <td>{item.products}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={styles}>
              <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                pageCount={totalPages} // Total number of pages
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                activeClassName={"active"}
              />
            </div>
            
          </div>
        </div>
      </>
    );
}

export default Products;