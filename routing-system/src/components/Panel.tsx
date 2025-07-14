import React from "react";
import classNames from "classnames";

type PanelProps = {
  children: React.ReactNode;
  className: string;
} & React.HTMLAttributes<HTMLDivElement>; //  Inherit all Div props

const Panel: React.FC<PanelProps> = ({ children, className, ...rest }) => {
  const findClassNames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );
  return (
    <div {...rest} className={findClassNames}>
      {children}
    </div>
  );
};

export default Panel;
