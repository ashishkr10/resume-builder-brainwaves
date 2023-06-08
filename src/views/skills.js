import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { MuiChipsInput } from "mui-chips-input";

const Skills = ({ img, setImg, skills, setSkills }) => {
  const onImageChange = (event) => {
    if (event.target.files[0].size > 1048576) {
      alert("File should be under 1MB");
    } else if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImg(URL.createObjectURL(img));
    }
  };

  const handleChange = (newChips) => {
    setSkills(newChips);
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Box display="flex" justifyContent="center">
            <Box mx={3}>
              <Avatar src={img} sx={{ width: 96, height: 96 }} />
            </Box>
          </Box>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Box display="flex" justifyContent="center">
            <Box display="none">
              <input
                accept=".jpeg, .jpg, .png"
                id="icon-button-file"
                type="file"
                onChange={onImageChange}
              />
            </Box>
            <label htmlFor="icon-button-file">
              <Button
                variant="contained"
                color="primary"
                component="span"
                startIcon={<CloudUploadIcon />}
              >
                Upload
              </Button>
            </label>
          </Box>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Box p={1}>
            <Typography variant="h5">Enter Skills</Typography>
          </Box>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <MuiChipsInput
            value={skills}
            onChange={handleChange}
            clearInputOnBlur
            fullWidth
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Skills;
