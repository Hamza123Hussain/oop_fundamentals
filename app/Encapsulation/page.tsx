import React from 'react'

const Encapsulation = () => {
  class Person {
    // Private attributes (encapsulation in action)
    private pname: string
    private age: number

    // Constructor to initialize attributes
    constructor(name: string, age: number) {
      this.pname = name
      this.age = age
    }

    // Public method to get the name
    public getName(): string {
      return this.pname
    }

    // Public method to get the age
    public getAge(): number {
      return this.age
    }

    // Public method to set a new name (encapsulation)
    public setName(name: string) {
      this.pname = name
    }
  }

  // Creating an instance of the Person class
  const Person1 = new Person('Hamza', 22)

  return <div>{Person1.getName()}</div>
}

export default Encapsulation
