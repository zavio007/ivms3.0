import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RadioButtons.css'; // Import a separate CSS file for custom styles

const RadioButtons = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAdditionalOptions, setShowAdditionalOptions] = useState(false);
  const [selectedAdditionalOptions, setSelectedAdditionalOptions] = useState([]);

  const handleOptionChange = (value) => {
    setSelectedOption(value);
    setShowAdditionalOptions(true);
  };

  const handleAdditionalOptionChange = (value) => {
    // Toggle the selected state of the additional option
    const updatedSelection = selectedAdditionalOptions.includes(value)
      ? selectedAdditionalOptions.filter((option) => option !== value)
      : [...selectedAdditionalOptions, value];

    setSelectedAdditionalOptions(updatedSelection);

    // Handle the selection of additional options here if needed
    console.log(`Selected additional options: ${updatedSelection.join(', ')}`);
  };

  const additionalOptions = ['Helmet', 'SafetyGlass', 'Gloves', 'RubberShoes'];

  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <div
            className={`rounded-box ${selectedOption === 'manufacturing' ? 'selected' : ''}`}
            onClick={() => handleOptionChange('manufacturing')}
          >
            Manufacturing
          </div>
        </div>
        <div className="col-md-3">
          <div
            className={`rounded-box ${selectedOption === 'shipping' ? 'selected' : ''}`}
            onClick={() => handleOptionChange('shipping')}
          >
            Shipping
          </div>
        </div>
        <div className="col-md-3">
          <div
            className={`rounded-box ${selectedOption === 'roadTransport' ? 'selected' : ''}`}
            onClick={() => handleOptionChange('roadTransport')}
          >
            RoadTransport
          </div>
        </div>
        <div className="col-md-3">
          <div
            className={`rounded-box ${selectedOption === 'airline' ? 'selected' : ''}`}
            onClick={() => handleOptionChange('airline')}
          >
            Airline
          </div>
        </div>
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
                {option}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RadioButtons;