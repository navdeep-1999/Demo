import React from 'react'
import Router from './src/router/Router'
import { Provider } from 'react-redux';
import { persistor, store } from './src/store'
import { PersistGate } from 'redux-persist/integration/react'
import { LogBox } from 'react-native';

export default function App() {

  LogBox.ignoreAllLogs(true)
  LogBox.ignoreLogs(['Remote debugger'])
  
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  )
}