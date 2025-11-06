"use client";

import ArchiveBoard from "./archiveboard";
import { useEffect } from "react";

export default function ArchiveBoardPage() {
  useEffect(() => {
    // Force the background color with higher specificity for both light and dark modes
    const style = document.createElement('style');
    style.textContent = `
      body, html, #__next, .archive-board-page {
        background-color: #e7e7eb !important;
      }
      .dark body, .dark html, .dark #__next, .dark .archive-board-page {
        background-color: #020a0a !important;
      }
      .archive-board-page * {
        background-color: transparent !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="archive-board-page w-full h-full" style={{ backgroundColor: '#e7e7eb' }}>
      <ArchiveBoard />
    </div>
  );
}