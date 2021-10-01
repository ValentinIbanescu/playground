package Continue;

public class Main {
    public static void main(String[] args) {
        int n = 20;
        for (int i = 0; i < n; i++) {
            if (i % 2 == 0) {
                continue;
            }
            System.out.print(i + " ");
        }
    }
}