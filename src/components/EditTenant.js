import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { API } from "../global";
import { useHistory, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { tenantValidationSchema } from "./AddTenant";

export function EditTenant() {
  const { id } = useParams();

  const [tenant, setTenant] = useState();

  useEffect(() => {
    fetch(`${API}/tenants/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((tns) => setTenant(tns))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      {tenant ? (
        <EditTenantForm tenant={tenant} />
      ) : (
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 300,
          }}
        >
          Loading...
        </h2>
      )}
    </div>
  );
}

function EditTenantForm({ tenant }) {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      houseNo: tenant.houseNo,
      name: tenant.name,
      age: tenant.age,
      photo: tenant.photo,
      mobile: tenant.mobile,
      aadharNo: tenant.aadharNo,
      occupation: tenant.occupation,
      location: tenant.location,
    },

    validationSchema: tenantValidationSchema,
    onSubmit: (updatedTenant) => {
      editTenant(updatedTenant);
    },
  });

  const editTenant = (updatedTenant) => {
    fetch(`${API}/tenants/${tenant.id}`, {
      method: " PUT",
      body: JSON.stringify(updatedTenant),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => history.push("/tenants"));
  };

  return (
    <form onSubmit={formik.handleSubmit} className="edit-tenant-form">
      <TextField
        variant="outlined"
        label="House No"
        id="houseNo"
        name="houseNo"
        value={formik.values.houseNo}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        error={formik.touched.houseNo && formik.errors.houseNo}
        helperText={
          formik.touched.houseNo && formik.errors.houseNo
            ? formik.errors.houseNo
            : ""
        }
      />
      <TextField
        variant="outlined"
        label="Name"
        id="name"
        name="name"
        value={formik.values.name}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        error={formik.touched.name && formik.errors.name}
        helperText={
          formik.touched.name && formik.errors.name ? formik.errors.name : ""
        }
      />
      <TextField
        variant="outlined"
        label="Age"
        id="age"
        name="age"
        value={formik.values.age}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        error={formik.touched.age && formik.errors.age}
        helperText={
          formik.touched.age && formik.errors.age ? formik.errors.age : ""
        }
      />

      <TextField
        variant="outlined"
        label="Photo"
        id="photo"
        name="photo"
        value={formik.values.photo}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        error={formik.touched.photo && formik.errors.photo}
        helperText={
          formik.touched.photo && formik.errors.photo ? formik.errors.photo : ""
        }
      />

      <TextField
        variant="outlined"
        label="Mobile"
        id="mobile"
        name="mobile"
        value={formik.values.mobile}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        error={formik.touched.mobile && formik.errors.mobile}
        helperText={
          formik.touched.mobile && formik.errors.mobile
            ? formik.errors.mobile
            : ""
        }
      />

      <TextField
        variant="outlined"
        label="aadharNo"
        id="aadharNo"
        name="aadharNo"
        value={formik.values.aadharNo}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        error={formik.touched.aadharNo && formik.errors.aadharNo}
        helperText={
          formik.touched.aadharNo && formik.errors.aadharNo
            ? formik.errors.aadharNo
            : ""
        }
      />

      <TextField
        variant="outlined"
        label="Occupation"
        id="occupation"
        name="occupation"
        value={formik.values.occupation}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        error={formik.touched.occupation && formik.errors.occupation}
        helperText={
          formik.touched.occupation && formik.errors.occupation
            ? formik.errors.occupation
            : ""
        }
      />

      <TextField
        variant="outlined"
        label="Location"
        id="location"
        name="location"
        value={formik.values.location}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        error={formik.touched.location && formik.errors.location}
        helperText={
          formik.touched.location && formik.errors.location
            ? formik.errors.location
            : ""
        }
      />

      <Button color="success" type="submit" variant="contained">
        Save
      </Button>
    </form>
  );
}
