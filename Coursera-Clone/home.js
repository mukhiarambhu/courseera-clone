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

        document.querySelector(".bg-model").style.display = "none";
        document.body.style.background = "none";

        let userData = document.getElementById("signUPForm");

        const name = userData.name.value;
        const email = userData.email.value;
        const password = userData.password.value;
        let userAllData;

      
           userAllData = {
               name,
               email,
               password
           };
            
       
        
        let arr;
        arr = localStorage.getItem("signUpData");

        if(arr==null){
            arr = [];
        }else{
            arr = JSON.parse(localStorage.getItem("signUpData"));
        }

        arr.push(userAllData);
        localStorage.setItem("signUpData", JSON.stringify(arr));
        

        document.body.style.background = "rgba(0, 0, 0, 0.7)";
        document.querySelector(".bg-model_login").style.display = "flex";

        document.querySelector(".close2").addEventListener("click", function () {
            document.querySelector(".bg-model_login").style.display = "none";
            document.body.style.background = "none";
        });
      
        }
        
     function productsearch(){
         const search =document.getElementById("search_box").value;
         console.log(search);
         if(search==="product"){
             window.location.href="allCourse.html";
         }
     }

        function userLogin(e) {
            e.preventDefault();

            let form = document.getElementById("login12");

            const username = form.email.value;
            const password = form.password.value;

            console.log(username, password);

            const userAllData = JSON.parse(localStorage.getItem("signUpData"));

            for(let i=0;i<userAllData.length;i++){
                let u = userAllData[i].email;
                let p = userAllData[i].password;
    
                if(u==username && p==password){
                    console.log("**");
                    document.querySelector(".bg-model_login").style.display = "none";
                    document.body.style.background = "none";

                    window.location.href = "afterlogin.html";
                    return;
                }
        }
        alert("Invalid Credentials");

        };
        
        
    


     