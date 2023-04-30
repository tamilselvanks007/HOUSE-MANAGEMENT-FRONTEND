import { useState } from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import { WelcomeMsg } from "./WelcomeMsg";
import { NotFound } from "./NotFound";
import { TenantList } from "./TenantList";
import { INITIAL_TENANT_LIST } from "./INITIAL_TENANT_LIST";
import { AddTenant } from "./AddTenant";
import { EditTenant } from "./EditTenant";

function App() {
  const [tenantList, setTenantList] = useState(INITIAL_TENANT_LIST);

  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tenants">Tenants</Link>
        </li>
        <li>
          <Link to="/tenants/add">Add Tenants</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/">
          <WelcomeMsg />
        </Route>
        <Route path="/tenants/edit/:id">
          <EditTenant tenantList={tenantList} setTenantList={setTenantList} />
        </Route>
        <Route path="/tenants/add">
          <AddTenant tenantList={tenantList} setTenantList={setTenantList} />
        </Route>
        <Route path="/tenants">
          <TenantList tenantList={tenantList} setTenantList={setTenantList} />
        </Route>
        <Route path="**">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
