import React, { useEffect, useRef } from 'react';
import { Viewer } from 'photo-sphere-viewer';
import 'photo-sphere-viewer/dist/photo-sphere-viewer.css';

const PanoramaViewer = () => {
  const containerRef = useRef(null);
  const viewerRef = useRef(null);

  useEffect(() => {
    viewerRef.current = new Viewer({
      container: containerRef.current,
      panorama: '/360/PANO0002_1.jpg',
      defaultZoomLvl: 50,
      navbar: ['zoom', 'fullscreen'],
      loadingTxt: 'Cargando...',
    });

    return () => {
      viewerRef.current?.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: '100%', maxWidth: '800px', height: '500px', border: '1px solid #ccc' }}
    />
  );
};

export default PanoramaViewer;
