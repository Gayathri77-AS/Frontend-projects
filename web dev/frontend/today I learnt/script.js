const initialFacts = [
    {
      id: 1,
      text: "React is being developed by Meta (formerly facebook)",
      source: "https://opensource.fb.com/",
      category: "technology",
      votesInteresting: 24,
      votesMindblowing: 9,
      votesFalse: 4,
      createdIn: 2021,
    },
    {
      id: 2,
      text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
      source:
        "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
      category: "society",
      votesInteresting: 11,
      votesMindblowing: 2,
      votesFalse: 0,
      createdIn: 2019,
    },
    {
      id: 3,
      text: "Lisbon is the capital of Portugal",
      source: "https://en.wikipedia.org/wiki/Lisbon",
      category: "society",
      votesInteresting: 8,
      votesMindblowing: 3,
      votesFalse: 1,
      createdIn: 2015,
    },
    {
        id: 4,
        text: "jonas",
    }
  ];

  const CATEGORIES = [
    { name: "technology", color: "#3b82f6" },
    { name: "science", color: "#16a34a" },
    { name: "finance", color: "#ef4444" },
    { name: "society", color: "#eab308" },
    { name: "entertainment", color: "#db2777" },
    { name: "health", color: "#14b8a6" },
    { name: "history", color: "#f97316" },
    { name: "news", color: "#8b5cf6" },
  ];
  
//selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form")
const factsList = document.querySelector(".facts-list");

//Create DOM elements :render facts in list
factsList.innerHTML = "";

//load data from superbase
loadfacts();
async function loadfacts(){
  const res = await fetch("https://eocpgzilbhighxgvnyrm.supabase.co/rest/v1/fact",{
    headers:{
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVvY3BnemlsYmhpZ2h4Z3ZueXJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk0ODU1NjIsImV4cCI6MjAwNTA2MTU2Mn0.X-2IXMs2NXc4vdQmlF3g3_Czc-kCxS6OiEhHW2C3qYY",
    },
  });
  const data = await res.json();
  //console.log(data);
  //const filteredData = data.filter((fact)=>fact.category === "technology");
  createFactsList(data);
}

function createFactsList(dataArray){
//factsList.insertAdjacentHTML("afterbegin","<li>Jonas</li>")
const htmlArr = dataArray.map(
    (fact)=>`<li class = "fact">
    <p>
      ${fact.text}
      <a
        class="source"
        href="${fact.source}"
        target="_blank"
      >(Source) </a>
    </p>
    <span class="tag" style="background-color: #3b82f6">${fact.category}</span>
    </li>`
);
console.log(htmlArr);
const html = htmlArr.join("");
factsList.insertAdjacentHTML("afterbegin",html);

}

//toggle form visibility
btn.addEventListener('click',function(){
    if(form.classList.contains("hidden")){
        form.classList.remove("hidden");
        btn.textContent = "Close"
    }
    else{
        form.classList.add("hidden");
        btn.textContent = "Share a fact";
    }
});

/*let votesforinteresting = 23;
let votesformindblowing = 5;
votesforinteresting++;
console.log(votesforinteresting);

let totalupvote = votesforinteresting+votesformindblowing;
console.log(totalupvote);
function calcFactAge(year){
    const currentYear = new Date().getFullYear();
    const age = currentYear - year;
    if (age >= 0) return age;
    else return `Impossible year.Year needs to be less or equal ${currentYear}`;
}

const age1 = calcFactAge(2015);
console.log("age",age1);
const calcFactAge2 = (year) => year <= new Date().getFullYear() ? new date().getFullYear()- year:`Impossible year,year needs to be less or equal`${new date().getFullYear()};
console.log(calcFactAge2(2015));
let votesforinteresting = 20;
let votesformindblowing = 120;

if(votesforinteresting === votesformindblowing){
    alert("This fact is equally interesting and mindblowing")
}else if (votesforinteresting > votesformindblowing){
    console.log("Interesting Fact!");
}else if (votesforinteresting < votesformindblowing){
    console.log("Mindblowing Fact!");
}

//falsy values :0,'',null,undefined
//truthy value: everything else

if(votesformindblowing){
    console.log("mindblowing fact!");
}else {
    console.log("not so special ")
}

let votesFalse = 7;
const totalupvote = votesforinteresting+votesformindblowing;
const message = totalupvote>votesFalse ? "The fact is true":"Might be false,check more sources..."
alert(message.toUpperCase());

const str = `The current fact is "${message}.It is ${calcFactAge(2015)} years old"`;
console.log(str);

const fact = ["Lisbon is the capital of Portugal",2015,true,"something"];
console.log(fact[fact.length-1]);
const newFact = [...fact,"society"];
console.log(newFact);

[2,4,6,8].forEach(function(element){
    console.log(element);
});
    
const times100 = [20,40,60,80].map((el)=> el = 10)
console.log(times100)
const factobj = {
    text: "Lisbon is the capital of portugal",
    category: "society",
    createdIn: 2015,
    isCorrect: true,
    createSummary: function(){
        return `The fact is ${this.text} is from cataegort ${this.category.toUpperCase()}`;
    } 
};
console.log(factobj["text"]);
console.log(factobj.createSummary());

const CATEGORIES = [
    { name: "technology", color: "#3b82f6" },
    { name: "science", color: "#16a34a" },
    { name: "finance", color: "#ef4444" },
    { name: "society", color: "#eab308" },
    { name: "entertainment", color: "#db2777" },
    { name: "health", color: "#14b8a6" },
    { name: "history", color: "#f97316" },
    { name: "news", color: "#8b5cf6" },
  ];

  const allcategories = CATEGORIES.map((el) => el.name)
  console.log(allcategories);


  const initialFacts = [
    {
      id: 1,
      text: "React is being developed by Meta (formerly facebook)",
      source: "https://opensource.fb.com/",
      category: "technology",
      votesInteresting: 24,
      votesMindblowing: 9,
      votesFalse: 4,
      createdIn: 2021,
    },
    {
      id: 2,
      text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
      source:
        "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
      category: "society",
      votesInteresting: 11,
      votesMindblowing: 2,
      votesFalse: 0,
      createdIn: 2019,
    },
    {
      id: 3,
      text: "Lisbon is the capital of Portugal",
      source: "https://en.wikipedia.org/wiki/Lisbon",
      category: "society",
      votesInteresting: 8,
      votesMindblowing: 3,
      votesFalse: 1,
      createdIn: 2015,
    },
  ];
  
function calcFactAge(year){
    const currentYear = new Date().getFullYear();
    const age = currentYear - year;
    if (age >= 0) return age;
    else return `Impossible year.Year needs to be less or equal ${currentYear}`;
}

const factAges = initialFacts.map((el)=>calcFactAge(el.createdIn));
console.log(factAges.join("-"));
*/
  
