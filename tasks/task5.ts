/**
 *
 * Task 5 - PIXI Reel Spinner
 *
 * Objective:
 * Implement a simple reel spinner using PIXI.js. The reel should cycle through
 * an array of textures at a constant speed when `start()` is called and stop on
 * a specific texture when `stop()` is invoked. The task demonstrates knowledge
 * of PIXI containers, sprites and the ticker system in TypeScript.
 */

import * as PIXI from 'pixi.js';

interface ReelConfig {
  textures: PIXI.Texture[]; // Textures to cycle through
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

// -----------------------------------------------------------------------------
// Example usage (not part of the task implementation)
// -----------------------------------------------------------------------------

async function demo() {
  const app = new PIXI.Application({ width: 150, height: 150 });
  document.body.appendChild(app.view);

  // Create placeholder textures
  const colors = [0xff0000, 0x00ff00, 0x0000ff];
  const textures = colors.map(color => {
    const g = new PIXI.Graphics();
    g.beginFill(color).drawRect(0, 0, 100, 100).endFill();
    return app.renderer.generateTexture(g);
  });

  const reel = new Reel({ textures, symbolHeight: 100, spinSpeed: 10 });
  app.stage.addChild(reel.container);

  reel.start();
  // Stop the reel after 2 seconds on the second texture
  setTimeout(() => reel.stop(1), 2000);
}

demo();
