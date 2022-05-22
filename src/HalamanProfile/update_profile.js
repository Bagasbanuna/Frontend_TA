import { Tombol } from "../lib/button"
import { MyForm } from "../lib/form"

function UpdateProfile(){
    return (
        <div className="container d-flex justify-content-end">
            <div className="col-sm-12 col-md-6 col-lg-4 card m-2 p-2">
            <h3>Update Profile</h3>
                <MyForm items={["NIM", "Nama Anggota", "Jurusan", "Tempat Lahir", "Tanggal Lahir", "Alamat", "Email", "No HP", "Tahun Ajaran"]}/>

                <div className="row m-auto">
                    <div className="col">
                        <Tombol title={"Simpan"} warna={"primary"} />
                    </div>
                </div>

            </div>

        </div>
    )
}

export { UpdateProfile }