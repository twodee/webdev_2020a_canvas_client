import React, {useRef, useEffect, useMemo, useCallback} from 'react';
import './App.css';

function App() {
  const canvas = useRef();
  const image = useRef();

  // One-time setup
  useEffect(() => {
    const resize = () => {
      canvas.current.width = window.innerWidth;
      canvas.current.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    return () => window.removeEventListener('resize', resize);
  }, []);


  const addRandomRectangle = () => {
    const size = 100;
    const context = canvas.current.getContext('2d');
    context.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    const width = Math.random() * size + 50;
    const height = Math.random() * size + 50;
    context.fillRect(Math.random() * (canvas.current.width - width), Math.random() * (canvas.current.height - height), width, height);
  };

  const save = () => {
    const png = canvas.current.toDataURL();
    image.current.src = png;
  };

  return (
    <div>
      <canvas id="canvas" ref={canvas}></canvas>
      <img id="preview" ref={image}></img>
      <div id="buttons">
        <button id="add-button" onClick={addRandomRectangle}>add random rectangle</button>
        <button id="save-button" onClick={save}>save</button>
      </div>
    </div>
  );
}

export default App;
