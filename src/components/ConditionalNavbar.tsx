import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import UtilitiesNavbar from "./utilities/UtilitiesNavbar";

const ConditionalNavbar = () => {
  const location = useLocation();
  const isUtilitiesPage = location.pathname.startsWith("/utilities");

  if (isUtilitiesPage) {
    return <UtilitiesNavbar />;
  }

  return <Navbar />;
};

export default ConditionalNavbar;

