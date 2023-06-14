// the outlet defines where the content of the child routes should be rendered
/* useNavigation hook -> provided by react router -find out whether we're in an active 
transition, if we're loading data or if we have no active transition going on */
import { Outlet, useNavigation } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  // get a navigation object when call useNavigation
  const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {/* that useNavigation() has a couple of properties across the state property
        its either idle, loading or submitting */}
        {navigation.state === "loading" && <p>Loading...</p>}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
