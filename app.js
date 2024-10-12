var pet = {
  name: "mano",
  type: "cat",
  age: 1,
  happiness: 80,
  hunger: 50,
  fed: function () {
    this.hunger = this.hunger - 20;
    if (this.hunger < 0) {
      this.hunger = 0;
    }
    alert(`${this.name} has been fed! Hunger level: ${this.hunger}`);
  },
  play: function () {
    this.happiness += 20;
    if (this.happiness > 100) {
      this.happiness = 100;
    }
    this.hunger += 10; // Pet gets hungry after playing
    alert(
      `${this.name} is happy! Happiness level: ${this.happiness}. Hunger level: ${this.hunger}`
    );
  },
  agePet: function () {
    this.age += 1;
    this.happiness -= 5;
    this.hunger += 10;
    alert(
      `${this.name} has aged! Age: ${this.age}, Happiness: ${this.happiness}, Hunger: ${this.hunger}`
    );
  },
};

function playWithPet() {
  pet.fed();
}
playWithPet();
