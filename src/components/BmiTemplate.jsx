import React, {useState} from 'react';
import "./style.css";

const BmiTemplate = () => {

  const [Height, setHeight] = useState('');
  const [Weight, setWeight] = useState('');
  const [BmiResult, setBmiResult] = useState('');

  const calculateBmi = () => {
    const heightInMeters = parseFloat(Height) / 100;
    const weightInKg = parseFloat(Weight);

    if (isNaN(heightInMeters) || isNaN(weightInKg)) {
      alert('Please enter valid values for height and weight.');
      return;
    }

    const bmi = weightInKg / (heightInMeters * heightInMeters);
    const roundedBmi = bmi.toFixed(2);

    // Determine the BMI category based on the value of BMI
    let bmiCategory;
    if (bmi < 18.5) {
      bmiCategory = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      bmiCategory = 'Normal Weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      bmiCategory = 'Overweight';
    } else {
      bmiCategory = 'Obese';
    }

    // Update the state with the calculated BMI result
    setBmiResult(`Your BMI: ${roundedBmi} (${bmiCategory})`);

    // Reset the input values for height and weight
    setHeight('');
    setWeight('');
  };

  // Function to reset the input values and BMI result
  const resetValues = () => {
    setHeight('');
    setWeight('');
    setBmiResult('');
  };

  return (
    <>
      <div className="master">
        <div className="form">
          <div className="input-box">
            <input 
              type="text"
              value={Height}
              className="height"
              placeholder='ENTER YOUR HEIGHT(in cm)' 
              onChange={(e) => setHeight(e.target.value)}/>
            <input 
              type="text"
              value={Weight}
              className="weight"
              placeholder='ENTER YOUR WEIGHT(in kg)'
              onChange={(e) => setWeight(e.target.value)}/>
          </div>
          <div className="btn-cnt">
            <button className="submit" onClick={calculateBmi}>Submit</button>
            <button className="reload" onClick={resetValues}>Reload</button>
          </div>
          <div className="result">
              {BmiResult && <p>{BmiResult}</p>}
          </div>
        </div>
      </div>
    </>
  )
}

export default BmiTemplate