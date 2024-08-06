import React from 'react'

// Abstract class defining the blueprint
abstract class Person {
  protected pname: string
  protected age: number

  constructor(name: string, age: number) {
    this.pname = name
    this.age = age
  }

  // Abstract method to be implemented by subclasses
  abstract getName(): string

  // Abstract method to be implemented by subclasses
  abstract getAge(): number

  // Concrete method that can be used as is
  public setName(name: string) {
    this.pname = name
  }
}

// Concrete class extending the abstract class
class Man extends Person {
  constructor(name: string, age: number) {
    super(name, age)
  }

  // Providing concrete implementation of the abstract methods
  public getName(): string {
    return this.pname
  }

  public getAge(): number {
    return this.age
  }
}

const Abstraction = () => {
  const person1 = new Man('Hamza', 22)

  return <div>{person1.getName()}</div>
}

export default Abstraction
