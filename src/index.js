import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='min-h-screen box-border grid grid-cols-[70%_30%]'>
    <div className='flex flex-col min-h-screen box-border bg-[#6c80d0] p-8'>
      <h1 className='text-white font-bold my-4'>Day Planning</h1>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </div>

  </div>

);

