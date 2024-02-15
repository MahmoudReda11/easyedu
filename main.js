
// btn share function 

        function copyCode(cardId) {

            var shareLink = "https://mahmoudreda11.github.io/easyedu/" + '#' + cardId;
            console.log(shareLink)
            var textarea = document.createElement("textarea");
            textarea.value = shareLink;
            document.body.appendChild(textarea);
            textarea.onfocus = () =>{
                console.log("reda")
            }
            textarea.select();
            textarea.setSelectionRange(0, 99999); 
            
            document.execCommand("copy");

            document.body.removeChild(textarea);

           

            copyDone(cardId)
        }

        // message copy done


        function copyDone(message){
            var divCopyDone = document.getElementById("copydone")
            divCopyDone.classList.add("active")
            
            divCopyDone.innerHTML = `<h4>تم نسخ رابط <span>${message}</span> بنجاح</h4>`

            setTimeout(function() {
                divCopyDone.classList.remove("active");
            }, 2000);
        }
// عشان لما الموقع يتفتح لو حد عاملة شير
        window.onload = function () {
            var cardIdFromHash = window.location.hash.substr(1); 
            
            if (cardIdFromHash) {
                highlightCard(cardIdFromHash);
            }
        };

        function highlightCard(cardId) {
            var targetCard = document.getElementById(cardId);

            if (targetCard) {
                targetCard.classList.add('highlight');
               
                targetCard.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                });
            }
        }



fetch('data.json')
.then(response => response.json())
       .then(data => displayImages(data))
       .catch(error => console.error('حدث خطأ في استرجاع بيانات المنتجات:', error));


       // for all cards
       function displayImages(images) {
           var allcoupons = document.getElementById('allcoupons_id');
   
           images.forEach(function (card) {
            let developerHtml = '';
            let githupDev = '';
            if (card.githup) {
            githupDev = `<div class="githupDev">*حتى تستطيع الاستفادة من هذا العرض يجب إنشاء حساب على موقع GitHub.</div>`;
            }
            if (card.developer) {
                developerHtml = `<div class="forDev">For Developer</div>`;
            }
            allcoupons.innerHTML += ` 
            <div id="${card.id}" class="box">
            <img src="${card.img}" alt="">
            
            ${developerHtml}
            <p class="bord_p">${card.details}</p>
            <p>${card.details2}</p>
            <div class="btns">
                <a href="${card.link}" target="_blank" class="btn">اضغض هنا</a>

                <span class="btn btnshare" onclick="copyCode('${card.id}')">مشاركة <svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>share</title> <path d="M0 25.472q0 2.368 1.664 4.032t4.032 1.664h18.944q2.336 0 4-1.664t1.664-4.032v-8.192l-3.776 3.168v5.024q0 0.8-0.544 1.344t-1.344 0.576h-18.944q-0.8 0-1.344-0.576t-0.544-1.344v-18.944q0-0.768 0.544-1.344t1.344-0.544h9.472v-3.776h-9.472q-2.368 0-4.032 1.664t-1.664 4v18.944zM5.696 19.808q0 2.752 1.088 5.28 0.512-2.944 2.24-5.344t4.288-3.872 5.632-1.664v5.6l11.36-9.472-11.36-9.472v5.664q-2.688 0-5.152 1.056t-4.224 2.848-2.848 4.224-1.024 5.152zM32 22.080v0 0 0z"></path> </g></svg></span>
            </div>
            ${githupDev}
        </div>
           `
           //     دي بتاعت المشاركة;
        })

            var swiperContent = []
        for (let i = 0; i < images.length; i++) {
            if(images[i].status == "most"){
                swiperContent.push(images[i])
            }
            
        }
        
        var sliceContent = document.getElementById("slicecontent")

        swiperContent.forEach(function (cardSlide) {
            let developerHtml = '';
            let githupDev = '';
            if (cardSlide.githup = "true") {
                githupDev = `<div class="githupDev">*حتى تستطيع الاستفادة من هذا العرض يجب إنشاء حساب على موقع GitHub.</div>`;
            }
            if (cardSlide.developer == "true") {
                developerHtml = `<div class="forDev">For Developer</div>`;
            }
        
            sliceContent.innerHTML += ` 
            <div class="box swiper-slide">
            <img src="${cardSlide.img}" alt="">
            <h1>${cardSlide.name}</h1>
            ${developerHtml}
    
            <p class="bord_p">${cardSlide.details}</p>
            <p>${cardSlide.details2}</p>
            
            <div class="btns">
            <a href="${cardSlide.link} target="_blank" class="btn">اضغض هنا</a>

            <span class="btn btnshare" onclick="copyCode('${cardSlide.id}')">مشاركة</span>
            </div>
            ${githupDev}
        </div>
           `
           //     دي بتاعت المشاركة;
        })
        // slider content


     
           // for search bar

           

       }

    
       
       // search input 
function sho_ul_search(){
    var search_card = document.getElementById('search_card');

    search_card.style.opacity = "1"
    search_card.style.zIndex = "10"
    search_card.style.display = "flex"
    
   }
   function hide_ul_search(){
    var search_card = document.getElementById('search_card');
    search_card.style.opacity = "0"
    search_card.style.display = "none"

   }


   function search(){
    let searchBar = document.querySelector('.srch_inp').value.toUpperCase();
    let search_card = document.querySelector('#search_card')
    let sm_card = document.querySelectorAll('.sm-card')
    let searchName = document.querySelectorAll('.searchName')
   
    for(let i = 0; i < searchName.length; i++){
        if(searchName[i].innerHTML.toUpperCase().indexOf(searchBar) >= 0){
            sm_card[i].style.display = ""
        }
        else{
            sm_card[i].style.display = "none"
        }
    }
}
    

function changecardColor(id){
   var myidCard = document.getElementById(id);
    myidCard.style.animation = "bgBox 3s  ease"
    setTimeout(function() {
        myidCard.style.animation = ""
    }, 3000)
}



/* header */ 

// let navLinks = document.getElementById("links");
// let btnMenu = document.getElementById("btnMenu");
let header = document.getElementById("header");

// function openCloseMenu(){
//     navLinks.classList.toggle("active")
// }

let started = false; 
window.onscroll = function () {
    if(this.scrollY >= 200){
      header.classList.add('active');
  }
  else{
      header.classList.remove('active');
  }
  };