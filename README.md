# react-backstate-preserve

`react-backstate-preserve` is a React library designed to persist component states across browser navigation, such as the back and forward button usage. It prevents state reset when navigating back to a component, ensuring a smoother user experience.

## Features

- **State Persistence**: Maintains the state of React components during browser navigation.
- **Easy to Use**: Implements a custom React hook and context provider to seamlessly integrate with your existing React applications.
- **TypeScript Support**: Fully supports TypeScript for type safety and better development experience.

## Installation

Install `react-backstate-preserve` with npm:

```bash
npm install react-backstate-preserve
```

Or with yarn:

```bash
yarn add react-backstate-preserve
```

## Usage

Import and wrap your components with `StateHistoryProvider` and use `useStateWithHistory` hook to preserve the state.

```tsx
import { StateHistoryProvider, useStateWithHistory } from 'react-backstate-preserve';

function YourComponent() {
  const [value, setValue] = useStateWithHistory<string>('', 'unique-key');

  return (
    <input value={value} onChange={(e) => setValue(e.target.value)} />
  );
}

function App() {
  return (
    <StateHistoryProvider>
      <YourComponent />
    </StateHistoryProvider>
  );
}
```

## Contributing

Contributions are always welcome! Please read the contribution guidelines first.

## License

Distributed under the MIT License.
