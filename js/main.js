var mnhd = true;
var sdhd = true;
(function(){
    let nbt = document.getElementById("navbt");
    let sbt = document.getElementById("sidebt");
    let li = document.getElementById("navli");
    let sd = document.getElementById("cright");
    nbt.addEventListener("click", () => {
        if (mnhd)
            li.classList.add("show");
        else
            li.classList.remove("show");
        mnhd = !mnhd;
    });
    sbt.addEventListener("click", () => {
        if (sdhd) {
            sd.classList.add("show");
            sbt.classList.add("clicked");
        }
        else {
            sd.classList.remove("show");
            sbt.classList.remove("clicked");
        }
        sdhd = !sdhd;
    });
})();