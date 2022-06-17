import { Component } from "react";
import { Tombol } from "../lib/button";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Modal2, MyModal } from "../lib/modal";
import { MyForm } from "../lib/form";
import { FileUpload } from "./upload_file";

var User = [
  {
    Id: 3,
    title: "semnas",
    tanggal: "2020-11-01T00:00:00.000Z",
    keterangan: "user3",
    createAt: "2022-06-11T14:23:05.581Z",
    updateAt: "2022-06-13T15:49:26.964Z",
    status: "user3",
    userId: 3,
    files: [
      {
        Id: 1,
        file: "Seminar",
        createAt: "2022-06-13T15:34:24.768Z",
        rencanakerjaId: 3,
        jenisFileId: 1,
        gallery: [
          {
            Id: 1,
            gambar: "dgdgdghfh",
            filesId: 1,
          },
        ],
        jenisFile: {
          Id: 1,
          jenisFile: "LPJ",
          filesId: 1,
        },
      },
    ],
  },
];

var Status = [
  {
    id: 1,
    name: "On Progress",
  },
  {
    id: 2,
    name: "Accept",
  },
  {
    id: 3,
    name: "Done",
  },
  {
    id: 4,
    name: "Cencel",
  },
];

class RenjaByUser extends Component {
  constructor(props) {
    try {
      let adaUser = window.localStorage.getItem("user");
      let iniUser = JSON.parse(adaUser).Id;
      axios
        .get("http://localhost:5000/api/v1/rencanakerja-by-user/" + iniUser)
        .then((r) => {
          console.log(r.data);
          this.updateRenja(r.data);
        });

      axios.get("http://localhost:5000/api/v1/status-renja").then((e) => {
        console.log(e.data);
        this.updateStatus(e.data);
      });

      super(props);

      /**@type {User} */
      let Renja = [];
      /**@type {Status} */
      let StatusRenja = [];
      this.state = {
        Renja: Renja,
        StatusRenja,
      };

      this.updateRenja = this.updateRenja.bind(this);
      this.updateStatus = this.updateStatus.bind(this);
    } catch (error) {
      console.log("hahahah werror");
    }
  }

  updateRenja(a) {
    this.setState({
      Renja: a,
    });
  }

  updateStatus(b) {
    this.setState({
      StatusRenja: b,
    });
  }

  render() {
    return <IsiRenja state={this.state} />;
  }
}

const newStatus = {
  statusR: "",
};

function IsiRenja({ state }) {
  let nav = useNavigate();

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Rencana Kerja </h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2"></div>
        </div>
      </div>
      <div>
        <TambahRenja />

        <table className="table table-striped " style={{ width: "3000" }}>
          <thead>
            <tr>
              <th>Nama Pengurus</th>
              <th>Judul</th>
              <th>Tanggal Kegiatan</th>
              <th>Keterangan</th>
              <th>File</th>
              <th>Status</th>

              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {state.Renja.map((r) => {
              return (
                <tr key={r.Id}>
                  <td>{r.userId}</td>
                  <td>{r.title}</td>
                  <td>{r.tanggal}</td>
                  <td>{r.keterangan}</td>
                  <td>{r.file}</td>

                  <td>
                    <select
                      onChange={(c) => {
                        newStatus["statusR"] = c.target.value;
                        console.log(newStatus);
                      }}
                    >
                      {state.StatusRenja.map((e) => {
                        return <option key={e.id}>{e.name}</option>;
                      })}
                    </select>
                    <hr />
                    <Tombol
                      title={"Ganti"}
                      warna={"success"}
                      onClick={() => {
                        console.log(newStatus.statusR);

                        axios
                          .post("/status-renja/update", newStatus)
                          .then((e) => {
                            console.log(e);
                          });
                      }}
                    />
                  </td>
                  <td>
                    <div className="row">
                      <div className="col">
                        <Tombol title={"Edit"} warna={"success"} />
                      </div>
                      <div className="col">
                        <Tombol title={"Hapus"} warna={"danger"} onClick={() =>{
                          axios.delete('http://localhost:5000/api/v1/rencanakerja/delete')
                        }}/>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}

const Isi = {
  title: "",
  tanggal: "",
  keterangan: "",
  status: "",
  file: ""
};

function TambahRenja() {
  // getItem ganya untuk ambil data user saja
  let adaData = window.localStorage.getItem("user");
  let iniData = JSON.parse(adaData);

  return (
    <div>
      <details>
        <summary className="btn btn-primary">Tambah</summary>
        <div>
          <div>
            <label className="form-lebel">Judul</label>
            <input
              type={"text"}
              className="form-control"
              id="title"
              onChange={(e) => {
                Isi["title"] = e.target.value;
              }}
            ></input>
          </div>
          <div>
            <label className="form-lebel">Tanggal</label>
            <input
              type={"date"}
              className="form-control"
              id="tanggal"
              onChange={(e) => {
                Isi["tanggal"] = e.target.value;
              }}
            ></input>
          </div>
          <div>
            <label className="form-lebel">Keterangan</label>
            <input
              type={"text"}
              className="form-control"
              id="keterangan"
              onChange={(e) => {
                Isi["keterangan"] = e.target.value;
              }}
            ></input>
          </div>
          <hr />
          <FileUpload hasil={(e) => {
            Isi['file'] = e
          }}/>
          <hr/>

          <Tombol
            title={"Simpan"}
            warna={"info"}
            onClick={() => {
              Isi.userId = iniData["userId"];
              console.log(Isi);

              axios
                .post("http://localhost:5000/api/v1/rencanakerja", Isi)
                .then((e) => {
                  console.log(e);
                });
            }}
          />
        </div>
      </details>
    </div>
  );
}

{
  /* <MyForm
            items={["title", "tanggal", "keterangan"]}
            ketikaBerubah={() => {
              axios.post('http://localhost:5000/api/v1/rencanakerja', Isi).then((r) =>{
                console.log(r)
              })
            }}
          /> */
}

function RencanaKerja() {
  return <RenjaByUser />;
}

export { RencanaKerja };
