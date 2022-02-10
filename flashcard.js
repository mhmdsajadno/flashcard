let question = function () {
  userQ = document.getElementById("question").value;
  return userQ;
};

let answer = function () {
  userA = document.getElementById("answer").value;
  return userA;
};

let addDiv = (question, answer) => {
  const div = document.createElement("div");
  div.className = "useroutput";
  const theQ = document.createElement("h2");
  theQ.innerHTML = question;
  const theA = document.createElement("h3");
  theA.innerHTML = answer;
  theA.setAttribute("style", "display:none");
  const btn = document.createElement('button')
  btn.id = "divBtn"
  btn.innerHTML = "Delete flashcard"
  btn.onclick = function deleteDiv(){
    div.parentNode.removeChild(div)
  }
  div.appendChild(theQ);
  div.appendChild(theA);
  div.appendChild(btn)
  document.body.appendChild(div);

  div.addEventListener("click", () => {
    if (theA.style.display == "none") theA.style.display = "block";
    else theA.style.display = "none";
  });
};



let create = function () {
  if (userA != "" || userQ != ""){
    addDiv(userQ, userA);
    userA = "";
    userQ = "";
    document.getElementById("answer").value = "";
    document.getElementById("question").value = "";
  }
};
