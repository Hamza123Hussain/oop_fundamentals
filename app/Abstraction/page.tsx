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
