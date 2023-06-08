import React, { useRef } from "react";
import { Avatar, Box, Button, Card, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { setImgSelector } from "../redux/ducks";
import { setPersonalInfoSelector } from "../redux/ducks";
import { setEducationSelector } from "../redux/ducks";
import { setExperienceSelector } from "../redux/ducks";
import { setSkillsSelector } from "../redux/ducks";
import { useReactToPrint } from "react-to-print";

const Preview = () => {
  const printRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  const img = useSelector(setImgSelector);
  const info = useSelector(setPersonalInfoSelector);
  const edu = useSelector(setEducationSelector);
  const exp = useSelector(setExperienceSelector);
  const skills = useSelector(setSkillsSelector);

  return (
    <Box>
      <Box display="flex" justifyContent="flex-end" m={2}>
        <Button variant="contained" onClick={handlePrint}>
          Download
        </Button>
      </Box>
      <Card>
        <Box ref={printRef} sx={{ p: 5 }}>
          <Grid container spacing={3}>
            <Grid item lg={6} md={6} sm={6} xs={6}>
              <Box m={3}>
                <Avatar src={img} sx={{ width: 156, height: 156 }} />
              </Box>
              <Box>
                <Typography variant="h3" sx={{ mb: 2 }}>
                  {info.name}
                </Typography>
                <Typography variant="h6">Age: {info.age}</Typography>
                <Typography variant="h6">Email: {info.email}</Typography>
                <Typography variant="h6">
                  Mobile Number: {info.phone}
                </Typography>
                <Box mt={2}>
                  <Typography variant="h4">Skills</Typography>
                  <Box>
                    {skills?.map((item, i) => (
                      <Typography variant="h6" key={i} sx={{ mt: 1 }}>
                        &bull; {item}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={6} mt={3}>
              <Typography variant="h4" sx={{ mb: 3 }}>
                Education
              </Typography>
              {edu?.map((item, i) => (
                <Box key={i} mb={2}>
                  <Typography variant="h5">{item.university}</Typography>
                  <Typography variant="h6">{item.course}</Typography>
                  <Typography variant="h6">{item.duration}</Typography>
                </Box>
              ))}
              <Typography variant="h4" sx={{ mb: 3 }}>
                Experience
              </Typography>
              {exp?.map((item, i) => (
                <Box key={i} mb={2}>
                  <Typography variant="h5">{item.company}</Typography>
                  <Typography variant="h6">{item.role}</Typography>
                  <Typography variant="h6">{item.duration}</Typography>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Box>
  );
};

export default Preview;
