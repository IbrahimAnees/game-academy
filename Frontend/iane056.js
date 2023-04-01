
const defaultBoard = `<tbody>
<tr>
<td ondrop="mydrop(event)" ondragover="mydragover(event)" style="background-color:yellow">&nbsp;</td>
<td style="background-color:yellow">a</td>
<td style="background-color:yellow">b</td>
<td style="background-color:yellow">c</td>
<td style="background-color:yellow">d</td>
<td style="background-color:yellow">e</td>
<td style="background-color:yellow">f</td>
<td style="background-color:yellow">g</td>
<td style="background-color:yellow">h</td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)" style="background-color:yellow"><img src="https://cws.auckland.ac.nz/gas/images/Bin.svg"></img></td>
</tr>
<tr>
<td style="background-color:yellow">8</td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)"><img id="Rb1" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Rb.svg"></img></td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)"><img id="Nb1" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Nb.svg"></img></td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)"><img id="Bb1" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Bb.svg"></img></td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)"><img id="Qb1" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Qb.svg"></img></td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)"><img id="Kb" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Kb.svg"></img></td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)"><img id="Bb2" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Bb.svg"></img></td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)"><img id="Nb2" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Nb.svg"></img></td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)"><img id="Rb2" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Rb.svg"></img></td>
<td style="background-color:yellow"><img id="Qb2" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Qb.svg"></img></td>
</tr>
<tr>
<td style="background-color:yellow">7</td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)"><img id="Pb1" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Pb.svg"></img></td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)"><img id="Pb2" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Pb.svg"></img></td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)"><img id="Pb3" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Pb.svg"></img></td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)"><img id="Pb4" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Pb.svg"></img></td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)"><img id="Pb5" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Pb.svg"></img></td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)"><img id="Pb6" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Pb.svg"></img></td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)"><img id="Pb7" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Pb.svg"></img></td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)"><img id="Pb8" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Pb.svg"></img></td>
<td style="background-color:yellow"><img id="Qb3" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Qb.svg"></img></td>
</tr>
<tr>
<td style="background-color:yellow">6</td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)"></td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)">&nbsp;</td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)">&nbsp;</td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)">&nbsp;</td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)">&nbsp;</td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)">&nbsp;</td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)">&nbsp;</td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)">&nbsp;</td>
<td style="background-color:yellow"><img id="Qb4" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Qb.svg"></img></td>
</tr>
<tr>
<td style="background-color:yellow">5</td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)">&nbsp;</td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)">&nbsp;</td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)">&nbsp;</td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)">&nbsp;</td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)">&nbsp;</td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)">&nbsp;</td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)">&nbsp;</td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)">&nbsp;</td>
<td style="background-color:yellow"><img id="Qb5" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Qb.svg"></img></td>
</tr>
<tr>
<td style="background-color:yellow">4</td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)">&nbsp;</td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)">&nbsp;</td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)">&nbsp;</td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)">&nbsp;</td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)">&nbsp;</td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)">&nbsp;</td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)">&nbsp;</td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)">&nbsp;</td>
<td style="background-color:yellow"><img id="Qw5" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Qw.svg"></img></td>
</tr>
<tr>
<td style="background-color:yellow">3</td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)">&nbsp;</td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)">&nbsp;</td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)">&nbsp;</td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)">&nbsp;</td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)">&nbsp;</td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)">&nbsp;</td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)">&nbsp;</td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)">&nbsp;</td>
<td style="background-color:yellow"><img id="Qw4" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Qw.svg"></img></td>
</tr>
<tr>
<td style="background-color:yellow">2</td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)"><img id="Pw1" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Pw.svg"></img></td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)"><img id="Pw2" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Pw.svg"></img></td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)"><img id="Pw3" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Pw.svg"></img></td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)"><img id="Pw4" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Pw.svg"></img></td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)"><img id="Pw5" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Pw.svg"></img></td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)"><img id="Pw6" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Pw.svg"></img></td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)"><img id="Pw7" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Pw.svg"></img></td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)"><img id="Pw8" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Pw.svg"></img></td>
<td style="background-color:yellow"><img id="Qw3" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Qw.svg"></img></td>
</tr>
<tr>
<td style="background-color:yellow">1</td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)"><img id="Rw1" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Rw.svg"></img></td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)"><img id="Nw1" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Nw.svg"></img></td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)"><img id="Bw1" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Bw.svg"></img></td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)"><img id="Qw1" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Qw.svg"></img></td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)"><img id="Kw" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Kw.svg"></img></td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)"><img id="Bw2" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Bw.svg"></img></td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)"><img id="Nw2" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Nw.svg"></img></td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)"><img id="Rw2" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Rw.svg"></img></td>
<td style="background-color:yellow"><img id="Qw2" ondragstart="mydragstart(event)" src="https://cws.auckland.ac.nz/gas/images/Qw.svg"></img></td>
</tr>
<tr>
<td ondrop="mydrop(event)" ondragover="mydragover(event)" style="background-color:yellow"><img src="https://cws.auckland.ac.nz/gas/images/Bin.svg"></img></td>
<td style="background-color:yellow">a</td>
<td style="background-color:yellow">b</td>
<td style="background-color:yellow">c</td>
<td style="background-color:yellow">d</td>
<td style="background-color:yellow">e</td>
<td style="background-color:yellow">f</td>
<td style="background-color:yellow">g</td>
<td style="background-color:yellow">h</td>
<td ondrop="mydrop(event)" ondragover="mydragover(event)" style="background-color:yellow">&nbsp;</td>
</tr>
</tbody>`


