import java.util.Scanner;

class Main {
    static int sum;
    static final int BASE = 10;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int input = scanner.nextInt();
        System.out.print(recursion(input));
    }

    private static int recursion(int i) {
        if (i > 0) {
            sum += i % BASE;
            recursion(i / BASE);
        }
        return sum;
    }
}