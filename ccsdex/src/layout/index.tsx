/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import BreadCrumb from '../common/BreadCrumb'
import Footer from './footer'
import Header from './header'
import Sidebar from './sidebar'
import '../assets/css/style.css'
import { loadScript } from '../helpers/scriptLoader'

interface IProps {
    children: any
}

{/* <script src="js/lib/jquery/jquery.min.js"></script>
<!-- Bootstrap tether Core JavaScript -->
<script src="js/lib/bootstrap/js/popper.min.js"></script>
<script src="js/lib/bootstrap/js/bootstrap.min.js"></script>
<!-- slimscrollbar scrollbar JavaScript -->
<script src="js/jquery.slimscroll.js"></script>
<!--Menu sidebar -->
<script src="js/sidebarmenu.js"></script>
<!--stickey kit -->
<script src="js/lib/sticky-kit-master/dist/sticky-kit.min.js"></script>
<!--Custom JavaScript -->
<script src="js/lib/webticker/jquery.webticker.min.js"></script>
<script src="js/lib/peitychart/jquery.peity.min.js"></script>
<!-- scripit init-->
<script src="js/custom.min.js"></script>
<script src="js/dashboard-1.js"></script> */}


var scriptLink = [
    // "js/lib/jquery/jquery.min.js",
    // "js/lib/bootstrap/js/popper.min.js",
    // "js/lib/bootstrap/js/bootstrap.min.js",
    // "js/jquery.slimscroll.js",
    // "js/sidebarmenu.js",
    // "js/lib/sticky-kit-master/dist/sticky-kit.min.js",
    // "js/lib/webticker/jquery.webticker.min.js",
    // "js/lib/peitychart/jquery.peity.min.js",
    // "js/custom.min.js",
    "js/dashboard-1.js"
]

scriptLink.map((item, idx) => {
    loadScript(`/assets/${item}`)
})



function Layout(props: IProps) {
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

export default Layout
