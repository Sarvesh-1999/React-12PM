import { useState } from "react";
import Cbc from "./allTopics/01_typesOfComponent/Cbc";
import Fbc from "./allTopics/01_typesOfComponent/Fbc";
import CounterInFbc from "./allTopics/02_states/CounterInFbc";
import StatesInCBC from "./allTopics/02_states/StatesInCBC";
import StatesInFbc from "./allTopics/02_states/StatesInFbc";
import Parent from "./allTopics/03_props/Parent";
import ParentA from "./allTopics/04_propsDrilling/ParentA";
import Context1 from "./allTopics/05_context/Context1";
import Parent1 from "./allTopics/06_childrenProps/Parent1";
import Context2 from "./allTopics/07_context2/Context2";
import ParentA1 from "./allTopics/07_context2/ParentA1";
import ControlledForms1 from "./allTopics/08_forms/ControlledForms1";
import ControlledForms2 from "./allTopics/08_forms/ControlledForms2";
import LifeCycleInCBC from "./allTopics/09_lifecycle/LifeCycleInCBC";
import Card from "./components/Card";
import LifeCycleInFBC from "./allTopics/09_lifecycle/LifeCycleInFBC";
import FetchUsers from "./allTopics/10_apiCall/FetchUsers";
import Products from "./allTopics/10_apiCall/Products";
import Posts from "./allTopics/11_customHook/Posts";
import Routing1 from "./allTopics/12_routing/Routing1";

function App() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <>
      {/* <Card/> */}
      {/* <Fbc/> */}
      {/* <Cbc/> */}
      {/* <StatesInFbc/> */}
      {/* <CounterInFbc/> */}
      {/* <StatesInCBC/> */}
      {/* <Parent/> */}
      {/* <ParentA/> */}
      {/* <Context1/> */}
      {/* <Parent1/> */}
      {/* <ParentA1 /> */}
      {/* <ControlledForms1/> */}
      {/* <ControlledForms2/> */}

      {/* <button onClick={handleToggle}>
        toggle
      </button> */}

      {/* {toggle ?  <LifeCycleInCBC /> : <h1>No Component</h1>} */}

      {/* <LifeCycleInFBC/> */}
      {/* <FetchUsers/> */}

      {/* <button onClick={handleToggle}>Toogle Btn</button>
      {toggle ? <Products /> : <h1>No Component</h1>} */}

      {/* <Posts/> */}

      <Routing1/>
    </>
  );
}

export default App;
