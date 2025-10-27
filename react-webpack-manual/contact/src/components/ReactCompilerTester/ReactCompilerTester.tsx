import { useState } from 'react';

function Child({ count }: { count: number }) {
  console.log("Children rendered!");
  return <div>{count}</div>;
}

export const ReactCompilerTester = () => {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  return (
    <>
      Child counter: <Child count={count} />
      Other counter: {other}
      <button onClick={() => setCount(c => c + 1)}>Count</button>
      <button onClick={() => setOther(o => o + 1)}>Other</button>
    </>
  );
};