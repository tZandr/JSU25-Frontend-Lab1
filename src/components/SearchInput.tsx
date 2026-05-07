import './SearchInput.css';

type Props = {
  query: string;
  onChange: (value: string) => void;
};

export default function SearchInput({ query, onChange }: Props) {
  return (
    <div className="SearchBar">
      <input
        autoFocus
        type="text"
        placeholder="Search recipes..."
        value={query}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}
