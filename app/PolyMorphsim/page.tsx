import React from 'react'

class Human {
  // Base class method
  identify(): string {
    return 'I AM human'
  }
}

class Man extends Human {
  // Overriding the base class method
  identify(): string {
    return 'I AM MAN'
  }
}

class WOMan extends Human {
  private pname: string
  private age: number

  constructor(name: string, age: number) {
    super() // Calling the constructor of the base class
    this.pname = name
    this.age = age
  }

  // Overriding the base class method
  identify(): string {
    return 'I AM WOMAN'
  }

  // Method overloads
  increaseage(): void
  increaseage(increase: number): void

  // Single method implementation handling both overloads
  increaseage(increase?: number): void {
    if (increase === undefined) {
      this.age += 1 // Increase age by 1 if no argument is provided
    } else {
      this.age += increase // Increase age by the specified number
    }
  }
}

const Polymorphsim = () => {
  const individual = new Human()
  const male = new Man()
  const female = new WOMan('DORA', 22)

  return (
    <div>
      {individual.identify()} {/* Calls identify() of Human */}
      {male.identify()} {/* Calls identify() of Man */}
      {female.identify()} {/* Calls identify() of WOMan */}
    </div>
  )
}

export default Polymorphsim

/*
Polymorphism in TypeScript:
Polymorphism is a feature of object-oriented programming that allows objects to be treated as instances of their parent class rather than their actual class. It enables a single interface to represent different underlying forms (data types). In the above code, polymorphism is demonstrated through method overriding, where the `identify` method is overridden in both `Man` and `WOMan` classes to provide specific implementations.

Types of Polymorphism:
1. Compile-time Polymorphism (Method Overloading): This is achieved when multiple methods have the same name but different parameters. TypeScript simulates this by allowing multiple method signatures and a single implementation.
2. Run-time Polymorphism (Method Overriding): This is achieved when a subclass provides a specific implementation of a method that is already defined in its superclass. In the above code, the `identify` method is overridden in the `Man` and `WOMan` classes to provide different behaviors.
*/
