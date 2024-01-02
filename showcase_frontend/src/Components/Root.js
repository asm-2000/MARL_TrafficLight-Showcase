import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { Fragment } from "react";

function Root()
{
    return(
        <Fragment>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </Fragment>
    )
}
export default Root;