import { Switch } from "@heroui/react";
import React from "react";

export const ToggleIcon = (props: any) => {
  const [isSelected, setIsSelected] = React.useState(true);

  return (
    // <svg
    //   aria-hidden="true"
    //   fill="none"
    //   focusable="false"
    //   height="1em"
    //   role="presentation"
    //   viewBox="0 0 20 20"
    //   width="1em"
    //   {...props}
    // >
      <div className="flex flex-col gap-2">
        <Switch isSelected={isSelected} onValueChange={setIsSelected}/>
        {/* <p className="text-small text-default-500">
          Selected: {isSelected ? "true" : "false"}
        </p> */}
      </div>
    // </svg>
  );
};
