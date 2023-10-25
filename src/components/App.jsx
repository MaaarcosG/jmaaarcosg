import { makeStyles } from "@mui/styles";
import DrawerComponent from "./Drawer/Drawer";
import Home from "./Home/Home";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: "16px",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DrawerComponent />
      <main className={classes.content}>
        <section id="home">
          <Home />
        </section>
        <section id="dashboard">
          <h1>Dashboard</h1>
          <p>Contenido de la sección Dashboard.</p>
        </section>
        <section id="profile">
          <h1>Perfil</h1>
          <p>Contenido de la sección Profile.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
