import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';


class MyApp extends React.Component {
    render() {

        const onSuccess = () => {
            console.log("Paiement effectué !");
            this.props.history.push('/');
           }
        const onCancel = (data) => {
            console.log('Paiement non effectué !', data);
           }
        const onError = (err) => {
            console.log("Error!", err);
        }
        let env = 'sandbox';
        let currency = 'EUR';
        const client = {
            sandbox: 'AS4Pq9wYw6NExF4YJbhOnHzYqOo2HRs_Lvr56_JBnEMV4AwAJqgiOdcPYj2LfyWjMkN9NtLTfVNQ7vEq',
            production: 'D7J7SCT8ZHHP4',
        }
        return (
                <PaypalExpressBtn 
                    env={env} 
                    client={client} 
                    currency={currency} 
                    total={this.props.total} 
                    onError={onError}
                    onSuccess={onSuccess} 
                    onCancel={onCancel} />
        );
    }
}
export default withRouter(MyApp);