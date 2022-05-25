function Berita() {
    return (
        <div class="col-md-4">
            <div class="position-sticky" style={{ top: 2 }}>
                <div class="p-4 mb-3 bg-light rounded">
                    <h4 class="fst-italic">Berita</h4>
                    <div class="col">
                        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                        <div class="card-body">
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="p-4">
                    <h4 class="fst-italic">Archives</h4>
                    <ol class="list-unstyled mb-0">
                        <li><a href="#">January 2021</a></li>
                        <li><a href="#">February 2021</a></li>
                        <li><a href="#">March 2021</a></li>
                        <li><a href="#">April 2020</a></li>
                        <li><a href="#">May 2020</a></li>
                        <li><a href="#">June 2020</a></li>
                        <li><a href="#">July 2020</a></li>
                        <li><a href="#">August 2020</a></li>
                        <li><a href="#">September 2020</a></li>
                        <li><a href="#">October 2020</a></li>
                        <li><a href="#">November 2020</a></li>
                        <li><a href="#">December 2020</a></li>
                    </ol>
                </div>

                <div class="p-4">
                    <h4 class="fst-italic" id="medsos">Elsewhere</h4>
                    <ol class="list-unstyled">
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Youtube</a></li>
                    </ol>
                </div>
            </div>
        </div>

    )
}

export {Berita}