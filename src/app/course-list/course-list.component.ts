import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courseList: Course[] = []
  
  constructor() { }

  ngOnInit(): void {
    this.getAllCourses()
  }

  getAllCourses() {
    //let name = 
    this.courseList.push(new Course("Intro to Pods", "Beginner", "Basics about pod. Good starting point for beginners."));
    console.log(this.courseList);
    this.courseList.push(new Course("Intro to Pods", "Beginner", "Basics about pod. Good starting point for beginners."));
    this.courseList.push(new Course("Intro to Pods", "Beginner", "Basics about pod. Good starting point for beginners."));
    this.courseList.push(new Course("Intro to Pods", "Beginner", "Basics about pod. Good starting point for beginners."));
    this.courseList.push(new Course("Intro to Pods", "Beginner", "Basics about pod. Good starting point for beginners."));
    // this.course = [
    //   new course()
    //   {
    //   name: "Intro to Pods",
    //   level: "Beginner",
    //   description: "Basics about pod. Good starting point for beginners."
    //   },
    //   {
    //   name: "Intro to Services",
    //   level: "Beginner",
    //   description: "Basics about services. Good starting point for beginners."
    //   },
    //   {
    //   name: "Deplyments",
    //   level: "Intermediate",
    //   description: "Diving into deployments. Recommended knowledge of pods and services."
    //   },
    //   {
    //   name: "Miscellaneous",
    //   level: "BegIntermediateinner",
    //   description: "Come and test your knowledge of pods, services and deployments."
    //   }
    // ]
  }

}

class Course {
  name = "";
  level = "";
  description = "";
  constructor(name: string, level: string, description: string) {
    this.name = name;
    this.level = level;
    this.description = description;
  }
}
