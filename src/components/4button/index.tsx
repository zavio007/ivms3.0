import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './RadioButtons.css';

const RadioButtons = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAdditionalOptions, setShowAdditionalOptions] = useState(false);
  const [selectedAdditionalOptions, setSelectedAdditionalOptions] = useState([]);

  const handleOptionChange = (value) => {
    setSelectedOption(value);
    setShowAdditionalOptions(true);
  };

  const handleAdditionalOptionChange = (value) => {
    const updatedSelection = selectedAdditionalOptions.includes(value)
      ? selectedAdditionalOptions.filter((option) => option !== value)
      : [...selectedAdditionalOptions, value];

    setSelectedAdditionalOptions(updatedSelection);

    console.log(`Selected additional options: ${updatedSelection.join(', ')}`);
  };

  const optionIcons = {
    manufacturing: 'industry',
    shipping: 'ship',
    roadTransport: 'truck',
    airline: 'plane',
  };

  const additionalOptionIcons = {
    Helmet: 'hard-hat',
    SafetyGlass: 'glasses',
    Gloves: 'hand-paper',
    RubberShoes: 'shoe-prints',
  };

  const additionalOptions = ['Helmet', 'SafetyGlass', 'Gloves', 'RubberShoes'];

  return (
    <div>
      <div className="row">
        {Object.keys(optionIcons).map((option, index) => (
          <div key={index} className="col-md-3">
            <div
              className={`rounded-box ${selectedOption === option ? 'selected' : ''}`}
              onClick={() => handleOptionChange(option)}
            >
              <i className={`fas fa-${optionIcons[option]}`} /> {option}
            </div>
          </div>
        ))}
      </div>

      {showAdditionalOptions && (
        <div className="row">
          {additionalOptions.map((option, index) => (
            <div key={index} className="col-md-3">
              <div
                className={`rounded-box ${
                  selectedAdditionalOptions.includes(option) ? 'selected' : ''
                }`}
                onClick={() => handleAdditionalOptionChange(option)}
              >
                <i className={`fas fa-${additionalOptionIcons[option]}`} /> {option}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RadioButtons;