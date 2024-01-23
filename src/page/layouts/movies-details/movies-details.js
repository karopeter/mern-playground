import React from 'react';
import Sidebar from '../../../navigation/sidebar/sidebar.component';
import { 
    PageSide,
    PageRight,
    PageHeader
} from './movies-detailsElement';
const MovieDetails = () => {

    return (
     <>
      <PageSide>
        <div className="col-3 p-0">
          <Sidebar />
        </div>
        <PageRight>
           <PageHeader>Movie Details</PageHeader>
        </PageRight>
      </PageSide>
     </>
    );
};

export default MovieDetails;