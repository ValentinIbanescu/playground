package ConditionalNestedTernary;

import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int units = sc.nextInt();
        System.out.print(units < 1 ? "no army" : units < 20 ? "pack" : units < 250 ?
                "throng" : units < 1000 ? "zounds" : "legion");
    }
}