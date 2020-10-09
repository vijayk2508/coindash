import React from 'react'
import trading from '../../components/trading'
import Layout from '../../layout'

function Dashboard() {
    return (
        <Layout>
            <trading.TransactionToplist />
        </Layout>
    )
}

export default Dashboard
