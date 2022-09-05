document.querySelectorAll('.button')
.forEach(function(obj)
{
    obj.addEventListener('click',function()
    {
        this.style.backgroundColor = "red";
        this.style.color = "black";
        setTimeout(()=>{
            this.style.color = "white";
            this.style.backgroundColor = "#1e90ff";
        },200 );
    })
})
const reg = document.getElementById('REGISTRATION');
reg.addEventListener('click',function()
{
    const FormReg = document.getElementById('REGFORM');
    FormReg.scrollIntoView(false);
})


