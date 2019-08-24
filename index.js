

function getList(fn){
    fetch('https://api.github.com/users/yecapee/repos?oauth_token=a5879b15a83af6de055e346203c2d456fe0644cb&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1566614303&oauth_nonce=IDB5tT&oauth_version=1.0&oauth_signature=R0xxJkOTow4/nSW1xAyS0pwpyGw=')
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
    