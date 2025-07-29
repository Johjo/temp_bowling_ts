import { describe, it, expect } from 'vitest';

class Game {
  private rolls: number[] = [];

  roll(number: number) {
    this.rolls.push(number);
  }

  score() {
    let score = 0;
    let rollNumber = 0;
    for (let frameNumber = 0; frameNumber < 10; frameNumber++) {
      if (this.isStrike(rollNumber)) {
        score += this.rolls[rollNumber] + (this.rolls[rollNumber + 1] + this.rolls[rollNumber + 2]);
        rollNumber += 1;
      } else if (this.isSpare(rollNumber)) {
        score += this.rolls[rollNumber] + this.rolls[rollNumber + 1] + (this.rolls[rollNumber + 2]);
        rollNumber += 2;
      } else {
        score += this.rolls[rollNumber] + this.rolls[rollNumber + 1];
        rollNumber += 2;
      }
    }
    return score;
  }

  private isSpare(rollNumber: number) {
    return this.rolls[rollNumber] + this.rolls[rollNumber + 1] === 10;
  }

  private isStrike(rollNumber: number) {
    return this.rolls[rollNumber] === 10;
  }
}

describe('coucou', () => {
  it('xxx', () => {
    const game: Game = new Game();
    for (let i = 0; i < 20; i++)
      game.roll(1);

    expect(game.score()).toBe(20);
  });
  it('xxx', () => {
    const game: Game = new Game();
    for (let i = 0; i < 20; i++)
      game.roll(2);

    expect(game.score()).toBe(40);
  });

  it('xxx', () => {
    const game: Game = new Game();
    game.roll(5);
    game.roll(5);
    for (let i = 0; i < 18; i++)
      game.roll(1);

    expect(game.score()).toBe(29);
  });

  it('xxx', () => {
    const game: Game = new Game();
    game.roll(10);
    for (let i = 0; i < 18; i++)
      game.roll(1);

    expect(game.score()).toBe(30);
  });

  it('xxx', () => {
    const game: Game = new Game();
    game.roll(9);
    game.roll(1);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);

    expect(game.score()).toBe(290);
  });

  it('xxx', () => {
    const game: Game = new Game();
    game.roll(10);
    game.roll(0);
    game.roll(1);
    for (let i = 0; i < 17; i++)
      game.roll(0);

    expect(game.score()).toBe(12);
  });

});
