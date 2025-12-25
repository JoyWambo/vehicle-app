// Define Vehicle interface
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// Implement Car class that implements Vehicle interface
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getInfo(): string {
    return `${this.year} ${this.make} ${this.model}`;
  }

  start(): void {
    console.log("Car engine started");
  }
}

// Create an instance of Car class (2024 Toyota Camry)
const myCar = new Car("Toyota", "Camry", 2024);

// Print vehicle info then start
console.log(`Vehicle Info: ${myCar.getInfo()}`);
myCar.start();
