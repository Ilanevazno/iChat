import { memo } from "react";

import { connect } from "react-redux";

import { PageTemplate } from "../../features/PageTemplate/PageTemplate";
import { AccountEntry } from "../../features/Auth/AccountEntry/AccountEntry";
import { Modal } from "../../components/Modal/Modal";
import { AppState } from "../../redux/model";

type StateProps = {
  isAuthDone: boolean;
};

const mapState = (state: AppState): StateProps => ({
  isAuthDone: state.auth.isAuthDone,
});

const mapDispatch = {};

type Props = StateProps & typeof mapDispatch;

const Page = memo(({ isAuthDone }: Props) => (
  <PageTemplate>
    Привет мир!
    {!isAuthDone && (
      <Modal isOpened={true}>
        <AccountEntry />
      </Modal>
    )}
  </PageTemplate>
));

const connectedComponent = connect(mapState, mapDispatch)(Page);

export { connectedComponent as ProfilePage };
