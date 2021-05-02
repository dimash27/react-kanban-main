import React, {useEffect, Fragment} from 'react';
import { useStoreActions, useStoreState, useStoreRehydrated } from 'easy-peasy';
import { Route, Switch } from "react-router-dom";
import {useStyles} from 'Style/components';
import MenuAppBar from 'Components/MenuAppBar';
import Main from 'Components/Main';
import Spinner from 'Components/Spinner';
import FullView from 'Components/FullView';
import Footer from 'Components/Footer';
import Container from '@material-ui/core/Container';

const App = () => {
  const classes = useStyles()
  const isRehydrated = useStoreRehydrated();
  const initialState = useStoreActions(actions => actions.simpleData.fetchInitialState);
  const updateData =  useStoreActions(actions => actions.simpleData.updateData);
  const data = useStoreState(state => state.simpleData.data);
  const isLoading = useStoreState(state => state.simpleData.isLoading);

  useEffect(() => {
    initialState()
  }, [])

  return (
    <div className={classes.app}>
      <MenuAppBar />
      {isRehydrated && !isLoading ? 
      <Fragment>
        <Switch>
          <Route
            path="/"
            children={<div className={classes.appContainer}><Main data={data} updateData={updateData}/></div>}
            exact
          />
          <Route
            path="/:id"
            children={({
              match: {
                params: { id },
              },
            }) => <div className={classes.appContainer}><FullView id={id} data={data} updateData={updateData} /></div>}
          />
        </Switch>
        <Footer data={data} />
      </Fragment>
      : <Spinner/>}
    </div>
  );
};

export default App;