$(".contact__form").submit((e) => {

    console.log('form submitting')
    e.preventDefault();
    let label_name = document.querySelector('#label_name');
    let label_email = document.querySelector('#label_email');
    let label_content = document.querySelector('#label_content');
    
    
    let name = document.querySelector('.class_name').value;
    let mail = document.querySelector('.class_email').value;
    let btn = document.querySelector('#submit_btn');
    // let message = document.querySelector('.class_content').value;
let regex =  /^[a-zA-Z ]{2,30}$/;
    if(name.length < 20 && regex.test(name)){

        console.log(name);
        console.log(mail);
        label_name.innerHTML ="";
        let pattern =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (pattern.test(mail)) {
            btn.value = "submitting";

            $.ajax({
                url: "https://script.google.com/macros/s/AKfycbyq8m-afN2dqi5-_CyXWKF5R7Bm8jQEe2b3AbpLeYYrn86NiFcV9gLtV121RnFXLVTR/exec",
                data: $(".contact__form").serialize(),
                method: "post",
                success: function (response) {
                    alert("Form submitted successfully");
                    window.location.reload();
                    //window.location.href="https://google.com"
                },
                error: function (err) {
                    alert("Something Error");
                }
            });
            

            
        } else {
            label_email.innerHTML ="please enter a valid email";
        }
    }else{
        label_name.innerHTML ="name length must be less than 20 and cannot be blank";
    }
    
});