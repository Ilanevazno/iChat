import { rootSaga } from './redux/sagas';
import { auth } from './redux/reducer';

const reduxEntry = {
  sagas: [rootSaga],
  reducers: { auth },
}

export { reduxEntry };
