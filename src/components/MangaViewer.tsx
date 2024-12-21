import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import webtoonsImages from '../data/webtoonsImages';
import { Manga } from '../types';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Counter from 'yet-another-react-lightbox/plugins/counter';

const MangaViewer: React.FC = () => {
  const { id, chapterNumber } = useParams<{ id: string; chapterNumber: string }>();

  // Parse params safely
  const mangaId = id ? parseInt(id) : -1;
  const chapterNum = chapterNumber ? parseInt(chapterNumber) : -1;

  const manga: Manga | undefined = webtoonsImages[mangaId];
  const chapter = manga?.chapters.find((ch) => ch.chapterNumber === chapterNum);

  // Handle invalid mangaId or chapterNum
  if (!manga || !chapter) {
    return <div className="text-center text-red-500">Chapter not found</div>;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentPage, setCurrentPage] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentPage(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold mb-16 py-16 text-center">
        {manga.title} <span className="text-[#742786]">{chapter.title}</span>
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 gap-4">
        {chapter.pages.map((page, index) => (
          <img
            key={index}
            src={page}
            alt={`Page ${index + 1}`}
            className="rounded-lg cursor-pointer"
            onClick={() => openLightbox(index)} // Open clicked image in lightbox
          />
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
        open={isOpen}
        close={closeLightbox}
        slides={chapter.pages.map((page) => ({ src: page }))}
        index={currentPage}
        plugins={[Fullscreen, Slideshow,Counter , Zoom]}
        on={{
          view: ({ index }) => setCurrentPage(index), // Extract 'index' from the callback argument
        }}
      />
      
      )}
    </div>
  );
};

export default MangaViewer;
