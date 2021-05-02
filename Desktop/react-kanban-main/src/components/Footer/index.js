import React, { useState } from "react";
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

import {useStyles, StyledAppBar} from '../../style/components';

import "./style.css";

const Footer = ({ data }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className="footer">
        <StyledAppBar position="static">
          <Toolbar>
          <div className="active_tasks">Active tasks: {data[2].issues.length}</div>
          <div className="finished_tasks">
            Finished tasks: {data[3].issues.length}
          </div>
          <div className="author">Kanban board by WildEgor 2021</div>
          </Toolbar>
        </StyledAppBar>
      </div>
    </div>
  )
}

export default Footer;