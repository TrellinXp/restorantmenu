export default class Dish {
    name = null;
    description = "";
    price = 0;
    category = "";
    availability = "";
    active = true;
    waitingTime = "";
 
    constructor(name, description, price, category, availability, active, waitingTime) 
    {
      this.name = name;
      this.description = description;
      this.price = price;
      this.category = category;
      this.availability = availability;
      this.active = active;
      this.waitingTime = waitingTime;
    }

    getName()
    {
      return this.name;
    }

    getDescription()
    {
      return this.description;
    }

    getPrice()
    {
      return this.price;
    } 

    getCategory() {
        return this.category;
    }       

    getAvailability() {
        return this.availability;
    }

    getActive() {
        return this.active;
    }

    getWaitingTime() {
        return this.waitingTime;
    }
}