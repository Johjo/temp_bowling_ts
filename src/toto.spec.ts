import { describe, it, expect } from 'vitest';

class Game {
  private totalScore: number = 0;

  roll(number: number) {
    if(number === 10) {
    }
    this.totalScore += number;
  }

  score() {
    let number = 20;
    return this.totalScore;
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
});
