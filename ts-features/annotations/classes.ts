abstract class Vehicle {
  constructor(public color: string) {
    this.color = this.color.toLowerCase();
  }

  protected honk(): void {
    console.log(`Beep!`);
  }
}

class Motorcycle extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log(
      `this ${this.color} ${this.wheels} wheels Motorcycle is driving!`
    );
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const motorcycle = new Motorcycle(2, 'Black');
motorcycle.startDrivingProcess();
