class Vehicle {
    protected String brand = "Dacia";
    protected int maxSpeed = 150;
    public void honk() {
        System.out.println("Tit, tiiit!");
    }
    public void setMaxSpeed(int newSpeed){
        maxSpeed = newSpeed;
    }
}

class Car extends Vehicle {
    private final String modelName = "Sandero";
    public static void main(String[] args) {
        Car myFastCar = new Car();
        myFastCar.honk();
        myFastCar.setMaxSpeed(180);
        System.out.println(myFastCar.brand + " " + myFastCar.modelName + " " + myFastCar.maxSpeed + "Km/h");
    }
}