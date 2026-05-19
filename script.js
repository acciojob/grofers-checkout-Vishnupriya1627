const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let sum=0;

const getSum = () => {
//Add your code here
  let prices = document.querySelectorAll(".prices");
//   console.log(prices[0].innerHTML);
//   console.log(prices.length);
	for(const element of prices){
        let num = parseInt(element.innerHTML);
        // console.log(num, typeof num);
        sum+=num;
    }
	console.log(sum);

    let table = document.querySelector("tbody");
    // table.innerHTML+="<tr><td>Heyaaa!!!</td></tr>"
    const newRow = document.createElement("tr");
    const newData1 = document.createElement("td");
    newData1.innerHTML = "Total";
    const newData2 = document.createElement("td");
    newData2.innerHTML=sum;
    newData2.setAttribute("colspan","2");
    newRow.appendChild(newData1);
    newRow.appendChild(newData2);
    table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

