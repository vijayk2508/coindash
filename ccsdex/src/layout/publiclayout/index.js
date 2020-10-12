/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function PublicLayout(props) {
    return (
        <div id="main-wrapper">
            {props.children}
        </div>
    )
}

export default PublicLayout