const pages = ['Home', 'Shop', 'Register', 'Login', 'Chess', 'Guestbook'];
const pageButtons = ['homeButton', 'shopButton', 'registerButton', 'loginButton', 'chessButton', 'guestbookButton']

var username;
var password;
var loggedIn = false;

  function showPage (page, pageButton) {
    pages.forEach(element => {
        document.getElementById(element).style.display='none';
    });
    document.getElementById(page).style.display='block';

    pageButtons.forEach(element => {
        document.getElementById(element).classList.remove('active');
    });
    document.getElementById(pageButton).classList.add('active');


    return false;
  }




  fetch("https://cws.auckland.ac.nz/gas/api/Logo")
  .then(response => response.blob())
  .then(imageBlob => {
      const imageObjectURL = URL.createObjectURL(imageBlob);
      document.getElementById("Logo").src = imageObjectURL;
  });


  fetch("https://cws.auckland.ac.nz/gas/api/FavIcon")
  .then(responseFav => responseFav.blob())
  .then(imageBlobFav => {
      const imageObjectURLFav = URL.createObjectURL(imageBlobFav);
      document.getElementById("favicon").href = imageObjectURLFav;
  });


  async function fetchVersion() {
    const response = await fetch('https://cws.auckland.ac.nz/gas/api/Version');
    const responseText = await response.text();

    document.getElementById('version').innerHTML = "Version: " + responseText;
}

async function fetchItems() {
    dynamicList.innerHTML = '';

    const response = await fetch('https://cws.auckland.ac.nz/gas/api/AllItems    ');
    const responseText = await response.text();
    var json = JSON.parse(responseText);


    for (const element of json) {
        addItem(element);
    }

}




let gameInProgress = false;
let atmGameId = null;
let myMove = false;

