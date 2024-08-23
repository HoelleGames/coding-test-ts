/**
 *
 * Task 1 - Pub/Sub
 *
 * Objective:
 * Create a Publisher-Subscriber (Pub/Sub) system using TypeScript. 
 * The system should allow objects to subscribe to events and get notified when those events are triggered.
 */

class Publisher {
  subscribe(event, callback) {
    // Implement subscription logic
  }

  unsubscribe(event, callback) {
    // Implement unsubscription logic
  }

  publish(event, data) {
    // Implement publish logic
  }
}

// -------------------------------------------------------------------------------------------------
// Test the Publisher-Subscriber system
// -------------------------------------------------------------------------------------------------

let myPublisher = new Publisher();
let callback = data => console.log(data);
let myEvent = 'myEvent';

myPublisher.subscribe(myEvent, callback);
myPublisher.publish(myEvent, 'Hello World!');
myPublisher.unsubscribe(myEvent, callback);
