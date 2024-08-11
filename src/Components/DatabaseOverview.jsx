import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = '/.netlify/functions/api';

const useApi = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_BASE_URL}${endpoint}`);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(`Error fetching ${endpoint.slice(1)}. Please try again later.`);
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};

const TopicList = ({ topics }) => (
  <div className="bg-white shadow rounded-lg p-6">
    <h2 className="text-2xl font-semibold mb-4">Topics</h2>
    <ul className="divide-y">
      {topics.map((topic) => (
        <li key={topic.TopicID} className="py-2">
          <h3 className="font-medium">{topic.TopicName}</h3>
          <p className="text-sm text-gray-600">{topic.Description}</p>
          <p className="text-xs text-gray-400">Created: {new Date(topic.CreatedAt).toLocaleString()}</p>
        </li>
      ))}
    </ul>
  </div>
);

const NoteList = ({ notes, onDeleteNote }) => (
  <div className="bg-white shadow rounded-lg p-6">
    <h2 className="text-2xl font-semibold mb-4">Notes</h2>
    <ul className="divide-y">
      {notes.map((note) => (
        <li key={note.NoteID} className="py-2 flex justify-between items-start">
          <div>
            <h3 className="font-medium">{note.Title}</h3>
            <p className="text-sm text-gray-600">{note.Content.substring(0, 100)}...</p>
            {note.VideoLink && (
              <a href={note.VideoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-sm">
                Video Link
              </a>
            )}
            <p className="text-xs text-gray-400">
              Created: {new Date(note.CreatedAt).toLocaleString()}
              {note.UpdatedAt && ` | Updated: ${new Date(note.UpdatedAt).toLocaleString()}`}
            </p>
          </div>
          <button
            onClick={() => onDeleteNote(note.NoteID)}
            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition-colors"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);

const TagList = ({ tags }) => (
  <div className="bg-white shadow rounded-lg p-6">
    <h2 className="text-2xl font-semibold mb-4">Tags</h2>
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li key={tag.TagID} className="bg-gray-200 rounded-full px-3 py-1 text-sm">
          {tag.TagName}
        </li>
      ))}
    </ul>
  </div>
);

const NoteTagList = ({ noteTags }) => (
  <div className="bg-white shadow rounded-lg p-6">
    <h2 className="text-2xl font-semibold mb-4">Note Tags</h2>
    <ul className="divide-y">
      {noteTags.map((noteTag) => (
        <li key={`${noteTag.NoteID}-${noteTag.TagID}`} className="py-2">
          <p>Note ID: {noteTag.NoteID}</p>
          <p>Tag ID: {noteTag.TagID}</p>
        </li>
      ))}
    </ul>
  </div>
);

const DatabaseOverview = () => {
  const { data: topics, loading: topicsLoading, error: topicsError } = useApi('/topics');
  const { data: notes, loading: notesLoading, error: notesError } = useApi('/notes');
  const { data: tags, loading: tagsLoading, error: tagsError } = useApi('/tags');
  const { data: noteTags, loading: noteTagsLoading, error: noteTagsError } = useApi('/note-tags');

  const [error, setError] = useState(null);

  const deleteNote = async (noteId) => {
    try {
      await axios.delete(`${API_BASE_URL}/notes/${noteId}`);
      // Update the notes state after successful deletion
      const updatedNotes = notes.filter(note => note.NoteID !== noteId);
      // We need to update the notes state here, which might require lifting the state up
      // or using a state management solution like Redux or React Query
    } catch (err) {
      setError('Error deleting note. Please try again later.');
    }
  };

  if (topicsLoading || notesLoading || tagsLoading || noteTagsLoading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (topicsError || notesError || tagsError || noteTagsError || error) {
    return <div className="text-center p-4 text-red-500">{topicsError || notesError || tagsError || noteTagsError || error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Database Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TopicList topics={topics} />
        <NoteList notes={notes} onDeleteNote={deleteNote} />
        <TagList tags={tags} />
        <NoteTagList noteTags={noteTags} />
      </div>
    </div>
  );
};

export default DatabaseOverview;