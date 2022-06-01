import { render } from "@testing-library/react"
import axios from "axios"
import { Component } from "react"
import { Link } from "react-router-dom"
import { Tombol } from "../lib/button"


class App extends Component {

    constructor(props) {
        axios.get('http://localhost:5000/api/v1/profile').then(e => this.updateProfile(e.data))
        axios.get('http://localhost:5000/api/v1/jabatan').then(j=> this.updateState(j.data))

        super(props)
        // Set initial state 
        this.state = { profile:[] , jabatan:[]}

        // Binding this keyword 
        this.updateProfile = this.updateProfile.bind(this)
        this.updateJabatan = this.updateJabatan.bind(this)
    }

    updateProfile(f) {
        // Changing state 
        this.setState({
            profile:
                f
        })
    }
    updateJabatan(j){
        this.setState({
            jabatan:j
        })
    }

    render() {
        return (
            <div >
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">Pengurus</h1>
                        <div className="btn-toolbar mb-2 mb-md-0">
                            <div className="btn-group me-2">
                                <Tombol title={'Tambah'} warna={'primary'}/>
                            </div>
                        </div>
                    </div>
                    <div >
                    <table className="table table-striped " style={{width: '3000'}}>
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

                            {this.state.profile.map(e => {
                                return (
                                    <tr key={e.nim}>
                                        <td >{e.nim}</td>
                                        <td>{e.namaDepan}</td>
                                        <td >{e.namaBelakang}</td>
                                        <td >{e.alamat}</td>
                                        <td >{e.tempatLahir}</td>
                                        <td >{e.tanggalLahir}</td>
                                        <td >{e.jenisKelamin}</td>
                                        <td >{e.nomorHp}</td>
                                        <td >{e.tahunAngkatan}</td>
                                        <td >{e.fotoKtp}</td>
                                        <td >{e.fotoProfile}</td>
                                        <td>
                                            <Tombol title={"Edit"} warna={'success'}/>
                                            <Tombol title={"Hapus"} warna={'danger'}/>
                                        </td>

                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    </div>
                </main>
            </div>
        )
    }
}

function Pengurus() {
    return (
        <App />

    )




}
export { Pengurus }


var nama = "malik"

// Map / Objek memiliki uniqe key , ex : keluarga.pertama hasilnya "agus"
var keluarga = {
    "pertama":"agus",
    "kedua": "ita",
    "ketiga": "dony"
}

var umur = 36

var isiKamar1="kulkas"
// Dipanggil sesuai no index mulai dari 0
var isiKamar = ["kulkas", "lemari", "kipa"]

var sudahMandi = true


var data = [
    {
        "nama": "malik",
        "umur": 36
    },
    {
        "nama": "bagas",
        "kawin": false
    }
]

var data = {
    "nama": "malik",
    "data": [
        {
            "asal": "jawa"
        }
    ]
}