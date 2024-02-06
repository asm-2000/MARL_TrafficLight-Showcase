import React from "react";
import styles from "./Navbar.module.css";
import home_icon from "../../Assets/traffic-light.png"
import { Fragment } from "react";
import { Link } from "react-router-dom";


function Navbar()
{
    return(
        <Fragment>
          <div className={styles.navbar_box1}>
            <div className={styles.navbar_box1_1}>
                  <figure >
                  <Link to="/" >
                    <img src = {home_icon} className={styles.home_logo} alt="Home" style={{width : "45px",height:"45px"}}/>
                    </Link>
                  </figure>
            </div>

            <div className={styles.navbar_box1_2}>

              <Link to="/Introduction" className={styles.nav_links}>Introduction</Link>
              <Link to="/Methodology" className={styles.nav_links}>Methodology</Link>
              <Link to="/Observation" className={styles.nav_links}>Observation</Link>
              <Link to="/Snaps" className={styles.nav_links}>Snapshots</Link>
              <Link to="/References" className={styles.nav_links}>References</Link>
              <Link to ='/Extras' className={styles.nav_links}>Extras</Link>

            </div>
          </div>
          <hr className={styles.nav_line}/>
        </Fragment>
        
    );
}
export default Navbar;