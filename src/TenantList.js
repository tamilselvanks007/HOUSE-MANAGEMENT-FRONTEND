import { Tenant } from "./Tenant";
import { useHistory } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export function TenantList({ tenantList, setTenantList }) {
  const history = useHistory();

  return (
    <div className="tenant-list">
      {tenantList.map(
        (
          { number, name, age, photo, mobile, aadhar, occupation, location },
          index
        ) => (
          <Tenant
            key={index}
            number={number}
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
          />
        )
      )}
    </div>
  );
}
