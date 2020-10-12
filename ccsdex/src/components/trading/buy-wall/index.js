import React from 'react'

function BuyWall() {
    return (
        <div style={{ marginTop: 40 }} className="table-responsive">
            <h3>Buy MUXE Tokens</h3>
            <table className="table table-de mb-0">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Amount BTC</th>
                        <th>BTC Remaining</th>
                        <th>Price</th>
                        <th>USD</th>
                        <th>Cancel</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>06-01-20 06:51:51</td>
                        <td className="success">Buy</td>
                        <td><i className="cc BTC" /> 0.58647</td>
                        <td><i className="cc BTC" /> 0.58647</td>
                        <td>11900.12</td>
                        <td>$ 6979.78</td>
                        <td>
                            <button className="btn btn-sm round btn-outline-success"> Buy Now</button>
                        </td>
                    </tr>
                    <tr>
                        <td>06-01-20 06:50:50</td>
                        <td className="danger">Buy</td>
                        <td><i className="cc BTC" /> 1.38647</td>
                        <td><i className="cc BTC" /> 0.38647</td>
                        <td>11905.09</td>
                        <td>$ 4600.97</td>
                        <td>
                            <button className="btn btn-sm round btn-outline-danger"> Cancel</button>
                        </td>
                    </tr>
                    <tr>
                        <td>06-01-20 06:49:51</td>
                        <td className="success">Buy</td>
                        <td><i className="cc BTC" /> 0.45879</td>
                        <td><i className="cc BTC" /> 0.45879</td>
                        <td>11901.85</td>
                        <td>$ 5460.44</td>
                        <td>
                            <button className="btn btn-sm round btn-outline-success"> Buy Now</button>
                        </td>
                    </tr>
                    <tr>
                        <td>06-01-20 06:51:51</td>
                        <td className="success">Buy</td>
                        <td><i className="cc BTC" /> 0.89877</td>
                        <td><i className="cc BTC" /> 0.89877</td>
                        <td>11899.25</td>
                        <td>$ 10694.6</td>
                        <td>
                            <button className="btn btn-sm round btn-outline-danger"> Cancel</button>
                        </td>
                    </tr>
                    <tr>
                        <td>06-01-20 06:51:51</td>
                        <td className="danger">Buy</td>
                        <td><i className="cc BTC" /> 0.45712</td>
                        <td><i className="cc BTC" /> 0.45712</td>
                        <td>11908.58</td>
                        <td>$ 5443.65</td>
                        <td>
                            <button className="btn btn-sm round btn-outline-success"> Buy Now</button>
                        </td>
                    </tr>
                    <tr>
                        <td>06-01-20 06:51:51</td>
                        <td className="success">Buy</td>
                        <td><i className="cc BTC" /> 0.58647</td>
                        <td><i className="cc BTC" /> 0.58647</td>
                        <td>11900.12</td>
                        <td>$ 6979.78</td>
                        <td>
                            <button className="btn btn-sm round btn-outline-success"> Buy Now</button>
                        </td>
                    </tr>
                </tbody>
            </table></div>

    )
}

export default BuyWall
