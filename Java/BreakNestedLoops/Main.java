package BreakNestedLoops;

public class Main {
    public static void main(String[] args) {
        boolean cond = false;
        for (int i = 0; (i <= 10) && !cond; i++) {
            for (int j = 0; j <= 10; j++) {
                System.out.print(j + " ");
                if (j == i) {
                    cond = true;
                    break;
                }
            }
            System.out.println();
        }
    }
}