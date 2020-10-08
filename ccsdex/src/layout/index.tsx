/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import BreadCrumb from '../common/BreadCrumb'
import Footer from './footer'
import Header from './header'
import Sidebar from './sidebar'

interface IProps {

}

function Layout(props : IProps) {
    return (
        <div id="main-wrapper">
            <Header></Header>
            <Sidebar></Sidebar>
            <div className="page-wrapper">
                <BreadCrumb />
                {/* End Bread crumb */}
                {/*?php include("trading/transaction-toplist.php"); ?*/}
                {/* Container fluid  */}
                <div className="container-fluid">
                    {/* Start Page Content */}
                    {/* /# row */}
                    {/* End PAge Content */}
                </div>
                {/* End Container fluid  */}
                <Footer></Footer>
            </div>
        </div>

    )
}

export default Layout
