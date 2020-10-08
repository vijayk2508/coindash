/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function BreadCrumb() {
    return (
        <div className="row page-titles">
            <div className="col-md-5 align-self-center">
                <h3 className="text-primary">Dashboard</h3> </div>
            <div className="col-md-7 align-self-center">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="javascript:void(0)">Home</a></li>
                    <li className="breadcrumb-item active">Dashboard</li>
                </ol>
            </div>
        </div>
    )
}

export default BreadCrumb
