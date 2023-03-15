import { Grid, Typography, Divider } from "@material-ui/core";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

const ContactUs = (props) => {
  return (
    <div>
      <Typography variant="h3">Contact Us</Typography>
      <br />
      <Divider />
      <br />
      <br />
      <Grid container spacing={2} justifyContent={"space-around"}>
        <Grid item xs={12} sm={4}>
          <Typography mt={10} variant="h6" align="center">
            <LocationOnIcon fontSize="large" />
            <div>
              <b>LOCATION</b>
            </div>{" "}
            <br />
            <div>
              {" "}
              OFFICE 1 : Phase no 1,Phaltan
              <br /> Satara,Maharashtra
              <br /> 415523
            </div>
            <div>
              {" "}
              OFFICE 2 : Lane no 8,Katraj
              <br /> Pune,Maharashtra
              <br /> 411037
            </div>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography mt={10} variant="h6" align="center">
            <CallIcon fontSize="large" />
            <div>
              <b>PHONE NUMBER</b>
            </div>{" "}
            <br />
            <div>
              OFFICE 1 : <br /> +91 &nbsp; 9561740711 <br /> +91 &nbsp;
              9309952596
            </div>
            <div>
              OFFICE 2 : <br /> +91 &nbsp; 7276758540 <br /> +91 &nbsp;
              6677667766
            </div>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography mt={10} variant="h6" align="center">
            <EmailIcon fontSize="large" />
            <div>
              <b>EMAIL</b>
            </div>{" "}
            <br />
            <div>
              raktkosh2023@gmail.com <br /> raktkoshorg@gmail.com{" "}
            </div>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactUs;
