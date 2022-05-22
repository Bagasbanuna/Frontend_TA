import { Tombol } from "../lib/button";
import { Formulir, MyForm } from "../lib/form";


function TampilanProfile() {
    let hasil = {};
    return (
        <div className="container d-flex justify-content-end">
            <div className="col-sm-12 col-md-6 col-lg-4 card m-2 p-2">

                <h3>Profile</h3>
                <MyForm items={["NIM", "Nama Anggota", "Jurusan", "Tempat Lahir", "Tanggal Lahir", "Alamat", "Email", "No HP", "Tahun Ajaran"]} ketikaBerubah={(body) => { hasil = body }} />

                <div className="row m-auto">
                    <div className="col">
                        <Tombol title={"Edit"} warna={"success"}/>
                    </div>
                    <div className="col">
                        <Tombol title={"Simpan"} warna={"primary"} />
                    </div>
                </div>
            </div>
        </div>


    )
}
{/* <Formulir title={"email"} placeholder={"masukkan email"} onChange={(e) => console.log(e.target.value)}/>
<Formulir title={"password"} placeholder={"masukkan password"} onChange={(e) => console.log(e.target.value)}/> */}
{/* <button onClick={() => console.log(hasil)}>LIHAT</button> */}

export { TampilanProfile }