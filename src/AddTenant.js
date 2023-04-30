import { useState } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useHistory } from "react-router-dom";

export function AddTenant({ tenantList, setTenantList }) {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [photo, setPhoto] = useState("");
  const [mobile, setMobile] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [occupation, setOccupation] = useState("");
  const [location, setLocation] = useState("");

  const history = useHistory();
  return (
    <div className="add-tenant-form">
      <TextField
        variant="outlined"
        label="House No"
        onChange={(event) => setNumber(event.target.value)}
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
      <Button
        variant="contained"
        onClick={() => {
          const newTenant = {
            number: number,
            name: name,
            age: age,
            photo: photo,
            mobile: mobile,
            aadhar: aadhar,
            occupation: occupation,
            location: location,
          };
          setTenantList([...tenantList, newTenant]);
          history.push("/tenants");
        }}
      >
        Add Tenant
      </Button>
    </div>
  );
}
