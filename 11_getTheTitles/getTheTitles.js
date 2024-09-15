const getTheTitles = function(fn){
return fn.map((books) => books.title)
}


const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

// Do not edit below this line
module.exports = getTheTitles;
