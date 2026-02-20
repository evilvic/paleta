import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ConvexAuthProvider } from '@convex-dev/auth/react'
import { ConvexReactClient } from 'convex/react'
import Router from './Router'
import MyProvider from './Context'
import GlobalStyles from './style'

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL)

const WithContext = () => (
    <ConvexAuthProvider client={convex}>
        <BrowserRouter>
            <MyProvider>
                <Router />
            </MyProvider>
        </BrowserRouter>
    </ConvexAuthProvider>
)

createRoot(document.getElementById('root')).render(
    <>
        <GlobalStyles />
        <WithContext />
    </>
)
