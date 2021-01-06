import { memo } from "react";

import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import * as S from "./PageTemplated.styled";

const PageTemplate = memo(({ children }) => (
  <>
    <Header />
    <S.Container>{children}</S.Container>
    <Footer />
  </>
));

export { PageTemplate };
