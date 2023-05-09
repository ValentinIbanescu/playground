// Source: https://stackoverflow.com/questions/64057337/how-to-get-the-minimum-and-maximum-value-inside-a-user-defined-array
package ArrayMinMax;

import java.util.InputMismatchException;
import java.util.Scanner;

class MinMax {
    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            System.out.println("Enter array size: ");
            int n = input.nextInt();

            int[] array = new int[n];

            System.out.println("Enter " + n + " elements:");
            for (int i = 0; i < array.length; i++) {
                array[i] = input.nextInt();
            }

            int[] max_min = getMax_MinValue(array);

            System.out.println("Max Value: " + max_min[0]);
            System.out.println("Min Value: " + max_min[1]);

        } catch (InputMismatchException e) {
            System.out.println("INVALID INPUT >> PLEASE INPUT A NUMBER");
        }
    }

    private static int[] getMax_MinValue(int[] array) {

        int maxValue = array[0];
        int minValue = array[0];

        for (int j : array) {
            if (j > maxValue) {
                maxValue = j;
            }
            if (j < minValue) {
                minValue = j;
            }
        }
        return new int[]{maxValue,minValue};
    }
}