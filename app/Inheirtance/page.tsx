import React from 'react'

class Human {
  protected Name: string
  constructor(name: string) {
    this.Name = name
  }
  // Base class method
  identify(): string {
    return `I AM ${this.Name}`
  }
}

class WOMan extends Human {
  private pname: string
  private age: number

  constructor(name: string, age: number) {
    super(name) // Calling the constructor of the base class parent constructor is called first then the child
    this.pname = name
    this.age = age
  }
  increaseage(increase?: number): void {
    if (increase === undefined) {
      this.age += 1
    } else {
      this.age += increase
    }
  }
}

const Inheritance = () => {
  const female = new WOMan('DORA', 22)

  return <div>{female.identify()}</div>
}

export default Inheritance
