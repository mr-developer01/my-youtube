import { Provider } from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Watch from "./components/Watch";
import store from "./utils/store";

const appRoute = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "/watch",
        element: <Watch />
      },
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
      <div className="overflow-x-hidden">
        <Header />
        <RouterProvider router={appRoute}/>
      </div>
    </Provider>
  );
}

export default App;
