import Invoice from "./forms/Invoice/Invoice";
import Refill_initial from "./forms/refill_initial/Refill_initial";
import Refill_methods from "./forms/refill_methods/Refill_methods";
import Refill_sber from "./forms/refill_sber/Refill_sber";
import Refill_sber_disabled from "./forms/refill_sber/Refill_sber_disabled";
import Transfer from "./forms/transfer/Transfer";
import Fail_modal from "./modals/fail_modal/Fail_modal";
import Success_modal from "./modals/success_modal/Success_modal";

const App = () => {
  return (
    <div className="container d-flex flex-column gap-5">
      <Refill_initial />
      <Refill_methods />
      <Refill_sber />
      <Refill_sber_disabled />
      <Invoice />
      <Transfer />
      <Success_modal cash={1000}/>
      <Fail_modal cash={1000}/>
    </div>
  );
};

export default App;
