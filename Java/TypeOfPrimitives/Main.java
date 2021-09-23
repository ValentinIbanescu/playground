package TypeOfPrimitives;

public class Main {
    public static void main(String[] args) {
        var myNum = 72;
        System.out.println(((Object) myNum).getClass().getSimpleName()); // Integer
        var myInput = 10.52f;
        System.out.println(((Object) myInput).getClass().getSimpleName()); // Float
        var yetAnotherInput = 0.345678923;
        System.out.println(((Object) yetAnotherInput).getClass().getSimpleName()); // Double
        var otherInput = 1_234_567_764_456_211L;
        System.out.println(((Object) otherInput).getClass().getSimpleName()); // Long
        var myName = "John";
        System.out.println(((Object) myName).getClass().getSimpleName()); // String
        var myLetter = 'j';
        System.out.println(((Object) myLetter).getClass().getSimpleName()); // Character
        var myAnswer = true;
        System.out.println(((Object) myAnswer).getClass().getSimpleName()); // Boolean
    }
}