document.addEventListener('DOMContentLoaded', function(){
    const name = document.getElementById('name');
    const avatar = document.getElementById('avatar');
    const username = document.getElementById('username');
    const repvalue = document.getElementById('repvalue');
    const follvalue = document.getElementById('follvalue');
    const follngvalue = document.getElementById('follngvalue');
    const url = document.getElementById('redlink');
    const endpoint = 'https://api.github.com/users/tligor'

    fetch(endpoint).then(function(response){
        return response.json();
    })
    .then(function(data){
        name.textContent = data.name;
        avatar.src = data.avatar_url;
        username.textContent = '@' + data.login;
        repvalue.textContent = data.public_repos;
        follvalue.textContent = data.followers;
        follngvalue.textContent = data.following;
        url.href = data.html_url;
    })
})