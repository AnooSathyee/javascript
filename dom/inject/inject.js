/*Exercise instructions : take the html code from the following codepen : https://codepen.io/ayunas-the-scripter/pen/WNQgpqB, and use JavaScript DOM manipulation to inject the html into the inject id element of inject.html.  You are not allowed to simply set the innerHTML of the <div> to the entire html document. 
*/

const injectElement = document.querySelector("div")

// create elements and add the elements
// h1
let centerElement = document.createElement("center")
let h1Tag = document.createElement("h1")
h1Tag.innerHTML = `<i>HTML Practice Exercise TEKcamp.</i>`
injectElement.appendChild(centerElement)
centerElement.appendChild(h1Tag)

// h2
let h2Tag = document.createElement("h2")
let href = document.createElement("a")
href.setAttribute("href", "https://teksystems.com")
href.innerHTML = `TEKsystems "TEKcamp"`;
let iElement = document.createElement("i")

//<hr>
let hr1 = document.createElement("hr")
injectElement.appendChild(hr1);

// para - 1
let p1 = document.createElement("p")
p1.innerHTML = `I love <i>HTML</i> for the following reasons:`
injectElement.appendChild(p1);

// ol
let ol = document.createElement("ol")

injectElement.appendChild(ol);
// list 1
let l1 = document.createElement("li")
l1.textContent = `I learned it quickly.`
ol.appendChild(l1)
// list 2
let l2 = document.createElement("li")
l2.textContent = `I can make web pages using code`
ol.appendChild(l2)
// list 3
let l3 = document.createElement("li")
l3.textContent = `It’s fun.`
ol.appendChild(l3)
// <hr>
let hr2 = document.createElement("hr")
injectElement.appendChild(hr2)

// p2
let p2 = document.createElement("p")
p2.innerHTML = `My instructor’s email address is: <a href="mailto:ayunas@teksystems.com">ayunas@teksystems.com</a>`

//
let h1TextEl = document.createElement("h1")
let p3 = document.createElement("p")

h1TextEl.textContent = `Have a great day!`
p3.textContent = `I really look forward to learning how to code! Have a great day. -[Team "Git'er Done"]`

// intermediate step
let h2Link = h2Tag.innerHTML = (href)

centerElement.appendChild(h2Link)
injectElement.appendChild(hr2)
injectElement.appendChild(p2)
injectElement.appendChild(h1TextEl)
injectElement.appendChild(p3)

console.log(injectElement)

/*****************************************************/