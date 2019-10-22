  <nav class="top-bar">
    <h1><a href="/">CodeRangers</a></h1>

    <section class="top-bar-section">
      <ul class="right">
        <%- if current_user -%>
          <li><%= link_to 'Sign Out', destroy_user_session_path, method: :delete %></li>
        <%- else -%>
          <li><%= link_to 'Sign Up', new_user_registration_path %></li>
          <li><%= link_to 'Sign In', new_user_session_path %></li>
        <%- end -%>
      </ul>
    </section>
  </nav>