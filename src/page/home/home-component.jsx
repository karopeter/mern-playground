import React from 'react';
import Header from '../../navigation/header/header.component';
import Directory from '../../components/directory/directory.component';
import './home-styles.css';


const HomePage = () => {
    return (
      <> 
       <Header />
       <div className="homepage">
         <Directory /> 
       </div>
      {/* <div className="web-page p-0">
         <div className="col-3 p-0">
             <Sidebar />
         </div>
         <div className="right-view">

         </div>
       </div>  */}
      </>
    );
}

export default HomePage;