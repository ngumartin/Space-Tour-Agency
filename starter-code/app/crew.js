import articleDetails from "../data.json" assert { type: "json" };
const crewDetails = articleDetails.crew;

const articleWrapper = document.querySelector("#main");

articleWrapper.innerHTML="<h1>hello world</h1>"



// crewDetails.map((crew) => { 
//     console.log(crew)
//     const template = `<article class="crew-details flow" id="commander-tab" role="tabpanel" tabindex="0">
//     <header class="flow flow--space-small">
//     <h2 class="fs-600 ff-serif uppercase">${crew.role}</h2>
//     <p class="fs-700 ff-serif uppercase">${crew.name}</p>
//     </header>
//     <p>${crew.bio}</p>       
//     </article>`
//     articleWrapper.innerHTML+=template
// })