import Refill_initial from "./forms/refill_initial/Refill_initial";
import Refill_methods from "./forms/refill_methods/Refill_methods";
import Refill_sber from "./forms/refill_sber/Refill_sber";

const App = () => {
  return (
    <div className="container ">
      {/* <Refill_initial /> */}
      {/* <Refill_methods /> */}
      <Refill_sber />
    </div>
  );
};

export default App;
