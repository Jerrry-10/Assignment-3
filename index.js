// 1) <section id="container"> Gets the section with a id of container without queryselector
q1 = document.getElementById("container")
console.log(q1)

// 2) <section id="container"> Does the same thing as 1 but uses querySelector
q2 = document.querySelector("#container")
console.log(q2)

// 3) NodeList [ li.second, li.second ] Gets the elements with a class of second 
q3 = document.querySelectorAll(".second")
console.log(q3)

// 4) <li class="third"> Gets the li with the class thrid but only the one in the ol
q4 = document.querySelector("ol .third")
console.log(q4)

// 5) changes the text to Hello for the section with the id of container
//q5 = q1.innerText = "Hello"
//console.log(q5)

// 6) <div class="footer main"> Adds main to the class of footer
q6 = document.querySelector("div.footer")
q6.classList.add("main")
console.log(q6)

// 7) <div class="footer"> removes main from the class of footer
q7 = q6.classList.remove("main")
console.log(q6)


// 8) makes a new li element
q8 = document.createElement("li")
console.log(q8)

// 9) adds four to the li
console.log(q8.innerText = "four")

// 10) adds the li with the value of 4 to the unorder list
q10 = document.querySelector("ul")
console.log(q10.appendChild(q8))

// 12) Loops the lis in the ol and gives it a background color of green.
q12 = document.querySelectorAll("ol")
for(let i = 0; i < q12.length; i++){
    q12[i].style.backgroundColor = "green";
}
console.log(q12)

// 13) removes the div with the footer class
q13 = document.querySelector("div.footer")
console.log(q13.remove())
