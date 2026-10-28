import { Observable } from "rxjs";
import { filter } from "rxjs/operators";

const randomNumber$ = new Observable<number>((observer) => {
  const intervalId = setInterval(
    () => observer.next(Math.floor(Math.random() * 100)),
    1000
  );
  return () => clearInterval(intervalId); // Cleanup on unsubscribe
});

const subscription = randomNumber$
  .pipe(filter((num) => num % 2 !== 0)) // Filter odd numbers
  .subscribe((num) => console.log(`Odd Number: ${num}`));

setTimeout(() => subscription.unsubscribe(), 5000); // Stop after 5 sec
