import { PATH } from "./pagePath";
import INACTIVE_USERS from '../assets/icons/inActiveDashboard.png';
import ACTIVE_USERS from '../assets/icons/activeDashboard.png';

import { PAGENAME } from "./constants";

export const sideBarNavigation = [
    {
        id: 1,
        path: PATH.USERS,
        inActiveLogo: INACTIVE_USERS,
        activeLogo: ACTIVE_USERS,
        pageName: PAGENAME.USERS
    },
]