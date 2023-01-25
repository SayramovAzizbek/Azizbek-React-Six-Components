import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({ items }) => {
  const [expandenIndex, setExapamdedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    setExapamdedIndex((currentIndex) => {
      if (currentIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
    // if (expandenIndex === nextIndex) {
    //   setExapamdedIndex(-1);
    // } else {
    //   setExapamdedIndex(nextIndex);
    // }
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandenIndex;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex items-center justify-between p-3 bg-gray-50 border-b cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="p-5 border-b">{item.content}</div>}
      </div>
    );
  });
  
  return <div className="border-x border-t rounded">{renderedItems}</div>;
};

export default Accordion;
