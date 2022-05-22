// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// // import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();


import ReactDOM from 'react-dom/client'
import { App } from './app';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store, user } from './store'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HalamanAbout } from './halaman_about';
import { HomePage } from './home';
import { LoginPage } from './login';
import { LandingPage } from './login/landingpage';
import { HalamanRegis } from './login/halaman_registrasi';
import { HalamanProfile } from './profile/halaman_profile';
import { TampilanProfile } from './HalamanProfile/profile';
import { UpdateProfile } from './HalamanProfile/update_profile';
import { Dashboard } from './HalamanAdmin/dashboard';
import { TampilanHome } from './frontend/home';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/aboutPage' element={<HalamanAbout />} />
                <Route path='/homePage' element={<HomePage />} />
                <Route path='/loginPage' element={<LoginPage />} />
                <Route path='/landing' element={<LandingPage />} />
                <Route path='/halamanregis' element={<HalamanRegis />} />
                <Route path='/halamanprofile' element={< HalamanProfile/>}/>
                
                {/* Profile */}
                <Route path='/tampilan-profile' element={<TampilanProfile/>}/>
                <Route path='/update-profile' element={<UpdateProfile/>}/>
                
                {/* Admin */}
                <Route path='/dashboard' element={<Dashboard/>}/>

                {/* Frontend */}
                <Route path='/home' element={<TampilanHome/>}/>



                
            </Routes>
        </BrowserRouter>
    </Provider>
)
