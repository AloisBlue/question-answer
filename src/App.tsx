import { FC } from "react";
import { ToastContainer } from "react-toastify";
import Index from "./routes/Index";


const App: FC = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Index />
    </div>
  );
}

export default App;
