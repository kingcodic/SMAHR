export interface Chapter {
    chapterNumber: number;
    title: string;
    pages: string[];
  }
  
  export interface Manga {
    id: number;
    title: string;
    author: string;
    image: string;
    description: string;
    genre: string[];
    chapters: Chapter[];
  }
  