import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";
import "./navbar.scss";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Marcos Dev
        </motion.span>
        <div className="social">
          <a href="https://github.com/Maaarcosg">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/marcos-gutierrez-651349185">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
