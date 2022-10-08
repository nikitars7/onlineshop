const tabsBtn = document.querySelectorAll(".content-checkout__item");
const tabsItems = document.querySelectorAll(".content-checkout__block");
tabsBtn.forEach(function(item){
  item.addEventListener("click",function(){

   let currentBtn = item;
   let tabId = currentBtn.getAttribute("data-tab");
   let currentTab = document.querySelector(tabId);

   if( ! currentBtn.classList.contains('Active')){
 tabsBtn.forEach(function(item){
      item.classList.remove('Active');
   });

   tabsItems.forEach(function(item){
    item.classList.remove('Active');
   });

   currentBtn.classList.add('Active');
   currentTab.classList.add('Active');
   }

  
  });
});

document.querySelector('.content-checkout__item').click(); // nth-child(2) add to tabs__nav for showing second tab firstly