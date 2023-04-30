import { useState } from "react";
import { CardContent, CardMedia, IconButton } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

export function Tenant({
  number,
  name,
  age,
  photo,
  mobile,
  aadhar,
  occupation,
  location,
  editButton,
  deleteButton,
}) {
  const [show, setShow] = useState(true);

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
          sx={{ marginRight: 55 }}
        >
          {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>{" "}
        {editButton} {deleteButton}
        {/* conditional rendering */}
        {show ? (
          <div>
            <div className="tenant-details">
              <h2 className="house-number">
                House No:{" "}
                <span style={{ color: "blue", fontWeight: 600 }}>{number}</span>
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
                  <h3 className="tenant-aadhar">
                    Aadhar: <span>{aadhar}</span>
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
