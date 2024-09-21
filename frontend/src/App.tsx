import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ApproachOne from "./components/Approach_1";
import { Provider } from "react-redux";
import store from "./Redux/store";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ApproachOne />
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;
