function App() {
  
  return (
    <>
      <header>
        <div class="logo_container">
            <a href="#"><img class="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home"/></a>
        </div>
        <nav class="nav_bar">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Studio <sup>New</sup></a>
        </nav>
        <div class="search_bar">
            <span class="material-symbols-outlined search_icon">search</span>
            <input class="search_input" placeholder="Search for products, brands and more"/>
        </div>
        <div class="action_bar">
            <div class="action_container">
                <span class="material-symbols-outlined action_icon">person</span>
                <span class="action_name">Profile</span>
            </div>

            <div class="action_container">
                <span class="material-symbols-outlined action_icon">favorite</span>
                <span class="action_name">Wishlist</span>
            </div>

            <a class="action_container" href="pages/bag.html">
                <span class="material-symbols-outlined action_icon">shopping_bag</span>
                <span class="action_name">Bag</span>
                <span class="bag-item-count">0</span>
            </a>
        </div>
    </header>
    <main>
        <div class="items-container">
        </div>
    </main>
    <footer>
        <div class="footer_container">
            <div class="footer_column">
                <h3>ONLINE SHOPPING</h3>

                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">Kids</a>
                <a href="#">Home & Living</a>
                <a href="#">Beauty</a>
                <a href="#">Gift Card</a>
                <a href="#">Myntra Insider</a>
            </div>

            <div class="footer_column">
                <h3>ONLINE SHOPPING</h3>

                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">Kids</a>
                <a href="#">Home & Living</a>
                <a href="#">Beauty</a>
                <a href="#">Gift Card</a>
                <a href="#">Myntra Insider</a>
            </div>

            <div class="footer_column">
                <h3>ONLINE SHOPPING</h3>

                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">Kids</a>
                <a href="#">Home & Living</a>
                <a href="#">Beauty</a>
                <a href="#">Gift Card</a>
                <a href="#">Myntra Insider</a>
            </div>
        </div>
        <hr />

        <div class="copyright">
            © 2023 www.myntra.com. All rights reserved.
        </div>
    </footer>
    </>
  )
}

export default App