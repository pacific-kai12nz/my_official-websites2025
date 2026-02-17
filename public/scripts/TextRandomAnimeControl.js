document.addEventListener("DOMContentLoaded", () => {
    function TextRandomAnimeControl() {
        document.querySelectorAll(".biograhy").forEach((el) => {
            let rect = el.getBoundingClientRect();
            let scrollTop = window.scrollY || document.documentElement.scrollTop;
            if (scrollTop + window.innerHeight > rect.top + scrollTop - 50) {
                el.classList.add("appearRandomtext");
            } else {
                el.classList.remove("appearRandomtext");
            }
        });
    }

    window.addEventListener("scroll", TextRandomAnimeControl);

    // ページロード時に文字を分割してアニメーションを適用
    document.querySelectorAll(".biograhy").forEach((el) => {
        let text = el.textContent;
        let newText = "";
        [...text].forEach((t) => {
            newText += `<span>${t}</span>`;
        });
        el.innerHTML = newText;
    });

    TextRandomAnimeControl();
});
