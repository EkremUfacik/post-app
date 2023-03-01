import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store from "./app/store";

function App() {
  return (
    <div className="py-8 bg-slate-100 min-h-screen ">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
