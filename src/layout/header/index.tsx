import { ButtonComponent } from "../../components";
import { removeToken } from "../../helpers/getToken";
import { useNavigate } from "react-router-dom";

const Header = () => {
const navigate= useNavigate()
    function handleSignOut() {
        removeToken()
        navigate("/signIn")
      }
  return (
    <header>
      <ButtonComponent text="Sign Out" onClick={handleSignOut} />
    </header>
  );
};

export default Header;
