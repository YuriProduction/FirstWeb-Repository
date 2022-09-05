console.log("Start");
const buttons = document.querySelector(".goods__description");
function Click()
{
    console.log("Click");
}

buttons.addEventListener("click",function (event)
{
    console.log(event.target)
    if (event.target.closest('.button'))
    {
        Click();
        console.log(event.target)
    }
})


