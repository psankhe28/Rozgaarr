import React from "react";
import { Box, Grid, Paper, Button } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";


const Step3 = ({ state, handleChange, handlePrev, handleSubmit }) => {
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Professional Details",
          type: "h5",
          color: "textPrimary",
          align: "center",
        })}
      </Box>
      {/* skill: "",
      workExperence: "",
      expectedSalary: "", */}
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "highestDegree",
            label: "Qualification Degree",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "Work Experience",
            label: "Work Experience",
            options: [
              { key: "No experience", value: "No experience" },
              { key: "Less than 1 year", value: "Less than 1 year" },
              { key: "More than 5 years", value: "More than 1 year" },
              { key: "More than 10 years", value: "More than 1 year" },
            ],
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "jobType",
            label: "Work Type",
            options: [
              { key: "Full Time", value: "Full Time" },
              { key: "Part Time", value: "Part Time" },
              { key: "Work from home", value: "Work from home" },
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "expectedSalary",
            label: " Expected Salary",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container component={Box} justify="flex-end" mt={2} p={2}>
        <Box ml={2}>
          {renderButton({
            label: "Back",
            color: "default",
            onClick: handlePrev,
          })}
        </Box>
        <Box ml={2}>
          <a href="/login">
            <Button
              variant="outlined"
              color="primary"
              fullWidth="false"
              onClick={handleSubmit}
            >
             Finish
            </Button>
          </a>
        </Box>
      </Grid>
    </Paper>
  );
};

export default Step3;
