/* eslint-disable array-callback-return */
/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import BreadCrumb from '../../common/BreadCrumb'
import { loadScript } from '../../helper/scriptLoader'
import Footer from './footer'
import Header from './header'
import Sidebar from './sidebar'
//import '../../assets/css/style.css'

var scriptLink = [
    "jquery.slimscroll.js",
    "sidebarmenu.js",
    "lib/sticky-kit-master/dist/sticky-kit.min.js",
    "lib/webticker/jquery.webticker.min.js",
    "lib/peitychart/jquery.peity.min.js",
    "custom.min.js",
  ]


function PrivateLayout(props) {
    useEffect(()=>{
        scriptLink.map((item) => {
            loadScript(`assets/js/${item}`)
         }) 
    },[])
    return (
        <div id="main-wrapper">
            <Header></Header>
            <Sidebar></Sidebar>
            <div className="page-wrapper">
                <BreadCrumb />
                <div className="container-fluid">
                    {props.children}
                </div>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default PrivateLayout

