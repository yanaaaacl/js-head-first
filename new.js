class Planet{
    constructor(name, radius){
        this.name = name;
        this.radius = radius;
    }
    getSurfaceArea(){
        let SurfaceArea = 4 * Math.PI * Math.pow(this.radius, 2);
        console.log(SurfaceArea + " square km!");
        return SurfaceArea;
    }
    set gravity(value){
        console.log("Setting value!");
        this._gravity = value;
    }
    get gravity(){
        console.log("Getting value!");
        return this._gravity;
    }
}
let earth = new Planet("Earth", 6378);
earth.gravity = 9.81;
earth.getSurfaceArea();
console.log(earth.gravity);