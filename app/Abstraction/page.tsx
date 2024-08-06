import React from 'react'

abstract class Vehicle {
  protected cartype: string
  constructor(type: string) {
    this.cartype = type
  }

  abstract gettypea(): String

  abstract settype(type: string): void
}

class Car extends Vehicle {
  constructor(type: string) {
    super(type)
  }

  // Concrete implementation of the abstract methods
  public gettypea(): String {
    return this.cartype
  }
  public settype(type: string): void {
    this.cartype = type
  }
}
const Abstraction = () => {
  const person1 = new Car('Car')

  return <div>{person1.gettypea()}</div>
}

export default Abstraction
/**Abstract Methods Implementation:

Renamed the abstract method gettypea to getType to match the method name in Car.
The method getType in Car now returns the cartype value.
Attribute Access:

Changed cartype to protected so that it can be accessed in the Car subclass.
Instance and Rendering:

Created an instance of Car, used setType to modify the cartype, and displayed the result using getType in the React component.
This code demonstrates abstraction by defining an abstract Vehicle class with essential methods and creating a concrete Car class that provides specific implementations. */
