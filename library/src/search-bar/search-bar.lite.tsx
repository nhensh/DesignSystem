import { useStore } from '@builder.io/mitosis';

export default function searchbar() {
  const state = useStore({
    value: '',
  });

  return (
    <div>
      <h2>searchbar Component</h2>
      <input
        value={state.value}
        onChange={(event) => (state.value = event.target.value)}
        placeholder='Enter text'
      />
    </div>
  );
}

