import React from "react";

export const Button = (props) => {
  const { title, setSomething, something } = props;
  const handleButtonClick = () => {
    setSomething(title);
  };
  return (
    <>
      <span className="btn-var2-span" onClick={handleButtonClick}>
        {title !== something ? (
          title
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{color: "white"}}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </span>
    </>
  );
};
