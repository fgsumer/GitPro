import { useState, useEffect, useRef } from 'react'; // removed React from here just to get rid of warnings

const useSignUpForm = (initialValues, callback) => {
  const [inputs, setInputs] = useState(initialValues);
  const ref = useRef(inputs); //we are using useRef for state to update itself each time we enter data and click next on dashboard

  useEffect(() => {
    //we use useEffect to update itself each time our state(inputs) changes
    ref.current = inputs;
  }, [inputs]);

  // function useStateRef(initialValue) {
  //const [value, setValue] = useState(initialValue);
  //const ref = useRef(value);
  /*useEffect(() => {
      ref.current = value;
    }, [value]);*/
  //return [value, setValue, ref];
  // }

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
      //event.persist();
      console.log('last values', inputs);
      callback();
    }
  };
  const handleInputChange = event => {
    event.persist();

    //setInputs(ref => ({ ...ref, [event.target.name]: event.target.value }));

    const { name, value } = event.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));

    console.log('changed inputs', inputs);
    console.log('ref', ref);
  };

  /* const onDateChange = (event, dateString) => {
    console.log(dateString);
    setInputs(inputs => ({
      ...inputs,
      [range.name]: range.dateString,
    }));
  }; */

  function onEduDateChange(date, educationDate) {
    console.log(date, educationDate);
    const educationStartDate = educationDate[0];
    const educationEndDate = educationDate[1];

    setInputs(inputs => ({ ...inputs, educationStartDate }));
    setInputs(inputs => ({ ...inputs, educationEndDate }));
  }

  function onExpDateChange(date, experienceDate) {
    console.log(date, experienceDate);
    const workStartDate = experienceDate[0];
    const workEndDate = experienceDate[1];

    setInputs(inputs => ({ ...inputs, workStartDate }));
    setInputs(inputs => ({ ...inputs, workEndDate }));
  }

  return {
    handleSubmit,
    handleInputChange,
    inputs,
    onEduDateChange,
    onExpDateChange,
  };
};
export default useSignUpForm;
