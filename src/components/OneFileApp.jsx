import React, { useState, useCallback } from 'react';

const CountDisplay = ({ count }) => <h3>Count: {count}</h3>;

const CountButton = React.memo(({ updateCount }) => {
  // Note that this line will fire every time,
  // showing us that an unneeded re-render has occurred.
  console.log('=> CountButton render', Date.now());

  return <button onClick={() => updateCount()}>Increment</button>;
});

const OneFileApp = () => {
  const [count, setCount] = useState(0);

  console.log('=> onefile app render', Date.now());

  const updateCount = useCallback(() => {
    setCount((c) => c + 1);
  }, [setCount]);

  return (
    <>
      <CountButton updateCount={updateCount} />
      <CountDisplay count={count} />
    </>
  );
};
export default OneFileApp;
