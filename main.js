

const toastMessage = document.getElementById('toastMessage')
console.log(toastMessage)



function getToastMessage ({type,
    heading,
    title,
    duration}) {
    if(toastMessage){
        const toast = document.createElement('div')
        
        toast.classList.add('toast', `toast-${type}`)
        toast.style.animation =`slidein linear 0.5s,hide linear 1s ${duration}s forwards;`
        const autoRemove = setTimeout (() =>{
            toastMessage.removeChild(toast)
            },5000)       
        const icons ={
            success: 'fa-regular fa-circle-check',
            info: 'fa-solid fa-circle-info',
            warning: 'fa-solid fa-circle-info',
            error: 'fa-solid fa-triangle-exclamation',
        }
       
            
            
        toast.onclick = function (e){
            if(e.target.closest('.toast__close')){
                toastMessage.removeChild(toast)
                clearTimeout(autoRemove)
            }
         
        } 
        const icon = icons[type]
        toast.innerHTML =`
            <div class=" toast-icon">
                <i class="${icon}"></i>
           </div>
            <div class=" toast__body">
                 <h3 class="toast__heading">${heading}</h3>
                 <p class="toast__tiitle">${title}</p>
           </div>
             <div class=" toast__close">
                  <i class="fa-regular fa-circle-xmark"></i>
            </div>
        
        `;
        toastMessage.appendChild(toast)
        
        
    }

}

// Lăngs nghe sự kiên vào 2 button success và error
btnToast = document.getElementById('btnToast')
const btnSuccess  = btnToast.querySelector('.btn.success')
console.log(btnSuccess)

const btnError = btnToast.querySelector('.btn.error')
console.log(btnError)

//  Lắng nghe sự kiện khi click vào nút close




btnSuccess.addEventListener('click',() =>{

getToastMessage({
    type:'success',
    heading:'Success',
    title:'Bạn đã đăng nhập thành công tài khoản taị F8',
    duration : 5000

})

})


btnError.addEventListener('click',() =>{
    getToastMessage({
        type:'error',
        heading:'Error',
        title:'Đăng nhập thất bại vui lòng liên hệ quản trị viên',
        duration : 5000
    
    })


})

        
