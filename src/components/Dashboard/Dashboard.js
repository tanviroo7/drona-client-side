import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import { Button } from "@mui/material";

import MyOrders from "../MyOrders/MyOrders";
import ManageOrders from "../ManageOrders/ManageOrders";
import AddService from "../AddService/AddService";
import DashboardHome from "./DashboardHome/DashboardHome";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddReview from "./AddReview/AddReview";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import AdminRoute from "../Login/AdminRoute/AdminRoute";
import useAuth from "../../hooks/useAuth";
import ManageAllProducts from "./ManageProducts/ManageAllProducts";
import Payment from "./Payment/Payment";

const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { admin, logout } = useAuth();
  const history = useHistory();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const logoutHandler = () => {
    logout(history);
  };

  const drawer = (
    <div>
      <div className="flex ml-4 mb-3 mt-2">
        <img
          className="w-10 mr-5"
          src="https://i.ibb.co/BrBTpCw/218-2186380-logo-drone-logo-clipart-removebg-preview-2.png"
          alt="logo"
        />
        <span className=" text-4xl text-white">Drona</span>
      </div>
      <Divider sx={{ color: "yellow" }} />
      <Link to="/home" className="no-underline">
        <Button
          variant="contained"
          sx={{
            color: "white",
            marginBottom: "6px",
            marginTop: "10px",
            backgroundColor: "#8277fe",
          }}
        >
          Go to Home
        </Button>
      </Link>
      <br />

      {admin ? (
        <Box>
          <Link to={`${url}/makeAdmin`} className="no-underline">
            <Button
              variant="outlined"
              sx={{ color: "white", marginBottom: "6px" }}
            >
              Make Admin
            </Button>
          </Link>
          <Link to={`${url}/addProduct`} className="no-underline">
            <Button
              variant="outlined"
              sx={{ color: "white", marginBottom: "6px" }}
            >
              Add Product
            </Button>
          </Link>
          <Link to={`${url}/manageOrders`} className="no-underline">
            <Button
              variant="outlined"
              sx={{ color: "white", marginBottom: "6px" }}
            >
              Manage Orders
            </Button>
          </Link>
          <Link to={`${url}/manageProducts`} className="no-underline">
            <Button
              variant="outlined"
              sx={{ color: "white", marginBottom: "6px" }}
            >
              Manage Products
            </Button>
          </Link>
        </Box>
      ) : (
        <Box>
          <Link to={`${url}/myOrders`} className="no-underline">
            <Button
              variant="outlined"
              sx={{ color: "white", marginBottom: "6px" }}
            >
              My Orders
            </Button>
          </Link>
          <Link to={`${url}/reviews`} className="no-underline">
            <Button
              variant="outlined"
              sx={{ color: "white", marginBottom: "3px" }}
            >
              Add a Review
            </Button>
          </Link>
          <Link to={`${url}/payment`} className="no-underline">
            <Button
              variant="outlined"
              sx={{ color: "white", marginBottom: "3px" }}
            >
              Payment
            </Button>
          </Link>
        </Box>
      )}

      <Box onClick={logoutHandler}>
        <Button variant="outlined" sx={{ color: "red", marginBottom: "6px" }}>
          log out
        </Button>
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "black",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "black",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "black",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <Route path={`${path}/myOrders`}>
            <MyOrders></MyOrders>
          </Route>
          <AdminRoute path={`${path}/manageOrders`}>
            <ManageOrders></ManageOrders>
          </AdminRoute>
          <AdminRoute path={`${path}/manageProducts`}>
            <ManageAllProducts></ManageAllProducts>
          </AdminRoute>

          <AdminRoute path={`${path}/addProduct`}>
            <AddService></AddService>
          </AdminRoute>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <PrivateRoute path={`${path}/reviews`}>
            <AddReview />
          </PrivateRoute>
          <PrivateRoute path={`${path}/payment`}>
            <Payment></Payment>
          </PrivateRoute>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
