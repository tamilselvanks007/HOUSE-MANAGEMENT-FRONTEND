import { useState } from "react";
import { useHistory } from "react-router-dom";
import { CardContent, CardMedia, IconButton } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoIcon from "@mui/icons-material/Info";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

export function Tenant({
  houseNo,
  name,
  age,
  photo,
  mobile,
  aadharNo,
  occupation,
  location,
  editButton,
  deleteButton,
  id,
}) {
  const [show, setShow] = useState(true);
  const history = useHistory();

  return (
    <Card className="tenant-container">
      <CardMedia
        sx={{ height: 140 }}
        className="user-pic"
        alt={name}
        image={photo}
      />

      <CardContent>
        <IconButton
          color="primary"
          onClick={() => setShow(!show)}
          aria-label="toggle details"
          sx={{ marginRight: 50 }}
        >
          {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>{" "}
        <IconButton
          color="primary"
          onClick={() => history.push(`/tenants/${id}`)}
          aria-label="toggle details"
          sx={{ marginLeft: -50, marginRight: 49 }}
        >
          <InfoIcon />
        </IconButton>{" "}
        {editButton} {deleteButton}
        {/* conditional rendering */}
        {show ? (
          <div>
            <div className="tenant-details">
              <h2 className="houseNo-number">
                houseNo No:{" "}
                <span style={{ color: "blue", fontWeight: 600 }}>{houseNo}</span>
              </h2>
              <Grid
                container 
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <h3 className="tenant-name">
                    Name: <span>{name}</span>
                  </h3>
                  <h3 className="tenant-age">
                    Age: <span>{age}</span>
                  </h3>
                  <h3 className="tenant-mobile">
                    Mobile: <span>{mobile}</span>
                  </h3>
                </Grid>
                <Grid item xs={6}>
                  <h3 className="tenant-aadharNo">
                    aadharNo: <span>{aadharNo}</span>
                  </h3>
                  <h3 className="tenant-occupation">
                    Occupation: <span>{occupation}</span>
                  </h3>
                  <h3 className="tenant-location">
                    Location: <span>{location}</span>
                  </h3>
                </Grid>
              </Grid>
            </div>
          </div>
        ) : (
          ""
        )}
      </CardContent>
    </Card>
  );
}
