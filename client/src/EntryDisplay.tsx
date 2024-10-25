import { FaPencil } from 'react-icons/fa6';
import { Entry } from './data';
import { Link } from 'react-router-dom';

type EntryProp = {
  entry: Entry;
};

export function EntryDisplay({ entry }: EntryProp) {
  return (
    <li>
      <div className="row">
        <div className="column-half">
          <div className="list-image-wrapper">
            <img src={entry.photoUrl}></img>
          </div>
        </div>
        <div className="column-half">
          <h2>{entry.title}</h2>
          <Link to={`/entry-form/${entry.entryId}`}>
            <FaPencil />
          </Link>

          <p>{entry.notes}</p>
        </div>
      </div>
    </li>
  );
}