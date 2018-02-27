const users = [{
  id: 1,
  name: "Prck",
  schoolId: 101
}, {
  id: 2,
  name: "Jest",
  schoolId: 999
}]

const grades = [{
  id: 1,
  schoolId: 101,
  grade: 86
}, {
  id: 2,
  schoolId: 999,
  grade: 87
}, {
  id: 3,
  schoolId: 101,
  grade: 80
}, ]

const getUser = (id) => {
  return new Promise((resolve, reject) => {
    // const user = users.find((user) => {
    //   return user.id === id
    // })
    const user = users.find((user) => user.id = id)
    if (user) {
      resolve(user)
    } else {
      reject(`Enable to find user with id of ${id}`)
    }
  })
}

const getGrades = (schoolId) => {
  return new Promise((resolve, reject) => {
    resolve(grades.filter((grade) => {
      return grade.schoolId === schoolId
    }))
    // resolve(grades.filter((grade)=> grade.schoolId === schoolId))
  })
}

// Without reject ==> Empty array
getGrades(99)
  .then((grades) => {
    console.log(grades);
  })
  .catch((e) => {
    console.log(e);
  })

getUser(2)
  .then((user) => {
    console.log(user);
  })
  .catch((e) => {
    console.log(e);
  })