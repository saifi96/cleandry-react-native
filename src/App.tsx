import React from "react";
import AppNavigations from "./components/navigation-components/AppNavigations";
import { Provider } from "react-redux";
import store from "./redux/Store";

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <AppNavigations />
      </Provider>
    )
  }
}


export default App;