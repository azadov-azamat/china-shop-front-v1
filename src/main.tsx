// import React from 'react'

import App from './App.tsx'
import './index.css'
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store.ts";
import smoothscroll from 'smoothscroll-polyfill';
import {ToastContainer} from "react-toastify";
import {ScrollToTopComponent} from "./components";

smoothscroll.polyfill();

const app = (
    <Provider store={store}>
            <BrowserRouter>
                <ToastContainer
                    position='top-right'
                    autoClose={3000}
                    // hideProgressBar
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable={false}
                    pauseOnHover={false}
                />
                <ScrollToTopComponent/>
                <App/>
            </BrowserRouter>
    </Provider>
);
const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(app)