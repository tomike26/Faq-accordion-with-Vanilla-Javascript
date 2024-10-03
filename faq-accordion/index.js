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
    const MinusIcon = target.querySelector(".minus-icon");

    const isExpanded = target.classList.toggle("accordion-expand");

    if (isExpanded) {
      accordionItems.forEach((item) => {
        if (item !== target) {
          item.classList.remove("accordion-expand");
          item.querySelector(".faq-answer").classList.remove("open");
          item.querySelector(".faq-answer").style.maxHeight = null;
          item.querySelector(".faq-wrapper").classList.remove("active");
          item.querySelector(".plus-icon").style.display = "block";
          item.querySelector(".minus-icon").style.display = "none";
        }
      });

      answer.classList.add("open");
      answer.style.maxHeight = answer.scrollHeight + "px"; 
      wrapper.classList.add("active");
      PlusIcon.style.display = "none";
      MinusIcon.style.display = "block";
    } else {
      answer.classList.remove("open");
      answer.style.maxHeight = null; 
      wrapper.classList.remove("active");
      PlusIcon.style.display = "block";
      MinusIcon.style.display = "none";
    }
  };
});
