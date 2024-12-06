import Invoice from "./forms/Invoice/Invoice";
import Refill_initial from "./forms/refill_initial/Refill_initial";
import Refill_methods from "./forms/refill_methods/Refill_methods";
import Refill_sber from "./forms/refill_sber/Refill_sber";
import Transfer from "./forms/transfer/Transfer";

const App = () => {
  return (
    <div className="container ">
      <Refill_initial />
      <Refill_methods />
      <Refill_sber />
      <Invoice />
      <Transfer />
    </div>
  );
};

export default App;
