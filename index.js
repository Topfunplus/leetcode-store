// 闭包问题
submitBtn.addEventListener('click', function () {
  let date1 = new Date()
  let movies = JSON.parse(localStorage.getItem('movieItem')) || []
  movieObj = {
    id: Date.now(),
    title: movieName.value,
    genre: movieGenre.value,
    releaseDate: movieDate.value,
    review: movieReview.value,
  }
  movies.push(movieObj)
  localStorage.setItem('movieItem', JSON.stringify(movies))
  middleH1.style.display = 'block'
  deleteAll.style.display = 'block'
  let movieLooks = document.createElement('div')
  let displayName = document.createElement('h1')
  let displayGenre = document.createElement('h2')
  let displayDate = document.createElement('h2')
  let reviewHeader = document.createElement('h2')
  let displayReview = document.createElement('h2')
  let deleteBtn = document.createElement('button')
  movieLooks.setAttribute('class', 'movieLooks')
  displayReview.setAttribute('id', 'displayReview')
  displayGenre.setAttribute('id', 'displayGenre')
  deleteBtn.setAttribute('id', 'deleteBtn')
  displayMovies.append(movieLooks)
  movieLooks.append(displayName)
  movieLooks.append(displayDate)
  movieLooks.append(displayGenre)
  movieLooks.append(reviewHeader)
  movieLooks.append(displayReview)
  movieLooks.append(deleteBtn)
  displayName.innerText = movieName.value
  displayDate.innerText = 'Released on: ' + movieDate.value
  displayGenre.innerText = 'Genre: ' + movieGenre.value
  reviewHeader.innerText = 'Review'
  displayReview.innerText = movieReview.value
  deleteBtn.innerText = 'Delete'
  deleteBtn.addEventListener('click', function () {
    movieLooks.remove()
    let movieArray1 = JSON.parse(localStorage.getItem('movieItem'))
    movieArray1 = movieArray1.filter(function (movieObj1) {
      return movieObj.title !== movieObj1.title
    })
    localStorage.setItem('movieItem', JSON.stringify(movieArray1))
  })
})
