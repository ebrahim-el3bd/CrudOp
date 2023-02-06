/* ⁡⁢⁢⁣-----------------------------⁡⁢⁢⁣[RMP⁡]⁡⁢⁢⁣-----------------------------⁡ */
/*⁡⁢⁢⁣⁡⁢⁣⁣Road Map Product (⁡⁢⁣⁣CRUD⁡)⁡⁡⁡*/
/*[1] Get Total [S-C]⁡*/
/*[2] Create Product⁡⁡⁡ And [3] Save Data In local Storage [⁡⁢⁣⁢S-D⁡]*/
/*[4] Clear Data From Input [⁡⁢⁣⁢S-E]*/
/*[5] Read (Display Product ) [⁡⁢⁣⁢S-F]*/
/*[6] Delete One Product⁡⁡⁡ [⁡⁢⁣⁢S-G]*/
/*[7] Delete ِAll Product⁡⁡⁡ [⁡⁢⁣⁢S-H]*/
/*[8] Count Product⁡⁡⁡ [⁡⁢⁣⁢S-J]⁡⁢⁢⁣*/
/*[9] Update Product [⁡⁢⁣⁢S-K]⁡⁡⁡*/
/*[10] (Search By Title) And (Search By Category) [S-L]*/
/*[11] Clean Data*/
/* ⁡⁢⁢⁣-----------------------------⁡[⁡⁢⁢⁢⁡⁢RMP]⁡⁢⁢⁣--------------------------------⁡ */

/* ⁡⁢⁢⁣-----------------------------[⁡⁢⁣⁢S-B⁡]⁡⁢⁢⁣--------------------------------⁡ */
let title =document.getElementById("title");
let price =document.getElementById("price");
let taxes =document.getElementById("taxes");
let ads =document.getElementById("ads");
let discount =document.getElementById("discount");
let total =document.getElementById("total");
let count =document.getElementById("count");
let category =document.getElementById("category");
let submit =document.getElementById("submit");
let mood ="create";
let tmp;
/* ⁡⁢⁢⁣-----------------------------[⁡⁢⁣⁢E-B⁡]⁡⁢⁢⁣--------------------------------- ⁡*/



/* ⁡⁢⁢⁣------------------------------⁡[⁡⁢⁣⁢S-C⁡]⁡⁢⁢⁣---------------------------------⁡ */
/* ⁡⁢⁣⁢*************⁡ 
*[1] Get Total 
 ⁡⁢⁣⁢*************⁡ */

function getTotal() {
    if(price.value != ""){
        let result = (+price.value + +taxes.value + +ads.value )- +discount.value
        total.innerHTML = result
        total.style.background='#040'
    }else{
        total.innerHTML = '';
        total.style.background='#a00d02'
    }
}

/* ⁡⁢⁢⁣------------------------------⁡[⁡⁢⁣⁢E-C⁡⁡]⁡⁢⁢⁣----------------------------------⁡ */


/* ⁡⁢⁢⁣------------------------------⁡[⁡⁢⁣⁢S-D⁡]⁡⁢⁢⁣-----------------------------------⁡ */
/* ⁡⁢⁣⁢*******************⁡⁡⁢⁣⁢**************************************⁡⁡ 
* [2] Create Product⁡⁡⁡ And [3] Save Data In local Storage
 ⁡⁢⁣⁢*******************⁡⁡⁢⁣⁢**************************************⁡ */
let dataPro;
if(localStorage.product  != null){
    dataPro = JSON.parse(localStorage.product);
}else{
    dataPro=[];
}

