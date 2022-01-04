import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import TodoListPage from "./modules/TodoListPage";
import configureStore from "./redux/store/configureStore";
import 'antd/dist/antd.css';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoListPage />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
