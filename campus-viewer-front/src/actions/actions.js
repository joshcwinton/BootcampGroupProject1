export const ADD_CAMPUS = 'ADD_CAMPUS'
export const ADD_STUDENT = 'ADD_STUDENT'
export const REMOVE_CAMPUS = 'REMOVE_CAMPUS'
export const REMOVE_STUDENT = 'REMOVE_STUDENT'


export const VIEW_ALL_CAMPUSES = 'VIEW_ALL_CAMPUSES'
export const VIEW_ALL_STUDENTS = 'VIEW_ALL_STUDENTS'


export function addCampus() {
  return {
        type:ADD_CAMPUS,
        text
  }
}

export function addStudent() {
  return {
      type:ADD_STUDENT,
      text
  }
}

export function removeCampus() {
  return {
      type:REMOVE_CAMPUS,
      text
  }
}

export function removeStudent() {
  return {
      type:REMOVE_STUDENT,
      text
  }
}

export function viewAllCampuses() {
  return {
      type:VIEW_ALL_CAMPUSES,
      text
  }
}

export function viewAllStudents() {
  return {
      type:VIEW_ALL_STUDENTS,
      text
  }
}
