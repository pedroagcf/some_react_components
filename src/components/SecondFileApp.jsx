import React from 'react';

import { useState, useMemo } from 'react';

const data = [
  [93, 64, 60, 28, 17, 24, 36, 9, 47, 11, 80, 45],
  [87, 76, 66, 20, 18, 71, 5, 22, 36, 48, 28, 99],
  [3, 71, 62, 59, 22, 15, 33, 19, 13, 98, 98, 42],
];

const double = (arr) => {
  // This shows that the function is being run on each render
  console.log('=> double', Date.now());
  arr.map((line) => line.map((num) => num * 2));
};

const CountButton = ({ updateCount }) => (
  <button onClick={updateCount}>Increment</button>
);

const CountDisplay = ({ count }) => <h3>Count: {count}</h3>;

const SecondFileApp = () => {
  const [count, setCount] = useState(0);

  // This will show you every time a render takes place
  console.log('=> App render');

  const doubledData = useMemo(() => {
    double(data);
  }, [data]);

  return (
    <>
      <CountButton updateCount={() => setCount((c) => c + 1)} />
      <CountDisplay count={count} />
    </>
  );
};
export default SecondFileApp;
