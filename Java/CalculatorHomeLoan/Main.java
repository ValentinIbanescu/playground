package CalculatorHomeLoan;

import java.util.Scanner;

public class Main {
    public static void computePayment(
            double loanAmt,
            double rate,
            double futureValue,
            int numPeriods) {
        double interest = rate / 100.0;
        double partial1 = Math.pow((1 + interest),
                - numPeriods);
        double denominator = (1 - partial1) / interest;
        double answer = (-loanAmt / denominator)
                - ((futureValue * partial1) / denominator);
        System.out.print(answer);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double a = sc.nextDouble();
        double b = sc.nextDouble();
        double c = sc.nextDouble();
        int d = sc.nextInt();
        computePayment(a, b, c, d);
    }
}
