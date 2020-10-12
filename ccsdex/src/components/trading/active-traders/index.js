import React from 'react'

function ActiveTraders() {
  return (
    <div style={{ marginTop: 40 }} className="table-responsive">
      <h3>All Active Trades</h3>
      <table className="table table-de mb-0">
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Amount ETH</th>
            <th>Amount MUXE</th>
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
            <td>$ 6979.78</td>
            <td>
              <button className="btn btn-sm round btn-outline-success"> Buy Now</button>
            </td>
          </tr>
          <tr>
            <td>06-01-20 06:50:50</td>
            <td className="danger">Sell</td>
            <td><i className="cc BTC" /> 1.38647</td>
            <td><i className="cc BTC" /> 0.38647</td>
            <td>$ 4600.97</td>
            <td>
              <button className="btn btn-sm round btn-outline-danger"> Sell Now</button>
            </td>
          </tr>
          <tr>
            <td>06-01-20 06:49:51</td>
            <td className="success">Buy</td>
            <td><i className="cc BTC" /> 0.45879</td>
            <td><i className="cc BTC" /> 0.45879</td>
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
            <td>$ 10694.6</td>
            <td>
              <button className="btn btn-sm round btn-outline-success"> Buy Now</button>
            </td>
          </tr>
          <tr>
            <td>06-01-20 06:51:51</td>
            <td className="danger">Sell</td>
            <td><i className="cc BTC" /> 0.45712</td>
            <td><i className="cc BTC" /> 0.45712</td>
            <td>$ 5443.65</td>
            <td>
              <button className="btn btn-sm round btn-outline-danger"> Sell Now</button>
            </td>
          </tr>
          <tr>
            <td>06-01-20 06:51:51</td>
            <td className="success">Buy</td>
            <td><i className="cc BTC" /> 0.58647</td>
            <td><i className="cc BTC" /> 0.58647</td>
            <td>$ 6979.78</td>
            <td>
              <button className="btn btn-sm round btn-outline-success"> Buy Now</button>
            </td>
          </tr>
        </tbody>
      </table></div>



  )
}

export default ActiveTraders
