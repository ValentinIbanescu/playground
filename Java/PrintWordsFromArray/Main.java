package PrintWordsFromArray;

import java.util.stream.Stream;

public class Main {
    public static void main(String[] args) {
        // ** Solution 1: using for loop **
//        String[] words = {"first", "second", "third"};
//        for (String word : words) {
//            System.out.println(word);
//        }
        // ** Solution 2: using Stream **
        Stream.of("first", "second", "third").forEach(System.out::println);
    }
}