function isMobile() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

var whatsappLink = document.getElementById('whatsapp-link');

if (isMobile()) {
    whatsappLink.href = "whatsapp://send?phone=5511920197375";
}