import { Button, Grid } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';
import { decrement, decrementAsync, increment, incrementAsync } from '../../actions/counter/counter';

const Counter = (props) => (
  <Grid spacing={8}
    container={true}
    direction="row"
    justify="center"
    alignItems="center">
    <Grid item={true} lg={6} container={true}
      direction="row"
      justify="space-around"
      alignItems="center">
      <Grid item={true} container={true}
        direction="row"
        justify="space-around"
        alignItems="center" lg={2} xs={4}>
        <Button variant="outlined" color="secondary" aria-label="Sub" onClick={props.decrement} disabled={props.isLoading}>
          Decrement
        </Button>
        <br />
        <Button variant="outlined" color="secondary" aria-label="Sub" onClick={props.decrementAsync} disabled={props.isLoading}>
          Decrement Async
        </Button>
      </Grid>
      <Grid item={true} container={true}
        direction="column"
        justify="space-between"
        alignItems="center" alignContent="center" lg={2} xs={4}>
        <div>Counter: {props.count}</div>
      </Grid>
      <Grid item={true} container={true}
        direction="row"
        justify="space-around"
        alignItems="center" lg={2} xs={4}>
        <Button variant="outlined" color="primary" aria-label="Add" onClick={props.increment} disabled={props.isLoading}>
          Increment
        </Button>
        <br />
        <Button variant="outlined" color="primary" aria-label="Add" onClick={props.incrementAsync} disabled={props.isLoading}>
          Increment Async
        </Button>
      </Grid>
    </Grid>
  </Grid>
);

const mapStateToProps = (state) => ({
  count: state.counter.count,
  isLoading: state.counter.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  decrement: () => dispatch(decrement()),
  decrementAsync: () => dispatch(decrementAsync()),
  increment: () => dispatch(increment()),
  incrementAsync: () => dispatch(incrementAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
