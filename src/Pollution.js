export default function Pollution(){
    return(
        <>
        <div className="p">
        <div className="pcontainer">
            <form action="">
                <div className="pinput_box">
            <label htmlFor="pno">Pollution Certificate Number</label>
            <input type="text" />
            </div>
            <div className="pinput_box">
            <label htmlFor="IDate">Issue Date</label>
            <input type="date" />
            </div>
            <div className="pinput_box">
            <label htmlFor="EDate">Expiry Date</label>
            <input type="date" />
            </div>
            </form>
        </div>
        </div>
        </>
    );
}