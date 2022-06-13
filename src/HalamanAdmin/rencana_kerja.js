import { Component } from "react";
import { Tombol } from "../lib/button";
import axios from "axios";
import { Link } from "react-router-dom";
import { Modal2, MyModal } from "../lib/modal";

var User = [
  {
    Id: 1,
    username: "user1",
    email: "user1@gmail.com",
    password: "user1",
    createAt: "2022-05-10T15:24:30.177Z",
    updateAt: "2022-05-29T15:48:06.169Z",
    profile: {
      Id: 1,
      nim: 1,
      namaDepan: "namaDepan1",
      namaBelakang: "namaBelakang1",
      alamat: "alamat1",
      tempatLahir: "tempatLahir1",
      tanggalLahir: "tanggalLahir1",
      jenisKelamin: "jenisKelamin1",
      nomorHp: "nomorHp1",
      tahunAngkatan: 203,
      fotoKtp: "fotoKtp1",
      fotoProfile: "fotoProfile1",
      userId: 1,
      divisi: [
        {
          Id: 1,
          namaDivisi: "kaderisasi",
          profileId: 1,
        },
      ],
      jabatan: [
        {
          Id: 1,
          namaJabatan: "ketua",
          profileId: 1,
        },
      ],
      jurusan: [
        {
          Id: 1,
          namaJurusan: "ti-mdi",
          profileId: 1,
        },
      ],
    },
    kritiksaran: [
      {
        Id: 1,
        subjek: "Kamar mandi",
        komentar: "Jangan lupa bersihkan",
        userId: 1,
        User: {
          Id: 1,
          username: "user1",
          email: "user1@gmail.com",
          password: "user1",
          createAt: "2022-05-10T15:24:30.177Z",
          updateAt: "2022-05-29T15:48:06.169Z",
        },
      },
    ],
    rencanakerja: [
      {
        Id: 1,
        title: "Kajian Subuh",
        tanggal: "2022-04-01T00:00:00.000Z",
        keterangan: "Kajian diadakan di masjid",
        createAt: "2022-05-11T09:00:01.665Z",
        updateAt: "2022-05-11T09:00:01.666Z",
        status: "Pending",
        userId: 1,
        files: [
          {
            Id: 1,
            file: "LPJ Semnas",
            createAt: "2022-05-12T07:46:53.652Z",
            rencanakerjaId: 1,
            jenisFileId: null,
            gallery: [
              {
                Id: 1,
                gambar: "rewofkmmfqeofo",
                filesId: 1,
              },
            ],
            jenisFile: null,
          },
        ],
      },
    ],
  },
];



let adaUser = window.localStorage.getItem('user')
let iniUser = JSON.parse(adaUser).Id

console.log (iniUser)
class RenjaByUser extends Component {
  constructor(props) {
    axios
      .get("http://localhost:5000/api/v1/rencanakerja-by-user/"+iniUser)
      .then((r) => {
        console.log(r.data);
        this.updateRenja(r.data);
      });
    super(props);

    let Renja =[];
    this.state = {
      Renja: Renja,
    };

    this.updateRenja = this.updateRenja.bind(this);
  }

  updateRenja(a) {
    this.setState({
        Renja:a
    });
  }

  
  render(){
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                    </tr>

                </thead>
                
                <tbody>

                </tbody>
            </table>
        </div>
    )
  }
  
}

function RencanaKerja() {
    return(
        <RenjaByUser/>
    )
}

export { RencanaKerja };

// class Renja extends Component {
//   constructor(props) {
//     axios.get("http://localhost:5000/api/v1/userInclude").then((e) => {
//       console.log(e.data);
//       this.updateRenja(e.data);
//     });
//     super(props);

//     /**
//      * @type {User}
//      */
//     let Renja = [];
//     this.state = { Renja: Renja };

//     this.updateRenja = this.updateRenja.bind(this);
//   }

//   updateRenja(a) {
//     this.setState({
//       Renja: a,
//     });
//   }

//   render() {
//     return (
//       <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
//         <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
//           <h1 className="h2">Rencana Kerja </h1>
//           <div className="btn-toolbar mb-2 mb-md-0">
//             <div className="btn-group me-2"></div>
//           </div>
//         </div>
//         <div>
//           <Tombol
//             title={"Tambah"}
//             warna={"primary"}
//             onClick={() => {
//               MyModal();
//             }}
//           />

//           <table className="table table-striped " style={{ width: "3000" }}>
//             <thead>
//               <tr>
//                 <th>Nama Pengurus</th>
//                 <th>Judul</th>
//                 <th>Tanggal Kegiatan</th>
//                 <th>Keterangan</th>
//                 <th>Status</th>
//                 <th>Aksi</th>
//               </tr>
//             </thead>
//             <tbody>
//               {this.state.Renja.map((r) => {
//                 return (
//                   <tr key={r.Id}>
//                     <td>
//                       <div>{r.profile.namaDepan}</div>
//                       <br />
//                       <hr />
//                       <div>{r.rencanakerja.map((e) => {
//                         return (
//                             <div key={e.Id}>
//                                 {e.title}
//                             </div>
//                         )
//                       })}</div>
//                     </td>
//                     {/* <td>
//                       {r.rencanakerja.map((e) => {
//                         return <div key={e.Id}>{e.title}</div>;
//                       })}
//                     </td>
//                     <td>
//                       {r.rencanakerja.map((e) => {
//                         return <div key={e.Id}>{e.tanggal}</div>;
//                       })}
//                     </td>
//                     <td>
//                       {r.rencanakerja.map((e) => {
//                         return <div key={e.Id}>{e.keterangan}</div>;
//                       })}
//                     </td>
//                     <td>{r.status}</td> */}
//                     <td>
//                       <Tombol title={"Edit"} warna={"success"} />

//                       <Tombol title={"Hapus"} warna={"danger"} />
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </main>
//     );
//   }
// }
