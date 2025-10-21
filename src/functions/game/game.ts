import Ball from "./ball";
import Player from "./player";
import AI from "./ai";

/**
 *
 * @class Game
 */
export class Game implements GameInterface {
  private _canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  private ball: BallInterface;
  private player: PlayerInterface;
  private ai: PlayerInterface;

  private WINDOW_HEIGHT = 600;
  private WINDOW_WIDTH = 800;

  private player1Goal = 0;
  private player2Goal = 0;

  constructor(_canvas: HTMLCanvasElement) {
    this._canvas = _canvas;
    this.ctx = this._canvas.getContext("2d") as CanvasRenderingContext2D;
    this._canvas.width = this.WINDOW_WIDTH;
    this._canvas.height = this.WINDOW_HEIGHT;

    this.ball = new Ball(this._canvas, this.ctx);
    this.player = new Player(this._canvas, this.ctx);
    this.ai = new AI(
      this._canvas,
      this.ctx,
      this.ball,
      this.WINDOW_WIDTH,
      this.WINDOW_HEIGHT
    );
  }

  private drawText() {
    this.ctx.font = "50px Arial";
    this.ctx.fillStyle = "#fff";
    this.ctx.fillText(
      this.player1Goal.toString(),
      this.WINDOW_WIDTH / 2 - 60,
      50
    );
    this.ctx.fillText(
      this.player2Goal.toString(),
      this.WINDOW_WIDTH / 2 + 40,
      50
    );

    this.ctx.fillStyle = "#fff";
    this.ctx.shadowColor = "#fff";
    this.ctx.shadowBlur = 2;
    this.ctx.beginPath();
    this.ctx.setLineDash([5, 5]);
    this.ctx.moveTo(this.WINDOW_WIDTH / 2 + 5, 0);
    this.ctx.lineTo(this.WINDOW_WIDTH / 2 + 5, this.WINDOW_WIDTH);
    this.ctx.stroke();
  }

  private reset() {
    this.ball = new Ball(this._canvas, this.ctx);
    this.player = new Player(this._canvas, this.ctx);
    this.ai = new AI(
      this._canvas,
      this.ctx,
      this.ball,
      this.WINDOW_WIDTH,
      this.WINDOW_HEIGHT
    );

    this.ball.draw();
    this.player.draw();
    this.ai.draw();
    this.drawText();

    setTimeout(() => {
      this.start();
    }, 900);
  }

  public changeToOldStyle(oldStyle: boolean) {
    this.ball.setOldStyle(oldStyle);
    this.player.setOldStyle(oldStyle);
    this.ai.setOldStyle(oldStyle);
  }

  public start() {
    this.ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    this.ctx.fillStyle = "#000";
    this.ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);

    this.ball.getPlayersPosition(
      this.player.getPosition(),
      this.ai.getPosition()
    );

    if (this.ball.getX() <= 0) {
      this.reset();
      this.player2Goal++;
      return;
    }

    if (this.ball.getX() >= this.WINDOW_WIDTH - 10) {
      this.reset();
      this.player1Goal++;
      return;
    }

    this.ball.draw();
    this.player.draw();
    this.ai.draw();
    this.drawText();

    this.redraw();
  }

  public getCanvas() {
    return this._canvas;
  }

  public setCanvas(_canvas: HTMLCanvasElement) {
    this._canvas = _canvas;
  }

  public redraw() {
    window.requestAnimationFrame(() => {
      setTimeout(() => {
        this.start();
      }, 1);
    });
  }
}
