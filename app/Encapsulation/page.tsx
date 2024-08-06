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
// Encapsulation Notes:
// Private Attributes:

// private pname: string; and private age: number; are private attributes of the Person class. They cannot be accessed directly from outside the class. This encapsulation ensures that the internal state of the object is protected and only accessible through public methods.
// Public Methods:

// public getName() and public getAge() are public methods that provide controlled access to the private attributes. These methods allow external code to interact with the Person object without directly manipulating its internal state.
// public setName(name: string) is a public method that allows updating the pname attribute. This method maintains encapsulation by providing a controlled way to change the private attribute.
// Controlled Access:

// Encapsulation helps in controlling how the internal state of the object is accessed and modified. By using public methods to interact with private attributes, you can enforce validation or other rules when updating the object's state.
// Object Integrity:

// Encapsulation helps maintain the integrity of the object's state. By exposing only the necessary methods and keeping attributes private, you prevent unintended or erroneous changes that could lead to inconsistent or invalid object states.
// In summary, encapsulation is used here to hide the internal details of the Person class and provide controlled access through public methods. This approach enhances data protection, enforces a clean interface, and maintains the integrity of the object's state.
