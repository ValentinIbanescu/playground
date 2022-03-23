package IterateArrayFindMin;

import java.util.Comparator;
import java.util.Scanner;
import java.util.stream.Stream;

class Main {
    public static void main(String[] args) {
// // Solution 1: for loop
//        Scanner sc = new Scanner(System.in);
//
//        int arraySize = sc.nextInt();
//        int[] inputArray = new int[arraySize];
//
//        for (int i = 0; i < arraySize; i++) {
//            inputArray[i] = sc.nextInt();
//        }
//
//        int min = inputArray[0];
//
//        for (int k = 1; k < arraySize; k++) {
//            if (inputArray[k] < min) {
//                min = inputArray[k];
//            }
//        }
//        System.out.println(min);

        // Solution 2: stream
        Scanner scanner = new Scanner(System.in);

        int size = scanner.nextInt();

        Stream
                .generate(scanner::nextInt)
                .limit(size)
                .min(Comparator.comparingInt(Integer::valueOf))
                .ifPresent(System.out::println);

    }
}