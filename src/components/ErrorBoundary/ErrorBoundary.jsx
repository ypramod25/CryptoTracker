import {ErrorBoundary} from 'react-error-boundary'
import React from 'react';

function CustomErrorBoundaryUI({error, resetErrorBoundary}) {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100"> 
            <div role='alert' className='alert alert-error'> 
                <p>Something went wrong</p>
                <div>{error?.message}</div>
                <button onClick={resetErrorBoundary}>Try Again</button>
            </div>
        </div>
    )
}

export default function CustomErrorBoundary ({children}) {
    return (
        <ErrorBoundary
            FallbackComponent={CustomErrorBoundaryUI}
            onReset={() => {
                // Reset the state of your app so the error doesn't happen again
                return window.location.reload();
            }}
        >
            {children}
        </ErrorBoundary>
    )   
}