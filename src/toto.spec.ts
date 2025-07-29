import { describe, it, expect } from 'vitest';

class Game {
  private rolls: number[] = [];

  roll(number: number) {
    this.rolls.push(number);
  }

  score() {
    let score = 0;
    for (let i = 0; i < this.rolls.length; i++) {
      if (this.rolls[i] === 10) {
        score += this.rolls[i + 1] + this.rolls[i + 2];
      }
      score += this.rolls[i];
    }
    return score;
  }
}

describe('coucou', () => {
  it('xxx', () => {
    const game: Game = new Game();
    for (let i = 0; i < 20; i++)
      game.roll(1);

    expect(game.score()).toBe(20);
  });

  it('', () => {
    const game: Game = new Game();
    game.roll(1);
    expect(game.score()).toBe(1);
  });

  it('', () => {
    const game: Game = new Game();
    game.roll(10);
    game.roll(1);
    game.roll(1);
    expect(game.score()).toBe(14);
  });

  it('', () => {
    const game: Game = new Game();

  });
});
