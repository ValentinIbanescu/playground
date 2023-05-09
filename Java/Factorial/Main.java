package Factorial;

import java.math.BigInteger;
import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        System.out.print(factorial(n));
    }

    public static BigInteger factorial(int n) {
        BigInteger factorial = BigInteger.valueOf(n);

        if (n == 0) {
            factorial = BigInteger.valueOf(1);
        }

        while (--n > 0) {
            factorial = factorial.multiply(BigInteger.valueOf(n));
        }

        return factorial;
    }
}