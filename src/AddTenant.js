import { useState } from "react";
import Button from "@mui/material/Button";
import { Card, TextField } from "@mui/material";
import { useHistory } from "react-router-dom";
import { API } from "./global";

export function AddTenant() {
  const [house, sethouse] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [photo, setPhoto] = useState("");
  const [mobile, setMobile] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [occupation, setOccupation] = useState("");
  const [location, setLocation] = useState("");

  const history = useHistory();

  const addTenant = () => {
    const newTenant = {
      house: house,
      name: name,
      age: age,
      photo: photo,
      mobile: mobile,
      aadhar: aadhar,
      occupation: occupation,
      location: location,
    };
    fetch(`${API}/tenants/`, {
      method: "POST",
      body: JSON.stringify(newTenant),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => history.push("/tenants"));
  };

  return (
    <div className="add-tenant-container">
      <Card className="add-tenant-form">
        <TextField
          variant="outlined"
          label="House No"
          onChange={(event) => sethouse(event.target.value)}
        />
        <TextField
          variant="outlined"
          label="Name"
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          variant="outlined"
          label="Age"
          onChange={(event) => setAge(event.target.value)}
        />
        <TextField
          variant="outlined"
          label="Photo"
          onChange={(event) => setPhoto(event.target.value)}
        />
        <TextField
          variant="outlined"
          label="Mobile"
          onChange={(event) => setMobile(event.target.value)}
        />
        <TextField
          variant="outlined"
          label="Aadhar"
          onChange={(event) => setAadhar(event.target.value)}
        />
        <TextField
          variant="outlined"
          label="Occupation"
          onChange={(event) => setOccupation(event.target.value)}
        />
        <TextField
          variant="outlined"
          label="Location"
          onChange={(event) => setLocation(event.target.value)}
        />
        {/* copy of the movies list and new movie ti it */}
        <Button variant="contained" onClick={() => addTenant()}>
          Add Tenant
        </Button>
      </Card>
    </div>
  );
}
