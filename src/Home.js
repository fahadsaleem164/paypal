import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            env: 'sandbox',
            currency : 'USD',
            amount : 15,
            client : {
                sandbox:    'ARiiehWfUs8Q3gbSlRk1_RKHBpH--SclAL49Js2X2PWuc_B-7ANkSa0Khomz9ey3kR0jSYkxyvUUWERM',
                production: 'YOUR-PRODUCTION-APP-ID',
            }
        
        }
    }

    onError(err){
        console.log(err)
    }

    onSuccess(suc){
        console.log(suc)
    }

    onCancel(cancel){
        console.log(cancel)

    }

    render() {

                return(
                        <> 
                            <h2>Welcome</h2>
                            <PaypalExpressBtn env={this.state.env} client={this.state.client} currency={this.state.currency} total={this.state.amount} onError={this.onError} onSuccess={this.onSuccess} onCancel={this.onCancel} />
                        </>
                )

    }
}

export default Home;