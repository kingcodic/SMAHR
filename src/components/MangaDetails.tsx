import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import webtoonsImages from '../data/webtoonsImages';
import { Manga } from '../types';

const MangaDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Ensure id is valid and parse it
  const mangaId = id ? parseInt(id) : -1;
  const manga: Manga | undefined = webtoonsImages[mangaId];

  // Handle invalid mangaId
  if (!manga) {
    return <div className="text-center text-red-500">Manga not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex bg-slate-200 p-16 flex-col md:flex-row items-start md:items-center gap-6 justify-around">
        <img src={manga.image} alt={manga.title} className="w-[30vw] rounded-lg shadow-md" />
        <div>
          <h1 className="text-6xl my-5 text-[#148da1] font-bold">{manga.title}</h1>
          <p className="text-white bg-[#148da1] text-xl p-3 uppercase mb-4">{manga.author}</p>
          <p>{manga.description}</p>
          <h3 className="mt-6 text-xl uppercase font-bold">Chapters</h3>
          <ul className="mt-4">
            {manga.chapters.map((chapter, index) => (
              <li
                key={index}
                className="cursor-pointer text-white bg-purple-600 p-3 border-2 border-white hover:bg-purple-950 hover:scale-105 transtion duration-300"
                onClick={() => navigate(`/manga/${mangaId}/chapter/${chapter.chapterNumber}`)}
              >
                {chapter.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MangaDetails;
