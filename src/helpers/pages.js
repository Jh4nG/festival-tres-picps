export const scrollToElement = (element) => {
    const header = document
        .getElementById("header")
        .getBoundingClientRect().height;
    const el = document.getElementById(element);
    const y = el.getBoundingClientRect().top + window.pageYOffset - header;
    window.scrollTo({ top: y, behavior: "smooth" });
};
