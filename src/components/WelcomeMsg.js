import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

export function WelcomeMsg() {
  const history = useHistory();
  return (
    <div className="msg-container">
      <div className="welcome-msg">
        <h1 variant="h2" style={{ marginBottom: 10 }}>
          HOUSE FOR RENT !
        </h1>
      </div>
      <p style={{ textAlign: "center", paddingLeft: 100, paddingRight: 100 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          sx={{
            ":hover": {
              bgcolor: "orange",
              color: "black",
            },
            bgcolor: "orange",
            color: "black",
          }}
          onClick={() => history.push("/tenants")}
        >
          EXPLORE ➤
        </Button>
      </div>
    </div>
  );
}
