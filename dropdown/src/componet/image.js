import React from "react";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
function ImageSection({ filtered_data, data }) {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        {(filtered_data ? filtered_data : data.photos).map((value) =>
          !filtered_data && value.id === 1 ? (
            <>
              <CardMedia
                component="img"
                height="194"
                image={value.image}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {value.description}
                </Typography>
              </CardContent>
            </>
          ) : filtered_data ? (
            <>
              <CardMedia
                component="img"
                height="194"
                image={value.image}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {value.description}
                </Typography>
              </CardContent>
            </>
          ) : null
        )}
      </Card>
    </div>
  );
}

export default ImageSection;
