package Tests;

public class Main {
    public static void main(String[] args) {
        int portion = 100;
        addSeeds(portion); // try to change portion

        // now let's print a portion
        System.out.println(portion);
        // 100, because the method didn't change portion, only its copy
    }

    /**
     * The method increases the portion of seeds by 50
     * and prints the resulting value
     */
    public static void addSeeds(int portion) {
        portion += 50;
        System.out.println("The increased portion is " + portion);
    }
}