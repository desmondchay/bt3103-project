import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Button from 'material-ui/Button';

const styles = theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

class ControlledOpenSelect extends React.Component {
  state = {
    course: '',
    open: false,
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;

    return (
      <form autoComplete="off">
        <Button className={classes.button} onClick={this.handleOpen}>
          Choose Your Course
        </Button>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="controlled-open-select">Course</InputLabel>

          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.course}
            onChange={this.handleChange}
            inputProps={{
              name: 'course',
              id: 'controlled-open-select',
            }}
          >
            <MenuItem value={"Developers"}>Developers</MenuItem>
            <MenuItem value={"BT3103"}>BT3103</MenuItem>
            <MenuItem value={"NUSHS - Senior (NCC2018)"}>NUSHS - Senior (NCC2018)</MenuItem>
            <MenuItem value={"NUSHS - Junior (NCC2018)"}>NUSHS - Junior (NCC2018)</MenuItem>
            <MenuItem value={"National JC - Junior (NCC2018)"}>National JC - Junior (NCC2018)</MenuItem>
            <MenuItem value={"Junyuan Secondary School (NCC2018)"}>Junyuan Secondary School (NCC2018)</MenuItem>
            <MenuItem value={"Dunman High School - Senior (NCC2018)"}>Dunman High School - Senior (NCC2018)</MenuItem>
            <MenuItem value={"Dunman HS - Junior (NCC2018)"}>Dunman HS - Junior (NCC2018)</MenuItem>
            <MenuItem value={"Raffles Institution - Senior (NCC2018)"}>Raffles Institution - Senior (NCC2018)</MenuItem>
            <MenuItem value={"Sch of Science and Technology  (NCC2018)"}>Sch of Science and Technology  (NCC2018)</MenuItem>
            <MenuItem value={"Temasek JC - Senior (NCC2018)"}>Temasek JC - Senior (NCC2018)</MenuItem>
            <MenuItem value={"Temasek JC - Junior (NCC2018)"}>Temasek JC - Junior (NCC2018)</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

ControlledOpenSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledOpenSelect);
