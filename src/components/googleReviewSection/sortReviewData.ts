import type { ReviewData } from './reviewData';
import { Priority } from './reviewData';
import type { CourseCode } from '@/domain/courseCode';

type CompareFunction<T> = (a: T, b: T) => number;

const highestPossiblePriority = Priority.HIGH;

/**
 * Creates a ReviewData compare function.
 *
 * Prioritizes based on course code, and then the review's own priority.
 * @param courseCode the course code to give priority to.
 * @returns a compare function.
 */
export const getCompareFunction = (courseCode?: CourseCode): CompareFunction<ReviewData> => (a, b) => {
  const scoreA = courseCode && a.courseCodes?.includes(courseCode)
    ? addPriorityScore(highestPossiblePriority + 1, a.priority)
    : addPriorityScore(0, a.priority);

  const scoreB = courseCode && b.courseCodes?.includes(courseCode)
    ? addPriorityScore(highestPossiblePriority + 1, b.priority)
    : addPriorityScore(0, b.priority);

  return scoreB - scoreA;
};

const addPriorityScore = (baseScore: number, priority?: Priority): number => {
  return baseScore + (priority ?? Priority.NORMAL);
};