submit.onclick=function () {
let newProduct={
    title:title.value.toLowerCase(),
    price:price.value,
    taxes:taxes.value,
    ads:ads.value,
    discount:discount.value,
    total:total.innerHTML,
    count:count.value,
    category:category.value.toLowerCase(),
}
/* ⁡⁢⁢------------------------------[⁡⁢⁣⁢S-J]⁡⁢⁢⁣-------------------------------------⁡ */
/* ⁡⁢⁣⁢⁡⁢⁣⁢************************* 
* [8] Count Product⁡⁡⁡
 ⁡⁢⁣⁢*******************⁡⁡⁢⁣⁢****** */
 if(title.value !="" && price.value != "" && category.value != "" && newProduct.count < 101 ){
    if(mood === 'create'){
        if( newProduct.count > 1){
            for(let i = 0 ; i < newProduct.count ; i++ ){
                dataPro.push(newProduct);
            }
            }else{
                dataPro.push(newProduct);
        }
    }else{
        dataPro[tmp]=newProduct;
        mood='create';
        submit.innerHTML='Create';
        count.style.display='block';
    }
    clearData();
    }


/* ⁡⁢⁢------------------------------[⁡⁢⁣⁢E-J]⁡⁢⁢⁣-------------------------------------⁡ */

localStorage.setItem("product",JSON.stringify(dataPro));
clearData();
showData()
}
/* ⁡⁢⁢⁣------------------------------⁡[⁡⁢⁣⁢E-D⁡]⁡⁢⁢⁣-------------------------------------⁡ */



/* ⁡⁢⁢⁣------------------------------⁡[⁡⁢⁣⁢S-E⁡]⁡⁢⁢⁣-----------------------------------⁡ */
/* ⁡⁢⁣⁢⁡⁢⁣⁢*************************⁡ 
* [4] Clear Data From Input
 ⁡⁢⁣⁢*******************⁡⁡⁢⁣⁢****** */
function clearData() {
    title.value ="";
    price.value ="";
    taxes.value ="";
    ads.value ="";
    discount.value ="";
    total.innerHTML ="";
    count.value ="";
    category.value ="";
}
/* ⁡⁢⁢------------------------------⁡[⁡⁢⁣⁢E-E⁡⁡]⁡⁢⁢⁣-------------------------------------⁡ */




/* ⁡⁢⁢------------------------------⁡[⁡⁢⁣⁢S-F]⁡⁢⁢⁣-------------------------------------⁡ */
/* ⁡⁢⁣⁢⁡⁢⁣⁢*************************⁡ 
* [5] Read (Display Product )
 ⁡⁢⁣⁢*******************⁡⁡⁢⁣⁢****** */
 function showData() {
    getTotal()
    let table=''
    for(let i=0; i < dataPro.length ; i++){
        table +=`
        <tr>
        <td>${i+1}</td>
        <td>${dataPro[i].title}</td>
        <td>${dataPro[i].price}</td>
        <td>${dataPro[i].taxes}</td>
        <td>${dataPro[i].ads}</td>
        <td>${dataPro[i].discount}</td>
        <td>${dataPro[i].total}</td>
        <td>${dataPro[i].category}</td>
        <td><button onclick="updateDate(${i})" id="upDate" >UpDate</button></td>
        <td><button onclick="deleteData(${i})" id="delete" >Delete</button></td>
        </tr>`
    }
    let btnDelete = document.getElementById("deleteAll");
    if (dataPro.length > 0) {
        btnDelete.innerHTML=`
        <button onclick="deleteAll()">Delete All (${dataPro.length})</button>`
    }else{
        btnDelete.innerHTML='';
    }

    document.getElementById("tbody").innerHTML=table

}
showData();
/* ⁡⁢⁢------------------------------⁡[⁡⁢⁣⁢E-F⁡]⁡⁢⁢⁣-------------------------------------⁡ */


/* ⁡⁢⁢------------------------------⁡[⁡⁢⁣⁢S-G]⁡⁢⁢⁣-------------------------------------⁡ */
/* ⁡⁢⁣⁢⁡⁢⁣⁢*************************⁡ 
* [6] Delete One Product
 ⁡⁢⁣⁢*******************⁡⁡⁢⁣⁢****** */
function deleteData(i) {
   dataPro.splice(i,1);
   localStorage.product=JSON.stringify(dataPro);
   showData()
}
/* ⁡⁢⁢------------------------------⁡[⁡⁢⁣⁢E-G]⁡⁢⁢⁣-------------------------------------⁡ */


