let statusData=[{dp:'profile9.jpg',status:'meric-dagli-xmZ7nuqK7kg-unsplash.jpg'},{dp:'masjid-wazir-khan-lahore-pakistan,2439788.jpg',status:'profile10.jpg'},{dp:'profile8.jpg',status:'landscape_photography_tips_featured_image_1024x1024.webp'},
    {dp:'pexels-adriaan-greyling-752035.jpg',status:'profile13.jpg'},{dp:'profile6.jpg',status:'profile19.jpg'},{dp:'profile17.jpg',status:'profile16.jpg'}
    ,{dp:'profile4.jpg',status:'profile8.jpg'},{dp:'profile5.jpg',status:'profile11.jpg'},{dp:'profile6.jpg',status:'profile13.jpg'}
]
let merastatus={          
    dp:'profile10.jpg',
    status:{
        mime_type:null,
        data:null,

    }
};
let usersstatus='';
let otherstatus=document.querySelector("#otherstatus");
let mystatus=document.querySelector("#mystatus");

//Adding the Status Holder Names as well as their status addition timing..
let statusholdernames=["Mehwish","Uzair","Sabir","G Tech","Abdullah","Abubakar Soft Eng.","Rauf Bhai","Elon Bhia","Zuckerberg"];
let statustiming=["Yesterday","2:01 AM","5:00 PM","7:00 AM","4:45 AM","8:56 PM","5:33 AM","8:23 PM","1:22 PM"];
let idx=0;
mystatus.innerHTML=`<div id='parent'>
<div id='mystatusicon' class="icon">
                  <img  src="profile8.jpg" alt="" />
                  <input id='addstatusinput' type="file"  hidden/>
                  <button id='addstatusbtn'>
 <svg width="18" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#007AFF"/>
<path d="M9.88338 4.00673L10 4C10.5128 4 10.9355 4.38604 10.9933 4.88338L11 5V9H15C15.5128 9 15.9355 9.38604 15.9933 9.88338L16 10C16 10.5128 15.614 10.9355 15.1166 10.9933L15 11H11V15C11 15.5128 10.614 15.9355 10.1166 15.9933L10 16C9.48716 16 9.06449 15.614 9.00673 15.1166L9 15V11H5C4.48716 11 4.06449 10.614 4.00673 10.1166L4 10C4 9.48716 4.38604 9.06449 4.88338 9.00673L5 9H9V5C9 4.48716 9.38604 4.06449 9.88338 4.00673L10 4L9.88338 4.00673Z" fill="white"/>
</svg>
</button>
</div>
<div id='addstatustext'>
<p>My Status</p>
<p class='timing'>Tap to add a status update</p>
</div>
</div>
`

statusData.forEach(function(user,index){
    usersstatus += `
    <div id='parent'>
    <div class="icon"><img id="${index}" src="${user.dp}" alt="">
     </div>
     <div id="personDetails"><p class="usernametext">${statusholdernames[idx]}</p><p class='timing'>${statustiming[idx]}</p></div>
    </div>
      `
      idx++;
      ;
})
otherstatus.innerHTML=usersstatus;



let mystatusscreen=document.querySelector("#my-full-screen");
let userfullscreen=document.querySelector("#user-full-screen");
let statusquotes=['Ever tried ever failed, no matter try again fail again fail better.','Dont ask me about my success ,let me tell you about my failures','No one but Talha can make Change','Restart,Refocus but never give up','When you know , where you have to go, you have achieved half of the milestone','You are far more stronger than your emotions','No one but Talha can make Change','When you know , where you have to go, you have achieved half of the milestone','You are far more stronger than your emotions'];
otherstatus.addEventListener("click",function(evt){
   let statusidx=statusData[evt.target.id].status;
   userfullscreen.style.display='block';
   userfullscreen.style.backgroundImage=`url(${statusidx})`;
   userfullscreen.style.display=`flex`;
   userfullscreen.style.flexDirection=`row`;
   userfullscreen.style.alignItems=`flex-end`;
   userfullscreen.style.justifyContent=`center`;
   userfullscreen.innerHTML=`<p>${statusquotes[evt.target.id]}</p>`;
   setTimeout(function(){
    userfullscreen.style.display='none';
   },10000)
})



let addstatubtn=document.querySelector("#addstatusbtn");
let addInput=document.querySelector("#addstatusinput");
let addstatustext=document.querySelector("#addstatustext");

addInput.addEventListener("change",function(e){
    let file=e.target.files[0];
    console.log(file);
    let reader= new FileReader();
   reader.readAsDataURL(file);
    reader.onload=(e)=>{  
 merastatus.status.data=e.target.result.split(",")[1];
 merastatus.status.mime_type=file.type;
 addstatubtn.style.display='none';
 addInput.style.display='none';
    }
    addstatustext.style.display='none';
  // let imageLocation=file.name;
    // statusData[0].status=imageLocation;
   

  
})


addstatubtn.addEventListener('click',function(){
addInput.click();
    
})


//Accessing the Status Data

//Adding UserStatus..
let img=new Image();
setTimeout(() => {
    
mystatus.addEventListener("click",function(){
    
    mystatusscreen.style.display='block';
    img.src=`data:${merastatus.status.mime_type};base64,${merastatus.status.data}`
    mystatusscreen.appendChild(img);
     addstatubtn.style.display='none';
     addInput.style.display='none';
    // setTimeout(() => {
    //     mystatusscreen.innerHTML='';
    //     let video=document.createElement('video');
    //     video.src='file (13) (online-video-cutter.com).mp4'
    //     video.setAttribute('autoplay',true,'muted',true)
    //     mystatusscreen.append(video);
    // }, 3000);
    setTimeout(()=>{
        mystatusscreen.style.display='none';

    },10000)
})

    
}, 3000);


//Objects bnai aur aun main data ko store kiya...
//object ky oopr forEach loop lagaya jo ky jitni objects thi autni bar chlaa...
//Loop ky har aik baar chlny pr myny aik string main harai bndy ka html dynically render karwaya> mtlb agr ds arrays of object main 10 objec hogii to 10 logo ka data dynamically render ho kr ky aay ga...
//Mtlb ab tk my string main jitni objects thi array main autny logo ka hi html dynically render hoa hay...
//Phir myny in logo ky data waly string ko append kiya parent div main jo ky pehly sy html main mojood tha..
 // parent.innerHTML=string(collection of dynamic html element)