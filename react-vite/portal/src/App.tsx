import { lazy, Suspense } from 'react'
import './App.css'
import { ErrorBoundary } from './components/common/ErrorBoundary'

const ContactApp = lazy(() => import('contact_app/ContactApp'))

function App() {
  return (
    <ErrorBoundary moduleName="Contact App">
      <Suspense fallback={<p>Loading Contact App...</p>}>
        <ContactApp />
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
