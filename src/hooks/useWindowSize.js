// CUSTOM HOOK - solo podemos llamar hooks dentro de componentes react, o dentro de custom hooks, NUNCA dentro de bloques if, loops, o funciones standard de js. En archivo es un custom hook para leer el tamaño de la pantalla

import { useState, useEffect } from 'react';


// HOOK: useWindowsSize()
const useWindowSize = () => {
  const [windowsSize, setWindowsSize] = useState({
    width: undefined,
    height: undefined
  });

  useEffect(() => {

    const handleResize = () => { // Funcion que lee w y h del windows y asigna windowsSize
      setWindowsSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    handleResize(); // 1 Call at load time

    window.addEventListener('resize', handleResize); // Resize listener added

    // Call cleanup via return
    return () => window.removeEventListener('resize', handleResize);  

  },[]);

  return windowsSize; // El hook devuelve un objeto con las props width y height (del viewport)

}

export default useWindowSize
