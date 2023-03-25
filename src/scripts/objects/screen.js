const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `
                        <div class="info">
                            <img src="${user.avatarUrl}" alt="foto de perfil do usuario" />
                            <div class="data">
                                <h1>${user.name ?? 'Não possui nome cadastrado 😥'} </h1>
                                <p> ${user.bio ?? "Não possui bio cadastrada 😥"} </p>
                                <div class="container-midia">
                                    <div class="followers">
                                        <p id="follow-bold">Seguidores</p>
                                        <p>${user.followers ?? 'Não possui seguidores'}</p>
                                    </div>
                                    <div class="following">
                                        <p id="follow-bold">Seguindo</p>
                                        <p>${user.following ?? 'Este perfil ainda não segue alguém'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>`
        
        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url} target = "_blank">${repo.name}</a></li>`)

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                <h2>Repositórios</h2>
                <ul>${repositoriesItens}</ul>
            </div>`
        }
            
    },

    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export {screen}