    document.getElementById("signupButton").addEventListener("click",function(){
        document.body.style.background = "rgba(0, 0, 0, 0.7)";
        document.querySelector(".bg-model").style.display = "flex";
    });

    document.querySelector(".close").addEventListener("click",function(){
        document.querySelector(".bg-model").style.display = "none";
         document.body.style.background = "none";
    });

    
    function signUpData(e){
        
        e.preventDefault();

        let userData = document.getElementById("signUPForm");

        const name = userData.name.value;
        const email = userData.email.value;
        const password = userData.password.value;

        console.log(name, email, password);

        document.querySelector(".bg-model").style.display = "none";
        document.body.style.background = "none";

        document.body.style.background = "rgba(0, 0, 0, 0.7)";
        document.querySelector(".bg-model_login").style.display = "flex";

        document.querySelector(".close2").addEventListener("click", function () {
            console.log("**")
            document.querySelector(".bg-model_login").style.display = "none";
            document.body.style.background = "none";
        });
        
    }

     