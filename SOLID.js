// SOLID PRINCIPLE

// ✅ 1. Single Responsibility Principle (SRP)
// Each function/module should do one thing only.

// ❌ Bad Example – One function doing too much:
function createUser(user) {
  // Save to DB
  console.log("User saved to DB:", user);

  // Send Email
  console.log("Sending welcome email to:", user.email);

  // Logging
  console.log("Log: User created:", user.name);
}


// ✅ Good Example – Split responsibilities:
function saveUser(user) {
  console.log("User saved to DB:", user);
}

function sendWelcomeEmail(email) {
  console.log("Sending welcome email to:", email);
}

function logUserCreation(name) {
  console.log("Log: User created:", name);
}

function createUser(user) {
  saveUser(user);
  sendWelcomeEmail(user.email);
  logUserCreation(user.name);
}



// ✅ 2. Open/Closed Principle (OCP)
// Functions should be open to extension, closed to modification.

// ❌ Bad Example – Editing logic every time we add a payment method:
function processPayment(type, amount) {
  if (type === "paypal") {
    console.log(`Paying ${amount} via PayPal`);
  } else if (type === "stripe") {
    console.log(`Paying ${amount} via Stripe`);
  }
}


// ✅ Good Example – Use strategy pattern with functions:
function paypalProcessor(amount) {
  console.log(`Paying ${amount} via PayPal`);
}

function stripeProcessor(amount) {
  console.log(`Paying ${amount} via Stripe`);
}

function processPayment(processorFn, amount) {
  processorFn(amount);
}

// Usage
processPayment(paypalProcessor, 100);
processPayment(stripeProcessor, 200);
// Now you can extend functionality by passing a new function, without changing processPayment().


// ✅ 3. Liskov Substitution Principle (LSP)
// You should be able to replace one implementation with another without breaking the app.

// ❌ Bad Example – Replacing breaks the program:
function birdFly(bird) {
  if (!bird.fly) {
    throw new Error("Bird can't fly");
  }
  bird.fly();
}


// ✅ Good Example – Only pass birds that can fly to fly functions:
function makeFly(flyFn) {
  flyFn();
}

const pigeon = () => console.log("Pigeon flying...");
const drone = () => console.log("Drone flying...");

makeFly(pigeon);
makeFly(drone);
// Here, anything that implements a fly() function can be passed in.


// ✅ 4. Interface Segregation Principle (ISP)
// Do not force a function or module to depend on things it doesn’t use.

// ❌ Bad Example – Forcing Robot to implement eating behavior:
function performActions(entity) {
  entity.work();
  entity.eat(); // not all entities eat
}


// ✅ Good Example – Split concerns into small capabilities:
function work(entity) {
  entity.work();
}

function eat(entity) {
  if (entity.eat) entity.eat();
}

const human = {
  work: () => console.log("Human working"),
  eat: () => console.log("Human eating"),
};

const robot = {
  work: () => console.log("Robot working"),
};

work(human);
eat(human);
work(robot);
eat(robot); // Safely ignored
// Each function only uses what’s necessary.


// ✅ 5. Dependency Inversion Principle (DIP)
// Depend on abstractions, not concrete implementations.

// ❌ Bad Example – Hardcoded database logic:
function createUser(user) {
  const db = require('./mongoDB');
  db.save(user);
}


// ✅ Good Example – Inject dependencies:
function createUser(user, saveFn) {
  saveFn(user);
}

function mongoSave(user) {
  console.log("Saved to MongoDB:", user);
}

function fileSave(user) {
  console.log("Saved to File:", user);
}

createUser({ name: "Ritik" }, mongoSave);
createUser({ name: "John" }, fileSave);
// Now createUser is decoupled from how the data is stored.




//Use of SOLID Principle

// ✅ 1. Improved Maintainability
// When each module/function/class has a single responsibility and is well-separated from others, it's much easier to

// ✅ 2. Easier Testing and Debugging
// Each principle contributes to a design where units are small and isolated, making them easy to test individually (unit testing).

// ✅ 3. Better Scalability
// SOLID principles allow your application to grow without becoming a mess.

// ✅ 4. Reusability and Modularity
// Functions/modules can be reused across the app or even in other projects

// ✅ 5. Better Collaboration Among Developers
// When each piece of logic has a clear purpose:
// It’s easier for teams to divide work
// Onboarding new developers becomes faster
// Reviewing code is more straightforward


