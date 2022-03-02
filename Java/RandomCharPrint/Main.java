package RandomCharPrint;

import java.util.Random;

class Main {
    public static void main(String[] args) {
        char[] letters = {'O', 'X'};
        char[] line = new char[3];
        Random r = new Random();
        for (int i = 0; i < line.length; i++) {
            System.out.print(letters[r.nextInt(letters.length)] + " ");
            System.out.print(letters[r.nextInt(letters.length)] + " ");
            System.out.print(letters[r.nextInt(letters.length)] + " ");
            System.out.println();
        }
    }
}

//      Result:
//        X X X
//        O O X
//        X X X