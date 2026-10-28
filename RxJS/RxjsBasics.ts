import { Observable } from "rxjs";

// Step 1: Create an Observable
const myObservable = new Observable<string>((observer) => {
  observer.next("Hello, RxJS!"); // Emit first value
  observer.next("Learning Observables"); // Emit second value
  observer.next("This is powerful!"); // Emit third value
  observer.complete(); // Signals completion
});

// Step 2: Create an Observer
const myObserver = {
  next: (value: string) => console.log("Received:", value),
  error: (err: any) => console.error("Error:", err),
  complete: () => console.log("Observable completed"),
};

// Step 3: Subscribe to the Observable
const subscription = myObservable.subscribe(myObserver);

// Step 4: Unsubscribe after some time (optional)
setTimeout(() => {
  subscription.unsubscribe();
  console.log("Unsubscribed from the Observable");
}, 5000);
