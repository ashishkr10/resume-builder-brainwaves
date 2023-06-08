import { Grid, TextField } from "@mui/material";
import React from "react";

const Personal = ({ formik }) => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <TextField
            required
            fullWidth
            name="name"
            label="Full Name"
            error={Boolean(formik.touched.name && formik.errors.name)}
            onChange={formik.handleChange}
            value={formik.values.name}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <TextField
            required
            fullWidth
            type="number"
            name="phone"
            label="Mobile Number"
            error={Boolean(formik.touched.phone && formik.errors.phone)}
            onChange={formik.handleChange}
            value={formik.values.phone}
            helperText={formik.touched.phone && formik.errors.phone}
          />
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <TextField
            required
            fullWidth
            type="email"
            name="email"
            label="Email"
            error={Boolean(formik.touched.email && formik.errors.email)}
            onChange={formik.handleChange}
            value={formik.values.email}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <TextField
            required
            fullWidth
            type="number"
            name="age"
            label="Age"
            error={Boolean(formik.touched.age && formik.errors.age)}
            onChange={formik.handleChange}
            value={formik.values.age}
            helperText={formik.touched.age && formik.errors.age}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Personal;
