let a=document.getElementById("res1");
let c=document.createElement("p");
let b=document.createElement("button");
let d=document.createElement("p");
let e=document.createElement("button");
a.appendChild(c);
a.appendChild(b);
a.appendChild(d);
a.appendChild(e);
c.textContent="Cost of the minimum spanning tree = 5 * 1 + 1 * 1 + 1 * 2 + 1 * 2 + 1 * 100 ";
b.textContent="Cost of minimum spanning tree = " + parseInt(5 * 1 + 1 * 1 + 1 * 2 + 1 * 2 + 1 * 100);
b.classList.add("centering-2", "btn" ,"btn-secondary");
d.innerHTML="No. of Minimum Spanning trees = 6<sub>C<sub>5</sub></sub> * 6<sub>C</sub><sub>1</sub>  * 2<sub>C</sub><sub>1</sub> * 2<sub>C</sub><sub>1</sub>";
e.textContent="No. of Minimum Spanning trees = 144"
e.classList.add("centering-2","btn","btn-secondary")