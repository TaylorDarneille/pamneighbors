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

const styles = theme => ({
  container: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
});

class ComposedTextField extends React.Component {
  state = {
    name: 'Composed TextField',
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
      
        <FormControl className={classes.formControl} variant="filled">
          <InputLabel htmlFor="component-filled">Name</InputLabel>
          <FilledInput id="component-filled" value={this.state.name} onChange={this.handleChange} />
        </FormControl>  
        <FormControl className={classes.formControl} variant="filled">
          <InputLabel htmlFor="component-filled">Phone</InputLabel>
          <FilledInput id="component-filled" value={this.state.phone} onChange={this.handleChange} />
        </FormControl> 
        <FormControl className={classes.formControl} variant="filled">
          <InputLabel htmlFor="component-filled">Email</InputLabel>
          <FilledInput id="component-filled" value={this.state.email} onChange={this.handleChange} />
        </FormControl>
        <label htmlFor="contained-button-file">
          <Button variant="contained" component="span" className={classes.button}>
            Yes, I'd like to learn more!
          </Button>
        </label>
      </div>
    );
  }
}

ComposedTextField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComposedTextField);