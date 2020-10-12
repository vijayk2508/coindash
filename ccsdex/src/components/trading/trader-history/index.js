import React from 'react'

function TradeHistory() {
    return (
        <div className="table-responsive">
            <h3>Trading History</h3>
            <table className="table table-de mb-0">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Asset</th>
                        <th>Type</th>
                        <th>Amount ETH</th>
                        <th>Amount MUXE</th>
                        <th>Total Tokens</th>
                        <th>USD</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>06-01-20 06:51:51</td>
                        <td>MUXE</td>
                        <td style={{ color: '#a1ee72' }} className="success">Bought</td>
                        <td><i className="cc BTC" /> 0.58647</td>
                        <td><i className="cc BTC" /> 0.58647</td>
                        <td>11900</td>
                        <td>$ 6979.78</td>
                        <td>
                            <button className="btn btn-sm round btn-outline-success"> Completed</button>
                        </td>
                    </tr>
                    <tr>
                        <td>06-01-20 06:50:50</td>
                        <td>MUXE</td>
                        <td style={{ color: '#c472ee' }} className="danger">Sold</td>
                        <td><i className="cc BTC" /> 1.38647</td>
                        <td><i className="cc BTC" /> 0.38647</td>
                        <td>11905.09</td>
                        <td>$ 4600.97</td>
                        <td>
                            <button className="btn btn-sm round btn-outline-success"> Completed</button>
                        </td>
                    </tr>
                    <tr>
                        <td>06-01-20 06:49:51</td>
                        <td>MUXE</td>
                        <td style={{ color: 'orange' }} className="danger">Sold</td>
                        <td><i className="cc BTC" /> 0.45879</td>
                        <td><i className="cc BTC" /> 0.45879</td>
                        <td>11901.85</td>
                        <td>$ 5460.44</td>
                        <td>
                            <button className="btn btn-sm round btn-outline-success"> Completed</button>
                        </td>
                    </tr>
                    <tr>
                        <td>06-01-20 06:51:51</td>
                        <td>Eth</td>
                        <td style={{ color: '#57c9f3' }} className="success">Deposited</td>
                        <td><i className="cc BTC" /> 1.89877</td>
                        <td><i className="cc BTC" /> 1.89877</td>
                        <td>1.8</td>
                        <td>$ 164.6</td>
                        <td>
                            <button className="btn btn-sm round btn-outline-success"> Completed</button>
                        </td>
                    </tr>
                    <tr>
                        <td>06-01-20 06:51:51</td>
                        <td>MUXE</td>
                        <td style={{ color: 'orange' }} className="danger">Sold</td>
                        <td><i className="cc BTC" /> 0.45712</td>
                        <td><i className="cc BTC" /> 0.45712</td>
                        <td>11908.58</td>
                        <td>$ 5443.65</td>
                        <td>
                            <button className="btn btn-sm round btn-outline-success"> Completed</button>
                        </td>
                    </tr>
                    <tr>
                        <td>06-01-20 06:51:51</td>
                        <td>MUXE</td>
                        <td style={{ color: '#a1ee72' }} className="success">Bought</td>
                        <td><i className="cc BTC" /> 0.58647</td>
                        <td><i className="cc BTC" /> 0.58647</td>
                        <td>11900.12</td>
                        <td>$ 6979.78</td>
                        <td>
                            <button className="btn btn-sm round btn-outline-success"> Completed</button>
                        </td>
                    </tr>
                </tbody>
            </table></div>


    )
}

export default TradeHistory
