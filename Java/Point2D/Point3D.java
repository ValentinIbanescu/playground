package Point2D;

public class Point3D extends Point2D {
    private int z;
    private static String info = "A 3D point represented by (x,y,z)-coordinates.";

    public Point3D(int xCoordinate, int yCoordinate, int zCoordinate) {
        super(xCoordinate, yCoordinate);
        z = zCoordinate;
    }

    public int getZ() {
        return z;
    }

    public void setZ(int z) {
        this.z = z;
    }

    @Override
    public String toString() {
        return "(" + x + "," + y + "," + z + ")";
    }

    public static double distance(Point3D p1, Point3D p2) {
        return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2) + Math.pow(p1.z - p2.z, 2));
    }

    public static void showInfo() {
        System.out.println(info);
    }
}
