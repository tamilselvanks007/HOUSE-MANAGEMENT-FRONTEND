import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useHistory } from "react-router-dom";
import { API } from "../global";
import { useFormik } from "formik";
import * as yup from "yup";

export const tenantValidationSchema = yup.object({
  houseNo: yup.number().required("Why don't you fill out this field?"),
  name: yup.string().required("Why don't you fill out this field?"),
  age: yup.number().required("Why don't you fill out this field?"),
  photo: yup.string().required("Why don't you fill out this field?"),
  mobile: yup.number().required("Why don't you fill out this field?"),
  aadharNo: yup.string().required("Why don't you fill out this field?"),
  occupation: yup.string().required("Why don't you fill out this field?"),
  location: yup.string().required("Why don't you fill out this field?"),
});

export function AddTenant() {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      houseNo: "",
      name: "",
      age: "",
      photo: "",
      mobile: "",
      aadharNo: "",
      occupation: "",
      location: "",
    },

    validationSchema: tenantValidationSchema,
    onSubmit: (newTenant) => {
      addTenant(newTenant);
    },
  });

  const addTenant = (newTenant) => {
    fetch(`${API}/tenants/`, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(newTenant),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => history.push("/tenants"));
  };

  return (
    <div className="add-container">
      <form onSubmit={formik.handleSubmit} className="add-tenant-form">
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
            formik.touched.photo && formik.errors.photo
              ? formik.errors.photo
              : ""
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

        <Button type="submit" variant="contained">
          Add Tenant
        </Button>
      </form>
    </div>
  );
}
