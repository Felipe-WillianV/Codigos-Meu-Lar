function isMobile() {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    }

    document.addEventListener('DOMContentLoaded', function() {
       
    var whatsappLink = document.getElementById('whatsapp-link');
        
       if (whatsappLink) {
            if (isMobile()) {
               
                whatsappLink.href = "whatsapp://send?phone=5511920197375";
            } else {
               
                whatsappLink.href = "https://web.whatsapp.com/send?phone=5511920197375";
            }
        }
    });