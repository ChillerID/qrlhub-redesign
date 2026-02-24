import React from "react";

export function Badge({ children, className = "" }: any) {
  return (
    <span className={className}>
      {children}
    </span>
  );
}