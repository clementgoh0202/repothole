import React from "react";
import { createStyles, Paper, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  terminalBox: {
    border: "1px solid black",
		height: "20vh",
  },
}));

// terminal based output for machine learning
const Output = () => {
  const { classes } = useStyles();

  return <>
		<Paper shadow="xs" className={classes.terminalBox} pl={"xs"}>
			<Text pl={"xs"}>
				Output
				</Text>
				<Text>
					{"output here"}
				</Text>
		</Paper>
	</>;
};

export default Output;
