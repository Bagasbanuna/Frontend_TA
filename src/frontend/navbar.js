function Navbar() {
    return (
        <div className="">
            <nav class="navbar navbar-expand-lg navbar-light bg-info">
                <div class="collapse navbar-collapse m-2" id="navbarNav">
                    <ul class="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Pengumuman</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Struktur Organisasi</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Kritik dan Saran</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

function NewNavbar() {

    return (
        <div>
            <div class="container">
                <header class="blog-header py-3">
                    <div class="row flex-nowrap justify-content-between align-items-center">
                        <div class="col-4 pt-1">
                            <a class="link-secondary" href="#">Subscribe</a>
                        </div>
                        <div class="col-4 text-center">
                            <a class="blog-header-logo text-dark" href="#">IMMUKI</a>
                        </div>
                        <div class="col-4 d-flex justify-content-end align-items-center">
                            <a class="link-secondary" href="#" aria-label="Search">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><path d="M21 21l-5.2-5.2"></path></svg>
                            </a>
                            <a class="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
                        </div>
                    </div>
                </header>

                <div class="nav-scroller py-1 mb-2">
                    <nav class="nav d-flex justify-content-between">
                        <a class="p-2 link-secondary" href="#">HOME</a>
                        <a class="p-2 link-secondary" href="#">Pengumuman</a>
                        <a class="p-2 link-secondary" href="#">Struktur Organisasi</a>
                        <a class="p-2 link-secondary" href="#">Kritik dan Saran</a>
                        {/* <a class="p-2 link-secondary" href="#">Culture</a>
                        <a class="p-2 link-secondary" href="#">Business</a>
                        <a class="p-2 link-secondary" href="#">Politics</a>
                        <a class="p-2 link-secondary" href="#">Opinion</a>
                        <a class="p-2 link-secondary" href="#">Science</a>
                        <a class="p-2 link-secondary" href="#">Health</a>
                        <a class="p-2 link-secondary" href="#">Style</a>
                        <a class="p-2 link-secondary" href="#">Travel</a> */}
                    </nav>
                </div>
            </div>
        </div>
    )

}

export { Navbar , NewNavbar}