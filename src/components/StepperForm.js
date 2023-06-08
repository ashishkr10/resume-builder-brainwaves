import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Step,
  StepLabel,
  Stepper,
  Toolbar,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Personal from "../views/personal";
import Professional from "../views/professional";
import Skills from "../views/skills";
import {
  educationState,
  experienceState,
  imgState,
  personalInfoState,
  skillsState,
} from "../redux/ducks";
import { useDispatch } from "react-redux";
import Preview from "../views/preview";

const steps = ["Personal Information", "Professional Information", "Skills"];

export const StepperForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();

  const [edu, setEdu] = useState([
    { university: "", course: "", duration: "" },
  ]);
  const [exp, setExp] = useState([{ company: "", role: "", duration: "" }]);
  const [img, setImg] = useState(null);
  const [skills, setSkills] = useState([]);

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      age: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required("Email is required").email("Invalid email"),
      name: Yup.string().required("Full Name is required"),
      age: Yup.number().required("Age is required"),
      phone: Yup.number().required("Mobile Number is required"),
    }),
    onSubmit: (values) => {
      setActiveStep((prevStep) => prevStep + 1);
      dispatch(personalInfoState(values));
      dispatch(educationState(edu));
      dispatch(experienceState(exp));
      dispatch(imgState(img));
      dispatch(skillsState(skills));
    },
  });

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Personal formik={formik} />;
      case 1:
        return (
          <Professional edu={edu} setEdu={setEdu} exp={exp} setExp={setExp} />
        );
      case 2:
        return (
          <Skills
            img={img}
            setImg={setImg}
            skills={skills}
            setSkills={setSkills}
          />
        );
      default:
        return <Typography>404: Not Found</Typography>;
    }
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    // setActiveStep(0);
    window.location.reload(false);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <Toolbar />
          <Box sx={{ mt: 2, mb: 1 }}>
            <Preview />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", m: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button variant="outlined" onClick={handleReset}>
              Reset Resume
            </Button>
          </Box>
        </>
      ) : (
        <>
          <Toolbar />
          <Container>
            <Card sx={{ p: 2 }}>
              <Box sx={{ mt: 2, mb: 1 }}>{getStepContent(activeStep)}</Box>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  variant="outlined"
                  fullWidth
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Previous
                </Button>

                <Button
                  fullWidth
                  variant="contained"
                  onClick={formik.handleSubmit}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>
            </Card>
          </Container>
        </>
      )}
    </Box>
  );
};
