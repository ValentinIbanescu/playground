package ScannerUserInput;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Please enter the following data (press ENTER after each input):\nName\nAge\nHourly rate\nWorking on weekends (true/false)\nEnter data bellow...");
        String name = sc.nextLine();
        int age = sc.nextInt();
        double rate = sc.nextDouble();
        boolean weekends = sc.nextBoolean();
        double monthlyRate = weekends ? (rate * 8 * 7) : (rate * 8 * 5);
        String result = String.format("Hello %s! Your age is %d and you won %f USD per week.", name, age, monthlyRate);
        System.out.println(result);
    }
}