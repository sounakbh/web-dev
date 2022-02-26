const NavigationSidebar = () => {
  return `
              <div class="list-group">
                  <a class="list-group-item" href="/">
                      <i class="fab fa-twitter"></i>
                  </a>
              <!-- continue the rest of the list -->
                  <a class="list-group-item" href="/">
                      <i class="fa fa-home"></i>
                      <span class="d-none d-xl-inline d-lg-none p-1"> Home</span>
                  </a>
                  <a class="list-group-item" href="/">
                      <i class="fa fa-bell"></i>
                      <span class="d-none d-xl-inline d-lg-none p-1"> Notifications</span>
                  </a>
                  <a class="list-group-item" href="/">
                      <i class="fa fa-envelope"></i>
                      <span class="d-none d-xl-inline d-lg-none p-1"> Messages</span>
                  </a>
                  <a class="list-group-item" href="/">
                      <i class="fa fa-bookmark"></i>
                      <span class="d-none d-xl-inline d-lg-none p-1"> Bookmarks</span>
                  </a>
                  <a class="list-group-item" href="/">
                      <i class="fa fa-list"></i>
                      <span class="d-none d-xl-inline d-lg-none p-1"> Lists</span>
                  </a>
  
                  <a class="list-group-item" href="/">
                      <i class="fa fa-user"></i>
                      <span class="d-none d-xl-inline d-lg-none p-1"> Profile</span>
                  </a>
                  <a class="list-group-item" href="/">
                      <i class="fas fa-circle"></i>
                      <span class="d-none d-xl-inline d-lg-none p-1"> More</span>
                  </a>
              </div>
              <div class="d-grid mt-2">
                  <a href="tweet.html"
                     class="btn btn-primary btn-block rounded-pill">
                      Tweet</a>
              </div>
      `;
};
export default NavigationSidebar;
