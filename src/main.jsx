import React from 'react'
import ReactDOM from 'react-dom/client'
import {QueryClient,QueryClientProvider,} from 'react-query';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ToastContainer } from 'react-toastify';
import App from './App.jsx'
import './index.css'
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(

     <QueryClientProvider client={queryClient}>
       <ToastContainer />
       <App />
     </QueryClientProvider>
 
    
)
