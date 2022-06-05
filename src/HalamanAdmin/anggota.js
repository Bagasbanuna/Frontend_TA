import axios from "axios"
import { Component } from "react"
import { Tombol } from "../lib/button"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { greeting: [] }
        this.updateState = this.updateState.bind(this)

        axios.get('http://localhost:5000/api/v1/profile').then(a => this.updateState(a.data))
    }
    updateState(b) {
        this.setState({
            greeting: b
        })
    }

    render() {
        return (
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Anggota</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group me-2">
                            {/* Hayo isi apa */}
                        </div>
                    </div>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>
                                NIM
                            </th>
                            <th>
                                Nama Depan
                            </th>
                            <th>
                                Nama Belakang
                            </th>
                            <th>
                                Alamat
                            </th>
                            <th>
                                Tempat Lahir
                            </th>
                            <th>
                                Tanggal Lahir
                            </th>
                            <th>
                                Jenis Kelamin
                            </th>
                            <th>
                                Nomor HP
                            </th>
                            <th>
                                Tahun Angkatan
                            </th>
                            <th>
                                Foto
                            </th>
                            <th>
                                Foto KTP
                            </th>
                            <th>
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.greeting.map(a => {
                            return (
                                <tr key={a.nim}>
                                    <td>
                                        
                                        <Tombol title={"Edit"} warna={'success'} />
                                        
                                        <Tombol title={"Hapus"} warna={'danger'} />
                                    </td>
                                    <td>{a.nim}</td>
                                    <td>{a.namaDepan}</td>
                                    <td >{a.namaBelakang}</td>
                                    <td >{a.alamat}</td>
                                    <td >{a.tempatLahir}</td>
                                    <td >{a.tanggalLahir}</td>
                                    <td >{a.jenisKelamin}</td>
                                    <td >{a.nomorHp}</td>
                                    <td >{a.tahunAngkatan}</td>
                                    <td >{a.fotoKtp}</td>
                                    <td >{a.fotoProfile}</td>
                                    
                                </tr>
                            )
                        })}
                    </tbody>

                </table>
                <canvas width={500} height={1000}></canvas>
            </main>

        )
    }


}


function Anggota() {
    return (
        <App />

    )
}
export { Anggota }