import { useStore } from '@builder.io/mitosis';

export default function chatbox() {
  const state = useStore({
    value: '',
  });

  return (
    <div>
      <h2>chatbox Component</h2>
      <input
        value={state.value}
        onChange={(event) => (state.value = event.target.value)}
        placeholder='Enter text'
      />
    </div>
  );
}

