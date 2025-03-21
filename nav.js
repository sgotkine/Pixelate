(function() {
    
    // these lines look for items in the html and store them in variables
    // for the script to use later when the button is clicked

    const toggleMenuButton = document.querySelector('[data-menu-button]');
    const menu = document.querySelector('[data-menu]');
    const navIconClosed = document.querySelector('[data-menu-button-closed]');
    const navIconOpen = document.querySelector('[data-menu-button-open]');

    // this is a button script to handle a click
  
    toggleMenuButton.addEventListener('click', function() {
      // find out if the menu is open or not
      let expanded = this.getAttribute('aria-expanded') === 'true' || false;
      // change the aria-expanded attribute to true if false, and false if true (good for screenreaders)
      this.setAttribute('aria-expanded', !expanded);
      // toggle visibility of the menu
      menu.hidden = !menu.hidden;
      // check which icon to show in the burger menu - a cross or the 3 lines
      if(expanded) {
        navIconClosed.style.display = "block";
        navIconOpen.style.display = "none";
      } else {
        navIconClosed.style.display = "none";
        navIconOpen.style.display = "block";
      }
    });
    
    // this sets things up when the page loads to hide the cross icon and hide the menu
    menu.hidden = true;
    navIconOpen.style.display = "none";
  })()