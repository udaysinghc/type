
import java.util.Scanner;

public class PrimeNumbers {
    public static void prime(int startRange, int endRange) {
        // Validate input
        if (startRange > endRange) {
            System.out.println("Start range should be less than end range");
        } else {
            System.out.println("Prime numbers between " + startRange + " and " + endRange + " are:");

            for (int num = startRange; num <= endRange; num++) {
                boolean isPrime = true;

                if (num <= 1) {
                    isPrime = false;
                } else {
                    for (int i = 2; i <= Math.sqrt(num); i++) {
                        if (num % i == 0) {
                            isPrime = false;
                            break;
                        }
                    }
                }

                if (isPrime) {
                    System.out.println(num);
                }
            }
        }
    }

    public static void main(String[] args) {
        // Get input from user
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter start range: ");
        int startRange = scanner.nextInt();
        System.out.print("Enter end range: ");
        int endRange = scanner.nextInt();

        prime(startRange, endRange);

        scanner.close();
    }
}

