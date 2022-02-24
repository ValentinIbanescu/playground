package PrintInOut;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your first name: " );
        String firstName = sc.nextLine();
        System.out.print("😀👋🏻\n");
        System.out.print("Hello, " + firstName + "!");
    }
}