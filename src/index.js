document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("#create-task-form")
  form.addEventListener("submit", function (event) {
    event.preventDefault()
    console.log(event.target.querySelector("#new-task-description").value)
    form.reset()
  })
  })

