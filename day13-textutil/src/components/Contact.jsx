/* eslint-disable react/prop-types */
export default function Contact(props) {
    let mystyle = {
        color:'#fff'
    }
    let mystyle2 = {
        color:'#000'
    }
    return (
        <div className="main">
            <div className="container my-5">
                    <h1 className="text-center" style={props.mode==='dark'?mystyle:mystyle2}>Contact Me</h1>
                    <div className="info text-center">
                        <p style={props.mode==='dark'?mystyle:mystyle2}>
                        Created by : Rahul Meena<br/>
                        Email Address : rahul.meena9695@gmail.com<br/>
                        Github link : <a target="_blank" rel="noreferrer" href="https://github.com/rahul9695">https://github.com/rahul9695</a>
                        </p>
                    </div>
            </div>
        </div>
    )
}
