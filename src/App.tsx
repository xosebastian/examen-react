import React, { useState } from 'react';

const countries = ['India','USA', 'France' ];

const App: React.FC = () => {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleCountryChange = (country: string) => {
    if (selectedCountries.includes(country)) {
      setSelectedCountries(selectedCountries.filter((c) => c !== country));
      setSelectAll(false);
    } else {
      setSelectedCountries([...selectedCountries, country]);
      if (selectedCountries.length === countries.length - 1) {
        setSelectAll(true);
      }
    }
  };

  const handleSelectAllChange = () => {
    if (selectAll) {
      setSelectedCountries([]);
    } else {
      setSelectedCountries(countries);
    }
    setSelectAll(!selectAll);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={selectAll} onChange={handleSelectAllChange} />
        Select All
      </label>
      <br />
      {countries.map((country) => (
        <div key={country}>
          <label>
            <input
              type="checkbox"
              checked={selectAll || selectedCountries.includes(country)}
              onChange={() => handleCountryChange(country)}
            />
            {country}
          </label>
        </div>
      ))}
    </div>
  );
};

export default App;
