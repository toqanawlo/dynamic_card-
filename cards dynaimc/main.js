
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });


  const cardData=[
  {
     title:"SheGlam Liquid Blush " ,name:'hush hush',image:"./images/hushc.jpg",price:'9.00$'
  }, {
     title:"SheGlam Liquid Blush ", name:'Birthday suit',image:"./images/birthdayc.jpg",price:'7.15$'
  }, {
    title:"SheGlam Liquid Blush ", name:'Devoted',image:"./images/devotedc.jpg",price:'6.80$'
  }, {
    title:"SheGlam Liquid Blush ", name:'Float on',image:"./images/flaotc.jpg",price:'5.80$'
  }, {
    title:"SheGlam Liquid Blush ",  name:'Rose Ruital',image:"./images/rosec.jpg",price:'6.84$'
  }, {
    title:"SheGlam Liquid Blush ", name:'Risky Business',image:"./images/riskyc.jpg",price:'9.00$'
  }, {
    title:"SheGlam Liquid Blush ",  name:'Swipe Right',image:"./images/swipc.jpg",price:'6.00$'
  }, {
    title:"SheGlam Liquid Contour", name:'Solt an',image:"./images/goldenc.png",price:'5.00$'
  }, {
    title:"SheGlam Liquid Contour  ",  name:'Golden sun',image:"./images/goldenc.png",price:'7.00$'
  }, {
    title:"SheGlam Liquid Contour  ", name:'Twany amber',image:"./images/goldenc.png",price:'4.00$'
  },
   {
    title:"SheGlam Liquid Contour  ", name:'Terracotta',image:"./images/goldenc.png " ,price:'5.00$'
  }
,{
    title:"SheGlam Liquid Contour  ",  name:'Warm honey',image:"./images/goldenc.png",price:'7.90$'
  }, {
    title:"SheGlam Liquid Contour  ",  name:'Earthy sepie',image:"./images/goldenc.png",price:'9.80$'
  }, {
    title:"SheGlam Liquid Contour  ", name:'Camel suede',image:"./images/goldenc.png",price:'6.00$'
  }, {
    title:"SheGlam Liquid Lipstick  ", name:'Rule breaker',image:"./images/highc.jpg",price:'7.00$'
  }, {
    title:"SheGlam Liquid Lipstick  ",  name:'High key',image:"./images/highc.jpg",price:'8.00$'
  }, {
    title:"SheGlam Liquid Lipstick  ", name:'Ever',image:"./images/highc.jpg",price:'5.00$'
  }, {
    title:"SheGlam Liquid Lipstick  ", name:'Bold plan',image:"./images/highc.jpg",price:'5.00$'
  }, {
    title:"SheGlam Liquid Lipstick  ",  name:'Cotcha',image:"./images/highc.jpg",price:'5.00$'
  },
];
const imgModel=[{
  src:"./images/lovecake.jpg",
  src:"./images/hush.jpg",
  src:"./images/birthdaysuit.jpg"

}]

const postContainer=document.querySelector('.swiper-wrapper');
const postMethods=()=>{
  cardData.map((postData)=>{
 const postElement=document.createElement('div');
   postElement.classList.add('swiper-slide');
              postElement.innerHTML=`
              <div class="card">
                           <h3 class="title">${postData.title} </h3>
                           <p class="name-blush">${postData.name}</p>
                           <img src="${postData.image}"   alt="">
                            <p class="price">${postData.price}   
                            </p>
                            <div class="icon">
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-half-line"></i>
                          </div>
                            <button onclick="fun('${postData.image}')" class="btn-open">open image</button>
                        </div>
                      </div>
      `
      postContainer.appendChild(postElement);
    

  })
}
postMethods()
const myModal = document.getElementById("exampleModal");

// myModal.addEventListener("shown.bs.modal", () => {
//   console.log("test");
// });
const myModalAlternative = new bootstrap.Modal("#exampleModal", {
   // backdrop: false,
});
function fun(src) {

  for(let i=0;i<imgModel.length;i++){
  myModalAlternative.show();

  myModal.addEventListener("shown.bs.modal", () => {
    const modalBody = document.querySelector(".modal-body");
    console.log(imgModel[i])
  modalBody.innerHTML = `<img width="80%" height="50%" src="${imgModel[i].src}" />`
  });}
}
