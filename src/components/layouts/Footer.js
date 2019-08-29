import React, { Fragment } from 'react'
import {
  Paper, Grid, Link,
  List, ListItem, ListItemText,
  ListItemIcon, ListItemSecondaryAction, Tooltip,
} from '@material-ui/core'
import OpenIcon from '@material-ui/icons/Launch'

import Contacts from '../contacts'

function Footer(props) {
  const contacts = Contacts();

  return <Fragment>
    <Paper style={{marginTop: 5}}>
      <Grid container direction='row-reverse' style={{textAlign: "center"}}>
        <Grid item xs={12} sm={10} md={5} lg={4} xl={3}>
          <List dense={true}>
            {Object.entries(contacts).map(([key, value]) =>
              <ListItem divider key={key}>
                <ListItemIcon>
                  {value.icon}
                </ListItemIcon>
                <ListItemText primary={value.title}/>
                <ListItemSecondaryAction>
                  <Tooltip title={value.launchTooltip} placement='left'>
                    <Link href={value.link}>
                      <OpenIcon/>
                    </Link>
                  </Tooltip>
                </ListItemSecondaryAction>
              </ListItem>
            )}
          </List>
        </Grid>
      </Grid>
    </Paper>
  </Fragment>
}

export default Footer