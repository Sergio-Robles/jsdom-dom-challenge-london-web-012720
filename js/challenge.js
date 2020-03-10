const counter = document.getElementById("counter") 
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const heart = document.getElementById("heart")
const pause = document.getElementById("pause")
const likes = document.querySelector(".likes")
const comment = document.getElementById("comment-input")


const startCounter = () => setInterval(function(){ counter.innerText ++; }, 1000);

const handleLikeButton = ()=>{
    let list = document.createElement("li")
    list.innerText = `${counter.innerText} has been liked`
    likes.append(list)
}

const resumeButton = (counter)=>{

    if (pause.innerText == "pause"){
        clearInterval(counter)
        minus.disabled = true;
        plus.disabled = true; 
        heart.disabled = true;
        pause.innerText = "resume"
    }else {
        minus.disabled = false;
        plus.disabled = false; 
        heart.disabled = false;
        pause.innerText = "pause"
        return startCounter()
    }
        
}


run = () => {
    let start = startCounter()

    minus.addEventListener("click", ()=> counter.innerText --)

    plus.addEventListener("click", ()=> counter.innerText ++ )

    heart.addEventListener("click", ()=>handleLikeButton())

    pause.addEventListener("click", ()=> start = resumeButton(start))

}

document.addEventListener('DOMContentLoaded', run)





