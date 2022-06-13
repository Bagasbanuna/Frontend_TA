// import Popup from "reactjs-popup";

import Swal from "sweetalert2"
import { MyForm } from "./form"

// const Modal2 = () => (
//     <Popup trigger={<button className="button"> Open Modal </button>} modal>
//       <span className="bg-primary"> Modal content </span>
//     </Popup>
//   );

// function TombolModal() {
//     return (
//         <div>


//             <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
//                 Launch demo modal
//             </button>

//             <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className="modal-dialog" role="document">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
//                             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                                 <span aria-hidden="true">&times;</span>
//                             </button>
//                         </div>
//                         <div className="modal-body">
//                             ...
//                         </div>
//                         <div className="modal-footer">
//                             <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//                             <button type="button" className="btn btn-primary">Save changes</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//         </div>

//     )
// }

// // function IsiModal() {
// //     return (


// //     )
// // }
import ReactDOMServer from "react-dom/server";
import { Tombol } from "./button";
function MyModal() {
    return ( 

        Swal.fire({
            html: ReactDOMServer.renderToString(<MyForm items={['Judul', 'Tanggal', 'Keterangan', 'Gambar']}/>),
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Simpan',
            denyButtonText: `Jangan Simpan`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })

    )
}


export { MyModal }