import React, { useState } from 'react';

const Counter = () => {
  // State initialization with useState hook
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      {/* Display the count */}
      <h1>Count: {count}</h1>

      {/* Button to increment */}
      <button onClick={increment}>Increment</button>

      {/* Button to decrement */}
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
