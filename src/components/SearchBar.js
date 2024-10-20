import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button } from 'reactstrap';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="d-flex">
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies..."
        className="me-2"
      />
      <Button color="primary" type="submit">Search</Button>
    </Form>
  );
};

export default SearchBar;