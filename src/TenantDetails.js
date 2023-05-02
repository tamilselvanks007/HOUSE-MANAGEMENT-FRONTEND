import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { CardContent, CardMedia } from "@mui/material";

export function TenantDetails({ tenantList }) {
  const { id } = useParams();
  const tenant = tenantList[id]; //get tenant details by id
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
              <h2 className="house-number">
                House No:
                <span style={{ color: "blue", fontWeight: 600 }}>
                  {tenant.house}
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
                  <h3 className="tenant-aadhar">
                    Aadhar: <span>{tenant.aadhar}</span>
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
      </Card>
    </div>
  );
}
