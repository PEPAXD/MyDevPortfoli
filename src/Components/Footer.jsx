import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";


export default function Footer() {
  return (
    <MDBFooter
      bgColor="light"
      className="text-end text-lg-left text-white"
      style={{ boxShadow: "0px 0px 5px 0px #000000" }}
    >
      <div
        className="p-1"
        style={{ backgroundColor: "rgb(33,37,41)" }}
      >
        <a className="text-white text-decoration-none pe-3" href="#">
          &copy; {new Date().getFullYear()} Copyright - Developed By Mauro Pepa
        </a>
      </div>
    </MDBFooter>
  );
}
