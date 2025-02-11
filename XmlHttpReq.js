
document.addEventListener('DOMContentLoaded',run);

function run(){
    document.querySelector('button').addEventListener('click', deleteBody);
}

function deleteBody(event){
    document.querySelector('body').remove();
    setTimeout(getNewBody,1000);
}

function getNewBody(){
    // const xhr = new XMLHttpRequest();
    console.log($("#scholar").load("./req-page.php"));
    // xhr.open('GET', 'https://scholar.google.com/citations?user=Aj2-v14AAAAJ&hl=en');

    // xhr.onreadystatechange=function() {
    //     if(this.readyState===4 && this.status ===200)
    //     {   
    //         const new_page = this.responseText;
    //         const page = new DOMParser().parseFromString(new_page,'text/html');
    //         document.querySelector('html').appendChild(page.body);
    //         console.log(document.body);
    //     }
            
        
    // };
    // xhr.send();
}