// this function help to show new section which it contains inputs. 
document.querySelector(".add").addEventListener("click", function () {
    document.querySelector(".modal").style.display = "flex"
})
// this function help to  records the input data in a table
document.querySelector(".execute").addEventListener("click", function () {
    document.querySelector('tbody').innerHTML += `
<tr>
<td>${document.querySelectorAll("tr").length}</td>
<td>${document.querySelector(".name").value}</td>
<td>${document.querySelector(".surname").value}</td>
<td>${document.querySelector(".age").value}</td>
<td>${document.querySelector(".salary").value} $</td>
<td>
<i class="fa-solid fa-trash" onclick="clearFunction(this)"></i>
</td>
</tr>
`
// this part help to unload input data
document.querySelectorAll(".modal-box input ").forEach(x => {
x.value = ""
})
// this part help to exit 
document.querySelector(".modal").style.display = "none"
})
// this function help to remove row of table
function clearFunction(x){
x.parentElement.parentElement.remove()
   court()
}
// it is function for searching
document.querySelector(".search").addEventListener('keyup', function () {
document.querySelectorAll("tbody tr").forEach(x => {
x.style.display = 'none'
})
document.querySelectorAll('tbody tr').forEach(y => {
if (y.innerText.toLowerCase().includes(document.querySelector('.search').value.toLowerCase())) {
y.style.display = ''
}})
})
var a = 0
function court() {
    a = 0
    document.querySelectorAll('tbody tr ').forEach(x => {
        a++
        x.children[0].innerHTML = a
    })
}