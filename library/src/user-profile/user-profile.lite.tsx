import { useStore } from '@builder.io/mitosis';

export default function userprofile() {
  const state = useStore({
    value: '',
  });

  return (
    <div>
      <h2>userprofile Component</h2>
      <input
        value={state.value}
        onChange={(event) => (state.value = event.target.value)}
        placeholder='Enter text'
      />
    </div>
  );
}

