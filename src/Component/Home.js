import React from 'react';
import { Route } from 'react-router-dom';
import { Pane, Card } from 'evergreen-ui';
import Nav from './Nav';
import Welcome from './Welcome';
import Story from './Story';
import Calculator from './Calculator';
import Footer from './Footer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from '../Reducers';

// Halaman utama ketika selesai login

export default () => {
    const store = createStore(
        allReducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    return (
        <React.Fragment>
            <Provider store={store}>
                <Pane justifyContent='center' marginTop={100}>
                    <Pane display='flex' justifyContent='center' padding={15}>
                        <Card display='flex' elevation={3} padding={10}>
                            <Nav />
                        </Card>
                    </Pane>
                    <Pane display='flex' padding={50} height='65vh' justifyContent='center'>
                        <Route path='/home' exact><Welcome /></Route>
                        <Route path='/home/story'><Story title='Story'/></Route>
                        <Route path='/home/calculator'><Calculator title='Calculator'/></Route>
                    </Pane>
                    <Pane display='flex' padding={50} justifyContent='center'>
                        <Footer />
                    </Pane>
                </Pane>
            </Provider>
        </React.Fragment >
    )
}