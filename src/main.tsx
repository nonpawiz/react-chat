import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Helmet, HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HelmetProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

        <App>
          <Helmet />
        </App>

      </PersistGate>
    </Provider>
  </HelmetProvider>
)
