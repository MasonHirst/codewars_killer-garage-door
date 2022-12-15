function door(events) {
   let eventsArr = events.split('')
   let opening = false
   let closing = false
   let stopped = false
   let doorStatus = 0
   let doorStatusAnswer = ''

   for (let i = 0; i < eventsArr.length; i++) {
      console.log('opening:', opening, 'closing:', closing, 'stopped:', stopped)
      console.log(eventsArr[i])
      if (eventsArr[i] === '.') {
         if (opening === true && closing === false && stopped === false) {
            if (doorStatus < 5) {
               doorStatus++
               doorStatusAnswer += `${doorStatus}`
            } else {
               stopped = true
               opening = false
               doorStatusAnswer += `${doorStatus}`
            }
         } else if (opening === false && closing === true && stopped === false) {
            if (doorStatus > 0) {
               doorStatus--
               doorStatusAnswer += `${doorStatus}`
            } else {
               stopped = true
               closing = false
               doorStatusAnswer += `${doorStatus}`
            }
         } else {
            doorStatusAnswer += `${doorStatus}`
         }
      } else if (eventsArr[i] === 'P') {
         if (opening === false && closing === false) {
            if (doorStatus < 5) {
               opening = true
               doorStatus++
               doorStatusAnswer += `${doorStatus}`
            } else {
               stopped = false
               closing = true
               doorStatus--
               doorStatusAnswer += `${doorStatus}`
            }
         } else if (opening === true && closing === false && stopped === false) {
            stopped = true
            doorStatusAnswer += `${doorStatus}`
         } else if (opening === false && closing === true && stopped === false) {
            stopped = true
            doorStatusAnswer += `${doorStatus}`
         } else if (opening === true && closing === false && stopped === true && doorStatus < 5) {
            stopped = false
            doorStatus++
            doorStatusAnswer += `${doorStatus}`
         } else if (opening === false && closing === true && stopped === true && doorStatus > 0) {
            stopped = false
            doorStatus--
            doorStatusAnswer += `${doorStatus}`
         }

      } else if (eventsArr[i] === 'O') {
         if (opening === true) {
            opening = false
            closing = true
            doorStatus--
            doorStatusAnswer += `${doorStatus}`
         } else if (closing === true) {
            closing = false
            opening = true
            doorStatus++
            doorStatusAnswer += `${doorStatus}`
         }
      }
      console.log(doorStatus)
      console.log('....................................................................................')
   }
   return doorStatusAnswer
}


// console.log(door('..P...O.....')) // output: 001234321000
console.log(door('P.......P........')) // output: 12345554321000