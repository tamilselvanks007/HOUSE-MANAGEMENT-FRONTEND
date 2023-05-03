import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { API } from "./global";
import { Button, CardContent, CardMedia } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export function TenantDetails() {
  const { id } = useParams(); // extracting parameter from the url
  const [tenant, setTenant] = useState({});

  useEffect(() => {
    fetch(`${API}/tenants/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((tns) => setTenant(tns))
      .catch((err) => console.log(err));
  }, [id]);

  const history = useHistory();
  return (
    <div className="tenant-info">
      <Card className="tenant-container">
        <CardMedia
          sx={{ height: 140 }}
          className="user-pic"
          alt={tenant.name}
          image={tenant.photo}
        />

        <CardContent>
          <div>
            <div className="tenant-details">
              <h2 className="houseNo-number">
                houseNo No:
                <span style={{ color: "blue", fontWeight: 600 }}>
                  {tenant.houseNo}
                </span>
              </h2>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <h3 className="tenant-name">
                    Name: <span>{tenant.name}</span>
                  </h3>
                  <h3 className="tenant-age">
                    Age: <span>{tenant.age}</span>
                  </h3>
                  <h3 className="tenant-mobile">
                    Mobile: <span>{tenant.mobile}</span>
                  </h3>
                </Grid>
                <Grid item xs={6}>
                  <h3 className="tenant-aadharNo">
                    aadharNo: <span>{tenant.aadharNo}</span>
                  </h3>
                  <h3 className="tenant-occupation">
                    Occupation: <span>{tenant.occupation}</span>
                  </h3>
                  <h3 className="tenant-location">
                    Location: <span>{tenant.location}</span>
                  </h3>
                </Grid>
              </Grid>
            </div>
          </div>
        </CardContent>
        <div className="back-btn">
          <Button
            variant="contained"
            onClick={() => history.goBack()}
            startIcon={<ArrowBackIosIcon />}
          >
            Back
          </Button>
        </div>
      </Card>
    </div>
  );
}
