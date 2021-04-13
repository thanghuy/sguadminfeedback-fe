import {
  BrowserRouter as Router,
} from "react-router-dom";
import { useStyles } from './assets/style';
import MainLayOut from './features/Layout/MainLayout';
import RouterAdmin from './features/Layout/RouterAdmin';
function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
          <MainLayOut />
          <main className={classes.content}>
              <div className={classes.toolbar} />
              <RouterAdmin />
          </main>
      </div>
    </Router>
  );
}

export default App;
