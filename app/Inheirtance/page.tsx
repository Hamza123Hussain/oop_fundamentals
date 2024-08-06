import React from 'react'

// Base class Human
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

// Derived class WOMan
class WOMan extends Human {
  private pname: string
  private age: number

  constructor(name: string, age: number) {
    super(name) // Calling the constructor of the base class
    // Parent constructor is called first, then the child
    this.pname = name
    this.age = age
  }

  // Method to increase age
  increaseage(increase?: number): void {
    if (increase === undefined) {
      this.age += 1
    } else {
      this.age += increase
    }
  }
}

// Functional component Inheritance
const Inheritance = () => {
  // Creating an instance of WOMan
  const female = new WOMan('DORA', 22)

  // Rendering the identify method result
  return <div>{female.identify()}</div>
}

export default Inheritance

/*
Inheritance in TypeScript:
Inheritance is a fundamental concept in object-oriented programming that allows a class to inherit properties and methods from another class. The class that is inherited from is called the "base class" or "superclass," and the class that inherits is called the "derived class" or "subclass."


Key Points of Inheritance:
- The `super` keyword is used to call the constructor of the base class.
- The derived class inherits all public and protected members of the base class.
- Inheritance promotes code reusability by allowing common functionality to be defined in a base class and extended or customized in derived classes.

Types of Inheritance:
1. Single Inheritance: A class inherits from one base class.
2. Multiple Inheritance: A class inherits from more than one base class (not directly supported in TypeScript, but can be achieved using interfaces).
3. Multilevel Inheritance: A class inherits from a derived class, forming a chain.
4. Hierarchical Inheritance: Multiple classes inherit from a single base class.
5. Hybrid Inheritance: A combination of two or more types of inheritance (can be complex and is typically avoided).

In this example, we demonstrate single inheritance where the `WOMan` class inherits from the `Human` class.
*/
