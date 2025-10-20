document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger-icon');
    const sidebar = document.getElementById('sidebar-menu');
    const desktopAuthLinks = document.getElementById('auth-links-desktop');
    const sidebarAuthLinks = document.getElementById('auth-links-sidebar');
    
    // --- 1. RESPONSIVE SIDEBAR TOGGLE LOGIC ---
    hamburger.addEventListener('click', () => {
        // Toggle the hamburger icon animation
        hamburger.classList.toggle('active'); 
        
        // Toggle the sidebar width for the smooth slide-in/out effect
        if (sidebar.style.width === '300px') {
            sidebar.style.width = '0'; // Slide out
        } else {
            sidebar.style.width = '300px'; // Slide in (Aesthetic width for mobile)
        }
    });

    // Close sidebar if user clicks outside of it (optional but good UX)
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !hamburger.contains(e.target) && sidebar.style.width === '300px') {
            sidebar.style.width = '0';
            hamburger.classList.remove('active');
        }
    });

    // --- 2. MOCK AUTHENTICATION LOGIC (Supabase/Vercel Ready) ---
    function checkAuthStatus() {
        // NOTE: In a real Supabase setup, you would check:
        // const { data: { user } } = await supabase.auth.getUser();
        
        // MOCK AUTH: For now, we use a simple flag in localStorage to simulate login.
        const isLoggedIn = localStorage.getItem('zest_user_logged_in') === 'true';

        // Set the appropriate links based on the mock status
        if (isLoggedIn) {
            // LOGGED IN VIEW
            const userName = localStorage.getItem('zest_user_name') || 'Account';
            
            // Desktop Links: Show Account, My Orders, Sign Out
            desktopAuthLinks.innerHTML = `
                <a href="account.html" class="nav-link" data-auth-desktop="account"><i class="fas fa-user"></i> ${userName}</a>
                <a href="myorders.html" class="nav-link desktop-only-links" data-auth-desktop="orders"><i class="fas fa-box"></i> My Orders</a>
                <a href="#" class="nav-link" data-auth-desktop="signout" onclick="signOut()">Sign Out</a>
            `;
            
            // Sidebar Links: Show Account, My Orders, Sign Out (inside the existing sidebar structure)
            sidebarAuthLinks.innerHTML = `
                <a href="account.html"><i class="fas fa-user"></i> My Account</a>
                <a href="myorders.html"><i class="fas fa-box"></i> My Orders</a>
                <a href="#" onclick="signOut()"><i class="fas fa-sign-out-alt"></i> Sign Out</a>
            `;

        } else {
            // LOGGED OUT VIEW
            
            // Desktop Links: Show Login/Sign Up
            desktopAuthLinks.innerHTML = `
                <a href="account.html" class="nav-link" data-auth-desktop="login"><i class="fas fa-sign-in-alt"></i> Login / Sign Up</a>
            `;

            // Sidebar Links: Show Login/Sign Up
            sidebarAuthLinks.innerHTML = `
                <a href="account.html"><i class="fas fa-sign-in-alt"></i> Login / Sign Up</a>
            `;
        }
    }

    // Function to simulate signing out
    window.signOut = function() {
        localStorage.removeItem('zest_user_logged_in');
        localStorage.removeItem('zest_user_name');
        // NOTE: In a real Supabase setup, you would call:
        // await supabase.auth.signOut();
        alert('You have been signed out.');
        checkAuthStatus(); // Update the navigation bar immediately
        if(window.location.pathname.endsWith('account.html')) {
             window.location.href = 'index.html'; // Redirect from account page if signed out
        }
    };
    
    // Function to simulate signing in (We will implement this fully on account.html later)
    window.mockSignIn = function(name) {
        localStorage.setItem('zest_user_logged_in', 'true');
        localStorage.setItem('zest_user_name', name || 'User');
        checkAuthStatus();
        alert(`Welcome, ${name || 'User'}! You are now logged in.`);
    };

    checkAuthStatus(); // Run on page load to set the correct links

});

// --- 3. WORKING SEARCH BAR MOCKUP ---
window.performSearch = function() {
    const query = document.getElementById('desktop-search').value.trim();
    if (query) {
        // In a real setup, this would query the Supabase 'products' table.
        // For now, we redirect to a mock search results page with the query.
        window.location.href = `search_results.html?q=${encodeURIComponent(query)}`;
    } else {
        alert('Please enter a search term.');
    }
}
