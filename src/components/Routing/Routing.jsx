import {Route, Routes} from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import MainLayout from '../../pages/Layout';
import {Facebook} from 'react-content-loader'
import PageLoader from '../PageLoader/PageLoader';
import { ErrorBoundary } from 'react-error-boundary';
import CustomErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const Home = lazy(() => import('../../pages/Home'));
const CoinDetailsPage = lazy(() => import('../../pages/CoinDetailsPage'));

function Routing() {
    return (
        <CustomErrorBoundary>
            <Routes>
                <Route path='/' element={<MainLayout/>}>
                    <Route index element={
                        <Suspense fallback={<PageLoader/>}>
                            <Home/>
                        </Suspense>
                    }/>
                    <Route path='/details/:coinId' element={
                        <Suspense fallback={<PageLoader/>}>
                            <CoinDetailsPage/>
                        </Suspense>
                    }/>
                </Route>
            </Routes>
        </CustomErrorBoundary>
        
    )
}

export default Routing;

