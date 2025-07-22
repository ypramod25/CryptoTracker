import React from "react";
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from "react-router-dom";
function MainLayout() {
    return (
        <>
            <Navbar/> {/*Navbar is the part of ui that dont change frequently */}
            <Outlet/>{/*The actual page which will be rendered along with navbar*/}
        </>
    )
}

export default MainLayout;
