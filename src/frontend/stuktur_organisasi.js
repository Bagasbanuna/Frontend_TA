import { Berita } from "./berita"

function AlbumSO() {
    return (
        <div class="container">
            <div class="col">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                <div class="card-body">
                    <p class="card-text">Jabatan :</p>
                    <p class="card-text">Nama :</p>
                    <p class="card-text">Motivasi :</p>
                    <div class="d-flex justify-content-between align-items-center">
                    </div>
                </div>
            </div>
        </div>

    )
}

function StrukturOrganisasi() {
    return (
        <div>
            <div class="row g-5">
                <div class="col-md-8">
                    <h3 class="pb-4 mb-4 fst-italic border-bottom">
                        Struktur Organisasi
                    </h3>

                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <AlbumSO />
                        <AlbumSO />
                        <AlbumSO />
                        <AlbumSO />
                        <AlbumSO />
                        <AlbumSO />
                        <AlbumSO />
                        <AlbumSO />
                        <AlbumSO />
                        <AlbumSO />
                        <AlbumSO />
                        <AlbumSO />


                    </div>
                </div>

                {/* BERITA */}
                <Berita/>

            </div>
        </div>
    )
}

export { StrukturOrganisasi }