let wBox = $('.sideBox').innerWidth()
closeee()
    $(".open-close-icon").removeClass("fa-align-justify");
    $(".open-close-icon").addClass("fa-x");

$('.side-bar i').click(function(){
if( $('.sideBar').css('left')=='0px'){
    closeee()
}
else{
    $('.sideBar ').animate({left: `0px`}, 1000)
}
})
$(document).ready(function(){
    $('#loading').fadeOut(1000,() => {
$('#loading').fadeOut(1000)

    })
    $('body').css('overflow-y','auto')

});

let searchInput= document.getElementById("searchInput")
 let searchValu;
 let searchInputt= document.getElementById("searchInputt")
 let searchVal;
 let pass=document.getElementById("pass");
let repass=document.getElementById("repass");
 


home()

$("#search").click(function(){
    closeee();


   $("#search-div").toggleClass("d-none")
   $(".myrow").html("")
    
})
    searchInput.addEventListener('keyup',function(){
        searchByName()
        
    })

    searchInputt.addEventListener('keyup',function (){
        searchByletter();
    })


$("#Categories").click(function(){
    closeee();


    $("#search-div").addClass("d-none")
    $("#contact-div").addClass("d-none")
    $(".myrow").html("")

    getCat();
})

$("#area").click(function(){
    
    closeee();
    $("#search-div").addClass("d-none")
    $("#contact-div").addClass("d-none")
    getArea();
})

$("#ingred").click(function(){
   
    closeee();
    $("#search-div").addClass("d-none")
    $("#contact-div").addClass("d-none")
    getIngredients();
})


$("#contact").click(function(){

    
    closeee();
    $("#search-div").addClass("d-none")
    $("#contact-div").toggleClass("d-none")
    $(".myrow").html("")
    
})

async function searchByName(){
    searchValu= searchInput.value;
    
    let res= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValu}`)
    let resjson= await res.json()
    let mealsArr= resjson.meals

    let html=""
    if(mealsArr)
    {
        mealsArr.forEach(element => {
            html+=` <div class = "col-md-4 py-2   ">
            <div class="card  ">
  <img src="${element.strMealThumb}" >
  <a href="#"  data-id = "${element.idMeal}">${element.strMeal}</a>
  </div>

  
  </div>

`
          });
    }
  
    document.querySelector(".myrow").innerHTML=html;
    
  
}
async function searchByletter(){
    searchVal= searchInputt.value.trim();
    console.log(searchVal)
    let res= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchVal}`)
    let resjson= await res.json();
    let mealsArr= resjson.meals

    let html=""
    if(mealsArr)
    {
        mealsArr.forEach(element => {
            html+=` <div class = "col-md-3 py-2   ">
            <div class="card">
  <img src="${element.strMealThumb}" >
  <div >
  <a href="#"  data-id = "${element.idMeal}">${element.strMeal}</a>

  </div>
</div>
</div>
`
          });
    }
    document.querySelector(".myrow").innerHTML=html;
    
  
}

function closeee(){
    $('.sideBar ').animate({ left: `-${wBox}px`}, 1000)
}

async function getCat(){

    closeee()
     let res= await fetch("https://www.themealdb.com/api/json/v1/1/categories.php`  ")
     let resjson= await res.json()
     let catArr= resjson.categories
 
     let html=""
     if(catArr)
     {
         catArr.forEach(element => {
           
           
             html+=` <div class = " col-md-3  py-2   ">
             <div class="card ">
   <img src="${element.strCategoryThumb}" class="card-img-top" alt="food" cat-id = "${element.strCategory}">
   <div class="card-body">
     <h5 class="card-title" cat-id = "${element.strCategory}">${element.strCategoryDescription}</h5>
     
   </div>
 </div>
 </div>
 `
               
           });
           
     }
     document.querySelector(".myrow").innerHTML=html;
    
     
    
 }

 async function getArea(){
    closeee()
    let res= await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
    let resjson= await res.json()
    let areaArr= resjson.meals

    let html=""
    if(areaArr)
    {
        areaArr.forEach(element => {
          
          
            html+=  `<div class=" col-md-3 p-3  ">
                       <div area-id="${element.strArea}">
                       <i area-id="${element.strArea}" class="fa-solid fa-house-laptop fa-4x text-white "></i>
                       <h5  class='text-white' area-id="${element.strArea}">${element.strArea}</h5>
                       
                       </div>

                       </div>    
                       ` 
          });
          
    }

    document.querySelector(".myrow").innerHTML=html;

}
async function getIngredients(){
    
    let res= await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
    let resjson= await res.json()
    let ingredArr= resjson.meals

    let html=""
    if(ingredArr)
    {
       
          for(let i=0; i<20;i++)
{
            html+=  `<div class=" col-md-3   text-center py-2" >
                       <div ingred-id="${ingredArr[i].strIngredient}" class=" text-white py-5  ">
                       <i ingred-id="${ingredArr[i].strIngredient}" class="fa-solid fa-drumstick-bite fa-4x "></i>
                       <h5 >${ingredArr[i].strIngredient}</h5>
                       <p ingred-id =" ${ingredArr[i].strDescription} " </p>

                       </div>

                       </div>    
                       `
          }
    }
    
    document.querySelector(".myrow").innerHTML=html;
   
}
async function home(){
   
    let res= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    let resjson= await res.json()
    let mealsArr= resjson.meals

    let html=""
    if(mealsArr)
    {
        mealsArr.forEach(element => {
            html+=` <div class = " col-md-4  py-2   ">
            <div class="card ">
  <img src="${element.strMealThumb}" >
  <div class="card-body">
    
    <a href="#"  data-id = "${element.idMeal}">${element.strMeal}</a>
  </div>
</div>
</div>
`
      
    
    });
    }
    document.querySelector(".myrow").innerHTML=html;
  
}

