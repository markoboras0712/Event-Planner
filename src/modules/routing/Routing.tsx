import { Router, RouteComponentProps } from '@reach/router';
import { App } from 'App';
import { Routes } from 'fixtures';

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps,
) => props.pageComponent;

export const Routing: React.FC = () => {
  return (
    <Router>
      <RouterPage path="/" pageComponent={<App />} />
    </Router>
  );
};

