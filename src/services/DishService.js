import Dish from './services/DishService';

export default class DishService {

    getDishes() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
             if (this.readyState == 4 && this.status == 200) {
                 alert(this.responseText);
             }
        };
        xhttp.open("GET", "Your Rest URL Here", true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send("Your JSON Data Here");
    }
  
}