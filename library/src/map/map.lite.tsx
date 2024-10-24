import { useStore } from '@builder.io/mitosis';

export default function map() {
  const state = useStore({
    value: '',
  });

  return (
    <div>
      <h2>map Component</h2>
      <input
        value={state.value}
        onChange={(event) => (state.value = event.target.value)}
        placeholder='Enter text'
      />
    </div>
  );
}

