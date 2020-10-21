import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import logo from '../../images/logos/logo.png';
import './Dashboard.css';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faConciergeBell, faPlus, faUserPlus, faShoppingCart, faCommentAlt } from '@fortawesome/free-solid-svg-icons';

// Material UI elements
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [admin, setAdmin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch(`https://shielded-refuge-74582.herokuapp.com/findAdmin/${loggedInUser.email}`)
      .then(res => res.json())
      .then(data => {
        setAdmin(data);
        // setRedirect(true)
      })
  }, [loggedInUser.email]);

  return (

    <div>
      <div className="d-flex justify-content-center"> <Link to="/">
        <img style={{ width: "140px" }} src={logo} alt="" /></Link>
      </div>


      {/* Admin Section */}

      { admin ? <admin className="d-flex justify-content-center">
        <div className="mt-3 p-2">
          <List className={`${classes.root}`}>
            <Link style={{ textDecoration: "none" }} to="/adminControl">
              <div className="btn d-flex justify-content-start btnDashboard">
                <FontAwesomeIcon className="mt-1" icon={faConciergeBell} />
                <p className="ml-2">Service List</p>
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/adminAddService">
              <div className="btn d-flex justify-content-start btnDashboard">
                <FontAwesomeIcon className="mt-1" icon={faPlus} />
                <p className="ml-2">Add Service</p>
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/adminMaker">
              <div className="btn d-flex justify-content-start btnDashboard">
                <FontAwesomeIcon className="mt-1" icon={faUserPlus} />
                <p className="ml-2">Make Admin</p>
              </div>
            </Link>
          </List>
        </div>
      </admin> :

        // User Section

        <user className="d-flex justify-content-center">
          <div className="mt-3 p-2">
            <List className={classes.root}>
              <Link style={{ textDecoration: "none" }} to="/orderService">
                <div className="btn d-flex justify-content-start btnDashboard">
                  <FontAwesomeIcon className="mt-1" icon={faShoppingCart} />
                  <p className="ml-2">Order</p>
                </div>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/userService">
                <div className="btn d-flex justify-content-start btnDashboard">
                  <FontAwesomeIcon className="mt-1" icon={faConciergeBell} />
                  <p className="ml-2">Service List</p>
                </div>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/userReview">
                <div className="btn d-flex justify-content-start btnDashboard">
                  <FontAwesomeIcon className="mt-1" icon={faCommentAlt} />
                  <p className="ml-2">Review</p>
                </div>
              </Link>
            </List>
          </div>
        </user>}

    </div>
  );
};

export default Dashboard;