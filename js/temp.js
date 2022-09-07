document.querySelectorAll('.button')
.forEach(function(obj)
{
    obj.addEventListener('mousedown',function()
    {
        this.style.backgroundColor = "red";
        this.style.color = "black";
        /*setTimeout(()=>{
            this.style.color = "white";
            this.style.backgroundColor = "#1e90ff";
        },200 );*/
    })
})
document.querySelectorAll('.button')
.forEach(function(obj)
{
    obj.addEventListener('mouseup',function()
    {
        this.style.backgroundColor = "#1e90ff";
        this.style.color = "white";
        
        
        /*setTimeout(()=>{
            this.style.color = "white";
            this.style.backgroundColor = "#1e90ff";
        },200 );*/
    })
})

document.querySelectorAll('.button').forEach((el)=>{
    el.addEventListener('mouseover',function(event){
        const obj = event.target;
        obj.innerHTML = `Добавить в список товаров `;
    el.addEventListener('mouseout',function(event){
        const obj = event.target;
        obj.innerHTML = `Купить`;
    })
    })
})


const reg = document.getElementById('REGISTRATION');
reg.addEventListener('click',function()
{
    const FormReg = document.getElementById('REGFORM');
    FormReg.scrollIntoView({behavior: 'smooth'});
})

const form = document.forms.main;
const Login = form.LogIn;
const LoginPlaceholder = Login.placeholder;
console.log(LoginPlaceholder);
/*Часть с логином, которую нужно будет перенести на оставшиеся формы */
Login.addEventListener('focus',function(e)
{
    Login.placeholder = " ";
})
Login.addEventListener('blur',function(e)
{
    Login.placeholder = LoginPlaceholder;
})

Login.addEventListener("input",function(e)
{
    console.log(`value ${Login.value}`)
})

const Tele = form.FieldTelephone;
const TelePlaceholder = Tele.placeholder;
Tele.addEventListener('focus',function(e)
{
    Tele.placeholder = " ";
})
Tele.addEventListener('blur',function(e)
{
    Tele.placeholder = TelePlaceholder;
})
const MaxTeleNumber = Tele.getAttribute('maxlength');
const TeleSpan = document.querySelector('.telespan')
console.log(TeleSpan)
console.log(MaxTeleNumber)

Tele.addEventListener("input",function(e){
    console.log(`value ${Tele.value.length}`);
    const count = `Осталось ввести ${MaxTeleNumber - Tele.value.length}`;
    TeleSpan.innerHTML = count;
    TeleSpan.style.color = "green"; 

})

