window.addEventListener("load", () => {
  const loader = document.getElementById("loading-screen");
  
  setTimeout(() => {
    loader.classList.add("fade-out");
    
    setTimeout(() => {
      loader.style.display = "none";
    }, 1000);
  }, 2000);
});

window.addEventListener("load", () => {
  const fills = document.querySelectorAll(".progress-fill");
  fills.forEach(fill => {
    const width = fill.style.width;
    fill.style.width = "0";
    setTimeout(() => {
      fill.style.width = width;
    }, 925);
  });
});
