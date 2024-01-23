import React, { useState, useEffect } from 'react';
import Sidebar from '../../../navigation/sidebar/sidebar.component';
import FormInput from '../../../components/form-input/form-input.component';
import CustomButton from '../../../components/custom-button/custom-button';
import { 
     PageSide,
     PageRight,
     MovieText,
     PageTable,
     PageSetTable,
     PageTableHead,
     PageTableRow,
     PageHead,
     PageTableBody,
     PageTableData
} from './movieElement';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../../config';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const Movies = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [setCurrentPage] = useState(0);
  const [totalPages] = useState(0);
  
  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  }

  const handleRowClick = (id) => {
    navigate('/movie-details');
  };
  
  useEffect(() => {
    axios.get(`${BASE_URL}/movies`)
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  }, []);
  
  const styles = {
    display: 'flex',
    justifyContent: 'flex-end'
  };


    return (
      <>
        <PageSide>
          <div className="col-3 p-0">
            <Sidebar />
          </div>
          <PageRight>
            <div>
              <MovieText>Our Movie Section</MovieText>
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
                  placeholder="Search for movies"
                  required
                />
              </div>
              <Link to="/create-movie">
                <CustomButton
                  style={{
                    height: "30px",
                    padding: "5px",
                    margin: "20px",
                    fontSize: "10px",
                    backgroundColor: "teal",
                  }}
                >
                  Book a movie
                </CustomButton>
              </Link>
            </div>
            <PageTable>
              <PageSetTable>
                <PageTableHead>
                  <PageTableRow>
                    <PageHead scope="col">Full Name</PageHead>
                    <PageHead scope="col">Title</PageHead>
                    <PageHead scope="col">Genre</PageHead>
                    <PageHead scope="col">Booked</PageHead>
                    <PageHead scope="col">Status</PageHead>
                    <PageHead scope="col">Date & Time</PageHead>
                  </PageTableRow>
                </PageTableHead>
                <PageTableBody>
                  {data.map((item) => (
                    <PageTableRow
                      key={item._id}
                      onClick={() => handleRowClick(item.id)}
                    >
                      <PageTableData>{item.fullName}</PageTableData>
                      <PageTableData>{item.title}</PageTableData>
                      <PageTableData>{item.genre}</PageTableData>
                      <PageTableData>{item.booking}</PageTableData>
                      <PageTableData>{item.status}</PageTableData>
                      <PageTableData>
                        {new Date(item.createdAt).toLocaleString()}
                      </PageTableData>
                    </PageTableRow>
                  ))}
                </PageTableBody>
              </PageSetTable>
            </PageTable>

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
          </PageRight>
        </PageSide>
      </>
    );
}

export default Movies;