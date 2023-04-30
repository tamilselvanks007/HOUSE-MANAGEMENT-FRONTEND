import { useState } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useHistory, useParams } from "react-router-dom";

export function EditTenant({ tenantList, setTenantList }) {
  const { id } = useParams();
  const tenant = tenantList[id];
  console.log(tenant);

  const [number, setNumber] = useState(tenant.number);
  const [name, setName] = useState(tenant.name);
  const [age, setAge] = useState(tenant.age);
  const [photo, setPhoto] = useState(tenant.photo);
  const [mobile, setMobile] = useState(tenant.mobile);
  const [aadhar, setAadhar] = useState(tenant.aadhar);
  const [occupation, setOccupation] = useState(tenant.occupation);
  const [location, setLocation] = useState(tenant.location);

  const history = useHistory();

  return (
    <div className="add-tenant-form">
      <TextField
        value={number}
        variant="outlined"
        label="House No"
        onChange={(event) => setNumber(event.target.value)}
      />
      <TextField
        value={name}
        variant="outlined"
        label="Name"
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        value={age}
        variant="outlined"
        label="Age"
        onChange={(event) => setAge(event.target.value)}
      />
      <TextField
        value={photo}
        variant="outlined"
        label="Photo"
        onChange={(event) => setPhoto(event.target.value)}
      />
      <TextField
        value={mobile}
        variant="outlined"
        label="Mobile"
        onChange={(event) => setMobile(event.target.value)}
      />
      <TextField
        value={aadhar}
        variant="outlined"
        label="Aadhar"
        onChange={(event) => setAadhar(event.target.value)}
      />
      <TextField
        value={occupation}
        variant="outlined"
        label="Occupation"
        onChange={(event) => setOccupation(event.target.value)}
      />
      <TextField
        value={location}
        variant="outlined"
        label="Location"
        onChange={(event) => setLocation(event.target.value)}
      />
      {/* copy of the movies list and new movie ti it */}
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          const updatedTenant = {
            number: number,
            name: name,
            age: age,
            photo: photo,
            mobile: mobile,
            aadhar: aadhar,
            occupation: occupation,
            location: location,
          };
          const copyTenantList = [...tenantList];
          copyTenantList[id] = updatedTenant;
          setTenantList(copyTenantList);
          history.push("/tenants");
        }}
      >
        Save
      </Button>
    </div>
  );
}
