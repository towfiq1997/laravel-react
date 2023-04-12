import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RouteCheck from './RouteCheck';
import Login from './Login';
import Signup from './Signup';
import Welcome from './Welcome';

export default function HelloReact() {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/welcome' element={<Welcome />} />
            <Route path='/' element={<RouteCheck />}>
                <Route path='/profile' element={<p>hjhkh</p>} />
                <Route path='/' element={<p>hjhkh</p>} />
                <Route path='/edit' element={<h1>home</h1>} />
            </Route>

        </Routes>
    );
}
const rootelm = document.getElementById('reactpush');
const root = createRoot(rootelm);

if (document.getElementById('reactpush')) {
    root.render(
        <BrowserRouter>
            <HelloReact />
        </BrowserRouter>
    );
}