document.addEventListener("DOMContentLoaded", () => {
    const accordionItems = document.querySelectorAll(".faq_questions");
  
    accordionItems.forEach((accordion) => {
      accordion.addEventListener("click", (e) => toggleAccordion(e));
    });
  
    const toggleAccordion = (e) => {
      let target = e.currentTarget;
      const answer = target.querySelector(".faq-answer");
      const wrapper = target.querySelector(".faq-wrapper");
      const PlusIcon = target.querySelector(".plus-icon");
      const MinusIcon = target.querySelector(".minus-icon")
  
      const isExpanded = target.classList.toggle("accordion-expand");
  
      if (isExpanded) {
        accordionItems.forEach((item) => {
          if (item !== target) {
            item.classList.remove("accordion-expand");
            item.querySelector(".faq-answer").style.display = "none";
            item.querySelector(".faq-wrapper").classList.remove("active");
            item.querySelector(".plus-icon").style.display="block";
            item.querySelector(".minus-icon").style.display="none";
          }
        });
        answer.style.display = "block";
        wrapper.classList.add("active");
        PlusIcon.style.display ="none";
        MinusIcon.style.display= "block"
      } else {
        answer.style.display = "none";
        wrapper.classList.remove("active");
          PlusIcon.style.display ="block";
        MinusIcon.style.display= "none";
      }
    };
  });
  
  //This is the JS file