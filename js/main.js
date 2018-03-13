  $(document).ready(function(){
    $('#searchUser').on('keyup', function(e){
      let username = e.target.value;
      $.ajax({
        url:'https://api.github.com/users/'+username,
        client_id:'babf57b64af22e21a985',
        client_secret:'5c017ddebb2c33da64e15af708b7f7f5ec0fda50'
      }).done(function(user) {
        $('#profile').html(`
                <div class="card">
            <div class="card-header">
            ${user.name}
          </div>
          <div class="card-body">
          <div class="row">
          <div class="col-lg-3">
          <p class="lead">
            <img class="img-thumbnail avatar" src="${user.avatar_url}">
            </p>
            <p class="lead">
            <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View User</a>
            </p>
          </div>
          <div class="col-lg-9">
          <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
          <span class="badge badge-success">Public Gists: ${user.public_gists}</span>
          <span class="badge badge-warning">Followers: ${user.followers}</span>
          <span class="badge badge-info">Following: ${user.following}</span>
          <br><br>
          <ul class="list-group">
            <li class="list-group-item">Bio: ${user.bio}</li>
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Member Since: ${user.created_at}</li>
          </ul>
          </div>
          </div>
          </div>
        </div>
          `);
      });
    });
  });
