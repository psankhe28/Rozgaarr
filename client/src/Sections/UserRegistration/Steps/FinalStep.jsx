import React from "react";
import { Box, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import { renderText } from "../common/DisplayComponent";

const FinalStep = ({ data }) => {
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Your Data is submitted",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      
    </Paper>
  );
};

export default FinalStep;
