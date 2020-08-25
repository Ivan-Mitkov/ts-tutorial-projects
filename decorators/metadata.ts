import "reflect-metadata";
//https://www.typescriptlang.org/docs/handbook/decorators.html
const plane = {
  color: "red",
};

// additional design-time type information will be exposed at runtime.
Reflect.defineMetadata("note", "hi there", plane);

console.log(plane);

const metaDataPlane = Reflect.getMetadata("note", plane);

console.log(metaDataPlane);

Reflect.defineMetadata("pr", "color-black", plane, "color");

const colorMetadata = Reflect.getMetadata("pr", plane, "color");
const colorMetadata2 = Reflect.getMetadata("pr", plane); //undefined

console.log(colorMetadata);
console.log(colorMetadata2);

/////use for class
@printMetadata
class Plane {
  color: string = "red";

  @markFunction("crashhhhh")
  fly(): void {
    console.log("Бръм, Бръм, Бръъъъммммммммм");
  }
}

function markFunction(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata("secret", secretInfo, target, key);
  };
}

const secret = Reflect.getMetadata("secret", Plane.prototype, "fly");
console.log("function: ", secret);

function printMetadata(target: typeof Plane): void {
  for (const key in target.prototype) {
    const secret = Reflect.getMetadata("secret", target.prototype, key);
    console.log("class: ", secret);
  }
}
