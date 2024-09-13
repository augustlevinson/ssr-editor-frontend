import FetchAll from "../models/FetchAll";

function DocumentList() {
  const documents = FetchAll();

  return (
    <div>
        {documents.map((doc) => (
            <h2 key={doc._id}><a href={'/docs/' + doc._id}>{doc.title}</a></h2>
        ))}
    </div>
  );
}

export default DocumentList;