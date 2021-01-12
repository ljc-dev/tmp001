
function removeValidOrNotMarker(e) {
  if (e.target.classList.contains("ring")) {
    e.target.classList.remove("ring")
    e.target.classList.remove("ring-red-400")
    e.target.classList.remove("bg-red-50")
  }
}

function checkInputValidity(e) {
  const isValid = e.target.checkValidity()
  if (!isValid) {
    e.target.classList.add("ring")
    e.target.classList.add("ring-red-400")
    e.target.classList.add("bg-red-50")
  } else {
    e.target.classList.remove("ring")
    e.target.classList.remove("ring-red-400")
    e.target.classList.remove("bg-red-50")
  }
}

export {
  checkInputValidity, removeValidOrNotMarker,
}