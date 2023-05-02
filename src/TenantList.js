import { Tenant } from "./Tenant";
import { useHistory } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { API } from "./global";
import { useEffect, useState } from "react";

export function TenantList() {
  const history = useHistory();
  const [tenantList, setTenantList] = useState([]);

  const getTenants = () => {
    fetch(`${API}/movies`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((tns) => setTenantList(tns));
  };

  useEffect(() => getTenants(), []);

  const deleteTenant = (id) => {
    fetch(`${API}/tenants/${id}`, {
      method: "DELETE",
    }).then(() => getTenants());
  };

  return (
    <div className="tenant-list">
      {tenantList.map(
        (
          { house, name, age, photo, mobile, aadhar, occupation, location, id },
          index
        ) => (
          <Tenant
            key={index}
            house={house}
            name={name}
            age={age}
            photo={photo}
            mobile={mobile}
            aadhar={aadhar}
            occupation={occupation}
            location={location}
            editButton={
              <IconButton
                aria-label="delete"
                color="secondary"
                onClick={() => {
                  history.push(`/tenants/edit/${id}`);
                }}
              >
                <EditIcon />
              </IconButton>
            }
            deleteButton={
              <IconButton
                aria-label="delete"
                color="error"
                onClick={() => deleteTenant(id)}
              >
                <DeleteIcon />
              </IconButton>
            }
            id={id}
          />
        )
      )}
    </div>
  );
}
