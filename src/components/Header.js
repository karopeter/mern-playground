import React from "react";
import { NavData } from "../datas/data";

const Header = () => {
  return <div>Header</div>;
};

export default Header;

export const NavBar = () => {
  return (
    <div>
      <ul className="nav-link">
        {NavData.map((data) => {
          return (
            <li key={data.icon}>
              <a href={data.url}>{data.title}</a>
            </li>
          );
        })}
      </ul>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat deleniti
      debitis nostrum ab recusandae. Eum perferendis nesciunt a quam dolores
      quis praesentium nihil provident aliquam quidem, nemo, alias delectus
      eveniet.
      <h2>Torbita Registration Form</h2>
      <form>
        <input
          type="text"
          placeholder="Enter first name here"
          name="firstName"
        ></input>
        <input
          type="text"
          placeholder="Enter Password here"
          name="Password"
        ></input>
        <input
          type="text"
          placeholder="Enter your email here"
          name="Email"
        ></input>
      </form>
    </div>
  );
};
