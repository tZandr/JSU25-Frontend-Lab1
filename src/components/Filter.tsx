import './Filter.css';

type Props = {
  difficulty: string;
  onChange: (value: string) => void;
};

const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

export default function Filter({ difficulty, onChange }: Props) {
  return (
    <div className="FilterBar">
      <span className="FilterLabel">Difficulty</span>
      <div className="FilterPills">
        {difficulties.map(d => (
          <button
            key={d}
            className={`FilterPill ${difficulty === d ? 'active' : ''}`}
            onClick={() => onChange(d)}
          >
            {d}
          </button>
        ))}
      </div>
    </div>
  );
}
