const sendBtn = document.getElementById("send-btn");
 
if (sendBtn) {
    sendBtn.addEventListener("click", function() {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const feedback = document.getElementById("form-feedback");
 
       
        if (name === "" || email === "" || message === "") {
            feedback.style.color = "#ff4d4d";
            feedback.textContent = "Vul alle velden in voor je verstuurt.";
            return;
        }
 
        
        feedback.style.color = "#00c2ff";
        feedback.textContent = "Bedankt " + name + "! Je bericht is ontvangen.";
 
        
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    });
}
 