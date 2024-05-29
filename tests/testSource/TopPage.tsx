import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { useStateWithHistory } from '../../src';

interface Obj {
  name: string;
  check: boolean;
}

const TopPage: FC = () => {
  const [text, setText] = useStateWithHistory('', 'text');
  const [obj, setObj] = useStateWithHistory<Obj>(
    { name: 'test', check: false },
    'obj',
  );

  return (
    <>
      <input
        type="text"
        value={text}
        placeholder="textarea"
        onChange={e => setText(e.target.value)}
      />
      <button
        onClick={() =>
          setObj((prev) => {
            return { ...prev, check: true };
          })}
      >
        obj button
      </button>
      <p>{`name:${obj.name}, check:${obj.check}`}</p>
      <Link to="/second">to second page</Link>
    </>
  );
};

export default TopPage;
