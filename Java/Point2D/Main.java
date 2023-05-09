package Point2D;

public class Main {
    public static void main(String[] args) {
        Point2D actualLocation = new Point2D(2, 4);
        Point2D newLocation = new Point2D(5, 7);
        Point3D spaceLocation = new Point3D(1, 4, 9);
        Point3D newSpaceLocation = new Point3D(2, 5, 10);
        newLocation.setX(7);
        System.out.println(actualLocation.toString());
        System.out.println(newLocation.toString());
        System.out.println(newLocation.x);
        System.out.println(newLocation.getX());
        System.out.println(Point2D.distance(actualLocation,newLocation));
        System.out.println(Point3D.distance(spaceLocation,newSpaceLocation));
        Point2D.showInfo();
        Point3D.showInfo();
        System.out.println(spaceLocation.toString());
    }
}
