import { useRouter } from "next/router";
import { memo } from "react";

import { ProfilePage } from "../modules/ProfilePage/ProfilePage";

const MainPage = memo(() => <ProfilePage />);

export default MainPage;
