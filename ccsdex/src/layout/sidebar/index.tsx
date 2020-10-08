import React from 'react'

function Sidebar() {
    return (
        <div className="left-sidebar">
            {/* Sidebar scroll*/}
            <div className="scroll-sidebar">
                {/* Sidebar navigation*/}
                <nav className="sidebar-nav">
                    <ul id="sidebar-menu">
                        <li className="nav-devider" />
                        <li className="nav-label">Home</li>
                        <li> <a className="has-arrow  " href="#" aria-expanded="false"><i className="fa fa-tachometer" /><span className="hide-menu">Dashboard <span className="label label-rouded label-primary pull-right">6</span></span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="index.php">Trading Dashboard</a></li>
                                <li><a href="trading-page.php">Asset Trading</a></li>
                                <li><a href="user-dashboard-page.php">User Dashboard </a></li>
                                <li><a href="trading-history-page.php">Trading History</a></li>
                                <li><a href="full-balance-page.php">Full Balance Page</a></li>
                                <li><a href="index3.php">Dashboard 4 </a></li>
                                <li><a href="index4.php">Dashboard 5 </a></li>
                                <li><a href="index5.php">Dashboard 6 </a></li>
                            </ul>
                        </li>
                        <li className="nav-label">Markets</li>
                        <li> <a className="has-arrow  " href="#" aria-expanded="false"><i className="fa fa-columns" /><span className="hide-menu">MUXE Pair</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="layout-blank.php">MUXE / ETH</a></li>
                                <li><a href="layout-boxed.php">MUXE / CcS</a></li>
                                <li><a href="layout-fix-header.php">MUXE / HOLE</a></li>
                                <li><a href="layout-fix-sidebar.php">MUXE / EVI</a></li>
                            </ul>
                        </li>
                        <li> <a className="has-arrow  " href="#" aria-expanded="false"><i className="fa fa-columns" /><span className="hide-menu">CcS Pair</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="layout-blank.php">CcS / ETH</a></li>
                                <li><a href="layout-boxed.php">CcS / MUXE</a></li>
                                <li><a href="layout-fix-header.php">CcS / HOLE</a></li>
                                <li><a href="layout-fix-sidebar.php">CcS / EVI</a></li>
                            </ul>
                        </li><li> <a className="has-arrow  " href="#" aria-expanded="false"><i className="fa fa-columns" /><span className="hide-menu">Eth Pair</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="layout-blank.php">ETH / MUXE</a></li>
                                <li><a href="layout-boxed.php">ETH / CcS</a></li>
                                <li><a href="layout-fix-header.php">ETH / HOLE</a></li>
                                <li><a href="layout-fix-sidebar.php">ETH / EVI</a></li>
                            </ul>
                        </li><li> <a className="has-arrow  " href="#" aria-expanded="false"><i className="fa fa-columns" /><span className="hide-menu">Additional Pairs</span></a>
                        </li><li className="nav-label">Apps &amp; Charts</li>
                        <li> <a className="has-arrow  " href="#" aria-expanded="false"><i className="fa fa-envelope" /><span className="hide-menu">Mailbox</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="email-compose.php">Compose</a></li>
                                <li><a href="email-read.php">Read</a></li>
                                <li><a href="email-inbox.php">Inbox</a></li>
                            </ul>
                        </li>
                        <li> <a className="has-arrow  " href="#" aria-expanded="false"><i className="fa fa-bar-chart" /><span className="hide-menu">Charts</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="chart-morris.php">Morris</a></li>
                                <li><a href="chart-chartjs.php">ChartJs</a></li>
                                <li><a href="chart-chartist.php">Chartist </a></li>
                                <li><a href="chart-amchart.php">AmChart</a></li>
                                <li><a href="chart-echart.php">EChart</a></li>
                                <li><a href="chart-sparkline.php">Sparkline</a></li>
                                <li><a href="chart-peity.php">Peity</a></li>
                            </ul>
                        </li>
                        <li className="nav-label">Features</li>
                        <li> <a className="has-arrow  " href="#" aria-expanded="false"><i className="fa fa-suitcase" /><span className="hide-menu">Ui Elements <span className="label label-rouded label-danger pull-right">12</span></span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="ui-alert.php">Alert</a></li>
                                <li><a href="ui-button.php">Button</a></li>
                                <li><a href="ui-dropdown.php">Dropdown</a></li>
                                <li><a href="ui-progressbar.php">Progressbar</a></li>
                                <li><a href="ui-tab.php">Tab</a></li>
                                <li><a href="ui-typography.php">Typography</a></li>
                                <li><a href="uc-calender.php">Calender</a></li>
                                <li><a href="uc-datamap.php">Datamap</a></li>
                                <li><a href="uc-nestedable.php">Nestedable</a></li>
                                <li><a href="uc-sweetalert.php">Sweetalert</a></li>
                                <li><a href="uc-toastr.php">Toastr</a></li>
                                <li><a href="uc-weather.php">Weather</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                {/* End Sidebar navigation */}
            </div>
            {/* End Sidebar scroll*/}
        </div>
    )
}

export default Sidebar
