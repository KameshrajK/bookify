import { useState } from 'react';
import { useAutoComplete } from './hooks/useAutoComplete';

const AutoComplete = () => {
  const [query, setQuery] = useState<string>('');

  const { suggestions, isLoading, error } = useAutoComplete(query);

  if (error) {
    return <>'Error'</>;
  }
  return (
    <div>
      <input placeholder="Search" onChange={(e) => setQuery(e.target.value)} />
      {isLoading && <p>Loading...</p>}
      {Boolean(suggestions.length) && suggestions?.map(({ title }) => <>{title}</>)}
    </div>
  );
};

export default AutoComplete;
