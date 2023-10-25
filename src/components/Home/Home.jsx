import { makeStyles } from "@mui/styles";
import { Paper, Typography } from "@mui/material";

const useStyles = makeStyles(() => ({
  section: {
    padding: "16px",
    marginBottom: "16px",
    maxWidth: "none",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.section}>
      <Typography variant="h4">Inicio</Typography>
      <Typography variant="body1">Contenido de la sección Home.</Typography>
    </Paper>
  );
};

export default Home;
