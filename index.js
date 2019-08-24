

function getList(fn){
    fetch('https://api.github.com/users/yecapee/repos?oauth_token=71d03bf4402b1adbef28d0e147675e1141bb804d&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1566621916&oauth_nonce=9O5iNo&oauth_version=1.0&oauth_signature=wzX/nDkNKltMR5lc4L5y6DirPhg=')
    .then(function(response) {
      return response.json();
    })
    .then(fn);
}

function reload(){
    getList(list => {
        list.forEach(detail => {
            let node = document.createElement("LI");
            let description = document.createElement("div");
            let url = document.createElement("a");
            
            description.className='description';
            description.innerText = detail.description || '...';
            url.className = 'url';
            url.innerText = detail.url;
            url.href = url;

            node.innerText = detail.name.toUpperCase();
            node.appendChild(description);
            node.appendChild(url);

            document.getElementById('list').appendChild(node);
        })
    })
}

reload();

document.getElementById('list').addEventListener('scroll', function(e) {
    let list = e.target;
    if(list.scrollTop + list.clientHeight == list.scrollHeight){
        setTimeout(reload,500);
    }
});
    