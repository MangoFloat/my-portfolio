import "../css/test.css"

import React, { Component, Fragment } from "react"
import Header from "../components/layouts/Header"
import Footer from "../components/layouts/Footer"
import Index from "../components/exercises/index"
import { muscles, exercises } from "../components/store"

class Test extends Component {
  constructor(props){
    super(props);
    this.state = {
      exercises: exercises
    }
  }

  getExercisesByMuscles() {
    return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise

      // Check if array exist, if it does, append to array, else assign to new array with exercise
      exercises[muscles] = exercises[muscles] ? [...exercises[muscles], exercise] : [exercise];

      return exercises;
    }, {}));
  }

  render() {
    const exercises = this.getExercisesByMuscles();

    return <Fragment>
      <Header/>
      <Index exercises={exercises}/>
      <Footer muscles={muscles}/>
    </Fragment>
  }
}

export default Test