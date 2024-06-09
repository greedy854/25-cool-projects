const tabBtn = document.querySelectorAll(".tab"),
      tabContainer = document.querySelector(".tab-nav-container"),
      phContainer = document.querySelector(".phone-container");

tabBtn.forEach((clickedTab) => {
  
  clickedTab.addEventListener("click", () => {
    tabBtn.forEach((tab) => {
      tab.classList.remove("active");
    });
    
    clickedTab.classList.add("active");
    
    //getComputedStyle() возвращает объект содержащий значения всех CSS свойств элемента, полученные после применения всех активных таблиц стилей
    //getPropertyValue() интерфейс метода, который возвращает DOMString, указанного CSS свойства.
    const clickedTabBGColor = getComputedStyle(clickedTab).getPropertyValue('background-color');
    phContainer.style.backgroundColor = clickedTabBGColor;
    
    let icon = clickedTab.querySelector(".fa"), 
        newIcon = document.createElement("i");

    newIcon.classList.add("fa", `${icon.classList[1]}`,"icon");
    
    phContainer.removeChild(phContainer.querySelector(".fa"));
    phContainer.insertBefore(newIcon, tabContainer);
    
});
  
})