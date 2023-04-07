# useDefinedSearchParams

The **useDefinedSearchParams** hook enables easier access to search parameters in a URL, and the **setParams** function simplifies updating those parameters.

## Usage

```javascript
import { useDefinedSearchParams } from "hooks/useDefinedSearchParams";

const initialParams = {
  page: null,
  genre: null,
};

const MyComponent = () => {
  const { setParams, page, genre } =
    useDefinedSearchParams(initialParams);

  // use page and genre variables as needed
  // use setParams function to update the search parameters

  return (
    // your JSX code here
  );
};
```

## Parameters

The **useDefinedSearchParams** hook takes a single object parameter:

- **params** (Object): An object with keys of search parameters and null as values.

## Return value

The **useDefinedSearchParams** hook returns an object with the following properties:

- **setParams** (Function): A function that simplifies updating the search parameters.
- Any keys defined in the **params** object passed to the hook, with their current values.

## Examples

```javascript
const initialParams = {
  page: null,
  genre: null,
};

export const HomePage = (): JSX.Element => {
  const { setParams, page, genre } = useDefinedSearchParams(initialParams);

  const handleNext = (): void => {
    let newPage: number;
    if (page === null) newPage = 2;
    else newPage = +page + 1;
    setParams({ page: newPage.toString(), genre });
  };

  const handlePrev = (): void => {
    if (page === null || +page === 1) return;
    setParams({ page: (+page - 1).toString(), genre });
  };

  const handleGenreChange: React.ChangeEventHandler<HTMLSelectElement> = (
    e,
  ): void => {
    const value = e.target.value;
    setParams({ genre: value });
  };

  return (
    <>
      <button onClick={handlePrev}>prev page</button>
      <button onClick={handleNext}>next page</button>
      <form>
        <select onChange={handleGenreChange}>
          <option value="action">action</option>
          <option value="comedy">comedy</option>
        </select>
      </form>
    </>
  );
};
```

## Dependencies

This hook requires **react-router-dom**.
