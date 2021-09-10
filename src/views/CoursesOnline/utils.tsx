import { Course } from '@Types/course';
import CourseCard from '@Components/CourseCard';

export const renderCourses = (courses: Course[]) => {
  return courses.map((course, i) => {
    return <CourseCard key={`${course.id}-${i}`} course={course} />;
  });
};
