/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

let buttonClicked = document.getElementById("btn");

buttonClicked.addEventListener("click", getData);

async function getData() {
  try {
    let response = await fetch("https://api.github.com/users");
    if (response.ok) {
      document.getElementById("message").style.display = "none";

      let result = await response.json();

      for (let i = 0; i < result.length; i++) {
        //---------append---login------------
        let divForOutput = document.getElementById("output");
        let pElForLogin = document.createElement("p");

        let usersLogins = `<p>${result[i].login}</p>`;
        if (result[i + 1]) {
          usersLogins += `<p>${result[i + 1].login}</p>`;
        }
        pElForLogin.innerHTML = result[i].login;
        pElForLogin.style.fontSize = "20px";

        //----------append----image-------------
        let imgElForPhotos = document.createElement("img");
        imgElForPhotos.src = result[i].avatar_url;

        let usersPhotos = `<img>${result[i].avatar_url}`;
        if (result[i + 1]) {
          usersPhotos += `<img>${result[i + 1].avatar_url}`;
        }
        imgElForPhotos.innerHTML = result[i].avatar_url;
        imgElForPhotos.style.borderRadius = "15px";
        imgElForPhotos.style.height = "200px";

        divForOutput.append(pElForLogin, imgElForPhotos);
      }
    }
  } catch (error) {
    console.error(error);
  }
}
