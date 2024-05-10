export default function Vehicle(){
    return(
        <>
        <div className="v">
        <div className="pcontainer">
            <form action="">
                <div className="pinput_box">
            <label htmlFor="rno">Vehicle registration Number</label>
            <input type="text" />
            </div>
            <div className="pinput_box">
            <label htmlFor="cno">Chassis Number</label>
            <input type="text" />
            </div>
            <div className="pinput_box">
            <label htmlFor="vmodel">Vehicle Model</label>
            <input type="text" />
            </div>
            <div className="pinput_box">
            <label htmlFor="ftype">Fuel Type</label>
            <input type="text" />
            </div>
            
            </form>
        </div>
        </div>
        </>
    );
}