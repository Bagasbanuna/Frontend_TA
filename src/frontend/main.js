import { Berita, Pengumuman } from "./pengumuman"
import { Navbar } from "./navbar"
import { StrukturOrganisasi } from "./stuktur_organisasi"

function PengertianImmuki() {
  return (
    <div>
      <div class="p-4 p-md-5 mb-4 text-white rounded bg-dark">
        <div class="col-md-6 px-0">
          <h1 class="display-4 fst-italic">IMMUKI</h1>
          <p class="lead my-3">
            IMMUKI atau Ikatan Mahasiswa Muslim INSTIKI adalah sebuah organisasi yang bergerak dalam bidang agama
            sebagai wadah menuntun ilmu dan pelajaran mengenai agama islam yang memiliki visi dan misi sebagai berikut :
          </p>
          <p class="lead mb-0">VISI: Pokoknya itu</p>
          <p class="lead mb-0">MISI: Ya itu</p>

        </div>
      </div>
    </div>
  )
}

function Main() {
  return (
    <div>
      <main class="container">
        <PengertianImmuki/>
        <Pengumuman />
        <StrukturOrganisasi />
      </main>

    </div>
  )
}
export { Main }