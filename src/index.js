import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './pages/chase';
import 'tailwindcss/tailwind.css';
import './style.module.css'
import { Provider } from 'react-redux';
import { store } from './store';
// import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');


if (container) {
    const root = createRoot(container);

    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    );
} else {
    console.log("Failed to find root element");
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
