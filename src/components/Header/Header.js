import React from "react";
import "./Header.css";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="black" variant="dark">
      <Container>
        <Navbar.Brand href="/home">
          <div className="flex">
            <img
              className="w-10 mr-5"
              src="https://i.ibb.co/BrBTpCw/218-2186380-logo-drone-logo-clipart-removebg-preview-2.png"
              alt="logo"
            />
            <span className=" text-4xl">Drona</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="services">Drones</Nav.Link>
            <Nav.Link href="gallery">Gallery</Nav.Link>

            {user.email && (
              <Nav.Link href="dashboard">Dashboard</Nav.Link>
              // <NavDropdown title="Admin" id="collasible-nav-dropdown">
              //   <NavDropdown.Item href="/addService">
              //     Add Service
              //   </NavDropdown.Item>
              //   <NavDropdown.Item href="/manageOrders">
              //     Manage Orders
              //   </NavDropdown.Item>
              //   <NavDropdown.Item href="/myOrders">My Orders</NavDropdown.Item>
              // </NavDropdown>
            )}
          </Nav>
          {user.email && (
            <Nav className="text-white mr-2">
              {user.displayName || user.email}{" "}
            </Nav>
          )}
          {user.email ? (
            <Nav>
              <Nav.Link
                href="/home"
                onClick={logout}
                className="text-sm px-4 py-2 leading-none border rounded text-white border-black hover:border-transparent  hover:bg-indigo-600  text-gray-800"
              >
                LOG OUT
              </Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link
                className="text-sm px-4 py-2 leading-none border rounded text-white border-black hover:border-transparent  hover:bg-indigo-700 text-gray-800 mr-4"
                href="/login"
              >
                SIGN IN
              </Nav.Link>
              <Nav.Link
                className="text-sm px-4 py-2 leading-none border rounded text-white border-black hover:border-transparent  hover:bg-indigo-700  text-gray-800 mr-4"
                eventKey={2}
                href="/register"
              >
                REGISTER{" "}
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <div>
    //   {/* header */}
    //   <header id="home">
    //     {/* navbar */}
    //     <nav class="flex items-center justify-between flex-wrap bg-gradient-to-r from-green-400 to-blue-500 ... p-6">
    //       <div class="flex items-center flex-shrink-0 text-white mr-6">
    //         <span class="  tracking-tight text-2xl p-1 bg-green-600 hover:bg-green-600 cursor-pointer bg-opacity-75 rounded-lg font-extrabold text-white">
    //           <span className="text-black">Backroads</span>Travels
    //         </span>
    //       </div>

    //       <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    //         <div class="text-sm lg:flex-grow">
    //           <Link
    //             to="/home"
    //             class="block mt-4 font-semibold lg:inline-block lg:mt-0 text-green-200 hover:text-white mr-4"
    //           >
    //             Home
    //           </Link>
    //           <Link
    //             to="/services"
    //             class="block mt-4 font-semibold lg:inline-block lg:mt-0 text-green-200 hover:text-white mr-4"
    //           >
    //             Services
    //           </Link>
    //           <Link
    //             to="/gallery"
    //             class="block mt-4 font-semibold lg:inline-block lg:mt-0 text-green-200 hover:text-white mr-4"
    //           >
    //             Gallery
    //           </Link>
    //           {user.email && (
    //             <span>
    //               <Link
    //                 to="/addService"
    //                 class="block mt-4 font-semibold lg:inline-block lg:mt-0 text-green-200 hover:text-white mr-4"
    //               >
    //                 Add Service
    //               </Link>
    //               <Link
    //                 to="/manageOrders"
    //                 class="block mt-4 font-semibold lg:inline-block lg:mt-0 text-green-200 hover:text-white mr-4"
    //               >
    //                 Manage Orders
    //               </Link>
    //               <Link
    //                 to="/myOrders"
    //                 class="block mt-4 font-semibold lg:inline-block lg:mt-0 text-green-200 hover:text-white mr-4"
    //               >
    //                 My Orders
    //               </Link>
    //             </span>
    //           )}
    //         </div>
    //         {user.email && (
    //           <span className="text-black md:mr-8 md:mt-4 font-semibold">
    //             Hello, {user.displayName || user.email}{" "}
    //           </span>
    //         )}
    //         <div>
    //           {user.email ? (
    //             <Link
    //               to="/home"
    //               onClick={logOut}
    //               className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-green-500 hover:bg-white mt-4 lg:mt-0"
    //             >
    //               Log Out
    //             </Link>
    //           ) : (
    //             <div>
    //               <Link
    //                 to="/login"
    //                 className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-green-500 hover:bg-white mt-4 lg:mt-0 mr-2"
    //               >
    //                 Login
    //               </Link>
    //               <Link
    //                 to="/register"
    //                 className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-green-500 hover:bg-white mt-4 lg:mt-0"
    //               >
    //                 Sign Up
    //               </Link>
    //             </div>
    //           )}
    //         </div>
    //       </div>
    //     </nav>
    //   </header>
    //   {/* end of header */}
    // </div>
  );
};

export default Header;
