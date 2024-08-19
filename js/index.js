document.addEventListener("DOMContentLoaded", function() {
    const project_divs = document.querySelectorAll(".col-4")
    project_divs.forEach(function(project_div) {
        if (project_div.style.display != 'none') {
            project_div.onclick  = function() {
                window.location.href = `project_page/${project_div.dataset.projectName}.html`
            }
        }
    })
    document.querySelector("#project-link").style.display = "none"
})
