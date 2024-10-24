import { useStore } from '@builder.io/mitosis';

export default function venuecard() {
  const state = useStore({
    value: '',
  });

  return (
    <div>
      <h2>venuecard Component</h2>
      <input
        value={state.value}
        onChange={(event) => (state.value = event.target.value)}
        placeholder='Enter text'
      />
    </div>
  );
}

