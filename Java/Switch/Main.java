package Switch;

public class Main {
    public static void main(String[] args) {
        int val = 1;
//        switch (val) {
//            case 0:
//                System.out.println("zero");
//                break;
//            case 1:
//                System.out.println("one");
//            // break;
//            case 2:
//                System.out.println("two");
//                break;
//            default:
//                System.out.println("The value is less than zero or greater than two");
//        }
        switch (val) {
            case 1: System.out.println("ONE");
                break;
            case 2: System.out.println("TWO");
                break;
            case 3: System.out.println("THREE");
                break;
            case 4: System.out.println("UNKNOWN NUMBER");
                break;
            default: System.out.println("UNKNOWN NUMBER");
        }
    }
}


