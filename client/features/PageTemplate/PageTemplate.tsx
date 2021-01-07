import { memo } from "react";

import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import * as S from "./PageTemplated.styled";

const PageTemplate = memo(({ children }) => (
  <>
    <Header />
    <S.Container>{children}</S.Container>
    <Footer />
  </>
));

export { PageTemplate };
