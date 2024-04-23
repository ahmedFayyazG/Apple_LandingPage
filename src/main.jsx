import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://067f9d304914786aeb608d331b9e8df9@o4507107263184896.ingest.us.sentry.io/4507107266854912",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.metrics.metricsAggregatorIntegration(),
    Sentry.BrowserProfilingIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    
    }),

    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false
    }),
    
  ],
  
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
