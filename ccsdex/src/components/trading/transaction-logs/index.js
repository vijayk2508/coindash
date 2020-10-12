import React from 'react'

function TransactionLogs() {
    return (
        <div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-title">
                            <h4>Trade History</h4>
                        </div>
                        <div className="card-body">
                            <div className="trade-history-table">
                                <div className="table-responsive">
                                    <table className="table table-xs">
                                        <thead>
                                            <tr>
                                                <th>Price($)</th>
                                                <th>Amount</th>
                                                <th>Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-success">11900.12</td>
                                                <td><i className="cc BTC" /> 0.215</td>
                                                <td>11:23:25</td>
                                            </tr>
                                            <tr>
                                                <td className="text-danger">11903.18</td>
                                                <td><i className="cc LTC" /> 1.545</td>
                                                <td>11:23:05</td>
                                            </tr>
                                            <tr>
                                                <td className="text-success">11899.56</td>
                                                <td><i className="cc BTC" /> 0.541</td>
                                                <td>11:22:50</td>
                                            </tr>
                                            <tr>
                                                <td className="danger">11910.52</td>
                                                <td><i className="cc BTC" /> 0.321</td>
                                                <td>11:22:15</td>
                                            </tr>
                                            <tr>
                                                <td className="text-danger">11901.15</td>
                                                <td><i className="cc BTC" /> 0.548</td>
                                                <td>11:21:25</td>
                                            </tr>
                                            <tr>
                                                <td className="text-success">11903.45</td>
                                                <td><i className="cc BTC" /> 0.587</td>
                                                <td>11:21:01</td>
                                            </tr>
                                            <tr>
                                                <td className="text-danger">11895.50</td>
                                                <td><i className="cc BTC" /> 5.125</td>
                                                <td>11:20:15</td>
                                            </tr>
                                            <tr>
                                                <td className="text-danger">11889.56</td>
                                                <td><i className="cc BTC" /> 0.894</td>
                                                <td>11:20:03</td>
                                            </tr>
                                            <tr>
                                                <td className="text-success">11885.69</td>
                                                <td><i className="cc BTC" /> 0.754</td>
                                                <td>11:19:55</td>
                                            </tr>
                                            <tr>
                                                <td className="text-danger">11891.12</td>
                                                <td><i className="cc BTC" /> 0.889</td>
                                                <td>11:19:15</td>
                                            </tr>
                                            <tr>
                                                <td className="text-danger">11889.88</td>
                                                <td><i className="cc BTC" /> 0.654</td>
                                                <td>11:18:18</td>
                                            </tr>
                                            <tr>
                                                <td className="text-success">11881.15</td>
                                                <td><i className="cc BTC" /> 1.254</td>
                                                <td>11:18:01</td>
                                            </tr>
                                            <tr>
                                                <td className="text-success">11875.75</td>
                                                <td><i className="cc BTC" /> 0.885</td>
                                                <td>11:17:25</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-title">
                            <h4>Active Order</h4></div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-de mb-0">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Type</th>
                                            <th>Amount BTC</th>
                                            <th>BTC Remaining</th>
                                            <th>Price</th>
                                            <th>USD</th>
                                            <th>Fee (%)</th>
                                            <th>Cancel</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>2018-01-31 06:51:51</td>
                                            <td className="success">Buy</td>
                                            <td><i className="cc BTC" /> 0.58647</td>
                                            <td><i className="cc BTC" /> 0.58647</td>
                                            <td>11900.12</td>
                                            <td>$ 6979.78</td>
                                            <td>0.2</td>
                                            <td>
                                                <button className="btn btn-sm round btn-outline-danger"> Cancel</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2018-01-31 06:50:50</td>
                                            <td className="danger">Sell</td>
                                            <td><i className="cc BTC" /> 1.38647</td>
                                            <td><i className="cc BTC" /> 0.38647</td>
                                            <td>11905.09</td>
                                            <td>$ 4600.97</td>
                                            <td>0.2</td>
                                            <td>
                                                <button className="btn btn-sm round btn-outline-danger"> Cancel</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2018-01-31 06:49:51</td>
                                            <td className="success">Buy</td>
                                            <td><i className="cc BTC" /> 0.45879</td>
                                            <td><i className="cc BTC" /> 0.45879</td>
                                            <td>11901.85</td>
                                            <td>$ 5460.44</td>
                                            <td>0.2</td>
                                            <td>
                                                <button className="btn btn-sm round btn-outline-danger"> Cancel</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2018-01-31 06:51:51</td>
                                            <td className="success">Buy</td>
                                            <td><i className="cc BTC" /> 0.89877</td>
                                            <td><i className="cc BTC" /> 0.89877</td>
                                            <td>11899.25</td>
                                            <td>$ 10694.6</td>
                                            <td>0.2</td>
                                            <td>
                                                <button className="btn btn-sm round btn-outline-danger"> Cancel</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2018-01-31 06:51:51</td>
                                            <td className="danger">Sell</td>
                                            <td><i className="cc BTC" /> 0.45712</td>
                                            <td><i className="cc BTC" /> 0.45712</td>
                                            <td>11908.58</td>
                                            <td>$ 5443.65</td>
                                            <td>0.2</td>
                                            <td>
                                                <button className="btn btn-sm round btn-outline-danger"> Cancel</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2018-01-31 06:51:51</td>
                                            <td className="success">Buy</td>
                                            <td><i className="cc BTC" /> 0.58647</td>
                                            <td><i className="cc BTC" /> 0.58647</td>
                                            <td>11900.12</td>
                                            <td>$ 6979.78</td>
                                            <td>0.2</td>
                                            <td>
                                                <button className="btn btn-sm round btn-outline-danger"> Cancel</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-xl-6">
                    <div className="card">
                        <div className="card-title">
                            <h4>Sell Order</h4>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-de mb-0">
                                    <thead>
                                        <tr>
                                            <th>Price per BTC</th>
                                            <th>BTC Ammount</th>
                                            <th>Total($)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>10583.4</td>
                                            <td><i className="cc BTC" /> 0.45000000</td>
                                            <td>$ 4762.53</td>
                                        </tr>
                                        <tr>
                                            <td>10583.5</td>
                                            <td><i className="cc BTC" /> 0.04000000</td>
                                            <td>$ 423.34</td>
                                        </tr>
                                        <tr>
                                            <td>10583.7</td>
                                            <td><i className="cc BTC" /> 0.25100000</td>
                                            <td>$ 2656.51</td>
                                        </tr>
                                        <tr>
                                            <td>10583.8</td>
                                            <td><i className="cc BTC" /> 0.35000000</td>
                                            <td>$ 3704.33</td>
                                        </tr>
                                        <tr>
                                            <td>10595.7</td>
                                            <td><i className="cc BTC" /> 0.30000000</td>
                                            <td>$ 3178.71</td>
                                        </tr>
                                        <tr>
                                            <td>10599.5</td>
                                            <td><i className="cc BTC" /> 0.02000000</td>
                                            <td>$ 211.99</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xl-6">
                    <div className="card">
                        <div className="card-title">
                            <h4>Buy Order</h4>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-de mb-0">
                                    <thead>
                                        <tr>
                                            <th>Price per BTC</th>
                                            <th>BTC Ammount</th>
                                            <th>Total($)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>10599.5</td>
                                            <td><i className="cc BTC" /> 0.02000000</td>
                                            <td>$ 211.99</td>
                                        </tr>
                                        <tr>
                                            <td>10583.5</td>
                                            <td><i className="cc BTC" /> 0.04000000</td>
                                            <td>$ 423.34</td>
                                        </tr>
                                        <tr>
                                            <td>10583.8</td>
                                            <td><i className="cc BTC" /> 0.35000000</td>
                                            <td>$ 3704.33</td>
                                        </tr>
                                        <tr>
                                            <td>10595.7</td>
                                            <td><i className="cc BTC" /> 0.30000000</td>
                                            <td>$ 3178.71</td>
                                        </tr>
                                        <tr>
                                            <td>10583.7</td>
                                            <td><i className="cc BTC" /> 0.25100000</td>
                                            <td>$ 2656.51</td>
                                        </tr>
                                        <tr>
                                            <td>10595.8</td>
                                            <td><i className="cc BTC" /> 0.29697926</td>
                                            <td>$ 3146.74</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransactionLogs
