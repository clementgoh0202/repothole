import React, { useState } from "react";
import { createStyles, Paper, Text } from "@mantine/core";
import { SkeletonLoader } from "./Loader";
// import { GoogleMap, Marker } from "@react-google-maps/api"; // Import GoogleMap and Marker from @react-google-maps/api

const useStyles = createStyles((theme) => ({
  terminalBox: {
    border: "1px solid black",
    height: "20vh",
  },
}));

/*
// map function
const Map = ({ location }) => {
  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat: location.lat, // Update with the latitude of the location
    lng: location.lng, // Update with the longitude of the location
  };

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={15}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};
*/

/*
 expected output:

      pothole {
        result: potholes detected
        confidential level: 99.9%
        location: xxx
        reported date: 5/6/2023 10:31pm
        repair status: submitted to JKR for review
      }

      plain {
        result: no potholes detected
        confidential level: 99.9%
        location: xxx
      }

*/

// terminal based output for machine learning
const Output = (props) => {
  const { classes } = useStyles();

  return (
    /* (remove when done)

        1. Create a template for output display
        2. Loading animation when predicting
        3. Add a map that shows the location of the pothole

    */

    <>
      <Paper shadow="xs" className={classes.terminalBox} pl={"xs"}>
        <Text>Results</Text>
        {props.loading ? (
          <>
            {props.loader ? (
              <SkeletonLoader />
            ) : (
              <Text>Please upload an image to start detection.</Text>
            )}
          </>
        ) : (
          <>
            <Text>Class : {props.classData}</Text>
            <Text>Confidential Level : {props.scoreData}</Text>
            <Text>Location : {props.location}</Text>
            <Text>Report Date : {props.reportDate}</Text>
            <Text>Repair Status : {props.repairStatus}</Text>
          </>
        )}
      </Paper>
      {/*
        <Paper shadow="xs" className={classes.terminalBox} pl={"xs"}>
          <Text>Google Map</Text>
          {props.location && <Map location={props.location} />} {/* Render the Map component with the location prop 
        </Paper>
      */}
    </>
  );
};

export default Output;
