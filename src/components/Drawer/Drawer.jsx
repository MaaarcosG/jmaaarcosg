import { makeStyles } from "@mui/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const drawerWidth = 75;

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  listItem: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    margin: "0 auto",
  },
  anchor: {
    textDecoration: "none"
  },
}));

function DrawerComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
        PaperProps={{
          sx: {
            backgroundColor: "primary.main",
            // background: "transparent",

          },
        }}
      >
        <List>
          <ListItem className={classes.listItem}>
            <a href="#home" className={classes.anchor}>
              <IconButton className={classes.icon}>
                <HomeIcon color="secondary" />
              </IconButton>
            </a>
          </ListItem>
          <ListItem className={classes.listItem}>
            <a href="#dashboard" className={classes.anchor}>
              <IconButton className={classes.icon}>
                <DashboardIcon color="secondary" />
              </IconButton>
            </a>
          </ListItem>
          <ListItem className={classes.listItem}>
            <a href="#profile" className={classes.anchor}>
              <IconButton className={classes.icon}>
                <PersonIcon color="secondary" />
              </IconButton>
            </a>
          </ListItem>
          <ListItem className={classes.listItem}>
            <a
              href="https://github.com/MaaarcosG"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton className={classes.icon}>
                <GitHubIcon color="secondary" />
              </IconButton>
            </a>
          </ListItem>
          <ListItem className={classes.listItem}>
            <a
              href="https://www.linkedin.com/in/marcos-gutierrez-651349185"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton className={classes.icon}>
                <LinkedInIcon color="secondary" />
              </IconButton>
            </a>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default DrawerComponent;
