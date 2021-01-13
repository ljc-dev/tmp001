import { useEffect, useRef } from "react"

function useAutoScrollToTop() {
  useEffect(() => {
    //bug in firefox => scrollbar isn't reset. Only happens when coupled with overflow hidden toggle

    window.scrollTo(0, 0)
  }, [])
}

function useScrollToTop() {
  const scrollToTopRef = useRef(null)

  useEffect(() => {
    document.addEventListener("scroll", () => handleScroll(scrollToTopRef))
    return () => document.removeEventListener("scroll", () => handleScroll(scrollToTopRef))
  }, [])

  return { scrollToTopRef, handleScrollToTop }
}

function handleScrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

function handleScroll(scrollToTopRef) {
  if (!scrollToTopRef.current) return
  const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const scrollTop = document.documentElement.scrollTop
  // console.log("scroll", scrollTop, scrollTotal)
  if ((scrollTop / scrollTotal) > 0.4) {
    if (scrollToTopRef.current.classList.contains("hidden")) {
      scrollToTopRef.current.classList.remove("hidden")
    }
    setTimeout(() => {
      if (scrollToTopRef.current.classList.contains("opacity-0")) {
        scrollToTopRef.current.classList.remove("opacity-0")
      }
    }, 100)
  } else {
    if (!scrollToTopRef.current.classList.contains("opacity-0")) {
      scrollToTopRef.current.classList.add("opacity-0")
      setTimeout(() => {
        scrollToTopRef.current.classList.add("hidden")
      }, 300)
    }
  }
}

export {
  useScrollToTop, useAutoScrollToTop,
}