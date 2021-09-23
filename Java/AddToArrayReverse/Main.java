package AddToArrayReverse;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        System.out.print("Enter your data:\n> ");
        Scanner sc = new Scanner(System.in);
        List<String> result = new ArrayList<>();
        while (sc.hasNext()) {
            result.add(sc.next());
        }
        Collections.reverse(result);
        result.forEach(System.out::println);
    }
}