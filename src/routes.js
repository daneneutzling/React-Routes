import React from 'react';
import { Routes as ReactRoutes, Route} from 'react-router-dom';

const HomePage = () => <h1>First test about routes</h1>;

const Routes = () => (
    <ReactRoutes>
        <Route exact path='/' element={HomePage}/>
    </ReactRoutes>
);

export default Routes;
