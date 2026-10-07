fetch(`https://api.github.com/users/2BUltraViolet/repos?per_page=100&sort=pushed`)
  .then(r => {
    if (!r.ok) throw new Error(`API error: ${r.status}`);
    return r.json();
  })
  .then(repos => {
    document.getElementById("repos").innerHTML = repos
      .filter(r => !r.fork)
      .map(r => `
        <div class="repo">
          <h2><a href="${r.html_url}">${r.name}</a></h2>
          <p>${r.description || "No description"}</p>
        </div>
      `).join("");
  })
  .catch(() => {
    document.getElementById("repos").innerHTML = `
      <div class="repo">
        <h2>Unable to load repositories</h2>
        <p>Something went wrong fetching with the GitHub API.</p>
        <p>View my <a href="https://github.com/2BUltraViolet">GitHub</a> instead.</p>
      </div>
    `;
  });