import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Student from './Student';
import Input from './Input'

class App extends React.Component {
  state = {
    students: []
  }

  render() {
    return (
      <Provider store={store}>
        <Student/>
        <Input/>
      </Provider>
    )
  }

}

export default App;
