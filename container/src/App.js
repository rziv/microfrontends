import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Progress from './components/Progress'
import Header from './components/Header'



const generateClassName = createGenerateClassName(
    {
        productionPrefix: 'container'
    }
)

const MarketingAppLazy = lazy(() => import('./components/MarketingApp'))
const AuthAppLazy = lazy(() => import('./components/AuthApp'))

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false)
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header onSignOut={()=>setIsSignedIn(false)} isSignedIn={isSignedIn} />
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            <Route path='/auth' >
                                <AuthAppLazy onSignIn={() => setIsSignedIn(true)} />
                            </Route>
                            <Route path='/' component={MarketingAppLazy} />
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </BrowserRouter>
    )
}