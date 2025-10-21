import Player from "./player";

/**
 *
 * @class Ball
 *
 */
class Ball implements BallInterface {
  private _canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  private _x = 0;
  private _y = 0;
  private speedX = Math.random() < 0.3 ? -1 : 1;
  private speedY = Math.random() < 0.3 ? -1 : 1;
  private player1: PositionInterface = { _x: 0, _y: 0 };
  private player2: PositionInterface = { _x: 0, _y: 0 };
  private song = false;
  private sprite: CanvasImageSource;
  private oldStyle = false;

  /**
   *
   * @param _canvas Canvas Element
   * @param ctx Canvas Render
   */
  constructor(_canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this._canvas = _canvas;
    this.ctx = ctx;

    this._x = this._canvas.width / 2;
    this._y = this._canvas.height / 2;

    this.sprite = new Image();
    this.sprite.src = require("../../assets/images/sprite.png");
  }

  public getPlayersPosition(
    Player1: PositionInterface,
    Player2: PositionInterface
  ) {
    // throw new Error("Method not implemented.");
    this.player1 = Player1;
    this.player2 = Player2;
  }

  public draw() {
    this.move();

    if (this.oldStyle) {
      this.ctx.fillStyle = "#4f4";
      this.ctx.fillRect(this._x, this._y, 10, 10);
    } else {
      this.ctx.drawImage(this.sprite, 20, 0, 40, 80, this._x, this._y, 45, 90);
    }
  }

  public getOldStyle() {
    return this.oldStyle;
  }

  public setOldStyle(oldStyle: boolean) {
    this.oldStyle = oldStyle;
  }

  public getX() {
    return this._x;
  }

  public getY() {
    return this._y;
  }

  public move() {
    this._x -= this.speedX;
    this._y -= this.speedY;

    /**
     *
     * @desc if the ball touchs the "walls"
     *
     */
    if (this._x <= 0) {
      this.speedX = -1;

      console.log("Point for player 2");
    }

    if (this._x + 10 >= this._canvas.width) {
      this.speedX = 1;

      console.log("Point for player 1");
    }

    if (this._y <= 0 || this._y + 10 >= this._canvas.height) {
      this.speedY = this.invert(this.speedY);
    }

    /**
     *
     * @desc if the ball touch the players, it will
     * invert the values
     *
     */
    if (
      (this._x <= this.player1._x + 10 &&
        this._y <= this.player1._y + 50 &&
        this._y >= this.player1._y) ||
      (this._x >= this.player2._x - 10 &&
        this._y <= this.player2._y + 50 &&
        this._y >= this.player2._y)
    ) {
      this.speedX = this.invert(this.speedX);
    }
  }

  private invert(position: number): number {
    this.playSong();
    return (position = position * -1);
  }

  private playSong() {
    let audio = new Audio(
      this.song
        ? require("../../assets/audio/1.mp3")
        : require("../../assets/audio/2.mp3")
    );

    audio.play();

    this.song = !this.song;
  }
}

export default Ball;
