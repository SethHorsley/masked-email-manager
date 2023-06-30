import React, { useEffect, useRef, useState } from 'react';
import { DropdownButtonIcon } from '@pages/popup/components/home/icons/icons';
import {
  filterDropdownOptions,
  FilterOption
} from '@pages/popup/components/home/filter/FilterOption';

function FilterEmailsDropdown({
  onFilterChange
}: {
  onFilterChange: (option: string) => void;
}) {
  // State for the dropdown menu open/close status
  const [isOpen, setIsOpen] = useState(false);
  // State for the currently selected dropdown item
  const [selectedOption, setSelectedOption] = useState(
    filterDropdownOptions[0]
  );

  // Toggle the dropdown menu open/close status
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  // Handle the dropdown item selection
  const selectOption = (dropdownOption: FilterOption) => {
    setSelectedOption(dropdownOption);
    setIsOpen(false); // Close the dropdown menu
    onFilterChange(dropdownOption.value.toLowerCase()); // Update the email state filter
  };
  // Reference to the dropdown container div, used to detect clicks outside the dropdown
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  // Close the dropdown menu when the user clicks outside of it
  const handleClickOutside = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Set up an event listener for clicks outside the dropdown and remove it on component unmount
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-[98%]">
      <button
        id="dropdownButton"
        className="text-white focus:outline-none font-medium rounded-lg text-sm px-4 py-1 inline-flex items-center w-[98%] ml-1 mr-1 hover:bg-big-stone/[0.75]"
        type="button"
        onClick={toggleDropdown}
      >
        {selectedOption.icon}
        {selectedOption.value}
        <DropdownButtonIcon iconClasses={'w-4 h-4 ml-auto'} />
      </button>
      {/*Render the dropdown conditionally*/}
      {isOpen && (
        <div
          id="dropdownOptionsContainer"
          className="absolute top-full w-full mt-1 rounded-lg text-white"
        >
          <ul className="p-1 space-y-1 text-sm bg-big-stone rounded-lg ml-1">
            {filterDropdownOptions.map((filterOption) => (
              <FilterOption
                key={filterOption.value}
                item={filterOption}
                isSelected={selectedOption.value === filterOption.value}
                onClick={() => selectOption(filterOption)}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FilterEmailsDropdown;
