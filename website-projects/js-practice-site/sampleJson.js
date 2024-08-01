async function populate(){
    const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

    const request = new Request(requestURL);
    const response = await fetch(request);
    const superHeroes = await response.json();
    
    popuLateHeader(superHeroes);
    populateHeroes(superHeroes);
}

function popuLateHeader(data){
    const header = document.querySelector("header");
    const myH1 = document.createElement("h1");
    const myH2 = document.createElement("h2");
    
    myH1.textContent = data.squadName;
    myH2.textContent = `Hometown: ${data.homeTown} / Formed: ${data.formed}`;

    header.appendChild(myH1);
    header.appendChild(myH2);
}

function populateHeroes(data){
    const section = document.querySelector("section");
    const heroes = data.members; 

    for(const hero of heroes){
        const article = document.createElement("article");
        const myH2 = document.createElement("h2");
        const myP1 = document.createElement("p");
        const myP2 = document.createElement("p");
        const myUl = document.createElement("ul");

        const name = hero.name; 
        const secretIdentity = hero.secretIdentity;
        const age = hero.age;
        const powers = hero.powers;

        myH2.textContent = name;
        myP1.textContent = secretIdentity;
        myP2.textContent = age;

        for (const power of powers){
            const myLi = document.createElement("li");

            myLi.textContent = power;
            myUl.appendChild(myLi);
        }
    
        article.appendChild(myH2);
        article.appendChild(myP1);
        article.appendChild(myP2);
        article.appendChild(myUl);
        section.appendChild(article);
    }
}

populate(); 