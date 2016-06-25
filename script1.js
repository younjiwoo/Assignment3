

// Practice with Arrays (5 points)


// #1
//var movies = [
//    'finding dory', 
//    'central intelligence', 
//    'the conjuring 2', 
//    'now you see me 2', 
//    'warcraft'
//];
//console.log(movies[1]);


// #2
//var movies = [];
//movies[0] = 'finding dory'; 
//movies[1] = 'central intelligence';
//movies[2] = 'the conjuring 2'; 
//movies[3] = 'now you see me 2'; 
//movies[4] = 'warcraft';
//console.log(movies[0]);


// #3
//var movies = [];
//movies[0] = 'finding dory'; 
//movies[1] = 'central intelligence';
//movies[2] = 'the conjuring 2'; 
//movies[3] = 'now you see me 2'; 
//movies[4] = 'warcraft';
//movies.splice(2, 0, 'captain america: civil war');
//console.log(movies.length);


// #4
//var movies = [];
//movies[0] = 'finding dory'; 
//movies[1] = 'central intelligence';
//movies[2] = 'the conjuring 2'; 
//movies[3] = 'now you see me 2'; 
//movies[4] = 'warcraft';
//movies.shift(0);
//console.log(movies);


// #5
//var movies = [];
//movies[0] = 'finding dory'; 
//movies[1] = 'central intelligence';
//movies[2] = 'the conjuring 2'; 
//movies[3] = 'now you see me 2'; 
//movies[4] = 'warcraft';
//movies[5] = 'captain america: civil war';
//movies[6] = 'me before you';
//for (i = 0; i < 7; i++) {
//    console.log(movies[i]);
//}


// #6
//var movies = [];
//movies[0] = 'finding dory'; 
//movies[1] = 'central intelligence';
//movies[2] = 'the conjuring 2'; 
//movies[3] = 'now you see me 2'; 
//movies[4] = 'warcraft';
//movies[5] = 'captain america: civil war';
//movies[6] = 'me before you';
//for (i in movies) {
//    console.log(movies[i]);
//}


// #7
//var movies = [];
//movies[0] = 'finding dory'; 
//movies[1] = 'central intelligence';
//movies[2] = 'the conjuring 2'; 
//movies[3] = 'now you see me 2'; 
//movies[4] = 'warcraft';
//movies[5] = 'captain america: civil war';
//movies[6] = 'me before you';
//for (i in movies) {
//    movies.sort();
//    console.log(movies[i]);
//}


// #8
//var movies = [];
//movies[0] = 'finding dory'; 
//movies[1] = 'central intelligence';
//movies[2] = 'the conjuring 2'; 
//movies[3] = 'now you see me 2'; 
//var leastFavMovies = [];
//leastFavMovies[0] = 'warcraft';
//leastFavMovies[1] = 'captain america: civil war';
//leastFavMovies[2] = 'me before you';
//console.log('Movies I like: \n \n' + movies[0] + '\n' + movies[1] + '\n' + movies [2] + '\n' + movies[3] + '\n \n' + 'Movies I regret watching: \n \n' + leastFavMovies[0] + '\n' + leastFavMovies[1] + '\n' + leastFavMovies[2]);


// #9
//var favMovies = [];
//favMovies[0] = 'finding dory'; 
//favMovies[1] = 'central intelligence';
//favMovies[2] = 'the conjuring 2'; 
//favMovies[3] = 'now you see me 2'; 
//var leastFavMovies = [];
//leastFavMovies[0] = 'warcraft';
//leastFavMovies[1] = 'captain america: civil war';
//leastFavMovies[2] = 'me before you';
//var movies = favMovies.concat(leastFavMovies);
//movies.sort();
//console.log(movies.reverse());


// #10
//console.log(movies[movies.length-1]);


// #11
//console.log(movies[0]);


// #12
//var moreFavMovies = [
//    'godfather',
//    'godfather 2',
//    'godfather 3'
//];
//for (i = 0; i < movies.length; i++) {
//    if (leastFavMovies.includes(movies[i])){
//        movies[i] = moreFavMovies.shift();
//    }
//}
//console.log(movies);


// #13
//var employee1 = {
//    id: 'shanesmith',
//    name: 'Shane Smith',
//    title: 'Manager',
//    department: 'HR',
//    current: true
//};
//var employee2 = {
//    id: 'younjiwoo',
//    name: 'Younji Woo',
//    title: 'Director',
//    department: 'IT',
//    current: true
//};
//var employees = [];
//employees[0] = employee1;
//employees[1] = employee2;
//console.log(employees[1].name);
//
//
// #14
//for (i = 0; i < 2; i++) {
//    console.log(employees[i].name);
//}
//
//
// #15
//var employee3 = {
//    id: 'johndoe',
//    name: 'John Doe',
//    title: 'Manager',
//    department: 'IT',
//    current: false
//};
//employees.push(employee3);
//for (i = 0; i < employees.length; i++) {
//    if ( employees[i].current === true ) {
//        console.log(employees[i].name);
//    } 
//}


// #16 -- I'm uncertain exactly what this question is asking, so I solved in two ways.
//var movies = [
//    ['warcraft', 1],
//    ['me before you', 2],
//    ['finding dory', 3],
//    ['central intelligence', 4],
//    ['captain america: civil war', 5]
//];

// this is solution 1 :
//var movieNames = movies.map(function(movieSubArray) {
//    return movieSubArray[0];
//}); // map gives you a brand new array after processing the function.
//console.log(movieNames);

// this is solution 2 :
//function isHigherEnough(movieSubArray) {
//    return movieSubArray[1] >=3;
//}
//var filtered = movies.filter(isHigherEnough);
//console.log(filtered);


// Practice with Functions (5 points)


// #1
//function displayMessage(x) {
//    console.log(x);
//}
//displayMessage("hello!");


// #2
//function caculate(x, y) {
//    return x % y;
//}
//console.log(caculate(5, 3));


// #3
//var employees = [
//    'Zak',
//    'Jessica',
//    'Marck',
//    'Fred',
//    'Sally'
//];
//var showEmployee = function (employeesArray) {
//    for (i = 0; i < employeesArray.length; i++) {
//        console.log(employeesArray[i]);
//    }
//};
//console.log("Emplyees: \n \n");
//showEmployee(employees);