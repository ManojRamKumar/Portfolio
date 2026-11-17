const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project");

filters.forEach(filter => {
  filter.addEventListener("click", () => {
    filters.forEach(btn => btn.classList.remove("active"));
    filter.classList.add("active");

    const selected = filter.dataset.filter;

    projects.forEach(project => {
      const match = selected === "all" || project.dataset.category === selected;
      project.classList.toggle("hidden", !match);
    });
  });
});
