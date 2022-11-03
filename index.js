import axios from "axios";

export default async function getData(number) {
   const {data: user} = await axios("https://jsonplaceholder.typicode.com/users/" + number);
   const {data: post} = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + number);

    console.log("User",user);
    console.log("Post", post)
    
}

