// First filter out the movies of 2018 with rating more than or equal to 4.0, then arrange them in decreasing order of rating
// and finally display their titles.

const movies = [
    { title:'a', year:2018, rating:4.5 }, 
    { title:'b', year:2018, rating:4.7 }, 
    { title:'c', year:2018, rating:3 },
    { title:'d', year:2017, rating:4.5 }
];

const filteredArray = movies
                        .filter( value => value.year === 2018 && value.rating >= 4)
                        .sort((a, b) => {
                            const ratingA = a.rating;
                            const ratingB = b.rating;

                            if(ratingA > ratingB) return -1;
                            if(ratingA < ratingB) return 1;
                            return 0;
                        })
                        .map( m => m.title );

console.log(filteredArray)