async function categoryMeals(id){
    
     let res= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
     let resjson= await res.json()
     let mealsArr= resjson.meals 
     let html=""
     if(mealsArr)
     {
         mealsArr.forEach(element => {
             html+=` <div class = " col-md-4  py-2   ">
             <div class="card">
   <img src="${element.strMealThumb}" class="card-img-top" alt="food">
   <div class="card-body">
     <a href="#"  data-id = "${element.idMeal}"> </a>
   </div>
 </div>
 </div>
 `           
});
           
     }
     document.querySelector(".myrow").innerHTML=html;

 }

 
 async function AreaMeals(id){
    console.log(id);
    
     let res= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${id}`)
     let resjson= await res.json()
     let mealsArr= resjson.meals 
     let html=""
     if(mealsArr)
     {
         mealsArr.forEach(element => {
             html+=` <div class = "col-lg-3 col-md-4 col-sm-6 py-2   ">
             <div class="card">
   <img src="${element.strMealThumb}" class="card-img-top" alt="food">
   <div class="card-body">
     <a href="#"  data-id = "${element.idMeal}">${element.strMeal}</a>
   </div>
 </div>
 </div>
 `
        
       
               
           });
           
     }
     document.querySelector(".myrow").innerHTML=html;
    }
 async function IngredientsMeals(id){
    
     let res= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${id}`)
     let resjson= await res.json()
     let mealsArr= resjson.meals 
     let html=""
     if(mealsArr)
     {
         mealsArr.forEach(element => {
             html+=` <div class = " col-md-3   ">
             <div class="card">
   <img src="${element.strMealThumb}" class="card-img-top" alt="food">
   <div class="card-body">
   <a href="#"  data-id = "${element.idMeal}">${element.strMeal}</a>
   
   </div>
 </div>
 </div>
 `
        
       
               
           });
           
     }
     document.querySelector(".myrow").innerHTML=html;
 
 }

document.addEventListener('click',async function(e){
    
    
    let category= e.target.getAttribute("cat-id")
     let area=e.target.getAttribute("area-id")
     let ingredient=e.target.getAttribute("ingred-id")
     let id=e.target.getAttribute("data-id")
   
     if(area!=null){
       
     AreaMeals(area);
    
     
     }
     
 if(id!=null)
    {
    let res= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    let resjson= await res.json()
    let mealsArr= resjson.meals

    let html=""
    if(mealsArr)
    {
        mealRecipeModal(mealsArr)
    }
    
    
}
   
})

function mealRecipeModal(recipe){
   
 
   let meal=recipe[0]
 
   let html=`<div class=" text-white pt-2" >
   <div class="modal-dialog">
     <div class="modal-content">
       <div class="modal-header border-bottom mb-2 ">
         <h5  class="modal-title ">${meal.strMeal}</h5>
        
       </div>

       <div class="modal-body row mt-2">
       <div class="  col-md-4  ">
       <img class="w-100 mb-3 " src=${meal.strMealThumb}>
     </div>
     <div class="col-md-8 text-start   ">
       <h2>Instructions</h2>
       <p class="">${meal.strInstructions}</p>
       <p class="fw-bolder">Area : <span class="fw-lighter">${meal.strArea}</span></p>
       <p class="fw-bolder">Category : <span class="fw-lighter ">${meal.strCategory}</span></p>
       <h3>Recipes :</h3>
       <a class="btn  btn-danger text-white mb-2" target="_blank" href=${meal.strYoutube}>Youtub</a>
     </div>
       </div>


       <div class="modal-footer border-top py-1 ">
         <button type="button" class="btn btn-secondary" onclick="home()">Close</button>
       </div>
     </div>
   </div>
 </div>

`

document.querySelector(".myrow").innerHTML=html;
$("#recipes").html(recipes)

}


if(pass)
{
  pass.addEventListener("keyup",function(){
    passwordValidation();
 })
}

$('#email').keyup(function(){
    ValidateEmail();
 })



 function passwordValidation(){
    if(/^[A-Za-z]\w{7,14}$/.test(pass.value))
    {
    pass.classList.remove("is-invalid")
    pass.classList.add("is-valid")
    document.getElementById("pass-valid").style.display="none"
    return true
    }
     else { 
        pass.classList.remove("is-valid")
        pass.classList.add("is-invalid")
        document.getElementById("pass-valid").style.display="block"
        return false
  }
 }


function ValidateEmail() 
{
    
    let mail=$('#email').val();
    
        if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(mail))
    {
        
        $("#email").removeClass("is-invalid")
        $("#email").addClass("is-valid")
        document.getElementById("invalidmail").style.display="none"
       return true
    }
    else
    {
    
    $("#email").removeClass("is-valid")
    $("#email").addClass("is-invalid")
    document.getElementById("invalidmail").style.display="block"
        
        return false
    }

}












