import { database } from 'modules/redux-store/firebase';

export const App: React.FC = () => {
  console.log(database);
  return <div>Redux toolkit setup</div>;
};
