import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ReactDI from 'react-di';
import helloWorldStore from './store';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
  en: {
    helloworld: 'Hello World!'
  },
  fr: {
    helloworld: 'Bonjour Monde!'
  }
})
let resolver = new ReactDI({
  strings
})

resolver.inject(React)

let store = createStore(helloWorldStore)

store.dispatch({ type: 'init' })

function getGreeting(stringName, di){
  return di('strings')[stringName]
}

const mapStateToProps = (state,ownProps) => {
  return {
    hello: getGreeting(state.stringName,ownProps.di)
  }
}

const ConnectedApp = connect(
  mapStateToProps
  )(App);

ReactDOM.render(
  <Provider store={store}>
  <ConnectedApp strings={strings}/>
  </Provider>,
  document.getElementById('root')
);