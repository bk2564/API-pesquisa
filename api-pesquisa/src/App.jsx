import React, { useState } from 'react';

export function Pesquisa({ onSearch }) {
  const [query, setQuery] = useState('');

  return (
    <section className="mb-8 bg-gray-100 rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4">🔍 Pesquisa</h2>

      <div className="flex gap-4">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Pesquisar no conteúdo dos PDFs…"
          className="flex-1 px-4 py-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <button
          onClick={() => onSearch(query)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Pesquisar
        </button>
      </div>
    </section>
  );
}