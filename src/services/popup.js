export function showPopup(title, message) {

    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popupTitle");
    const popupMessage = document.getElementById("popupMessage");

    if (!popup || !popupTitle || !popupMessage) {
        console.error("Popup component not found.");
        return;
    }

    popupTitle.textContent = title;
    popupMessage.textContent = message;

    popup.classList.remove("hidden");
    popup.classList.add("flex");
}

export function hidePopup() {

    const popup = document.getElementById("popup");

    if (!popup) return;

    popup.classList.add("hidden");
    popup.classList.remove("flex");
}