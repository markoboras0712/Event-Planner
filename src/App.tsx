import { database } from 'modules/redux-store/firebase';

export const App: React.FC = () => {
  console.log(database);
  return <div>
    <div>
      Create meetups
    </div>
    <div>
      Read meetups
    </div>
    <div>
      Update meetups
    </div>
  </div>;
};
