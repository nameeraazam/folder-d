import React from 'react';
import { cn } from "../../lib/utils";

// Forwarding ref to the input element
const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref} // Correctly passing the ref to the input element
        type={type} // Setting the type of the input (defaults to "text")
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className // Allowing external className to override default ones
        )}
        {...props} // Passing the rest of the props to the input
      />
    );
  }
);

Input.displayName = "Input"; // Setting a displayName for easier debugging

export { Input };
