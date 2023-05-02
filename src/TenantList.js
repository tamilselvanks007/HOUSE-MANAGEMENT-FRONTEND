import { Tenant } from "./Tenant";
import { useHistory } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";


export function TenantList() {
  const history = useHistory();
  const [tenantList, setTenantList] = useState([]);

  useEffect(() => {
    fetch("https://61f66eeb2e1d7e0017fd6da5.mockapi.io/movies", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((tns) => setTenantList(tns));
  }, []);

  return (
    <div className="tenant-list">
      {tenantList.map(
        (
          { house, name, age, photo, mobile, aadhar, occupation, location },
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
                  history.push(`/tenants/edit/${index}`);
                }}
              >
                <EditIcon />
              </IconButton>
            }
            deleteButton={
              <IconButton
                aria-label="delete"
                color="error"
                onClick={() => {
                  const copyTenantList = [...tenantList];
                  copyTenantList.splice(index, 1);
                  setTenantList(copyTenantList);
                }}
              >
                <DeleteIcon />
              </IconButton>
            }
            id={index}
          />
        )
      )}
    </div>
  );
}