/* ⁡⁢⁢------------------------------[⁡⁢⁣⁢S-H]⁡⁢⁢⁣-------------------------------------⁡ */
/* ⁡⁢⁣⁢⁡⁢⁣⁢*************************⁡ 
* [[7]Delete All Product
 ⁡⁢⁣⁢*******************⁡⁡⁢⁣⁢****** */
function deleteAll() {
    localStorage.clear();
    dataPro.splice(0);
    showData();
}
/* ⁡⁢⁢------------------------------[⁡⁢⁣⁢E-H]⁡⁢⁢⁣-------------------------------------⁡ */


/* ⁡⁢⁢------------------------------[⁡⁢⁣⁢S-K]⁡⁢⁢⁣-------------------------------------⁡ */
/* ⁡⁢⁣⁢⁡⁢⁣⁢*************************⁡ 
* [9] Update Product⁡⁡⁡
 ⁡⁢⁣⁢*******************⁡⁡⁢⁣⁢****** */
function updateDate(i) {
    title.value=dataPro[i].title;
    price.value=dataPro[i].price;
    taxes.value=dataPro[i].taxes;
    ads.value=dataPro[i].ads;
    discount.value=dataPro[i].discount;
    getTotal()
    count.style.display='none';
    category.value=dataPro[i].category
    submit.innerHTML='Update';
    mood="update";
    tmp=i;
    scroll({
        top:0,
        behavior:"smooth",
    })
    }
/* ⁡⁢⁢------------------------------[⁡⁢⁣⁢E-K]⁡⁢⁢⁣-------------------------------------⁡ */


/* ⁡⁢⁢------------------------------[⁡⁢⁣⁢S-L]⁡⁢⁢⁣-------------------------------------⁡ */
/* ⁡⁢⁣⁢⁡⁢⁣⁢*************************⁡********************* 
* [10] (Search By Title) And (Search By Category)
⁡⁢⁣⁢*******************⁡⁡⁢⁣⁢****************************** */

/* *********************
* function 1 for search
********************** */
let searchMood ='title';

function getSearchMood(id){
    let search = document.getElementById("search")
if(id == "searchTitle"){
    searchMood = "title";
    search.placeholder ='Search By Title';
}else{
    searchMood = "category";
    search.placeholder ='Search By Category';
}
search.focus();
search.value='';
showData();
}

/****************************************************************************/

/* *********************
* function 2 for search
********************** */
function searchData(value) {
let table='';
if(searchMood === "title"){
for(let i = 0; i< dataPro.length; i++){
if(dataPro[i].title.includes(value.toLowerCase())){
    table +=`
    <tr>
    <td>${i}</td>
    <td>${dataPro[i].title}</td>
    <td>${dataPro[i].price}</td>
    <td>${dataPro[i].taxes}</td>
    <td>${dataPro[i].ads}</td>
    <td>${dataPro[i].discount}</td>
    <td>${dataPro[i].total}</td>
    <td>${dataPro[i].category}</td>
    <td><button onclick="updateDate(${i})" id="upDate" >UpDate</button></td>
    <td><button onclick="deleteData(${i})" id="delete" >Delete</button></td>
    </tr>`
}
}
}else{
for(let i = 0; i< dataPro.length; i++){
    if(dataPro[i].category.includes(value.toLowerCase())){
        table +=`
        <tr>
        <td>${i}</td>
        <td>${dataPro[i].title}</td>
        <td>${dataPro[i].price}</td>
        <td>${dataPro[i].taxes}</td>
        <td>${dataPro[i].ads}</td>
        <td>${dataPro[i].discount}</td>
        <td>${dataPro[i].total}</td>
        <td>${dataPro[i].category}</td>
        <td><button onclick="updateDate(${i})" id="upDate" >UpDate</button></td>
        <td><button onclick="deleteData(${i})" id="delete" >Delete</button></td>
        </tr>`
    }
}
}
document.getElementById("tbody").innerHTML=table
}
/* ⁡⁢⁢------------------------------[⁡⁢⁣⁢E-L]⁡⁢⁢⁣-------------------------------------⁡ */































































