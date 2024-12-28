import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import QrCodeGenerator from './Generate/QrCodeGenerator.jsx';
import QrCodeScanner from './Scan/QrCodeScanner.jsx';
import Layout from './Layout.jsx';
import {ScanHistory} from './Scan/ScanHistory.jsx'
import {GenerateHistory} from './Generate/generateHistory.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "generate",
        element: <QrCodeGenerator />
      },
      {
        path: "scan",
        element: <QrCodeScanner />
      },
      {
        path: "generateHistory",
        element: <GenerateHistory />
      },
      {
        path: "scanHistory",
        element: <ScanHistory />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
