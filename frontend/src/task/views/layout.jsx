
import React from 'react'
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  page:{
    width:'100%'
  }
})

function Layout({children}) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.page}>
       {children}
      </div>
    </div>
  )
}

export default Layout
