import React, { Fragment } from 'react'
import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles/index"

const styles = {
  root: {
    background: 'linear-gradient(103deg, rgba(152, 152, 152, 0.03) 0%, rgba(152, 152, 152, 0.03) 20%,rgba(44, 44, 44, 0.03) 20%, rgba(44, 44, 44, 0.03) 40%,rgba(175, 175, 175, 0.03) 40%, rgba(175, 175, 175, 0.03) 60%,rgba(127, 127, 127, 0.03) 60%, rgba(127, 127, 127, 0.03) 80%,rgba(185, 185, 185, 0.03) 80%, rgba(185, 185, 185, 0.03) 100%),linear-gradient(127deg, rgba(103, 103, 103, 0.03) 0%, rgba(103, 103, 103, 0.03) 16.667%,rgba(68, 68, 68, 0.03) 16.667%, rgba(68, 68, 68, 0.03) 33.334%,rgba(147, 147, 147, 0.03) 33.334%, rgba(147, 147, 147, 0.03) 50.001000000000005%,rgba(213, 213, 213, 0.03) 50.001%, rgba(213, 213, 213, 0.03) 66.668%,rgba(235, 235, 235, 0.03) 66.668%, rgba(235, 235, 235, 0.03) 83.33500000000001%,rgba(190, 190, 190, 0.03) 83.335%, rgba(190, 190, 190, 0.03) 100.002%),linear-gradient(91deg, rgba(233, 233, 233, 0.01) 0%, rgba(233, 233, 233, 0.01) 20%,rgba(178, 178, 178, 0.01) 20%, rgba(178, 178, 178, 0.01) 40%,rgba(155, 155, 155, 0.01) 40%, rgba(155, 155, 155, 0.01) 60%,rgba(24, 24, 24, 0.01) 60%, rgba(24, 24, 24, 0.01) 80%,rgba(76, 76, 76, 0.01) 80%, rgba(76, 76, 76, 0.01) 100%),linear-gradient(126deg, rgba(190, 190, 190, 0.02) 0%, rgba(190, 190, 190, 0.02) 20%,rgba(191, 191, 191, 0.02) 20%, rgba(191, 191, 191, 0.02) 40%,rgba(230, 230, 230, 0.02) 40%, rgba(230, 230, 230, 0.02) 60%,rgba(216, 216, 216, 0.02) 60%, rgba(216, 216, 216, 0.02) 80%,rgba(56, 56, 56, 0.02) 80%, rgba(56, 56, 56, 0.02) 100%),linear-gradient(189deg, rgba(216, 216, 216, 0.03) 0%, rgba(216, 216, 216, 0.03) 14.286%,rgba(44, 44, 44, 0.03) 14.286%, rgba(44, 44, 44, 0.03) 28.572%,rgba(114, 114, 114, 0.03) 28.572%, rgba(114, 114, 114, 0.03) 42.858%,rgba(7, 7, 7, 0.03) 42.858%, rgba(7, 7, 7, 0.03) 57.144%,rgba(55, 55, 55, 0.03) 57.144%, rgba(55, 55, 55, 0.03) 71.42999999999999%,rgba(121, 121, 121, 0.03) 71.43%, rgba(121, 121, 121, 0.03) 85.71600000000001%,rgba(79, 79, 79, 0.03) 85.716%, rgba(79, 79, 79, 0.03) 100.002%),linear-gradient(103deg, rgba(244, 244, 244, 0.01) 0%, rgba(244, 244, 244, 0.01) 14.286%,rgba(211, 211, 211, 0.01) 14.286%, rgba(211, 211, 211, 0.01) 28.572%,rgba(76, 76, 76, 0.01) 28.572%, rgba(76, 76, 76, 0.01) 42.858%,rgba(185, 185, 185, 0.01) 42.858%, rgba(185, 185, 185, 0.01) 57.144%,rgba(246, 246, 246, 0.01) 57.144%, rgba(246, 246, 246, 0.01) 71.42999999999999%,rgba(35, 35, 35, 0.01) 71.43%, rgba(35, 35, 35, 0.01) 85%,rgba(244, 244, 244, 0.01) 85.716%, rgba(244, 244, 244, 0.01) 100.002%),linear-gradient(90deg, hsl(357,0%,14%),hsl(357,0%,14%))',
    color: 'white',
    height: '80vh',
    marginTop: 5,
    marginBottom: 5
  },
};

function Contacts(props) {
  return <Fragment>
    <Paper id={props.id} style={styles.root}>
      <Typography align="center" variant="h5">
        Contacts
      </Typography>
      <Typography align='center' variant="body2" paragraph={true}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus ligula et accumsan finibus.
        Pellentesque pretium ex vel tellus placerat dictum. Quisque nec euismod lacus. Praesent maximus augue ut
        sapien dictum, nec dignissim massa dignissim. Nullam tincidunt ligula ipsum, ut dapibus tellus porttitor eu.
        Mauris vestibulum est ut augue condimentum, in tincidunt nisi commodo. Phasellus vulputate vulputate luctus.
        Nullam fermentum, sapien nec ornare vestibulum, enim urna cursus ipsum, quis vulputate massa urna aliquam
        felis. Donec vitae tortor dolor.
      </Typography>
    </Paper>
  </Fragment>
}

export default Contacts