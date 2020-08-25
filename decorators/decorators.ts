@classDecorator
class Boat {
  @testDecorator
  color: string = "red";
  get formatedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @logError("Boat was sunk")
  // @testDecorator
  pilot(): void {
    throw new Error();
  }
  stop(@parameterDecorator speed: string): void {
    if (speed === "fast") {
      console.log("Moving fast");
    } else {
      console.log("stop");
    }
  }
}

//can't access property value only the name, for value we need instance of the class
function testDecorator(target: any, key: string): void {
  console.log("Target: ", target);
  console.log("Key:", key);
}
function parameterDecorator(target: any, key: string, index: number) {
  console.log(target, "\nKey: ", key, "\nIndex: ", index);
}

function classDecorator(constructor: typeof Boat) {
  console.log("Constructor: ", constructor);
}

//decorator factory
function logError(message: string) {
  return function (target: any, key: string, desk: PropertyDescriptor): void {
    const method = desk.value;
    desk.value = function () {
      try {
        method();
      } catch (error) {
        console.log(message);
      }
    };
  };
}

///
testDecorator(Boat.prototype, "pilot");

new Boat().pilot();
