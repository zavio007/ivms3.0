import React, { useState } from 'react';
import './RadioButtons.css';
interface DesktopElevenColumnOneProps {
  manufacturing: string;
  language: string;
}

export const DesktopElevenColumnOne: React.FC<DesktopElevenColumnOneProps> = ({
  manufacturing,
  language,
}) => {
  const [selectedManufacturing, setSelectedManufacturing] = useState<string>('');
  const [showAdditionalOptions, setShowAdditionalOptions] = useState<boolean>(false);

  const handleManufacturingChange = (value: string) => {
    setSelectedManufacturing(value);
  };

  const handleOptionClick = () => {
    setShowAdditionalOptions(true);
  };

  return (
    <div style={{ width: '800px' }}> {/* Adjust the width as needed */}
      <div className="radio-button">
        <label>
          <input
            type="radio"
            value={manufacturing}
            checked={selectedManufacturing === manufacturing}
            onChange={() => handleManufacturingChange(manufacturing)}
            onClick={handleOptionClick}
          />
          <span>{manufacturing}</span>
        </label>
      </div>
      {showAdditionalOptions && (
        <div style={{ marginTop: '7px', display: 'flex', flexDirection: 'row', gap: '352px' }}>
        <label>
          <input type="radio" name="helmet" value="helmet" />
          <span>Helmet</span>
        </label>
        <label>
          <input type="radio" name="safetyGlass" value="safetyGlass" />
          <span>Safety Glass</span>
        </label>
        <label>
          <input type="radio" name="gloves" value="gloves" />
          <span>Gloves</span>
        </label>
        <label>
          <input type="radio" name="rubberShoes" value="rubberShoes" />
          <span>Rubber Shoes</span>
        </label>
      </div>
      
      )}
    </div>
  );  

      return (
        <div className="radio-button">
          <label>
            <input
              type="radio"
              value={manufacturing}
              checked={selectedManufacturing === manufacturing}
              onChange={() => handleManufacturingChange(manufacturing)}
            />
            <span>{manufacturing}</span>
          </label>
        </div>
      );
    };

    interface DesktopElevenRowvectorProps {
      shipping: string;
      language: string;
    }

    export const DesktopElevenRowvector: React.FC<DesktopElevenRowvectorProps> = ({
      shipping,
      language,
    }) => {
      const [selectedShipping, setSelectedShipping] = useState<string>('');

      const handleShippingChange = (value: string) => {
        setSelectedShipping(value);
      };

      return (
        <div className="radio-button">
          <label>
            <input
              type="radio"
              value={shipping}
              checked={selectedShipping === shipping}
              onChange={() => handleShippingChange(shipping)}
            />
            <span>{shipping}</span>
          </label>
        </div>
      );
    };

    interface DesktopElevenRowcarProps {
      roadTransport: string;
      language: string;
    }

    export const DesktopElevenRowcar: React.FC<DesktopElevenRowcarProps> = ({
      roadTransport,
      language,
    }) => {
      const [selectedRoadTransport, setSelectedRoadTransport] = useState<string>('');

      const handleRoadTransportChange = (value: string) => {
        setSelectedRoadTransport(value);
      };

      return (
        <div className="radio-button">
          <label>
            <input
              type="radio"
              value={roadTransport}
              checked={selectedRoadTransport === roadTransport}
              onChange={() => handleRoadTransportChange(roadTransport)}
            />
            <span>{roadTransport}</span>
          </label>
        </div>
      );
    };

    interface DesktopElevenColumnOne1Props {
      airline: string;
      language: string;
    }

    export const DesktopElevenColumnOne1: React.FC<DesktopElevenColumnOne1Props> = ({
      airline,
      language,
    }) => {
      const [selectedAirline, setSelectedAirline] = useState<string>('');

      const handleAirlineChange = (value: string) => {
        setSelectedAirline(value);
      };

      return (
        <div className="radio-button">
          <label>
            <input
              type="radio"
              value={airline}
              checked={selectedAirline === airline}
              onChange={() => handleAirlineChange(airline)}
            />
            <span>{airline}</span>
          </label>
        </div>
      );
    };