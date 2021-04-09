// console.log("Start");

// setTimeout(() => {
//     console.log("we are in the timeout function");
// }, 2000);

// console.log("end");

console.log("Start");

function loginUser(email, password, callback) {
    setTimeout(() => {
        console.log("Now we have the data.");
        callback({ userEmail: email, password: password });
    }, 4000);
}

function getUserVideo(email, callback) {
    setTimeout(() => {
        callback(['video1', 'video2', 'video3']);
    }, 2000);
}
const user = loginUser("shubhamsdk@gmail.com", 12354, user => {
    console.log(user);
    getUserVideo(user.userEmail, videos => {
        console.log(videos);
    });
});


console.log("End");


//PROMISE

const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log("We got it!!");
        resolve({ user: "shubham Karad" });
    }, 2000);
});
promise.then(user => {
    console.log(user);
})