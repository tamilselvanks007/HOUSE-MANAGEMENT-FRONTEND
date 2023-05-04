import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

export function WelcomeMsg() {
  const history = useHistory();
  return (
    <div className="welcome-msg">
      <h1 variant="h2">HOUSE FOR RENT !</h1>

      <p style={{ textAlign: "center", paddingLeft: 100, paddingRight: 100 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
        <Button
          variant="contained"
          sx={{
            ":hover": {
              bgcolor: "orange",
              color: "black",
            },
            bgcolor: "orange",
            color: "black",
            marginBottom: 5,
          }}
          onClick={() => history.push("/tenants")}
        >
          EXPLORE ➤
        </Button>
      </div>
    </div>
  );
}
