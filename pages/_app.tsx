import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next';
import { CustomAppProps } from '@/utils/types';
import { MotionConfig } from 'framer-motion';
import {
  Fira_Code,
  IBM_Plex_Sans_Thai,
  Inter,
  Sarabun,
  Space_Grotesk,
} from 'next/font/google';
import localFont from 'next/font/local';
import { FC, ReactNode, useState } from 'react';
import { ThemeProvider } from '@suankularb-components/react';
import SnackbarContext from '@/contexts/SnackbarContext';
import '@/styles/globals.css';
import Layout from '@/components/Layout';

// English fonts
const bodyFontEN = Inter({ subsets: ['latin'] });
const displayFontEN = Space_Grotesk({ subsets: ['latin'] });

// Thai fonts
const bodyFontTH = Sarabun({
  weight: ['300', '400', '500', '700'],
  subsets: ['thai'],
});
const displayFontTH = IBM_Plex_Sans_Thai({
  weight: ['300', '400', '500', '700'],
  subsets: ['thai'],
});

// Mono font
const monoFont = Fira_Code({ subsets: ['latin'] });

// Icon font
const iconFont = localFont({
  src: '../public/fonts/material-symbols.woff2',
  weight: '100 700',
  style: 'normal',
});

// Canvas code
const initCanvas = () => {
  const canvas = document.createElement('canvas');
  canvas.id = 'canvas';
  canvas.style.zIndex='2';
  canvas.style.position = 'absolute'; // Set the position to absolute
  canvas.style.top = '0'; // Adjust the top position as needed
  canvas.style.left = '0'; // Adjust the left position as needed
  document.body.appendChild(canvas);

  const c = canvas.getContext('2d');

  let mouseX
  let mouseY
  
  canvas.height = window.innerHeight
  canvas.width = window.innerWidth
  
  const canvasWidth = canvas.width
  const canvasHeight = canvas.height
  
  const maxRadius = 35
  
  window.onmousemove = function(e) {
	  mouseX = e.clientX
	  mouseY = e.clientY
  }
  
  window.addEventListener('resize', function() {
	  canvas.width = window.innerWidth
	  canvas.height = window.innerHeight
  })
  
  function Circle(xCoordinate, yCoordinate, radius) {
	  const randomNumber = Math.floor(Math.random() * 4)
	  const randomTrueOrFalse = Math.floor(Math.random() * 2)
  
	  this.xCoordinate = xCoordinate
	  this.yCoordinate = yCoordinate
	  this.radius = radius
	  this.color = colorArray[randomNumber]
  
	  if (randomTrueOrFalse == 1) {
		  this.xVelocity = -Math.random() * 1
	  } else {
		  this.xVelocity = Math.random() * 1
	  }
  
	  if (randomTrueOrFalse == 1) {
		  this.yVelocity = -Math.random() * 1
	  } else {
		  this.yVelocity = Math.random() * 1
	  }
  
	  // As distance gets closer to 0, increase radius
  
	  this.update = function() {
		  this.xCoordinate += this.xVelocity
		  const xDistance = mouseX - this.xCoordinate
		  const yDistance = mouseY - this.yCoordinate
		  const originalRadius = radius
		  this.yCoordinate += this.yVelocity
  
		  // Movement Functions
		  if (
			  this.xCoordinate + this.radius > canvasWidth ||
			  this.xCoordinate - this.radius < 0
		  ) {
			  this.xVelocity = -this.xVelocity
		  }
		  if (
			  this.yCoordinate + this.radius > canvasHeight ||
			  this.yCoordinate - this.radius < 0
		  ) {
			  this.yVelocity = -this.yVelocity
		  }
  
		  // Radius Decrease Functions
		  // When distance between circle center and mouse on horizontal axis is less than 50, increase radius until it is equal to 35
		  if (
			  xDistance < 50 &&
			  xDistance > -50 &&
			  this.radius < maxRadius &&
			  yDistance < 50 &&
			  yDistance > -50
		  ) {
			  this.radius += 2
		  } else if (
			  (xDistance >= 50 && originalRadius < this.radius) ||
			  (xDistance <= -50 && originalRadius < this.radius) ||
			  (yDistance >= 50 && originalRadius < this.radius) ||
			  (yDistance <= -50 && originalRadius < this.radius)
		  ) {
			  this.radius -= 2
		  }
  
		  this.draw()
	  }
  
	  this.draw = function() {
		  c.beginPath()
		  c.arc(
			  this.xCoordinate,
			  this.yCoordinate,
			  Math.abs(this.radius),
			  0,
			  Math.PI * 2
		  )
		  c.fillStyle = this.color
		  c.fill()
	  }
  }
  
  const colorArray = ['rgba(235,105,90,1)', 'rgba(233,132,98,1)', 'rgba(99,112,185,1)', 'rgba(161,100,153,1)']
  const myCircle = new Circle(30, 80, 10)
  let circleArray = []
  
  for (let i = 0; i < 800; i++) {
	  const randomXCoordinate = Math.random() * canvasWidth
	  const randomYCoordinate = Math.random() * canvasHeight
	  const randomRadius = Math.random() * 5
	  circleArray.push(
		  new Circle(randomXCoordinate, randomYCoordinate, randomRadius)
	  )
  }

function animate() {
	
	c.clearRect(0, 0, canvasWidth, canvasHeight)
    myCircle.update()
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update()
    }
    requestAnimationFrame(animate)
}
if (window.innerHeight<window.innerWidth){
  animate();
}

};

/**
 * To prevent the App component from being more of a triangle than it already
 * is, all the context providers are extracted into this component.
 *
 * @param children The app that uses contexts.
 *
 * @returns The app wrapped with context providers.
 */
const Contexts: FC<{ children: ReactNode }> = ({ children }) => {
  const [snackbar, setSnackbar] = useState<JSX.Element | null>(null);

  return (
    <SnackbarContext.Provider value={{ snackbar, setSnackbar }}>
      {/* Add more contexts here */}
      {children}
    </SnackbarContext.Provider>
  );
};

function App({ Component, pageProps }: CustomAppProps) {
  const router = useRouter();
  const { fab, pageHeader, childURLs } = Component;

  useEffect(() => {
    if (router.pathname === '/welcome') {
      initCanvas();
    }

    return () => {
      const canvas = document.getElementById('canvas');
      if (canvas) {
        document.body.removeChild(canvas);
      }
    };
  }, [router.pathname]);

  return (
    <>
      <style jsx global>{`
        :root {
          --font-body: -apple-system, BlinkMacSystemFont,
            ${bodyFontEN.style.fontFamily}, ${bodyFontTH.style.fontFamily};
          --font-display: ${displayFontEN.style.fontFamily},
            ${displayFontTH.style.fontFamily};
          --font-mono: ui-monospace, SFMono-Regular, SF Mono,
            ${monoFont.style.fontFamily}, ${bodyFontTH.style.fontFamily};
          --font-icon: ${iconFont.style.fontFamily};
        }
      `}</style>

      <Contexts>
        <MotionConfig reducedMotion="user">
          <ThemeProvider>
            <Layout {...{ fab, pageHeader, childURLs }}>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </MotionConfig>
      </Contexts>
    </>
  );
}

export default appWithTranslation(App);
