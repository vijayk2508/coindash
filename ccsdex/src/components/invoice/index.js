import React from 'react'

function Invoice() {
    return (
        <div className="row">
            <div className="col-lg-12">
                <div id="invoice" className="effect2">
                    <div id="invoice-top">
                        <div className="invoice-logo-wrap">
                            <div className="invoice-logo" />
                            <div className="invoice-info">
                                <h2>john doe</h2>
                                <p> hello@CoinDash.com <br /> +8801629599859
            </p>
                            </div>
                        </div>
                        {/*End Info*/}
                        <div className="title invoice-title">
                            <h4>Invoice #1069</h4>
                            <p>Issued: February 15, 2018<br /> Payment Due: February 27, 2018
          </p>
                        </div>
                        {/*End Title*/}
                    </div>
                    {/*End InvoiceTop*/}
                    <div id="invoice-mid">
                        <div className="invoice-logo-wrap">
                            <div className="clientlogo" />
                            <div className="invoice-info">
                                <h2>Client Name</h2>
                                <p>mariam@gmail.com<br /> 555-555-5555
              <br />
                                </p></div>
                        </div>
                        <div id="project" className="invoice-title">
                            <h2>Project Description</h2>
                            <p>Proin cursus, dui non tincidunt elementum, tortor ex feugiat enim, at elementum enim quam vel purus. Curabitur semper malesuada urna ut suscipit.</p>
                        </div>
                    </div>
                    {/*End Invoice Mid*/}
                    <div id="invoice-bot">
                        <div id="invoice-table">
                            <div className="table-responsive">
                                <table className="table">
                                    <tbody><tr className="tabletitle">
                                        <td className="table-item">
                                            <h2>Item Description</h2>
                                        </td>
                                        <td className="Hours">
                                            <h2>Hours</h2>
                                        </td>
                                        <td className="Rate">
                                            <h2>Rate</h2>
                                        </td>
                                        <td className="subtotal">
                                            <h2>Sub-total</h2>
                                        </td>
                                    </tr>
                                        <tr className="service">
                                            <td className="tableitem">
                                                <p className="itemtext">Communication</p>
                                            </td>
                                            <td className="tableitem">
                                                <p className="itemtext">5</p>
                                            </td>
                                            <td className="tableitem">
                                                <p className="itemtext">$75</p>
                                            </td>
                                            <td className="tableitem">
                                                <p className="itemtext">$375.00</p>
                                            </td>
                                        </tr>
                                        <tr className="service">
                                            <td className="tableitem">
                                                <p className="itemtext">Asset Gathering</p>
                                            </td>
                                            <td className="tableitem">
                                                <p className="itemtext">3</p>
                                            </td>
                                            <td className="tableitem">
                                                <p className="itemtext">$75</p>
                                            </td>
                                            <td className="tableitem">
                                                <p className="itemtext">$225.00</p>
                                            </td>
                                        </tr>
                                        <tr className="service">
                                            <td className="tableitem">
                                                <p className="itemtext">Design Development</p>
                                            </td>
                                            <td className="tableitem">
                                                <p className="itemtext">5</p>
                                            </td>
                                            <td className="tableitem">
                                                <p className="itemtext">$75</p>
                                            </td>
                                            <td className="tableitem">
                                                <p className="itemtext">$375.00</p>
                                            </td>
                                        </tr>
                                        <tr className="service">
                                            <td className="tableitem">
                                                <p className="itemtext">Animation</p>
                                            </td>
                                            <td className="tableitem">
                                                <p className="itemtext">20</p>
                                            </td>
                                            <td className="tableitem">
                                                <p className="itemtext">$75</p>
                                            </td>
                                            <td className="tableitem">
                                                <p className="itemtext">$1,500.00</p>
                                            </td>
                                        </tr>
                                        <tr className="service">
                                            <td className="tableitem">
                                                <p className="itemtext">Animation Revisions</p>
                                            </td>
                                            <td className="tableitem">
                                                <p className="itemtext">10</p>
                                            </td>
                                            <td className="tableitem">
                                                <p className="itemtext">$75</p>
                                            </td>
                                            <td className="tableitem">
                                                <p className="itemtext">$750.00</p>
                                            </td>
                                        </tr>
                                        <tr className="service">
                                            <td className="tableitem">
                                                <p className="itemtext" />
                                            </td>
                                            <td className="tableitem">
                                                <p className="itemtext">HST</p>
                                            </td>
                                            <td className="tableitem">
                                                <p className="itemtext">13%</p>
                                            </td>
                                            <td className="tableitem">
                                                <p className="itemtext">$419.25</p>
                                            </td>
                                        </tr>
                                        <tr className="tabletitle">
                                            <td />
                                            <td />
                                            <td className="Rate">
                                                <h2>Total</h2>
                                            </td>
                                            <td className="payment">
                                                <h2>$3,644.25</h2>
                                            </td>
                                        </tr>
                                    </tbody></table>
                            </div>
                        </div>
                        {/*End Table*/}
                        <form action="#" method="post" target="_top" className="m-t-15">
                            <input type="image" src="images/paypal.png" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                        </form>
                        <div id="legalcopy">
                            <p className="legal"><strong>Thank you for your business!</strong> Payment is expected within 31 days; please process this invoice within that time. There will be a 5% interest charge per month on late invoices.
          </p>
                        </div>
                    </div>
                    {/*End InvoiceBot*/}
                </div>
                {/*End Invoice*/}
            </div>
        </div>

               
    )
}

export default Invoice
