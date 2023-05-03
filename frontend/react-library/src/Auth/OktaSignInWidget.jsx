import {useEffect, useRef} from 'react';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import { oktaConfig } from '../lib/oktaConfig';

const OktaSignInWidget = ({ onSucces, onError}) => {

    const widgetRef = useRef();

    useEffect(() => {
        if(!widgetRef.current){
            return false;
        }
    
        const widget = new OktaSignIn(oktaConfig);
    
        widget.showSignInToGetTokens({
            el: widgetRef.current
        }).then(onSucces).catch(onError);
    
        return () => widget.remove();
    }, [onSucces, onError]);

    return (
        <div className='container mt-5 mb-5'>
            <div ref={widgetRef}></div>
        </div>
    )

}

export default OktaSignInWidget