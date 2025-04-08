const personalDetails= document.querySelector('.personal_details')
personalDetails.addEventListener("submit",(e)=>{
    e.preventDefault()
    const chooseQuestion= document.querySelector('#chooseQuestion')
    const selectedValue=  chooseQuestion.value ;
    if(selectedValue==='Yes'){
        window.location.href="/Yes_link_page/choose_yes.html"
    }else{
        alert("ThankYou For Visiting")
        window.location.href="https://www.google.com/"

    }
})
