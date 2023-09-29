import React, { memo } from "react";
import styles from "./PostLogin.module.scss";
import LOGO from "../../assets/images/blackLogo.png";
import { sideBarNavigation } from "../../utils/sideBarNavigation";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";
import { COOKIES } from "../../utils/constants";
import { PATH } from "./../../utils/pagePath";

const LeftSideBar = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  let cookies = new Cookies();
  const handleLogout = () => {
    cookies.remove(COOKIES.ACCESS_TOKEN, { path: "/" });
    cookies.remove(COOKIES.REFERESH_TOKEN, { path: "/" });
    cookies.remove(COOKIES.PROFILE_COLOR, { path: "/" });
    setTimeout(() => {
      navigate(PATH.LOGIN);
      window.location.reload();
    }, 1000);
  };

  return (
    <div className={styles.leftSideContainer}>
      <div className={styles.logoContainer}>
        <h2> JUNAID KHAN </h2>
      </div>
      <div className={styles.navContainer}>
        {sideBarNavigation.map((data) => (
          <NavLink
            key={data.id}
            className={({ isActive, isPending }) =>
              `${styles.navLink} ${isActive && styles.activeLink}`
            }
            to={data.path}
            state={{ previousPath: location.pathname }}
          >
            <img
              src={
                location?.pathname.includes(data?.path)
                  ? data.activeLogo
                  : data.inActiveLogo
              }
              className={styles.icon}
            />
            <p>{data.pageName}</p>
          </NavLink>
        ))}
        <div className={styles.logout} onClick={handleLogout}>
          Logout
        </div>
      </div>
    </div>
  );
};

export default memo(LeftSideBar);
