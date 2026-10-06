fetch(`https://api.github.com/users/purpleshadez/repos?per_page=100&sort=pushed`)
  .then(r => r.json())
  .then(repos => {
    document.getElementById("repos").innerHTML = repos
      .filter(r => !r.fork)
      .map(r => `
        <div class="repo">
          <h2><a href="${r.html_url}">${r.name}</a></h2>
          <p>${r.description || "No description"}</p>
        </div>
      `).join("");
  });
