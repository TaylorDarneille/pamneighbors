import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '3rem'
  },
  formControl: {
    margin: theme.spacing.unit,
    width: '75%'
  },
  button: {
    marginTop: theme.spacing.unit * 1,
    marginBottom: theme.spacing.unit * 1,
    width: "75%"
  }
});

class ComposedTextField extends React.Component {
  state = {
    name: 'Jane Doe',
    phone: '555-555-5555',
    email: 'you@email.com',
  };

  componentDidMount() {
    this.forceUpdate();
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Typography className={classes.text} component="h2" variant="display1" align="center" gutterBottom>
          GET A FREE QUOTE
        </Typography>
        <Typography className={classes.text} component="h2" variant="headline" align="center" gutterBottom>
          Contact us today!
        </Typography>
        <FormControl className={classes.formControl} variant="filled">
          <InputLabel htmlFor="component-filled1">Name</InputLabel>
          <FilledInput id="component-filled1" value={this.state.name} onChange={this.handleChange} />
        </FormControl>  
        <FormControl className={classes.formControl} variant="filled">
          <InputLabel htmlFor="component-filled2">Phone</InputLabel>
          <FilledInput id="component-filled2" value={this.state.phone} onChange={this.handleChange} />
        </FormControl> 
        <FormControl className={classes.formControl} variant="filled">
          <InputLabel htmlFor="component-filled3">Email</InputLabel>
          <FilledInput id="component-filled3" value={this.state.email} onChange={this.handleChange} />
        </FormControl>
        <Button variant="contained" href="#contained-buttons" className={classes.button}>
          Yes, I'd like to learn more!
        </Button>
        <Typography className={classes.text} variant="caption" align="center" gutterBottom>
          *A representative of Trillium Ink will contact you shortly.
        </Typography>
      </div>
    );
  }
}

ComposedTextField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComposedTextField);