

class Car{
    #id;//private variable
    constructor(model,year,color, speed)
    {
        this.#id = Math.floor(Math.random()*10e6)
        this.model = model;
        this.year = year;
        this.color = color;
        this.speed = speed;
    }
    set Speed(value){
        if( value > 0)
            this.speed = value;
        else
            this.speed = 0;
    }
    get mils()
    {
        return this.speed *0.621;
    }
    get id()
    {
        return this.#id;
    }
    set id(value){
        this.#id = value;
    }
    paint(newColor){
        this.color = newColor;
    }
    setSpeed(value)
    {
        if( value > 0)
            this.speed+= value;
        else
            this.speed+= 0;
    }
    print(){
        console.log(`Car : id - ${this.#id} ${this.model}, ${this.year}, ${this.color}, ${this.speed}`);
        console.log(`Speed : ${this.speed} km/h`)    
    }

}
const myCar = new Car("Nissan",2020,'white',180);
//myCar.model = "Nissan";
//myCar.year = 2020;
// myCar.color = 'white';
// myCar.speed = 180;
//myCar.#id = 1;
myCar.id = 100;
console.log("-------------------------------")
console.log(myCar.id);
myCar.print();
//myCar.setSpeed(40);
myCar.Speed = 130;
myCar.print();
console.log(`Speed i miles : ${myCar.mils} mils/h`)

myCar.paint("Red")
myCar.print();


class PoliceCar extends Car{
    constructor(model,year, color, speed, volume){
    super(model,year,color,speed);
    this.volume = volume;
    }
    beep()
    {
        console.log("Stop!!!! Beep beep beep!!!!! Volume : " + this.volume);
    }
    print()
    {
        super.print();
        console.log("Volume : " + 500 + "dB")
        document.write(`<p>Hello world ${this.model}<p/>`);
    }

};

console.log("------------Police Car ----------------");
const police  = new PoliceCar("Toyota Prius",2018,"white",220,500);
police.paint("grey");
police.beep();
police.print();

console.log("------------Print ----------------");
const cars = [new Car(), new PoliceCar()];
//.forEach( c=> c.print());

console.log("Виклик батьківського методу через дочірній клас")
Car.prototype.print.call(police);

