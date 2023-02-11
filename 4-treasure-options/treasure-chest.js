let TreasureChest = (function () {
  function Constructor(options = {}) {
    let { bronze, silver, gold, loot } = Object.assign(
      {
        bronze: 0,
        silver: 0,
        gold: 0,
        loot: `You have {{gold}} gold, {{silver}} silver, and {{bronze}} bronze.`,
      },
      options,
    );

    // instance properties
    Object.defineProperties(this, {
      bronze: {
        value: bronze,
        writable: true,
      },
      silver: {
        value: silver,
        writable: true,
      },
      gold: {
        value: gold,
        writable: true,
      },
      _loot: {
        value: loot,
      },
    });
  }

  Constructor.prototype.getLoot = function () {
    return this._loot
      .replace('{{gold}}', this.gold)
      .replace('{{silver}}', this.silver)
      .replace('{{bronze}}', this.bronze);
  };

  function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  Constructor.prototype.addBronze = function (n) {
    this.bronze += n;
    return this;
  };

  Constructor.prototype.addSilver = function (n) {
    this.silver += n;
    return this;
  };

  Constructor.prototype.addGold = function (n) {
    this.gold += n;
    return this;
  };

  Constructor.prototype.getLoot = function () {
    return `You have ${this.gold} gold, ${this.silver} silver, and ${this.bronze} bronze.`;
  };

  Constructor.getRandomLoot = function () {
    let amount = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    ];
    let type = ['bronze', 'silver', 'gold'];

    shuffle(amount);
    shuffle(type);

    return {
      amount: amount[0],
      type: type[0],
    };
  };

  return Constructor;
})();

// Create an instance with starting loot
let captain = new TreasureChest({
  gold: 12,
  bronze: 4,
  loot: '{{gold}}g - {{silver}}s - {{bronze}}b',
});

typeof captain; //?
captain; //?
captain.gold; //?
let loot = captain.addGold(8).addSilver(24).addBronze(37).getLoot();
loot; //?
