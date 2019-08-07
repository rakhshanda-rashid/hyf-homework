class GitRepo {
    constructor(users) {
        this.users = users;
    }

    getUserRepo() {
        return this.users.map(user => 'https://api.github.com/search/repositories?q=user:' + user).map(url => fetch(url).then(response => response.json()));
    }

    renderUserRepo() {
        let gitRepoWrapper = document.getElementsByClassName('gitRepoWrapper')[0];
        let ul = document.createElement('ul');
        gitRepoWrapper.appendChild(ul);

        Promise.all(this.getUserRepo())
        .then(results => {
            results.forEach(user => {
                console.log(user);
                let userLi = document.createElement('li');
                ul.appendChild(userLi);
                userLi.innerHTML = user.items[0].owner.login;

                let innerUl = document.createElement('ul');
                userLi.appendChild(innerUl);

                user.items.forEach(repo => {
                    let repoLi = document.createElement('li');
                    innerUl.appendChild(repoLi);
                    repoLi.innerHTML = repo.name + ': ' + repo.html_url;

                });
            });
        });
    }
}

const gitRepo = new GitRepo(["benna100", "aina21", "fatemeh-pakpour", "Laila1222"]);
gitRepo.renderUserRepo();