function tryGame() {
let usernameTemp1 = document.getElementById("currentUser").textContent.substring(13);
let passwordTemp1 = document.getElementById("passwordProtected").textContent;
if (usernameTemp1 === "" || usernameTemp1 == null || usernameTemp1 == undefined) {
    showPage('Login', 'loginButton');
    alert("Please log in");
} else {
let headers1 = new Headers();
headers1.set('Authorization', 'Basic ' + btoa(usernameTemp1 + ":" + passwordTemp1));
const fetchPromise = fetch("https://cws.auckland.ac.nz/gas/api/PairMe", {
     
    method: "GET",
    headers: headers1,

});
const streamPromise = fetchPromise.then((response) => response.json());
streamPromise.then((data) => 
{

    if (data.state === 'progress') {
        alert("Game found!");
        gameInProgress = true;
        atmGameId = data.gameId;
        document.getElementById('tryButton').style.display = 'none';
        document.getElementById('quitButton').style.display = 'block';

        if (data.player1 === usernameTemp1) {
            document.getElementById('makeMoveButton').style.display = 'block';
            document.getElementById('getMoveButton').style.display = 'none';
            myMove = true;

        } else {
        document.getElementById('makeMoveButton').style.display = 'none';
        document.getElementById('getMoveButton').style.display = 'block';
        }
    
}
else {
    alert('No game found yet');
}
}


);

}
}




    function makeMove() {
        let usernameTemp1 = document.getElementById("currentUser").textContent.substring(13);
        let passwordTemp1 = document.getElementById("passwordProtected").textContent;
        let currentBoard = document.getElementById('chessBoard').innerHTML;
        let a = atmGameId.toString();
        let b = currentBoard.toString();
        if (usernameTemp1 === "" || usernameTemp1 == null || usernameTemp1 == undefined) {
            showPage('Login', 'loginButton');
            alert("Please log in");
            document.getElementById('tryButton').style.display = 'block';
            document.getElementById('quitButton').style.display = 'none';
            document.getElementById('makeMoveButton').style.display = 'none';
            document.getElementById('getMoveButton').style.display = 'none';
        } else {
        let headers1 = new Headers();
        headers1.set('Authorization', 'Basic ' + btoa(usernameTemp1 + ":" + passwordTemp1));
        const fetchPromise = fetch("https://cws.auckland.ac.nz/gas/api/MyMove", {
             
            method: "POST",
            body: JSON.stringify({
                gameId: a,
                move: b
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": 'Basic ' + btoa(usernameTemp1 + ":" + passwordTemp1),
            },
        
        });
        const streamPromise = fetchPromise.then((response) => response);
        streamPromise.then((data) => 
        {
            document.getElementById('makeMoveButton').style.display = 'none';
            document.getElementById('getMoveButton').style.display = 'block';
            myMove = false;
        }
        
        
        );
        
        }
        }


        function getMove() {
            let usernameTemp1 = document.getElementById("currentUser").textContent.substring(13);
            let passwordTemp1 = document.getElementById("passwordProtected").textContent;

            if (usernameTemp1 === "" || usernameTemp1 == null || usernameTemp1 == undefined) {
                showPage('Login', 'loginButton');
                alert("Please log in");
                document.getElementById('tryButton').style.display = 'block';
                document.getElementById('quitButton').style.display = 'none';
                document.getElementById('makeMoveButton').style.display = 'none';
                document.getElementById('getMoveButton').style.display = 'none';
            } else {

            const fetchPromise = fetch("https://cws.auckland.ac.nz/gas/api/TheirMove?gameId=" + atmGameId, {
                 
                method: "GET",

                headers: {
                    "Authorization": 'Basic ' + btoa(usernameTemp1 + ":" + passwordTemp1),
                },
            
            });
            const streamPromise = fetchPromise.then((response) => response.text());
            streamPromise.then((data) => 
            {
                document.getElementById('makeMoveButton').style.display = 'block';
                document.getElementById('getMoveButton').style.display = 'none';
                myMove = true;
                console.log("asdfasdftheir move is" + data);
                document.getElementById('chessBoard').innerHTML = data;
            }
            
            
            );
            
            }
            }

            function quitGame() {
                let usernameTemp1 = document.getElementById("currentUser").textContent.substring(13);
                let passwordTemp1 = document.getElementById("passwordProtected").textContent;
    
                if (usernameTemp1 === "" || usernameTemp1 == null || usernameTemp1 == undefined) {
                    showPage('Login', 'loginButton');
                    alert("Please log in");
                    document.getElementById('tryButton').style.display = 'block';
                    document.getElementById('quitButton').style.display = 'none';
                    document.getElementById('makeMoveButton').style.display = 'none';
                    document.getElementById('getMoveButton').style.display = 'none';
                } else {
    
                const fetchPromise = fetch("https://cws.auckland.ac.nz/gas/api/QuitGame?gameId=" + atmGameId, {
                     
                    method: "GET",
    
                    headers: {
                        "Authorization": 'Basic ' + btoa(usernameTemp1 + ":" + passwordTemp1),
                    },
                
                });
                const streamPromise = fetchPromise.then((response) => response.text());
                streamPromise.then((data) => 
                {
                    document.getElementById('makeMoveButton').style.display = 'none';
                    document.getElementById('getMoveButton').style.display = 'none';
                    document.getElementById('quitButton').style.display = 'none';
                    document.getElementById('tryButton').style.display = 'block';
                    
                    gameInProgress = false;
                    document.getElementById('chessBoard').innerHTML = defaultBoard;
                }
                
                
                );
                
                }
                }



async function login() {
    let usernameTemp = document.getElementById("username").value;
    u = usernameTemp;
    let passwordTemp = document.getElementById("password").value;
    var check = await checkLogin(usernameTemp, passwordTemp);
    if (check == true) {
        username = usernameTemp;
        password = passwordTemp;
        loggedIn = true;
        document.getElementById("currentUser").innerHTML = "Logged in as " + username;
        document.getElementById("passwordProtected").innerHTML = password;
        document.getElementById("logoutButton").style.display='inline-block';
        alert("Logged in successfully");
    } else {
        alert("Incorrect login details");
    }
}

function logout() {
    username = null;
    password = null;
    loggedIn = false;
    document.getElementById("currentUser").innerHTML = "";
    document.getElementById("passwordProtected").innerHTML = "";
    document.getElementById("logoutButton").style.display='none';
    alert("Logged out");
}

async function register() {
    let usernameTemp = document.getElementById("usernameR").value;
    let passwordTemp = document.getElementById("passwordR").value;
    let addressTemp = document.getElementById("addressR").value;


    const response = await fetch("https://cws.auckland.ac.nz/gas/api/Register", {
     
        // Adding method type
        method: "POST",
        
        // Adding body or contents to send
        body: JSON.stringify({
            username: usernameTemp,
            password: passwordTemp,
            address: addressTemp
        }),
        
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    const responseText = await response.text();

    alert(responseText);
}

async function checkLogin(usernameTemp, passwordTemp) {
    let headers = new Headers();
    let url = 'https://cws.auckland.ac.nz/gas/api/VersionA';
    headers.set('Authorization', 'Basic ' + btoa(usernameTemp + ":" + passwordTemp));
    
    const response = await fetch(url, {method:'GET',
    headers: headers,
   });
    //const responseText = await response.text();
    if (response.status == 200) {
        return true;
    }
    else {
        return false;
    }
}

function addItem(element) {
var completelist= document.getElementById("dynamicList");

dynamicList.innerHTML += '<div class="centerText">' + element.name + '</div>';
dynamicList.innerHTML += '<div class="centerText">' + '$' + element.price + '</div>';
dynamicList.innerHTML += '<div class="centerText">' + element.description + '</div>';
dynamicList.innerHTML += '<img class="imageBox center" src=https://cws.auckland.ac.nz/gas/api/ItemPhoto/' + element.id + '></img>';
dynamicList.innerHTML += '<button onclick="purchaseItem(' + element.id + ')" class="center buyButton">Buy now</button>';
dynamicList.innerHTML += '<hr>';

}

async function updateList() {
    element = document.getElementById("searchBar");
    if (element == null) {
    }
    else {
    let searchTerm = document.getElementById("searchBar").value;
    if (searchTerm == "" || searchTerm == null || searchTerm == undefined) {
        fetchItems();
    }
    else {
    console.log(searchTerm);
    const response = await fetch('https://cws.auckland.ac.nz/gas/api/Items/' + searchTerm);
    const responseText = await response.text();
    var json = JSON.parse(responseText);
    dynamicList.innerHTML = '';

    for (const element of json) {
        addItem(element);
    }
}
}
}

async function postComment() {
    let commentComment = document.getElementById("comment").value;
    let commentName = document.getElementById("nameField").value;

    const response = await fetch("https://cws.auckland.ac.nz/gas/api/Comment", {
     
        // Adding method type
        method: "POST",
        
        // Adding body or contents to send
        body: JSON.stringify({
            comment: commentComment,
            name: commentName
        }),
        
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    const responseText = await response.text();
    
    document.getElementById("commentFrame").src = 'https://cws.auckland.ac.nz/gas/api/Comments';
}

async function purchaseItem(itemid) {
    let usernameTemp = document.getElementById("currentUser").textContent.substring(13);
    let passwordTemp = document.getElementById("passwordProtected").textContent;
    let url = 'https://cws.auckland.ac.nz/gas/api/PurchaseItem/' + itemid.toString();
    let headers = new Headers();
    headers.set('Authorization', 'Basic ' + btoa(usernameTemp + ":" + passwordTemp));

    if (usernameTemp == "" || usernameTemp == null || usernameTemp == undefined) {
        showPage('Login', 'loginButton');
        alert("Please log in");
    }
    else {
    const response = await fetch(url, {
     
        // Adding method type
        method: "GET",
        headers: headers,
        // Adding body or contents to send

         
        // Adding headers to the request
    });
    if (response.status == 200) {
        alert("User " + usernameTemp + " purchased item " + itemid);
    }
    else {
        showPage(Login, loginButton);
        alert("Please log in");
    }
}
    
}

const mydragstart = (ev) => {
    ev.dataTransfer.setData("text/plain", ev.target.id);
}

const mydragover = (ev) => {
    ev.preventDefault();
}

const mydrop = (ev) => {
    if (ev.dataTransfer !== null) {
        const data = ev.dataTransfer.getData("text/plain");
        console.log(`Dropped ${data}`);
        ev.target.appendChild(document.getElementById(data));
    }
}

const mydropdelete = (ev) => {
    if (ev.dataTransfer !== null) {
        const data = ev.dataTransfer.getData("text/plain");
        document.getElementById(data).remove();
    }
}



(async() => {
    await fetchVersion();
    await fetchItems();
})();







