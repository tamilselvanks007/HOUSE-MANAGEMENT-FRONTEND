import { useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { WelcomeMsg } from "./WelcomeMsg";
import { NotFound } from "./NotFound";
import { TenantList } from "./TenantList";
import { INITIAL_TENANT_LIST } from "./INITIAL_TENANT_LIST";
import { AddTenant } from "./AddTenant";
import { EditTenant } from "./EditTenant";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";
import HouseIcon from "@mui/icons-material/House";

function App() {
  const [tenantList, setTenantList] = useState(INITIAL_TENANT_LIST);
  const history = useHistory();
  return (
    <div className="App">
      <AppBar position="static" color="inherit">
        <Toolbar>
          <HouseIcon
            sx={{ display: { xs: "none", md: "flex", color: "black" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 60,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            LET'S RENT
          </Typography>
          <div>
            <Button color="inherit" onClick={() => history.push("/")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => history.push("/tenants")}>
              Tenants
            </Button>
            <Button
              color="inherit"
              onClick={() => history.push("/tenants/add")}
            >
              Add Tenants
            </Button>
          </div>
        </Toolbar>
      </AppBar>

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
