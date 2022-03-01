package RandomCharArray;

import java.util.Random;

class Main {
    public static void main(String[] args) {
        char[] letters = {'O', 'X'};
        char[] line = new char[3];
        Random r = new Random();
        for (int i = 0; i < line.length; i++) {
            line[i] = letters[r.nextInt(letters.length)];
        }
        System.out.println(line);
    }
}