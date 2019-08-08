import React, { Component, Fragment } from 'react'
import { Grid, Paper, Typography, List, ListItem, ListItemText} from '@material-ui/core'


const styles = {
  Paper:
    {
      padding: 20,
      marginTop: 10,
      marginBottom: 10,
      height: 500,
      overflowY: "auto"
    },
}

class Index extends Component {
  constructor(props){
    super(props);
    console.log({indexProps: props});
    this.state = {
      exercises: props.exercises
    }
  }


  render(){
    return (
      <Grid container>
        <Grid item xs>
          <Paper style={styles.Paper}>
            {this.state.exercises.map(([group, exercises]) =>
              <Fragment>
                <Typography variant="h3" style={{textTransform: 'capitalize'}}>
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ title})=>
                    <ListItemText primary={title}>
                    </ListItemText>
                  )}
                </List>
              </Fragment>
            )}
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper style={styles.Paper}>
            <Typography variant="h3">
              Welcome!
            </Typography>
            <Typography variant="h4" style={{marginTop: 20}}>
              Please select an exercise from the list on the left.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

export default Index;