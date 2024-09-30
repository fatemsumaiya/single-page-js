const rootDiv = document.getElementById('root');

function renderSignUp() {
    rootDiv.innerHTML = `
     <div class = "flex-container" >
        <div class = "container1" >
        </div>
            <div class = "container2">
                <p id="myTalk"> MyTalk</p>
                <div class="con">
                <h1>Sign Up</h1>
                <form id="signupForm">
                    <label for="name">Name:</label>
                    <input type="text" id="name" placeholder="Enter your name"><br>
                    <label for="email">Email:</label>
                    <input type="email" id="email" placeholder="Enter your email"><br>
                    <label for="password">Password:</label>
                    <input type="password" id="password" placeholder="Enter your password"><br><br>
                    <button type="button" onclick="handleSignUp()">Sign Up</button>
                </form>
                </div>

                </div>
                    <p id="statement">Join millions of other users on our social platform to grow share your life and also potentially grow your business.</p>

            </div>
    </div>

       
    `;

}

renderSignUp();

let userName = '';
function handleSignUp() {
    const nameInput = document.getElementById('name').value;
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;
    if (nameInput && emailInput && passwordInput) {
        userName = nameInput; // Store the user's name in a global variable
        renderHomePage();     // Move to the next step in the app
    } else {
        alert('Please fill out all fields');
    }
}

function renderHomePage() {
    rootDiv.innerHTML = `
        <h1 id="Welcome" >Welcome, ${userName}!</h1>
        <h2 >Create a Post</h2>
        <textarea id="postContent" placeholder="What's on your mind?"></textarea><br>
        <button type="button" class="b1" onclick="handleCreatePost()">Post</button>
          <button type="button" onclick="deleteLastPost()">Delete last post</button>
        <h3>Your Posts</h3>
        <ul id="postList"></ul>
    `;
}



let posts = [];
function handleCreatePost() {
    const now = new Date();
    const hours = now.getHours().toString();   // Convert to string
    const minutes = now.getMinutes().toString();
    const seconds = now.getSeconds().toString();

    const timeString = 
  `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;

 
    const postContent = document.getElementById('postContent').value + "| | Time posted - "+ timeString;

    
    if (postContent) {
        posts.push(postContent); // Add the new post to the posts array
        renderPostList();        // Update the displayed post list
    } else {
        alert('Post content cannot be empty');
    }
}



function renderPostList() {
    const postListElement = document.getElementById('postList');
    postListElement.innerHTML = ''; // Clear the current list
    posts.forEach((post) => {
        const postItem = document.createElement('li');
        postItem.textContent = post;
        postListElement.appendChild(postItem);
    });

}

function deleteLastPost() {
    posts.pop();
    const postListElement = document.getElementById('postList');
    postListElement.innerHTML = ''; // Clear the current list
    posts.forEach((post) => {
        const postItem = document.createElement('li');
        postItem.textContent = post;
        postListElement.appendChild(postItem);
    });

}
