function Tombol({title, warna, className}){
    return (
        <div >
            <button className={`btn btn-${warna} ${className}`} >{title}</button>
        </div>
    )
}

export { Tombol }