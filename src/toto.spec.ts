import { describe, it, expect } from 'vitest';

class Game {
  roll(number: number) {

  }

  score() {
    let number = 20;
    return number;
  }
}

describe('coucou', () => {
  it('xxx', () => {
    const game: Game = new Game();
    for (let i = 0; i < 20; i++)
      game.roll(1);

    expect(game.score()).toBe(20);
  });
});
