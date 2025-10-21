import Player from "./player";

class AI extends Player {
  private ball: BallInterface;
  private window_width: number;
  private window_height: number;

  constructor(
    _canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    ball: BallInterface,
    window_width: number,
    window_height: number
  ) {
    super(_canvas, ctx, false);

    this._x = 780;

    this.ball = ball;
    this.window_width = window_width;
    this.window_height = window_height;
  }

  public draw() {
    super.draw();

    if (this.ball.getX() >= this.window_width / 1.5) {
      if (this.ball.getY() > 200) {
        this._y += this.ball.getY() > this.window_height / 2 ? 2 : 2 / -2;
      } else if (
        this.ball.getX() > this.window_height / 2 &&
        this.ball.getY() < 30
      ) {
        this._y += 2;
      } else if (
        this.ball.getX() > this.window_height / 3 &&
        this.ball.getY() < this.window_height - 50
      ) {
        this._y -= 2;
      }

      this.limit();
    } else {
      if (this._y !== this.window_height / 2 + 50) {
        this._y += this._y > this.window_height / 2 ? -1 : 1;

        this.limit();
      }
    }
  }

  private limit() {
    if (this._y <= 0) {
      this._y = 0;
    }

    if (this._y >= this.window_height - 50) {
      this._y = this.window_height - 50;
    }
  }
}

export default AI;
