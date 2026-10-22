"use strict";
// ENCAPSULATION TASKS
Object.defineProperty(exports, "__esModule", { value: true });
// class Student {
//   constructor(private marks: number) {}
//   getMarks(): void {
//     console.log(`Current marks: ${this.marks}`);
//   }
//   updatemarks(newMarks: number): void {
//     if (newMarks < 0 || newMarks > 100) return;
//     this.marks = newMarks;
//     console.log(`Updated marks: ${this.marks}`);
//   }
// }
// const s1 = new Student(75);
// s1.updatemarks(80);
// s1.updatemarks(101);
// s1.getMarks();
// class LoginSystem {
//   private failedAttempts: number;
//   constructor() {
//     this.failedAttempts = 0;
//   }
//   recordFailedAttempts() {
//     this.failedAttempts += 1;
//   }
//   resetFailedAttempts() {
//     this.failedAttempts = 0;
//   }
//   getFailedAttempts() {
//     console.log(`Failed Attempts: ${this.failedAttempts}`);
//   }
// }
// const user1 = new LoginSystem()
// user1.recordFailedAttempts()
// user1.recordFailedAttempts()
// user1.getFailedAttempts()
// user1.resetFailedAttempts()
// user1.getFailedAttempts()
// ABSTRACTION TASKS
// abstract class Notification {
//   abstract send(message: string): void;
// }
// class EmailNotification extends Notification {
//     send(message: string): void {
//         console.log(`Email notification: ${message}`)
//     }
// }
// class SMSNotification extends Notification {
//     send(message: string): void {
//         console.log(`SMS notification: ${message}`)
//     }
// }
// const email = new EmailNotification()
// email.send("Your order is confirmed!")
// const sms = new SMSNotification()
// sms.send("Your OTP is 1234")
// abstract class Report {
//     abstract generate():void
// }
// class SalesReport extends Report {
//     generate(): void {
//         console.log("Sales report generated")
//     }
// }
// class AttendanceReport extends Report {
//     generate(): void {
//         console.log("Attendance report generated")
//     }
// }
// const sales = new SalesReport()
// sales.generate()
// const attendance = new AttendanceReport()
// attendance.generate()
// INHERITANCE TASKS
// class User {
//   constructor(public name: string) {}
//   login() {
//     console.log(`${this.name} logged in`);
//   }
// }
// class Admin extends User {
//   manageUsers() {
//     console.log(`${this.name} is managing users`);
//   }
// }
// const admin = new Admin("Ali");
// admin.login();
// admin.manageUsers();
// const user = new User("Sara");
// user.login();
// class Employee {
//   constructor(public name: string) {}
//   getDetails() {
//     console.log(`Emloyee name: ${this.name}`);
//   }
// }
// class Developer extends Employee {
//   constructor(
//     public name: string,
//     public programmingLanguage: string,
//   ) {
//     super(name);
//   }
//   writeCode(){
//     console.log(`${this.name} is coding in ${this.programmingLanguage}`)
//   }
// }
// const developer = new Developer("Ali", "TypeScript")
// developer.getDetails()
// developer.writeCode()
