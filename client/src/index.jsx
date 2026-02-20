import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import MyProvider from './Context'
import GlobalStyles from './style'

const WithContext = () => (
    <BrowserRouter>
        <MyProvider>
            <Router />
        </MyProvider>
    </BrowserRouter>
)

createRoot(document.getElementById('root')).render(
    <>
        <GlobalStyles />
        <WithContext />
    </>
)
