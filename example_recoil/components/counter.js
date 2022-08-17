import { useRecoilState, useRecoilValue, useSetRecoilState, useResetRecoilState } from 'recoil'
import { countState, incrementCount, decrementCount } from '../stores/recoil'

const Counter = () => {
    const [count, setCount] = useRecoilState(countState);

  function increment() {
    setCount(++count);
  }

  function decrement() {
    setCount(--count);
  }

  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={() => increment()}>+1</button>
      <button onClick={() => decrement()}>-1</button>
    </div>
  )
}

export default Counter
