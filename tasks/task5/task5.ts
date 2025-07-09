/**
 *
 * Task 5 - PIXI Reel Spinner
 *
 * Objective:
 * Implement a simple reel spinner using PIXI.js. The reel should cycle through
 * an array of textures at a constant speed when `start()` is called and stop on
 * a specific texture when `stop()` is invoked.
 * 
 * Getting Started:
 * 1. Install dependencies:
 *    - `npm ci`
 * 2. Run the development server:
 *    - `npm start`
 * 3. Open the application in your browser.
 *    - `http://localhost:1234`
 * 
 */

import * as PIXI from 'pixi.js';

interface ReelConfig {
  textures: PIXI.Texture[]; // Textures for each symbol
  symbolHeight: number;     // Height of each symbol
  spinSpeed: number;        // Vertical speed in pixels per frame
}

class Reel {
  public container: PIXI.Container;
  private sprites: PIXI.Sprite[] = [];
  private ticker: PIXI.Ticker = new PIXI.Ticker();
  private spinning = false;

  constructor(private config: ReelConfig) {
    this.container = new PIXI.Container();
    // TODO: Create a sprite for each texture and stack them vertically
  }

  /** Start spinning the reel */
  start() {
    // TODO: Move sprites by `spinSpeed` every tick until stop() is called
  }

  /** Stop the reel on the given texture index */
  async stop(finalIndex: number): Promise<void> {
    // TODO: Gradually decelerate and align sprites so that `finalIndex` appears in view
    // Resolve the promise once the reel has stopped
  }
}

async function demo() {
  const app = new PIXI.Application();
  await app.init({ width: 1024, height: 800 });
  document.body.appendChild(app.canvas);

  // Load PNG textures using Parcel's url prefix
  const textures = await Promise.all([
    PIXI.Assets.load(new URL('./J.png', import.meta.url).href),
    PIXI.Assets.load(new URL('./K.png', import.meta.url).href),
    PIXI.Assets.load(new URL('./Q.png', import.meta.url).href),
    PIXI.Assets.load(new URL('./A.png', import.meta.url).href)
  ]);

  // Display textures in the app.stage for visibility
  // @TODO Remove this part in the final implementation
  textures.forEach((texture: PIXI.Texture, index: number) => {
    const sprite = new PIXI.Sprite(texture);
    sprite.x = index * 256;
    sprite.y = 256;
    app.stage.addChild(sprite);
  });

  const reel = new Reel({ textures, symbolHeight: 100, spinSpeed: 10 });
  app.stage.addChild(reel.container);

  // Start the reel spinning
  reel.start();
  // Stop the reel after 2 seconds on the second texture
  setTimeout(() => reel.stop(1), 2000);
}

demo();
