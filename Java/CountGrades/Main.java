package CountGrades;

import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int a = 0;
        int b = 0;
        int c = 0;
        int d = 0;
        while (scanner.hasNext()) {
            String grade = scanner.next();
            switch (grade) {
                case "A" -> a = a + 1;
                case "B" -> b = b + 1;
                case "C" -> c = c + 1;
                case "D" -> d = d + 1;
            }
        }
        System.out.println(a + " " + b + " " + c + " " + d );
    }
}