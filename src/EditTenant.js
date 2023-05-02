import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Card, TextField } from "@mui/material";
import { API } from "./global";
import { useHistory, useParams } from "react-router-dom";

export function EditTenant({ tenantList, setTenantList }) {
  const { id } = useParams();

  const [tenant, setTenant] = useState();

  useEffect(() => {
    fetch(`${API}/tenants/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((tns) => setTenant(tns))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {tenant ? <EditTenantForm tenant={tenant} /> : <h2>Loading...</h2>}
    </div>
  );
}

function EditTenantForm({ tenant }) {
  const [house, sethouse] = useState(tenant.house);
  const [name, setName] = useState(tenant.name);
  const [age, setAge] = useState(tenant.age);
  const [photo, setPhoto] = useState(tenant.photo);
  const [mobile, setMobile] = useState(tenant.mobile);
  const [aadhar, setAadhar] = useState(tenant.aadhar);
  const [occupation, setOccupation] = useState(tenant.occupation);
  const [location, setLocation] = useState(tenant.location);

  const history = useHistory();

  const editTenant = () => {
    const updatedTenant = {
      house: house,
      name: name,
      age: age,
      photo: photo,
      mobile: mobile,
      aadhar: aadhar,
      occupation: occupation,
      location: location,
    };
    fetch(`${API}/tenants/${tenant.id}`, {
      method: " PUT",
      body: JSON.stringify(updatedTenant),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => history.push("/tenants"));
  };

  return (
    <div className="edit-tenant-container">
      <Card className="edit-tenant-form">
        <TextField
          value={house}
          variant="outlined"
          label="House No"
          onChange={(event) => sethouse(event.target.value)}
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
          onClick={() => editTenant()}
        >
          Save
        </Button>
      </Card>
    </div>
  );
}
